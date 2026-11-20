---
title: gp_resgroup_config
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_resgroup_config/
lastModified: 2026-08-11T09:07:15Z
---

# gp\_resgroup\_config

<a id="topic1"></a><a id="fp141670"></a>

The `gp_toolkit.gp_resgroup_config` view allows administrators to see the current CPU, memory, and concurrency limits for a resource group.

> **Note** The `gp_resgroup_config` view is valid only when resource group-based resource management is active.

| column                | type | references                                                               | description                                                                             |
| --------------------- | ---- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| `groupid`             | oid  | pg\_resgroup.oid                                                         | The ID of the resource group.                                                           |
| `groupname`           | name | pg\_resgroup.rsgname                                                     | The name of the resource group.                                                         |
| `concurrency`         | text | pg\_resgroupcapability.value for pg\_resgroupcapability.reslimittype = 1 | The concurrency (`CONCURRENCY`) value specified for the resource group.                 |
| `cpu_rate_limit`      | text | pg\_resgroupcapability.value for pg\_resgroupcapability.reslimittype = 2 | The CPU limit (`CPU_RATE_LIMIT`) value specified for the resource group, or -1.         |
| `memory_limit`        | text | pg\_resgroupcapability.value for pg\_resgroupcapability.reslimittype = 3 | The memory limit (`MEMORY_LIMIT`) value specified for the resource group.               |
| `memory_shared_quota` | text | pg\_resgroupcapability.value for pg\_resgroupcapability.reslimittype = 4 | The shared memory quota (`MEMORY_SHARED_QUOTA`) value specified for the resource group. |
| `memory_spill_ratio`  | text | pg\_resgroupcapability.value for pg\_resgroupcapability.reslimittype = 5 | The memory spill ratio (`MEMORY_SPILL_RATIO`) value specified for the resource group.   |
| `memory_auditor`      | text | pg\_resgroupcapability.value for pg\_resgroupcapability.reslimittype = 6 | The memory auditor in use for the resource group.                                       |
| `cpuset`              | text | pg\_resgroupcapability.value for pg\_resgroupcapability.reslimittype = 7 | The CPU cores reserved for the resource group, or -1.                                   |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
