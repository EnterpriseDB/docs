---
title: About GPORCA
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/
lastModified: 2026-09-25T15:14:11+01:00
---

# About GPORCA

In WarehousePG, the default GPORCA optimizer co-exists with the Postgres-based planner.

- **[Overview of GPORCA](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/query-piv-opt-overview/)**\
  GPORCA extends the planning and optimization capabilities of the Postgres-based planner.
- **[Activating and Deactivating GPORCA](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/query-piv-opt-enable/)**\
  By default, WarehousePG uses GPORCA instead of the Postgres-based planner. Server configuration parameters activate or deactivate GPORCA.
- **[Collecting Root Partition Statistics](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/query-piv-opt-root-partition/)**\
  For a partitioned table, GPORCA uses statistics of the table root partition to generate query plans. These statistics are used for determining the join order, for splitting and joining aggregate nodes, and for costing the query steps. In contrast, the Postgres-based planner uses the statistics of each leaf partition.
- **[Considerations when Using GPORCA](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/query-piv-opt-notes/)**\
  To run queries optimally with GPORCA, consider the query criteria closely.
- **[GPORCA Features and Enhancements](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/query-piv-opt-features/)**\
  GPORCA, the WarehousePG next generation query optimizer, includes enhancements for specific types of queries and operations:
- **[Changed Behavior with GPORCA](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/query-piv-opt-changed/)**\
  There are changes to WarehousePG behavior with the GPORCA optimizer enabled (the default) as compared to the Postgres-based planner.
- **[GPORCA Limitations](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/query-piv-opt-limitations/)**\
  There are limitations in WarehousePG when using the default GPORCA optimizer. GPORCA and the Postgres-based planner currently coexist in WarehousePG because GPORCA does not support all WarehousePG features.
- **[Determining the Query Optimizer that is Used](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/query-piv-opt-fallback/)**\
  When GPORCA is enabled (the default), you can determine if WarehousePG is using GPORCA or is falling back to the Postgres-based planner.

**Parent topic:** [Querying Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/)

- [Overview of GPORCA](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/query-piv-opt-overview/): GPORCA extends the planning and optimization capabilities of the Postgres-based planner.GPORCA is extensible and achieves better optimization in multi-core architecture environments. WarehousePG uses GPORCA by default to generate an execution plan for a query when possible.
- [Activating and Deactivating GPORCA](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/query-piv-opt-enable/): By default, WarehousePG uses GPORCA instead of the Postgres-based planner. Server configuration parameters activate or deactivate GPORCA.
- [Collecting Root Partition Statistics](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/query-piv-opt-root-partition/): For a partitioned table, GPORCA uses statistics of the table root partition to generate query plans. These statistics are used for determining the join order, for splitting and joining aggregate nodes, and for costing the query steps. In contrast, the Postgres-based planner uses the statistics of each leaf partition.
- [Considerations when Using GPORCA](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/query-piv-opt-notes/): To run queries optimally with GPORCA, consider the query criteria closely.
- [GPORCA Features and Enhancements](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/query-piv-opt-features/): GPORCA, the WarehousePG next generation query optimizer, includes enhancements for specific types of queries and operations:
- [Changed Behavior with GPORCA](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/query-piv-opt-changed/): There are changes to WarehousePG behavior with the GPORCA optimizer enabled (the default) as compared to the Postgres-based planner.
- [GPORCA Limitations](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/query-piv-opt-limitations/): There are limitations in WarehousePG when using the default GPORCA optimizer. GPORCA and the Postgres-based planner currently coexist in WarehousePG because GPORCA does not support all WarehousePG features.
- [Determining the Query Optimizer that is Used](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/query-piv-opt-fallback/): When GPORCA is enabled (the default), you can determine if WarehousePG is using GPORCA or is falling back to the Postgres-based planner.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
