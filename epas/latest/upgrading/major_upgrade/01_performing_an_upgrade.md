---
title: Performing an upgrade
description: Describes how to upgrade an earlier version of EDB Postgres Advanced Server to the current version.
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/upgrading/major_upgrade/01_performing_an_upgrade/
lastModified: 2025-11-25T20:39:04+05:30
---

# Performing an upgrade

To upgrade an earlier version of EDB Postgres Advanced Server to the current version:

1. Install the current version of EDB Postgres Advanced Server. The new installation must contain the same supporting server components as the old installation.
2. Empty the target database or create a new target cluster with `initdb`.
3. To avoid authentication conflicts, place the `pg_hba.conf` file for both databases in `trust` authentication mode.
4. Shut down the old and new EDB Postgres Advanced Server services.
5. Invoke the `pg_upgrade` utility.

When `pg_upgrade` starts, it performs a compatibility check to ensure that all required executables are present and contain the expected version numbers. The verification process also checks the old and new `$PGDATA` directories to ensure that the expected files and subdirectories are in place. If the verification process succeeds, `pg_upgrade` starts the old `postmaster` and runs `pg_dumpall --schema-only` to capture the metadata contained in the old cluster. The script produced by `pg_dumpall` is used in later to re-create all user-defined objects in the new cluster.

The script produced by `pg_dumpall` re-creates only user-defined objects and not system-defined objects. The new cluster already contains the system-defined objects created by the latest version of EDB Postgres Advanced Server.

After extracting the metadata from the old cluster, `pg_upgrade` performs the bookkeeping tasks required to sync the new cluster with the existing data.

`pg_upgrade` runs the `pg_dumpall` script against the new cluster to create empty database objects of the same shape and type as those found in the old cluster. Then, `pg_upgrade` links or copies each table and index from the old cluster to the new cluster.

If you're upgrading to EDB Postgres Advanced Server and installed the `edb_dblink_oci` or `edb_dblink_libpq` extension, drop the extension before performing an upgrade. To drop the extension, connect to the server with the psql or PEM client, and invoke the commands:

```sql
DROP EXTENSION edb_dblink_oci;
DROP EXTENSION edb_dblink_libpq;
```

When you finish upgrading, you can use the `CREATE EXTENSION` command to add the current versions of the extensions to your installation.

- [Linking versus copying](https://www.enterprisedb.com/docs/epas/latest/upgrading/major_upgrade/01_performing_an_upgrade/01_linking_versus_copying/): When invoking pg\_upgrade, you can use a command-line option to specify whether to copy or link each table and index in the old cluster to the new cluster.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
