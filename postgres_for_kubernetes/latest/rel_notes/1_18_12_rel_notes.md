---
title: EDB Postgres for Kubernetes 1.18.12 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/1_18_12_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 1.18.12 release notes

Released: 24 Apr 2024

EDB Postgres for Kubernetes version 1.18.12 is an LTS release of EDB Postgres for Kubernetes; there is no corresponding upstream release of CloudNativePG.

This release of EDB Postgres for Kubernetes includes the following:

| Type        | Description                                                                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | Added upgrade process from 1.18.x LTS to 1.22.x LTS                                                                                                  |
| Enhancement | Documentation for Kubernetes 1.29.x or above ([#3729](https://github.com/cloudnative-pg/cloudnative-pg/pull/3729))                                   |
| Enhancement | Ensure pods with no ownership are deleted during cluster restore ([#4141](https://github.com/cloudnative-pg/cloudnative-pg/pull/4141))               |
| Bug fix     | Properly handle LSN sorting when is empty on a replica ([#4283](https://github.com/cloudnative-pg/cloudnative-pg/pull/4283))                         |
| Bug fix     | Avoids stopping reconciliation loop when there is no instance status available ([#4132](https://github.com/cloudnative-pg/cloudnative-pg/pull/4132)) |
| Bug fix     | Waits for elected replica to be in streaming mode before a switchover ([#4288](https://github.com/cloudnative-pg/cloudnative-pg/pull/4288))          |
| Bug fix     | Allow backup hooks to be called while using Velero backup                                                                                            |
| Bug fix     | Waits for the Restic init container to be completed                                                                                                  |
| Security    | Updated all Go dependencies to fix any latest security issues                                                                                        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
