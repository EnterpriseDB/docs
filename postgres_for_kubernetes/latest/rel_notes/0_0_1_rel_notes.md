---
title: EDB Postgres for Kubernetes 0.0.1 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/0_0_1_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 0.0.1 release notes

Released: 5 Mar 2020

| Type    | Description                                                                                                     |
| ------- | --------------------------------------------------------------------------------------------------------------- |
| Feature | PostgreSQL 12.2 container image.                                                                                |
| Feature | Self-Healing capability, through failover of the primary instance, by promoting the most aligned replica.       |
| Feature | Self-Healing capability, through automated recreation of a replica.                                             |
| Feature | Planned switchover of the primary instance, by promoting a selected replica.                                    |
| Feature | Scale up/down capabilities.                                                                                     |
| Feature | Definition of an arbitrary number of instances (minimum 1 - one primary server).                                |
| Feature | Definition of the _read-write_ service, to connect your applications to the only primary server of the cluster. |
| Feature | Definition of the _read-only_ service, to connect your applications to any of the instances for read workloads. |
| Feature | Support for Local Persistent Volumes with PVC templates.                                                        |
| Feature | Standard output logging of PostgreSQL error messages.                                                           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
