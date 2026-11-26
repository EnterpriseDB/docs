---
title: pg_attribute_encoding
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_attribute_encoding/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_attribute\_encoding

The `pg_attribute_encoding` system catalog table contains column storage information.

| column        | type      | modifers | storage  | description                                                       |
| ------------- | --------- | -------- | -------- | ----------------------------------------------------------------- |
| `attrelid`    | oid       | not null | plain    | Foreign key to `pg_attribute.attrelid`                            |
| `attnum`      | smallint  | not null | plain    | Foreign key to `pg_attribute.attnum`                              |
| `filenum`     | smallint  | not null | plain    | Shorthand for the file range assigned to the column               |
| `lastrownums` | bigint    |          | extended | The last row number of each segfile when this attribute is added. |
| `attoptions`  | text \[ ] |          | extended | The options                                                       |

For a column with `filenum = f`, the column files on disk use the suffix `(f - 1)*128 to f*128 - 1`. For example:

- Column with `filenum = 1` has files `relfilenode`, `relfilenode.1` .. `relfilenode.127`.
- Column with `filenum = 2` has files `relfilenode.128`, `relfilenode.129` .. `relfilenode.255`.
- Column with `filenum = 3` has files `relfilenode.256`, `relfilenode.257` .. `relfilenode.383`.

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
