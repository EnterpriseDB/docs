---
title: Upgrading a PEM installation
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/upgrading/upgrading_pem_installation/
lastModified: 2024-08-08T16:57:50+02:00
---

# Upgrading a PEM installation

The process of upgrading a PEM installation is platform specific. You can update a PEM agent or server on a Linux platform by using the native packages and on a Windows platform by using the PEM graphical installer available for Windows.

> **Note**
>
> - Prior to PEM 7.8 release, you installed PEM agent or server on Linux either by using the\
>   graphical installer or by using the RPMs.
> - For PEM version 7.8 and later, PEM graphical installers for Linux are discontinued. To upgrade a
>   PEM agent or server on a Linux host from any earlier version to PEM version 7.9 or later, you must use native packages.

Links to PEM installers and RPMs are available at the [EDB website](https://www.enterprisedb.com/downloads/edb-postgres-enterprise-manager).

- [Upgrading a PEM installation on a Linux host](https://www.enterprisedb.com/docs/pem/9/upgrading/upgrading_pem_installation/upgrading_pem_installation_linux_rpm/): To upgrade PEM component software on Linux hosts, install a newer version of the PEM component packages in the following order:
- [Upgrading a PEM installation on a Windows host](https://www.enterprisedb.com/docs/pem/9/upgrading/upgrading_pem_installation/upgrading_pem_installation_windows/): To upgrade PEM component software on Windows hosts, invoke a newer version of the PEM component installers in the following order:
- [Upgrading a PEM installation on high-availability mode using HTTPD](https://www.enterprisedb.com/docs/pem/9/upgrading/upgrading_pem_installation/high_availability_upgrade/): If you're using Failover Manager for high availability on your PEM server, you can perform a major or minor upgrade of the PEM installation by updating the PEM packages.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
