---
title: pg_inherits
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_inherits/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_inherits

<a id="topic1"></a><a id="gr143896"></a>

The `pg_inherits` system catalog table records information about table inheritance hierarchies. There is one entry for each direct child table in the database. (Indirect inheritance can be determined by following chains of entries.) In WarehousePG, inheritance relationships are created by both the `INHERITS` clause (standalone inheritance) and the `PARTITION BY` clause (partitioned child table inheritance) of `CREATE TABLE`.

| column      | type | references    | description                                                                                                                                                                             |
| ----------- | ---- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inhrelid`  | oid  | pg\_class.oid | The OID of the child table.                                                                                                                                                             |
| `inhparent` | oid  | pg\_class.oid | The OID of the parent table.                                                                                                                                                            |
| `inhseqno`  | int4 |               | If there is more than one direct parent for a child table (multiple inheritance), this number tells the order in which the inherited columns are to be arranged. The count starts at 1. |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
