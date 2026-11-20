---
title: Installing and upgrading WarehousePG
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/
lastModified: 2026-09-25T15:14:11+01:00
---

# Installing and upgrading WarehousePG

Information about installing, configuring, and upgrading WarehousePG software and configuring WarehousePG host machines.

- **[Platform Requirements](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/platform-requirements/)**\
  This topic describes the WarehousePG 7 platform and operating system software requirements.
- **[Estimating Storage Capacity](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/capacity_planning/)**\
  To estimate how much data your WarehousePG cluster can accommodate, use these measurements as guidelines. Also keep in mind that you may want to have extra space for landing backup files and data load files on each segment host.
- **[Configure Operating System](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/config_os/)**\
  Describes how to prepare your operating system environment for WarehousePG software installation.
- **[Installing WarehousePG](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/install_whpg/)**\
  Describes how to install the WarehousePG software binaries on all of the hosts that will comprise your WarehousePG cluster, how to enable passwordless SSH for the `gpadmin` user, and how to verify the installation.
- **[Creating the Data Storage Areas](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/create_data_dirs/)**\
  Describes how to create the directory locations where WarehousePG data is stored for each coordinator, standby, and segment instance.
- **[Validating the WHPG Cluster](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/validate/)**\
  Validate your hardware and network performance.
- **[Initializing WarehousePG](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/init_whpg/)**\
  Describes how to initialize a WarehousePG database system.
- **[Installing Additional Modules](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/additional_modules/)**\
  Installation guides for extensions, procedural languages, and external components that require a separate package install, as well as instructions for enabling bundled modules.
- **[Configuring Timezone and Localization Settings](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/localization/)**\
  Describes the available timezone and localization features of WarehousePG.
- **[Important Changes Between WHPG 6 and WHPG 7](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/6x_7x_changes/)**
  Describes the changes between WarehousePG 6 and WarehousePG 7 that could potentially affect your existing 6 application when you move to 7.
- **[Performing a minor upgrade](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/minor_upgrade/)**\
  Explains how to upgrade to a newer version of WarehousePG 7.x.
- **[Upgrading from whpg 6 to whpg 7](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/upgrading_6_to_7/)**\
  Explains how to upgrade from WarehousePG 6 to WarehousePG 7.
- **[Migrating Partition Maintenance Scripts to the New WarehousePG 7 Partitioning Catalogs](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/migrate-classic-partitioning/)**
  Provides guidance on migrating partition maintenance scripts that you may have written for WarehousePG 6 to use the new partitioning system catalogs in WarehousePG 7.
- **[Enabling iptables (Optional)](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/enable_iptables/)**\
  On Linux systems, you can configure and enable the `iptables` firewall to work with WarehousePG.
- **[Installation Utilities Reference](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/installation_utilities/)**\
  References for the command-line management utilities used to install and initialize a WarehousePG cluster.
- **[WarehousePG Environment Variables](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/env_var/)**\
  Reference of the environment variables to set for WarehousePG.
- **[Example Ansible Playbook](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/ansible-example/)**
  A sample Ansible playbook to install a Greenplum Database software release onto the hosts that will comprise a Greenplum Database system.

* [Platform Requirements](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/platform-requirements/): This topic describes the WarehousePG 7 platform and operating system software requirements for deploying the software to on-premise hardware, or to public cloud services such as AWS, GCP, or Azure.
* [Estimating Storage Capacity](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/capacity_planning/): To estimate how much data your WarehousePG cluster can accommodate, use these measurements as guidelines. Also keep in mind that you may want to have extra space for landing backup files and data load files on each segment host.
* [Configure Operating System](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/config_os/): Describes how to prepare your operating system environment for WarehousePG software installation.
* [Installing WarehousePG](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/install_whpg/): WarehousePG software is a downloadable package that you install on each host system using your operating system's package management system. You must install WarehousePG on each host machine of the WarehousePG cluster.
* [Creating the Data Storage Areas](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/create_data_dirs/): Describes how to create the directory locations where WarehousePG data is stored for each coordinator, standby, and segment instance.
* [Validating the WHPG Cluster](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/validate/): Validate your hardware and network performance.
* [Initializing WarehousePG](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/init_whpg/): Describes how to initialize a WarehousePG database system.
* [Installing Additional Modules](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/additional_modules/): Installation guides for WarehousePG extensions, procedural languages, and external components that require a separate package install.
* [Configuring Timezone and Localization Settings](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/localization/): Describes the available timezone and localization features of WarehousePG.
* [Important Changes Between WHPG 6 and WHPG 7](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/6x_7x_changes/): There are a substantial number of changes between WarehousePG 6 and WarehousePG 7 that could potentially affect your existing 6 application when you move to 7. This topic provides information about these changes.
* [Performing a minor upgrade](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/minor_upgrade/): Perform a minor version upgrade. Because minor versions are binary-compatible, this process replaces the software binaries without requiring a full data migration.
* [Upgrading from WarehousePG 6 to WarehousePG 7](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/upgrading_6_to_7/): This topic walks you through upgrading from WarehousePG 6 to WarehousePG 7.
* [Migrating Partition Maintenance Scripts to the New WarehousePG 7 Partitioning Catalogs](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/migrate-classic-partitioning/): This topic provides guidance on migrating partition maintenance scripts that you may have written for WarehousePG 6 to use the new partitioning system catalogs in WarehousePG 7.
* [Enabling iptables (Optional)](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/enable_iptables/): On Linux systems, you can configure and enable the iptables firewall to work with WarehousePG.
* [Installation Utilities Reference](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/installation_utilities/): References for the command-line management utilities used to install and initialize a WarehousePG cluster.
* [WarehousePG Environment Variables](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/env_var/): Reference of the environment variables to set for WarehousePG.
* [Example Ansible Playbook](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/ansible-example/): A sample Ansible playbook to install a WarehousePG software release onto the hosts that will comprise a WarehousePG cluster.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
