---
title: PG_COLLATION
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_collation/
lastModified: 2025-11-25T20:39:04+05:30
---

# PG\_COLLATION

The `PG_COLLATION` view describes the available collations, which map SQL names to operating system locale categories.

In addition to the information in the [PostgreSQL pg\_collation description](https://www.postgresql.org/docs/current/catalog-pg-collation.html), EDB Postgres Advanced Server provides the following information.

| Name         | Type | Description                                                                                          |
| ------------ | ---- | ---------------------------------------------------------------------------------------------------- |
| collicu      | name | An ICU short-form string or empty. An ICU short form is a method of specifying collation attributes. |
| collicurules | text | ICU collation rules.                                                                                 |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
