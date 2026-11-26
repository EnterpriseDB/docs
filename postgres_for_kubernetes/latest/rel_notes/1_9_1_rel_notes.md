---
title: EDB Postgres for Kubernetes 1.9.1 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/1_9_1_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 1.9.1 release notes

Released: 30 Sep 2021

This release of EDB Postgres for Kubernetes includes the following:

| Type    | Description                                                                                                                                                           |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature | This release is to celebrate the launch of PostgreSQL 14 by making it the default major version when a new Cluster is created without defining a specific image name. |
| Bug fix | Fix issue causing Error while getting barman endpoint CA secret message to appear in the logs of the primary pod, which prevented the backup to work correctly.       |
| Bug fix | Properly retry requesting a new backup in case of temporary communication issues with the instance manager.                                                           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
