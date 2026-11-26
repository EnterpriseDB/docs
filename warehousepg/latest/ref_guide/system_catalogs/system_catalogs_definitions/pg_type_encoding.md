---
title: pg_type_encoding
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_type_encoding/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_type\_encoding

The `pg_type_encoding` system catalog table contains the column storage type information.

| column       | type      | modifers | storage  | description                                                                                                                                              |
| ------------ | --------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `typeid`     | oid       | not null | plain    | Foreign key to [pg\_attribute](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_attribute/) |
| `typoptions` | text \[ ] |          | extended | The actual options                                                                                                                                       |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
