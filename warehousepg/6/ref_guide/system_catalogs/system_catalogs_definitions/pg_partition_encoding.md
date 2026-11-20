---
title: pg_partition_encoding
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_partition_encoding/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_partition\_encoding

<a id="topic1"></a><a id="hb143896"></a>

The `pg_partition_encoding` system catalog table describes the available column compression options for a partition template.

| column             | type      | modifers | storage  | description |
| ------------------ | --------- | -------- | -------- | ----------- |
| `parencoid`        | oid       | not null | plain    |             |
| `parencattnum`     | snallint  | not null | plain    |             |
| `parencattoptions` | text \[ ] |          | extended |             |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
