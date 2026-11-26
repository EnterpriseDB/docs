---
title: Node management
description: Managing nodes and groups in a PGD cluster
product: EDB Postgres Distributed (PGD)
version: 6.1.0
url: https://www.enterprisedb.com/docs/pgd/6.1/node_management/
lastModified: 2026-01-14T15:24:21Z
---

# Node management

All data nodes in a PGD cluster are members of one or more groups. By default,
all data nodes are members of the top-level group, which spans all data nodes
in the PGD cluster. Nodes can also belong to subgroups that can be configured to
reflect logical or geographical organization of the PGD cluster.

You can manage nodes and groups using the various options available
with nodes and subgroups.

- [Creating nodes](https://www.enterprisedb.com/docs/pgd/6.1/node_management/creating_nodes/) covers the steps needed to create a new node
  in a PGD cluster.

- [Groups and subgroups](https://www.enterprisedb.com/docs/pgd/6.1/node_management/groups_and_subgroups/) goes into more detail on how
  groups and subgroups work in PGD.

- [Creating and joining groups](https://www.enterprisedb.com/docs/pgd/6.1/node_management/creating_and_joining/) looks at how new PGD
  groups can be created and how to join PGD nodes to them.

- [Viewing topology](https://www.enterprisedb.com/docs/pgd/6.1/node_management/viewing_topology/) details commands and SQL queries that can
  show the structure of a PGD cluster's nodes and groups.

- [Removing nodes and groups](https://www.enterprisedb.com/docs/pgd/6.1/node_management/removing_nodes_and_groups/) shows the process to
  follow to safely remove a node from a group or a group from a cluster.

- [Connection DSNs](https://www.enterprisedb.com/docs/pgd/6.1/node_management/connections_dsns_and_ssl/) introduces the DSNs or connection
  strings needed to connect directly to a node in a PGD cluster. It also covers
  how to use SSL/TLS certificates to provide authentication and encryption
  between servers and between clients.

- [Node recovery](https://www.enterprisedb.com/docs/pgd/6.1/node_management/node_recovery/) details the steps needed to bring a node back
  into service after a failure or scheduled downtime and the impact it has on
  the cluster as it returns.

- [Automatic Sync](https://www.enterprisedb.com/docs/pgd/6.1/node_management/automatic_sync/) looks at how the automatic sync feature
  works in PGD and how it can be used to keep nodes in sync with each other.

- [Node UUIDs](https://www.enterprisedb.com/docs/pgd/6.1/node_management/node_uuids/) explains how the UUIDs of nodes are used in PGD and
  how they are generated.

- [Replication slots](https://www.enterprisedb.com/docs/pgd/6.1/node_management/replication_slots/) examines how the Postgres replication
  slots are consumed when PGD is operating.

* [Creating PGD nodes](https://www.enterprisedb.com/docs/pgd/6.1/node_management/creating_nodes/): It's just Postgres
* [Groups and subgroups](https://www.enterprisedb.com/docs/pgd/6.1/node_management/groups_and_subgroups/): Groups
* [Creating and joining PGD groups](https://www.enterprisedb.com/docs/pgd/6.1/node_management/creating_and_joining/): Creating and joining PGD groups
* [Viewing PGD topology](https://www.enterprisedb.com/docs/pgd/6.1/node_management/viewing_topology/): Listing PGD groups
* [Removing nodes and groups](https://www.enterprisedb.com/docs/pgd/6.1/node_management/removing_nodes_and_groups/): Removing a node from a PGD group
* [Connection DSNs and SSL (TLS)](https://www.enterprisedb.com/docs/pgd/6.1/node_management/connections_dsns_and_ssl/): Because nodes connect
* [Node restart and recovery](https://www.enterprisedb.com/docs/pgd/6.1/node_management/node_recovery/): PGD is designed to recover from node restart or node disconnection.
* [Automatic synchronization](https://www.enterprisedb.com/docs/pgd/6.1/node_management/automatic_sync/): Automatic synchronization in PGD.
* [Node UUIDs](https://www.enterprisedb.com/docs/pgd/6.1/node_management/node_uuids/): Node UUIDs in PGD
* [Replication slots created by PGD](https://www.enterprisedb.com/docs/pgd/6.1/node_management/replication_slots/): In previous versions of PGD, replication slots had human-readable names. PGD 6 has switched over to using UUIDs for nodes and groups

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
