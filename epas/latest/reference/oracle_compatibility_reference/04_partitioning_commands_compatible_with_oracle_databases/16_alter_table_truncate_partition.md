---
title: ALTER TABLE...TRUNCATE PARTITION
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/16_alter_table_truncate_partition/
lastModified: 2025-11-25T20:39:04+05:30
---

# ALTER TABLE...TRUNCATE PARTITION

<div id="alter_table_truncate_partition" class="registered_link"></div>

Use the `ALTER TABLE… TRUNCATE PARTITION` command to remove the data from the specified partition and leave the partition structure intact. The syntax is:

```sql
ALTER TABLE <table_name> TRUNCATE PARTITION <partition_name>
  [{DROP|REUSE} STORAGE]
```

## Parameters

`table_name`

The name (optionally schema-qualified) of the partitioned table.

`partition_name`

The name of the partition to delete.

## Description

Use the `ALTER TABLE… TRUNCATE PARTITION` command to remove the data from the specified partition and leave the partition structure intact. Truncating a partition also truncates its subpartitions.

`ALTER TABLE… TRUNCATE PARTITION` doesn't cause `ON DELETE` triggers for the table to fire, but it fires `ON TRUNCATE` triggers. If an `ON TRUNCATE` trigger is defined for the partition, all `BEFORE TRUNCATE` triggers are fired before any truncation happens. All `AFTER TRUNCATE` triggers are fired after the last truncation occurs.

You must have the `TRUNCATE` privilege on a table to invoke `ALTER TABLE… TRUNCATE PARTITION`.

`DROP STORAGE` and `REUSE STORAGE` are included only for compatibility. The clauses are parsed and ignored.

- [Example: Emptying a partition](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/16_alter_table_truncate_partition/01_example_emptying_a_partition/): This example removes the data from a partition of the sales table.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
