import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import nunjucks from "nunjucks";
import yaml from "yaml";
import isMatch from "lodash.ismatch";

nunjucks.configure("templates", { throwOnUndefined: true, autoescape: false });

// script takes one _optional_ parameter: the base directory to write output to.
// if not specified, defaults to ../product_docs/docs
// if relative (as is the default), this path is interpreted relative to the location of this script
const args = process.argv.slice(2);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const destPath = path.resolve(__dirname, args[0] || "../product_docs/docs");

/**
 * Loop through the config.yaml file and generate docs for every product/platform/supported version combination found.
 * @returns void
 */
const run = async () => {
  const config = yaml.parse(
    await fs.readFile(path.resolve(__dirname, "config.yaml"), "utf8"),
  );

  let results = [];

  for (const product of config.products) {
    for (const platform of product.platforms) {
      for (const version of platform["supported versions"]) {
        results.push(await moveDoc(product, platform, version));
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
    } files skipped`,
  );

  return;
};

/**
 * Composes the code needed to copy a document for a product/platform/version combination.
 * @param product The product name we are generating a template for
 * @param platform The platform and architecture we are generating docs for (e.g. { name: Centos 7, arch: x86_64 })
 * @param version The version of the product to generate docs for
 * @returns object {success: 'message', note: 'observation', warn: 'warning or error', context: {additional}}
 */
const moveDoc = async (product, platform, version) => {
  /*
      console.log(
        `Copying install guide for ${product.name} ${version} on ${platform.name} ${platform.arch}`,
      );
    */

  const context = generateContext(product, platform, version);

  const product_stub = formatStringForFile(context.product.name);

  const srcFilename =
    [
      product_stub,
      context.product.version,
      formatStringForFile(context.platform.name),
      context.platform.arch,
    ].join("_") + ".mdx";

  const srcFilepath = path.resolve(__dirname, "renders", srcFilename);

  const prefix = {
    rhel_8_x86_64: "01",
    other_linux8_x86_64: "02",
    rhel_7_x86_64: "03",
    centos_7_x86_64: "04",
    sles_15_x86_64: "05",
    sles_12_x86_64: "06",
    "ubuntu_22.04_x86_64": "06b",
    "ubuntu_20.04_x86_64": "07",
    "ubuntu_18.04_x86_64": "07a",
    debian_11_x86_64: "07b",
    debian_10_x86_64: "08",
    rhel_8_ppc64le: "09",
    rhel_7_ppc64le: "10",
    sles_15_ppc64le: "11",
    sles_12_ppc64le: "12",
  };

  switch (product_stub) {
    case "hadoop-foreign-data-wrapper":
    case "mongodb-foreign-data-wrapper":
    case "mysql-foreign-data-wrapper":
      prefix["sles_12_x86"] = "07";
      prefix["sles_12_x86_64"] = "07";
      prefix["rhel_8_ppc64le"] = "13";
      prefix["rhel_7_ppc64le"] = "15";
      prefix["sles_12_ppc64le"] = "19";
      prefix["sles_15_ppc64le"] = "17";
      break;
    case "edb-ocl-connector":
      prefix["sles_15_x86_64"] = "03";
      prefix["sles_12_x86_64"] = "04";
      prefix["sles_15_ppc64le"] = "09";
      prefix["sles_12_ppc64le"] = "10";
      prefix["ubuntu_22.04_x86_64"] = "05";
      prefix["ubuntu_20.04_x86_64"] = "05a";
      prefix["ubuntu_18.04_x86_64"] = "05b";
      prefix["debian_11_x86_64"] = "06";
      prefix["debian_10_x86_64"] = "06a";
      prefix["debian_9_x86_64"] = "06b";
      break;
  }

  const expand_arch = {
    ppcle: "ibm_power_ppc64le",
    x86: "x86_amd64",
    x86_64: "x86_amd64",
    ppc64le: "ibm_power_ppc64le",
  };

  const plat = [
    context.platform.name.toLowerCase().replace(/ /g, "_"),
    context.platform.arch,
  ].join("_");

  const product_prefix = {
    "failover-manager": "03",
    "migration-toolkit": "05",
    "hadoop-foreign-data-wrapper": "05",
    "mongodb-foreign-data-wrapper": "04",
    "mysql-foreign-data-wrapper": "04",
    "edb-pgpool-ii": "01",
    "edb-pgpool-ii-extensions": "pgpoolext",
    postgis: "01a",
    "edb-jdbc-connector": "04",
    "edb-ocl-connector": "04",
    "edb-odbc-connector": "03",
    "edb-pgbouncer": "01",
  };

  const fmtArchPath = (ctx) => expand_arch[ctx.platform.arch];
  const fmtArchFilename = (ctx) => ctx.platform.arch.replace(/_?64/g, "");

  const [srcContent, integralDeploymentPath] = await readSource(srcFilepath);

  // prettier-ignore
  const destFilename = integralDeploymentPath || match(context,   
    when({product: {name: "EDB Postgres Advanced Server", version: 14}, platform: {name: "CentOS 7"}}, 
      (ctx) => `epas/14/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_centos7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 14}, platform: {name: "AlmaLinux 8 or Rocky Linux 8"}}, 
      (ctx) => `epas/14/epas_inst_linux/installing_epas_using_edb_repository//${fmtArchPath(ctx)}/epas_other_linux8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 14}, platform: {name: "RHEL 7 or OL 7"}}, 
      (ctx) => `epas/14/epas_inst_linux/installing_epas_using_edb_repository//${fmtArchPath(ctx)}/epas_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 14}, platform: {name: "RHEL 8 or OL 8"}}, 
      (ctx) => `epas/14/epas_inst_linux/installing_epas_using_edb_repository//${fmtArchPath(ctx)}/epas_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 14}, platform: {name: "RHEL 8"}}, 
      (ctx) => `epas/14/epas_inst_linux/installing_epas_using_edb_repository//${fmtArchPath(ctx)}/epas_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 14}, platform: {name: "RHEL 7"}}, 
      (ctx) => `epas/14/epas_inst_linux/installing_epas_using_edb_repository//${fmtArchPath(ctx)}/epas_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 14}, platform: {name: "SLES 12"}}, 
      (ctx) => `epas/14/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 14}, platform: {name: "SLES 15"}}, 
      (ctx) => `epas/14/epas_inst_linux/installing_epas_using_edb_repository//${fmtArchPath(ctx)}/epas_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 14}, platform: {name: "Debian 10"}}, 
      (ctx) => `epas/14/epas_inst_linux/installing_epas_using_edb_repository//${fmtArchPath(ctx)}/epas_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 14}, platform: {name: "Debian 11"}}, 
      (ctx) => `epas/14/epas_inst_linux/installing_epas_using_edb_repository//${fmtArchPath(ctx)}/epas_deb11_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 14}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `epas/14/epas_inst_linux/installing_epas_using_edb_repository//${fmtArchPath(ctx)}/epas_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 14}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `epas/14/epas_inst_linux/installing_epas_using_edb_repository//${fmtArchPath(ctx)}/epas_ubuntu20_${fmtArchFilename(ctx)}.mdx`),

    when({product: {name: "EDB Postgres Advanced Server", version: 13}, platform: {name: "CentOS 7"}}, 
      (ctx) => `epas/13/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_centos7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 13}, platform: {name: "AlmaLinux 8 or Rocky Linux 8"}}, 
      (ctx) => `epas/13/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_other_linux8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 13}, platform: {name: "RHEL 7 or OL 7"}}, 
      (ctx) => `epas/13/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 13}, platform: {name: "RHEL 8 or OL 8"}}, 
      (ctx) => `epas/13/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 13}, platform: {name: "RHEL 8"}}, 
      (ctx) => `epas/13/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 13}, platform: {name: "RHEL 7"}}, 
      (ctx) => `epas/13/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 13}, platform: {name: "SLES 12"}}, 
      (ctx) => `epas/13/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 13}, platform: {name: "SLES 15"}}, 
      (ctx) => `epas/13/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 13}, platform: {name: "Debian 10"}}, 
      (ctx) => `epas/13/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 13}, platform: {name: "Debian 11"}}, 
      (ctx) => `epas/13/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_deb11_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 13}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `epas/13/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 13}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `epas/13/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    
    when({product: {name: "Postgres Enterprise Manager server", version: 8}, platform: {name: "RHEL 8 or OL 8"}}, 
      (ctx) => `pem/8/installing_pem_server/pem_server_inst_linux/installing_pem_server_using_edb_repository/${fmtArchPath(ctx)}/pem_server_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager server", version: 8}, platform: {name: "RHEL 8"}}, 
      (ctx) => `pem/8/installing_pem_server/pem_server_inst_linux/installing_pem_server_using_edb_repository/${fmtArchPath(ctx)}/pem_server_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager server", version: 8}, platform: {name: "RHEL 7 or OL 7"}}, 
      (ctx) => `pem/8/installing_pem_server/pem_server_inst_linux/installing_pem_server_using_edb_repository/${fmtArchPath(ctx)}/pem_server_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager server", version: 8}, platform: {name: "AlmaLinux 8 or Rocky Linux 8"}}, 
      (ctx) => `pem/8/installing_pem_server/pem_server_inst_linux/installing_pem_server_using_edb_repository/${fmtArchPath(ctx)}/pem_server_other_linux8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager server", version: 8}, platform: {name: "CentOS 7"}}, 
      (ctx) => `pem/8/installing_pem_server/pem_server_inst_linux/installing_pem_server_using_edb_repository/${fmtArchPath(ctx)}/pem_server_centos7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager server", version: 8}, platform: {name: "SLES 15"}}, 
      (ctx) => `pem/8/installing_pem_server/pem_server_inst_linux/installing_pem_server_using_edb_repository/${fmtArchPath(ctx)}/pem_server_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager server", version: 8}, platform: {name: "SLES 12"}}, 
      (ctx) => `pem/8/installing_pem_server/pem_server_inst_linux/installing_pem_server_using_edb_repository/${fmtArchPath(ctx)}/pem_server_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager server", version: 8}, platform: {name: "Debian 11"}}, 
      (ctx) => `pem/8/installing_pem_server/pem_server_inst_linux/installing_pem_server_using_edb_repository/${fmtArchPath(ctx)}/pem_server_deb11_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager server", version: 8}, platform: {name: "Debian 10"}}, 
      (ctx) => `pem/8/installing_pem_server/pem_server_inst_linux/installing_pem_server_using_edb_repository/${fmtArchPath(ctx)}/pem_server_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager server", version: 8}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `pem/8/installing_pem_server/pem_server_inst_linux/installing_pem_server_using_edb_repository/${fmtArchPath(ctx)}/pem_server_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager server", version: 8}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `pem/8/installing_pem_server/pem_server_inst_linux/installing_pem_server_using_edb_repository/${fmtArchPath(ctx)}/pem_server_ubuntu20_${fmtArchFilename(ctx)}.mdx`),

    when({product: {name: "Postgres Enterprise Manager agent", version: 8}, platform: {name: "RHEL 8 or OL 8"}}, 
      (ctx) => `pem/8/installing_pem_agent/installing_on_linux/${fmtArchPath(ctx)}/pem_agent_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager agent", version: 8}, platform: {name: "RHEL 8"}}, 
      (ctx) => `pem/8/installing_pem_agent/installing_on_linux/${fmtArchPath(ctx)}/pem_agent_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager agent", version: 8}, platform: {name: "RHEL 7 or OL 7"}}, 
      (ctx) => `pem/8/installing_pem_agent/installing_on_linux/${fmtArchPath(ctx)}/pem_agent_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager agent", version: 8}, platform: {name: "AlmaLinux 8 or Rocky Linux 8"}}, 
      (ctx) => `pem/8/installing_pem_agent/installing_on_linux/${fmtArchPath(ctx)}/pem_agent_other_linux8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager agent", version: 8}, platform: {name: "CentOS 7"}}, 
      (ctx) => `pem/8/installing_pem_agent/installing_on_linux/${fmtArchPath(ctx)}/pem_agent_centos7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager agent", version: 8}, platform: {name: "SLES 15"}}, 
      (ctx) => `pem/8/installing_pem_agent/installing_on_linux/${fmtArchPath(ctx)}/pem_agent_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager agent", version: 8}, platform: {name: "SLES 12"}}, 
      (ctx) => `pem/8/installing_pem_agent/installing_on_linux/${fmtArchPath(ctx)}/pem_agent_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager agent", version: 8}, platform: {name: "Debian 10"}}, 
      (ctx) => `pem/8/installing_pem_agent/installing_on_linux/${fmtArchPath(ctx)}/pem_agent_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager agent", version: 8}, platform: {name: "Debian 11"}}, 
      (ctx) => `pem/8/installing_pem_agent/installing_on_linux/${fmtArchPath(ctx)}/pem_agent_deb11_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager agent", version: 8}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `pem/8/installing_pem_agent/installing_on_linux/${fmtArchPath(ctx)}/pem_agent_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager agent", version: 8}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `pem/8/installing_pem_agent/installing_on_linux/${fmtArchPath(ctx)}/pem_agent_ubuntu20_${fmtArchFilename(ctx)}.mdx`), );

  function match(context, ...conditions) {
    for (let test of conditions) {
      const result = test(context);
      if (result !== false && result !== null) return result;
    }
    return null;
  }

  function when(pattern, resultFn) {
    return (ctx) => isMatch(ctx, pattern) && resultFn(ctx);
  }

  if (!destFilename) {
    return { note: `Skipping (no mapping): ${srcFilename}`, context };
  }

  const destFilepath = path.resolve(__dirname, destPath, destFilename);
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
 * Creates a filename based on the filenameParts passed in, and appends to to a base path
 * @param basePath A file path formatted string which will be used as a prefix to the generated filename. e.g "products/product-name/"
 * @param filenameParts An array of strings to combine into a template name. e.g. ["first-part", "second", "last-part"]
 * @returns A file path which refers to the expected location of a nunjucks template, with each filename part seperated by an underscore.
 *          e.g. "products/product-name/first-part_second_last-part.njk"
 */
const constructTemplatePath = (basePath, filenameParts) => {
  return path.join(basePath, filenameParts.join("_") + ".njk");
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
    },
    platform: {
      name: platform.name,
      arch: platform.arch,
    },
  };
};

/**
 * Reads the source mdx file, parse out the deployment path and filename from the MDX frontmatter
 * @param srcPath the path + name of the mdx file to read
 * @returns [full contents, the relative deployment path], undefined on error
 */
const readSource = async (srcPath) => {
  const frontmatterRE = /^(?<open>---\s*?\n)(?<yaml>.+?\n)(?<close>---\s*?\n)/s;

  try {
    let src = await fs.readFile(srcPath, "utf8");
    const frontmatter = yaml.parseDocument(
      src.match(frontmatterRE)?.groups?.yaml,
    );

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
    console.log(srcPath, e);
  }
};

run();
