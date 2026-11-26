---
title: Standard PGD architecture
product: EDB Postgres Distributed (PGD)
version: 6.0.2
url: https://www.enterprisedb.com/docs/pgd/6/essential-how-to/architectures/standard/
lastModified: 2025-08-21T21:20:29Z
---

# Standard PGD architecture

Using core PGD capabilites, the standard architecture configures the three nodes in a multi-master replication configuration. That is, each node operates as a master node and logically replicates its data to the other nodes. While PGD is capable of handling conflicts between data changes on nodes, the Essential standard architecture uses PGD's integrated connection manager to ensure that all writes are directed to a single node, the write leader. Conflicts are avoided by allowing that singular leader to handle all updates to the data. Changes are then replicated to the other nodes in the cluster.

If the write leader fails, the remaining nodes in the cluster will elect a new write leader, and the connection managers in those nodes then failover to send writes to the new leader. When the failed node comes back online, it rejoins the cluster and begins replicating data from the new write leader.

The Essential standard architecture was created to be easy to deploy and manage, based on user experience. Unlike other high availability solutions, because Essential is built on PGD, moving to a more complex architecture is simple and straightforward. Move to Expanded PGD, and then add new data groups to the cluster as needed.

See [manually deploying a standard architecture](https://www.enterprisedb.com/docs/pgd/6/essential-how-to/architectures/standard/manually-deploying-standard/) for more information on how to configure the standard architecture.

- [Manual standard deployments](https://www.enterprisedb.com/docs/pgd/6/essential-how-to/architectures/standard/manually-deploying-standard/): How to manually deploy the PGD Essential standard architecture.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
