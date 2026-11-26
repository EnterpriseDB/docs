---
title: CREATE TABLE...PARTITION BY
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/01_create_table_partition_by/
lastModified: 2023-11-09T17:35:38+05:30
---

# CREATE TABLE...PARTITION BY

<div id="create_table_partition_by" class="registered_link"></div>

Use the `PARTITION BY` clause of the `CREATE TABLE` command to create a partitioned table with data distributed among one or more partitions and subpartitions. The syntax can take several forms.

## List partitioning syntax

Use this form to create a list-partitioned table:

```sql
CREATE TABLE [ schema. ]<table_name> 
   <table_definition>
   PARTITION BY LIST(<column>) [ AUTOMATIC ]
   [SUBPARTITION BY {RANGE|LIST|HASH} (<column>[, <column> ]...) 
   [SUBPARTITION TEMPLATE (<subpartition_template_description>)]]
   (<list_partition_definition>[, <list_partition_definition>]...)
   [ENABLE ROW MOVEMENT];

Where `list_partition_definition` is:

      PARTITION [<partition_name>]
        VALUES (<value>[, <value>]...)
        [TABLESPACE <tablespace_name>]
        [(<subpartition>, ...)]

Where `subpartition_template_description` is:

      SUBPARTITION [<subpartition_name>] 
        VALUES (<value>[, <value>]...) 
        [TABLESPACE <tablespace_name>], ...
```

## Range partitioning syntax

Use this form to create a range-partitioned table:

```sql
CREATE TABLE [ schema. ]<table_name>
   <table_definition>
   PARTITION BY RANGE(<column>[, <column> ]...)
   [INTERVAL (<constant> | <expression>)]
   [SUBPARTITION BY {RANGE|LIST|HASH} (<column>[, <column> ]...) 
   [SUBPARTITION TEMPLATE (<subpartition_template_description>)]]
   (<range_partition_definition>[, <range_partition_definition>]...)
   [ENABLE ROW MOVEMENT];

Where `range_partition_definition` is:

      PARTITION [<partition_name>]
        VALUES LESS THAN (<value>[, <value>]...)
        [TABLESPACE <tablespace_name>]
        [(<subpartition>, ...)]

Where `subpartition_template_description` is:

      SUBPARTITION [<subpartition_name>] 
        VALUES LESS THAN (<value>[, <value>]...)
        [TABLESPACE <tablespace_name>], ...
```

## Hash partitioning syntax

Use this form to create a hash-partitioned table:

```sql
CREATE TABLE [ schema. ]<table_name>
   <table_definition>
   PARTITION BY HASH(<column>[, <column> ]...)
   [SUBPARTITION BY {RANGE|LIST|HASH} (<column>[, <column> ]...) 
   [SUBPARTITION TEMPLATE (<subpartition_template_description>)]]
   [SUBPARTITIONS <num>] [STORE IN ( <tablespace_name> [, <tablespace_name>]... ) ]]
   [PARTITIONS <num>] [STORE IN ( <tablespace_name> [, <tablespace_name>]... ) ] |
   (<hash_partition_definition>[, <hash_partition_definition>]...)
   [ENABLE ROW MOVEMENT];

Where `hash_partition_definition` is:

      PARTITION [<partition_name>]
        [TABLESPACE <tablespace_name>]
        [(<subpartition>, ...)]

Where `subpartition_template_description` is:

      SUBPARTITION [<subpartition_name>] 
        [TABLESPACE <tablespace_name>], ...
```

## Subpartitioning syntax

`subpartition` can be one of the following:

```sql
{<list_subpartition> | <range_subpartition> | <hash_subpartition>}

Where `list_subpartition` is:

      SUBPARTITION [<subpartition_name>]
        VALUES (<value>[, <value>]...)
        [TABLESPACE <tablespace_name>]

Where `range_subpartition` is:

      SUBPARTITION [<subpartition_name>]
        VALUES LESS THAN (<value>[, <value>]...)
        [TABLESPACE <tablespace_name>]

Where `hash_subpartition` is:

      SUBPARTITION [<subpartition_name>]
        [TABLESPACE <tablespace_name>] |
      SUBPARTITIONS <num> [STORE IN ( <tablespace_name> [, <tablespace_name>]... ) ]
```

## Description

The `CREATE TABLE… PARTITION BY` command creates a table with one or more partitions. Each partition can have one or more subpartitions. There's no upper limit to the number of defined partitions. However, if you include the `PARTITION BY` clause, you must specify at least one partitioning rule. The resulting table is owned by the user that creates it.

### `PARTITION BY LIST` clause

