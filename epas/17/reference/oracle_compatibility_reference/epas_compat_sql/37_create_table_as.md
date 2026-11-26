---
title: CREATE TABLE AS
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/37_create_table_as/
lastModified: 2025-11-25T20:57:39+05:30
---

# CREATE TABLE AS

<div id="create_table_as" class="registered_link"></div>

## Name

`CREATE TABLE AS` — Define a new table from the results of a query.

## Synopsis

```sql
CREATE [ GLOBAL TEMPORARY ] TABLE <table_name>
  [ (<column_name> [, ...] ) ]
  [ ON COMMIT { PRESERVE ROWS | DELETE ROWS } ]
  [ TABLESPACE tablespace ]
  AS <query>
```

## Description

`CREATE TABLE AS` creates a table and fills it with data computed by a `SELECT` command. The table columns have the names and data types associated with the output columns of the `SELECT`. You can override the column names by providing an explicit list of new column names.

`CREATE TABLE AS` is similar to creating a view. However, it differs because it creates a table and evaluates the query once to fill the new table initially. The new table doesn't track later changes to the source tables of the query. In contrast, a view reevaluates its defining `SELECT` statement whenever you query it.

## Parameters

`GLOBAL TEMPORARY`

Specify to create the table as a temporary table. For details, see [`CREATE TABLE`](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/36_create_table/).

`table_name`

The name (optionally schema-qualified) of the table to create.

`column_name`

The name of a column in the new table. If you don't provide column names, the names are taken from the output column names of the query.

`query`

A query statement (a `SELECT` command). For a description of the allowed syntax, see [`SELECT`](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/71_select/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
