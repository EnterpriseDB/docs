---
title: EDB Postgres for Kubernetes 1.1 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/1_1_0_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 1.1 release notes

Released: 03 Mar 2021

This release of EDB Postgres for Kubernetes includes the following:

| Type    | Description                                                                                                                                                     |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature | Add kubectl cnp status to pretty-print the status of a cluster, including JSON and YAML output.                                                                 |
| Feature | Add kubectl cnp certificate to enable TLS authentication for client applications.                                                                               |
| Feature | Add the -ro service to route connections to the available hot standby replicas only, enabling offload of read-only queries from the cluster's primary instance. |
| Feature | Rollback scaling down a cluster to a value lower than maxSyncReplicas.                                                                                          |
| Feature | Request a checkpoint before demoting a former primary.                                                                                                          |
| Feature | Send SIGINT signal (fast shutdown) to PostgreSQL process on SIGTERM.                                                                                            |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
