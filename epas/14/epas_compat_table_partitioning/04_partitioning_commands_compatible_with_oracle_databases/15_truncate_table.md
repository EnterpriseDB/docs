---
title: TRUNCATE TABLE
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_table_partitioning/04_partitioning_commands_compatible_with_oracle_databases/15_truncate_table/
lastModified: 2023-02-14T16:10:29+05:30
---

# TRUNCATE TABLE

<div id="truncate_table" class="registered_link"></div>

Use the `TRUNCATE TABLE` command to remove the contents of a table while preserving the table definition. Truncating a table also truncates the table's partitions or subpartitions. The syntax is:

```text
TRUNCATE TABLE <table_name>
```

## Parameters

`table_name`

The name (optionally schema-qualified) of the partitioned table.

## Description

The `TRUNCATE TABLE` command removes an entire table and the data that resides in that table. Deleting a table deletes any partitions or subpartitions of that table.

To use the `TRUNCATE TABLE` command, you must be the owner of the partitioning root, a member of a group that owns the table, the schema owner, or a database superuser.

- [Example: Emptying a table](https://www.enterprisedb.com/docs/epas/14/epas_compat_table_partitioning/04_partitioning_commands_compatible_with_oracle_databases/15_truncate_table/01_example_emptying_a_table/): This example removes the data from the sales table.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
