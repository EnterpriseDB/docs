---
title: EDB Postgres for Kubernetes 0.2 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/0_2_0_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 0.2 release notes

Released: 11 Aug 2020

| Type        | Description                                                                                                                                                                               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature     | PostgreSQL 10 and 11 are now supported, in addition to PostgreSQL 12.                                                                                                                     |
| Feature     | Usage of UBI as base image of the operator (OpenShift support).                                                                                                                           |
| Feature     | New Backup and ScheduledBackup CRD, allowing users to take a physical backup of the cluster in an object store that complies with the S3 protocol (such as AWS S3, MinIO, MinIO Gateway). |
| Feature     | Support for WAL archiving to an object store that complies with the S3 protocol.                                                                                                          |
| Enhancement | Improvements in the E2e tests infrastructure.                                                                                                                                             |
| Fix         | Bug fixes and minor improvements.                                                                                                                                                         |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
