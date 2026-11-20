---
title: gp_fastsequence
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/gp_fastsequence/
lastModified: 2026-09-25T15:14:11+01:00
---

# gp\_fastsequence

The `gp_fastsequence` table contains information about append-optimized and column-oriented tables. The `last_sequence` value indicates maximum row number currently used by the table.

| column          | type   | references    | description                                                                                  |
| --------------- | ------ | ------------- | -------------------------------------------------------------------------------------------- |
| `objid`         | oid    | pg\_class.oid | Object id of the `pg_aoseg.pg_aocsseg_*` table used to track append-optimized file segments. |
| `objmod`        | bigint |               | Object modifier.                                                                             |
| `last_sequence` | bigint |               | The last sequence number used by the object.                                                 |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
