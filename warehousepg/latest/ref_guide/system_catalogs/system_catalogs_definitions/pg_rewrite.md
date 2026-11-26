---
title: pg_rewrite
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_rewrite/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_rewrite

The `pg_rewrite` system catalog table stores rewrite rules for tables and views. `pg_class.relhasrules` must be true if a table has any rules in this catalog.

| column       | type           | references    | description                                                                                            |
| ------------ | -------------- | ------------- | ------------------------------------------------------------------------------------------------------ |
| `oid`        | oid            |               | The object ID                                                                                          |
| `rulename`   | name           |               | Rule name                                                                                              |
| `ev_class`   | oid            | pg\_class.oid | The table this rule is for                                                                             |
| `ev_type`    | char           |               | Event type that the rule is for: 1 = SELECT, 2 = UPDATE, 3 = INSERT, 4 = DELETE                        |
| `ev_enabled` | char           |               | Controls in which session replication role mode the rule fires. Always O, rule fires in origin mode.   |
| `is_instead` | boolean        |               | True if the rule is an `INSTEAD` rule                                                                  |
| `ev_qual`    | pg\_node\_tree |               | Expression tree (in the form of a `nodeToString()` representation) for the rule's qualifying condition |
| `ev_action`  | pg\_node\_tree |               | Query tree (in the form of a `nodeToString()` representation) for the rule's action                    |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
