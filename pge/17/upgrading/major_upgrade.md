---
title: Major version upgrade of EDB Postgres Extended Server
description: Perform a major version upgrade of EDB Postgres Extended Server.
product: EDB Postgres Extended Server
version: "17"
url: https://www.enterprisedb.com/docs/pge/17/upgrading/major_upgrade/
lastModified: 2025-11-25T15:53:45+01:00
---

# Major version upgrade of EDB Postgres Extended Server

To perform a major version upgrade, install the new version of EDB Postgres Extended Server, initialize an empty cluster and use pg\_upgrade to migrate all data.

If a problem occurs during the upgrade process, you can [revert to the previous version](https://www.enterprisedb.com/docs/epas/latest/upgrading/major_upgrade/06_reverting_to_the_old_cluster/#reverting_to_the_old_cluster).

## Overview

1. [Prepare your upgrade](#preparing-your-upgrade) by performing a backup of the existing instance.
2. [Install the EDB Postgres Extended Server version](#installing-the-target-edb-postgres-extended-server-version) you're upgrading toward.
3. [Create a new database server](#creating-a-target-server):
   1. Create an empty directory for the new server and ensure postgres owns it.
   2. Initialize a server on a different port from the source server.
   3. Start the database server.
   4. Connect to the database server and ensure it's functioning.
4. [Upgrade to the target server](#upgrading-to-the-target-server):
   1. Stop both the source and the new server.
   2. Use pg\_upgrade by specifying the source and target bin and data directories.
   3. Start the new database server.
   4. Connect to the encrypted database server and ensure the data was transferred.
5. [Clean up and delete the source server](#cleaning-up-after-upgrade):
   1. Clean up the database and its statistics.
   2. Remove the source EDB Postgres Extended Server cluster with the script provided by pg\_upgrade.

## Worked example

This worked example upgrades an EDB Postgres Extended Server 16 database to EDB Postgres Extended Server 17.

> **Note**
>
> You can perform major upgrades of EDB Postgres Extended Server instances in the same way you upgrade an EDB Postgres Advanced Server installation. If you need more information about the pg\_upgrade utility, command line options, troubleshooting, and more, see [Upgrading an installation with pg\_upgrade](https://www.enterprisedb.com/docs/epas/latest/upgrading/major_upgrade/).

### Preparing your upgrade

Use [pg\_dumpall](https://www.postgresql.org/docs/current/app-pg-dumpall.html), [pgBackRest](https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/), or [Barman](https://www.enterprisedb.com/docs/supported-open-source/barman/) to create a backup of your source server.

### Installing the target EDB Postgres Extended Server version

[Install EDB Postgres Extended Server](https://www.enterprisedb.com/docs/pge/17/installing/) version 17. Only install the packages. Don't perform any other configurations.

### Creating a target server

If you don't want to create a new target instance but want to reuse an existing server with the target EDB Postgres Extended Server version, skip these steps and [ensure the target server is empty](https://www.enterprisedb.com/docs/epas/latest/upgrading/major_upgrade/03_upgrading_to_advanced_server/#step-2---empty-the-target-database).

1. As postgres, create an empty directory for the new server:

   ```
   mkdir /var/lib/edb-pge/17/upgrade_target 
   ```

2. As root, ensure the postgres user owns the directory:

   ```
   sudo chown postgres /var/lib/edb-pge/17/upgrade_target
   sudo chgrp postgres /var/lib/edb-pge/17/upgrade_target
   ```

3. As postgres, initialize the new server:

   ```
   /usr/lib/edb-pge/17/bin/initdb -D /var/lib/edb-pge/17/upgrade_target
   ```

   This command initializes a CONFIG directory with all configuration files for the encrypted server.

4. Before you start the cluster, ensure the new database runs on a different port from the source server. To alter the port, edit `postgresql.conf` by uncommenting the line with `#port` and changing the port number, for example, to 5432.

5. Start the target server:

   ```
   /usr/lib/edb-pge/17/bin/pg_ctl -D /var/lib/edb-pge/17/upgrade_target start
   ```

   > **Note**
   >
   > You can also start the server with the `logfile` option enabled to print errors into a logfile:
   > `/usr/lib/edb-pge/17/bin/pg_ctl -D /var/lib/edb-pge/17/upgrade_target -l logfile start`
   >
   > In this case, ensure the postgres user has rights to write to the log directory.

6. Connect to the server:

   ```
   /usr/lib/edb-pge/17/bin/psql -p 5432
   ```

   > **Note**
   >
   > If you're using two different Postgres versions, use the psql utility of the target server. Otherwise, the system will attempt to use psql from the previous instance.

### Upgrading to the target server

1. If you have any extensions or component services running in the source cluster, stop them before starting the upgrade. See [Stop all component services and servers](https://www.enterprisedb.com/docs/epas/latest/upgrading/major_upgrade/03_upgrading_to_advanced_server/#step-4---stop-all-component-services-and-servers) for more information

2. Stop both the source and target servers:

   ```
   /usr/lib/edb-pge/16/bin/pg_ctl -D /var/lib/edb-pge/16/upgrade-source stop
   /usr/lib/edb-pge/17/bin/pg_ctl -D /var/lib/edb-pge/17/upgrade-target stop
   ```

3. To test for incompatibilities, run the `pg_upgrade` command in check mode.

   With `-b` and `-B`, specify the source and target BIN directories. With `-d` and `-D`, specify the source and target CONFIG directories:

   ```
   /usr/lib/edb-pge/17/bin/pg_upgrade -b /usr/lib/edb-pge/16/bin -B /usr/lib/edb-pge/17/bin -d /var/lib/edb-pge/16/upgrade-source -D /var/lib/edb-pge/17/upgrade-target --check
   ```

   > **Note**
   >
   > The `--check` mode performs preliminary checks without executing the command.

4. To copy data from the source server to the target server, run the `pg_upgrade` command in normal mode:

   ```
   /usr/lib/edb-pge/17/bin/pg_upgrade -b /usr/lib/edb-pge/16/bin -B /usr/lib/edb-pge/17/bin -d /var/lib/edb-pge/16/upgrade-source -D /var/lib/edb-pge/17/upgrade-target
   ```

5. Start the target server:

   ```
   /usr/lib/edb-pge/17/bin/pg_ctl -D /var/lib/edb-pge/17/upgrade-target start
   ```

6. Connect to the target database server:

   ```
   /usr/lib/edb-as/17/bin/psql -p 5432
   ```

7. Perform a spot check to ensure the databases, tables, schemas, and resources you had in the unencrypted server are available in the new server. For example, list all databases, explore the database objects, views, and so on.

8. Restart the extensions or component services you disabled in the source cluster but in the target cluster.

### Cleaning up after upgrade

After you verify that pg\_upgrade migrated the data successfully, and the services are running as expected, perform a cleanup.

1. Clean up the database and its statistics:

   ```
   /usr/lib/edb-pge/17/bin/vacuumdb --all --analyze-in-stages
   ```

2. Remove all data files of the unencrypted server with the script generated by `pg_upgrade`:

   ```
   ./delete_old_cluster.sh
   ```

## More information

Review [Upgrading an installation with pg\_upgrade](https://www.enterprisedb.com/docs/epas/latest/upgrading/major_upgrade/) for more information on pg\_upgrade options, troubleshooting, and other considerations.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
