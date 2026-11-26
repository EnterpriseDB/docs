---
title: Deployment patterns
description: The recommended PGD deployment patterns, covering topology, use cases, trade-offs, and commit scope guidance for each.
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/
lastModified: 2026-10-21T00:19:17Z
---

# Deployment patterns

PGD offers several deployment patterns, from a single high-availability (HA) group to globally distributed multi-region clusters. The pattern you choose determines where your data lives, which locations accept writes, and how the cluster recovers from failures. The key dimensions are the number of active write locations, the level of disaster recovery you need, and whether regulatory requirements constrain where data can be stored. Each choice carries implications for write latency, conflict handling, and operational complexity.

## Choosing a pattern

Most PGD deployments start from one of four goals, each mapping to one or more patterns.

### Maintaining continuous availability

PGD keeps the database available through node failures, data center (DC) failures, and rolling maintenance operations including major Postgres version upgrades. Within a single location, the [single data group](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/single-data-group/) pattern provides HA across two or more nodes. For datacenter-level protection without the cost of a full second active site, the [primary active group, DR group](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/primary-dr/) pattern adds a reduced-capacity DR site that takes over if the primary DC fails.

### Writing across multiple regions

Applications serving users in multiple geographies benefit from placing write capacity close to those users. Both the [two data groups](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/two-data-groups/) and [three or more data groups](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/three-data-groups/) patterns run active-active: all locations accept writes and replicate to each other. The two data groups pattern suits a primary and secondary location. A witness-only third location achieves Raft majority without a full third data site, and three full data groups take Raft majority further by surviving an entire region failure without interrupting the remaining regions.

Active-active replication across regions makes write conflicts possible. PGD resolves conflicts automatically using configurable conflict resolution policies, but schemas and application writes need to be designed with conflict-awareness in mind.

### Enforcing data locality

Regulations such as GDPR and CCPA require that personal and sensitive data stays within specific jurisdictions. The [multiple locations, data residency](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/data-residency/) pattern implements selective replication by data classification. Local-only data, including personally identifiable information (PII), financial records, and healthcare data, replicates only within its region. Global reference data, such as product catalogs and configuration, replicates everywhere. Each region runs independently with its own HA group.

### Scaling out reads

Read-heavy workloads can overwhelm a write cluster if not isolated. The [single data group, global read scaling](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/read-scaling/) pattern offloads analytics, reporting, and API read traffic to subscriber-only nodes. Subscriber-only nodes receive all changes from the write group but don't participate in writes or consensus, so adding them doesn't affect write performance or commit scope quorum. They can be placed in additional regions to reduce read latency for local users.

| Pattern                                                                                                                              | Locations | Active write locations | Disaster recovery   |
| ------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---------------------- | ------------------- |
| [Single data group](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/single-data-group/)                       | 1         | 1                      | Node failure only   |
| [Two data groups, active-active](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/two-data-groups/)            | 2         | 2                      | DC failure          |
| [Three data groups, active-active-active](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/three-data-groups/) | 3+        | 3+                     | Region failure      |
| [Single data group, global read scaling](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/read-scaling/)       | 1+        | 1                      | Node failure        |
| [Primary active group, DR group](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/primary-dr/)                 | 2         | 1                      | DC failure (manual) |
| [Multiple locations, data residency](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/data-residency/)         | 3+        | 3+                     | Region failure      |

## Architectural elements

Each node in a PGD cluster is a Postgres instance running the PGD extension. Nodes are organized into groups, and each group elects a write leader to coordinate writes. Connection Manager runs on each node and routes client connections to the current write leader, enabling automatic failover without changes to the application connection string.

### Node types

A PGD cluster uses three node types, each serving a different role:

- **Data nodes:** Store and manage data, handle reads and writes, and participate in replication and consensus.
- **Subscriber-only nodes:** Receive all changes from the write group but don't accept writes or participate in consensus. They're suited to read-heavy workloads like analytics and reporting.
- **Witness nodes:** Participate in Raft consensus but don't store user data. A witness in a third location resolves split-brain scenarios when two data locations lose contact with each other.

### Node roles

Data nodes take on transient roles that transfer automatically between nodes as conditions change:

- **Write leader:** The current target for all write operations when applications connect through Connection Manager. If the write leader fails, another node is elected in seconds.
- **Raft leader:** Manages consensus decisions across the group, including write leader election and schema change coordination.

### Commit scopes

Commit scopes control the durability guarantees PGD provides for each transaction. The default is asynchronous replication with eventual consistency. Stronger options, from majority protect through Quorum Commit, add synchronous coordination at the cost of added write latency. Quorum Commit provides the strictest consistency guarantees, coordinating the commit decision across all participating nodes before any node commits locally. Each pattern page notes the commit scopes recommended for that topology. For the full reference, see [Commit scopes](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/commit-scopes/).

- [Single data group](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/single-data-group/): The foundational PGD deployment pattern, providing high availability within a single location using three data nodes and a Raft consensus group.
- [Two data groups, active-active](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/two-data-groups/): Two geographically separated locations, each with its own data group, both serving reads and writes simultaneously.
- [Three data groups, active-active-active](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/three-data-groups/): A true globally distributed database spanning three or more geographic regions, each serving local reads and writes.
- [Single data group, global read scaling](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/read-scaling/): A core write group with multiple subscriber-only groups providing read scaling across regions without affecting write cluster operations.
- [Primary active group, DR group](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/primary-dr/): A cost-optimised disaster recovery pattern with a full-capacity primary site and a reduced-capacity DR site for data protection.
- [Multiple locations, data residency](https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/data-residency/): A multi-region PGD deployment with strict data residency controls, where personal and sensitive data stays in its origin region and only global reference data replicates cross-border.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
