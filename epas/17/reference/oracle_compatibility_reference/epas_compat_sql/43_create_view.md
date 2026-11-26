---
title: CREATE VIEW
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/43_create_view/
lastModified: 2025-11-25T20:57:39+05:30
---

# CREATE VIEW

<div id="create_view" class="registered_link"></div>

## Name

`CREATE VIEW` — Define a new view.

## Synopsis

```sql
CREATE [ OR REPLACE ] VIEW <name> [ ( <column_name> [, ...] ) ]
  AS <query>
```

## Description

`CREATE VIEW` defines a view of a query. The view isn't physically materialized. Instead, the query runs every time a query references the view.

`CREATE OR REPLACE VIEW` is similar. However, if a view of the same name exists, the command replaces it.

If you provide a schema name, then the view is created in the specified schema. Otherwise it's created in the current schema. The view name must differ from the name of any other view, table, sequence, or index in the same schema.

## Parameters

`name`

The name (optionally schema-qualified) of a view to create.

`column_name`

An optional list of names to use for columns of the view. If not given, the column names are deduced from the query.

`query`

A query (that is, a `SELECT` statement) that provides the columns and rows of the view. See [`SELECT`](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/71_select/) for information about valid queries.

## Notes

Currently, views are read-only. The system doesn't allow an insert, update, or delete on a view. You can get the effect of an updatable view by creating rules that rewrite inserts and the other commands on the view into appropriate actions on other tables.

Permissions of the view owner determine access to tables referenced in the view. However, functions called in the view are treated the same as if they were called directly from the query using the view. Therefore, the user of a view must have permissions to call all functions the view uses.

## Examples

Create a view consisting of all employees in department 30:

```sql
CREATE VIEW dept_30 AS SELECT * FROM emp WHERE deptno = 30;
```

## See also

[DROP VIEW](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/62_drop_view/#drop_view)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
