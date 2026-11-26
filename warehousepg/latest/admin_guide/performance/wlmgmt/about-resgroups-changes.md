---
title: About Changes to Resource Groups in WarehousePG 7
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt/about-resgroups-changes/
lastModified: 2026-09-25T15:14:11+01:00
---

# About Changes to Resource Groups in WarehousePG 7

WarehousePG 7 introduces substantial changes to resource group-based resource management. This topic compares the differences between resource groups with WarehousePG 6 and WarehousePG 7. Visit [Using Resource Groups](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt/workload_mgmt_resgroups/) for more information about how resource groups work in WarehousePG 7.

The following table compares the main concepts of resource management and how each version of WarehousePG implements them:

| Metric              | Resource Groups in WarehousePG 6                                                                                                                  | Resource Groups in WarehousePG 7                                                                                                                                                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Concurrency         | Managed at the transaction level                                                                                                                  | Managed at the transaction level                                                                                                                                                                                                                                                                          |
| CPU                 | Specify percentage of CPU resources or the number of CPU cores; uses Linux Control Groups                                                         | Specify percentage of CPU resources or the number of CPU cores, as well as set upper limits per resource group; uses Linux Control Groups                                                                                                                                                                 |
| Memory              | Managed at the transaction level, with enhanced allocation and tracking; users cannot over-subscribe                                              | `MEMORY_QUOTA` and `CONCURRENCY` shape a query's planned memory allocation only, and WarehousePG doesn't enforce a per-resource-group memory limit at the segment level; actual memory usage is governed by the shared per-segment pool that `gp_vmem_protect_limit` defines, so users can over-subscribe |
| Disk I/O            | None                                                                                                                                              | Limit the maximum read/write disk I/O throughput, and maximum read/write I/O operations per second                                                                                                                                                                                                        |
| Users               | Limits are applied to `SUPERUSER` and non-admin users alike<br />There are two default resource groups: `admin_group` and `default_group`         | Limits are applied to `SUPERUSER`, non-admin users, and system processes of non-user classes<br />There are three default resource groups: `admin_group`, `default_group`, and `system_group`                                                                                                             |
| Queueing            | Queue when no slot is available or not enough available memory                                                                                    | Queue when no slot is available                                                                                                                                                                                                                                                                           |
| Query Failure       | Query may fail after reaching transaction fixed memory limit when no shared resource group memory exists and the transaction requests more memory | Query may fail if the allocated memory for the query surpasses the available system memory and spill limits                                                                                                                                                                                               |
| Limit Bypass        | Limits are not enforced on `SET`, `RESET`, and `SHOW` commands                                                                                    | Limits are not enforced on `SET`, `RESET`, and `SHOW` commands. Additionally, certain queries may be configured to bypass the concurrency limit                                                                                                                                                           |
| External Components | Manage external component CPU and memory resources                                                                                                | Manage external component CPU resources                                                                                                                                                                                                                                                                   |

> **Note**
>
> Disk I/O limits are only available when you use Linux Control Groups v2. See [Configuring and Using Resource Groups](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt/workload_mgmt_resgroups/#topic71717999) for more information.

> **Note**
>
> WarehousePG 7 removed the direct per-group memory attributes that WarehousePG 6 used (`MEMORY_LIMIT`, `MEMORY_SHARED_QUOTA`, and `MEMORY_SPILL_RATIO`), and memory management is delegated to `gp_vmem_protect_limit` at the segment level. See [Memory Limits](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt/workload_mgmt_resgroups/#topic8339717) for more information.

<a id="attributes"></a>

### Changes to Resource Groups Attributes

You may configure four new resource group attributes using the `CREATE RESOURCE GROUP` and `ALTER RESOURCE GROUP` SQL commands:

- `CPU_MAX_PERCENT`, which configures the maximum amount of CPU resources the resource group can use.
- `CPU_WEIGHT`, which configures the scheduling priority of the resource group.
- `MIN_COST`, which configures the minimum amount a query's query plan cost for the query to remain in the resource group.
- `IO_LIMIT`, which configures device I/O usage at the resource group level to manage the maximum throughput of read/write operations, and the maximum read/write operations per second.

The following resource group attributes have been removed:

- `CPU_RATE_LIMIT`
- `MEMORY_AUDITOR`
- `MEMORY_SPILL_RATIO`
- `MEMORY_SHARED_QUOTA`

<a id="gucs"></a>

### Changes to Server Configuration Parameters

WarehousePG 7 resource group management introduces the following changes to server configuration parameters:

- The possible settings for the [gp\_resource\_manager](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/config_params/guc-list/#gp_resource_manager) server configuration parameter have changed. They now include the following:
  - `none` - Configures WarehousePG to not use any resource manager. This is the default.
  - `group` - Configures WarehousePG to use resource groups and base resource group behavior on the cgroup v1 version of Linux cgroup functionality.
  - `group-v2` - Configures WarehousePG to use resource groups and base resource group behavior on the cgroup v2 version of Linux cgroup functionality.
  - `queue` - Configures WarehousePG to use resource queues.

- The new server configuration parameter [gp\_resgroup\_memory\_query\_fixed\_mem](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/config_params/guc-list/#gp_resgroup_memory_query_fixed_mem) allows you to override at a session level the fixed amount of memory reserved for all queries in a resource group.

- The new server configuration parameter [gp\_resource\_group\_move\_timeout](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/config_params/guc-list/#gp_resource_group_move_timeout) cancels the `pg_resgroup_move_query()` function, which moves a running query from one resouce group to another, if it waits longer than the specified number of miliseconds.

- The new server configuration parameter [gp\_resource\_group\_bypass\_direct\_dispatch](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/config_params/guc-list/#gp_resource_group_bypass_direct_dispatch) bypasses the resource group's limits for a direct dispatch query so it can run immediately. A direct dispatch query is a special type of query that only requires a single segment to participate in the execution.

- The server configuration parameter `gp_resource_group_cpu_ceiling_enforcement` has been removed.

- The server configuration parameter `gp_resource_group_enable_recalculate_query_mem` has been removed.

- The server configuration parameter `gp_resource_group_memory_limit` has been removed.

<a id="views"></a>

### Changes to System Views

The following system views have changes:

- The fields `cpu_rate_limit`, `memory_shared_quota`, `memory_spill_ratio`, and `memory_auditor` have been replaced by `cpu_max_percent`, `cpu_weight`, `cpuset`, `min_cost`, and `io_limit` in the `gp_resgroups_config` system view.
- The field `rsgname` has been renamed to `groupname` in the `gp_resgroup_status` system view.
- The fields `cpu_usage` and `memory_usage` have been removed from the `gp_resgroup_status` system view to the `gp_resgroup_status_per_host` system view.
- The fields `hostname`, `cpu`, `memory_used`, `memory_available`, `memory_quota_used`, `memory_quota_available`, `memory_shared_used`, and `memory_shared_available` have been removed from the system view `gp_resgroup_status_per_host`. The fields `segment_id`, `cpu_usage` and `memory_usage` have been added to the view.
- The fields `rsgname`, `hostname`, `cpu`, `memory_used`, `memory_available`, `memory_quota_used`, `memory_quota_available`, `memory_shared_used`, and `memory_shared_available` have been removed from the system view `gp_resgroup_status_per_segment`. The fields `groupname`, and `vmem_usage` have been added to the view.
- The `gp_resgroup_iostats_per_host` system view has been added.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
