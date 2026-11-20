---
title: Two data groups, active-active
description: Two geographically separated locations, each with its own data group, both serving reads and writes simultaneously.
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/two-data-groups/
lastModified: 2026-08-21T09:22:11+02:00
---

# Two data groups, active-active

The two data groups pattern spans two geographically separated data centers, each running its own independent Raft consensus group for local high availability (HA). With three or more data nodes per group, each group can use majority-based commit scopes within its own site.

Both data centers serve local reads and writes simultaneously, with replication between groups keeping both locations current.

![Two data groups topology](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/pgd/6.4/planning/images/two-data-groups.png)

## Diagram legend

Symbols represent node types, group containers, and connection types.

<img src="https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/pgd/6.4/planning/images/legend.png" style="width: 400px; height: auto;" alt="Diagram legend showing node types, group containers, and connection types" />

## When to use this pattern

This pattern suits financial services, healthcare, and any application requiring geo-replication with zero data loss across two active locations. Both data centers serve writes simultaneously with conflict resolution, providing true active-active operation across locations.

The advantages of this pattern include the following:

- Provides true disaster recovery, surviving complete data center (DC) failure.
- Runs active-active, with both DCs serving reads and writes for local latency.
- Geographic redundancy for compliance requirements.
- With local routing, each DC operates independently for most operations.

There are some limitations to keep in mind:

- Conflicts are inevitable with optimistic cross-region consistency handling.
- Write latency and zero data loss on DC failure are in tension. Stronger commit scopes increase latency.
- Without Raft majority (on DC loss), global allocation sequences (galloc) eventually run out of allocated ranges and block.
- Global routing isn't available. The loss of one DC breaks Raft majority for the whole cluster.

The Raft majority and galloc limitations can be addressed by adding a witness location, as described below.

## Adding a witness location

Adding a third location, possibly in cloud, containing a single witness node resolves the Raft majority and galloc limitations. The witness participates in Raft consensus but doesn't store user data. With an odd-number quorum (seven voters: six data nodes and one witness), the cluster maintains Raft majority even when one DC is lost, restoring global routing and preventing galloc sequences from exhausting their allocated ranges.

A witness location is also required when using just two data nodes per group without a per-group witness, since that configuration can't achieve local HA on its own.

![Two data groups with witness topology](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/pgd/6.4/planning/images/two-data-groups-witness.png)

## Recommended commit scopes for this pattern

- **Majority protect**: synchronous replication to the majority of the nodes within the group. The most commonly recommended scope for production use.
- **Quorum Commit**: coordinates the commit decision across all participating nodes before any node commits locally, ensuring the transaction is durable across both regions before it commits. Recommended for workloads requiring strict distributed consistency, such as payments and core banking. Use `MAJORITY FOR EACH GROUP IN CLUSTER QUORUM COMMIT ABORT ON (timeout = 6s)`, which guarantees that any new write leader has the latest committed data acknowledged by the prior leader.
- **CAMO**: when using two data nodes and one witness per group, CAMO adds exactly-once transaction guarantees over synchronous replication.
- **Local protect**: asynchronous replication with durability only for the local node. Not recommended for production use.

Commit scopes make different trade-offs across performance, durability, consistency, and scalability.

<img src="https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/pgd/6.4/planning/images/two-data-group-behavior.png" style="width: 500px; height: auto;" alt="Two data groups behavior diagram" />

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
