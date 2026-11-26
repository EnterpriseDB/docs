---
title: Release notes for EDB Postgres Distributed version 4.3.2+p1
product: EDB Postgres Distributed (PGD)
version: 4.4.2
url: https://www.enterprisedb.com/docs/pgd/4.4/rel_notes/pgd_4.3.2+p1_rel_notes/
lastModified: 2025-08-21T21:25:27Z
---

# Release notes for EDB Postgres Distributed version 4.3.2+p1

Released: 17 Oct 2023

EDB Postgres Distributed version 4.3.2+p1 is a patch release of EDB Postgres Distributed 4, which includes bug fixes for issues identified in previous versions.

If you are using any previous release of HARP, we recommend that you upgrade to HARP 2.3.2.

> **Note**
>
> This version is required for EDB Postgres Advanced Server versions 12.15, 13.11, 14.8 and later.

| Component | Version | Type    | Description                                                                                  |
| --------- | ------- | ------- | -------------------------------------------------------------------------------------------- |
| HARP      | 2.3.2   | Bug fix | Multiple fixes related to network partition in BDR DCS.                                      |
| HARP      | 2.3.2   | Bug fix | Fix intermittent harp-manager hang issue.                                                    |
| HARP      | 2.3.2   | Bug fix | In Go driver calls, ensure rows.Err() is checked every time after rows.Next() returns false. |
| HARP      | 2.3.2   | Change  | Improve the BDR DCS's List method performance.                                               |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
