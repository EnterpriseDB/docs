---
title: Version 2.3.1
product: EDB Postgres Distributed (PGD)
version: 3.7.26
url: https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.3.1_rel_notes/
lastModified: 2023-07-27T20:53:26+05:30
---

# Version 2.3.1

This is a patch release of HARP 2 that includes fixes for issues identified
in previous versions.

| Type    | Description                                                                                                           |
| ------- | --------------------------------------------------------------------------------------------------------------------- |
| Bug fix | HARP Proxy cannot determine the leader after an extended outage - (BDR-3768).                                         |
| Bug fix | Upgrade database driver library version which fixes `connect_timeout` issue when `sslmode=allow` or `sslmode=prefer`. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
