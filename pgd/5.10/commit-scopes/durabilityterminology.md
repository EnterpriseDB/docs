---
title: Durability terminology
product: EDB Postgres Distributed (PGD)
version: 5.10.0
url: https://www.enterprisedb.com/docs/pgd/5.10/commit-scopes/durabilityterminology/
lastModified: 2026-11-20T11:33:47Z
---

# Durability terminology

## Durability terminology

This page covers terms and definitions directly related to PGD's durability options.
For other terms, see [Terminology](https://www.enterprisedb.com/docs/pgd/5.10/terminology/).

### Nodes

PGD nodes take different roles during the replication of a transaction.
These are implicitly assigned per transaction and are unrelated even for
concurrent transactions.

- The _origin_ is the node that receives the transaction from the
  client or application. It's the node processing the transaction
  first, initiating replication to other PGD nodes and responding back
  to the client with a confirmation or an error.

- The _origin node group_ is a PGD group which includes the origin.

- A _partner_ node is a PGD node expected to confirm transactions
  according to Group Commit requirements.

- A _commit group_ is the group of all PGD nodes involved in the
  commit, that is, the origin and all of its partner nodes, which can be
  just a few or all peer nodes.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
