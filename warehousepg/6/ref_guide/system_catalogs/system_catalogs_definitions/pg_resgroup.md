---
title: pg_resgroup
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_resgroup/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_resgroup

<a id="topic1"></a><a id="hi141670"></a>

> **Note** The `pg_resgroup` system catalog table is valid only when resource group-based resource management is active.

The `pg_resgroup` system catalog table contains information about WarehousePG resource groups, which are used for managing concurrent statements, CPU, and memory resources. This table, defined in the `pg_global` tablespace, is globally shared across all databases in the system.

| column    | type | references | description                      |
| --------- | ---- | ---------- | -------------------------------- |
| `rsgname` | name |            | The name of the resource group.  |
| `parent`  | oid  |            | Unused; reserved for future use. |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
