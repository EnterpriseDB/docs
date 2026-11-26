---
title: Release notes for EDB Postgres Distributed version 4.3.2
product: EDB Postgres Distributed (PGD)
version: 4.4.2
url: https://www.enterprisedb.com/docs/pgd/4.4/rel_notes/pgd_4.3.2_rel_notes/
lastModified: 2025-08-21T21:25:27Z
---

# Release notes for EDB Postgres Distributed version 4.3.2

Released: 31 Aug 2023

Updated: 04 Sep 2023

EDB Postgres Distributed version 4.3.2 is a minor release of EDB Postgres Distributed 4, which includes bug fixes for issues identified in previous versions.

> **Note**
>
> This version is required for EDB Postgres Advanced Server versions 12.15, 13.11, 14.8 and later.

| Component | Version | Type    | Description                                                                                    |
| --------- | ------- | ------- | ---------------------------------------------------------------------------------------------- |
| BDR       | 4.3.2   | Bug fix | Fixed a crash in conflict triggers during bulk inserts.                                        |
| BDR       | 4.3.2   | Bug fix | Prevented the overflow in group commit transaction tracking on large clusters.                 |
| BDR       | 4.3.2   | Bug fix | Added a missing columns to the `bdr.sequence_alloc` catalog.                                   |
| BDR       | 4.3.2   | Bug fix | Added a validatation in node connection strings in `bdr.create_node()`. (RT95453)              |
| BDR       | 4.3.2   | Bug fix | Fixed a memory leak in group commit and camo caused by transaction tracking.                   |
| BDR       | 4.3.2   | Bug fix | Added check for conflicting node names.                                                        |
| BDR       | 4.3.2   | Bug fix | Fixed the consensus snapshot compatibility with PGD 3.7. (RT93022)                             |
| BDR       | 4.3.2   | Bug fix | When joining a node, don’t check foreign keys to match the behavior of replication. (RT91745)  |
| BDR       | 4.3.2   | Bug fix | Improved consumption of replication queue on busy subscriptions.                               |
| BDR       | 4.3.2   | Bug fix | Fixed a deadlock on autopartition catalogs when a concurrent DROP EXTENSION is being executed. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
