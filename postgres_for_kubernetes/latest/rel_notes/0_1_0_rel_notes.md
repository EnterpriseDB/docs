---
title: EDB Postgres for Kubernetes 0.1 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/0_1_0_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 0.1 release notes

Released: 3 Apr 2020

| Type        | Description                                                                                                                                                                                                                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Feature     | Reuse of existing persistent storage with Pods (required for rolling updates).                                                                                                                                                                                                                               |
| Feature     | Independence between operator container image and PostgreSQL container image (required by rolling updates) - this enables usage of Community PostgreSQL images.                                                                                                                                              |
| Feature     | Rolling updates for the update of the operator and the entire cluster to a new version of PostgreSQL, by updating all the replicas first; switchover can be entirely managed by Kubernetes once replicas have been updated (`unsupervised` option), or manually triggered by the user (`supervised` option). |
| Feature     | Check framework for update-in-progress of a Pod.                                                                                                                                                                                                                                                             |
| Enhancement | Improvements in cluster status information.                                                                                                                                                                                                                                                                  |
| Enhancement | E2E tests for Kubernetes 1.18.                                                                                                                                                                                                                                                                               |
| Enhancement | E2E performance tests for failover (< 5 seconds).                                                                                                                                                                                                                                                            |
| Enhancement | Improvements in E2E tests for switchover.                                                                                                                                                                                                                                                                    |
| Feature     | Support for PostgreSQL's `cluster_name` GUC.                                                                                                                                                                                                                                                                 |
| Feature     | New documentation section `Exposing Postgres services`.                                                                                                                                                                                                                                                      |
| Feature     | New documentation section `Security`.                                                                                                                                                                                                                                                                        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
