---
title: ALL_TABLES
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/oracle_compatible_views/26_all_tables/
lastModified: 2023-02-14T16:10:29+05:30
---

# ALL\_TABLES

<div id="all_tables" class="registered_link"></div>

The `ALL_TABLES` view provides information on all user-defined tables.

| Name              | Type                    | Description                                                                                                                     |
| ----------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `owner`           | `TEXT`                  | User name of the table’s owner.                                                                                                 |
| `schema_name`     | `TEXT`                  | Name of the schema in which the table belongs.                                                                                  |
| `table_name`      | `TEXT`                  | Name of the table.                                                                                                              |
| `tablespace_name` | `TEXT`                  | Name of the tablespace in which the table resides. If the tablespace name isn't specified, the default tablespace `PG_DEFAULT`. |
| `degree`          | `CHARACTER VARYING(10)` | Number of threads per instance to scan a table, or `DEFAULT`.                                                                   |
| `status`          | `CHARACTER VARYING(5)`  | Whether or not the state of the table is valid. Included only for compatibility. Always set to `VALID`.                         |
| `temporary`       | `CHARACTER(1)`          | `Y` if this is a temporary table, `N` if this isn't a temporary table.                                                          |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
