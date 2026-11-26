---
title: Managing geo-replication
description: How to plan, configure, and operate geo-distributed PGD clusters.
product: EDB Postgres Distributed (PGD)
version: 6.3.1
url: https://www.enterprisedb.com/docs/pgd/6.3/geo-replication-dba/
lastModified: 2026-05-27T12:38:38+01:00
---

# Managing geo-replication

PGD supports clusters that span multiple geographic locations, including data centers, availability zones, and cloud regions, where each location can accept writes independently.
With geo-replication, you can build resilient, globally distributed database systems that protect against location failures and keep data close to users.

## When to use geo-replication

Geo-replication is the right choice when you need one or more of the following:

- **Location failure protection**: if a data center or availability zone goes offline, another location continues to serve reads and writes without data restore.
- **Data residency**: regulatory requirements mandate that certain data stays within a specific region or country.
- **Low-latency reads across regions**: users in different regions need fast access to data without round-tripping to a central location.
- **Disaster recovery with low Recovery Time Objective (RTO)**: you need near-instantaneous failover to another location without manual restore from backup.

## Deployment workflow

Follow these steps when setting up a new geo-distributed PGD cluster.

### 1. Choose a deployment pattern

Decide on the number of active write locations, routing mode, and commit scope before configuring anything. The deployment pattern affects every subsequent decision.

See [Choosing a deployment pattern](https://www.enterprisedb.com/docs/pgd/6.3/geo-replication-dba/topology/).

### 2. Plan your node distribution and create subgroups

Before provisioning nodes, measure network latency between locations and plan quorum so that no single location holds a majority of voting nodes. Determine whether you need a witness location. Then create a subgroup for each location under the top-level group and assign nodes to their subgroups.

See [Setting up your topology](https://www.enterprisedb.com/docs/pgd/6.3/geo-replication-dba/topology-setup/).

### 3. Configure routing

Decide between local routing (write leader per location) and global routing (single cluster-wide write leader). Local routing is the default and requires no changes. For global routing, enable it on the top-level group and disable it on subgroups.

Set route priority to control which nodes are preferred as write leaders during failover.

See [Configuring routing](https://www.enterprisedb.com/docs/pgd/6.3/geo-replication-dba/routing/).

### 4. Configure commit scopes

Choose a commit scope based on your durability requirements and configure it for each location subgroup.

See [Configuring commit scopes](https://www.enterprisedb.com/docs/pgd/6.3/geo-replication-dba/commit-scopes/).

### 5. Tune replication and sequences

Tune parallel apply and streaming settings to reduce replication lag under high write volumes. Confirm that sequences are configured to generate cluster-wide unique values.

See [Tuning replication](https://www.enterprisedb.com/docs/pgd/6.3/geo-replication-dba/replication-tuning/).

### 6. Configure lag control

If cross-region replication lag is a concern, add Lag Control rules to your commit scope to throttle write throughput when remote nodes fall behind.

See [Controlling replication lag](https://www.enterprisedb.com/docs/pgd/6.3/geo-replication-dba/managing-lag/).

### 7. Verify the cluster and prepare for operations

Once configuration is complete, verify that subgroups, routing, and commit scopes are set up correctly before going to production. The maintenance page also covers ongoing operational tasks such as rolling upgrades, DDL considerations, network partition handling, and conflict monitoring.

See [Performing cluster maintenance](https://www.enterprisedb.com/docs/pgd/6.3/geo-replication-dba/maintenance/).

- [Choosing a deployment pattern](https://www.enterprisedb.com/docs/pgd/6.3/geo-replication-dba/topology/): How to choose a PGD deployment pattern for geo-replication based on your location requirements, routing strategy, and RPO.
- [Setting up your topology](https://www.enterprisedb.com/docs/pgd/6.3/geo-replication-dba/topology-setup/): How to plan node distribution and configure location subgroups for a geo-distributed PGD cluster.
- [Configuring routing](https://www.enterprisedb.com/docs/pgd/6.3/geo-replication-dba/routing/): How to configure local and global routing in a geo-distributed PGD cluster, including write leader election, route priority, and deployment pattern constraints.
- [Configuring commit scopes](https://www.enterprisedb.com/docs/pgd/6.3/geo-replication-dba/commit-scopes/): How to create and configure commit scopes for cross-location durability in geo-distributed PGD clusters.
- [Controlling replication lag](https://www.enterprisedb.com/docs/pgd/6.3/geo-replication-dba/managing-lag/): Configuring lag control for cross-region replication and using subscriber-only nodes for regional reads.
- [Tuning replication](https://www.enterprisedb.com/docs/pgd/6.3/geo-replication-dba/replication-tuning/): Node group settings for optimizing replication performance and sequence behavior in geo-distributed PGD clusters.
- [Performing cluster maintenance](https://www.enterprisedb.com/docs/pgd/6.3/geo-replication-dba/maintenance/): Configuration verification, DDL and VACUUM considerations, write leadership, node maintenance, and conflict monitoring for geo-distributed PGD clusters.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
