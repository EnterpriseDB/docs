---
title: Setting up the storage repository for WarehousePG Disaster Recovery
description: Set up the storage repository that the primary cluster archives WAL to and the DR cluster restores from.
product: WarehousePG Disaster Recovery
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-dr/setting-up-primary/storage/
lastModified: 2026-07-23T14:35:59+02:00
---

# Setting up the storage repository for WarehousePG Disaster Recovery

Provision a storage repository that both the primary and DR clusters can reach. The primary cluster writes base backups and WAL archives to it and the DR cluster reads from it. The two clusters don't need a direct network path to each other.

`whpg-dr` supports two storage backends:

| Backend       | Requirements                                                                                                                                 |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| POSIX (NFS)   | Mount the NFS share read-write at the same path on all coordinator and segment hosts of both clusters. Supported on WarehousePG 6.x and 7.x. |
| S3-compatible | Create the bucket and make credentials with read and write access available on all hosts. Requires WarehousePG 7.x.                          |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
