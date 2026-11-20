---
title: EDB Postgres for Kubernetes 1.18.8 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/1_18_8_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 1.18.8 release notes

Released: 08 Nov 2023

EDB Postgres for Kubernetes version 1.8.8 is an LTS release of EDB Postgres for Kubernetes; there is no corresponding upstream release of CloudNativePG.

This release of EDB Postgres for Kubernetes includes the following:

| Type                  | Description                                                                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement           | Enhanced the `status` command of the `cnp` plugin for `kubectl` with progress information on active streaming base backups.                             |
| Enhancement           | Allowed the configuration of `max_prepared_statements` with the pgBouncer `Pooler` resource.                                                            |
| Technical Enhancement | Use extended query protocol for PostgreSQL in the instance manager.                                                                                     |
| Bug fix               | Suspend WAL archiving during a switchover and resume it when it is completed.                                                                           |
| Bug fix               | Ensured that the instance manager always uses `synchronous_commit = local` when managing the PostgreSQL cluster.                                        |
| Bug fix               | Custom certificates for streaming replication user through `.spec.certificates.replicationTLSSecret` are now working.                                   |
| Bug fix               | Set the `k8s.enterprisedb.io/cluster` label to the `Pooler` pods.                                                                                       |
| Change                | Stopped using the `postgresql.auto.conf` file inside PGDATA to control Postgres replication settings, and replace it with a file named `override.conf`. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
