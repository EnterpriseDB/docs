---
title: Multi-master replication operation
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/
lastModified: 2024-10-23T09:07:33+02:00
---

# Multi-master replication operation

<div id="mmr_operation" class="registered_link"></div>

You can configure and run Replication Server for multi-master replication systems.

The Replication Server console interface provides steps and examples for multi-master replication operations. You can perform the same steps from the operating system command line using the Replication Server command line interface (CLI). See [Replication Server command line interface](https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/#xdb_cli).

- [Prerequisite steps](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/01_pre_steps/): Before beginning the process of building a multi-master replication system, you must take certain steps to prepare the host environments and the database servers used as primary nodes.
- [Creating a publication](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/02_creating_publication_mmr/): Creating a publication requires:
- [Creating more primary nodes](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/03_creating_primary_nodes/): Once you have created the primary definition node, you add more databases to the multi-master replication system by defining more primary nodes.
- [Control schema objects created in primary nodes](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/04_control_schema_created_in_primary_nodes/): Creating primary nodes creates control schema objects in each primary node database.
- [On-demand replication](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/05_on_demand_replication_mmr/): After you create a primary definition node, its publication, and additional primary nodes, you have two choices for starting the replication process:
- [Conflict resolution](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/): In certain situations, synchronization replication can result in data conflicts arising from the row changes that took place on different primary nodes.
- [Enabling and disabling table filters on a primary node](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/07_enable_disable_table_filters/): You must first define table filters in a set of available table filters in the publication before you can enable them on a primary node. See Adding a publication for information on defining table filters in a multi-master replication system. See Table settings and restrictions for table filters for table setup requirements for a log-based replication system as well as general restrictions on the use of table filters.
- [Switching the primary definition node](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/08_switching_pdn/): After you create the multi-master replication system, you can switch the role of the primary definition node with another primary node.
- [Ensuring high availability](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/09_ensuring_ha/): In a multi-master replication system, the primary nodes participating in replication can reside on separate physical hosts. If any primary node goes offline, the primary nodes on the other hosts continue to synchronize transactions among themselves, which ensures consistency of the publication tables on the remaining active primary nodes. When an offline primary node is brought back online, pending transactions involving that primary node are synchronized with the other primary nodes of the replication system. No transaction data is lost between the primary nodes.
- [Optimizing performance](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/10_optimizing_performance_mmr/): Publication server configuration options are available to optimize the performance of multi-master replication systems.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
