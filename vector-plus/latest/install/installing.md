---
title: Installing Vector Plus
description: How to install EDB Vector Plus from an EDB repository.
product: EDB Vector Plus
version: "0"
url: https://www.enterprisedb.com/docs/vector-plus/latest/install/installing/
lastModified: 2026-09-30T22:44:58+05:30
---

# Installing Vector Plus

Install Vector Plus from an EDB package repository. See [Supported versions and platforms](https://www.enterprisedb.com/docs/vector-plus/latest/overview/supported-platforms/) for which Postgres versions, variants, and operating systems are supported.

## Prerequisites

Before you begin the installation process:

1. Install your flavor of Postgres if not already installed. See:

   - [Installing PostgreSQL](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installing/)

   - [Installing EDB Postgres Advanced Server](https://www.enterprisedb.com/docs/epas/latest/installing/)

   - [Installing EDB Postgres Extended Server](https://www.enterprisedb.com/docs/pge/latest/installing/)

2. Set up the repository:

   Setting up the repository is a one-time task. If you've already set up your repository, you don't need to perform this step.

   To set up the repository, go to [EDB repositories](https://www.enterprisedb.com/repos-downloads) and follow the instructions provided there.

## Installing the package

Install Vector Plus, which pulls in pgvector automatically if it isn't already present. If an older pgvector is already installed, installing Vector Plus doesn't upgrade it: resolve the pgvector version manually before continuing (pgvector 0.7.0 or newer is required).

### RHEL/Rocky Linux/AlmaLinux

```bash
sudo dnf install -y edb-<variant><V>-vectorplus
```

### SLES

```bash
sudo zypper install -y edb-<variant><V>-vectorplus
```

### Debian/Ubuntu

```bash
sudo apt-get install -y edb-<variant><V>-vectorplus
```

Replace `<variant>` with `pg` (community PostgreSQL), `as` (EPAS), or `postgresextended` (PGE), and `<V>` with your Postgres major version — for example, `edb-pg17-vectorplus` for PostgreSQL 17.

The package name carries no extension-major suffix, so it's identical on RPM and DEB:

| Postgres distribution               | Package name                         | Installs under                               |
| ----------------------------------- | ------------------------------------ | -------------------------------------------- |
| PostgreSQL                          | `edb-pg<V>-vectorplus`               | `/usr/pgsql-<V>` · `/usr/lib/postgresql/<V>` |
| EDB Postgres Extended (PGE)         | `edb-postgresextended<V>-vectorplus` | `/usr/edb/pge<V>` · `/usr/lib/edb-pge/<V>`   |
| EDB Postgres Advanced Server (EPAS) | `edb-as<V>-vectorplus`               | `/usr/edb/as<V>` · `/usr/lib/edb-as/<V>`     |

After installing the package, see [Configuring Vector Plus](https://www.enterprisedb.com/docs/vector-plus/latest/install/configuring/) to enable the extension.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
