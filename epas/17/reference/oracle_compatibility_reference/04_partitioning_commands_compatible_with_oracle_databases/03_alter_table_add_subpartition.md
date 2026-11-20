---
title: ALTER TABLE...ADD SUBPARTITION
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/03_alter_table_add_subpartition/
lastModified: 2025-11-25T20:57:39+05:30
---

# ALTER TABLE...ADD SUBPARTITION

<div id="alter_table_add_subpartition" class="registered_link"></div>

The `ALTER TABLE… ADD SUBPARTITION` command adds a subpartition to an existing subpartitioned partition. The syntax is:

```sql
ALTER TABLE <table_name> MODIFY PARTITION <partition_name>
      ADD SUBPARTITION <subpartition_definition>;

Where subpartition_definition is:

{<list_subpartition> | <range_subpartition>}

and list_subpartition is:

        SUBPARTITION [<subpartition_name>]
          VALUES (<value>[, <value>]...)
          [TABLESPACE <tablespace_name>]

and range_subpartition is:

        SUBPARTITION [<subpartition_name>]
          VALUES LESS THAN (<value>[, <value>]...)
          [TABLESPACE <tablespace_name>]
```

## Description

The `ALTER TABLE… ADD SUBPARTITION` command adds a subpartition to an existing partition. The partition must already be subpartitioned. There's no upper limit to the number of defined subpartitions.

New subpartitions must be of the same type (`LIST`, `RANGE` or `HASH`) as existing subpartitions. The new subpartition rules must reference the same column specified in the subpartitioning rules that define the existing subpartitions.

You can use the `ALTER TABLE… ADD SUBPARTITION` statement to add a subpartition to a table with a `DEFAULT` rule. However, there must not be conflicting values between existing rows in the table and the values of the subpartition to add.

You can't use the `ALTER TABLE… ADD SUBPARTITION` statement to add a subpartition to a table with a `MAXVALUE` rule.

You can split an existing subpartition with the `ALTER TABLE… SPLIT SUBPARTITION` statement, effectively adding a subpartition to a table.

You can't add a subpartition that precedes existing subpartitions in a range-subpartitioned table. You must specify range subpartitions in ascending order.

Include the `TABLESPACE` clause to specify the tablespace in which the subpartition resides. If you don't specify a tablespace, the subpartition is created in the default tablespace.

If the table is indexed, the index is created on the new subpartition.

To use the `ALTER TABLE... ADD SUBPARTITION` command, you must be the table owner or have superuser or administrative privileges.

## Parameters

`table_name`

The name (optionally schema-qualified) of the partitioned table in which the subpartition resides.

`partition_name`

The name of the partition in which the new subpartition resides.

`subpartition_name`

The name of the subpartition to create. Subpartition names must be unique among all partitions and subpartitions and must follow the naming conventions for object identifiers.

`(value[, value]...)`

Use `value` to specify a quoted literal value or comma-delimited list of literal values by which table entries are grouped into partitions. Each partitioning rule must specify at least one value. However, there's no limit on the number of values specified in a rule. `value` can also be `NULL`, `DEFAULT` if specifying a `LIST` partition, or `MAXVALUE` if specifying a `RANGE` partition.

For information about creating a `DEFAULT` or `MAXVALUE` partition, see [Handling stray values in a LIST or RANGE partitioned table](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_table_partitioning/05_handling_stray_values_in_a_list_or_range_partitioned_table/#handling_stray_values_in_a_list_or_range_partitioned_table).

`tablespace_name`

The name of the tablespace in which the subpartition resides.

- [Example: Adding a subpartition to a LIST/RANGE partitioned table](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/03_alter_table_add_subpartition/01_example_adding_a_subpartition_to_a_list_range_partitioned_table/): This example adds a RANGE subpartition to the list-partitioned sales table. The sales table was created with the command:
- [Example: Adding a subpartition to a RANGE/LIST partitioned table](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/03_alter_table_add_subpartition/02_example_adding_a_subpartition_to_a_range_list_partitioned_table/): This example adds a LIST subpartition to the RANGE partitioned sales table. The sales table was created with the command:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
