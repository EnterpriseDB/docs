---
title: Uninstalling
product: MySQL Foreign Data Wrapper
version: "2"
url: https://www.enterprisedb.com/docs/mysql_data_adapter/latest/uninstalling/
lastModified: 2024-06-26T11:08:18-04:00
---

# Uninstalling

<div id="uninstalling_the_mysql_data_adapter" class="registered_link"></div>

You can use the `remove` command to uninstall MySQL Foreign Data Wrapper packages. To uninstall, open a terminal window, assume superuser privileges, and enter the command that applies to the operating system and package manager used for the installation:

- On RHEL or Rocky Linux or AlmaLinux 8:

  `dnf remove edb-as<xx>-mysql8_fdw`

  Where `<xx>` is the EDB Postgres Advanced Server version.
- On SLES:

  `zypper remove edb-as<xx>-mysql<x>_fdw`

  Where:

  - `<xx>` is the EDB Postgres Advanced Server version.
  - `<x>` is the supported release version number of MySQL.
- On Debian or Ubuntu

  `apt-get remove edb-as<xx>-mysql-fdw`

  Where `<xx>` is the EDB Postgres Advanced Server version.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
