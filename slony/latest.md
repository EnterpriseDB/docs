---
title: EDB Slony Guide
product: Slony Replication
version: 2.2.10
url: https://www.enterprisedb.com/docs/slony/latest/
lastModified: 2025-04-22T14:39:17Z
---

# EDB Slony Guide

EDB Slony is built from Slony-I and used for replicating EDB Postgres Advanced Server data. It is a primary-standby logical replication solution that is well-suited for large databases with a limited number of standby systems. It shares data in one direction only (from a primary node to a standby node), is cascading (a standby node may pass data to another standby node), and does not allow data to be modified on standby nodes.

This guide provides information about installing and uninstalling EDB Slony with EDB Postgres Advanced Server. For detailed information about reference and usage, please visit the [project site](https://www.slony.info).

> **Note**
>
> If you are using the pdf version of this document, the cut/paste command may result in extra spaces or carriage returns in the pasted command. If a command fails, check the command carefully for additional characters.

- [Installing Slony Replication](https://www.enterprisedb.com/docs/slony/latest/01_installation/): This section walks you through installing EDB Slony Replication on an RHEL/CentOS/Rocky Linux/AlmaLinux host, a Debian/Ubuntu host, and a Windows host.
  - [Installing Slony Replication on a CentOS/Rocky Linux/AlmaLinux Host](https://www.enterprisedb.com/docs/slony/latest/01_installation/01_installing_slony_on_a_linux_or_centos_host/)
  - [Installing Slony Replication on a Debian or Ubuntu Host](https://www.enterprisedb.com/docs/slony/latest/01_installation/02_installing_slony_on_a_debian_or_ubuntu_host/)
  - [Installing Slony Replication on a Windows Host](https://www.enterprisedb.com/docs/slony/latest/01_installation/03_installing_slony_on_a_windows_host/)
- [Configuring Slony Replication](https://www.enterprisedb.com/docs/slony/latest/02_configuration_and_usage/): On a CentOS/Rocky Linux/AlmaLinux/Debian host, the configuration file (slony-replication.ini) is located in the /etc/edb/slony-replication directory. Use the configuration file to specify connection information for the master and standby nodes.
- [Upgrading Slony Replication](https://www.enterprisedb.com/docs/slony/latest/03_upgrade/): The following section outlines the process of upgrading Slony Replication.
- [Uninstalling Slony Replication](https://www.enterprisedb.com/docs/slony/latest/04_uninstallation/): This section walks you through uninstalling Slony Replication.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
