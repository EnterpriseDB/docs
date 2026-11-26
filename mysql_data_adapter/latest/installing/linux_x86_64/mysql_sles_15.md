---
title: Installing MySQL Foreign Data Wrapper on SLES 15 x86_64
product: MySQL Foreign Data Wrapper
version: "2"
url: https://www.enterprisedb.com/docs/mysql_data_adapter/latest/installing/linux_x86_64/mysql_sles_15/
lastModified: 2025-12-10T19:50:22-08:00
---

# Installing MySQL Foreign Data Wrapper on SLES 15 x86\_64

## Prerequisites

Before you begin the installation process:

- Install Postgres on the same host. See:

  - [Installing EDB Postgres Advanced Server](https://www.enterprisedb.com/docs/epas/latest/installing/)

  - [Installing PostgreSQL](https://www.postgresql.org/download/)

- Set up the EDB repository.

  Setting up the repository is a one-time task. If you already set up your repository, you don't need to perform this step.

  To determine if your repository exists, enter:

  `zypper lr -E | grep enterprisedb`

  If no output is generated, the repository is installed.

  To set up the EDB repository:

  1. Go to [EDB repositories](https://www.enterprisedb.com/repos-downloads).

  2. Select the button that provides access to the EDB repository.

  3. Select the platform and software that you want to download.

  4. Follow the instructions for setting up the EDB repository.

- Install the MySQL community repository:
  ```shell
  sudo wget https://dev.mysql.com/get/mysql80-community-release-sles12-5.noarch.rpm
  rpm --import /etc/RPM-GPG-KEY-mysql-2022
  ```

- Enable the MySQL8 repository and disable the MySQL 5 repository:

  ```shell
  sudo zypper modifyrepo -e mysql80-community
  sudo zypper modifyrepo -d mysql57-community
  ```

- Activate the required SUSE module:

  ```shell
  sudo SUSEConnect -p PackageHub/15.7/x86_64

  ```

- Refresh the metadata:
  ```shell
  sudo zypper refresh
  ```

## Install the package

```shell
# For EDB Postgres Advanced Server:
sudo zypper -n install edb-as<X>-mysql8_fdw

# For EDB Postgres Extended Server:
sudo zypper -n install edb-postgresextended<X>-mysql8_fdw

# For PostgreSQL:
sudo zypper -n install mysql_fdw_<X>
```

Where `<X>` is the version of your Postgres and `8` is the version of MySQL to be installed.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
