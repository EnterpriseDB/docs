---
title: Node management
description: Managing nodes and groups in a PGD cluster
product: EDB Postgres Distributed (PGD)
version: 5.9.5
url: https://www.enterprisedb.com/docs/pgd/5.9/node_management/
lastModified: 2026-11-20T11:33:47Z
---

# Node management

All data nodes in a PGD cluster are members of one or more groups. By default,
all data nodes are members of the top-level group, which spans all data nodes
in the PGD cluster. Nodes can also belong to subgroups that can be configured to
reflect logical or geographical organization of the PGD cluster.

You can manage nodes and groups using the various options available
with nodes and subgroups.

- [Creating nodes](https://www.enterprisedb.com/docs/pgd/5.9/node_management/creating_nodes/) covers the steps needed to create a new node
  in a PGD cluster.

- [Groups and subgroups](https://www.enterprisedb.com/docs/pgd/5.9/node_management/groups_and_subgroups/) goes into more detail on how
  groups and subgroups work in PGD.

- [Creating and joining groups](https://www.enterprisedb.com/docs/pgd/5.9/node_management/creating_and_joining/) looks at how new PGD
  groups can be created and how to join PGD nodes to them.

- [Viewing topology](https://www.enterprisedb.com/docs/pgd/5.9/node_management/viewing_topology/) details commands and SQL queries that can
  show the structure of a PGD cluster's nodes and groups.

- [Removing nodes and groups](https://www.enterprisedb.com/docs/pgd/5.9/node_management/removing_nodes_and_groups/) shows the process to
  follow to safely remove a node from a group or a group from a cluster.

- [Heterogeneous clusters](https://www.enterprisedb.com/docs/pgd/5.9/node_management/heterogeneous_clusters/) looks at how your PGD cluster
  can interoperate with PGD nodes from earlier editions of PGD.

- [Connection DSNs](https://www.enterprisedb.com/docs/pgd/5.9/node_management/connections_dsns_and_ssl/) introduces the DSNs or connection
  strings needed to connect directly to a node in a PGD cluster. It also covers
  how to use SSL/TLS certificates to provide authentication and encryption
  between servers and between clients.

- [Replication slots](https://www.enterprisedb.com/docs/pgd/5.9/node_management/replication_slots/) examines how the Postgres replication
  slots are consumed when PGD is operating.

- [Node recovery](https://www.enterprisedb.com/docs/pgd/5.9/node_management/node_recovery/) details the steps needed to bring a node back
  into service after a failure or scheduled downtime and the impact it has on
  the cluster as it returns.

- [Maintenance commands through proxies](https://www.enterprisedb.com/docs/pgd/5.9/node_management/maintainance_with_proxies/) shows how to send maintenance commands to
  nodes that you can't directly access, such as those behind a proxy.

* [Creating PGD nodes](https://www.enterprisedb.com/docs/pgd/5.9/node_management/creating_nodes/): Depending on your selected deployment method, you may or may not have to create PGD nodes manually. For example, if you are using TPA or the EDB Postgres Distributed for Kubernetes, the nodes are created automatically. But if you are manually deploying PGD or creating your own deployment method, you need to know how to create and configure a PGD node.
* [Groups and subgroups](https://www.enterprisedb.com/docs/pgd/5.9/node_management/groups_and_subgroups/): Groups
* [Creating and joining PGD groups](https://www.enterprisedb.com/docs/pgd/5.9/node_management/creating_and_joining/): Creating and joining PGD groups
* [Viewing PGD topology](https://www.enterprisedb.com/docs/pgd/5.9/node_management/viewing_topology/): Listing PGD groups
* [Removing nodes and groups](https://www.enterprisedb.com/docs/pgd/5.9/node_management/removing_nodes_and_groups/): Removing a node from a PGD group
* [Joining a heterogeneous cluster](https://www.enterprisedb.com/docs/pgd/5.9/node_management/heterogeneous_clusters/): A PGD 4.0 node can join an EDB Postgres Distributed cluster running 3.7.x at a specific
* [Connection DSNs and SSL (TLS)](https://www.enterprisedb.com/docs/pgd/5.9/node_management/connections_dsns_and_ssl/): Because nodes connect
* [Replication slots created by PGD](https://www.enterprisedb.com/docs/pgd/5.9/node_management/replication_slots/): On a PGD master node, the following replication slots are
* [Node restart and recovery](https://www.enterprisedb.com/docs/pgd/5.9/node_management/node_recovery/): PGD is designed to recover from node restart or node disconnection.
* [Maintenance commands through proxies](https://www.enterprisedb.com/docs/pgd/5.9/node_management/maintainance_with_proxies/): Maintenance and performance

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
