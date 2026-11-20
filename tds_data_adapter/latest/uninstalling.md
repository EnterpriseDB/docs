---
title: Uninstalling
product: TDS Foreign Data Wrapper
version: "2"
url: https://www.enterprisedb.com/docs/tds_data_adapter/latest/uninstalling/
lastModified: 2026-05-19T21:08:12+05:30
---

# Uninstalling

You can use the `remove` command to uninstall TDS foreign data wrapper packages. To uninstall, open a terminal window, assume superuser privileges, and enter the command that applies to the operating system and package manager used for the installation. `xx` is the EDB Postgres Advanced Server version number.

- On RHEL or Rocky Linux or AlmaLinux 8/9:

  `dnf remove edb-as<xx>-tds-fdw`

- On Debian or Ubuntu:

  `apt-get remove edb-as<xx>-tds-fdw`

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
