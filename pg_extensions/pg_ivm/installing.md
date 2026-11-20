---
title: Installing pg_ivm
product: pg_ivm
url: https://www.enterprisedb.com/docs/pg_extensions/pg_ivm/installing/
lastModified: 2026-05-20T17:51:12+01:00
---

# Installing pg\_ivm

pg\_ivm is supported on the same platforms as the Postgres distribution you're using. Support for pg\_ivm starts with Postgres 14. For details, see:

- [PostgreSQL product compatibility](https://www.enterprisedb.com/resources/platform-compatibility#pg)

- [EDB Postgres Advanced Server product compatibility](https://www.enterprisedb.com/platform-compatibility#epas)

- [EDB Postgres Extended Server product compatibility](https://www.enterprisedb.com/resources/platform-compatibility#epas_extended)

## Installation

Before you begin the installation process:

- Install Postgres. See:

  - [Installing PostgreSQL](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installing/)

  - [Installing EDB Postgres Advanced Server](https://www.enterprisedb.com/docs/epas/latest/installing/)

  - [Installing EDB Postgres Extended Server](https://www.enterprisedb.com/docs/pge/latest/installing/)

- Set up the repository.

  Setting up the repository is a one-time task. If you've already set up your repository, you don't need to perform this step.

  To set up the repository, go to [EDB repositories](https://www.enterprisedb.com/repos-downloads) and follow the instructions provided there.

## Install the package

The syntax for the package install command is:

```shell
sudo <package-manager> -y install edb-<postgres><postgres_version>-pg-ivm
```

Where:

- `<package-manager>`is the package manager used with your operating system:

  | Package manager | Operating system         |
  | --------------- | ------------------------ |
  | dnf             | RHEL 8/9 and derivatives |
  | zypper          | SLES                     |
  | apt-get         | Debian and derivatives   |

- `<postgres>` is the distribution of Postgres you're using:

  | Postgres distribution        | Value            |
  | ---------------------------- | ---------------- |
  | PostgreSQL                   | pg               |
  | EDB Postgres Advanced Server | as               |
  | EDB Postgres Extended Server | postgresextended |

- `<postgres_version>` is the version of Postgres you're using.

For example, to install pg\_ivm for EDB Postgres Advanced Server 15 on a RHEL 8 platform:

```shell
sudo dnf -y install edb-as15-pg-ivm
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
