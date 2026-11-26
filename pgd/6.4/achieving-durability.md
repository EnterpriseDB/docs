---
title: Achieving durability with commit scopes
description: How to choose a commit scope that matches your workload's durability, consistency, and availability needs.
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/achieving-durability/
lastModified: 2026-08-21T09:22:11+02:00
---

# Achieving durability with commit scopes

Use commit scopes to control when PGD acknowledges a commit. Commit scopes let you align your database's durability guarantees with your workload's needs. Which scope fits depends on your deployment, your tolerance for data loss, and your consistency requirements:

- **Distributing data across regions.** In a geo-distributed cluster, every synchronous cross-region confirmation adds latency. If you can't tolerate data loss on a regional failure, use [Synchronous Commit](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/synchronous_commit/) to require remote confirmation before a commit returns, with an optional timeout to fall back to async when peers are slow to respond.

- **Processing high-value transactions.** In payments or banking, two nodes can independently commit conflicting changes. By the time the conflict surfaces, both transactions have already completed. Use [Quorum Commit](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/quorum-commit/) to prevent conflicting commits at the transaction level.

- **Meeting data compliance requirements.** Regulations like GDPR may require data to be confirmed as resident in a specific region before a transaction is complete. Committing asynchronously creates a window where the data exists only outside the compliant region. Use [Synchronous Commit](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/synchronous_commit/) to make the commit itself the guarantee that data is resident in the required region.

- **Protecting a high-throughput ingest pipeline.** Synchronous confirmation on every write adds latency that compounds at scale, but committing with no replication guarantee risks losing a large window of data on node failure. Use [Lag Control](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/lag-control/) to keep async performance while bounding how far replication can fall behind.

- **Preventing duplicate transactions on failover.** When a client retries after a connection failure, it can't always know whether the original commit succeeded. Use [CAMO](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/camo/) to prevent a transaction from being applied more than once on retry.

PGD offers two ways to configure commit scopes. [Predefined scopes](https://www.enterprisedb.com/docs/pgd/6.4/achieving-durability/predefined-scopes/) are ready to use with no configuration and cover the most common single-group patterns. If your cluster spans multiple groups with different requirements, or you need distributed consistency guarantees, [custom scopes](https://www.enterprisedb.com/docs/pgd/6.4/achieving-durability/custom-scopes/) let you compose your own policy using the full commit scope language.

- [Using predefined scopes](https://www.enterprisedb.com/docs/pgd/6.4/achieving-durability/predefined-scopes/): How to apply PGD's predefined commit scopes to match common durability patterns.
- [Fine-tuning with custom scopes](https://www.enterprisedb.com/docs/pgd/6.4/achieving-durability/custom-scopes/): How to use custom commit scopes to achieve full granularity over commit behavior across node groups in complex environments.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
