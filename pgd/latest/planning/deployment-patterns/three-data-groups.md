---
title: Three data groups, active-active-active
description: A true globally distributed database spanning three or more geographic regions, each serving local reads and writes.
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/planning/deployment-patterns/three-data-groups/
lastModified: 2026-08-21T09:16:04+02:00
---

# Three data groups, active-active-active

The three data groups pattern spans three or more geographic regions, each running its own independent Raft consensus group for local high availability (HA). With three or more data nodes per group, each group can use majority-based commit scopes within its own region, with Connection Manager handling write leader routing locally.

Applications connect to their local region for low-latency reads and writes. Inter-region replication is typically asynchronous to avoid cross-region latency penalties.

<img src="https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/pgd/6.5/planning/images/three-data-groups.png" style="width: 700px; height: auto;" alt="Three data groups topology" />

## Diagram legend

Symbols represent node types, group containers, and connection types.

<img src="https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/pgd/6.5/planning/images/legend.png" style="width: 400px; height: auto;" alt="Diagram legend showing node types, group containers, and connection types" />

## When to use this pattern

This pattern suits global SaaS applications, CDN-like data distribution, and multinational enterprises requiring geo-replication with data locality and eventual consistency across three or more regions.

The advantages of this pattern include the following:

- Enables true global presence with low-latency reads and writes in every region.
- Survives entire region failure while other regions continue operating.
- Natural Raft majority with three or more regions.
- Best end-user experience for globally distributed applications.

There are some limitations to keep in mind:

- Conflicts are inevitable with optimistic cross-region consistency handling.
- Higher operational complexity with more nodes, more locations, and more monitoring.
- Inter-region latency affects replication lag and conflict detection window.

## Adding global routing

Three or more data groups can also be used with global routing, where the whole cluster has a single write leader rather than one per group. A single global write leader eliminates write conflicts by routing all writes through one location, at the cost of increased write latency for regions not hosting the write leader. When the write leader changes location, latency characteristics shift for all regions.

<img src="https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/pgd/6.5/planning/images/three-data-groups-global-routing.png" style="width: 700px; height: auto;" alt="Three data groups with global routing topology" />

## Recommended commit scopes for this pattern

- **Majority protect**: synchronous replication to the majority of the nodes within the group. The most commonly recommended scope for production use.
- **Quorum Commit**: coordinates the commit decision across all participating nodes before any node commits locally, ensuring the transaction is durable in all regions before it commits. Recommended for workloads requiring strict distributed consistency, such as payments and core banking. Use `MAJORITY FOR EACH GROUP IN CLUSTER QUORUM COMMIT ABORT ON (timeout = 6s)`, which guarantees that any new write leader, regardless of region, has the latest committed data acknowledged by the prior leader.
- **Adaptive protect**: synchronous replication to the majority of nodes within the group when available, degrading automatically to asynchronous replication after a configurable timeout. Recommended when using two data nodes and one witness per group.
- **Local protect**: asynchronous replication with durability only for the local node. Not recommended for production use.

Commit scopes make different trade-offs across performance, durability, consistency, and scalability.

<img src="https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/pgd/6.5/planning/images/three-data-groups-behavior.png" style="width: 500px; height: auto;" alt="Three data groups behavior diagram" />

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
