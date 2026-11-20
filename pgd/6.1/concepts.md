---
title: PGD concepts explained
description: The concepts behind EDB Postgres Distributed (PGD) 6.0 and how they work in practice.
product: EDB Postgres Distributed (PGD)
version: 6.1.0
url: https://www.enterprisedb.com/docs/pgd/6.1/concepts/
lastModified: 2025-12-05T11:11:13Z
---

# PGD concepts explained

## PGD concepts

- [Replication](https://www.enterprisedb.com/docs/pgd/6.1/concepts/replication/)
- [Nodes and groups](https://www.enterprisedb.com/docs/pgd/6.1/concepts/nodes-and-groups/)
- [Connection management](https://www.enterprisedb.com/docs/pgd/6.1/concepts/connection-management/)
- [Locking](https://www.enterprisedb.com/docs/pgd/6.1/concepts/locking/)
- [Durability](https://www.enterprisedb.com/docs/pgd/6.1/concepts/durability/)
- [Commit scopes](https://www.enterprisedb.com/docs/pgd/6.1/concepts/commit-scopes/)
- [Lag Control](https://www.enterprisedb.com/docs/pgd/6.1/concepts/lag-control/)

## PGD Expanded concepts

- [Commit scopes for PGD Expanded](https://www.enterprisedb.com/docs/pgd/6.1/concepts/expanded-commit-scopes/)
- [Geo-distributed clusters](https://www.enterprisedb.com/docs/pgd/6.1/concepts/geo-distributed-clusters/)
- [Advanced durability](https://www.enterprisedb.com/docs/pgd/6.1/concepts/advanced-durability/)
- [Conflict management](https://www.enterprisedb.com/docs/pgd/6.1/concepts/conflict-management/)

* [Replication](https://www.enterprisedb.com/docs/pgd/6.1/concepts/replication/): At the heart of EDB Postgres Distributed (PGD) is the replication system, BDR. BDR stands for Bi-Directional Replication, and it is a multi-master replication system that allows you to create a distributed Postgres cluster with multiple write nodes. This means that you can write to any node in the cluster, and the changes will be replicated to all other nodes in the cluster.
* [Nodes and Groups](https://www.enterprisedb.com/docs/pgd/6.1/concepts/nodes-and-groups/): Understanding nodes and groups in EDB Postgres Distributed (PGD)
* [Connection Management](https://www.enterprisedb.com/docs/pgd/6.1/concepts/connection-management/): To ensure that clients can connect to the right nodes in the distributed cluster, EDB Postgres Distributed (PGD) provides a connection management system that allows clients to connect to the appropriate nodes based on their needs.
* [Locking](https://www.enterprisedb.com/docs/pgd/6.1/concepts/locking/): To prevent conflicts between various operations in the cluster, PGD uses a distributed locking mechanism to ensure the only one node can perform a specific operation at a time.
* [Durability](https://www.enterprisedb.com/docs/pgd/6.1/concepts/durability/): How does EDB Postgres Distributed (PGD) ensure durability of transactions?
* [Commit Scopes](https://www.enterprisedb.com/docs/pgd/6.1/concepts/commit-scopes/)
* [Lag Control](https://www.enterprisedb.com/docs/pgd/6.1/concepts/lag-control/): When a node is lagging behind the rest of the cluster, it can cause issues with data consistency and availability. Lag control is a mechanism to manage this situation by ensuring that the lagging node does not disrupt the overall performance of the cluster.
* [Expanded Commit Scopes](https://www.enterprisedb.com/docs/pgd/6.1/concepts/expanded-commit-scopes/): PGD Expanded allows you to define commit scopes that are more granular or more customised than the standard pre-defined commit scopes available in PGD. This feature is particularly useful for applications that require specific commit behaviors or need to manage complex transaction scenarios.
* [Geo-Distributed Clusters](https://www.enterprisedb.com/docs/pgd/6.1/concepts/geo-distributed-clusters/): Geo-distributed clusters are a powerful feature of PGD which allow you to create a distributed database system that spans multiple geographic locations. This setup is particularly useful for applications that require high availability, low latency, and disaster recovery across different regions. As this feature needs multiple write nodes and multiple distributed groups, it is only available in PGD Expanded.
* [Advanced Durability](https://www.enterprisedb.com/docs/pgd/6.1/concepts/advanced-durability/)
* [Conflict Management](https://www.enterprisedb.com/docs/pgd/6.1/concepts/conflict-management/): With PGD Expanded, the presence of multiple writers leads to the possibility, or even the likelihood, of conflicts. Changes to the same rows from different nodes can arrive on a node at any time.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
