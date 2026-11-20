---
title: pg_am
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_am/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_am

The `pg_am` table stores information about index access methods. There is one row for each index access method supported by the system.

| column      | type    | references | description                                                                             |
| ----------- | ------- | ---------- | --------------------------------------------------------------------------------------- |
| `oid`       | oid     |            | Row identifier (hidden attribute; must be explicitly selected)                          |
| `amname`    | name    |            | Name of the access method                                                               |
| `amhandler` | regproc |            | OID of a handler function responsible for supplying information about the access method |
| `amtype`    | char    |            | `t` for table (including materialized views), `i` for index                             |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
