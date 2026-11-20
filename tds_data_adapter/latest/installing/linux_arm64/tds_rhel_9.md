---
title: Installing TDS Foreign Data Wrapper on RHEL 9 or OL 9 ARM64
product: TDS Foreign Data Wrapper
version: "2"
url: https://www.enterprisedb.com/docs/tds_data_adapter/latest/installing/linux_arm64/tds_rhel_9/
lastModified: 2026-05-19T21:08:12+05:30
---

# Installing TDS Foreign Data Wrapper on RHEL 9 or OL 9 ARM64

## Prerequisites

Before you begin the installation process:

- Install Postgres on the same host. See:

  - [Installing EDB Postgres Advanced Server](https://www.enterprisedb.com/docs/epas/latest/installing/)

  - [Installing PostgreSQL](https://www.postgresql.org/download/)

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

- Install the EPEL repository:
  ```shell
  sudo dnf -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
  ```

- Install the FreeTDS library:
  ```shell
  sudo dnf -y install freetds-devel
  ```

## Install the package

```shell
# For EDB Postgres Advanced Server:
sudo dnf -y install edb-as<X>-tds-fdw

# For EDB Postgres Extended Server:
sudo dnf -y install edb-postgresextended<X>-tds-fdw

# For PostgreSQL:
sudo dnf -y install edb-pg<X>-tds-fdw
```

Where `<X>` is the version of your Postgres.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
