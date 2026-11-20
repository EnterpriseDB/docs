---
title: DBA_CONS_COLUMNS
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/oracle_compatible_views/33_dba_cons_columns/
lastModified: 2023-02-14T16:10:29+05:30
---

# DBA\_CONS\_COLUMNS

<div id="dba_cons_columns" class="registered_link"></div>

The `DBA_CONS_COLUMNS` view provides information about all columns that are included in constraints that are specified on all tables in the database.

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
