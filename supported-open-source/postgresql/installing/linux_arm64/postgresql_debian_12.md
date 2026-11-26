---
title: Installing PostgreSQL on Debian 12 arm64
product: PostgreSQL
url: https://www.enterprisedb.com/docs/supported-open-source/postgresql/installing/linux_arm64/postgresql_debian_12/
lastModified: 2026-10-15T09:52:53+05:30
---

# Installing PostgreSQL on Debian 12 arm64

## Prerequisites

Before you begin the installation process:

- Set up the EDB repository.

  > **Note**
  >
  > Rather than use the EDB repository, you can obtain PostgreSQL installers and installation packages from the [PostgreSQL community downloads page](https://www.postgresql.org/download/).

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
sudo apt-get -y install postgresql-<xx>
```

Where `<xx>` is the version of PostgreSQL you are installing. For example, if you are installing version 18, the package name would be `postgresql-18`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
