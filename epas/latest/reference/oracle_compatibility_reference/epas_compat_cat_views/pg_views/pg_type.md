---
title: PG_TYPE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_type/
lastModified: 2025-11-25T20:39:04+05:30
---

# PG\_TYPE

The `PG_TYPE` view provides information about data types.

In addition to the information in the [PostgreSQL pg\_type description](https://www.postgresql.org/docs/current/catalog-pg-type.html), EDB Postgres Advanced Server provides the following information.

| Name      | Type   | Description                                                                                                                                      |   |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | - |
| typaccess | "char" | Specifies whether types contained in packages have PUBLIC or PRIVATE access. This field matters only when there's a packageId in `typnamespace`. |   |
| typattrs  | text   | Type modifiers, such as FINAL or INSTANTIABLE.                                                                                                   |   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
