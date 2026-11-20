---
title: Commit Scopes
description: Durability options, commit scopes, and lag control in PGD.
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/
lastModified: 2026-10-27T13:40:59+01:00
---

# Commit Scopes

Fully managable and configurable commit scopes are a feature of PGD Expanded.

PGD Expanded offers a range of synchronous modes to complement its
default asynchronous replication. You use commit scopes to configure these synchronous modes.
Commit scopes are rules that define how PGD handles synchronous operations and when the system
considers a transaction committed.

PGD Essential offers a limited set of commit scopes that are pre-defined and cannot be changed.

## Introducing

- [Overview](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/overview/) introduces the concepts and some of the essential terminology that's used when discussing synchronous commits.

- [Durability terminology](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/durabilityterminology/) lists terms used around PGD's durability options, including how to refer to nodes in replication.

- [Commit scopes](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/commit-scopes/) is a more in-depth look at the structure of commit scopes and how to define them for your needs.

- [Predefined commit scopes](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/predefined-commit-scopes/) lists the pre-defined commit scopes that are available in PGD Essential.

- [Commit scope rules](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/commit-scope-rules/) looks at the syntax of and how to formulate a commit scope rule.

- [Commit scope groups](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/origin_groups/) introduces the notion of an origin group, and how to leverage these when defining commit scopes rules.

- [Confirmation levels](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/comparing/) compares how each commit scope kind handles the confirmation levels.

- [Degrading commit scope rules](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/degrading/) shows how to set up a commit scope rule that can gracefully degrade to a lower setting in case of timeouts with a stricter setting.

## Commit scope kinds

- [Synchronous Commit](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/synchronous_commit/) is a commit scope mechanism that works in a similar fashion to legacy synchronous replication, but from within the commit scope framework.

- [Quorum Commit](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/quorum-commit/) is the commit scope kind for workloads requiring distributed transaction consistency. Quorum Commit guarantees that all participating nodes commit together or roll back together, preventing conflicts before they occur.

- [CAMO](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/camo/) focuses on the Commit At Most Once option, in which applications take responsibility for verifying that a transaction has been committed before retrying. This ensures that their commits only happen at most once.

- [Lag Control](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/lag-control/) looks at the commit scope mechanism which dynamically throttle nodes according to the slowest node and regulates how far out of sync nodes may go when a database node goes out of service.

- [Group Commit](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/group-commit/) focuses on the Group Commit option, where you can define a transaction as done when a group of nodes agrees it's done.

## Working with commit scopes

- [Administering](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/administering/) addresses how to manage a PGD cluster with commit scopes in use.

- [Legacy synchronous replication](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/legacy-sync/) shows how you can still access traditional Postgres synchronous operations under PGD.

- [Internal timing of operations](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/timing/) compares legacy replication with PGD's async and synchronous operations, especially the difference in the order by which transactions are flushed to disk or made visible.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
