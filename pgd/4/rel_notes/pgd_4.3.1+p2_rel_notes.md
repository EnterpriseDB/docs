---
title: Release notes for EDB Postgres Distributed version 4.3.1+p2
product: EDB Postgres Distributed (PGD)
version: 4.3.8
url: https://www.enterprisedb.com/docs/pgd/4/rel_notes/pgd_4.3.1+p2_rel_notes/
lastModified: 2025-08-21T21:26:25Z
---

# Release notes for EDB Postgres Distributed version 4.3.1+p2

Released: 27 Jul 2023

EDB Postgres Distributed version 4.3.1+p2 is a patch release of EDB Postgres Distributed 4, which includes bug fixes for issues identified in previous versions.

If you are using any previous release of HARP, we recommend that you upgrade to HARP 2.3.1.

> **Note**
>
> This version is required for EDB Postgres Advanced Server versions 12.15, 13.11, 14.8, and later.

| Component | Version | Type    | Description                                                                                                           |
| --------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| HARP      | 2.3.1   | Bug fix | HARP Proxy cannot determine the leader after an extended outage - (BDR-3768).                                         |
| HARP      | 2.3.1   | Bug fix | Upgrade database driver library version which fixes `connect_timeout` issue when `sslmode=allow` or `sslmode=prefer`. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
