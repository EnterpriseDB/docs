---
title: Installing MongoDB Foreign Data Wrapper on SLES 15 ppc64le
product: Mongo Foreign Data Wrapper
version: "5"
url: https://www.enterprisedb.com/docs/mongo_data_adapter/latest/installing/linux_ppc64le/mongo_sles_15/
lastModified: 2025-12-10T19:50:22-08:00
---

# Installing MongoDB Foreign Data Wrapper on SLES 15 ppc64le

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

- Activate the required SUSE module:

  ```shell
  sudo SUSEConnect -p PackageHub/15.7/ppc64le

  ```

- Refresh the metadata:
  ```shell
  sudo zypper refresh
  ```

## Install the package

```shell
# For EDB Postgres Advanced Server:
sudo zypper -n install edb-as<X>-mongo_fdw

# For EDB Postgres Extended Server:
sudo zypper -n install edb-postgresextended<X>-mongo-fdw

# For PostgreSQL:
sudo zypper -n install postgresql-<X>-mongo-fdw
```

Where `<X>` is the version of your Postgres.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
