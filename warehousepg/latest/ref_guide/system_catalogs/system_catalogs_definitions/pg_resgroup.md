---
title: pg_resgroup
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_resgroup/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_resgroup

> **Note** The `pg_resgroup` system catalog table is valid only when resource group-based resource management is active.

The `pg_resgroup` system catalog table contains information about WarehousePG resource groups, which are used for managing concurrent statements, CPU, and memory resources. This table, defined in the `pg_global` tablespace, is globally shared across all databases in the system.

| column    | type | references | description                      |
| --------- | ---- | ---------- | -------------------------------- |
| `oid`     | oid  |            | The object ID                    |
| `rsgname` | name |            | The name of the resource group.  |
| `parent`  | oid  |            | Unused; reserved for future use. |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
