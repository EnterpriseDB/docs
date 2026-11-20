---
title: Backing up and restoring PGAA tables on WarehousePG
description: Back up and restore PGAA tables on a WarehousePG cluster using gpbackup and gprestore.
product: EDB Postgres AI Analytics Accelerator
version: "1.9"
url: https://www.enterprisedb.com/docs/pgaa/1.9/whpg/backup/
lastModified: 2026-08-11T12:15:44+01:00
---

# Backing up and restoring PGAA tables on WarehousePG

PGAA tables store their data in object storage, not in the WarehousePG cluster. The [gpbackup utility](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/backup_restore/), provided by the `whpg-backup` package, supports mixed databases containing both PGAA and regular heap tables. For PGAA tables, gpbackup captures only metadata (table mappings, storage locations, and path bindings), not the underlying data in object storage. This metadata is automatically restored by gprestore, so PGAA tables are immediately queryable after restore without manual reconfiguration.

Protecting the underlying data in object storage is the responsibility of your object storage provider.

## Prerequisites

`whpg-backup` version 1.33 or later installed in your WarehousePG cluster.

## Backing up

Run gpbackup on the coordinator:

```bash
gpbackup --dbname mydb --backup-dir /path/to/backup-dir
```

For a full list of options, see the [gpbackup](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/reference/gpbackup/) reference page.

Note the backup timestamp from the output. You will need it for the restore step. For example:

```
[INFO]:-Backup Timestamp = 20260417100433
```

## Restoring

Restore PGAA tables into a new, empty database. Restoring into the original database or an existing database with PGAA tables is not supported.

1. Create the target database and create the PGAA and PGFS extensions:

   ```bash
   createdb mydb_restored --template=template0
   psql -d mydb_restored -c "CREATE EXTENSION pgaa CASCADE;"
   ```

2. Run gprestore:

   ```bash
   gprestore --backup-dir /path/to/backup-dir --timestamp <backup-timestamp> \
     --redirect-db mydb_restored --on-error-continue
   ```

   For a full list of options, see the [gprestore](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/reference/gprestore/) reference page.

   > **Note**
   >
   > The `--create-db` gprestore option isn't supported with PGAA.

3. Confirm the restore succeeded by checking `Tables restored` in the gprestore output.

4. Verify that storage locations are restored and PGAA tables are immediately queryable against object storage:

   ```sql
   SELECT * FROM pgfs.list_storage_locations();
   SELECT count(*) FROM my_table;
   ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
