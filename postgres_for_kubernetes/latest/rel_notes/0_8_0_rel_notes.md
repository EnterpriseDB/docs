---
title: EDB Postgres for Kubernetes 0.8 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/0_8_0_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 0.8 release notes

Released: 29 Jan 2021

| Type    | Description                                                                         |
| ------- | ----------------------------------------------------------------------------------- |
| Feature | Upgraded API version to v1.                                                         |
| Feature | Implement node affinity via `nodeSelector`.                                         |
| Feature | Activate `AntiAffinity` by default.                                                 |
| Feature | Remove completed `Jobs` from the cluster.                                           |
| Feature | Upgrade controller-runtime to v0.8.1.                                               |
| Change  | Build container images using schema version 2.                                      |
| Change  | Enhance E2E tests by covering more cases, robustness, and reliability improvements. |
| Fix     | Bug fixes and code improvements.                                                    |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
