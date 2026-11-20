---
title: Installing EDB OCL Connector on SLES 15 ppc64le
product: OCL Connector
version: "18"
url: https://www.enterprisedb.com/docs/ocl_connector/latest/installing/linux_ppc64le/ocl_sles_15/
lastModified: 2025-12-10T19:50:22-08:00
---

# Installing EDB OCL Connector on SLES 15 ppc64le

## Prerequisites

Before you begin the installation process:

- Install Postgres on a host that the product can connect to using a connection string. It doesn't need to be on the same host. See:

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
sudo zypper -n install edb-oci
sudo zypper -n install edb-oci-devel
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
