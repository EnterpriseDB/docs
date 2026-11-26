---
title: Version 2.1.1
product: EDB Postgres Distributed (PGD)
version: 3.7.26
url: https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.1.1_rel_notes/
lastModified: 2022-07-19T14:24:51-04:00
---

# Version 2.1.1

This is a patch release of HARP 2 that includes fixes for issues identified
in previous versions.

| Type        | Description                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------- |
| Enhancement | Log a warning on loss of DCS connection                                                      |
| Enhancement | Log a warning when metadata refresh is taking too long - usually due to high latency network |
| Bug Fix     | Restart harp\_proxy.service on a failure                                                     |
| Bug Fix     | Fix concurrency issue with connection management in harpctl                                  |
| Bug Fix     | Don't try to proxy connections to previous leader on unmanaged cluster                       |
| Bug Fix     | Don't panic in haprctl when location is empty                                                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
