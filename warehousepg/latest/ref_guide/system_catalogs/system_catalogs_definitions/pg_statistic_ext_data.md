---
title: pg_statistic_ext_data
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_statistic_ext_data/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_statistic\_ext\_data

The `pg_statistic_ext_data` system catalog table holds data for extended planner statistics defined in [pg\_statistic\_ext](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_statistic_ext/). Each row in this catalog corresponds to a _statistics object_ created with [CREATE STATISTICS](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_STATISTICS/).

Like `pg_statistic`, `pg_statistic_ext_data` should not be readable by the public, since the contents might be considered sensitive. (Example: most common combinations of values in columns might be quite interesting.) [pg\_stats\_ext](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/catalog_ref-views/#pg_stats_ext) is a publicly readable view on `pg_statistic_ext_data` (after joining with `pg_statistic_ext`) that only exposes information about those tables and columns that are readable by the current user.

| column             | type             | references                                                                                                                                              | description                                                                 |
| ------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `stxoid`           | oid              | [pg\_statistic\_ext](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_statistic_ext/).oid  | The extended statistic object containing the definition for this data.      |
| `stxdndistinct`    | pg\_ndistinct    |                                                                                                                                                         | N-distinct counts, serialized as `pg_ndistinct` type.                       |
| `stxddependencies` | pg\_dependencies |                                                                                                                                                         | Functional dependency statistics, serialized as `pg_dependencies` type.     |
| `stxdmcv`          | pg\_mcv\_list    |                                                                                                                                                         | MCV (most-common values) list statistics, serialized as `pg_mcv_list` type. |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
