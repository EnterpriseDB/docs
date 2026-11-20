---
title: EDB Postgres Advanced Server upgrade
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/upgrading/
lastModified: 2023-02-14T16:10:29+05:30
---

# EDB Postgres Advanced Server upgrade

This section provides information about upgrading EDB Postgres Advanced Server, including:

- `pg_upgrade` to upgrade from an earlier version of EDB Postgres Advanced Server to EDB Postgres Advanced Server 14.
- `yum` to perform a minor version upgrade on a Linux host.
- `StackBuilder Plus` to perform a minor version upgrade on a Windows host.

* [Upgrade considerations](https://www.enterprisedb.com/docs/epas/14/upgrading/03_limitations/): Consider the following when upgrading EDB Postgres Advanced Server:
* [Upgrading an installation with pg\_upgrade](https://www.enterprisedb.com/docs/epas/14/upgrading/04_upgrading_an_installation_with_pg_upgrade/): While minor upgrades between versions are fairly simple and require only the installation of new executables, past major version upgrades has been both expensive and time consuming. pg\_upgrade facilitates migration between any version of EDB Postgres Advanced Server (version 9.0 or later), and any subsequent release of EDB Postgres Advanced Server that is supported on the same platform.
* [Performing a minor version update of an RPM installation](https://www.enterprisedb.com/docs/epas/14/upgrading/05_performing_a_minor_version_update_of_an_rpm_installation/): If you used an RPM package to install EDB Postgres Advanced Server or its supporting components, you can use yum to perform a minor version upgrade to a more recent version. To review a list of the package updates that are available for your system, open a command line, assume root privileges, and enter the command:
* [Using StackBuilder Plus to perform a minor version update](https://www.enterprisedb.com/docs/epas/14/upgrading/06_using_stackbuilder_plus_to_perform_a_minor_version_update/): StackBuilder Plus is supported only on Windows systems.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
