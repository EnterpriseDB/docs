---
title: DBA_SUBPART_KEY_COLUMNS
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/53_dba_subpart_key_columns/
lastModified: 2025-11-25T20:39:04+05:30
---

# DBA\_SUBPART\_KEY\_COLUMNS

<div id="dba_subpart_key_columns" class="registered_link"></div>

The `DBA_SUBPART_KEY_COLUMNS` view provides information about the key columns of those partitioned tables that are subpartitioned that reside in the database.

| Name              | Type           | Description                                                     |
| ----------------- | -------------- | --------------------------------------------------------------- |
| `owner`           | `TEXT`         | Owner of the table.                                             |
| `schema_name`     | `TEXT`         | Name of the schema in which the table resides.                  |
| `name`            | `TEXT`         | Name of the table in which the column resides.                  |
| `object_type`     | `CHARACTER(5)` | Only for compatibility. Always `TABLE`.                         |
| `column_name`     | `TEXT`         | Name of the column on which the key is defined.                 |
| `column_position` | `INTEGER`      | `1` for the first column, `2` for the second column, and so on. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
