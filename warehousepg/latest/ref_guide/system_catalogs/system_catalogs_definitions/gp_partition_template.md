---
title: gp_partition_template
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/gp_partition_template/
lastModified: 2026-09-25T15:14:11+01:00
---

# gp\_partition\_template

The `gp_partition_template` system catalog table describes the relationship between a partitioned table and the sub-partition template defined at each level in the partition hierarchy.

> **Note** WarehousePG Data supports sub-partition templates only for partitioned tables that you create with the classic syntax.

Each sub-partition template has a dependency on the existence of a template at the next lower level of the hierarchy.

| column     | type           | references                                                                                                                            | description                                                                                                                                                                                                                                                                     |
| ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `relid`    | oid            | [pg\_class](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_class/).oid | The object identifier of the root partitioned table.                                                                                                                                                                                                                            |
| `level`    | smallint       |                                                                                                                                       | The level of the partition in the hierarchy. The levels are numbered as follows: level `0` is the root partitioned table itself, level `1` represents the direct child/children of the root partitioned table, and so forth. The leaf partitions have the highest level number. |
| `template` | pg\_node\_tree |                                                                                                                                       | Expression representation of the sub-partition template defined for each partition at this level of the hierarchy.                                                                                                                                                              |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
