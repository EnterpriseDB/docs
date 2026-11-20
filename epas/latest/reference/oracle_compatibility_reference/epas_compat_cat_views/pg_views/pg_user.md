---
title: PG_USER
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_user/
lastModified: 2025-11-25T20:39:04+05:30
---

# PG\_USER

The `PG_USER` view provides information about the database users. It provides information specific to EDB Postgres Advanced Server in addition to the information provided in the [PostgreSQL pg\_user view](https://www.postgresql.org/docs/current/view-pg-user.html).

| Name              | Type                     | Description                                                                            |
| ----------------- | ------------------------ | -------------------------------------------------------------------------------------- |
| useredwoodprivs   | Integer                  | Specified whether the role has redwood specific privileges                             |
| usepasswdsetat    | Timestamp with time zone | Specifies the password set time, it is null if password is not set                     |
| useaccountstatus  | Smallint                 | Account status of the user                                                             |
| uselockdate       | Timestamp with time zone | The time when the account was last locked; null if the account was never locked before |
| usepasswordexpire | Timestamp with time zone | The time after which a password change is forced at the next login                     |
| uselastlogin      | Timestamp with time zone | Specifies the time of the last user login.                                             |

## Viewing privileges

There are functions designed to check redwood specific privileges for a user. They are useful for verifying permissions within SQL commands or for troubleshooting access issues. For more information see, [functions to view redwood specific privileges](https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/03_functions_and_operators/redwood_specific_privs_functions/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
