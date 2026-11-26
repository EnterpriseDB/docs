---
title: EDB Postgres for Kubernetes 1.7.1 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/1_7_1_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 1.7.1 release notes

Released: 11 Aug 2021

This release of EDB Postgres for Kubernetes includes the following:

| Type    | Description                                                                                                                                                                                                                                                           |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature | Prefer self-healing over configuration with regards to synchronous replication, empowering the operator to temporarily override minSyncReplicas and maxSyncReplicas settings in case the cluster is not able to meet the requirements during self-healing operations. |
| Feature | Introduce the postInitSQL option as part of the initdb bootstrap method to specify a list of SQL queries to be executed as a superuser immediately after the cluster has been created.                                                                                |
| Bug fix | Allow the operator to failover when the primary is not ready (bug introduced in 1.7.0).                                                                                                                                                                               |
| Bug fix | Execute administrative queries using the LOCAL synchronous commit level.                                                                                                                                                                                              |
| Bug fix | Correctly parse multi-line log entries in PGAudit.                                                                                                                                                                                                                    |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
