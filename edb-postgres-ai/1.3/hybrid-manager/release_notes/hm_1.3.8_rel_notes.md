---
title: Hybrid Manager 1.3.8 release notes
description: Release notes for version 1.3.8 of Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/release_notes/hm_1.3.8_rel_notes/
lastModified: 2026-05-14T09:09:13-04:00
---

# Hybrid Manager 1.3.8 release notes

**Release date:** May 14, 2026

Hybrid Manager (HM) 1.3.8 is a maintenance release that includes bug fixes.

| Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bug fix | Added support for replicating PostgreSQL `DOMAIN` types based on `DATE`, `TIME`, `TIMESTAMP`, `INTERVAL`, `UUID`, `JSON`, `XML`, and `POINT` types. `DOMAIN` types are user-defined types that wrap existing PostgreSQL types with additional constraints. Both snapshot and Change Data Capture (CDC) replication modes now correctly handle these `DOMAIN` types, whether the target uses the same `DOMAIN` or just the underlying base type. |
| Bug fix | Thanos Ruler used the default Kubernetes service account. It now uses a dedicated service account.                                                                                                                                                                                                                                                                                                                                              |
| Bug fix | Alertmanager used the default Kubernetes service account. It now uses a dedicated service account.                                                                                                                                                                                                                                                                                                                                              |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
