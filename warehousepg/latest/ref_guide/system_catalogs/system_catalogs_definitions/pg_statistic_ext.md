---
title: pg_statistic_ext
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_statistic_ext/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_statistic\_ext

The `pg_statistic_ext` system catalog table holds definitions of extended planner statistics. Each row in this catalog corresponds to a _statistics object_ created with [CREATE STATISTICS](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_STATISTICS/).

| column         | type       | references                                                                                                                                     | description                                                                                                                                                                                                 |                                                                             |
| -------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `oid`          | oid        |                                                                                                                                                | The object ID                                                                                                                                                                                               |                                                                             |
| `stxrelid`     | oid        | [pg\_class](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_class/).oid          | The table containing the columns described by this object                                                                                                                                                   |                                                                             |
| `stxname`      | name       |                                                                                                                                                | The name of the statistics object                                                                                                                                                                           |                                                                             |
| `stxnamespace` | oid        | [pg\_namespace](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_namespace/).oid  |                                                                                                                                                                                                             | The object identifier of the namespace that contains this statistics object |
| `stxowner`     | oid        | [pg\_authid](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_authid/).oid        | The owner of the statistics object                                                                                                                                                                          |                                                                             |
| `stxkeys`      | int2vector | [pg\_attribute](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_attribute/).oid  | An array of attribute numbers, indicating which table columns are covered by this statistics object; for example, a value of `1 3` would mean that the first and the third table columns are covered        |                                                                             |
| `stxkind`      | char\[]    |                                                                                                                                                | An array containing codes for the enabled statistics kinds; valid values are: `d` for n-distinct statistics, `f` for functional dependency statistics, and `m` for most common values (MCV) list statistics |                                                                             |

The `pg_statistic_ext` entry is filled in completely during `CREATE STATISTICS`, but the actual statistical values are not computed then. Subsequent `ANALYZE` commands compute the desired values and populate an entry in the [pg\_statistic\_ext\_data](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_statistic_ext_data/) catalog.

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
