import fs from "fs/promises";
import { existsSync as fileExists } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import nunjucks from "nunjucks";
import prettier from "prettier";
import semver from "semver";
import loadProductConfig from "./lib/config.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

nunjucks.configure(path.join(__dirname, "templates"), { throwOnUndefined: true, autoescape: false });

/**
 * Loop through the config.yaml file and generate docs for every product/platform/supported version combination found.
 * @returns void
 */
const run = async () => {
  const products = await loadProductConfig(path.resolve(__dirname, "config.yaml"));

  for (let product of products) {
    for (let prodVersion in product.cpuArchitecturesForVersion) {
      const prodVersionDetail = product.cpuArchitecturesForVersion[prodVersion];
      await renderProdIndex(product, prodVersion, prodVersionDetail);
      for (let arch in prodVersionDetail) {
        const osArchDetail = prodVersionDetail[arch];
        await renderArchIndex(product, prodVersion, arch, osArchDetail);
        for (let os of osArchDetail) {
          await renderDoc(product, {name: os.name, arch}, prodVersion);
        }
      }
    }
  }

  return;
};


const transientLog = (message) => {
  if (process.stdout.clearLine) {
    process.stdout.clearLine();
    process.stdout.write("\r" + message);
  } else {
    console.log(message);
  }
};


const normalizeOSName = (name, version, display_name) => {
  if (version) return name + " " + version;

  const platformTransformations = [
    [/Rocky\/Alma Linux 8/, "AlmaLinux 8 or Rocky Linux 8"],
    [/ LTS .+/, ""],
    [/SUSE Linux Enterprise Server/, "SLES"],
  ];

  if (display_name)
    return platformTransformations.reduce(
      (result, trans) => result.replace(trans[0], trans[1]),
      display_name,
    );

  return name;
};

/**
 * Composes the code needed to render an index page for a product, given just a product, a product + version, or a product + version + OS list.
 * @param product The product we are generating an index for
 * @param version The version of the product to generate docs for
 * @param osArchitectures Collection of supported CPU architectures for Linux installs
 * @returns void
 */
const renderProdIndex = async (product, version, osArchitectures) => {
  console.log(
    `Starting index render for ${product.name}`
  );

  const template = findTemplate(
    product.name,
    version,
    null,
    null,
    "index",
  );

  if (template === false) {
    return;
  }

  console.log(`  using template "${template}"`);

  const context = {
    product: { name: product.name, version: version, versionMajor: getMajorVersion(version) },
    osArchitectures,
    outputType: "index",
  };

  try {
    await writeDoc(template, context);
  } catch (error) {
    console.error("[ERROR] An exception occurred. Details below:");
    console.error(error);
    process.exit(1);
  }
};

/**
 * Composes the code needed to render an index page for a product, given just a product, a product + version, or a product + version + OS list.
 * @param product The product we are generating an index for
 * @param version The version of the product to generate docs for
 * @param osArchitecture Specific CPU architecture for linux installs
 * @param osVersions OS versions supported for this architecture
 * @returns void
 */
const renderArchIndex = async (product, version, osArchitecture, osVersions) => {
  console.log(
    `Starting index render for ${product.name} on Linux ${ osArchitecture }`,
  );

  const template = findTemplate(
    product.name,
    version,
    osArchitecture,
    null,
    "index",
  );

  if (template === false) {
    return;
  }

  console.log(`  using template "${template}"`);

  const context = {
    product: { name: product.name, version: version, versionMajor: getMajorVersion(version) },
    arch: osArchitecture,
    osVersions,
    outputType: "index",
  };

  try {
    await writeDoc(template, context);
  } catch (error) {
    console.error("[ERROR] An exception occurred. Details below:");
    console.error(error);
    process.exit(1);
  }
};

/**
 * Composes the code needed to render a single installation docuement for a product/platform/version combination.
 * @param product The product name we are generating a template for
 * @param platform The platform and architecture we are generating docs for (e.g. { name: Centos 7, arch: x86_64 })
 * @param version The version of the product to generate docs for
 * @returns void
 */
const renderDoc = async (product, platform, version) => {
  console.log(
    `Starting render for ${product.name} ${version} on ${platform.name} ${platform.arch}`,
  );

  const template = findTemplate(
    product.name,
    version,
    platform.name,
    platform.arch,
  );

  if (template === false) {
    return;
  }

  console.log(`  using template "${template}"`);

  const context = generateContext(product, platform, version);

  try {
    await writeDoc(template, context);
  } catch (error) {
    console.error("[ERROR] An exception occurred. Details below:");
    console.error(error);
    process.exit(1);
  }
};

