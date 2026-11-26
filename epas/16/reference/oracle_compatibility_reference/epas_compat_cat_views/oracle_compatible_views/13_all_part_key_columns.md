---
title: ALL_PART_KEY_COLUMNS
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/13_all_part_key_columns/
lastModified: 2024-11-22T12:16:04+01:00
---

# ALL\_PART\_KEY\_COLUMNS

<div id="all_part_key_columns" class="registered_link"></div>

The `ALL_PART_KEY_COLUMNS` view provides information about the key columns of the partitioned tables that reside in the database.

| Name              | Type           | Description                                                     |
| ----------------- | -------------- | --------------------------------------------------------------- |
| `owner`           | `TEXT`         | Owner of the table.                                             |
| `schema_name`     | `TEXT`         | Name of the schema in which the table resides.                  |
| `name`            | `TEXT`         | Name of the table in which the column resides.                  |
| `object_type`     | `CHARACTER(5)` | For compatibility only. Always `TABLE`.                         |
| `column_name`     | `TEXT`         | Name of the column on which the key is defined.                 |
| `column_position` | `INTEGER`      | `1` for the first column, `2` for the second column, and so on. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
