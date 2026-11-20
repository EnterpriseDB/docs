---
title: Viewing destination
description: Verify your destination is displayed in the Hybrid Manager (HM) console so you can perform migrations to it using HM.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/snippet_sources/9_viewing_destination/viewing_destination_console/
lastModified: 2026-03-17T01:01:27Z
---

# Viewing destination

_Destinations_ are databases you connected to Hybrid Manager (HM) using the EDB DMS agent in writer mode so you can use them for migrations.

To verify a destination was recognized by the EDB DMS agent and is available for a migration:

1. In the HM console, select the project you're using for the current migration.

2. From the left navigation menu, select **Migrate > Destinations**.

Each destinations's view shows the database name, database type, `cdcagent` ID, the current status, the destination type, and more.

## More information

For a description of the available data on this page of the HM console, see [Destinations](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migrate/destinations/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
