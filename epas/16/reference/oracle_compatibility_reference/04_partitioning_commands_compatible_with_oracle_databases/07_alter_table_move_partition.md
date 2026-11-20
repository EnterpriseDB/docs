---
title: ALTER TABLE...MOVE PARTITION
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/07_alter_table_move_partition/
lastModified: 2024-11-22T12:16:04+01:00
---

# ALTER TABLE...MOVE PARTITION

<div id="alter_table_move_partition" class="registered_link"></div>

Use the `ALTER TABLE… MOVE PARTITION` command to move a partition to a different tablespace. The command takes two forms.

The first form moves a partition to a new tablespace:

```sql
ALTER TABLE <table_name>
  MOVE PARTITION <partition_name>
   TABLESPACE <tablespace_name>;
```

The second form moves a subpartition to a new tablespace:

```sql
ALTER TABLE <table_name>
  MOVE SUBPARTITION <subpartition_name>
   TABLESPACE <tablespace_name>;
```

## Description

The `ALTER TABLE…MOVE PARTITION` command moves a partition from its current tablespace to a different tablespace. The `ALTER TABLE… MOVE PARTITION` command can move partitions of a `LIST`, `RANGE` or `HASH` partitioned table.

The same behavior applies for the `subpartition_name` used with the `MOVE SUBPARTITION` clause.

You must own the table to invoke `ALTER TABLE… MOVE PARTITION` or `ALTER TABLE… MOVE SUBPARTITION`.

## Parameters

`table_name`

The name (optionally schema-qualified) of the table in which the partition or subpartition resides.

`partition_name`

The name of the partition to move.

`subpartition_name`

The name of the subpartition to move.

`tablespace_name`

The name of the tablespace to which the partition or subpartition is moved.

- [Example: Moving a partition to a different tablespace](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/07_alter_table_move_partition/01_example_moving_a_partition_to_a_different_tablespace/): This following example moves a partition of the sales table from one tablespace to another.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
