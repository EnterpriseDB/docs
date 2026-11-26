---
title: USER_INDEXES
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/71_user_indexes/
lastModified: 2024-11-22T12:16:04+01:00
---

# USER\_INDEXES

<div id="user_indexes" class="registered_link"></div>

The `USER_INDEXES` view provides information about all indexes on tables that are owned by the current user.

| Name              | Type                    | Description                                                                             |
| ----------------- | ----------------------- | --------------------------------------------------------------------------------------- |
| `schema_name`     | `TEXT`                  | Name of the schema in which the index belongs.                                          |
| `index_name`      | `TEXT`                  | Name of the index.                                                                      |
| `index_type`      | `TEXT`                  | Included only for compatibility. The index type is always `BTREE`.                      |
| `table_owner`     | `TEXT`                  | User name of the owner of the indexed table.                                            |
| `table_name`      | `TEXT`                  | Name of the indexed table.                                                              |
| `table_type`      | `TEXT`                  | Included only for compatibility. Always set to `TABLE`.                                 |
| `uniqueness`      | `TEXT`                  | Indicates if the index is `UNIQUE` or `NONUNIQUE`.                                      |
| `compression`     | `CHARACTER(1)`          | Included only for compatibility. Always set to `N` (not compressed).                    |
| `tablespace_name` | `TEXT`                  | Name of the tablespace in which the table resides if other than the default tablespace. |
| `degree`          | `CHARACTER VARYING(10)` | Number of threads per instance to scan the index.                                       |
| `logging`         | `TEXT`                  | Included only for compatibility. Always set to `LOGGING`.                               |
| `status`          | `TEXT`                  | Whether or not the state of the object is valid. (`VALID` or `INVALID`).                |
| `partitioned`     | `CHARACTER(3)`          | Included only for compatibility. Always set to `NO`.                                    |
| `temporary`       | `CHARACTER(1)`          | Included only for compatibility. Always set to `N`.                                     |
| `secondary`       | `CHARACTER(1)`          | Included only for compatibility. Always set to `N`.                                     |
| `join_index`      | `CHARACTER(3)`          | Included only for compatibility. Always set to `NO`.                                    |
| `dropped`         | `CHARACTER(3)`          | Included only for compatibility. Always set to `NO`.                                    |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
