---
title: PG_DATABASE
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_database/
lastModified: 2024-11-22T12:16:04+01:00
---

# PG\_DATABASE

The `PG_DATABASE` view provides information about the available databases.

In addition to the information in the [PostgreSQL pg\_database description](https://www.postgresql.org/docs/current/catalog-pg-database.html), EDB Postgres Advanced Server provides the following information.

| Name           | Type    | Description                                                                                          |
| -------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| datacu         | name    | An ICU short-form string or empty. An ICU short form is a method of specifying collation attributes. |
| datacurules    | text    | ICU collation rules.                                                                                 |
| datredwoodlike | Boolean | Disables backslash-escape in LIKE patterns.                                                          |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
