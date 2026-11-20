---
title: Minor EDB Postgres Extended Server upgrade
description: Minor version upgrade of EDB Postgres Extended Server
product: EDB Postgres Extended Server
version: "17"
url: https://www.enterprisedb.com/docs/pge/17/upgrading/minor_upgrade/
lastModified: 2026-11-06T11:51:37+01:00
---

# Minor EDB Postgres Extended Server upgrade

To perform a minor upgrade of your EDB Postgres Extended Server you only need to update your packages and restart the server.

To update your packages, ensure you use the correct package manager for your operating system.

- If you installed an RPM package of EDB Postgres Extended Server (on RHEL, AlmaLinux, Rocky Linux) with `dnf`, see [Minor EDB Postgres Extended Server upgrade of RPM packages](https://www.enterprisedb.com/docs/pge/17/upgrading/minor_upgrade/dnf_upgrade/). If the `postgres` OS user on your host is managed by Active Directory (sssd or winbind) or LDAP, prepare the host first. See [Installing on hosts where the postgres user is managed by AD or LDAP](https://www.enterprisedb.com/docs/pge/17/installing/sysusers_ad_ldap/).

- If you installed a Debian package of EDB Postgres Extended Server (on Ubuntu, Debian) with `apt-get`, see [Minor EDB Postgres Extended Server upgrade of Debian packages ](https://www.enterprisedb.com/docs/pge/17/upgrading/minor_upgrade/apt_upgrade/).

When you upgrade the packages, the packager manager installs the latest available minor version. For example, if you're running an xy.1 minor version, and the latest available minor version is xy.5, the package manager will install xy.5, skipping xy.2 to xy.4.

- [Minor upgrades on Debian environments](https://www.enterprisedb.com/docs/pge/17/upgrading/minor_upgrade/apt_upgrade/): Perform a minor version upgrade of EDB Postgres Extended Server with the apt-get package manager
- [Minor upgrades on RPM environments](https://www.enterprisedb.com/docs/pge/17/upgrading/minor_upgrade/dnf_upgrade/): Perform a minor version upgrade of EDB Postgres Extended Server with the dnf package manager

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
