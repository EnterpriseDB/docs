---
title: Installing MongoDB Foreign Data Wrapper on Debian 11 x86_64
product: Mongo Foreign Data Wrapper
version: "5"
url: https://www.enterprisedb.com/docs/mongo_data_adapter/latest/installing/linux_x86_64/mongo_debian_11/
lastModified: 2025-12-10T19:50:22-08:00
---

# Installing MongoDB Foreign Data Wrapper on Debian 11 x86\_64

## Prerequisites

Before you begin the installation process:

- Install Postgres on the same host. See:

  - [Installing EDB Postgres Advanced Server](https://www.enterprisedb.com/docs/epas/latest/installing/)

  - [Installing PostgreSQL](https://www.postgresql.org/download/)

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
# For EDB Postgres Advanced Server:
sudo apt-get -y install edb-as<X>-mongo_fdw

# For EDB Postgres Extended Server:
sudo apt-get -y install edb-postgresextended<X>-mongo-fdw

# For PostgreSQL:
sudo apt-get -y install postgresql-<X>-mongo-fdw
```

Where `<X>` is the version of your Postgres.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
