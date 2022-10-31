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
    when({product: {name: "EDB*Plus", version: 40}, platform: {name: "SLES 12"}}, 
      (ctx) => `edb_plus/40/03_installing_edb_plus/install_on_linux/${fmtArchPath(ctx)}/edbplus_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB*Plus", version: 40}, platform: {name: "SLES 15"}}, 
      (ctx) => `edb_plus/40/03_installing_edb_plus/install_on_linux/${fmtArchPath(ctx)}/edbplus_sles15_${fmtArchFilename(ctx)}.mdx`),   
    when({product: {name: "EDB*Plus", version: 40}, platform: {name: "Debian 10"}}, 
      (ctx) => `edb_plus/40/03_installing_edb_plus/install_on_linux/${fmtArchPath(ctx)}/edbplus_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB*Plus", version: 40}, platform: {name: "Debian 11"}}, 
      (ctx) => `edb_plus/40/03_installing_edb_plus/install_on_linux/${fmtArchPath(ctx)}/edbplus_deb11_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB*Plus", version: 40}, platform: {name: "Ubuntu 18.04"}}, 
    (ctx) => `edb_plus/40/03_installing_edb_plus/install_on_linux/${fmtArchPath(ctx)}/edbplus_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB*Plus", version: 40}, platform: {name: "Ubuntu 20.04"}}, 
    (ctx) => `edb_plus/40/03_installing_edb_plus/install_on_linux/${fmtArchPath(ctx)}/edbplus_ubuntu20_${fmtArchFilename(ctx)}.mdx`),   
    when({product: {name: "EDB*Plus", version: 40}, platform: {name: "CentOS 7"}}, 
      (ctx) => `edb_plus/40/03_installing_edb_plus/install_on_linux/${fmtArchPath(ctx)}/edbplus_centos7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB*Plus", version: 40}, platform: {name: "AlmaLinux 8 or Rocky Linux 8"}}, 
      (ctx) => `edb_plus/40/03_installing_edb_plus/install_on_linux/${fmtArchPath(ctx)}/edbplus_other_linux8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB*Plus", version: 40}, platform: {name: "RHEL 7 or OL 7"}}, 
      (ctx) => `edb_plus/40/03_installing_edb_plus/install_on_linux/${fmtArchPath(ctx)}/edbplus_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB*Plus", version: 40}, platform: {name: "RHEL 8"}}, 
      (ctx) => `edb_plus/40/03_installing_edb_plus/install_on_linux/${fmtArchPath(ctx)}/edbplus_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB*Plus", version: 40}, platform: {name: "RHEL 8 or OL 8"}}, 
      (ctx) => `edb_plus/40/03_installing_edb_plus/install_on_linux/${fmtArchPath(ctx)}/edbplus_rhel8_${fmtArchFilename(ctx)}.mdx`),
  
  
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

    when({product: {name: "EDB Postgres Advanced Server", version: 12}, platform: {name: "CentOS 7"}}, 
      (ctx) => `epas/12/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_centos7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 12}, platform: {name: "AlmaLinux 8 or Rocky Linux 8"}}, 
      (ctx) => `epas/12/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_other_linux8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 12}, platform: {name: "RHEL 7 or OL 7"}}, 
      (ctx) => `epas/12/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 12}, platform: {name: "RHEL 8 or OL 8"}}, 
      (ctx) => `epas/12/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 12}, platform: {name: "RHEL 8"}}, 
      (ctx) => `epas/12/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 12}, platform: {name: "RHEL 7"}}, 
      (ctx) => `epas/12/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 12}, platform: {name: "SLES 12"}}, 
      (ctx) => `epas/12/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 12}, platform: {name: "SLES 15"}}, 
      (ctx) => `epas/12/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 12}, platform: {name: "Debian 10"}}, 
      (ctx) => `epas/12/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 12}, platform: {name: "Debian 11"}}, 
      (ctx) => `epas/12/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_deb11_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 12}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `epas/12/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 12}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `epas/12/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_ubuntu20_${fmtArchFilename(ctx)}.mdx`),

    when({product: {name: "EDB Postgres Advanced Server", version: 11}, platform: {name: "CentOS 7"}}, 
      (ctx) => `epas/11/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_centos7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 11}, platform: {name: "AlmaLinux 8 or Rocky Linux 8"}}, 
      (ctx) => `epas/11/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_other_linux8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 11}, platform: {name: "RHEL 7 or OL 7"}}, 
      (ctx) => `epas/11/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 11}, platform: {name: "RHEL 8 or OL 8"}}, 
      (ctx) => `epas/11/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 11}, platform: {name: "RHEL 8"}}, 
      (ctx) => `epas/11/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 11}, platform: {name: "RHEL 7"}}, 
      (ctx) => `epas/11/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 11}, platform: {name: "SLES 12"}}, 
      (ctx) => `epas/11/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 11}, platform: {name: "SLES 15"}}, 
      (ctx) => `epas/11/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 11}, platform: {name: "Debian 10"}}, 
      (ctx) => `epas/11/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 11}, platform: {name: "Debian 11"}}, 
      (ctx) => `epas/11/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_deb11_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 11}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `epas/11/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server", version: 11}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `epas/11/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_ubuntu20_${fmtArchFilename(ctx)}.mdx`),


    when({product: {name: "Failover Manager", version: 4}, platform: {name: "CentOS 7"}}, 
      (ctx) => `efm/4/03_installing_efm/${fmtArchPath(ctx)}/efm4_centos7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Failover Manager", version: 4}, platform: {name: "AlmaLinux 8 or Rocky Linux 8"}}, 
      (ctx) => `efm/4/03_installing_efm/${fmtArchPath(ctx)}/efm4_other_linux8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Failover Manager", version: 4}, platform: {name: "RHEL 7 or OL 7"}}, 
      (ctx) => `efm/4/03_installing_efm/${fmtArchPath(ctx)}/efm4_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Failover Manager", version: 4}, platform: {name: "RHEL 8 or OL 8"}}, 
      (ctx) => `efm/4/03_installing_efm/${fmtArchPath(ctx)}/efm4_rhel_8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Failover Manager", version: 4}, platform: {name: "RHEL 8"}}, 
      (ctx) => `efm/4/03_installing_efm/${fmtArchPath(ctx)}/efm4_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Failover Manager", version: 4}, platform: {name: "SLES 12"}}, 
      (ctx) => `efm/4/03_installing_efm/${fmtArchPath(ctx)}/efm4_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Failover Manager", version: 4}, platform: {name: "SLES 15"}}, 
      (ctx) => `efm/4/03_installing_efm/${fmtArchPath(ctx)}/efm4_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Failover Manager", version: 4}, platform: {name: "Debian 11"}}, 
      (ctx) => `efm/4/03_installing_efm/${fmtArchPath(ctx)}/efm4_deb11_${fmtArchFilename(ctx)}.mdx`),  
    when({product: {name: "Failover Manager", version: 4}, platform: {name: "Debian 10"}}, 
      (ctx) => `efm/4/03_installing_efm/${fmtArchPath(ctx)}/efm4_deb10_${fmtArchFilename(ctx)}.mdx`),      
    when({product: {name: "Failover Manager", version: 4}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `efm/4/03_installing_efm/${fmtArchPath(ctx)}/efm4_ubuntu18_${fmtArchFilename(ctx)}.mdx`),      
    when({product: {name: "Failover Manager", version: 4}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `efm/4/03_installing_efm/${fmtArchPath(ctx)}/efm4_ubuntu20_${fmtArchFilename(ctx)}.mdx`),      

    when({product: {name: "EDB JDBC Connector"}, platform: {name: "CentOS 7"}}, 
      (ctx) => `jdbc_connector/42.5.0.1/04_installing_and_configuring_the_jdbc_connector/01_installing_the_connector_with_an_rpm_package/${fmtArchPath(ctx)}/jdbc42_centos7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB JDBC Connector"}, platform: {name: "AlmaLinux 8 or Rocky Linux 8"}}, 
      (ctx) => `jdbc_connector/42.5.0.1/04_installing_and_configuring_the_jdbc_connector/01_installing_the_connector_with_an_rpm_package/${fmtArchPath(ctx)}/jdbc42_other_linux8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB JDBC Connector"}, platform: {name: "RHEL 7 or OL 7"}}, 
      (ctx) => `jdbc_connector/42.5.0.1/04_installing_and_configuring_the_jdbc_connector/01_installing_the_connector_with_an_rpm_package/${fmtArchPath(ctx)}/jdbc42_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB JDBC Connector"}, platform: {name: "RHEL 8 or OL 8"}}, 
      (ctx) => `jdbc_connector/42.5.0.1/04_installing_and_configuring_the_jdbc_connector/01_installing_the_connector_with_an_rpm_package/${fmtArchPath(ctx)}/jdbc42_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB JDBC Connector"}, platform: {name: "RHEL 8"}}, 
      (ctx) => `jdbc_connector/42.5.0.1/04_installing_and_configuring_the_jdbc_connector/01_installing_the_connector_with_an_rpm_package/${fmtArchPath(ctx)}/jdbc42_rhel8_${fmtArchFilename(ctx)}.mdx`),  
    when({product: {name: "EDB JDBC Connector"}, platform: {name: "SLES 12"}}, 
      (ctx) => `jdbc_connector/42.5.0.1/04_installing_and_configuring_the_jdbc_connector/01_installing_the_connector_with_an_rpm_package/${fmtArchPath(ctx)}/jdbc42_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB JDBC Connector"}, platform: {name: "SLES 15"}}, 
      (ctx) => `jdbc_connector/42.5.0.1/04_installing_and_configuring_the_jdbc_connector/01_installing_the_connector_with_an_rpm_package/${fmtArchPath(ctx)}/jdbc42_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB JDBC Connector"}, platform: {name: "Debian 10"}}, 
      (ctx) => `jdbc_connector/42.5.0.1/04_installing_and_configuring_the_jdbc_connector/01_installing_the_connector_with_an_rpm_package/${fmtArchPath(ctx)}/jdbc42_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB JDBC Connector"}, platform: {name: "Debian 11"}}, 
      (ctx) => `jdbc_connector/42.5.0.1/04_installing_and_configuring_the_jdbc_connector/01_installing_the_connector_with_an_rpm_package/${fmtArchPath(ctx)}/jdbc42_deb11_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB JDBC Connector"}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `jdbc_connector/42.5.0.1/04_installing_and_configuring_the_jdbc_connector/01_installing_the_connector_with_an_rpm_package/${fmtArchPath(ctx)}/jdbc42_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB JDBC Connector"}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `jdbc_connector/42.5.0.1/04_installing_and_configuring_the_jdbc_connector/01_installing_the_connector_with_an_rpm_package/${fmtArchPath(ctx)}/jdbc42_ubuntu20_${fmtArchFilename(ctx)}.mdx`),

    when({product: {name: "Migration Toolkit"}, platform: {name: "SLES 12"}}, 
      (ctx) => `migration_toolkit/55/05_installing_mtk/install_on_linux/${fmtArchPath(ctx)}/mtk55_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Migration Toolkit"}, platform: {name: "SLES 15"}}, 
      (ctx) => `migration_toolkit/55/05_installing_mtk/install_on_linux/${fmtArchPath(ctx)}/mtk55_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Migration Toolkit"}, platform: {name: "Debian 10"}}, 
      (ctx) => `migration_toolkit/55/05_installing_mtk/install_on_linux/${fmtArchPath(ctx)}/mtk55_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Migration Toolkit"}, platform: {name: "Debian 11"}}, 
      (ctx) => `migration_toolkit/55/05_installing_mtk/install_on_linux/${fmtArchPath(ctx)}/mtk55_deb11_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Migration Toolkit"}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `migration_toolkit/55/05_installing_mtk/install_on_linux/${fmtArchPath(ctx)}/mtk55_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Migration Toolkit"}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `migration_toolkit/55/05_installing_mtk/install_on_linux/${fmtArchPath(ctx)}/mtk55_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Migration Toolkit"}, platform: {name: "RHEL 8 or OL 8"}}, 
      (ctx) => `migration_toolkit/55/05_installing_mtk/install_on_linux/${fmtArchPath(ctx)}/mtk55_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Migration Toolkit"}, platform: {name: "AlmaLinux 8 or Rocky Linux 8"}}, 
      (ctx) => `migration_toolkit/55/05_installing_mtk/install_on_linux/${fmtArchPath(ctx)}/mtk55_other_linux8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Migration Toolkit"}, platform: {name: "RHEL 7 or OL 7"}}, 
      (ctx) => `migration_toolkit/55/05_installing_mtk/install_on_linux/${fmtArchPath(ctx)}/mtk55_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Migration Toolkit"}, platform: {name: "CentOS 7"}}, 
      (ctx) => `migration_toolkit/55/05_installing_mtk/install_on_linux/${fmtArchPath(ctx)}/mtk55_centos7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Migration Toolkit"}, platform: {name: "RHEL 8"}}, 
      (ctx) => `migration_toolkit/55/05_installing_mtk/install_on_linux/${fmtArchPath(ctx)}/mtk55_rhel8_${fmtArchFilename(ctx)}.mdx`),

    when({product: {name: "EDB OCL Connector"}, platform: {name: "SLES 12"}}, 
      (ctx) => `ocl_connector/${ctx.product.version}/04_open_client_library/01_installing_and_configuring_the_ocl_connector/install_on_linux_using_edb_repo/${fmtArchPath(ctx)}/ocl_connector14_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB OCL Connector"}, platform: {name: "SLES 15"}}, 
      (ctx) => `ocl_connector/${ctx.product.version}/04_open_client_library/01_installing_and_configuring_the_ocl_connector/install_on_linux_using_edb_repo/${fmtArchPath(ctx)}/ocl_connector14_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB OCL Connector"}, platform: {name: "Debian 10"}}, 
      (ctx) => `ocl_connector/${ctx.product.version}/04_open_client_library/01_installing_and_configuring_the_ocl_connector/install_on_linux_using_edb_repo/${fmtArchPath(ctx)}/ocl_connector14_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB OCL Connector"}, platform: {name: "Debian 11"}}, 
      (ctx) => `ocl_connector/${ctx.product.version}/04_open_client_library/01_installing_and_configuring_the_ocl_connector/install_on_linux_using_edb_repo/${fmtArchPath(ctx)}/ocl_connector14_deb11_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB OCL Connector"}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `ocl_connector/${ctx.product.version}/04_open_client_library/01_installing_and_configuring_the_ocl_connector/install_on_linux_using_edb_repo/${fmtArchPath(ctx)}/ocl_connector14_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB OCL Connector"}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `ocl_connector/${ctx.product.version}/04_open_client_library/01_installing_and_configuring_the_ocl_connector/install_on_linux_using_edb_repo/${fmtArchPath(ctx)}/ocl_connector14_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB OCL Connector"}, platform: {name: "CentOS 7"}}, 
      (ctx) => `ocl_connector/${ctx.product.version}/04_open_client_library/01_installing_and_configuring_the_ocl_connector/install_on_linux_using_edb_repo/${fmtArchPath(ctx)}/ocl_connector14_centos7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB OCL Connector"}, platform: {name: "AlmaLinux 8 or Rocky Linux 8"}}, 
      (ctx) => `ocl_connector/${ctx.product.version}/04_open_client_library/01_installing_and_configuring_the_ocl_connector/install_on_linux_using_edb_repo/${fmtArchPath(ctx)}/ocl_connector14_other_linux8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB OCL Connector"}, platform: {name: "RHEL 8 or OL 8"}}, 
      (ctx) => `ocl_connector/${ctx.product.version}/04_open_client_library/01_installing_and_configuring_the_ocl_connector/install_on_linux_using_edb_repo/${fmtArchPath(ctx)}/ocl_connector14_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB OCL Connector"}, platform: {name: "RHEL 7 or OL 7"}}, 
      (ctx) => `ocl_connector/${ctx.product.version}/04_open_client_library/01_installing_and_configuring_the_ocl_connector/install_on_linux_using_edb_repo/${fmtArchPath(ctx)}/ocl_connector14_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB OCL Connector"}, platform: {name: "RHEL 8"}}, 
      (ctx) => `ocl_connector/${ctx.product.version}/04_open_client_library/01_installing_and_configuring_the_ocl_connector/install_on_linux_using_edb_repo/${fmtArchPath(ctx)}/ocl_connector14_rhel8_${fmtArchFilename(ctx)}.mdx`),     

    when({product: {name: "EDB ODBC Connector"}, platform: {name: "CentOS 7"}}, 
      (ctx) => `odbc_connector/13/03_installing_edb_odbc/01_installing_linux/${fmtArchPath(ctx)}/odbc13_centos7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB ODBC Connector"}, platform: {name: "AlmaLinux 8 or Rocky Linux 8"}}, 
      (ctx) => `odbc_connector/13/03_installing_edb_odbc/01_installing_linux/${fmtArchPath(ctx)}/odbc13_other_linux8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB ODBC Connector"}, platform: {name: "RHEL 8 or OL 8"}}, 
      (ctx) => `odbc_connector/13/03_installing_edb_odbc/01_installing_linux/${fmtArchPath(ctx)}/odbc13_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB ODBC Connector"}, platform: {name: "RHEL 7 or OL 7"}}, 
      (ctx) => `odbc_connector/13/03_installing_edb_odbc/01_installing_linux/${fmtArchPath(ctx)}/odbc13_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB ODBC Connector"}, platform: {name: "RHEL 8"}}, 
      (ctx) => `odbc_connector/13/03_installing_edb_odbc/01_installing_linux/${fmtArchPath(ctx)}/odbc13_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB ODBC Connector"}, platform: {name: "SLES 12"}}, 
      (ctx) => `odbc_connector/13/03_installing_edb_odbc/01_installing_linux/${fmtArchPath(ctx)}/odbc13_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB ODBC Connector"}, platform: {name: "SLES 15"}}, 
      (ctx) => `odbc_connector/13/03_installing_edb_odbc/01_installing_linux/${fmtArchPath(ctx)}/odbc13_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB ODBC Connector"}, platform: {name: "Debian 10"}}, 
      (ctx) => `odbc_connector/13/03_installing_edb_odbc/01_installing_linux/${fmtArchPath(ctx)}/odbc13_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB ODBC Connector"}, platform: {name: "Debian 11"}}, 
      (ctx) => `odbc_connector/13/03_installing_edb_odbc/01_installing_linux/${fmtArchPath(ctx)}/odbc13_deb11_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB ODBC Connector"}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `odbc_connector/13/03_installing_edb_odbc/01_installing_linux/${fmtArchPath(ctx)}/odbc13_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB ODBC Connector"}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `odbc_connector/13/03_installing_edb_odbc/01_installing_linux/${fmtArchPath(ctx)}/odbc13_ubuntu20_${fmtArchFilename(ctx)}.mdx`),

    when({product: {name: "EDB pgBouncer", version: 1.17}, platform: {name: "Debian 11"}}, 
      (ctx) => `pgbouncer/1.17/01_installation/install_on_linux/${fmtArchPath(ctx)}/pgbouncer_deb11_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB pgBouncer", version: 1.17}, platform: {name: "RHEL 8 or OL 8"}}, 
      (ctx) => `pgbouncer/1.17/01_installation/install_on_linux/${fmtArchPath(ctx)}/pgbouncer_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB pgBouncer", version: 1.17}, platform: {name: "AlmaLinux 8 or Rocky Linux 8"}}, 
      (ctx) => `pgbouncer/1.17/01_installation/install_on_linux/${fmtArchPath(ctx)}/pgbouncer_other_linux8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB pgBouncer", version: 1.17}, platform: {name: "RHEL 7 or OL 7"}}, 
      (ctx) => `pgbouncer/1.17/01_installation/install_on_linux/${fmtArchPath(ctx)}/pgbouncer_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB pgBouncer", version: 1.17}, platform: {name: "RHEL 8"}}, 
      (ctx) => `pgbouncer/1.17/01_installation/install_on_linux/${fmtArchPath(ctx)}/pgbouncer_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB pgBouncer", version: 1.17}, platform: {name: "CentOS 7"}}, 
      (ctx) => `pgbouncer/1.17/01_installation/install_on_linux/${fmtArchPath(ctx)}/pgbouncer_centos7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB pgBouncer", version: 1.17}, platform: {name: "SLES 12"}}, 
      (ctx) => `pgbouncer/1.17/01_installation/install_on_linux/${fmtArchPath(ctx)}/pgbouncer_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB pgBouncer", version: 1.17}, platform: {name: "SLES 15"}}, 
      (ctx) => `pgbouncer/1.17/01_installation/install_on_linux/${fmtArchPath(ctx)}/pgbouncer_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB pgBouncer", version: 1.17}, platform: {name: "Debian 10"}}, 
      (ctx) => `pgbouncer/1.17/01_installation/install_on_linux/${fmtArchPath(ctx)}/pgbouncer_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB pgBouncer", version: 1.17}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `pgbouncer/1.17/01_installation/install_on_linux/${fmtArchPath(ctx)}/pgbouncer_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB pgBouncer", version: 1.17}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `pgbouncer/1.17/01_installation/install_on_linux/${fmtArchPath(ctx)}/pgbouncer_ubuntu20_${fmtArchFilename(ctx)}.mdx`),

    when({product: {name: "EDB Pgpool-II", version: 4.3}, platform: {name: "RHEL 8 or OL 8"}}, 
      (ctx) => `pgpool/4.3/01_installing_and_configuring_the_pgpool-II/${fmtArchPath(ctx)}/pgpool_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II", version: 4.3}, platform: {name: "AlmaLinux 8 or Rocky Linux 8"}}, 
      (ctx) => `pgpool/4.3/01_installing_and_configuring_the_pgpool-II/${fmtArchPath(ctx)}/pgpool_other_linux8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II", version: 4.3}, platform: {name: "RHEL 7 or OL 7"}}, 
      (ctx) => `pgpool/4.3/01_installing_and_configuring_the_pgpool-II/${fmtArchPath(ctx)}/pgpool_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II", version: 4.3}, platform: {name: "RHEL 8"}}, 
      (ctx) => `pgpool/4.3/01_installing_and_configuring_the_pgpool-II/${fmtArchPath(ctx)}/pgpool_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II", version: 4.3}, platform: {name: "CentOS 7"}}, 
      (ctx) => `pgpool/4.3/01_installing_and_configuring_the_pgpool-II/${fmtArchPath(ctx)}/pgpool_centos7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II", version: 4.3}, platform: {name: "SLES 12"}}, 
      (ctx) => `pgpool/4.3/01_installing_and_configuring_the_pgpool-II/${fmtArchPath(ctx)}/pgpool_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II", version: 4.3}, platform: {name: "SLES 15"}}, 
      (ctx) => `pgpool/4.3/01_installing_and_configuring_the_pgpool-II/${fmtArchPath(ctx)}/pgpool_sles15_${fmtArchFilename(ctx)}.mdx`),   
    when({product: {name: "EDB Pgpool-II", version: 4.3}, platform: {name: "Debian 10"}}, 
      (ctx) => `pgpool/4.3/01_installing_and_configuring_the_pgpool-II/${fmtArchPath(ctx)}/pgpool_deb10_${fmtArchFilename(ctx)}.mdx`),      
    when({product: {name: "EDB Pgpool-II", version: 4.3}, platform: {name: "Debian 11"}}, 
      (ctx) => `pgpool/4.3/01_installing_and_configuring_the_pgpool-II/${fmtArchPath(ctx)}/pgpool_deb11_${fmtArchFilename(ctx)}.mdx`),      
    when({product: {name: "EDB Pgpool-II", version: 4.3}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `pgpool/4.3/01_installing_and_configuring_the_pgpool-II/${fmtArchPath(ctx)}/pgpool_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II", version: 4.3}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `pgpool/4.3/01_installing_and_configuring_the_pgpool-II/${fmtArchPath(ctx)}/pgpool_ubuntu20_${fmtArchFilename(ctx)}.mdx`),  

    when({product: {name: "EDB Pgpool-II Extensions", version: 4.3}, platform: {name: "RHEL 8 or OL 8"}}, 
      (ctx) => `pgpool/4.3/02_extensions/${fmtArchPath(ctx)}/pgpoolext_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II Extensions", version: 4.3}, platform: {name: "AlmaLinux 8 or Rocky Linux 8"}}, 
      (ctx) => `pgpool/4.3/02_extensions/${fmtArchPath(ctx)}/pgpoolext_other_linux8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II Extensions", version: 4.3}, platform: {name: "RHEL 7 or OL 7"}}, 
      (ctx) => `pgpool/4.3/02_extensions/${fmtArchPath(ctx)}/pgpoolext_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II Extensions", version: 4.3}, platform: {name: "RHEL 8"}}, 
      (ctx) => `pgpool/4.3/02_extensions/${fmtArchPath(ctx)}/pgpoolext_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II Extensions", version: 4.3}, platform: {name: "CentOS 7"}}, 
      (ctx) => `pgpool/4.3/02_extensions/${fmtArchPath(ctx)}/pgpoolext_centos7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II Extensions", version: 4.3}, platform: {name: "SLES 12"}}, 
      (ctx) => `pgpool/4.3/02_extensions/${fmtArchPath(ctx)}/pgpoolext_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II Extensions", version: 4.3}, platform: {name: "SLES 15"}}, 
      (ctx) => `pgpool/4.3/02_extensions/${fmtArchPath(ctx)}/pgpoolext_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II Extensions", version: 4.3}, platform: {name: "Debian 10"}}, 
      (ctx) => `pgpool/4.3/02_extensions/${fmtArchPath(ctx)}/pgpoolext_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II Extensions", version: 4.3}, platform: {name: "Debian 11"}}, 
      (ctx) => `pgpool/4.3/02_extensions/${fmtArchPath(ctx)}/pgpoolext_deb11_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II Extensions", version: 4.3}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `pgpool/4.3/02_extensions/${fmtArchPath(ctx)}/pgpoolext_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II Extensions", version: 4.3}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `pgpool/4.3/02_extensions/${fmtArchPath(ctx)}/pgpoolext_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    
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
      (ctx) => `pem/8/installing_pem_agent/installing_on_linux/${fmtArchPath(ctx)}/pem_agent_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    
    when({product: {name: "PostGIS", version: 3.2}, platform: {name: "Debian 11"}}, 
      (ctx) => `postgis/3.2/01a_installing_postgis/installing_on_linux/${fmtArchPath(ctx)}/postgis_deb11_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "PostGIS", version: 3.2}, platform: {name: "CentOS 7"}}, 
      (ctx) => `postgis/3.2/01a_installing_postgis/installing_on_linux/${fmtArchPath(ctx)}/postgis_centos7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "PostGIS", version: 3.2}, platform: {name: "AlmaLinux 8 or Rocky Linux 8"}}, 
      (ctx) => `postgis/3.2/01a_installing_postgis/installing_on_linux/${fmtArchPath(ctx)}/postgis_other_linux8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "PostGIS", version: 3.2}, platform: {name: "RHEL 7 or OL 7"}}, 
      (ctx) => `postgis/3.2/01a_installing_postgis/installing_on_linux/${fmtArchPath(ctx)}/postgis_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "PostGIS", version: 3.2}, platform: {name: "RHEL 8 or OL 8"}}, 
      (ctx) => `postgis/3.2/01a_installing_postgis/installing_on_linux/${fmtArchPath(ctx)}/postgis_rhel_8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "PostGIS", version: 3.2}, platform: {name: "RHEL 8"}}, 
      (ctx) => `postgis/3.2/01a_installing_postgis/installing_on_linux/${fmtArchPath(ctx)}/postgis_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "PostGIS", version: 3.2}, platform: {name: "SLES 12"}}, 
      (ctx) => `postgis/3.2/01a_installing_postgis/installing_on_linux/${fmtArchPath(ctx)}/postgis_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "PostGIS", version: 3.2}, platform: {name: "SLES 15"}}, 
      (ctx) => `postgis/3.2/01a_installing_postgis/installing_on_linux/${fmtArchPath(ctx)}/postgis_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "PostGIS", version: 3.2}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `postgis/3.2/01a_installing_postgis/installing_on_linux/${fmtArchPath(ctx)}/postgis_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "PostGIS", version: 3.2}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `postgis/3.2/01a_installing_postgis/installing_on_linux/${fmtArchPath(ctx)}/postgis_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "PostGIS", version: 3.2}, platform: {name: "Debian 10"}}, 
      (ctx) => `postgis/3.2/01a_installing_postgis/installing_on_linux/${fmtArchPath(ctx)}/postgis_deb10_${fmtArchFilename(ctx)}.mdx`),

    when({product: {name: "Replication Server", version: 7}, platform: {name: "SLES 12"}}, 
      (ctx) => `eprs/7/03_installation/03_installing_rpm_package/${fmtArchPath(ctx)}/eprs_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Replication Server", version: 7}, platform: {name: "SLES 15"}}, 
      (ctx) => `eprs/7/03_installation/03_installing_rpm_package/${fmtArchPath(ctx)}/eprs_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Replication Server", version: 7}, platform: {name: "Debian 11"}}, 
      (ctx) => `eprs/7/03_installation/03_installing_rpm_package/${fmtArchPath(ctx)}/eprs_deb11_${fmtArchFilename(ctx)}.mdx`),

    when({product: {name: "Replication Server", version: 7}, platform: {name: "RHEL 8 or OL 8"}}, 
      (ctx) => `eprs/7/03_installation/03_installing_rpm_package/${fmtArchPath(ctx)}/eprs_rhel8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Replication Server", version: 7}, platform: {name: "AlmaLinux 8 or Rocky Linux 8"}}, 
      (ctx) => `eprs/7/03_installation/03_installing_rpm_package/${fmtArchPath(ctx)}/eprs_other_linux8_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Replication Server", version: 7}, platform: {name: "RHEL 7 or OL 7"}}, 
      (ctx) => `eprs/7/03_installation/03_installing_rpm_package/${fmtArchPath(ctx)}/eprs_rhel7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Replication Server", version: 7}, platform: {name: "CentOS 7"}}, 
      (ctx) => `eprs/7/03_installation/03_installing_rpm_package/${fmtArchPath(ctx)}/eprs_centos7_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Replication Server", version: 7}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `eprs/7/03_installation/03_installing_rpm_package/${fmtArchPath(ctx)}/eprs_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Replication Server", version: 7}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `eprs/7/03_installation/03_installing_rpm_package/${fmtArchPath(ctx)}/eprs_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Replication Server", version: 7}, platform: {name: "Debian 10"}}, 
      (ctx) => `eprs/7/03_installation/03_installing_rpm_package/${fmtArchPath(ctx)}/eprs_deb10_${fmtArchFilename(ctx)}.mdx`), 
    when({product: {name: "Replication Server", version: 7}, platform: {name: "RHEL 8"}}, 
      (ctx) => `eprs/7/03_installation/03_installing_rpm_package/${fmtArchPath(ctx)}/eprs_rhel8_${fmtArchFilename(ctx)}.mdx`), );

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
