---
title: EDB Postgres for Kubernetes 0.5 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/0_5_0_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 0.5 release notes

Released: 20 Nov 2020

| Type        | Description                                                                                                                                                                                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Feature     | Automated provisioning of an independent Certification Authority (CA) for each PostgreSQL cluster.                                                                                                                                                                                                                             |
| Feature     | Transparent and native support for TLS/SSL connections to encrypt client/server communications.                                                                                                                                                                                                                                |
| Enhancement | Improve the security of the standby streaming replication channel through a dedicated and fixed database user called `streaming_replica` with sole `REPLICATION` privileges and II. an automatically managed X.509 TLS certificate signed by the cluster Certification Authority to authenticate the `streaming_replica` user. |
| Enhancement | Improve the security of the standby streaming replication channel through an automatically managed X.509 TLS certificate signed by the cluster Certification Authority to authenticate the `streaming_replica` user.                                                                                                           |
| Enhancement | Improve PostgreSQL configuration capability through a mutating webhook that prevents users from changing those parameters that are directly managed by the operator.                                                                                                                                                           |
| Enhancement | Improve PostgreSQL configuration capability through a defaulting webhook that integrates the users' supplied configuration options with default values in the cluster state.                                                                                                                                                   |
| Enhancement | Improve PostgreSQL configuration capability through automated management of the PostgreSQL instances reload and restart.                                                                                                                                                                                                       |
| Feature     | Enable custom and independent configuration of a PostgreSQL cluster following a recovery from a backup.                                                                                                                                                                                                                        |
| Feature     | Convey the current status of the cluster (i.e. healthy, failover in progress, switchover in progress).                                                                                                                                                                                                                         |
| Feature     | API change from k8s.2ndq.io to k8s.enterprisedb.io.                                                                                                                                                                                                                                                                            |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
