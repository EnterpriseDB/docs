---
title: gp_id
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/gp_id/
lastModified: 2026-09-25T15:14:11+01:00
---

# gp\_id

The `gp_id` system catalog table identifies the WarehousePG cluster name and number of segments for the system. It also has `local` values for the particular database instance (segment or coordinator) on which the table resides. This table is defined in the `pg_global` tablespace, meaning it is globally shared across all databases in the system.

| column        | type     | references | description                                                                                                                                                                                                                                                               |
| ------------- | -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gpname`      | name     |            | The name of this WarehousePG cluster.                                                                                                                                                                                                                                     |
| `numsegments` | smallint |            | The number of segments in the WarehousePG cluster.                                                                                                                                                                                                                        |
| `dbid`        | smallint |            | The unique identifier of this segment (or coordinator) instance.                                                                                                                                                                                                          |
| `content`     | smallint |            | The ID for the portion of data on this segment instance. A primary and its mirror will have the same content ID.<br /><br />For a segment the value is from 0-_N-1_, where _N_ is the number of segments in WarehousePG.<br /><br />For the coordinator, the value is -1. |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