Use the `PARTITION BY LIST` clause to divide a table into partitions based on the values entered in a specified column. Each partitioning rule must specify at least one literal value. However, there's no upper limit placed on the number of values you can specify. Include a rule that specifies a matching value of `DEFAULT` to direct any unqualified rows to the given partition.

For more information about using the `DEFAULT` keyword, see [Handling stray values in a LIST or RANGE partitioned table](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_table_partitioning/05_handling_stray_values_in_a_list_or_range_partitioned_table/#handling_stray_values_in_a_list_or_range_partitioned_table).

### `AUTOMATIC` clause

Use the `AUTOMATIC` clause to specify for the table to use automatic list partitioning. By specifying the `AUTOMATIC` clause, the database creates partitions when new data is inserted into a table that doesn't correspond to any value declared for an existing partition.

For more information about `AUTOMATIC LIST PARTITIONING`, see [Automatic list partitioning](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_table_partitioning/02_selecting_a_partition_type/02_automatic_list_partitioning/#automatic_list_partitioning).

### `PARTITION BY RANGE` clause

Use the `PARTITION BY RANGE` clause to specify boundary rules by which to create partitions. Each partitioning rule must contain at least one column of a data type that has two operators (that is, a greater-than or equal-to operator, and a less-than operator). Range boundaries are evaluated against a `LESS THAN` clause and are non-inclusive. For example, a date boundary of January 1, 2013 includes only date values that fall on or before December 31, 2012.

Specify range partition rules in ascending order. `INSERT` commands that store rows with values that exceed the top boundary of a range-partitioned table fail unless the partitioning rules include a boundary rule that specifies a value of `MAXVALUE`. If you don't include a `MAXVALUE` partitioning rule, any row that exceeds the maximum limit specified by the boundary rules results in an error.

For more information about using the `MAXVALUE` keyword, see [Handling stray values in a LIST or RANGE partitioned table](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_table_partitioning/05_handling_stray_values_in_a_list_or_range_partitioned_table/#handling_stray_values_in_a_list_or_range_partitioned_table).

### `INTERVAL` clause

Use the `INTERVAL` clause to specify an interval range-partitioned table. With an `INTERVAL` clause, the database extends the range partitioning to create partitions of a specified interval when data is inserted into a table that exceeds an existing range partition.

For more information about `INTERVAL RANGE PARTITION`, see [Interval range partitioning](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_table_partitioning/02_selecting_a_partition_type/01_interval_range_partitioning/#interval_range_partitioning).

### `PARTITION BY HASH` clause

Use the `PARTITION BY HASH` clause to create a hash-partitioned table. In a `HASH` partitioned table, data is divided among equal-sized partitions based on the hash value of the column specified in the partitioning syntax. When specifying a `HASH` partition, choose a column or combination of columns that's as close to unique as possible. This technique helps to ensure that data is evenly distributed among the partitions. When selecting a partitioning column (or combination of columns), for best performance, select columns that you frequently search for exact matches.

### `STORE IN` clause

Use the `STORE IN` clause to specify the tablespace list across which the autogenerated partitions or subpartitions are stored.

> **Note**
>
> If you're upgrading EDB Postgres Advanced Server, you must rebuild the hash-partitioned table on the upgraded version server.

### `TABLESPACE` keyword

Use the `TABLESPACE` keyword to specify the name of a tablespace on which a partition or subpartition resides. if you don't specify a tablespace, the partition or subpartition resides in the default tablespace.

### `SUBPARTITION BY` clause

If a table definition includes the `SUBPARTITION BY` clause, each partition in that table must have at least one subpartition. You can explicitly define each subpartition, or it can be system defined.

If the subpartition is system defined, the server-generated subpartition resides in the default tablespace, and the name of the subpartition is assigned by the server. The server creates:

- A `DEFAULT` subpartition if the `SUBPARTITION BY` clause specifies `LIST`.
- A `MAXVALUE` subpartition if the `SUBPARTITION BY` clause specifies `RANGE`.

The server generates a subpartition name that's a combination of the partition table name and a unique identifier. You can query the `ALL_TAB_SUBPARTITIONS` table to review a complete list of subpartition names.

### `SUBPARTITION TEMPLATE`

Use `ENABLE ROW MOVEMENT` with a list, range, or hash partition table to support migrating tables with similar syntax from Oracle databases. However, it doesn't enable the actual row movement. This syntax isn't supported with the `ALTER TABLE` command.

## Parameters

`table_name`

The name (optionally schema-qualified) of the table to create.

`table_definition`

The column names, data types, and constraint information as described in the PostgreSQL core documentation for the [`CREATE TABLE` statement](https://www.postgresql.org/docs/current/static/sql-createtable.html).

`partition_name`

The name of the partition to create. Partition names must be unique among all partitions and subpartitions and must follow the naming conventions for object identifiers.

`subpartition_name`

The name of the subpartition to create. Subpartition names must be unique among all partitions and subpartitions and must follow the naming conventions for object identifiers.

`num`

You can use the `PARTITIONS num` clause to specify the number of `HASH` partitions to create. Alternatively, you can use the partition definition to specify individual partitions and their tablespaces.

!!! Note
You can use either `PARTITIONS` or `PARTITION DEFINITION` when creating a table.

The `SUBPARTITIONS num` clause is supported only for `HASH` partitions. You can use it to specify the number of hash subpartitions to create. Alternatively, you can use the subpartition definition to specify individual subpartitions and their tablespaces. If you don't specify `SUBPARTITIONS` or `SUBPARTITION DEFINITION`, then the partition creates a subpartition based on the `SUBPARTITION TEMPLATE`.

`subpartition_template_description`

The list of subpartition details with subpartition name, subpartition bound, and tablespace name.

`column`

The name of a column on which the partitioning rules are based. Each row is stored in a partition that corresponds to the `value` of the specified columns.

`constant | expression`

The `constant` and `expression` specifies a `NUMERIC`, `DATE`, or `TIME` value.

`(value[, value]...)`

Use `value` to specify a quoted literal value or comma-delimited list of literal values by which table entries are grouped into partitions. Each partitioning rule must specify at least one value. However, there's no limit on the number of values specified in a rule. `value` can be `NULL`, `DEFAULT` if specifying a `LIST` partition, or `MAXVALUE` if specifying a `RANGE` partition.

When specifying rules for a list-partitioned table, include the `DEFAULT` keyword in the last partition rule to direct any unmatched rows to the given partition. If you don't include a rule that includes a value of `DEFAULT`, any `INSERT` statement that attempts to add a row that doesn't match the specified rules of at least one partition fails and returns an error.

When specifying rules for a list-partitioned table, include the `MAXVALUE` keyword in the last partition rule to direct any uncategorized rows to the given partition. If you don't include a `MAXVALUE` partition, any `INSERT` statement that attempts to add a row where the partitioning key is greater than the highest value specified fails and returns an error.

`tablespace_name`

The name of the tablespace in which the partition or subpartition resides.

- [Example: PARTITION BY LIST](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/01_create_table_partition_by/01_example_partition_by_list/): This example creates a partitioned table sales using the PARTITION BY LIST clause. The sales table stores information in three partitions: europe, asia, and americas.
- [Example: AUTOMATIC LIST PARTITION](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/01_create_table_partition_by/02_example_automatic_list_partition/): This example shows a sales table that uses an AUTOMATIC clause to create an automatic list partitioned table on the sales\_state column. The database creates a partition and adds data to a table.
- [Example: PARTITION BY RANGE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/01_create_table_partition_by/03_example_partition_by_range/): This example creates a partitioned table sales using the PARTITION BY RANGE clause. The sales table stores information in four partitions: q12012, q22012, q32012 and q42012.
- [Example: INTERVAL RANGE PARTITION](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/01_create_table_partition_by/04_example_interval_range_partition/): This example shows a sales table that's partitioned by interval on the sold\_month column. The range partition is created to establish a transition point, and new partitions are created beyond that transition point. The database creates a new interval range partition and adds data to a table.
- [Example: PARTITION BY HASH](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/01_create_table_partition_by/05_example_partition_by_hash/): This example creates a partitioned table sales using the PARTITION BY HASH clause. The sales table stores information in three partitions: p1, p2, and p3.
- [Example: PARTITION BY HASH...PARTITIONS num...](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/01_create_table_partition_by/06_example_partitions_number/): This example creates a hash-partitioned table sales using the PARTITION BY HASH clause. The partitioning column is part\_no. The example specifies the number of partitions to create.
- [Example: PARTITION BY RANGE, SUBPARTITION BY LIST](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/01_create_table_partition_by/07_example_partition_by_range_subpartition_by_list/): This example creates a partitioned table sales that's first partitioned by the transaction date. The range partitions q12012, q22012, q32012 and q42012 are then list subpartitioned using the value of the country column.
- [Example: CREATING UNIQUE INDEX on PARTITION TABLE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/01_create_table_partition_by/08_example_creating_unique_index/): For unique-index partitioned tables, you can use the range, list, or hash-partitioning method. To create a unique ROWID for the partitioned table, you must set the parameter defaultwithrowids = true.
- [Example: CREATING SUBPARTITION TEMPLATE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/01_create_table_partition_by/09_example_subpartition_template/): These examples show how to create subpartitions in a partitioned table using a subpartition template.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
