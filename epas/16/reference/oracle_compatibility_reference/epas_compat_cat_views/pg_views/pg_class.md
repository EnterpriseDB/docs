---
title: PG_CLASS
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_class/
lastModified: 2024-11-22T12:16:04+01:00
---

# PG\_CLASS

The `PG_CLASS` view provides information about tables and other objects that have columns or are similar to a table in other ways. This information includes indexes, sequences, views, and other objects. In the context of this table, _objects_ refers to _relations_.

In addition to the information in the [PostgreSQL pg\_class description](https://www.postgresql.org/docs/current/catalog-pg-class.html), EDB Postgres Advanced Server provides the following information.

| Name                  | Type    | Description                                                                                                                                                                                                                                                                    |
| --------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| relbackingtable       | "char"  | Identifies whether a table is backing relation for any other object. The default value is `d` for a normal object and `q` for queue tables. The relbackingtable is stored as `q` for all the backing objects of QUEUE TABLE (backing table, index, toast table, and so forth). |
| relhasredactionpolicy | Boolean | Specifies whether object has a redaction policy.                                                                                                                                                                                                                               |
| relpartname           | text    | Partition name.                                                                                                                                                                                                                                                                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
