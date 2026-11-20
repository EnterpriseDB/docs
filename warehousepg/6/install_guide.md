---
title: Installing and Upgrading WarehousePG
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/install_guide/
lastModified: 2026-10-21T11:07:46Z
---

# Installing and Upgrading WarehousePG

Information about installing, configuring, and upgrading WarehousePG software and configuring WarehousePG host machines.

- **[Platform Requirements](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/platform-requirements/)**\
  This topic describes the WarehousePG 6 platform and operating system software requirements.
- **[Estimating Storage Capacity](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/capacity_planning/)**\
  To estimate how much data your WarehousePG cluster can accommodate, use these measurements as guidelines. Also keep in mind that you may want to have extra space for landing backup files and data load files on each segment host.
- **[Configure Operating System](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/config_os/)**\
  Describes how to prepare your operating system environment for WarehousePG software installation.
- **[Installing the WarehousePG Software](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/install_whpg/)**\
  Describes how to install the WarehousePG software binaries on all of the hosts that will comprise your WarehousePG cluster, how to enable passwordless SSH for the `gpadmin` user, and how to verify the installation.
- **[Creating the Data Storage Areas](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/create_data_dirs/)**\
  Describes how to create the directory locations where WarehousePG data is stored for each coordinator, standby, and segment instance.
- **[Validating Your Systems](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/validate/)**\
  Validate your hardware and network performance.
- **[Initializing WarehousePG](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/init_whpg/)**\
  Describes how to initialize a WarehousePG database system.
- **[Installing Additional Modules](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/additional_modules/)**\
  Installation guides for extensions, procedural languages, and external components that require a separate package install, as well as instructions for enabling bundled modules.
- **[Configuring Timezone and Localization Settings](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/localization/)**\
  Describes the available timezone and localization features of WarehousePG.
- **[Performing a minor upgrade](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/minor_upgrade/)**\
  Explains how to upgrade to a newer version of WarehousePG 6.x.
- **[Upgrading to WarehousePG 6](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/upgrading/)**\
  This topic identifies the upgrade paths for upgrading a WarehousePG 6.x release to a newer 6.x release.
- **[Migrating WarehousePG from Enterprise Linux 7 to 8 or 9](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/migrate-linux/)**
  This topic describes how to migrate a WarehousePG installation from Enterprise Linux (EL) version 7 to Enterprise Linux 8 or Enterprise Linux 9, while maintaining your existing version of WarehousePG.
- **[Enabling iptables (Optional)](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/enable_iptables/)**\
  On Linux systems, you can configure and enable the `iptables` firewall to work with WarehousePG.
- **[Installation Management Utilities](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/installation_utilities/)**\
  References for the command-line management utilities used to install and initialize a WarehousePG cluster.
- **[WarehousePG Environment Variables](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/env_var_ref/)**\
  Reference of the environment variables to set for WarehousePG.
- **[Example Ansible Playbook](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/ansible-example/)**\
  A sample Ansible playbook to install a WarehousePG software release onto the hosts that will comprise a WarehousePG cluster.

* [Platform Requirements](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/platform-requirements/): This topic describes the WarehousePG 6 platform and operating system software requirements for deploying the software to on-premise hardware, or to public cloud services such as AWS, GCP, or Azure.
* [Estimating Storage Capacity](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/capacity_planning/): To estimate how much data your WarehousePG cluster can accommodate, use these measurements as guidelines. Also keep in mind that you may want to have extra space for landing backup files and data load files on each segment host.
* [Configuring Your Systems](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/config_os/): Describes how to prepare your operating system environment for WarehousePG software installation.
* [Installing WarehousePG](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/install_whpg/): WarehousePG software is a downloadable package that you install on each host system using your operating system's package management system. You must install WarehousePG on each host machine of the WarehousePG cluster.
* [Creating the Data Storage Areas](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/create_data_dirs/): Describes how to create the directory locations where WarehousePG data is stored for each coordinator, standby, and segment instance.
* [Validating Your Systems](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/validate/): Validate your hardware and network performance.
* [Initializing WarehousePG](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/init_whpg/): Describes how to initialize a WarehousePG database system.
* [Installing additional modules](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/additional_modules/): Installation guides for WarehousePG extensions, procedural languages, and external components that require a separate package install.
* [Installing Optional Extensions](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/data_sci_pkgs/): Information about installing optional WarehousePG extensions and packages, such as the Procedural Language extensions.
* [Configuring Timezone and Localization Settings](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/localization/): Describes the available timezone and localization features of WarehousePG.
* [Enabling iptables (Optional)](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/enable_iptables/): On Linux systems, you can configure and enable the iptables firewall to work with WarehousePG.
* [Installation Management Utilities](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/installation_utilities/): References for the command-line management utilities used to install and initialize a WarehousePG cluster.
* [Example Ansible Playbook](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/ansible-example/): A sample Ansible playbook to install a WarehousePG software release onto the hosts that will comprise a WarehousePG cluster.
* [WarehousePG Environment Variables](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/env_var_ref/): Reference of the environment variables to set for WarehousePG.
* [Procedural Language, Machine Learning, and Geospatial Extensions](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/install_extensions/): The extension documentation in the WarehousePG Reference Guide contains information about installing extension packages and using extensions.
* [Migrating WarehousePG from Enterprise Linux 7 to 8 or 9](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/migrate-linux/): Use this procedure to migrate a WarehousePG installation from Enterprise Linux (EL) version 7 to Enterprise Linux 8 or Enterprise Linux 9, while maintaining your existing version of WarehousePG.
* [Performing a minor upgrade](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/minor_upgrade/): Perform a minor version upgrade to 6.x. Because minor versions are binary-compatible, this process replaces the software binaries without requiring a full data migration.
* [Upgrading from an Earlier WarehousePG 6 Release](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/upgrading/): The upgrade path supported for this release is WarehousePG 6.x to a newer WarehousePG 6.x release.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
