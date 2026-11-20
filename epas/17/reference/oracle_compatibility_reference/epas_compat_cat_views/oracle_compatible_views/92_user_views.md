---
title: USER_VIEWS
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/92_user_views/
lastModified: 2025-11-25T20:57:39+05:30
---

# USER\_VIEWS

<div id="user_views" class="registered_link"></div>

The `USER_VIEWS` view provides information about all views owned by the current user.

| Name          | Type   | Description                                   |
| ------------- | ------ | --------------------------------------------- |
| `schema_name` | `TEXT` | Name of the schema in which the view resides. |
| `view_name`   | `TEXT` | Name of the view.                             |
| `text`        | `TEXT` | The `SELECT` statement that defines the view. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
