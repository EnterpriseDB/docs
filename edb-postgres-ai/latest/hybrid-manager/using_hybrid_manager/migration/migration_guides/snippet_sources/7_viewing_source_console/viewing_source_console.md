---
title: Viewing source
description: Learn about creating sources to prepare for database migrations to Hybrid Manager.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/snippet_sources/7_viewing_source_console/viewing_source_console/
lastModified: 2026-07-23T17:52:58+02:00
---

# Viewing source

_Sources_ are databases you connect to Hybrid Manager (HM) using the EDB DMS agent in reader mode so you can use them for migrations.

To verify a source was recognized by the EDB DMS agent and is available for a migration:

1. In the HM console, select the project you're using for the current migration.

2. From the left navigation menu, select **Migrate > Sources**.

Each source's view shows the database name, database type (Postgres or Oracle), `cdcagent` ID, the current status, the source type, and more.

## More information

For a description of the available data on this page of the HM console, see [Sources](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migrate/sources/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
