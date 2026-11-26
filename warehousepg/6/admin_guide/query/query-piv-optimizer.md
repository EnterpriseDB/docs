---
title: About GPORCA
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/
lastModified: 2026-08-11T09:07:15Z
---

# About GPORCA

In WarehousePG, the default GPORCA optimizer co-exists with the Postgres Planner.

- **[Overview of GPORCA](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/query-piv-opt-overview/)**\
  GPORCA extends the planning and optimization capabilities of the Postgres Planner.
- **[Activating and Deactivating GPORCA](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/query-piv-opt-enable/)**\
  By default, WarehousePG uses GPORCA instead of the Postgres Planner. Server configuration parameters activate or deactivate GPORCA.
- **[Collecting Root Partition Statistics](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/query-piv-opt-root-partition/)**\
  For a partitioned table, GPORCA uses statistics of the table root partition to generate query plans. These statistics are used for determining the join order, for splitting and joining aggregate nodes, and for costing the query steps. In contrast, the Postgres Planner uses the statistics of each leaf partition.
- **[Considerations when Using GPORCA](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/query-piv-opt-notes/)**\
  To run queries optimally with GPORCA, consider the query criteria closely.
- **[GPORCA Features and Enhancements](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/query-piv-opt-features/)**\
  GPORCA, the WarehousePG next generation query optimizer, includes enhancements for specific types of queries and operations:
- **[Changed Behavior with GPORCA](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/query-piv-opt-changed/)**\
  There are changes to WarehousePG behavior with the GPORCA optimizer enabled (the default) as compared to the Postgres Planner.
- **[GPORCA Limitations](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/query-piv-opt-limitations/)**\
  There are limitations in WarehousePG when using the default GPORCA optimizer. GPORCA and the Postgres Planner currently coexist in WarehousePG because GPORCA does not support all WarehousePG features.
- **[Determining the Query Optimizer that is Used](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/query-piv-opt-fallback/)**\
  When GPORCA is enabled (the default), you can determine if WarehousePG is using GPORCA or is falling back to the Postgres Planner.
- **[About Uniform Multi-level Partitioned Tables](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-uniform-part-tbl/)**

**Parent topic:** [Querying Data](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/)

- [Overview of GPORCA](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/query-piv-opt-overview/): GPORCA extends the planning and optimization capabilities of the Postgres Planner.GPORCA is extensible and achieves better optimization in multi-core architecture environments. WarehousePG uses GPORCA by default to generate an execution plan for a query when possible.
- [Activating and Deactivating GPORCA](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/query-piv-opt-enable/): By default, WarehousePG uses GPORCA instead of the Postgres Planner. Server configuration parameters activate or deactivate GPORCA.
- [Collecting Root Partition Statistics](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/query-piv-opt-root-partition/): For a partitioned table, GPORCA uses statistics of the table root partition to generate query plans. These statistics are used for determining the join order, for splitting and joining aggregate nodes, and for costing the query steps. In contrast, the Postgres Planner uses the statistics of each leaf partition.
- [Considerations when Using GPORCA](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/query-piv-opt-notes/): To run queries optimally with GPORCA, consider the query criteria closely.
- [GPORCA Features and Enhancements](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/query-piv-opt-features/): GPORCA, the WarehousePG next generation query optimizer, includes enhancements for specific types of queries and operations:
- [Changed Behavior with GPORCA](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/query-piv-opt-changed/): There are changes to WarehousePG behavior with the GPORCA optimizer enabled (the default) as compared to the Postgres Planner.
- [GPORCA Limitations](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/query-piv-opt-limitations/): There are limitations in WarehousePG when using the default GPORCA optimizer. GPORCA and the Postgres Planner currently coexist in WarehousePG because GPORCA does not support all WarehousePG features.
- [Determining the Query Optimizer that is Used](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/query-piv-opt-fallback/): When GPORCA is enabled (the default), you can determine if WarehousePG is using GPORCA or is falling back to the Postgres Planner.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
