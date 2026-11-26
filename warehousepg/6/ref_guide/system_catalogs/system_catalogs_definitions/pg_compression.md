---
title: pg_compression
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_compression/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_compression

<a id="topic1"></a><a id="gg143896"></a>

The `pg_compression` system catalog table describes the compression methods available.

| column             | type    | modifers | storage | description                       |
| ------------------ | ------- | -------- | ------- | --------------------------------- |
| `compname`         | name    | not null | plain   | Name of the compression           |
| `compconstructor`  | regproc | not null | plain   | Name of compression constructor   |
| `compdestructor`   | regproc | not null | plain   | Name of compression destructor    |
| `compcompressor`   | regproc | not null | plain   | Name of the compressor            |
| `compdecompressor` | regproc | not null | plain   | Name of the decompressor          |
| `compvalidator`    | regproc | not null | plain   | Name of the compression validator |
| `compowner`        | oid     | not null | plain   | oid from pg\_authid               |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
