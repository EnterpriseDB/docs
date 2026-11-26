---
title: EDB Postgres for Kubernetes 1.7.0 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/1_7_0_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 1.7.0 release notes

Released: 28 Jul 2021

This release of EDB Postgres for Kubernetes includes the following:

| Type         | Description                                                                                                                                                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature      | Add native support to PGAudit with a new type of logger called pgaudit directly available in the JSON output.                                                                                                                    |
| Feature      | Native support for the pg\_stat\_statements and auto\_explain extensions.                                                                                                                                                        |
| Feature      | The target\_databases option in the Prometheus exporter to run a user-defined metric query on one or more databases (including auto-discovery of databases through shell-like pattern matching).                                 |
| Feature      | Exposure of the manual\_switchover\_required metric to promptly report whether a cluster with primaryUpdateStrategy set to supervised requires a manual switchover.                                                              |
| Feature      | Transparently handle shared\_preload\_libraries for pg\_audit, auto\_explain and pg\_stat\_statements.                                                                                                                           |
| Feature      | Automatic configuration of shared\_preload\_libraries for PostgreSQL when pg\_stat\_statements, pgaudit or auto\_explain options are added to the postgresql parameters section.                                                 |
| Feature      | Support the k8s.enterprisedb.io/reload label to finely control the automated reload of config maps and secrets, including those used for custom monitoring/alerting metrics in the Prometheus exporter or to store certificates. |
| Feature      | Add the reload command to the cnp plugin for kubectl to trigger a reconciliation loop on the instances.                                                                                                                          |
| Feature      | Improve control of pod affinity and anti-affinity configurations through additionalPodAffinity and additionalPodAntiAffinity.                                                                                                    |
| Feature      | Introduce a separate PodDisruptionBudget for primary instances, by requiring at least a primary instance to run at any time.                                                                                                     |
| Security fix | Add the .spec.certificates.clientCASecret and spec.certificates.replicationTLSSecret options to define custom client Certification.                                                                                              |
| Security fix | Authority and certificate for the PostgreSQL server, to be used to authenticate client certificates and secure communication between PostgreSQL nodes.                                                                           |
| Security fix | Add the .spec.backup.barmanObjectStore.endpointCA option to define the custom Certification Authority bundle of the endpoint of Barman’s backup object store.                                                                    |
| Bug fix      | Correctly parse histograms in the Prometheus exporter.                                                                                                                                                                           |
| Bug fix      | Reconcile services created by the operator for a cluster.                                                                                                                                                                        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
