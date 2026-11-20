---
title: EDB Postgres for Kubernetes 1.6.0 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/1_6_0_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 1.6.0 release notes

Released: 12 Jul 2021

This release of EDB Postgres for Kubernetes includes the following:

| Type         | Description                                                                                                                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature      | Replica mode (EXPERIMENTAL): allow a cluster to be created as a replica of a source cluster. A replica cluster has a designated primary and any number of standbys.                                                                               |
| Feature      | EDB Audit support on EDB Postgres Advanced Server images.                                                                                                                                                                                         |
| Feature      | Add the .spec.postgresql.promotionTimeout parameter to specify the maximum amount of seconds to wait when promoting an instance to primary, defaulting to 40000000 seconds.                                                                       |
| Feature      | Add the .spec.affinity.podAntiAffinityType parameter. It can be set to preferred (default), resulting in preferredDuringSchedulingIgnoredDuringExecution being used, or to required, resulting in requiredDuringSchedulingIgnoredDuringExecution. |
| Security fix | Prevent license keys from appearing in the logs.                                                                                                                                                                                                  |
| Change       | Fixed a race condition when deleting a PVC and a pod which prevented the operator from creating a new pod.                                                                                                                                        |
| Change       | Fixed a race condition preventing the manager from detecting the need for a PostgreSQL restart on a configuration change.                                                                                                                         |
| Change       | Fixed a panic in kubectl-cnp on clusters without annotations.                                                                                                                                                                                     |
| Change       | Lowered the level of some log messages to debug.                                                                                                                                                                                                  |
| Change       | E2E tests for server CA and TLS injection.                                                                                                                                                                                                        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
