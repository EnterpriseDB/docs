---
title: gp_version_at_initdb
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_version_at_initdb/
lastModified: 2026-08-11T09:07:15Z
---

# gp\_version\_at\_initdb

<a id="topic1"></a><a id="ft142834"></a>

The `gp_version_at_initdb` table is populated on the coordinator and each segment in the WarehousePG cluster. It identifies the version of WarehousePG used when the system was first initialized. This table is defined in the `pg_global` tablespace, meaning it is globally shared across all databases in the system.

| column           | type    | references | description             |
| ---------------- | ------- | ---------- | ----------------------- |
| `schemaversion`  | integer |            | Schema version number.  |
| `productversion` | text    |            | Product version number. |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
