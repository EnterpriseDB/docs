---
title: Minor version upgrade with a package manager
description: Describes using a package manager to perform a minor version upgrade of EDB Postgres Advanced Server.
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/upgrading/minor_upgrade/
lastModified: 2025-11-25T20:39:04+05:30
---

# Minor version upgrade with a package manager

Minor version upgrades require only updating existing executables and restarting the database server.

Select the minor upgrade method according to the underlying operating system of your database server:

- If you installed an RPM package of EDB Postgres Advanced Server (on RHEL, AlmaLinux, Rocky Linux) with `dnf`, see [Performing a minor version upgrade of an RPM installation](https://www.enterprisedb.com/docs/epas/latest/upgrading/minor_upgrade/05_performing_a_minor_version_update_of_an_rpm_installation/).

- If you installed a Debian package of EDB Postgres Advanced Server (on Ubuntu, Debian) with `apt-get`, see [Performing a minor version upgrade of a Debian installation](https://www.enterprisedb.com/docs/epas/latest/upgrading/minor_upgrade/performing_a_minor_version_update_of_deb_installation/).

- If you installed EDB Postgres Advanced Server with StackBuilder Plus, see [Using StackBuilder Plus to perform a minor version upgrade](https://www.enterprisedb.com/docs/epas/latest/upgrading/minor_upgrade/06_using_stackbuilder_plus_to_perform_a_minor_version_update/).

* [Performing a minor version upgrade on an RPM installation](https://www.enterprisedb.com/docs/epas/latest/upgrading/minor_upgrade/05_performing_a_minor_version_update_of_an_rpm_installation/): For RPM package installs, how to perform a minor version upgrade to a more recent version.
* [Performing a minor version upgrade on a Debian installation](https://www.enterprisedb.com/docs/epas/latest/upgrading/minor_upgrade/performing_a_minor_version_update_of_deb_installation/): For Debian package installs, how to perform a minor version upgrade to a more recent version.
* [Using StackBuilder Plus to perform a minor version upgrade](https://www.enterprisedb.com/docs/epas/latest/upgrading/minor_upgrade/06_using_stackbuilder_plus_to_perform_a_minor_version_update/): How to use the StackBuilder Plus utility to install supporting modules.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
