---
title: DBA_TABLES
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/59_dba_tables/
lastModified: 2025-11-25T20:57:39+05:30
---

# DBA\_TABLES

<div id="dba_tables" class="registered_link"></div>

The `DBA_TABLES` view provides information about all tables in the database.

| Name              | Type                    | Description                                                                                                                        |
| ----------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `owner`           | `TEXT`                  | User name of the table owner.                                                                                                      |
| `schema_name`     | `TEXT`                  | Name of the schema in which the table belongs.                                                                                     |
| `table_name`      | `TEXT`                  | Name of the table.                                                                                                                 |
| `tablespace_name` | `TEXT`                  | Name of the tablespace in which the table resides. If the tablespace name isn't specified, the default tablespace is `PG_DEFAULT`. |
| `degree`          | `CHARACTER VARYING(10)` | Number of threads per instance to scan a table, or `DEFAULT`.                                                                      |
| `status`          | `CHARACTER VARYING(5)`  | Included only for compatibility. Always set to `VALID`.                                                                            |
| `temporary`       | `CHARACTER(1)`          | `Y` if the table is temporary. `N` if the table is permanent.                                                                      |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
