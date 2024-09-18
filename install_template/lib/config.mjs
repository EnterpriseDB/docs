import fs from "fs/promises";
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

const osPath = (osName) => {
  const mappings = [
    [/RHEL \d+/, "rhel"],
    [/RHEL \d+ or OL \d+/, "rhel"],
    [/Oracle Linux (OL) \d+/, "rhel"],
    [/AlmaLinux \d+ or Rocky Linux \d+/, "other_linux"],
    [/Rocky Linux \d+/, "other_linux"],
    [/AlmaLinux \d+/, "other_linux"],
    [/CentOS \d+/, "centos"],
    [/SLES \d+/, "sles"],
    [/Ubuntu [\d\.]+/, "ubuntu"],
    [/Debian [\d\.]+/, "debian"],
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

const osMajorVersion = (osVersion) => {
  const match = osVersion.match(/\d+/);
  if (match === null)
    return osVersion;
  return match[0];
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
        const path = osPath(c.name);
        const version = osVersion(c.name);
        const majorVersion = osMajorVersion(version);
        osArchDetail.push({name: c.name, family, shortname, path, version, majorVersion});
        osArchDetail.hasOS = hasOS;
        osArchDetail.hasFamily = hasFamily;
        osArchDetail.filterOS = filterOS;
        osArchDetail.filterFamily = filterFamily;
      }
      return p;
    }, {});

    // sort by descending major version (where possible)
    // this is generally the order we want to list these
    for (let prodVersion in cpuArchitecturesForVersion) {
      const prodVersionDetail = cpuArchitecturesForVersion[prodVersion];
      for (let arch in prodVersionDetail) {
        const osArchDetail = prodVersionDetail[arch];
        prodVersionDetail[arch] = osArchDetail.sort((a,b) => a.majorVersion - b.majorVersion);
      }
    }    

    products.push({name: product.name, cpuArchitecturesForVersion});
  }
  return products;
};

export default loadProductConfig;
