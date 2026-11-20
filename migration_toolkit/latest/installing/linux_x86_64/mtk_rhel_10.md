---
title: Installing Migration Toolkit on RHEL 10 or OL 10 x86_64
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/installing/linux_x86_64/mtk_rhel_10/
lastModified: 2026-09-15T11:23:49+02:00
---

# Installing Migration Toolkit on RHEL 10 or OL 10 x86\_64

## Prerequisites

Before you begin the installation process:

- Set up the EDB repository.

  Setting up the repository is a one-time task. If you already set up your repository, you don't need to perform this step.

  To determine if your repository exists, enter:

  `dnf repolist | grep enterprisedb`

  If no output is generated, the repository is installed.

  To set up the EDB repository:

  1. Go to [EDB repositories](https://www.enterprisedb.com/repos-downloads).

  2. Select the button that provides access to the EDB repository.

  3. Select the platform and software that you want to download.

  4. Follow the instructions for setting up the EDB repository.

## Install the package

```shell
sudo dnf -y install edb-migrationtoolkit
```

## Initial configuration

Before invoking Migration Toolkit, you must download and install JDBC drivers for connecting to the source and target databases. See [Installing a JDBC driver](https://www.enterprisedb.com/docs/migration_toolkit/latest/installing/installing_jdbc_driver/) for details.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
