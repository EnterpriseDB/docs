---
title: ALTER TABLE...RENAME PARTITION
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/08_alter_table_rename_partition/
lastModified: 2024-11-22T12:16:04+01:00
---

# ALTER TABLE...RENAME PARTITION

<div id="alter_table_rename_partition" class="registered_link"></div>

Use the `ALTER TABLE… RENAME PARTITION` command to rename a table partition. The syntax takes two forms.

The first form renames a partition:

```sql
ALTER TABLE <table_name>
 RENAME PARTITION <partition_name>
 TO <new_name>;
```

The second form renames a subpartition:

```sql
ALTER TABLE <table_name>
 RENAME SUBPARTITION <subpartition_name>
 TO <new_name>;
```

## Description

The `ALTER TABLE… RENAME PARTITION` command renames a partition.

The behavior for `subpartition_name` is the same as for the same variable used with the `RENAME SUBPARTITION` clause.

You must own the specified table to invoke `ALTER TABLE… RENAME PARTITION` or `ALTER TABLE… RENAME SUBPARTITION`.

## Parameters

`table_name`

The name (optionally schema-qualified) of the table in which the partition or subpartition resides.

`partition_name`

The name of the partition to rename.

`subpartition_name`

The name of the subpartition to rename.

`new_name`

The new name of the partition or subpartition.

- [Example: Renaming a partition](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/08_alter_table_rename_partition/01_example_renaming_a_partition/): This command creates a list-partitioned table named sales:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
