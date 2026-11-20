---
title: EDB Postgres for Kubernetes 1.18.6 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/1_18_6_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 1.18.6 release notes

Released: 27 Jul 2023

This release of EDB Postgres for Kubernetes includes the following:

| Type         | Description                                                                                                                    |   |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ | - |
| Enhancement  | Added a metric and status field to monitor node usage by an EDB Postgres for Kubernetes cluster.                               |   |
| Enhancement  | Added troubleshooting instructions relating to hugepages to the documentation.                                                 |   |
| Enhancement  | Extended the FAQs page in the documentation.                                                                                   |   |
| Enhancement  | Added a check at the start of the restore process to ensure it can proceed; give improved error diagnostics if it cannot.      |   |
| Bug fix      | Ensured the logic of setting the recovery target matches that of Postgres.                                                     |   |
| Bug fix      | Prevented taking over service accounts not owned by the cluster by setting ownerMetadata only during service account creation. |   |
| Bug fix      | Prevented a possible crash of the instance manager during the configuration reload.                                            |   |
| Bug fix      | Prevented the LastFailedArchiveTime alert from triggering if a new backup has been successful after the failed ones.           |   |
| Security fix | Updated all project dependencies to the latest versions                                                                        |   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
