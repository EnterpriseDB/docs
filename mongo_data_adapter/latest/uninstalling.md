---
title: Uninstalling
product: Mongo Foreign Data Wrapper
version: "5"
url: https://www.enterprisedb.com/docs/mongo_data_adapter/latest/uninstalling/
lastModified: 2024-06-26T11:06:12-04:00
---

# Uninstalling

<div id="uninstalling_the_mongo_data_adapter" class="registered_link"></div>

You can use the `remove` command to uninstall MongoDB Foreign Data Wrapper packages. To uninstall, open a terminal window, assume superuser privileges, and enter the command that applies to the operating system and package manager used for the installation. `xx` is the EDB Postgres Advanced Server version number.

- On RHEL or Rocky Linux or AlmaLinux 8:

  `dnf remove edb-as<xx>-mongo_fdw`

- On SLES:

  `zypper remove edb-as<xx>-mongo_fdw`

- On Debian or Ubuntu

  `apt-get remove edb-as<xx>-mongo-fdw`

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
