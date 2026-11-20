---
title: Configuring pg_squeeze
product: PG Squeeze
url: https://www.enterprisedb.com/docs/pg_extensions/pg_squeeze/configuring/
lastModified: 2024-02-15T12:24:37+05:30
---

# Configuring pg\_squeeze

1. Add `pg_squeeze` to the `shared_preload_libraries` parameter:

   ```ini
   shared_preload_libraries = 'pg_squeeze'
   ```

   > **Note**
   >
   > If `shared_preload_libraries` has other extensions, then you can add `pg_squeeze` to the list. The order doesn't matter.

2. Add these changes to `postgresql.conf`:

   ```shell
   wal_level = logical
   max_replication_slots = 1 # ... or add 1 to the current value.
   ```

3. Restart Postgres.

4. Create the `pg_squeeze` extension in your database:

   ```shell
   CREATE EXTENSION pg_squeeze;
   ```

> **Note**
>
> When upgrading a database cluster with `pg_squeeze` installed (either using `pg_dumpall`/`pg_restore` or `pg_upgrade`), make sure that the new cluster has `pg_squeeze` in `shared_preload_libraries` before you upgrade. Otherwise the upgrade fails.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
