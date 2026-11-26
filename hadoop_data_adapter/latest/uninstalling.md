---
title: Uninstalling
product: Hadoop Data Adapter
version: "2"
url: https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/uninstalling/
lastModified: 2024-06-26T11:08:19-04:00
---

# Uninstalling

<div id="uninstalling_the_hadoop_data_adapter" class="registered_link"></div>

You use the `remove` command to uninstall Hadoop Foreign Data Wrapper packages. To uninstall, open a terminal window, assume superuser privileges, and enter the command that applies to the operating system and package manager used for the installation:

- On RHEL or Rocky Linux or AlmaLinux 8:

  `dnf remove edb-as<xx>-hdfs_fdw`

- On SLES:

  `zypper remove edb-as<xx>-hdfs_fdw`

- On Debian or Ubuntu

  `apt-get remove edb-as<xx>-hdfs_fdw`

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
