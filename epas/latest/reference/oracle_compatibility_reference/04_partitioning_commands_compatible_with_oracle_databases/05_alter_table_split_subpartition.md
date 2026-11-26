---
title: ALTER TABLE...SPLIT SUBPARTITION
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/05_alter_table_split_subpartition/
lastModified: 2025-11-25T20:39:04+05:30
---

# ALTER TABLE...SPLIT SUBPARTITION

<div id="alter_table_split_subpartition" class="registered_link"></div>

Use the `ALTER TABLE… SPLIT SUBPARTITION` command to divide a single subpartition into two subpartition and redistribute the subpartition's contents. The command comes in two variations.

The first variation splits a range subpartition into two subpartitions:

```sql
ALTER TABLE <table_name> SPLIT SUBPARTITION <subpartition_name>
  AT (range_part_value)
  INTO
  (
    SUBPARTITION <new_subpart1>
      [TABLESPACE <tablespace_name>],
    SUBPARTITION <new_subpart2>
      [TABLESPACE <tablespace_name>]
  );
```

The second variation splits a list subpartition into two subpartitions:

```sql
ALTER TABLE <table_name> SPLIT SUBPARTITION <subpartition_name>
  VALUES (<value>[, <value>]...)
  INTO
  (
    SUBPARTITION <new_subpart1>
      [TABLESPACE <tablespace_name>],
    SUBPARTITION <new_subpart2>
      [TABLESPACE <tablespace_name>]
  );
```

## Description

The `ALTER TABLE...SPLIT SUBPARTITION` command adds a subpartition to an existing subpartitioned table. There's no upper limit to the number of defined subpartitions. When you execute an `ALTER TABLE...SPLIT SUBPARTITION` command, EDB Postgres Advanced Server creates two subpartitions. It moves any rows that contain values that are constrained by the specified subpartition rules into `new_subpart1` and any remaining rows into `new_subpart2`.

The new subpartition rules must reference the column specified in the rules that define the existing subpartitions.

Include the `TABLESPACE` clause to specify a tablespace in which a new subpartition resides. If you don't specify a tablespace, the subpartition is created in the default tablespace.

If the table is indexed, the index is created on the new subpartition.

To use the `ALTER TABLE... SPLIT SUBPARTITION` command, you must be the table owner or have superuser or administrative privileges.

## Parameters

`table_name`

The name (optionally schema-qualified) of the partitioned table.

`subpartition_name`

The name of the subpartition that's being split.

`new_subpart1`

The name of the first subpartition to create. Subpartition names must be unique among all partitions and subpartitions and must follow the naming conventions for object identifiers.

`new_subpart1` receives the rows that meet the subpartitioning constraints specified in the `ALTER TABLE… SPLIT SUBPARTITION` command.

`new_subpart2`

The name of the second subpartition to create. Subpartition names must be unique among all partitions and subpartitions and must follow the naming conventions for object identifiers.

`new_subpart2` receives the rows that aren't directed to `new_subpart1` by the subpartitioning constraints specified in the `ALTER TABLE… SPLIT SUBPARTITION` command.

`(value[, value]...)`

Use `value` to specify a quoted literal value or comma-delimited list of literal values by which table entries are grouped into partitions. Each partitioning rule must specify at least one value. There's no limit on the number of values specified in a rule. `value` can also be `NULL`, `DEFAULT` if specifying a `LIST` subpartition, or `MAXVALUE` if specifying a `RANGE` subpartition.

For information about creating a `DEFAULT` or `MAXVALUE` partition, see [Handling stray values in a LIST or RANGE partitioned table](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_table_partitioning/05_handling_stray_values_in_a_list_or_range_partitioned_table/#handling_stray_values_in_a_list_or_range_partitioned_table).

`tablespace_name`

The name of the tablespace in which the partition or subpartition resides.

- [Example: Splitting a lIST subpartition](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/05_alter_table_split_subpartition/01_example_splitting_a_list_subpartition/): This example splits a list subpartition, redistributing the subpartition's contents between two new subpartitions.
- [Example: Splitting a RANGE subpartition](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/05_alter_table_split_subpartition/02_example_splitting_a_range_subpartition/): This example splits a range subpartition, redistributing the subpartition's contents between two new subpartitions.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
