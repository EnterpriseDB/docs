---
title: Installing EDB Stat Monitor
description: How to install EDB Stat Monitor
product: edb_stat_monitor
url: https://www.enterprisedb.com/docs/pg_extensions/edb_stat_monitor/installing/
lastModified: 2026-02-06T16:21:57+05:30
---

# Installing EDB Stat Monitor

EDB Stat Monitor is an extension that provides query performance monitoring for EDB Postgres Advanced Server and PostgreSQL. It collects and stores statistics about query execution, allowing you to analyze and optimize query performance.

## Installing EDB Stat Monitor

edb\_stat\_monitor is supported on the same platforms as the Postgres distribution you're using. Support for edb\_stat\_monitor starts with Postgres 15. For details, see:

- [EDB Postgres Advanced Server Product Compatibility](https://www.enterprisedb.com/platform-compatibility#epas)
- [PostgreSQL Product Compatibility](https://www.enterprisedb.com/resources/platform-compatibility#pg)
- [EDB Postgres Extended Server Product Compatibility](https://www.enterprisedb.com/resources/platform-compatibility#epas_extended)

## Installation

Before you begin the installation process:

- Install Postgres. See:

  - [Installing EDB Postgres Advanced Server](https://www.enterprisedb.com/docs/epas/latest/installing/)

  - [Installing EDB Postgres Extended Server](https://www.enterprisedb.com/docs/pge/latest/installing/)

  - [Installing PostgreSQL](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installing/)

- Set up the repository.

  Setting up the repository is a one-time task. If you've already set up your repository, you don't need to perform this step.

  To set up the repository, go to [downloads and repositories](https://www.enterprisedb.com/docs/repos/getting_started/) and follow the instructions provided there.

## Install the package

The syntax for the package install command is:

### For SLES, CentOS, RHEL and its derivatives

```shell
# For SLES, CentOS, RHEL and its derivatives
sudo <package-manager> -y install edb-<postgres><postgres_version>-stat_monitor
```

Where:

- `<package-manager>`is the package manager used with your operating system:

  | Package manager | Operating system         |
  | --------------- | ------------------------ |
  | dnf             | RHEL 8/9 and derivatives |
  | zypper          | SLES 15                  |

- `<postgres>` is the distribution of Postgres you're using:

  | Postgres distribution        | Value            |
  | ---------------------------- | ---------------- |
  | EDB Postgres Advanced Server | as               |
  | EDB Postgres Extended Server | postgresextended |
  | PostgreSQL                   | pg               |

- `<postgres_version>` is the version of Postgres you're using.

For example, to install edb\_stat\_monitor for EDB Postgres Advanced Server 16 on a RHEL 8-based platform:

```shell
sudo dnf -y install edb-as16-stat_monitor
```

### For Debian and Ubuntu

```shell
sudo apt-get -y install edb-<postgres><postgres_version>-stat-monitor
```

Where:

- `<postgres>` is the distribution of Postgres you're using:

  | Postgres distribution        | Value            |
  | ---------------------------- | ---------------- |
  | EDB Postgres Advanced Server | as               |
  | EDB Postgres Extended Server | postgresextended |
  | PostgreSQL                   | pg               |

- `<postgres_version>` is the version of Postgres you're using.

For example, to install edb\_stat\_monitor for EDB Postgres Advanced Server 16 on a Debian-based platform:

```shell
sudo apt-get -y install edb-as16-stat-monitor
```

You can now [configure EDB Stat Monitor](https://www.enterprisedb.com/docs/pg_extensions/edb_stat_monitor/configuring/) and start using it.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
