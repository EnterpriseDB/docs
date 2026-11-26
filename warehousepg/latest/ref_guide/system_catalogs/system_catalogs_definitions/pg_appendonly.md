---
title: pg_appendonly
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_appendonly/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_appendonly

The `pg_appendonly` table contains information about the storage options and other characteristics of append-optimized tables.

| column         | type     | references | description                                        |
| -------------- | -------- | ---------- | -------------------------------------------------- |
| `relid`        | oid      |            | The table object identifier (OID) of the table.    |
| `segrelid`     | oid      |            | Table on-disk segment file id.                     |
| `blkdirrelid`  | oid      |            | Block used for on-disk column-oriented table file. |
| `visimaprelid` | oid      |            | Visibility map for the table.                      |
| `version`      | smallint |            | AO relation version.                               |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