/**
 * Find an appropriate template file based on the config information passed in
 * @param productName The product to render docs for. This is used as part of the path to the template file.
 * @param productVersion The version of the product to render docs for. Used in some of the filenames checked for.
 * @param platformName The name of the platform to render docs for. (e.g. Centos 7)
 * @param platformArch The archictecture of the platform to render docs for.
 * @returns The path to a applicable template file, or false if none is found.
 */
const findTemplate = (
  productName,
  productVersion,
  platformName,
  platformArch,
  suffix,
) => {
  const basePath = "products/" + formatStringForFile(productName);
  const formattedPlatform = formatStringForFile(platformName);

  const possibilities = [
    // Check if a file exists for the specific product version, platform, and architecture
    platformArch && constructTemplatePath(basePath, [
      `v${productVersion}`,
      formattedPlatform,
      platformArch,
      suffix,
    ]),
    // Check if a file exists for the specific product version and platform
    constructTemplatePath(basePath, [`v${productVersion}`, formattedPlatform, suffix]),
    // check if a file exists for a specific platform and architecture
    platformArch && constructTemplatePath(basePath, [formattedPlatform, platformArch, suffix]),
    // check if a file exists for a specific platform
    constructTemplatePath(basePath, [formattedPlatform, suffix]),
  ].filter((p) => !!p);

  for (let templateFilename of possibilities) {
    if (fileExists(path.join(__dirname, "templates", templateFilename))) return templateFilename;
  }

  console.log(
    `[ERROR] no template could be found\n` +
      "  Please add one of the following files:\n  " +
      possibilities.join("\n  "),
  );

  return false;
};

/**
 * Format a string into the format expected when used in file or folder names.
 * Converts a string to lowercase, and replaces all spaces with dashes
 * @param string
 * @returns a string formatted for file names
 */
const formatStringForFile = (string) => {
  return string?.toLowerCase().replace(/[ /]/g, "-");
};

/**
 * Creates a filename based on the filenameParts passed in, and appends to to a base path
 * @param basePath A file path formatted string which will be used as a prefix to the generated filename. e.g "products/product-name/"
 * @param filenameParts An array of strings to combine into a template name. e.g. ["first-part", "second", "last-part"]
 * @returns A file path which refers to the expected location of a nunjucks template, with each filename part seperated by an underscore.
 *          e.g. "products/product-name/first-part_second_last-part.njk"
 */
const constructTemplatePath = (basePath, filenameParts) => {
  return path.join(basePath, filenameParts.filter(p => p != null && p.length).join("_") + ".njk");
};

/**
 * Creates the context object used by nunjucks templates
 * @param product The product to render docs for, from the config.
 * @param platform The platform to render docs for, from the config.
 * @param version The version of the product to render docs for
 * @returns a context object.
 */
const generateContext = (product, platform, version) => {
  return {
    product: {
      name: product.name,
      version: version,
      versionMajor: getMajorVersion(version)
    },
    platform: {
      name: platform.name,
      arch: platform.arch,
    },
  };
};

/**
 * Extracts and returns the major portion of the passed semver
 * @param {*} version The version string being used. May or may not be a valid semver version string; if not, will be returned unchanged
 * @returns the major version portion of the passed version string
 */
const getMajorVersion = (version) => {
  const semantic = semver.valid(semver.coerce(version));
  if (semantic === null)
    return version;
  return semver.major(semantic);
};

/**
 * actually render a nunjucks template with context, and write the result to the "/renders" folder.
 * @param template The path to a nunjucks tempalte to render.
 * @param context An object passed into the nunjucks template which will be used to render some variable content.
 */
const writeDoc = async (template, context) => {
  context.leafTemplatePath = template;
  const render = await prettier.format(nunjucks.render(template, context), {
    parser: "mdx",
  });
  const filename =
    [
      formatStringForFile(context.product.name),
      context.product.version,
      formatStringForFile(context.platform?.name),
      context.platform?.arch || context.arch,
      context.outputType,
    ].filter(p => p != null && p.length).join("_") + ".mdx";

  console.log(`  writing ${filename}`);

  fs.writeFile(path.join(__dirname, "renders", filename), render);
};

run();
