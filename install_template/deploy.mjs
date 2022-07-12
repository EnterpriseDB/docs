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

  const prefix = {
    rhel_8_x86_64: "01",
    other_linux8_x86_64: "02",
    rhel_7_x86_64: "03",
    centos_7_x86_64: "04",
    sles_15_x86_64: "05",
    sles_12_x86_64: "06",
    "ubuntu_20.04_x86_64": "07",
    "ubuntu_18.04_x86_64": "07a",
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
      prefix["ubuntu_20.04_x86_64"] = "05";
      prefix["ubuntu_18.04_x86_64"] = "05a";
      prefix["debian_10_x86_64"] = "05b";
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

  // prettier-ignore
  const destFilename = match(context, 
    when({product: {name: "EDB*Plus", version: 40}, platform: {name: "SLES 12"}}, 
    (ctx) => `edb_plus/40/03_installing_edb_plus/install_on_linux/${fmtArchPath(ctx)}/${prefix[plat]}_edbplus_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB*Plus", version: 40}, platform: {name: "SLES 15"}}, 
    (ctx) => `edb_plus/40/03_installing_edb_plus/install_on_linux/${fmtArchPath(ctx)}/${prefix[plat]}_edbplus_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB*Plus", version: 40}, platform: {name: "Debian 10"}}, 
    (ctx) => `edb_plus/40/03_installing_edb_plus/install_on_linux/${fmtArchPath(ctx)}/${prefix[plat]}_edbplus_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB*Plus", version: 40}, platform: {name: "Ubuntu 18.04"}}, 
    (ctx) => `edb_plus/40/03_installing_edb_plus/install_on_linux/${fmtArchPath(ctx)}/${prefix[plat]}_edbplus_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB*Plus", version: 40}, platform: {name: "Ubuntu 20.04"}}, 
    (ctx) => `edb_plus/40/03_installing_edb_plus/install_on_linux/${fmtArchPath(ctx)}/${prefix[plat]}_edbplus_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server"}, platform: {name: "SLES 12"}}, 
      (ctx) => `epas/14/epas_inst_linux/installing_epas_using_edb_repository/${fmtArchPath(ctx)}/epas_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server"}, platform: {name: "SLES 15"}}, 
      (ctx) => `epas/14/epas_inst_linux/installing_epas_using_edb_repository//${fmtArchPath(ctx)}/epas_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server"}, platform: {name: "Debian 10"}}, 
      (ctx) => `epas/14/epas_inst_linux/installing_epas_using_edb_repository//${fmtArchPath(ctx)}/epas_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server"}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `epas/14/epas_inst_linux/installing_epas_using_edb_repository//${fmtArchPath(ctx)}/epas_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Postgres Advanced Server"}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `epas/14/epas_inst_linux/installing_epas_using_edb_repository//${fmtArchPath(ctx)}/epas_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Failover Manager", version: 4.4}, platform: {name: "SLES 12"}}, 
      (ctx) => `efm/4/03_installing_efm/${fmtArchPath(ctx)}/efm4_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Failover Manager", version: 4.4}, platform: {name: "SLES 15"}}, 
      (ctx) => `efm/4/03_installing_efm/${fmtArchPath(ctx)}/efm4_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Failover Manager", version: 4.4}, platform: {name: "Debian 10"}}, 
      (ctx) => `efm/4/03_installing_efm/${fmtArchPath(ctx)}/efm4_deb10_${fmtArchFilename(ctx)}.mdx`),      
    when({product: {name: "Failover Manager", version: 4.4}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `efm/4/03_installing_efm/${fmtArchPath(ctx)}/efm4_ubuntu18_${fmtArchFilename(ctx)}.mdx`),      
    when({product: {name: "Failover Manager", version: 4.4}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `efm/4/03_installing_efm/${fmtArchPath(ctx)}/efm4_ubuntu20_${fmtArchFilename(ctx)}.mdx`),      
    when({product: {name: "Hadoop Foreign Data Wrapper", version: 2}, platform: {name: "SLES 12"}}, 
      (ctx) => `hadoop_data_adapter/2/05_installing_the_hadoop_data_adapter/${fmtArchPath(ctx)}/hadoop_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Hadoop Foreign Data Wrapper", version: 2}, platform: {name: "SLES 15"}}, 
      (ctx) => `hadoop_data_adapter/2/05_installing_the_hadoop_data_adapter/${fmtArchPath(ctx)}/hadoop_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Hadoop Foreign Data Wrapper", version: 2}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `hadoop_data_adapter/2/05_installing_the_hadoop_data_adapter/${fmtArchPath(ctx)}/hadoop_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Hadoop Foreign Data Wrapper", version: 2}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `hadoop_data_adapter/2/05_installing_the_hadoop_data_adapter/${fmtArchPath(ctx)}/hadoop_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Hadoop Foreign Data Wrapper", version: 2}, platform: {name: "Debian 10"}}, 
      (ctx) => `hadoop_data_adapter/2/05_installing_the_hadoop_data_adapter/${fmtArchPath(ctx)}/hadoop_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB JDBC Connector"}, platform: {name: "SLES 12"}}, 
      (ctx) => `jdbc_connector/42.3.3.1/04_installing_and_configuring_the_jdbc_connector/01_installing_the_connector_with_an_rpm_package/${fmtArchPath(ctx)}/jdbc42_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB JDBC Connector"}, platform: {name: "SLES 15"}}, 
      (ctx) => `jdbc_connector/42.3.3.1/04_installing_and_configuring_the_jdbc_connector/01_installing_the_connector_with_an_rpm_package/${fmtArchPath(ctx)}/jdbc42_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB JDBC Connector"}, platform: {name: "Debian 10"}}, 
      (ctx) => `jdbc_connector/42.3.3.1/04_installing_and_configuring_the_jdbc_connector/01_installing_the_connector_with_an_rpm_package/${fmtArchPath(ctx)}/jdbc42_deb10_${fmtArchFilename(ctx)}.mdx`),
      when({product: {name: "EDB JDBC Connector"}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `jdbc_connector/42.3.3.1/04_installing_and_configuring_the_jdbc_connector/01_installing_the_connector_with_an_rpm_package/${fmtArchPath(ctx)}/jdbc42_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB JDBC Connector"}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `jdbc_connector/42.3.3.1/04_installing_and_configuring_the_jdbc_connector/01_installing_the_connector_with_an_rpm_package/${fmtArchPath(ctx)}/jdbc42_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Migration Toolkit"}, platform: {name: "SLES 12"}}, 
      (ctx) => `migration_toolkit/55/05_installing_mtk/install_on_linux/${fmtArchPath(ctx)}/${prefix[plat]}_mtk55_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Migration Toolkit"}, platform: {name: "SLES 15"}}, 
      (ctx) => `migration_toolkit/55/05_installing_mtk/install_on_linux/${fmtArchPath(ctx)}/${prefix[plat]}_mtk55_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Migration Toolkit"}, platform: {name: "Debian 10"}}, 
      (ctx) => `migration_toolkit/55/05_installing_mtk/install_on_linux/${fmtArchPath(ctx)}/${prefix[plat]}_mtk55_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Migration Toolkit"}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `migration_toolkit/55/05_installing_mtk/install_on_linux/${fmtArchPath(ctx)}/${prefix[plat]}_mtk55_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Migration Toolkit"}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `migration_toolkit/55/05_installing_mtk/install_on_linux/${fmtArchPath(ctx)}/${prefix[plat]}_mtk55_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "MongoDB Foreign Data Wrapper", version: 5}, platform: {name: "SLES 12"}}, 
      (ctx) => `mongo_data_adapter/5/04_installing_the_mongo_data_adapter/${fmtArchPath(ctx)}/mongo_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "MongoDB Foreign Data Wrapper", version: 5}, platform: {name: "SLES 15"}}, 
      (ctx) => `mongo_data_adapter/5/04_installing_the_mongo_data_adapter/${fmtArchPath(ctx)}/mongo_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "MongoDB Foreign Data Wrapper", version: 5}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `mongo_data_adapter/5/04_installing_the_mongo_data_adapter/${fmtArchPath(ctx)}/mongo_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "MongoDB Foreign Data Wrapper", version: 5}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `mongo_data_adapter/5/04_installing_the_mongo_data_adapter/${fmtArchPath(ctx)}/mongo_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "MongoDB Foreign Data Wrapper", version: 5}, platform: {name: "Debian 10"}}, 
      (ctx) => `mongo_data_adapter/5/04_installing_the_mongo_data_adapter/${fmtArchPath(ctx)}/mongo_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "MySQL Foreign Data Wrapper", version: 2}, platform: {name: "SLES 12"}}, 
      (ctx) => `mysql_data_adapter/2/04_installing_the_mysql_data_adapter/${fmtArchPath(ctx)}/${prefix[plat]}_mysql_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "MySQL Foreign Data Wrapper", version: 2}, platform: {name: "SLES 15"}}, 
      (ctx) => `mysql_data_adapter/2/04_installing_the_mysql_data_adapter/${fmtArchPath(ctx)}/${prefix[plat]}_mysql_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB OCL Connector"}, platform: {name: "SLES 12"}}, 
      (ctx) => `ocl_connector/${ctx.product.version}/04_open_client_library/01_installing_and_configuring_the_ocl_connector/install_on_linux_using_edb_repo/${fmtArchPath(ctx)}/${prefix[plat]}_ocl_connector14_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB OCL Connector"}, platform: {name: "SLES 15"}}, 
      (ctx) => `ocl_connector/${ctx.product.version}/04_open_client_library/01_installing_and_configuring_the_ocl_connector/install_on_linux_using_edb_repo/${fmtArchPath(ctx)}/${prefix[plat]}_ocl_connector14_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB OCL Connector"}, platform: {name: "Debian 10"}}, 
      (ctx) => `ocl_connector/${ctx.product.version}/04_open_client_library/01_installing_and_configuring_the_ocl_connector/install_on_linux_using_edb_repo/${fmtArchPath(ctx)}/${prefix[plat]}_ocl_connector14_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB OCL Connector"}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `ocl_connector/${ctx.product.version}/04_open_client_library/01_installing_and_configuring_the_ocl_connector/install_on_linux_using_edb_repo/${fmtArchPath(ctx)}/${prefix[plat]}_ocl_connector14_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB OCL Connector"}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `ocl_connector/${ctx.product.version}/04_open_client_library/01_installing_and_configuring_the_ocl_connector/install_on_linux_using_edb_repo/${fmtArchPath(ctx)}/${prefix[plat]}_ocl_connector14_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB ODBC Connector"}, platform: {name: "SLES 12"}}, 
      (ctx) => `odbc_connector/13/03_installing_edb_odbc/01_installing_linux/${fmtArchPath(ctx)}/${prefix[plat]}_odbc13_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB ODBC Connector"}, platform: {name: "SLES 15"}}, 
      (ctx) => `odbc_connector/13/03_installing_edb_odbc/01_installing_linux/${fmtArchPath(ctx)}/${prefix[plat]}_odbc13_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB ODBC Connector"}, platform: {name: "Debian 10"}}, 
      (ctx) => `odbc_connector/13/03_installing_edb_odbc/01_installing_linux/${fmtArchPath(ctx)}/${prefix[plat]}_odbc13_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB ODBC Connector"}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `odbc_connector/13/03_installing_edb_odbc/01_installing_linux/${fmtArchPath(ctx)}/${prefix[plat]}_odbc13_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB ODBC Connector"}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `odbc_connector/13/03_installing_edb_odbc/01_installing_linux/${fmtArchPath(ctx)}/${prefix[plat]}_odbc13_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB pgBouncer", version: 1.16}, platform: {name: "SLES 12"}}, 
      (ctx) => `pgbouncer/1.16/01_installation/install_on_linux/${fmtArchPath(ctx)}/pgbouncer_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB pgBouncer", version: 1.16}, platform: {name: "SLES 15"}}, 
      (ctx) => `pgbouncer/1.16/01_installation/install_on_linux/${fmtArchPath(ctx)}/pgbouncer_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB pgBouncer", version: 1.16}, platform: {name: "Debian 10"}}, 
      (ctx) => `pgbouncer/1.16/01_installation/install_on_linux/${fmtArchPath(ctx)}/pgbouncer_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB pgBouncer", version: 1.16}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `pgbouncer/1.16/01_installation/install_on_linux/${fmtArchPath(ctx)}/pgbouncer_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB pgBouncer", version: 1.16}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `pgbouncer/1.16/01_installation/install_on_linux/${fmtArchPath(ctx)}/pgbouncer_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II", version: 4.3}, platform: {name: "SLES 12"}}, 
      (ctx) => `pgpool/4.3/01_installing_and_configuring_the_pgpool-II/${fmtArchPath(ctx)}/${prefix[plat]}_pgpool_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II", version: 4.3}, platform: {name: "SLES 15"}}, 
      (ctx) => `pgpool/4.3/01_installing_and_configuring_the_pgpool-II/${fmtArchPath(ctx)}/${prefix[plat]}_pgpool_sles15_${fmtArchFilename(ctx)}.mdx`),      
    when({product: {name: "EDB Pgpool-II", version: 4.3}, platform: {name: "Debian 10"}}, 
      (ctx) => `pgpool/4.3/01_installing_and_configuring_the_pgpool-II/${fmtArchPath(ctx)}/${prefix[plat]}_pgpool_deb10_${fmtArchFilename(ctx)}.mdx`),      
    when({product: {name: "EDB Pgpool-II", version: 4.3}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `pgpool/4.3/01_installing_and_configuring_the_pgpool-II/${fmtArchPath(ctx)}/${prefix[plat]}_pgpool_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II", version: 4.3}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `pgpool/4.3/01_installing_and_configuring_the_pgpool-II/${fmtArchPath(ctx)}/${prefix[plat]}_pgpool_ubuntu20_${fmtArchFilename(ctx)}.mdx`),      
    when({product: {name: "EDB Pgpool-II Extensions", version: 4.3}, platform: {name: "SLES 12"}}, 
      (ctx) => `pgpool/4.3/02_extensions/${fmtArchPath(ctx)}/${prefix[plat]}_pgpoolext_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II Extensions", version: 4.3}, platform: {name: "SLES 15"}}, 
      (ctx) => `pgpool/4.3/02_extensions/${fmtArchPath(ctx)}/${prefix[plat]}_pgpoolext_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II Extensions", version: 4.3}, platform: {name: "Debian 10"}}, 
      (ctx) => `pgpool/4.3/02_extensions/${fmtArchPath(ctx)}/${prefix[plat]}_pgpoolext_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II Extensions", version: 4.3}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `pgpool/4.3/02_extensions/${fmtArchPath(ctx)}/${prefix[plat]}_pgpoolext_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "EDB Pgpool-II Extensions", version: 4.3}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `pgpool/4.3/02_extensions/${fmtArchPath(ctx)}/${prefix[plat]}_pgpoolext_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager server", version: 8}, platform: {name: "SLES 15"}}, 
      (ctx) => `pem/8/installing_pem_server/pem_server_inst_linux/installing_pem_server_using_edb_repository/${fmtArchPath(ctx)}/pem_server_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager server", version: 8}, platform: {name: "SLES 12"}}, 
      (ctx) => `pem/8/installing_pem_server/pem_server_inst_linux/installing_pem_server_using_edb_repository/${fmtArchPath(ctx)}/pem_server_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager server", version: 8}, platform: {name: "Debian 10"}}, 
      (ctx) => `pem/8/installing_pem_server/pem_server_inst_linux/installing_pem_server_using_edb_repository/${fmtArchPath(ctx)}/pem_server_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager server", version: 8}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `pem/8/installing_pem_server/pem_server_inst_linux/installing_pem_server_using_edb_repository/${fmtArchPath(ctx)}/pem_server_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager server", version: 8}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `pem/8/installing_pem_server/pem_server_inst_linux/installing_pem_server_using_edb_repository/${fmtArchPath(ctx)}/pem_server_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager agent", version: 8}, platform: {name: "SLES 15"}}, 
      (ctx) => `pem/8/installing_pem_agent/installing_on_linux/${fmtArchPath(ctx)}/pem_agent_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager agent", version: 8}, platform: {name: "SLES 12"}}, 
      (ctx) => `pem/8/installing_pem_agent/installing_on_linux/${fmtArchPath(ctx)}/pem_agent_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager agent", version: 8}, platform: {name: "Debian 10"}}, 
      (ctx) => `pem/8/installing_pem_agent/installing_on_linux/${fmtArchPath(ctx)}/pem_agent_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager agent", version: 8}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `pem/8/installing_pem_agent/installing_on_linux/${fmtArchPath(ctx)}/pem_agent_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Postgres Enterprise Manager agent", version: 8}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `pem/8/installing_pem_agent/installing_on_linux/${fmtArchPath(ctx)}/pem_agent_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "PostGIS", version: 3.1}, platform: {name: "SLES 12"}}, 
      (ctx) => `postgis/3.1/01a_installing_postgis/installing_on_linux/${fmtArchPath(ctx)}/postgis_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "PostGIS", version: 3.1}, platform: {name: "SLES 15"}}, 
      (ctx) => `postgis/3.1/01a_installing_postgis/installing_on_linux/${fmtArchPath(ctx)}/postgis_sles15_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "PostGIS", version: 3.1}, platform: {name: "Ubuntu 20.04"}}, 
      (ctx) => `postgis/3.1/01a_installing_postgis/installing_on_linux/${fmtArchPath(ctx)}/postgis_ubuntu20_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "PostGIS", version: 3.1}, platform: {name: "Ubuntu 18.04"}}, 
      (ctx) => `postgis/3.1/01a_installing_postgis/installing_on_linux/${fmtArchPath(ctx)}/postgis_ubuntu18_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "PostGIS", version: 3.1}, platform: {name: "Debian 10"}}, 
      (ctx) => `postgis/3.1/01a_installing_postgis/installing_on_linux/${fmtArchPath(ctx)}/postgis_deb10_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Replication Server", version: 7}, platform: {name: "SLES 12"}}, 
      (ctx) => `eprs/7/03_installation/03_installing_rpm_package/${fmtArchPath(ctx)}/${prefix[plat]}_eprs_sles12_${fmtArchFilename(ctx)}.mdx`),
    when({product: {name: "Replication Server", version: 7}, platform: {name: "SLES 15"}}, 
      (ctx) => `eprs/7/03_installation/03_installing_rpm_package/${fmtArchPath(ctx)}/${prefix[plat]}_eprs_sles15_${fmtArchFilename(ctx)}.mdx`),
  );

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

  const src = path.resolve(__dirname, "renders", srcFilename);
  const dest = path.resolve(__dirname, destPath, destFilename);
  try {
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.copyFile(src, dest);
    return { success: `deployed ${src} to ${dest}` };
  } catch (err) {
    return {
      warn: err.toString(),
      context: {
        src,
        dest,
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

run();
