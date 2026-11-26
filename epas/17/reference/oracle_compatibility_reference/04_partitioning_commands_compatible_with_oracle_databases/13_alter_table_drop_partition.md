---
title: ALTER TABLE...DROP PARTITION
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/13_alter_table_drop_partition/
lastModified: 2025-11-25T20:57:39+05:30
---

# ALTER TABLE...DROP PARTITION

<div id="alter_table_drop_partition" class="registered_link"></div>

Use the `ALTER TABLE… DROP PARTITION` command to delete a partition definition and the data stored in that partition. The syntax is:

```sql
ALTER TABLE <table_name> DROP PARTITION <partition_name>;
```

## Parameters

`table_name`

The name (optionally schema-qualified) of the partitioned table.

`partition_name`

The name of the partition to delete.

## Description

The `ALTER TABLE… DROP PARTITION` command deletes a partition and any data stored on that partition. The `ALTER TABLE… DROP PARTITION` command can drop partitions of a `LIST` or `RANGE` partitioned table. This command doesn't work on a `HASH` partitioned table. Deleting a partition deletes its subpartitions.

To use the `DROP PARTITION` clause, you must be the owner of the partitioning root, a member of a group that owns the table, or have database superuser or administrative privileges.

- [Example: Deleting a partition](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/13_alter_table_drop_partition/01_example_deleting_a_partition/): This example deletes a partition of the sales table.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
