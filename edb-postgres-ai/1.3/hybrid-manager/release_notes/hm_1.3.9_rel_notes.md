---
title: Hybrid Manager 1.3.9 release notes
description: Release notes for version 1.3.9 of Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/release_notes/hm_1.3.9_rel_notes/
lastModified: 2026-06-04T13:44:24-04:00
---

# Hybrid Manager 1.3.9 release notes

**Release date:** June 2, 2026

Hybrid Manager (HM) 1.3.9 is a maintenance release that includes bug fixes.

| Type         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Bug fix      | Loki log retention policies weren't being enforced, as previously, logs declared with retention periods in the configuration were being retained indefinitely in object storage because the compactor retention feature was disabled by default. The compactor now properly enforces configured retention periods for control plane and vcluster deployments.                                                                                                                                                                                                                                    |
| Security;fix | Updated the CloudNativePG operator to version 1.28.3 to address security vulnerabilities in the operator. This update includes fixes for critical and high-severity vulnerabilities that could affect cluster security.  Specifically, the fixes include a security vulnerability in the metrics exporter that allows the potential for a privilege escalation to PostgreSQL superuser and remote code execution on the operating system.. See `CVE-2026-44477` / [`GHSA-423p-g724-fr39`](https://github.com/cloudnative-pg/cloudnative-pg/security/advisories/GHSA-423p-g724-fr39) for details. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
