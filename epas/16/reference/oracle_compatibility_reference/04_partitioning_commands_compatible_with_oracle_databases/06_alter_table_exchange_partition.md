---
title: ALTER TABLE...EXCHANGE PARTITION
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/06_alter_table_exchange_partition/
lastModified: 2024-11-22T12:16:04+01:00
---

# ALTER TABLE...EXCHANGE PARTITION

<div id="alter_table_exchange_partition" class="registered_link"></div>

The `ALTER TABLE…EXCHANGE PARTITION` command swaps an existing table with a partition. If you plan to add a large quantity of data to a partitioned table, you can use the `ALTER TABLE… EXCHANGE PARTITION` command to implement a bulk load. You can also use the `ALTER TABLE… EXCHANGE PARTITION` command to remove old or unneeded data for storage.

The command syntax is available in two forms. The first form swaps a table for a partition:

```sql
ALTER TABLE <target_table>
  EXCHANGE PARTITION <target_partition>
  WITH TABLE <source_table>
  [(INCLUDING | EXCLUDING) INDEXES]
  [(WITH | WITHOUT) VALIDATION];
```

The second form swaps a table for a subpartition:

```sql
ALTER TABLE <target_table>
  EXCHANGE SUBPARTITION <target_subpartition>
  WITH TABLE <source_table>
  [(INCLUDING | EXCLUDING) INDEXES]
  [(WITH | WITHOUT) VALIDATION];
```

## Description

When the `ALTER TABLE… EXCHANGE PARTITION` command completes, the data originally located in the `target_partition` is located in the `source_table`. The data originally located in the `source_table` is located in the `target_partition`.

The `ALTER TABLE… EXCHANGE PARTITION` command can exchange partitions in a `LIST`, `RANGE` or `HASH` partitioned table. The structure of the `source_table` must match the structure of the `target_table` in that both tables must have matching columns and data types. The data in the table must adhere to the partitioning constraints.

If the `INCLUDING INDEXES` clause is specified with `EXCHANGE PARTITION`, then matching indexes in the `target_partition` and `source_table` are swapped. Indexes in the `target_partition` with no match in the `source_table` are rebuilt and vice versa. That is, indexes in the `source_table` with no match in the `target_partition` are also rebuilt.

If the `EXCLUDING INDEXES` clause is specified with `EXCHANGE PARTITION`, then matching indexes in the `target_partition` and `source_table` are swapped. However the `target_partition` indexes with no match in the `source_table` are marked as invalid and vice versa. That is, indexes in the `source_table` with no match in the `target_partition` are also marked as invalid.

The term _matching index_ refers to indexes that have the same attributes. Attribute examples include the collation order, ascending or descending direction, ordering of nulls first or nulls last, and so forth as determined by the `CREATE INDEX` command.

If you omit both `INCLUDING INDEXES` and `EXCLUDING INDEXES`, then the default action is the `EXCLUDING INDEXES` behavior.

The same behavior described applies for the `target_subpartition` used with the `EXCHANGE SUBPARTITION` clause.

You must own a table to invoke `ALTER TABLE… EXCHANGE PARTITION` or `ALTER TABLE… EXCHANGE SUBPARTITION` against that table.

## Parameters

`target_table`

The name (optionally schema-qualified) of the table in which the partition or subpartition resides.

`target_partition`

The name of the partition to replace.

`target_subpartition`

The name of the subpartition to replace.

`source_table`

The name of the table that replaces the `target_partition` or `target_subpartition`.

- [Example: Exchanging a table for a partition](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/06_alter_table_exchange_partition/01_example_exchanging_a_table_for_a_partition/): This example swaps a table for the partition americas of the sales table. You can create the sales table with this command:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
