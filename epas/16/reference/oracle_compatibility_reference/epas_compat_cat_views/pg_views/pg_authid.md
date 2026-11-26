---
title: PG_AUTHID
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_authid/
lastModified: 2024-11-22T12:16:04+01:00
---

# PG\_AUTHID

The `PG_AUTHID` view provides information about database authorization identifiers (that is, roles). A role includes users and groups.

In addition to the information in the [PostgreSQL pg\_authid description](https://www.postgresql.org/docs/current/catalog-pg-authid.html), EDB Postgres Advanced Server provides the following information.

| Name                  | Type     | Description                                                           |
| --------------------- | -------- | --------------------------------------------------------------------- |
| rolaccountstatus      | smallint | Account status of the role                                            |
| rolcreatedblink       | Boolean  | Specifies whether the role is allowed to create databases link        |
| rolcreatepublicdblink | Boolean  | Specifies whether the role is allowed to create public databases link |
| roldroppublicdblink   | Boolean  | Specifies whether the role is allowed to drop public databases links  |
| rolpolicyexempt       | Boolean  | Specifies whether the role is allowed to bypass VPD policies          |
| rolprofile            | oid      | Object identifier for the role's profile                              |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
