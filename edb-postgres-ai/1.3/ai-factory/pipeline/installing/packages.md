---
title: AI Accelerator Pipelines
description: How to install the AI Database (aidb), PGFS, and PGvector extensions from packages.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/installing/packages/
lastModified: 2025-11-07T18:06:05Z
---

# AI Accelerator Pipelines

## Installing the extension packages

To use AI Accelerator Pipelines, you need three extension packages:

- aidb — AI Database extension.
- pgfs — Postgres File System (PGFS) extension.
- vector — PGvector extension.

### Prerequisite

Before you start installing the packages, you need to have a PostgreSQL server running. You can install AI Accelerator Pipelines on a community PostgreSQL server, an EDB Postgres Advanced Server server, or an EDB Postgres Extended server. If you need help setting up a server, consult the installation instructions for those products. When you install the server, make a note of the package name used as you will need it to install the AI Accelerator Pipelines packages.

- For community PostgreSQL, the package name is `postgresql-<version>`.
- For EDB Postgres Advanced Server, the package name is `edb-as<version>` followed by `-server`.
- For EDB Postgres Extended, the package name is `edb-postgresextended-<version>` followed by `-server`.

Once you have established the package name, you can install the server using the package manager for your operating system.

### Installing the packages

Once the server is running, you need to install several packages. The packages are available in the EDB repository and can be installed using the appropriate package manager for your operating system. Use:

- `apt` for Debian/Ubuntu-based systems with .deb packages
- `dnf` for Red Hat-based systems with .rpm packages

The package name depends on your operating system.

#### For community PostgreSQL

The packages are:

- `edb-pg<version>-aidb` — AI Database extension.
- `edb-pg<version>-pgfs` — Postgres File System extension.

For the PGvector extension, the packages are:

- rpm-based systems: `edb-pg<version>-pgvector0`
- deb-based systems: `edb-pg<version>-pgvector-0`

#### For EDB Postgres Advanced Server

The packages are:

- `edb-as<version>-aidb` — AI Database extension.
- `edb-as<version>-pgfs` — Postgres File System extension.

For the PGvector extension, the package depends on your package format:

- For rpm-based systems: `edb-as<version>-pgvector0`
- For deb-based systems: `edb-as<version>-pgvector-0`

#### For EDB Postgres Extended

The packages are:

- `edb-pgextended-<version>-aidb` — AI Database extension.
- `edb-pgextended-<version>-pgfs` — Postgres File System extension.

For the PGvector extension, the package depends on your package format:

- For rpm-based systems: `edb-postgresextended<version>-pgvector0`
- For deb-based systems: `edb-postgresextended<version>-pgvector-0`

### Example

The command for installing the packages on Ubuntu 22.04 with EDB Postgres Advanced Server 18 looks like this:

```shell
sudo apt-get install edb-as17-aidb edb-as17-pgfs edb-as17-pgvector-0
```

With the packages installed, you can connect to the database and [complete and verify the extension installation in Postgres](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/installing/complete/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
