---
title: ALL_COL_PRIVS
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/05_all_col_privs/
lastModified: 2024-11-22T12:16:04+01:00
---

# ALL\_COL\_PRIVS

<div id="all_col_privs" class="registered_link"></div>

The `ALL_COL_PRIVS` view provides the following types of privileges:

- Column object privileges for which a current user is either an object owner, grantor, or grantee.
- Column object privileges for which `PUBLIC` is the grantee.

| Name           | Type                     | Description                                                                                                                                                                                                                                             |
| -------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `grantor`      | `CHARACTER VARYING(128)` | Name of the user who granted the privilege.                                                                                                                                                                                                             |
| `grantee`      | `CHARACTER VARYING(128)` | Name of the user with the privilege.                                                                                                                                                                                                                    |
| `table_schema` | `CHARACTER VARYING(128)` | Name of the user who owns the object.                                                                                                                                                                                                                   |
| `schema_name`  | `CHARACTER VARYING(128)` | Name of the schema in which the object resides.                                                                                                                                                                                                         |
| `table_name`   | `CHARACTER VARYING(128)` | Object name.                                                                                                                                                                                                                                            |
| `column_name`  | `CHARACTER VARYING(128)` | Column name.                                                                                                                                                                                                                                            |
| `privilege`    | `CHARACTER VARYING(40)`  | Privilege on the column.                                                                                                                                                                                                                                |
| `grantable`    | `CHARACTER VARYING(3)`   | Indicates whether the privilege was granted with the grant option `YES` or `NO`. `YES` indicates that the `GRANTEE` (recipient of the privilege) can grant the privilege to others. The value can be `YES` if the grantee has administrator privileges. |
| `common`       | `CHARACTER VARYING(3)`   | Included for compatibility only. Always `NO`.                                                                                                                                                                                                           |
| `inherited`    | `CHARACTER VARYING(3)`   | Included for compatibility only. Always `NO`.                                                                                                                                                                                                           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
