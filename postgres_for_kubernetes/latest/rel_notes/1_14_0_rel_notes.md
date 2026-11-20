---
title: EDB Postgres for Kubernetes 1.14.0 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/1_14_0_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 1.14.0 release notes

Released: 25 Mar 2022

This release of EDB Postgres for Kubernetes includes the following:

| Type             | Description                                                                                                                                                                      |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature          | Natively support Google Cloud Storage for backup and recovery, by taking advantage of the features introduced in Barman Cloud 2.19.                                              |
| Feature          | Improved observability of backups through the introduction of the LastBackupSucceeded condition for the Cluster object.                                                          |
| Feature          | Support update of Hot Standby sensitive parameters: max\_connections, max\_prepared\_transactions, max\_locks\_per\_transaction, max\_wal\_senders, max\_worker\_processes.      |
| Feature          | Add the Online upgrade in progress phase in the Cluster object to show when an online upgrade of the operator is in progress.                                                    |
| Feature          | Ability to inherit an AWS IAM Role as an alternative way to provide credentials for the S3 object storage.                                                                       |
| Feature          | Support for Opaque secrets for Pooler’s authQuerySecret and certificates.                                                                                                        |
| Feature          | Updated default PostgreSQL version to 14.2.                                                                                                                                      |
| Feature          | Add a new command to kubectl cnp plugin named maintenance to set maintenance window to cluster(s) in one or all namespaces across the Kubernetes cluster.                        |
| Container images | Latest PostgreSQL and EDB Postgres Advanced Server containers include Barman Cloud 2.19.                                                                                         |
| Security fix     | Stronger RBAC enforcement for namespaced operator installations with Operator Lifecycle Manager, including OpenShift. OpenShift users are recommended to update to this version. |
| Bug fix          | Allow the instance manager to retry an interrupted pg\_rewind by preserving a copy of the original pg\_control file.                                                             |
| Bug fix          | Clean up stale PID files before running pg\_rewind.                                                                                                                              |
| Bug fix          | Force sorting by key in primary\_conninfo to avoid random restarts with PostgreSQL versions prior to 13.                                                                         |
| Bug fix          | Preserve ServiceAccount changes (e.g., labels, annotations) upon reconciliation.                                                                                                 |
| Bug fix          | Disable enforcement of the imagePullPolicy default value.                                                                                                                        |
| Bug fix          | Improve initDB validation for WAL segment size.                                                                                                                                  |
| Bug fix          | Properly handle the targetLSN option when recovering a cluster with the LSN specified.                                                                                           |
| Bug fix          | Fix custom TLS certificates validation by allowing a certificates chain both in the server and CA certificates.                                                                  |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
