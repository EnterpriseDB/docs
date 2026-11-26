---
title: PG_USER
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/pg_views/pg_user/
lastModified: 2023-02-14T16:10:29+05:30
---

# PG\_USER

The `PG_USER` view provides information about the database users. It provides information specific to EDB Postgres Advanced Server in addition to the information provided in the [PostgreSQL pg\_user view](https://www.postgresql.org/docs/current/view-pg-user.html).

| Name              | Type    | Description                                                                             |
| ----------------- | ------- | --------------------------------------------------------------------------------------- |
| uselockdate       | date    | The time when the account was last locked; null if the account was never locked before. |
| useaccountstatus  | integer | Bit mask identifying user account status.                                               |
| usepasswordexpire | date    | The time after which a password change will be forced at the next login.                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
