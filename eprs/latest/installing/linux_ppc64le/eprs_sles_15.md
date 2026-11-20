---
title: Installing Replication Server on SLES 15 ppc64le
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/installing/linux_ppc64le/eprs_sles_15/
lastModified: 2025-12-10T19:50:22-08:00
---

# Installing Replication Server on SLES 15 ppc64le

## Prerequisites

Before you begin the installation process:

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

You can install all Replication Server components with a single install command, or you may choose to install selected, individual components by installing only those particular packages.

To install all Replication Server components:

```shell
sudo zypper  -y install edb-xdb
```

To install an individual component:

```shell
sudo zypper  -y install <package_name>
```

Where `<package_name>` is:

| Package name         | Component                                                             |
| -------------------- | --------------------------------------------------------------------- |
| `edb-xdb-console`    | Replication console and the Replication Server command line interface |
| `edb-xdb-publisher`  | Publication server                                                    |
| `edb-xdb-subscriber` | Subscription server                                                   |

## Initial configuration

Before using Replication Server, you must download and install JDBC drivers. See [Installing a JDBC driver](https://www.enterprisedb.com/docs/eprs/latest/installing/installing_jdbc_driver/) for details.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
