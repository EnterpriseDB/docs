---
title: Version 2.3.2
product: EDB Postgres Distributed (PGD)
version: 3.7.26
url: https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.3.2_rel_notes/
lastModified: 2023-10-17T15:47:09+01:00
---

# Version 2.3.2

This is a patch release of HARP 2 that includes fixes for issues identified
in previous versions.

| Type    | Description                                                                                  |
| ------- | -------------------------------------------------------------------------------------------- |
| Bug fix | Multiple fixes related to network partition in BDR DCS.                                      |
| Bug fix | Fix intermittent harp-manager hang issue.                                                    |
| Bug fix | In Go driver calls, ensure rows.Err() is checked every time after rows.Next() returns false. |
| Change  | Improve the BDR DCS's List method performance.                                               |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
