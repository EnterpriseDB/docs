---
title: gp_fastsequence
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_fastsequence/
lastModified: 2026-08-11T09:07:15Z
---

# gp\_fastsequence

<a id="topic1"></a><a id="fc138336"></a>

The `gp_fastsequence` table contains information about append-optimized and column-oriented tables. The `last_sequence` value indicates maximum row number currently used by the table.

| column          | type   | references    | description                                                                                  |
| --------------- | ------ | ------------- | -------------------------------------------------------------------------------------------- |
| `objid`         | oid    | pg\_class.oid | Object id of the `pg_aoseg.pg_aocsseg_*` table used to track append-optimized file segments. |
| `objmod`        | bigint |               | Object modifier.                                                                             |
| `last_sequence` | bigint |               | The last sequence number used by the object.                                                 |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
