---
title: System catalogs
description: Describes the system catalogs that store the resource group information used by EDB Resource Manager
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/database_administrator_reference/edb_resource_manager_system_catalogs/
lastModified: 2025-11-25T20:39:04+05:30
---

# System catalogs

System catalogs store the resource group information used by EDB Resource Manager.

## edb\_all\_resource\_groups

The following table lists the information available in the `edb_all_resource_groups` catalog.

| Column                         | Type      | Description                                                                  |
| ------------------------------ | --------- | ---------------------------------------------------------------------------- |
| `group_name`                   | `name`    | The name of the resource group.                                              |
| `active_processes`             | `integer` | Number of currently active processes in the resource group.                  |
| `cpu_rate_limit`               | `float8`  | Maximum CPU rate limit for the resource group. `0` means no limit.           |
| `per_process_cpu_rate_limit`   | `float8`  | Maximum CPU rate limit per currently active process in the resource group.   |
| `dirty_rate_limit`             | `float8`  | Maximum dirty rate limit for a resource group. `0` means no limit.           |
| `per_process_dirty_rate_limit` | `float8`  | Maximum dirty rate limit per currently active process in the resource group. |

<div id="edb_resource_group-1" class="registered_link"></div>

## edb\_resource\_group

The following table lists the information available in the `edb_resource_group` catalog.

| Column               | Type     | Description                                                        |
| -------------------- | -------- | ------------------------------------------------------------------ |
| `rgrpname`           | `name`   | The name of the resource group.                                    |
| `rgrpcpuratelimit`   | `float8` | Maximum CPU rate limit for a resource group. `0` means no limit.   |
| `rgrpdirtyratelimit` | `float8` | Maximum dirty rate limit for a resource group. `0` means no limit. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
