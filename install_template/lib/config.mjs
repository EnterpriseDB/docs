import fs from "fs/promises";
import { version } from "os";
import yaml from "yaml";

const osFamily = (osName) => {
  const mappings = [
    [/RHEL \d+/, "RHEL"],
    [/RHEL \d+ or OL \d+/, "RHEL"],
    [/Oracle Linux (OL) \d+/, "RHEL"],
    [/AlmaLinux \d+ or Rocky Linux \d+/, "RHEL"],
    [/Rocky Linux \d+/, "RHEL"],
    [/AlmaLinux \d+/, "RHEL"],
    [/CentOS \d+/, "RHEL"],
    [/SLES \d+/, "SLES"],
    [/Ubuntu [\d\.]+/, "Debian"],
    [/Debian [\d\.]+/, "Debian"],
  ];

  for (let mapping of mappings) {
    if (mapping[0].test(osName))
      return mapping[1];
  }
  return "";
};

const osShortname = (osName) => {
  const mappings = [
    [/RHEL \d+/, "RHEL"],
    [/RHEL \d+ or OL \d+/, "RHEL"],
    [/Oracle Linux (OL) \d+/, "OL"],
    [/AlmaLinux \d+ or Rocky Linux \d+/, "Alma/Rocky"],
    [/Rocky Linux \d+/, "Rocky"],
    [/AlmaLinux \d+/, "Alma"],
    [/CentOS \d+/, "CentOS"],
    [/SLES \d+/, "SLES"],
    [/Ubuntu [\d\.]+/, "Ubuntu"],
    [/Debian [\d\.]+/, "Debian"],
  ];

  for (let mapping of mappings) {
    if (mapping[0].test(osName))
      return mapping[1];
  }
  return "";
};

const osVersion = (osName) => {
  return osName.match(/(?<version>[\d\.]+)\s*$/)?.groups?.version || '';
};

function hasOS(osShortname, osVersion) {
  return this.some((os) => os.shortname === osShortname && (!osVersion || osVersion === os.version));
}

function hasFamily(osFamily) {
  return this.some((os) => os.family === osFamily);
}

function filterFamily(osFamily) {
  return this.filter((os) => os.family === osFamily).sort((a,b) => b.version - a.version);
}

function filterOS(osShortname, osVersion) {
  return this.filter((os) => os.shortname === osShortname && (!osVersion || osVersion === os.version)).sort((a,b) => b.version - a.version);
}

const loadProductConfig = async (configFile) => {
  const config = yaml.parse(await fs.readFile(configFile, "utf8"));

  let products = [];

  for (let product of config.products) {
    let cpuArchitecturesForVersion = product.platforms.reduce((p,c) => {
      for (let prodVersion of c["supported versions"]) {
        const prodVersionDetail = p[prodVersion] = p[prodVersion] || {};
        const osArchDetail = prodVersionDetail[c.arch] = prodVersionDetail[c.arch] || [];
        const family = osFamily(c.name);
        const shortname = osShortname(c.name);
        const version = osVersion(c.name);
        osArchDetail.push({name: c.name, family, shortname, version});
        osArchDetail.hasOS = hasOS;
        osArchDetail.hasFamily = hasFamily;
        osArchDetail.filterOS = filterOS;
        osArchDetail.filterFamily = filterFamily;
      }
      return p;
    }, {});

    products.push({name: product.name, cpuArchitecturesForVersion});
  }
  return products;
};

export default loadProductConfig;
