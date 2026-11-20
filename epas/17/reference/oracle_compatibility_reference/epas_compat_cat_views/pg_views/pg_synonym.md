---
title: PG_SYNONYM
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_synonym/
lastModified: 2025-11-25T20:57:39+05:30
---

# PG\_SYNONYM

The `PG_SYNONYM` view defines system synonym relations (pg\_synonym) along with the relation's initial contents, if any. PostgreSQL doesn't provide a system catalog for `PG_SYNONYM`.

| Name         | Type | Description                                             |
| ------------ | ---- | ------------------------------------------------------- |
| oid          | oid  |                                                         |
| synlink      | text | Name of the database link or an empty string            |
| synname      | name | Name of the synonym                                     |
| synnamespace | oid  | Namespace where the synonym resides                     |
| synobjname   | text | Name of the base object referenced by the synonym       |
| synobjschema | text | Name of the schema where the base object resides        |
| synowner     | oid  | Object identifier of the owner (creator) of the synonym |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
