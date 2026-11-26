---
title: ALL_CONS_COLUMNS
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/03_all_cons_columns/
lastModified: 2025-11-25T20:39:04+05:30
---

# ALL\_CONS\_COLUMNS

<div id="all_cons_columns" class="registered_link"></div>

The `ALL_CONS_COLUMNS` view provides information about the columns specified in constraints placed on tables accessible by the current user.

| Name              | Type       | Description                                         |
| ----------------- | ---------- | --------------------------------------------------- |
| `owner`           | `TEXT`     | User name of the constraint’s owner.                |
| `schema_name`     | `TEXT`     | Name of the schema in which the constraint belongs. |
| `constraint_name` | `TEXT`     | Name of the constraint.                             |
| `table_name`      | `TEXT`     | Name of the table to which the constraint belongs.  |
| `column_name`     | `TEXT`     | Name of the column referenced in the constraint.    |
| `position`        | `SMALLINT` | Position of the column in the object definition.    |
| `constraint_def`  | `TEXT`     | Definition of the constraint.                       |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
