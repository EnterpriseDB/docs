---
title: Installing EDB*Plus on Debian 12 arm64
product: EDB*Plus
version: "41"
url: https://www.enterprisedb.com/docs/edb_plus/latest/installing/linux_arm64/edbplus_debian_12/
lastModified: 2026-09-15T17:09:38+02:00
---

# Installing EDB\*Plus on Debian 12 arm64

## Prerequisites

Before you begin the installation process:

- Set up the EDB repository.

  Setting up the repository is a one-time task. If you already set up your repository, you don't need to perform this step.

  To determine if your repository exists, enter:

  `apt-cache search enterprisedb`

  If no output is generated, the repository is installed.

  To set up the EDB repository:

  1. Go to [EDB repositories](https://www.enterprisedb.com/repos-downloads).

  2. Select the button that provides access to the EDB repository.

  3. Select the platform and software that you want to download.

  4. Follow the instructions for setting up the EDB repository.

## Install the package

```shell
sudo apt-get -y install edb-edbplus
```

## Initial configuration

EDB\*Plus requires Java 11 or later. EDB\*Plus supports OpenJDK 21.

After performing a Linux installation of EDB\*Plus, you must set the values of environment variables that allow EDB\*Plus to locate your Java installation:

```shell
export JAVA_HOME=<path_to_java>
export PATH=<path_to_java>/bin:$PATH
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
