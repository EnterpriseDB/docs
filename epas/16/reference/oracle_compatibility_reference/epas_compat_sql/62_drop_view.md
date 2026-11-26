---
title: DROP VIEW
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/62_drop_view/
lastModified: 2024-11-22T12:16:04+01:00
---

# DROP VIEW

<div id="drop_view" class="registered_link"></div>

## Name

`DROP VIEW` — Remove a view.

## Synopsis

```sql
DROP VIEW <name>
```

## Description

`DROP VIEW` drops an existing view. To execute this command, you must be a database superuser or the owner of the view. The named view isn't deleted if other objects depend on this view, such as a view of a view.

The form of the `DROP VIEW` command compatible with Oracle doesn't support a `CASCADE` clause. To drop a view and its dependencies, use the PostgreSQL-compatible form of the `DROP VIEW` command. For more information, see the [PostgreSQL core documentation](https://www.postgresql.org/docs/current/static/sql-dropview.html).

## Parameters

`name`

The name (optionally schema-qualified) of the view to remove.

## Examples

This example removes the view named `dept_30`:

```sql
DROP VIEW dept_30;
```

## See also

[CREATE VIEW](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/43_create_view/#create_view)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
