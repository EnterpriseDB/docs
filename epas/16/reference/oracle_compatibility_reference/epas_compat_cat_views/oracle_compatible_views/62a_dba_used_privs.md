---
title: DBA_USED_PRIVS
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/62a_dba_used_privs/
lastModified: 2024-11-22T12:16:04+01:00
---

# DBA\_USED\_PRIVS

The `DBA_USED_PRIVS` view provides information about all the used privileges. The used privileges are populated by the `DBMS_PRIVILEGE_CAPTURE.GENERATE_RESULT` procedure.

Superuser or the user with `CAPTURE_ADMIN` role can access this view.

| Name             | Type   | Description                                                                                                                                   |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `policy_name`    | `NAME` | Name of the privilege analysis policy.                                                                                                        |
| `run_name`       | `NAME` | Name of the run for which privileges are analyzed.                                                                                            |
| `object_class`   | `TEXT` | Name of the database object like table, function, procedure, and so on.                                                                       |
| `object_name`    | `TEXT` | Name of the object for which used privilege are recorded.                                                                                     |
| `column_name`    | `TEXT` | Name of the column for the used object privilege.                                                                                             |
| `application`    | `TEXT` | Name of the application through which queries are run. For eg: psql.                                                                          |
| `role_name`      | `NAME` | Name of the role whose privilege usage is analyzed and recorded.                                                                              |
| `privilege_type` | `TEXT` | Name of the used privilege recorded during analysis. Possible values are `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `TRUNCATE`, `REFERENCES`,... |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
