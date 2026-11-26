---
title: EDB Postgres for Kubernetes 1.3.0 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/1_3_0_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 1.3.0 release notes

Released: 23 Apr 2021

This release of EDB Postgres for Kubernetes includes the following:

| Type         | Description                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Feature      | Inheritance of labels and annotations.                                                                                                           |
| Feature      | Set resource limits for every container.                                                                                                         |
| Security fix | Support for restricted security context constraint on Red Hat OpenShift to limit pod execution to a namespace allocated UID and SELinux context. |
| Security fix | Pod security contexts explicitly defined by the operator to run as non-root, non-privileged and without privilege escalation.                    |
| Change       | Prometheus exporter endpoint listening on port 9187 (port 8000 is now reserved to instance coordination with API server).                        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
