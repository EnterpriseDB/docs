---
title: Timing considerations and synchronous replication
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/appusage/timing/
lastModified: 2025-07-18T11:28:41-04:00
---

# Timing considerations and synchronous replication

Being asynchronous by default, peer nodes might lag behind. This behavior makes it
possible for a client connected to multiple PGD nodes or switching
between them to read stale data.

A [queue wait
function](https://www.enterprisedb.com/docs/pgd/5.6/reference/functions/#bdrwait_for_apply_queue) is provided
for clients or proxies to prevent such stale reads.

The synchronous replication features of Postgres are available to PGD as well.
In addition, PGD provides multiple variants for more synchronous replication.
See [Commit scopes](https://www.enterprisedb.com/docs/pgd/5.6/commit-scopes/) for an overview and
comparison of all variants available and their different modes.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
