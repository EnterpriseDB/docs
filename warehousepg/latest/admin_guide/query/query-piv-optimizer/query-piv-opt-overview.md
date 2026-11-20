---
title: Overview of GPORCA
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/query-piv-opt-overview/
lastModified: 2026-09-25T15:14:11+01:00
---

# Overview of GPORCA

GPORCA extends the planning and optimization capabilities of the Postgres-based planner.GPORCA is extensible and achieves better optimization in multi-core architecture environments. WarehousePG uses GPORCA by default to generate an execution plan for a query when possible.

GPORCA also enhances WarehousePG query performance tuning in the following areas:

- Queries against partitioned tables
- Queries that contain a common table expression (CTE)
- Queries that contain subqueries

In WarehousePG, GPORCA co-exists with the Postgres-based planner. By default, WarehousePG uses GPORCA. If GPORCA cannot be used, then the Postgres-based planner is used.

The following figure shows how GPORCA fits into the query planning architecture.

![Query planning architecture with GPORCA](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/warehousepg/7.6/images/gporca.png)

> **Note** All Postgres-based planner server configuration parameters are ignored by GPORCA. However, if WarehousePG falls back to the Postgres-based planner, the planner server configuration parameters will impact the query plan generation. For a list of Postgres-based planner server configuration parameters, see [Query Tuning Parameters](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/config_params/guc_category-list/).

**Parent topic:** [About GPORCA](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
