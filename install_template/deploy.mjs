import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import nunjucks from "nunjucks";
import yaml from "yaml";
import loadProductConfig from "./lib/config.mjs";

nunjucks.configure("templates", { throwOnUndefined: true, autoescape: false });

// script takes two _optional_ parameters: the base directory to write output to for versioned products (defaults to ../product_docs/docs), 
// and the base directory to write output to for unversioned products (defaults to ../advocacy_docs).
// if relative (as are the defaults), these paths are interpreted relative to the location of this script
// unversioned products are currently identified by the prefix "advocacy_docs/"
const args = process.argv.slice(2);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const destPath = path.resolve(__dirname, args[0] || "../product_docs/docs");
const destPathUnversioned = path.resolve(__dirname, args[1] || "../advocacy_docs");
const unversionedPrefix = "advocacy_docs/";

/**
 * Loop through the config.yaml file and generate docs for every product/platform/supported version combination found.
 * @returns void
 */
const run = async () => {
  const products = await loadProductConfig(path.resolve(__dirname, "config.yaml"));

  let results = [];

  for (let product of products) {
    for (let prodVersion in product.cpuArchitecturesForVersion) {
      const prodVersionDetail = product.cpuArchitecturesForVersion[prodVersion];
      results.push(await moveIndex({product, prodVersion}));
      for (let arch in prodVersionDetail) {
        const osArchDetail = prodVersionDetail[arch];
        results.push(await moveIndex({product, prodVersion, arch}));
        for (let os of osArchDetail) {
          results.push(await moveDoc(product, {name: os.name, arch}, prodVersion));
        }
      }
    }
  }

  for (const result of results.filter((r) => !!r.success))
    console.log(result.success);
  for (const result of results.filter((r) => !!r.warn))
    console.warn(result.warn, result.context);
  console.log(
    `${
      results.filter((r) => r.note && /^Skipping/.test(r.note)).length
    } files skipped 
${ results.filter((r) => !!r.success).length} files deployed`,
  );

  return;
};

/**
 * Copies a generated index document for a product/(optional)architecture/version combination.
 * @param product The product name we are deploying docs for
 * @param prodVersion The version of the product to deploy docs for
 * @param arch The CPU architecture for a sub-index
 * @returns object {success: 'message', note: 'observation', warn: 'warning or error', context: {additional}}
 */
const moveIndex = async ({product, prodVersion, arch}) => {
  const product_stub = formatStringForFile(product.name);
  const srcFilename =
    [
      product_stub,
      prodVersion,
      arch,
      "index"
    ].filter((p) => !!p).join("_") + ".mdx";

  const srcFilepath = path.resolve(__dirname, "renders", srcFilename);

  return await moveRender(srcFilepath);
};

/**
 * Copies a generated document for a product/platform/version combination.
 * @param product The product name we are deploying docs for
 * @param platform The platform and architecture we are deploying docs for (e.g. { name: Centos 7, arch: x86_64 })
 * @param prodVersion The version of the product to deploy docs for
 * @returns object {success: 'message', note: 'observation', warn: 'warning or error', context: {additional}}
 */
const moveDoc = async (product, platform, prodVersion) => {
  const product_stub = formatStringForFile(product.name);

  const srcFilename =
    [
      product_stub,
      prodVersion,
      formatStringForFile(platform.name),
      platform.arch,
    ].join("_") + ".mdx";

  const srcFilepath = path.resolve(__dirname, "renders", srcFilename);

  return await moveRender(srcFilepath);
};

/**
 * Copies a document at a given source path
 * @param srcFilepath The path to the generated mdx file
 * @returns object {success: 'message', note: 'observation', warn: 'warning or error', context: {additional}}
 */
const moveRender = async (srcFilepath) => {
  const [srcContent, integralDeploymentPath, error, errorContext] = await readSource(srcFilepath);

  if (error) return { warn: error, context: errorContext};

  if (!integralDeploymentPath) {
    return { note: `Skipping (missing deployPath?): ${path.basename(srcFilepath)}`, };
  }

  const destFilepath = integralDeploymentPath.startsWith(unversionedPrefix) 
    ? path.resolve(__dirname, destPathUnversioned, integralDeploymentPath.substring(unversionedPrefix.length))
    : path.resolve(__dirname, destPath, integralDeploymentPath);
  try {
    await fs.mkdir(path.dirname(destFilepath), { recursive: true });
    await fs.writeFile(destFilepath, srcContent, "utf8");
    return { success: `deployed ${srcFilepath} to ${destFilepath}` };
  } catch (err) {
    return {
      warn: err.toString(),
      context: {
        srcFilepath,
        destFilepath,
      },
    };
  }
};

/**
 * Format a string into the format expected when used in file or folder names.
 * Converts a string to lowercase, and replaces all spaces with dashes
 * @param string
 * @returns a string formatted for file names
 */
const formatStringForFile = (string) => {
  return string.toLowerCase().replace(/ /g, "-");
};

/**
 * Reads the source mdx file, parse out the deployment path and filename from the MDX frontmatter
 * @param srcPath the path + name of the mdx file to read
 * @returns [full contents, the relative deployment path, error, context]
 */
const readSource = async (srcPath) => {
  const frontmatterRE = /^(?<open>---\s*?\n)(?<yaml>.+?\n)(?<close>---\s*?\n)/s;

  try {
    let src = await fs.readFile(srcPath, "utf8");
    const frontmatterYaml = src.match(frontmatterRE)?.groups?.yaml;
    if (!frontmatterYaml)
    {
      return [null, null, "No frontmatter", {path: srcPath}];
    }
    const frontmatter = yaml.parseDocument(frontmatterYaml);
    if (frontmatter.errors.length)
    {
      const combinedErrors = frontmatter.errors
        .map(
          (error) => `${srcPath}:${error.linePos[0].line + 1}:${
            error.linePos[0].col
          }
  ${error.message}`,
        )
        .join("\n");
      return [null, null, combinedErrors];
    }

    const deployPath = frontmatter.contents.get("deployPath");
    const redirects = frontmatter.contents.get("redirects");

    // delete deployPath but preserve any comments that might've been attached
    if (deployPath) {
      let deployComments = "";
      for (let { key, value } of frontmatter.contents.items) {
        if (
          (key.value || key) === "deployPath" &&
          (key.commentBefore || value.commentBefore)
        ) {
          deployComments =
            (key.commentBefore || "") + (value.commentBefore || "");
        }
        if (key.value === "redirects")
          key.commentBefore = deployComments + (key.commentBefore || "");
      }
      frontmatter.contents.delete("deployPath");
    }

    for (let i = 0; i < redirects?.items?.length; ++i) {
      if (/\.mdx$/.test(redirects.items[i].value))
        redirects.items[i].value = redirects.items[i].value
          .replace(/^\/?/, "/")
          .replace(/\.mdx$/, "");
    }

    src = src.replace(
      frontmatterRE,
      (_, open, fmYaml, close) => open + frontmatter.toString() + close,
    );

    return [src, deployPath];
  } catch (e) {
    if (e?.code === "ENOENT")
      return [null, null, "not found: ", e.path];
    return [null, null, srcPath, e];
  }
};

run();
