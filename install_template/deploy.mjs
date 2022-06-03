import fs from "fs/promises";
import { existsSync as fileExists } from "fs";
import path from "path";
import nunjucks from "nunjucks";
import prettier from "prettier";
import yaml from "yaml";

nunjucks.configure("templates", { throwOnUndefined: true, autoescape: false });

/**
 * Loop through the config.yaml file and generate docs for every product/platform/supported version combination found.
 * @returns void
 */
const run = async () => {
  const config = yaml.parse(await fs.readFile("config.yaml", "utf8"));

  config.products.forEach((product) => {
    product.platforms.forEach((platform) => {
      platform["supported versions"].forEach((version) => {
        moveDoc(product, platform, version);
      });
    });
  });
    
  return;
};

/**
 * Composes the code needed to copy a document for a product/platform/version combination.
 * @param product The product name we are generating a template for
 * @param platform The platform and architecture we are generating docs for (e.g. { name: Centos 7, arch: x86_64 })
 * @param version The version of the product to generate docs for
 * @returns void
 */
const moveDoc = (product, platform, version) => {
/*
  console.log(
    `Copying install guide for ${product.name} ${version} on ${platform.name} ${platform.arch}`,
  );
*/
    
  const context = generateContext(product, platform, version);

  const product_stub = formatStringForFile(context.product.name)
    
  const filename =
    [
      product_stub,
      context.product.version,
      formatStringForFile(context.platform.name),
      context.platform.arch,
    ].join("_") + ".mdx";

  /*console.log(`  copying ${filename}`);*/

  const prefix = {
    rhel_8_x86_64: "01",
    other_linux8_x86_64: "02",
    rhel_7_x86_64: "03",
    centos_7_x86_64: "04",
    sles_15_x86_64: "05",
    sles_12_x86_64: "06",
    ubuntu_20_deb10_x86_64: "07",
    ubuntu_18_deb9_x86_64: "08",
    rhel_8_ppc64le: "09",
    rhel_7_ppc64le: "10",
    sles_15_ppc64le: "11",
    sles_12_ppc64le: "12",
  };

  const abrev_product = {
        "failover-manager": "efm",
        "migration-toolkit": "mtk",
        "hadoop-foreign-data-wrapper": "hadoop",
        "mongodb-foreign-data-wrapper": "mongo",
        "mysql-foreign-data-wrapper": "mysql",
        "edb-pgpoolii": "pgpool",
        "edb-pgpoolii-extensions": "pgpool_extensions",
        "postgis": "postgis",
        "edb-jdbc-connector": "jdbc",
        "edb-ocl-connector": "ocl",
        "edb-odbc-connector": "odbc",
      "edb-pgbouncer": "pgbouncer",
      
      
  };


  if (abrev_product[product_stub] == null){
    console.error(
        `[ERROR] product abbreviation missing\n` +
            product_stub);
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
        "edb-pgpoolii": "01",
        "edb-pgpoolii-extensions": "pgpool_extensions",
        "postgis": "01a",
        "edb-jdbc-connector": "04",
        "edb-ocl-connector": "03",
        "edb-odbc-connector": "03",
      "edb-pgbouncer": "01",
      
      
    };

    var dirpath;
    var file;


    switch (product_stub) {
        /* Products that don't have an install_on_linux layer */
    case "failover-manager":
        dirpath = [
            "..",
            "product_docs",
            "docs",
            abrev_product[product_stub],
            context.product.version.toString().replace(/\..*/, ""),
            [
                product_prefix[product_stub],
                "installing",
                    abrev_product[product_stub],
            ].join("_"),
            expand_arch[context.platform.arch],
        ].join("/");
        
        file =
            [
                prefix[plat],
                abrev_product[product_stub]+ context.product.version.toString().replace(/\..*/, ""),
                context.platform.name.toLowerCase().replace(/ /g, ""),
                context.platform.arch.replace(/_?64/g, ""),
            ].join("_") + ".mdx";
        break;
        
        /* Products that don't abreviate in the directory */ 
    case "migration-toolkit":
        dirpath = [
            "..",
            "product_docs",
            "docs",
            context.product.name.toLowerCase().replace(/ /g, '_'),
            context.product.version.toString().replace(/\..*/, ""),
            [
                product_prefix[product_stub],
                "installing",
                abrev_product[product_stub],
            ].join("_"),
            "install_on_linux",
            expand_arch[context.platform.arch],
        ].join("/");
        
            file =
            [
                prefix[plat],
                abrev_product[product_stub]+ context.product.version.toString().replace(/\..*/, ""),
                context.platform.name.toLowerCase().replace(/ /g, ""),
                context.platform.arch.replace(/_?64/g, ""),
            ].join("_") + ".mdx";
        break;

        /* Data wrappers */
    case "hadoop-foreign-data-wrapper":
    case "mongodb-foreign-data-wrapper":
    case "mysql-foreign-data-wrapper":
        prefix["sles_12_x86"]="07";
        prefix["sles_12_x86_64"]="07";
        prefix["rhel_8_ppc64le"]="13";
        prefix["rhel_7_ppc64le"]="15";
        prefix["sles_12_ppc64le"]="19";
        prefix["sles_15_ppc64le"]="17";

        dirpath = [
            "..",
            "product_docs",
            "docs",        
            abrev_product[product_stub] + "_data_adapter",
            context.product.version.toString().replace(/\..*/, ""),
            [
                product_prefix[product_stub],
                "installing_the",
                abrev_product[product_stub],
                "data_adapter"
            ].join("_"),
            expand_arch[context.platform.arch],
        ].join("/");
        
        file =
            [
                prefix[plat],
                abrev_product[product_stub],
                context.platform.name.toLowerCase().replace(/ /g, ""),
                context.platform.arch.replace(/_?64/g, ""),
            ].join("_") + ".mdx";
        break;

    case "edb-jdbc-connector":
        dirpath = [
            "..",
            "product_docs",
            "docs",        
            abrev_product[product_stub] + "_connector",
            context.product.version,
            [
                product_prefix[product_stub],
                "installing_and_configuring_the",
                abrev_product[product_stub],
                "connector",
            ].join("_"),
            "01_installing_the_connector_with_an_rpm_package",
            expand_arch[context.platform.arch],
        ].join("/");
        
        file =
            [
                prefix[plat],
                abrev_product[product_stub]+ context.product.version.toString().replace(/\..*/, ""),
                context.platform.name.toLowerCase().replace(/ /g, ""),
                context.platform.arch.replace(/_?64/g, ""),
            ].join("_") + ".mdx";
        break;

    case "edb-odbc-connector":
        dirpath = [
            "..",
            "product_docs",
            "docs",        
            abrev_product[product_stub] + "_connector",
            context.product.version.toString().replace(/\..*/, ""),
            [
                product_prefix[product_stub],
                "installing_edb",
                abrev_product[product_stub],
            ].join("_"),
            "01_installing_linux",
            expand_arch[context.platform.arch],
        ].join("/");
        
        file =
            [
                prefix[plat],
                abrev_product[product_stub]+ context.product.version.toString().replace(/\..*/, ""),
                context.platform.name.toLowerCase().replace(/ /g, ""),
                context.platform.arch.replace(/_?64/g, ""),
            ].join("_") + ".mdx";
        break;

    case "edb-ocl-connector":
        dirpath = [
            "..",
            "product_docs",
            "docs",        
            abrev_product[product_stub] + "_connector",
            context.product.version,
            [
                product_prefix[product_stub],
                "installing_edb",
                abrev_product[product_stub],
            ].join("_"),
            "01_installing_linux",
            expand_arch[context.platform.arch],
        ].join("/");
        
        file =
            [
                prefix[plat],
                abrev_product[product_stub]+ context.product.version.toString().replace(/\..*/, ""),
                context.platform.name.toLowerCase().replace(/ /g, ""),
                context.platform.arch.replace(/_?64/g, ""),
            ].join("_") + ".mdx";
        break;
        
        
    case "edb-pgpoolii":
        dirpath = [
            "..",
            "product_docs",
            "docs",
            abrev_product[product_stub],
            context.product.version,
            [
                product_prefix[product_stub],
                "installing_and_configuring_the",
                abrev_product[product_stub]+"-II",
            ].join("_"),
            expand_arch[context.platform.arch],
        ].join("/");
        
            file =
            [
                prefix[plat],
                abrev_product[product_stub],
                context.platform.name.toLowerCase().replace(/ /g, ""),
                context.platform.arch.replace(/_?64/g, ""),
            ].join("_") + ".mdx";
        break;

    case "postgis":
        dirpath = [
            "..",
            "product_docs",
            "docs",
            abrev_product[product_stub],
            context.product.version,
            [
                product_prefix[product_stub],
                "installing",
                abrev_product[product_stub],
            ].join("_"),
            "installing_on_linux",
            expand_arch[context.platform.arch],
        ].join("/");
        
            file =
            [
                prefix[plat],
                abrev_product[product_stub],
                context.platform.name.toLowerCase().replace(/ /g, ""),
                context.platform.arch.replace(/_?64/g, ""),
            ].join("_") + ".mdx";
        break;

    default:
        dirpath = [
            "..",
            "product_docs",
            "docs",
            abrev_product[product_stub],
            context.product.version.toString().replace(/\..*/, ""),
            [
                product_prefix[product_stub],
                "installing",
                abrev_product[product_stub],
            ].join("_"),
            "install_on_linux",
            expand_arch[context.platform.arch],
        ].join("/");
        
            file =
            [
                prefix[plat],
                abrev_product[product_stub]+ context.product.version.toString().replace(/\..*/, ""),
                context.platform.name.toLowerCase().replace(/ /g, ""),
                context.platform.arch.replace(/_?64/g, ""),
            ].join("_") + ".mdx";
        break;
    }
    
        console.log(`renders/${filename} ${dirpath}/${file}`);
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
