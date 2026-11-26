---
title: EDB Postgres Distributed 5.4.1 release notes
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/rel_notes/pgd_5.4.1_rel_notes/
lastModified: 2025-02-26T18:09:18Z
---

# EDB Postgres Distributed 5.4.1 release notes

Released: 03 Apr 2024

EDB Postgres Distributed version 5.4.1 is a patch release containing bug fixes for EDB Postgres Distributed.

> **Important: Recommended upgrade**
>
> We recommend that all users of PGD 5 upgrade to PGD 5.4.1. See [PGD/TPA upgrades](https://www.enterprisedb.com/docs/pgd/5.6/upgrades/tpa_overview/) for details.

## Bug fixes

| Component | Version | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Tickets |
| --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| BDR       | 5.4.1   | <details><summary>  Fixed WAL retention logic to prevent disk space issues on a PGD node with version 5.4.0 and Postgres 16, PGE 16, and EDB Postgres Advanced Server 16.  </summary><hr/>A fix was implemented to ensure proper cleanup of write-ahead logs (WAL) even after reaching a size of 4 GB on a node. A change in version 5.4.0 resulted in WAL being retained indefinitely after reaching this threshold. This issue is specific to PGD 5.4.0 in conjunction with Postgres 16, PGE 16, and EDB Postgres Advanced Server 16.   </details> |         |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
