---
title: Installing PostGIS on RHEL 9 or OL 9 arm64
product: PostGIS
version: "3"
url: https://www.enterprisedb.com/docs/postgis/latest/installing/linux_arm64/postgis_rhel_9/
lastModified: 2026-07-22T17:51:19+05:30
---

# Installing PostGIS on RHEL 9 or OL 9 arm64

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

- Enable additional repositories to resolve dependencies:

  ```shell
  ARCH=$( /bin/arch ) subscription-manager repos --enable "codeready-builder-for-rhel-9-${ARCH}-rpms"
  ```

  > **Note**
  >
  > If you are using a public cloud RHEL image, `subscription manager` may not be enabled and enabling it may incur unnecessary charges. Equivalent packages may be available under a different name such as `codeready-builder-for-rhel-8-rhui-rpms`. Consult the documentation for the RHEL image you are using to determine how to install `codeready-builder`.

## Install the package

```shell
# To install PostGIS 3.4:
sudo dnf -y install edb-as<xx>-postgis34

# To install PostGIS 3.1 using EDB Postgres Advanced Server 13-15:
sudo dnf -y install edb-as<xx>-postgis3

# To install PostGIS 3.1 using EDB Postgres Advanced Server 11-12:
sudo dnf -y install edb-as<xx>-postgis
```

Where `<xx>` is the version of EDB Postgres Advanced Server. Replace `<xx>` with the version of EDB Postgres Advanced Server you are using. For example, `edb-as15-postgis34`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
