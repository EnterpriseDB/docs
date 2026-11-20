---
title: Overview of GPORCA
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/query-piv-opt-overview/
lastModified: 2026-08-11T09:07:15Z
---

# Overview of GPORCA

GPORCA extends the planning and optimization capabilities of the Postgres Planner.GPORCA is extensible and achieves better optimization in multi-core architecture environments. WarehousePG uses GPORCA by default to generate an execution plan for a query when possible.

GPORCA also enhances WarehousePG query performance tuning in the following areas:

- Queries against partitioned tables
- Queries that contain a common table expression (CTE)
- Queries that contain subqueries

In WarehousePG, GPORCA co-exists with the Postgres Planner. By default, WarehousePG uses GPORCA. If GPORCA cannot be used, then the Postgres Planner is used.

The following figure shows how GPORCA fits into the query planning architecture.

![Query planning architecture with GPORCA](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/warehousepg/6/images/gporca.png)

> **Note** All Postgres Planner server configuration parameters are ignored by GPORCA. However, if WarehousePG falls back to the Postgres Planner, the planner server configuration parameters will impact the query plan generation. For a list of Postgres Planner server configuration parameters, see [Query Tuning Parameters](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc_category-list/).

**Parent topic:** [About GPORCA](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
