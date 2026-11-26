---
title: Recovering from failures
description: How to handle replication apply errors and recover failed nodes in an EDB Postgres Distributed (PGD) cluster.
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/recovering-from-failures/
lastModified: 2026-08-21T09:22:11+02:00
---

# Recovering from failures

EDB Postgres Distributed (PGD) provides an apply error policy for managing replication failures and a recovery process for bringing failed nodes back into a cluster configured with synchronous commit scopes.

- [Handling apply errors](https://www.enterprisedb.com/docs/pgd/6.4/recovering-from-failures/apply-error-policy/): How to configure PGD's apply error policy to manage replication failures, review failed transactions, and resolve them without data loss.
- [Recovering a failed node](https://www.enterprisedb.com/docs/pgd/6.4/recovering-from-failures/node-recovery/): How to recover failed nodes in a PGD cluster configured with synchronous commit scopes.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
