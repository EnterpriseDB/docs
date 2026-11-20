---
title: pg_rewrite
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_rewrite/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_rewrite

<a id="topic1"></a><a id="hm149825"></a>

The `pg_rewrite` system catalog table stores rewrite rules for tables and views. `pg_class.relhasrules` must be true if a table has any rules in this catalog.

| column      | type           | references    | description                                                                                            |
| ----------- | -------------- | ------------- | ------------------------------------------------------------------------------------------------------ |
| rulename    | name           |               | Rule name.                                                                                             |
| ev\_class   | oid            | pg\_class.oid | The table this rule is for.                                                                            |
| ev\_type    | char           |               | Event type that the rule is for: 1 = SELECT, 2 = UPDATE, 3 = INSERT, 4 = DELETE                        |
| ev\_enabled | char           |               | Controls in which session replication role mode the rule fires. Always O, rule fires in origin mode.   |
| is\_instead | bool           |               | True if the rule is an `INSTEAD` rule                                                                  |
| ev\_qual    | pg\_node\_tree |               | Expression tree (in the form of a `nodeToString()` representation) for the rule's qualifying condition |
| ev\_action  | pg\_node\_tree |               | Query tree (in the form of a `nodeToString()` representation) for the rule's action                    |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
