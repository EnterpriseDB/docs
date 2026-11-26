---
title: AIDB 5.3.0 release notes
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/release-notes/5/aidb_5.3.0_rel_notes/
lastModified: 2026-04-21T17:25:57+05:30
---

# AIDB 5.3.0 release notes

Released: 04 Dec 2025

AIDB 5.3.0 includes the following enhancements and bug fixes:

| Type        | Description                                                                                                                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | **Metrics access for pg\_monitor role:** The `pg_monitor` role now has read access to AIDB metrics tables, enabling standard PostgreSQL monitoring tooling to collect AIDB metrics without requiring superuser privileges. |
| Enhancement | **Vector index configuration handlers:** Introduced Rust-based PGRX handlers for vector index configuration, improving reliability and performance of vector index management.                                             |
| Enhancement | **Image generation automation:** Automated the process for generating AIDB operand images, streamlining the build and deployment pipeline for AI model containers.                                                         |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
