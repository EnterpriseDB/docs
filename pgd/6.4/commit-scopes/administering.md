---
title: Administering
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/commit-scopes/administering/
lastModified: 2026-08-21T09:22:11+02:00
---

# Administering

When running a PGD cluster with Group Commit, you need to
be aware of some things when administering the system, such as how to safely shut down and
restart nodes.

## Planned shutdown and restarts

When using Group Commit with receive confirmations, take care
with planned shutdown or restart. By default, the apply queue is processed
prior to shutting down. However, in the `immediate` shutdown mode, the queue
is discarded at shutdown, leading to the stopped node "forgetting"
transactions in the queue. A concurrent failure of the origin node can
lead to loss of data, as if both nodes failed.

To ensure the apply queue gets flushed to disk, use either
[`smart` or `fast` shutdown](https://www.postgresql.org/docs/current/server-shutdown.html) for maintenance tasks. This approach maintains the
required synchronization level and prevents loss of data.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
