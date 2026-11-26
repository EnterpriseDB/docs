---
title: Minor EDB Postgres Extended Server upgrade
description: Minor version upgrade of EDB Postgres Extended Server
product: EDB Postgres Extended Server
version: "18"
url: https://www.enterprisedb.com/docs/pge/latest/upgrading/minor_upgrade/
lastModified: 2025-11-25T15:48:33+01:00
---

# Minor EDB Postgres Extended Server upgrade

To perform a minor upgrade of your EDB Postgres Extended Server you only need to update your packages and restart the server.

To update your packages, ensure you use the correct package manager for your operating system.

- If you installed an RPM package of EDB Postgres Extended Server (on RHEL, AlmaLinux, Rocky Linux) with `dnf`, see [Minor EDB Postgres Extended Server upgrade of RPM packages](https://www.enterprisedb.com/docs/pge/latest/upgrading/minor_upgrade/dnf_upgrade/).

- If you installed a Debian package of EDB Postgres Extended Server (on Ubuntu, Debian) with `apt-get`, see [Minor EDB Postgres Extended Server upgrade of Debian packages ](https://www.enterprisedb.com/docs/pge/latest/upgrading/minor_upgrade/apt_upgrade/).

When you upgrade the packages, the packager manager installs the latest available minor version. For example, if you're running an xy.1 minor version, and the latest available minor version is xy.5, the package manager will install xy.5, skipping xy.2 to xy.4.

- [Minor upgrades on Debian environments](https://www.enterprisedb.com/docs/pge/latest/upgrading/minor_upgrade/apt_upgrade/): Perform a minor version upgrade of EDB Postgres Extended Server with the apt-get package manager
- [Minor upgrades on RPM environments](https://www.enterprisedb.com/docs/pge/latest/upgrading/minor_upgrade/dnf_upgrade/): Perform a minor version upgrade of EDB Postgres Extended Server with the dnf package manager

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
