---
title: DBA_IND_COLUMNS
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/39_dba_ind_columns/
lastModified: 2024-11-22T12:16:04+01:00
---

# DBA\_IND\_COLUMNS

<div id="dba_ind_columns" class="registered_link"></div>

The `DBA_IND_COLUMNS` view provides information about all columns included in indexes on all tables in the database.

| Name              | Type           | Description                                                      |
| ----------------- | -------------- | ---------------------------------------------------------------- |
| `index_owner`     | `TEXT`         | User name of the index owner.                                    |
| `schema_name`     | `TEXT`         | Name of the schema in which the index belongs.                   |
| `index_name`      | `TEXT`         | Name of the index.                                               |
| `table_owner`     | `TEXT`         | User name of the table owner.                                    |
| `table_name`      | `TEXT`         | Name of the table in which the index belongs.                    |
| `column_name`     | `TEXT`         | Name of column or attribute of object column.                    |
| `column_position` | `SMALLINT`     | Position of the column in the index.                             |
| `column_length`   | `SMALLINT`     | Length of the column in bytes.                                   |
| `char_length`     | `NUMERIC`      | Length of the column in characters.                              |
| `descend`         | `CHARACTER(1)` | Included only for compatibility. Always set to `Y` (descending). |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
