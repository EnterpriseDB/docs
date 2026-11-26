---
title: DBA_UNUSED_PRIVS
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/62b_dba_unused_privs/
lastModified: 2025-11-25T20:57:39+05:30
---

# DBA\_UNUSED\_PRIVS

The `DBA_UNUSED_PRIVS` view provides information about all the unused privileges. The unused privileges are populated by the `DBMS_PRIVILEGE_CAPTURE.GENERATE_RESULT` procedure.

Superuser or the user with `CAPTURE_ADMIN` role can access this view.

| Name             | Type   | Description                                                              |
| ---------------- | ------ | ------------------------------------------------------------------------ |
| `policy_name`    | `NAME` | Name of the privilege analysis policy.                                   |
| `run_name`       | `NAME` | Name of the run for which privileges are analyzed.                       |
| `object_class`   | `TEXT` | Name of the database object like table, function, procedure, and so on.. |
| `object_name`    | `TEXT` | Name of the object for which unused privilege are recorded.              |
| `column_name`    | `TEXT` | Name of the column for the unused object privilege.                      |
| `application`    | `TEXT` | Name of the application through which queries are run. For eg: psql.     |
| `role_name`      | `NAME` | Name of the role whose privilege usage is analyzed and recorded.         |
| `privilege_type` | `TEXT` | Name of the unused privilege recorded during analysis.                   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
