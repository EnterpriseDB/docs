---
title: DROP VIEW
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/62_drop_view/
lastModified: 2023-02-14T16:10:29+05:30
---

# DROP VIEW

<div id="drop_view" class="registered_link"></div>

## Name

`DROP VIEW` — Remove a view.

## Synopsis

```text
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

```text
DROP VIEW dept_30;
```

## See also

[CREATE VIEW](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/43_create_view/#create_view)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
