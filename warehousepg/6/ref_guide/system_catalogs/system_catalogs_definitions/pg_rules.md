---
title: pg_rules
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_rules/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_rules

<a id="topic1"></a><a id="gi143896"></a>

The view `pg_rules` provides access to useful information about query rewrite rules.

The `pg_rules` view excludes the `ON SELECT` rules of views and materialized views; those can be seen in `pg_views` and `pg_matviews`.

| column       | type | references            | description                                        |
| ------------ | ---- | --------------------- | -------------------------------------------------- |
| `schemaname` | name | pg\_namespace.nspname | Name of schema containing table                    |
| `tablename`  | name | pg\_class.relname     | Name of table the rule is for                      |
| `rulename`   | name | pg\_rewrite.rulename  | Name of rule                                       |
| `definition` | text |                       | Rule definition (a reconstructed creation command) |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
