---
title: Commit Scopes
description: Durability options, commit scopes, and lag control in PGD.
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/
lastModified: 2025-05-30T15:32:37+01:00
---

# Commit Scopes

EDB Postgres Distributed (PGD) offers a range of synchronous modes to complement its
default asynchronous replication. You use commit scopes to configure these synchronous modes.
Commit scopes are rules that define how PGD handles synchronous operations and when the system
considers a transaction committed.

## Introducing

- [Overview](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/overview/) introduces the concepts and some of the essential
  terminology that's used when discussing synchronous commits.

- [Durability terminology](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/durabilityterminology/) lists terms used around PGD's
  durability options, including how to refer to nodes in replication.

- [Commit scopes](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/commit-scopes/) is a more in-depth look at the structure
  of commit scopes and how to define them for your needs.

- [Origin groups](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/origin_groups/) introduces the notion of an origin group, and how to leverage these when defining commit scopes rules.

- [Commit scope rules](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/commit-scope-rules/) looks at the syntax of and how to formulate
  a commit scope rule.

- [Comparing durability options](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/comparing/) compares how commit scope options behave with regard to durability.

- [Degrading commit scope rules](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/degrading/) shows how to set up a commit scope rule that can gracefully degrade to a lower setting in case of timeouts with a stricter setting.

## Commit scope kinds

- [Synchronous Commit](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/synchronous_commit/) is a commit scope mechanism that works
  in a similar fashion to legacy synchronous replication, but from within the commit scope framework.

- [Group Commit](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/group-commit/) focuses on the Group Commit option, where you can
  define a transaction as done when a group of nodes agrees it's done.

- [CAMO](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/camo/) focuses on the Commit At Most Once option, in which applications
  take responsibility for verifying that a transaction has been committed before
  retrying. This ensures that their commits only happen at most once.

- [Lag Control](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/lag-control/) looks at the commit scope mechanism which
  dynamically throttle nodes according to the slowest node and regulates how far
  out of sync nodes may go when a database node goes out of service.

## Working with commit scopes

- [Administering](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/administering/) addresses how to manage a PGD cluster with Group Commit
  in use.

- [Limitations](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/limitations/) lists the various combinations of durability options
  that aren't currently supported or aren't possible. Refer to this before deciding
  on a durability strategy.

- [Legacy synchronous replication](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/legacy-sync/) shows how you can still access traditional Postgres synchronous operations under PGD.

- [Internal timing of operations](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/timing/) compares legacy replication with PGD's async and synchronous operations, especially the difference in the order by which transactions are flushed to disk or made visible.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
