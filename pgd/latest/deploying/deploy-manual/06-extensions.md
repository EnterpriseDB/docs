---
title: Installing extensions
description: Configure shared_preload_libraries and install a PostgreSQL extension in a manually deployed PGD cluster.
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/06-extensions/
lastModified: 2026-10-12T16:47:41+01:00
---

# Installing extensions

Postgres extensions provide SQL objects, such as functions, datatypes, and, optionally, one or more shared libraries.

See [PGD compatibility with extensions](https://www.enterprisedb.com/docs/pgd/latest/overview/compatibility/#pgd-compatibility-with-extensions) for which extensions PGD supports and on which Postgres versions.

If you deployed PGD using [Trusted Postgres Architect](https://www.enterprisedb.com/docs/tpa/latest/), configure extensions using that tool. For details, see [Adding Postgres extensions](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_extension_configuration/).

## Making extension packages available on every node

Before you configure or install an extension, make sure its package is on every node in the cluster.

> **Note**
>
> Some packages are built into your Postgres distribution and don't need a separate download. See [Compatibility](https://www.enterprisedb.com/docs/pgd/latest/overview/compatibility/) for details.

1. Find the package that provides the extension for your platform and Postgres distribution. Package names typically follow the same pattern as the database and PGD packages you installed in [Installing the database and PGD software](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/03-installing-database-and-pgd/), for example `edb-as$PG_VERSION-pgaudit` or `postgresql$PG_VERSION-pgvector`. See [Postgres extensions](https://www.enterprisedb.com/docs/pg_extensions/) for the specific package names.

2. On each node, install the package with your package manager.

   ```shell
   # Debian/Ubuntu
   sudo apt install -y <package-name>
   ```

   ```shell
   # CentOS/RHEL
   sudo dnf install -y <package-name>
   ```

3. Repeat these steps on every node before you continue.

## Configuring shared\_preload\_libraries

If an extension provides a shared library, include this library in the [`shared_preload_libraries`](https://www.postgresql.org/docs/current/runtime-config-client.html#GUC-SHARED-PRELOAD-LIBRARIES) configuration parameter before you install the extension.

`shared_preload_libraries` consists of a comma-separated list of extension names. It must include `bdr`. The order in which you specify other extensions generally doesn't matter.

Configure `shared_preload_libraries` on all nodes in the cluster before installing the extension with `CREATE EXTENSION`, then restart Postgres to activate the new configuration.

See also [Postgres settings](https://www.enterprisedb.com/docs/pgd/latest/reference/postgres-configuration/#postgres-settings).

## Installing the extension

Install the extension with the `CREATE EXTENSION` command. You only need to do run the command on one node in the cluster. PGD's DDL replication propagates it to all other nodes.

```SQL
CREATE EXTENSION <extension-name>;
```

> **Warning**
>
> Don't attempt to install extensions manually on each node by disabling DDL replication before running `CREATE EXTENSION`.
>
> Don't use a command such as `bdr.replicate_ddl_command()` to run `CREATE EXTENSION`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
