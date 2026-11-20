---
title: DROP TABLE
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/12_drop_table/
lastModified: 2023-11-09T17:35:38+05:30
---

# DROP TABLE

<div id="drop_table" class="registered_link"></div>

Use the PostgreSQL `DROP TABLE` command to remove a partitioned table definition, its partitions and subpartitions, and the table contents. The syntax is:

```sql
DROP TABLE <table_name>
```

## Parameters

`table_name`

The name (optionally schema-qualified) of the partitioned table.

## Description

The `DROP TABLE` command removes an entire table and the data that resides in that table. Deleting a table deletes any partitions or subpartitions of that table.

To use the `DROP TABLE` command, you must be the owner of the partitioning root, a member of a group that owns the table, the schema owner, or a database superuser.

## Example

To delete a table, connect to the controller node (the host of the partitioning root), and invoke the `DROP TABLE` command. For example, delete the `sales` table:

```sql
DROP TABLE sales;
```

The server confirms that the table was dropped:

```sql
edb=# drop table sales;
DROP TABLE
edb=#
```

For more information about the `DROP TABLE` command, see the [PostgreSQL core documentation](https://www.postgresql.org/docs/current/static/sql-droptable.html).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
