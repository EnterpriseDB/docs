---
title: Release notes for EDB Postgres Distributed version 4.3.4
product: EDB Postgres Distributed (PGD)
version: 4.3.8
url: https://www.enterprisedb.com/docs/pgd/4/rel_notes/pgd_4.3.4_rel_notes/
lastModified: 2025-08-21T21:26:25Z
---

# Release notes for EDB Postgres Distributed version 4.3.4

Released: 5 Mar 2024

EDB Postgres Distributed version 4.3.4 is a patch release of EDB Postgres Distributed 4, which includes bug fixes for issues identified in previous versions.

> **Note**
>
> This version is required for EDB Postgres Advanced Server versions 12.15, 13.11, 14.10, 15.5 and later.

| Component | Version | Type    | Description                                                                                 |
| --------- | ------- | ------- | ------------------------------------------------------------------------------------------- |
| BDR       | 4.3.4   | Bug fix | Change default value of bdr.writers\_per\_subscription to 1.                                |
| BDR       | 4.3.4   | Bug fix | Run ANALYZE on the internal raft tables, RT97735.                                           |
| BDR       | 4.3.4   | Bug fix | Fix segfault in I2PC concurrent abort case, RT93962.                                        |
| BDR       | 4.3.4   | Bug fix | Avoid bypassing other extensions in BdrProcessUtility when processing COPY..TO, RT99345.    |
| BDR       | 4.3.4   | Bug fix | Ensure that consensus connection are handled correctly, RT97649.                            |
| BDR       | 4.3.4   | Bug fix | Fix selected memory leaks, RT99231/RT95314.                                                 |
| BDR       | 4.3.4   | Bug fix | Add default\_table\_access\_method to replicated GUCs.                                      |
| BDR       | 4.3.4   | Bug fix | Add missing GUCs to DDL replication GUC list.                                               |
| BDR       | 4.3.4   | Bug fix | Improve local node connection failure logging.                                              |
| BDR       | 4.3.4   | Bug fix | Rework raft snapshot group restore algorithm.                                               |
| BDR       | 4.3.4   | Bug fix | Apply node group change to subscription in raft snapshot restore.                           |
| BDR       | 4.3.4   | Bug fix | Fix commit queue cleanup and flush queueing up for prepared transactions in parallel apply. |
| BDR       | 4.3.4   | Bug fix | Increase default bdr.raft\_keep\_min\_entries to 1000 for 100.                              |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
