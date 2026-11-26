---
title: Managing Resources
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt/
lastModified: 2026-09-25T15:14:11+01:00
---

# Managing Resources

WarehousePG provides features to help you prioritize and allocate resources to queries according to business requirements and to prevent queries from starting when resources are unavailable.

You can use resource management features to limit the number of concurrent queries, the amount of memory used to run a query, and the relative amount of CPU devoted to processing a query. WarehousePG provides two schemes to manage resources: [Resource Queues](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt/workload_mgmt/) and [Resource Groups](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt/workload_mgmt_resgroups/).

Either the resource queue or the resource group management scheme can be active in WarehousePG; both schemes cannot be active at the same time. Set the server configuration parameter [gp\_resource\_manager](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/config_params/guc-list/#gp_resource_manager) to enable the preferred scheme in the WarehousePG cluster.

The following table summarizes some of the differences between resource queues and resource groups.

| Metric              | Resource Queues                                                                                                         | Resource Groups                                                                                                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Concurrency         | Defines the number of query slots available at a time                                                                   | Defines the number of transaction slots available at a time                                                                                                                             |
| CPU                 | Specify query priority                                                                                                  | Specify percentage of CPU resources or the specific number of CPU cores; uses Linux Control Groups                                                                                      |
| Memory              | Managed at the queue and operator level; users can over-subscribe                                                       | `MEMORY_QUOTA` and `CONCURRENCY` shape a query's planned memory allocation only; actual memory is enforced at the segment level by `gp_vmem_protect_limit`, so users can over-subscribe |
| Users               | Limits are applied only to non-admin users                                                                              | Limits are applied to `SUPERUSER`, non-admin users, and system processes of non-user classes                                                                                            |
| Disk I/O            | None                                                                                                                    | Limit the maximum read/write disk I/O throughput, and maximum read/write I/O operations per second                                                                                      |
| Queueing            | Queue when no slot available or not enough available memory                                                             | Queue only when no slot is available                                                                                                                                                    |
| Query Failure       | Query may fail immediately if the allocated memory for the query surpasses the available system memory and spill limits | Query may fail if the allocated memory for the query surpasses the available system memory and spill limits                                                                             |
| Limit Bypass        | Limits are not enforced for `SUPERUSER` roles and certain operators and functions                                       | Limits are not enforced on `SET`, `RESET`, and `SHOW` commands. Additionally, certain queries may be configured to bypass the concurrency limit                                         |
| External Components | None                                                                                                                    | Manage external component CPU resources                                                                                                                                                 |

- **[About Changes to Resource Groups in WarehousePG 7](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt/about-resgroups-changes/)**\
  Compares resource group-based resource management between WarehousePG 6 and WarehousePG 7.
- **[Using Resource Groups](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt/workload_mgmt_resgroups/)**\
  Configuring and using resource groups to manage CPU, memory, concurrency, and disk I/O.
- **[Using Resource Queues](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt/workload_mgmt/)**\
  Configuring and using resource queues to prioritize and allocate resources to queries.

**Parent topic:** [Managing Performance](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/)

- [About Changes to Resource Groups in WarehousePG 7](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt/about-resgroups-changes/): WarehousePG 7 introduces substantial changes to resource group-based resource management. This topic compares the differences between resource groups with WarehousePG 6 and WarehousePG 7. Visit Using Resource Groups for more information about how resource groups work in WarehousePG 7.
- [Using Resource Groups](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt/workload_mgmt_resgroups/): You use resource groups to manage and protect the resource allocation of CPU, memory, concurrent transaction limits, and disk I/O in WarehousePG. Once you define a resource group, you assign the group to one or more WarehousePG roles, or to an external component, in order to control the resources used by them.
- [Using Resource Queues](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt/workload_mgmt/): Use WarehousePG resource queues to prioritize and allocate resources to queries according to business requirements and to prevent queries from starting when resources are unavailable.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
