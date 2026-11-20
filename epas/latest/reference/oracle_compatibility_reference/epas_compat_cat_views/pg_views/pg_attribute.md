---
title: PG_ATTRIBUTE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_attribute/
lastModified: 2025-11-25T20:39:04+05:30
---

# PG\_ATTRIBUTE

The `PG_ATTRIBUTE` view provides information about table columns. There's one `PG_ATTRIBUTE` row for every column in every table in the database.

In addition to the information in the [PostgreSQL pg\_attribute description](https://www.postgresql.org/docs/current/catalog-pg-attribute.html), EDB Postgres Advanced Server provides the following information.

| Name        | Type    | Description                            |
| ----------- | ------- | -------------------------------------- |
| attishidden | Boolean | Column included in SELECT \* expansion |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
