---
title: Quorum Commit
description: How to use Quorum Commit, a commit scope kind that guarantees distributed transaction consistency in PGD.
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/quorum-commit/
lastModified: 2026-08-21T09:22:11+02:00
---

# Quorum Commit

Commit scope kind: `QUORUM COMMIT`

## Overview

Standard synchronous replication confirms that a remote node received data, but it doesn't prevent two nodes from independently committing conflicting changes. Two nodes can each read the same row, pass their local validation checks, and both commit successfully, leaving the cluster in an inconsistent state with no error reported on either side. In a payments system, for example, two nodes each checking an account balance locally can both approve simultaneous withdrawals that together exceed the account limit.

Quorum Commit prevents this divergence by requiring a majority of nodes to agree before any node commits. If the cluster can't reach agreement, the transaction is rolled back everywhere. The result is a single, consistent state across all nodes, with no divergence and no conflicts to resolve after the fact.

Quorum Commit supersedes Group Commit, which is retained for backward compatibility only. Unlike Group Commit, which offered flexible syntax that could be misconfigured to allow inconsistency, Quorum Commit restricts syntax to what can guarantee consistency.

## When to use Quorum Commit

Use Quorum Commit for workloads where inconsistencies can't be resolved after they occur. Payments and core banking are the clearest fit, where a transaction that can't be confirmed across the cluster doesn't commit anywhere. Telecom billing, regulated industries with strict audit and compliance requirements, and migrations from proprietary databases that depend on global consistency guarantees are equally good candidates. These workloads have traditionally required proprietary databases. Quorum Commit brings the same guarantees to Postgres.

- [How Quorum Commit works](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/quorum-commit/how-quorum-commit-works/). The internal mechanics, including consistency guarantees, conflict resolution, transaction lifecycle, automatic reconciliation, and latency considerations.

- [Using Quorum Commit](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/quorum-commit/using-quorum-commit/). How to create and use a Quorum Commit scope, including syntax, topology-specific configurations, commit decision options, timeout guidance, and application patterns.

* [How Quorum Commit works](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/quorum-commit/how-quorum-commit-works/): The internal mechanics of Quorum Commit, including consistency guarantees, conflict resolution, transaction lifecycle, automatic reconciliation, and latency considerations.
* [Using Quorum Commit](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/quorum-commit/using-quorum-commit/): How to create and use a Quorum Commit scope, including syntax, topology-specific configurations, commit decision options, timeout guidance, and application patterns.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
