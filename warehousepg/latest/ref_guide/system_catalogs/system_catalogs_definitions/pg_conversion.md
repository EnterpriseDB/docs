---
title: pg_conversion
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_conversion/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_conversion

The `pg_conversion` system catalog table describes the available encoding conversion procedures as defined by `CREATE CONVERSION`.

| column           | type    | references        | description                                                     |
| ---------------- | ------- | ----------------- | --------------------------------------------------------------- |
| `oid`            | oid     |                   | The object ID                                                   |
| `conname`        | name    |                   | Conversion name (unique within a namespace)                     |
| `connamespace`   | oid     | pg\_namespace.oid | The OID of the namespace (schema) that contains this conversion |
| `conowner`       | oid     | pg\_authid.oid    | Owner of the conversion                                         |
| `conforencoding` | integer |                   | Source encoding ID                                              |
| `contoencoding`  | integer |                   | Destination encoding ID                                         |
| `conproc`        | regproc | pg\_proc.oid      | Conversion procedure                                            |
| `condefault`     | boolean |                   | True if this is the default conversion                          |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
