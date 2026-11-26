---
title: EDB Postgres for Kubernetes 1.9.2 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/1_9_2_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 1.9.2 release notes

Released: 15 Oct 2021

This release of EDB Postgres for Kubernetes includes the following:

| Type    | Description                                                                                                                              |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Feature | Enhance JSON log with two new loggers: wal-archive for PostgreSQL's archive\_command, and wal-restore for restore\_command in a standby. |
| Bug fix | Enable WAL archiving during the standby promotion (prevented .history files from being archived).                                        |
| Bug fix | Pass the --cloud-provider option to Barman Cloud tools only when using Barman 2.13 or higher to avoid errors with older operands.        |
| Bug fix | Wait for the pod of the primary to be ready before triggering a backup.                                                                  |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
