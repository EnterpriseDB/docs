---
title: gp_version_at_initdb
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/gp_version_at_initdb/
lastModified: 2026-09-25T15:14:11+01:00
---

# gp\_version\_at\_initdb

The `gp_version_at_initdb` table is populated on the coordinator and each segment in the WarehousePG cluster. It identifies the version of WarehousePG used when the system was first initialized. This table is defined in the `pg_global` tablespace, meaning it is globally shared across all databases in the system.

| column           | type     | references | description             |
| ---------------- | -------- | ---------- | ----------------------- |
| `schemaversion`  | smallint |            | Schema version number.  |
| `productversion` | text     |            | Product version number. |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
