---
title: Installing PG Failover Slots
product: PG Failover Slots
url: https://www.enterprisedb.com/docs/pg_extensions/pg_failover_slots/installing/
lastModified: 2026-02-06T16:21:57+05:30
---

# Installing PG Failover Slots

PG Failover Slots is supported on the same platforms as the Postgres distribution you're using. Support for PG Failover Slots starts with Postgres 11. For details, see:

- [EDB Postgres Advanced Server Product Compatibility](https://www.enterprisedb.com/platform-compatibility#epas)
- [PostgreSQL Product Compatibility](https://www.enterprisedb.com/resources/platform-compatibility#pg)
- [EDB Postgres Extended Server Product Compatibility](https://www.enterprisedb.com/resources/platform-compatibility#epas_extended)

## Prerequisites

Before you begin the installation process:

- Install Postgres. See:

  - [Installing EDB Postgres Advanced Server](https://www.enterprisedb.com/docs/epas/latest/installing/)

  - [Installing PostgreSQL](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installing/)

  - [Installing EDB Postgres Extended Server](https://www.enterprisedb.com/docs/pge/latest/installing/)

- Set up the repository.

  Setting up the repository is a one-time task. If you've already set up your repository, you don't need to perform this step.

  To set up the repository, go to [EDB repositories](https://www.enterprisedb.com/repos-downloads), and follow the instructions provided there.

## Install the package

The syntax for the package install command is:

```shell
sudo <package-manager> -y install edb-<postgres><postgres_version>-pg-failover-slots<major_version>
```

The syntax for the Debian package install command is:

```shell
sudo <package-manager> -y install edb-<postgres><postgres_version>-pg-failover-slots-<major_version>
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
  | EDB Postgres Advanced Server | as               |
  | EDB Postgres Extended        | postgresextended |

- `<postgres_version>` is the version of Postgres you're using.

- `<major_version>` is the major version of PG Failover Slots you're installing.

For example, to install PG Failover Slots 1.0.0 for EDB Postgres Advanced Server 15 on a RHEL 8 platform:

```shell
sudo dnf -y install edb-as15-pg-failover-slots1
```

To install PG Failover Slots 1.0.0 for EDB Postgres Advanced Server 15 on a Debian 11 platform:

```shell
sudo apt-get -y install edb-as15-pg-failover-slots-1
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
