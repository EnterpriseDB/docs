---
title: Single data group
description: The foundational PGD deployment pattern, providing high availability within a single location using three data nodes and a Raft consensus group.
product: EDB Postgres Distributed (PGD)
version: 6.3.1
url: https://www.enterprisedb.com/docs/pgd/6.3/planning/deployment-patterns/single-data-group/
lastModified: 2026-05-27T12:38:38+01:00
---

# Single data group

The single data group is the foundational PGD deployment pattern, providing high availability within a single location. Three data nodes form a Raft consensus group, with Connection Manager handling write leader routing automatically.

Nodes can be spread across multiple availability zones for added resiliency, though doing so increases write latency when using majority or all protect commit scopes.

<img src="https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/pgd/6.3/planning/images/single-data-group.png" style="width: 700px; height: auto;" alt="Single data group topology" />

## Diagram legend

Symbols represent node types, group containers, and connection types.

<img src="https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/pgd/6.3/planning/images/legend.png" style="width: 400px; height: auto;" alt="Diagram legend showing node types, group containers, and connection types" />

## When to use this pattern

The single data group is the standard high availability (HA) deployment within a single data center. It tolerates single node failure and provides automatic failover in seconds, making it well suited to applications that need HA within a single region and can't afford extended downtime during major version upgrades or blocking maintenance tasks.

The advantages of this pattern include the following:

- Simplest topology to deploy, operate, and troubleshoot.
- Raft majority always available, surviving one node failure.
- Lowest write latency when deployed in a single data center (DC).
- Survives single AZ failure when deployed across multiple availability zones.
- Automatic failover in seconds with no operator intervention.
- Low cost at three nodes minimum.

There are some limitations to keep in mind:

- No disaster recovery. A DC-level failure takes down the entire cluster.
- When deployed in a single DC, all nodes share the same failure domain.
- Not suitable for regulatory requirements mandating geographic separation.
- When used with two data nodes and a witness, durability options are limited.

## Recommended commit scopes for this pattern

- **Majority protect**: synchronous replication to the majority of the nodes. The most commonly recommended scope for production use.
- **Adaptive protect**: synchronous replication to the majority of nodes when available, degrading automatically to asynchronous replication after a configurable timeout. Recommended when using two data nodes and one witness.
- **All protect**: synchronous replication to all nodes in the group. Provides the highest durability guarantee, but increases write latency and reduces availability tolerance when any node fails.
- **Local protect**: asynchronous replication with durability only for the local node. Not recommended for production use.

Commit scopes make different trade-offs across performance, durability, consistency, and scalability.

<img src="https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/pgd/6.3/planning/images/single-data-group-behavior.png" style="width: 500px; height: auto;" alt="Single data group behavior diagram" />

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
