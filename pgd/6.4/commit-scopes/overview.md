---
title: Overview of durability options
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/overview/
lastModified: 2026-08-21T09:22:11+02:00
---

# Overview of durability options

## Overview

EDB Postgres Distributed (PGD) allows you to choose from several replication
configurations based on your durability, consistency, availability, and
performance needs using _commit scopes_.

In its basic configuration, PGD uses asynchronous replication. However, commit
scopes can change both the default and the per-transaction behavior.

It's also possible to configure the legacy Postgres synchronous replication
using standard `synchronous_standby_names` in the same way as the built-in
physical or logical replication. However, commit scopes provide much more
flexibility and control over the replication behavior.

The different synchronization settings affect three properties of interest
to applications that are related but can all be implemented individually:

- Durability: Writing to multiple nodes increases crash resilience
  and allows you to recover the data after a crash and restart.

- Visibility: With the commit confirmation to the client, the database
  guarantees immediate visibility of the committed transaction on some
  sets of nodes.

- Conflict handling: Conflicts can be handled optimistically
  postcommit, with conflicts resolved when the transaction is replicated
  based on commit timestamps. Or, they can be handled pessimistically
  precommit. The client can rely on the transaction to eventually be
  applied on all nodes without further conflicts or get an abort, directly
  informing the client of an error.

Commit scopes allow four kinds of controlling durability of the transaction:

- [Synchronous Commit](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/synchronous_commit/): This kind of commit scope allows for a behavior where the origin node awaits a majority of nodes to confirm and behaves more like a native Postgres synchronous commit.

- [Quorum Commit](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/quorum-commit/): Quorum Commit internally uses two-phase commit to guarantee that a transaction commits or rolls back in the entire cluster, effectively serializing conflicting transactions across the cluster.

- [CAMO](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/camo/): This kind of commit scope works with the client to verify that a transaction
  was committed before retrying, preventing duplicate commits in failover scenarios.

- [Lag Control](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/lag-control/): This kind of commit scope controls how far behind nodes can
  be in terms of replication before allowing commit to proceed.

Synchronous Commit and CAMO each support [degrading commit scope rules](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/degrading/), for even further control of durability.

> **Note: Legacy synchronization availability**
>
> For backward compatibility, PGD still supports configuring synchronous
> replication with `synchronous_commit` and `synchronous_standby_names`. See
> [Legacy synchronous replication](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/legacy-sync/) for more on this option. We
> recommend that you use [PGD Synchronous Commit](https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/synchronous_commit/) instead.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
