---
title: DBA_VIEWS
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/64_dba_views/
lastModified: 2024-11-22T12:16:04+01:00
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
