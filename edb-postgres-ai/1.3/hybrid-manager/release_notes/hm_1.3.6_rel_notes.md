---
title: Hybrid Manager 1.3.6 release notes
description: Release notes for version 1.3.6 of Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/release_notes/hm_1.3.6_rel_notes/
lastModified: 2026-03-12T14:12:50+01:00
---

# Hybrid Manager 1.3.6 release notes

**Release Date:** March 12, 2026

Hybrid Manager 1.3.6 is a maintenance release that includes bug fixes and stability updates.

| Type        | Description                                                                                                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Change      | Added support for more recent PostgreSQL minor versions (17.9 and 16.13) and removed support for PostgreSQL 15.                                                               |
| Deprecation | The GenAI Builder tool has been updated to use LangFlow as its orchestration engine. Support for the previous Griptape-based integration has been terminated.                 |
| Bug fix     | Fixed an issue where API requests to the **Estate** endpoint failed with a 431 error due to excessively large request headers when processing estates with numerous projects. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
