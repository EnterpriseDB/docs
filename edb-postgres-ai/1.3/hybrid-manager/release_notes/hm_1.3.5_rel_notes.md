---
title: Hybrid Manager 1.3.5 release notes
description: Release notes for version 1.3.5 of Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/release_notes/hm_1.3.5_rel_notes/
lastModified: 2026-03-17T17:37:45+05:30
---

# Hybrid Manager 1.3.5 release notes

**Release Date:** February 12, 2026

Hybrid Manager 1.3.5 is a maintenance release that includes bug fixes and stability updates.

| Type    | Description                                                                                                                                                                                                                                                            |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bug fix | Resolved various upstream stability issues in Spark Connect by upgrading to version 3.5.8. This update incorporates critical fixes and stability improvements into HM Analytics to improve platform performance.                                                       |
| Bug fix | Fixed an issue where replicas could fail to start after a system database major version upgrade. The system now correctly differentiates between WAL files from the old and new timelines in object storage, preventing startup crashes caused by timeline divergence. |
| Bug fix | The internal statistics database (`stats-db`) no longer performs backups. This change optimizes storage and resource usage, as the telemetry data stored here is transient and not critical for Disaster Recovery.                                                     |
| Bug fix | The statistics collector has been patched to properly decode `query_text`, ensuring compatibility and reliable metric collection across different versions of the EDB Postgres AI agent.                                                                               |

<br/>

> **Note: \* Postgres refers to all distributions supported by EDB:**
>
> - PostgreSQL
> - EDB Enterprise Postgres - formerly EDB Postgres Extended Server (PGE)
> - EDB Enterprise Postgres (Oracle Compatible) - formerly EDB Postgres Advanced Server (EPAS)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
