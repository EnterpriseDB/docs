---
title: pg_attribute_encoding
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_attribute_encoding/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_attribute\_encoding

<a id="topic1"></a><a id="gb143896"></a>

The `pg_attribute_encoding` system catalog table contains column storage information.

| column       | type      | modifers | storage  | description                            |
| ------------ | --------- | -------- | -------- | -------------------------------------- |
| `attrelid`   | oid       | not null | plain    | Foreign key to `pg_attribute.attrelid` |
| `attnum`     | smallint  | not null | plain    | Foreign key to `pg_attribute.attnum`   |
| `attoptions` | text \[ ] |          | extended | The options                            |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
