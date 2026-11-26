---
title: Installing pgaudit
product: pgaudit
url: https://www.enterprisedb.com/docs/pg_extensions/pgaudit/installing/
lastModified: 2026-06-01T14:48:30+05:30
---

# Installing pgaudit

pg\_audit is supported on the same platforms as the Postgres distribution you're using. Support for pg\_audit starts with Postgres 14. For details, see:

- [PostgreSQL Product Compatibility](https://www.enterprisedb.com/resources/platform-compatibility#pg)
- [EDB Postgres Extended Server Product Compatibility](https://www.enterprisedb.com/resources/platform-compatibility#epas_extended)

## Installation

Before you begin the installation process:

- Install Postgres. See:

  - [Installing PostgreSQL](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installing/)

  - [Installing EDB Postgres Extended Server](https://www.enterprisedb.com/docs/pge/latest/installing/)

- Set up the repository.

  Setting up the repository is a one-time task. If you've already set up your repository, you don't need to perform this step.

  To set up the repository, go to [EDB repositories](https://www.enterprisedb.com/repos-downloads) and follow the instructions provided there.

## Install the package

The syntax for the package install command is:

```shell
# For SLES, CentOS, RHEL and its derivatives

# Postgres versions 12 to 15
sudo <package-manager> -y install edb-<postgres><postgres_version>-pgaudit1

# Postgres versions16+
sudo <package-manager> -y install edb-<postgres><postgres_version>-pgaudit<postgres_version>

# For Debian and Ubuntu

# Postgres versions 12 to 15
sudo <package-manager> -y install edb-<postgres><postgres_version>-pgaudit-1

# Postgres versions 16+
sudo <package-manager> -y install edb-<postgres><postgres_version>-pgaudit-<postgres_version>
```

Where:

- `<package-manager>`is the package manager used with your operating system:

  | Package manager | Operating system                 |
  | --------------- | -------------------------------- |
  | dnf             | RHEL 8/9 and derivatives         |
  | yum             | RHEL 7 and derivatives, CentOS 7 |
  | zypper          | SLES                             |
  | apt-get         | Debian and derivatives           |

- `<postgres>` is the distribution of Postgres you're using:

  | Postgres distribution        | Value            |
  | ---------------------------- | ---------------- |
  | PostgreSQL                   | pg               |
  | EDB Postgres Extended Server | postgresextended |

- `<postgres-version>` is the version of Postgres you're using.

For example:

```shell
# RHEL/derivatives — PostgreSQL 15 and earlier
sudo dnf -y install edb-pg15-pgaudit1

# RHEL/derivatives — PostgreSQL 16 and later
sudo dnf -y install edb-pg16-pgaudit16

# RHEL/derivatives — EDB Postgres Extended Server
sudo dnf -y install edb-postgresextended17-pgaudit17

# Debian/Ubuntu — PostgreSQL 15 and earlier
sudo apt-get -y install edb-pg15-pgaudit-1

# Debian/Ubuntu — PostgreSQL 16 and later
sudo apt-get -y install edb-pg16-pgaudit-16

# Debian/Ubuntu — EDB Postgres Extended Server
sudo apt-get -y install edb-postgresextended17-pgaudit-17
```

> **Note**
>
> - For Postgres 16 and later versions, the pgaudit extension major version is equal to the Postgres major version.
> - For Postgres 15 and earlier versions, the pgaudit extension major version is 1.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
