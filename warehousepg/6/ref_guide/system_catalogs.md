---
title: System Catalogs
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/
lastModified: 2026-08-11T09:07:15Z
---

# System Catalogs

<a id="topic1"></a><a id="eu135496"></a>

This reference describes the WarehousePG cluster catalog tables and views. System tables prefixed with `gp_` relate to the parallel features of WarehousePG. Tables prefixed with `pg_` are either standard PostgreSQL system catalog tables supported in WarehousePG, or are related to features WarehousePG that provides to enhance PostgreSQL for data warehousing workloads. Note that the global system catalog for WarehousePG resides on the coordinator instance.

> **Caution** Changes to WarehousePG cluster catalog tables or views are not supported. If a catalog table or view is changedby the customer, the WarehousePG cluster is not supported. The cluster must be reinitialized and restored by the customer.

<a id="ul_lyl_np1_1q"></a>

- [System Tables](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/catalog_ref-tables/)
- [System Views](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/catalog_ref-views/)
- [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

**Parent topic:** [WarehousePG Reference Guide](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/)

- [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/): System catalog table and view definitions in alphabetical order.
- [System Tables](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/catalog_ref-tables/): -   gpconfigurationhistory
- [System Views](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/catalog_ref-views/): WarehousePG provides the following system views not available in PostgreSQL.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
