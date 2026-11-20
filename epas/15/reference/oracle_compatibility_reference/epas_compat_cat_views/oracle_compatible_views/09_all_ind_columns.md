---
title: ALL_IND_COLUMNS
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/09_all_ind_columns/
lastModified: 2023-11-29T21:22:46Z
---

# ALL\_IND\_COLUMNS

<div id="all_ind_columns" class="registered_link"></div>

The `ALL_IND_COLUMNS` view provides information about columns included in indexes on the tables accessible by the current user.

| Name              | Type           | Description                                                      |
| ----------------- | -------------- | ---------------------------------------------------------------- |
| `index_owner`     | `TEXT`         | User name of the index owner.                                    |
| `schema_name`     | `TEXT`         | Name of the schema in which the index belongs.                   |
| `index_name`      | `TEXT`         | Name of the index.                                               |
| `table_owner`     | `TEXT`         | User name of the table owner.                                    |
| `table_name`      | `TEXT`         | Name of the table to which the index belongs.                    |
| `column_name`     | `TEXT`         | Name of the column.                                              |
| `column_position` | `SMALLINT`     | Position of the column in the index.                             |
| `column_length`   | `SMALLINT`     | Length of the column in bytes.                                   |
| `char_length`     | `NUMERIC`      | Length of the column in characters.                              |
| `descend`         | `CHARACTER(1)` | Always set to `Y` (descending). Included only for compatibility. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
