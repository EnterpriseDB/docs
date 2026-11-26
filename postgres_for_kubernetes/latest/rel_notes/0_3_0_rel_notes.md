---
title: EDB Postgres for Kubernetes 0.3 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/0_3_0_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 0.3 release notes

Released: 25 Sep 2020

| Type        | Description                                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature     | Support for PostgreSQL 13.                                                                                                                              |
| Feature     | Remove `emptyDir` volume storage support.                                                                                                               |
| Feature     | Node maintenance support for PostgreSQL clusters with local storage through the `nodeMaintenanceWindow` parameter.                                      |
| Enhancement | Improve PostgreSQL configuration management through the usage of a dictionary supporting default, required and fixed values.                            |
| Feature     | Use MD5 as authentication method for inter-cluster communication, with automated password creation in a secret.                                         |
| Feature     | Remove need for "trust" authentication method.                                                                                                          |
| Feature     | `spec.postgresql.pg_hba` is now optional, defaulting to MD5 authentication required for communication between Pods and `peer` for in-Pod communication. |
| Feature     | Remove "unusable" annotation support, now PVC can just be removed followed by a deletion of the corresponding Pod.                                      |
| Feature     | Support for license keys, including implicit 30 day trial version.                                                                                      |
| Fix         | Bug fixes and minor improvements.                                                                                                                       |
| Feature     | Update from an earlier version not supported.                                                                                                           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
