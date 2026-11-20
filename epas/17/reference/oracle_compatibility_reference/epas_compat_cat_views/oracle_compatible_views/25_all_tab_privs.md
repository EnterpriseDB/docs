---
title: ALL_TAB_PRIVS
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/25_all_tab_privs/
lastModified: 2025-11-25T20:57:39+05:30
---

# ALL\_TAB\_PRIVS

<div id="all_tab_privs" class="registered_link"></div>

The `ALL_TAB_PRIVS` view provides the following types of privileges:

- Object privileges for which a current user is either an object owner, grantor, or grantee.
- Object privileges for which the `PUBLIC` is the grantee.

| Name           | Type                     | Description                                                                                                                                                                                                                                                     |
| -------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `grantor`      | `CHARACTER VARYING(128)` | Name of the user who granted the privilege.                                                                                                                                                                                                                     |
| `grantee`      | `CHARACTER VARYING(128)` | Name of the user with the privilege.                                                                                                                                                                                                                            |
| `table_schema` | `CHARACTER VARYING(128)` | Name of the user who owns the object.                                                                                                                                                                                                                           |
| `schema_name`  | `CHARACTER VARYING(128)` | Name of the schema in which the object resides.                                                                                                                                                                                                                 |
| `table_name`   | `CHARACTER VARYING(128)` | Object name.                                                                                                                                                                                                                                                    |
| `privilege`    | `CHARACTER VARYING(40)`  | Privilege name.                                                                                                                                                                                                                                                 |
| `grantable`    | `CHARACTER VARYING(3)`   | Indicates whether the privilege was granted with the grant option `YES` or `NO`. `YES` indicates that the `GRANTEE` (recipient of the privilege) can in turn grant the privilege to others. The value can be `YES` if the grantee has administrator privileges. |
| `hierarchy`    | `CHARACTER VARYING(3)`   | The value can be `YES` or `NO`. The value can be `YES` if the privilege is `SELECT`.                                                                                                                                                                            |
| `common`       | `CHARACTER VARYING(3)`   | Included only for compatibility. Always `NO`.                                                                                                                                                                                                                   |
| `type`         | `CHARACTER VARYING(24)`  | Type of object.                                                                                                                                                                                                                                                 |
| `inherited`    | `CHARACTER VARYING(3)`   | Included only for compatibility. Always `NO`.                                                                                                                                                                                                                   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
