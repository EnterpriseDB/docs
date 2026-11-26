---
title: Migration assessment support
description: Databases that can be assessed for migration EDB Postgres AI capabilities.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migrations/compatibility/
lastModified: 2026-08-13T16:35:17+02:00
---

# Migration assessment support

After registering a self-managed database with the EDB Postgres AI agent, HM generates a migration assessment. Assessments are currently supported for the following database versions.

> **Note**
>
> Currently, the Postgres assessments offer a high-level migration overview. A more detailed analysis is available for Oracle databases.

## Oracle

- Oracle 11g
- Oracle 12c
- Oracle 18c
- Oracle 19c
- Oracle 21c (\*)

Later versions (for example, 23c) might also be assessed, but they aren't yet fully certified.

> **Note**
>
> (\*) Assessment support for Oracle 21c covers multivalue indexes, `ANY_VALUE`, and `WINDOW` clause syntax. It flags blockchain tables as an unsupported object type and `SQL_MACRO` as an incompatible construct. Blockchain and immutable tables are both excluded from extraction, so they don't appear in the assessment.

## Postgres

- PostgreSQL 13-18
- EDB Postgres Advanced Server 13-18
- EDB Postgres Extended Server 13-18

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
