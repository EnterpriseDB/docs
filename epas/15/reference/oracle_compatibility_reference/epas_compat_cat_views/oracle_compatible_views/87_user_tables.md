---
title: USER_TABLES
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/87_user_tables/
lastModified: 2023-11-09T17:35:38+05:30
---

# USER\_TABLES

<div id="user_tables" class="registered_link"></div>

The `USER_TABLES` view displays information about all tables owned by the current user.

| Name              | Type                    | Description                                                                                                                        |
| ----------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `schema_name`     | `TEXT`                  | Name of the schema in which the table belongs.                                                                                     |
| `table_name`      | `TEXT`                  | Name of the table.                                                                                                                 |
| `tablespace_name` | `TEXT`                  | Name of the tablespace in which the table resides. If the tablespace name isn't specified, the default tablespace is `PG_DEFAULT`. |
| `degree`          | `CHARACTER VARYING(10)` | Number of threads per instance to scan a table, or `DEFAULT`.                                                                      |
| `status`          | `CHARACTER VARYING(5)`  | Included only for compatibility. Always set to `VALID`.                                                                            |
| `temporary`       | `CHARACTER(1)`          | `Y` if the table is temporary, `N` if the table isn't temporary.                                                                   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
