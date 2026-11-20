---
title: EDB Postgres for Kubernetes 1.17.1 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/1_17_1_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 1.17.1 release notes

Released: 07 Oct 2022

This release of EDB Postgres for Kubernetes includes the following:

| Type           | Description                                                                                                                                                                                                                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Upstream merge | Merged with community CloudNativePG 1.17.1. See the community [Release Notes](https://cloudnative-pg.io/docs/devel/release_notes/old/v1.17/).                                                                                                                                                                   |
| Enhancement    | Introduces `leaseDuration` and `renewDeadline` parameters in the controller manager to enhance configuration of the leader election in operator deployments.                                                                                                                                                    |
| Enhancement    | Improves the mechanism that checks that the backup object store is empty before archiving a WAL file for the first time. A new file called `.check-empty-wal-archive` is placed in the `PGDATA` immediately after the cluster is bootstrapped. It is removed after the first WAL file is successfully archived. |
| Security       | Explicitly sets permissions of the instance manager binary that is copied in the `distroless/static:nonroot` container image, by using the `nonroot:nonroot` user.                                                                                                                                              |
| Bug fix        | Drops any active connection on a standby after it is promoted to primary.                                                                                                                                                                                                                                       |
| Bug fix        | Honors `MAPPEDMETRIC` and `DURATION` metric types conversion in the native Prometheus exporter.                                                                                                                                                                                                                 |
| Bug fix        | Ensures that timestamps that are specified with microsecond precision using the PostgreSQL format are correctly parsed.                                                                                                                                                                                         |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
