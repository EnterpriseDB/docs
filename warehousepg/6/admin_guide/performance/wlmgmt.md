---
title: Managing Resources
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/performance/wlmgmt/
lastModified: 2026-09-04T15:21:47Z
---

# Managing Resources

WarehousePG provides features to help you prioritize and allocate resources to queries according to business requirements and to prevent queries from starting when resources are unavailable.

You can use resource management features to limit the number of concurrent queries, the amount of memory used to run a query, and the relative amount of CPU devoted to processing a query. WarehousePG provides two schemes to manage resources - Resource Queues and Resource Groups.

Either the resource queue or the resource group management scheme can be active in WarehousePG; both schemes cannot be active at the same time.

Resource queues are enabled by default when you install your WarehousePG cluster. While you can create and assign resource groups when resource queues are active, you must explicitly enable resource groups to start using that management scheme.

The following table summarizes some of the differences between Resource Queues and Resource Groups.

| Metric              | Resource Queues                                                                   | Resource Groups                                                                                                                                   |
| ------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Concurrency         | Managed at the query level                                                        | Managed at the transaction level                                                                                                                  |
| CPU                 | Specify query priority                                                            | Specify percentage of CPU resources; uses Linux Control Groups                                                                                    |
| Memory              | Managed at the queue and operator level; users can over-subscribe                 | Managed at the transaction level, with enhanced allocation and tracking; users cannot over-subscribe                                              |
| Memory Isolation    | None                                                                              | Memory is isolated between resource groups and between transactions within the same resource group                                                |
| Users               | Limits are applied only to non-admin users                                        | Limits are applied to `SUPERUSER` and non-admin users alike                                                                                       |
| Queueing            | Queue only when no slot available                                                 | Queue when no slot is available or not enough available memory                                                                                    |
| Query Failure       | Query may fail immediately if not enough memory                                   | Query may fail after reaching transaction fixed memory limit when no shared resource group memory exists and the transaction requests more memory |
| Limit Bypass        | Limits are not enforced for `SUPERUSER` roles and certain operators and functions | Limits are not enforced on `SET`, `RESET`, and `SHOW` commands                                                                                    |
| External Components | None                                                                              | Manage external component CPU and memory resources                                                                                                |

- **[Using Resource Groups](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/performance/wlmgmt/workload_mgmt_resgroups/)**

- **[Using Resource Queues](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/performance/wlmgmt/workload_mgmt/)**

**Parent topic:** [Managing Performance](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/performance/)

- [Using Resource Groups](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/performance/wlmgmt/workload_mgmt_resgroups/): You use resource groups to set and enforce CPU, memory, and concurrent transaction limits in WarehousePG. After you define a resource group, you can then assign the group to one or more WarehousePG roles, or to an external component, in order to control the resources used by those roles or components.
- [Using Resource Queues](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/performance/wlmgmt/workload_mgmt/): Use WarehousePG resource queues to prioritize and allocate resources to queries according to business requirements and to prevent queries from starting when resources are unavailable.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
