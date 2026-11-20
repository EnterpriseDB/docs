---
title: Migrating from PostgreSQL to EDB Postgres Extended Server
description: Use pg_upgrade to migrate an existing community PostgreSQL cluster to EDB Postgres Extended Server.
product: EDB Postgres Extended Server
version: "18"
url: https://www.enterprisedb.com/docs/pge/latest/upgrading/postgresql_migration/
lastModified: 2026-11-02T10:34:55+01:00
---

# Migrating from PostgreSQL to EDB Postgres Extended Server

EDB Postgres Extended Server is fully compatible with PostgreSQL at the SQL and system catalog level, but it isn't binary compatible with it. Enterprise Postgres uses a different internal control-file format (to support [transparent data encryption](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/)), so a PostgreSQL data directory can't be copied or tar'd directly into an Enterprise Postgres installation. To move data from PostgreSQL to Enterprise Postgres, install the target server and use `pg_upgrade` to migrate the data, as described on this page.

> **Note**
>
> If you also want to enable transparent data encryption (TDE) as part of the migration, see [Migrating from PostgreSQL to Enterprise Postgres](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/postgres_to_extended/) instead of this page.

## Overview

1. [Prepare your migration](#preparing-your-migration) by performing a backup of the existing instance.

2. [Install the EDB Postgres Extended Server version](#installing-edb-postgres-extended-server) that matches your source server's major version.

3. [Create a new database server](#creating-a-target-server):

   1. Create an empty directory for the new server and ensure postgres user owns it.

   2. Initialize a server on a different port from the source server.

   3. Start the database server.

   4. Connect to the database server and ensure it's functioning.

4. [Migrate to the target server](#migrating-to-the-target-server):

   1. Stop both the source and the new server.

   2. Use `pg_upgrade`, specifying the source and target bin and data directories.

   3. Start the new database server.

   4. Connect and ensure the data was transferred.

5. [Clean up and delete the source server](#cleaning-up-after-migration):

   1. Clean up the database and its statistics.

   2. Remove the source PostgreSQL cluster with the script provided by `pg_upgrade`.

## Worked example

This worked example migrates a PostgreSQL `<XX>` instance to EDB Postgres Extended Server `<XX>` on Ubuntu 22.04. The location of the bin and config directories differs depending on your operating system and Postgres version.

Throughout this example, replace `XX` with your Postgres major version number (for example, `16`) — use the same value for both the source and target server in every command.

> **Note**
>
> For general information on pg\_upgrade options and troubleshooting, see [Upgrading an installation with pg\_upgrade](https://www.enterprisedb.com/docs/epas/latest/upgrading/major_upgrade/). If your source or target cluster uses TDE, also see [pg\_upgrade TDE options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/pg_upgrade_arguments/).

### Preparing your migration

- Install EDB Postgres Extended Server from the [EDB repository](https://www.enterprisedb.com/repos-downloads). Ensure the version you install has the same major version as the source server. pg\_upgrade supports upgrades between minor and patch versions but not between different major versions.

- Use [pg\_dumpall](https://www.postgresql.org/docs/current/app-pg-dumpall.html), [pgBackRest](https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/), or [Barman](https://www.enterprisedb.com/docs/supported-open-source/barman/) to create a backup of your source server.

### Installing EDB Postgres Extended Server

[Install EDB Postgres Extended Server](https://www.enterprisedb.com/docs/pge/latest/installing/) version `<XX>`. Only install the packages. Don't perform any other configuration yet.

### Creating a target server

1. As postgres, create an empty directory for the new server:

   ```
   mkdir /var/lib/edb-pge/XX/migration_target
   ```

2. As root, ensure the postgres user owns the directory:

   ```
   sudo chown postgres /var/lib/edb-pge/XX/migration_target
   sudo chgrp postgres /var/lib/edb-pge/XX/migration_target
   ```

3. As postgres, initialize the new server:

   ```
   /usr/lib/edb-pge/XX/bin/initdb -D /var/lib/edb-pge/XX/migration_target
   ```

   This command initializes a config directory with all configuration files for the new server.

4. Before you start the cluster, ensure the new database runs on a different port from the source server. To alter the port, edit `postgresql.conf` by uncommenting the line with `#port` and changing the port number, for example, to 5590.

5. Start the target server:

   ```
   /usr/lib/edb-pge/XX/bin/pg_ctl -D /var/lib/edb-pge/XX/migration_target start
   ```

6. Connect to the server:

   ```
   /usr/lib/edb-pge/XX/bin/psql -p 5590
   ```

   > **Note**
   >
   > If you're using two different Postgres versions, use the psql utility of the target server. Otherwise, the system attempts to use psql from the source instance.

### Migrating to the target server

1. Stop both servers:

   ```
   /usr/lib/postgresql/XX/bin/pg_ctl -D /var/lib/postgresql/XX/main stop
   /usr/lib/edb-pge/XX/bin/pg_ctl -D /var/lib/edb-pge/XX/migration_target stop
   ```

2. To test for incompatibilities, run the `pg_upgrade` command in check mode.

   With `-b` and `-B`, specify the source and target BIN directories. With `-d` and `-D`, specify the source and target config directories:

   ```
   /usr/lib/edb-pge/XX/bin/pg_upgrade -b /usr/lib/postgresql/XX/bin -B /usr/lib/edb-pge/XX/bin \
     -d /var/lib/postgresql/XX/main -D /var/lib/edb-pge/XX/migration_target --check
   ```

   > **Note**
   >
   > The `--check` mode performs preliminary checks without executing the command.

3. To copy data from the source server to the target server, run the `pg_upgrade` command in normal mode:

   ```
   /usr/lib/edb-pge/XX/bin/pg_upgrade -b /usr/lib/postgresql/XX/bin -B /usr/lib/edb-pge/XX/bin \
     -d /var/lib/postgresql/XX/main -D /var/lib/edb-pge/XX/migration_target
   ```

4. Start the target server:

   ```
   /usr/lib/edb-pge/XX/bin/pg_ctl -D /var/lib/edb-pge/XX/migration_target start
   ```

5. Connect to the target database server:

   ```
   /usr/lib/edb-pge/XX/bin/psql -p 5590
   ```

6. Perform a spot check to ensure the databases, tables, schemas, and resources you had in the source server are available in the new server. For example, list all databases:

   ```
   \l
   ```

### Cleaning up after migration

After you verify that pg\_upgrade migrated the data successfully, perform a cleanup.

1. As the postgres user, clean up the database and its statistics:

   ```
   /usr/lib/edb-pge/XX/bin/vacuumdb --all --analyze-in-stages
   ```

2. Remove all data files of the source server with the script generated by `pg_upgrade`:

   ```
   ./delete_old_cluster.sh
   ```

## More information

Review [Upgrading an installation with pg\_upgrade](https://www.enterprisedb.com/docs/epas/latest/upgrading/major_upgrade/) for more information on pg\_upgrade options, troubleshooting, and other considerations. If you're migrating between different encryption states (unencrypted to encrypted, encrypted to unencrypted, or between different keys), see [pg\_upgrade TDE options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/pg_upgrade_arguments/) for the `--copy-by-block` and `--key-unwrap-command` options.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
