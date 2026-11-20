---
title: Known issues
description: Learn about known issues and limitations in WarehousePG Backup and Restore.
product: WarehousePG Backup and Restore
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-backup/overview/known_issues/
lastModified: 2026-08-11T11:42:25Z
---

# Known issues

These are the currently known issues and limitations of `gpbackup` and `gprestore`. Where applicable, workarounds are included to help mitigate the impact of these issues.

- If you create an index on a parent partitioned table, `gpbackup` doesn't back up that same index on child partitioned tables of the parent, as creating the same index on a child would cause an error. However, if you exchange a partition, `gpbackup` doesn't detect that the index on the exchanged partition is inherited from the new parent table. In this case, `gpbackup` backs up conflicting `CREATE INDEX` statements, which causes an error when you restore the backup set.

- You can execute multiple instances of `gpbackup`, but each execution requires a distinct timestamp.

- Database object filtering is currently limited to schemas and tables.

- When backing up a partitioned table where some or all leaf partitions are in different schemas from the root partition, the leaf partition table definitions, including the schemas, are backed up as metadata. This occurs even if the backup operation specifies that schemas containing the leaf partitions should be excluded. To control data being backed up for this type of partitioned table, use the `--leaf-partition-data` option.

- If you use the `gpbackup --single-data-file` option to combine table backups into a single file per segment, you can't perform a parallel restore operation with `gprestore` (you can't set `--jobs` to a value higher than 1).

- You can't use `--exclude-table-file` with `--leaf-partition-data`. Although you can specify leaf partition names in a file specified with `--exclude-table-file`, `gpbackup` ignores the partition names.

- Backing up a database with `gpbackup` while simultaneously running DDL commands might cause `gpbackup` to fail, in order to ensure consistency within the backup set. For example, if a table is dropped after the start of the backup operation, `gpbackup` exits and displays the error `relation <schema.table> does not exist`.

- `gpbackup` might fail when a table is dropped during a backup operation due to table locking issues. `gpbackup` generates a list of tables to back up and acquires an ACCESS SHARE lock on the tables. If an EXCLUSIVE LOCK is held on a table, `gpbackup` acquires the ACCESS SHARE lock after the existing lock is released. If the table no longer exists when `gpbackup` attempts to acquire a lock on the table, `gpbackup` exits with an error. For tables that might be dropped during a backup, exclude the tables from a backup with a `gpbackup` table filtering option such as `--exclude-table` or `--exclude-schema`.

- A backup created with `gpbackup` can only be restored to a WarehousePG cluster with the same number of segment instances as the source cluster. If you run `gpexpand` to add segments to the cluster, backups made before starting the expansion can't be restored after the expansion completes.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
