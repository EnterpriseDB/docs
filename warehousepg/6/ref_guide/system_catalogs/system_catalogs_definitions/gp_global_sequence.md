---
title: gp_global_sequence
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_global_sequence/
lastModified: 2026-08-11T09:07:15Z
---

# gp\_global\_sequence

<a id="topic1"></a><a id="fe138336"></a>

The `gp_global_sequence` table contains the log sequence number position in the transaction log, which is used by the file replication process to determine the file blocks to replicate from a primary to a mirror segment.

| column         | type   | references | description                                         |
| -------------- | ------ | ---------- | --------------------------------------------------- |
| `sequence_num` | bigint |            | Log sequence number position in the transaction log |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
