---
title: ALL_VIEWS
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/31_all_views/
lastModified: 2025-11-25T20:39:04+05:30
---

# ALL\_VIEWS

<div id="all_views" class="registered_link"></div>

The `ALL_VIEWS` view provides information about all user-defined views.

| Name          | Type   | Description                                   |
| ------------- | ------ | --------------------------------------------- |
| `owner`       | `TEXT` | User name of the view’s owner.                |
| `schema_name` | `TEXT` | Name of the schema in which the view belongs. |
| `view_name`   | `TEXT` | Name of the view.                             |
| `text`        | `TEXT` | The `SELECT` statement that defines the view. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
