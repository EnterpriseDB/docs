---
title: Upgrading
product: Hadoop Data Adapter
version: "2"
url: https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/upgrading/
lastModified: 2024-06-26T11:05:17-04:00
---

# Upgrading

<div id="updating_the_hadoop_data_adapter" class="registered_link"></div>

If you have an existing installation of Hadoop Foreign Data Wrapper that you installed using the EDB repository, you can update your repository configuration file and then upgrade Hadoop to a more recent product version.

To perform the process, open a terminal window and enter the commands that apply to the operating system and package manager used for the installation:

To update your repository configuration file:

```shell
sudo <package-manager> 
```

Where `<package-manager>` is the package manager used with your operating system:

| Package manager | Operating system         |
| --------------- | ------------------------ |
| dnf             | RHEL 8/9 and derivatives |
| zypper          | SLES                     |
| apt-get         | Debian and Ubuntu        |

To upgrade to the latest product version, enter one of the following commands:

| Operating system         | Upgrade command                                                    |
| ------------------------ | ------------------------------------------------------------------ |
| RHEL 8/9 and derivatives | `sudo dnf upgrade edb-as<xx>-hdfs_fdw`                             |
| SLES                     | `sudo zypper upgrade edb-as<xx>-hdfs_fdw`                          |
| Debian and Ubuntu        | `sudo apt-get --only-upgrade install edb-as<xx>-hdfs-fdw edb-hdfs` |

Where

- `<package-manager>` is the package manager used with your operating system.

- `<xx>` is the EDB Postgres Advanced Server version number.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
