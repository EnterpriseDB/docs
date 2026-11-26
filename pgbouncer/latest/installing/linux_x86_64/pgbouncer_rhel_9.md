---
title: Installing EDB pgBouncer on RHEL 9 or OL 9 x86_64
product: PgBouncer
version: "1"
url: https://www.enterprisedb.com/docs/pgbouncer/latest/installing/linux_x86_64/pgbouncer_rhel_9/
lastModified: 2025-12-10T19:50:22-08:00
---

# Installing EDB pgBouncer on RHEL 9 or OL 9 x86\_64

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

## Install the package

```shell
sudo dnf -y install edb-pgbouncer<xx>
```

Where `<xx>` is the version of EDB PgBouncer you are installing. For example, if you are installing version 1.22, the package name would be `edb-pgbouncer122`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
