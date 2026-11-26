---
title: Single data group, global read scaling
description: A core write group with multiple subscriber-only groups providing read scaling across regions without affecting write cluster operations.
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/read-scaling/
lastModified: 2026-08-21T09:22:11+02:00
---

# Single data group, global read scaling

The global read scaling pattern adds multiple subscriber-only groups to a central write group of three or more nodes. Connection Manager handles write leader routing within the write group automatically, while each subscriber-only group can have its own load balancer and scaling policy.

Subscriber-only nodes receive all changes but can't write or participate in consensus. Groups can be added and removed dynamically without affecting the write group, and the write group itself can be distributed across multiple regions or availability zones for higher availability.

<img src="https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/pgd/6.4/planning/images/single-data-group-global-read.png" style="width: 700px; height: auto;" alt="Single data group global read scaling topology" />

## Diagram legend

Symbols represent node types, group containers, and connection types.

<img src="https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/pgd/6.4/planning/images/legend.png" style="width: 400px; height: auto;" alt="Diagram legend showing node types, group containers, and connection types" />

## When to use this pattern

This pattern suits read-heavy workloads requiring workload isolation, with separate groups for analytics and reporting, API read traffic, configuration distribution, and regional read replicas. Each group scales independently based on its workload.

The advantages of this pattern include the following:

- Scales reads massively by adding nodes without affecting the write cluster.
- Offloads reporting and analytics from the production write path.
- Subscriber-only nodes can be placed in additional regions for local read latency.
- Supports dynamic scaling by adding and removing read nodes without cluster reconfiguration.
- Isolates heavy read workloads from transaction processing.

There are some limitations to keep in mind:

- Subscriber-only nodes have replication lag and aren't suitable for read-after-write consistency requirements.
- Applications must route connections explicitly, distinguishing between subscriber-only nodes and data nodes.
- Subscriber node lag or downtime increases WAL retention on data nodes, which affects disk usage.

## Recommended commit scopes for this pattern

- **Majority protect**: synchronous replication to the majority of the data nodes in the write group. The most commonly recommended scope for production use.
- **Adaptive protect**: synchronous replication to the majority of nodes in the write group when available, degrading automatically to asynchronous replication after a configurable timeout. Recommended when using two data nodes and one witness.
- **Local protect**: asynchronous replication with durability only for the local node. Not recommended for production use.

Commit scopes make different trade-offs across performance, durability, consistency, and scalability.

<img src="https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/pgd/6.4/planning/images/single-data-group-global-behavior.png" style="width: 500px; height: auto;" alt="Single data group global read scaling behavior diagram" />

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
