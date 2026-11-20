---
title: EDB Postgres Distributed 5.5.1 release notes
product: EDB Postgres Distributed (PGD)
version: 5.8.1
url: https://www.enterprisedb.com/docs/pgd/5.8/rel_notes/pgd_5.5.1_rel_notes/
lastModified: 2025-08-21T21:29:34Z
---

# EDB Postgres Distributed 5.5.1 release notes

Released: 31 May 2024

EDB Postgres Distributed version 5.5.1 is a patch release containing bug fixes for EDB Postgres Distributed.

> **Important: Recommended upgrade**
>
> We recommend that all users of PGD 5 upgrade to PGD 5.5.1. See [PGD/TPA upgrades](https://www.enterprisedb.com/docs/pgd/5.8/upgrades/tpa_overview/) for details.

## Bug fixes

| Component | Version | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Ticket |
| --------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| BDR       | 5.5.1   | <details><summary>  Fixed potential data inconsistency issue with mixed-version usage during a rolling upgrade.  </summary><hr/>Backward-incompatible change in PGD 5.5.0 may lead to inconsistencies when replicating from a newer PGD 5.5.0 node to an older version of the PGD node, specifically during the mixed-mode rolling upgrade.<br/>This release addresses a backward-compatibility issue in mixed-version operation, enabling seamless rolling upgrades.  </details> |        |
| BDR       | 5.5.1   | <details><summary>  Disabled auto-triggering of node sync by default.  </summary><hr/>Automatically triggered synchronization of data from a down node caused issues by failing to resume once it came back up. As a precautionary measure, the feature is now disabled by default (PGD setting [`bdr.enable_auto_sync_reconcile`](https://www.enterprisedb.com/docs/pgd/5.8/reference/pgd-settings/#bdrenable_auto_sync_reconcile)).  </details>                                 | 11510  |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
