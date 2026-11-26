---
title: Node group design
description: Pin Postgres clusters to specific node groups for hardware, sizing, or isolation requirements, or align node groups with availability zones for failover without a restore.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/node_group_design/
lastModified: 2026-11-04T23:45:50+05:30
---

# Node group design

By default, Hybrid Manager (HM) schedules Postgres clusters onto any data-plane node. Creating dedicated node groups, and pinning clusters to them with `nodeSelectors` and `tolerations`, lets you control that placement instead.

This is optional. Most installations don't need it, and you don't have to set it up before your first install — follow this when one of the scenarios below applies to you.

| Scenario                                    | Why you'd pin placement                                                                                                                                             | Docs                                                                                                                                                        |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hardware, sizing, or isolation requirements | Some clusters need a specific instance type, more CPU or memory, or dedicated nodes away from other workloads.                                                      | [Node group design](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/node_group_design/designing_node_groups/) |
| Zonal high availability                     | A high availability or distributed cluster needs to survive the loss of an availability zone by reattaching its existing storage, instead of restoring from backup. | [Node group design](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/node_group_design/designing_node_groups/) |

Start with [Node group design](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/node_group_design/designing_node_groups/) to pick the pattern that fits your scenario, then follow [Implementing your node design](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/node_group_design/implementing_node_groups/) to create the node groups and pin your clusters to them.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
