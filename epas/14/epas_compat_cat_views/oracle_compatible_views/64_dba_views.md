---
title: DBA_VIEWS
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/oracle_compatible_views/64_dba_views/
lastModified: 2023-02-14T16:10:29+05:30
---

# DBA\_VIEWS

<div id="dba_views" class="registered_link"></div>

The `DBA_VIEWS` view provides information about all views in the database.

| Name          | Type   | Description                                           |
| ------------- | ------ | ----------------------------------------------------- |
| `owner`       | `TEXT` | User name of the view owner.                          |
| `schema_name` | `TEXT` | Name of the schema in which the view belongs.         |
| `view_name`   | `TEXT` | Name of the view.                                     |
| `text`        | `TEXT` | Text of the `SELECT` statement that defines the view. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
