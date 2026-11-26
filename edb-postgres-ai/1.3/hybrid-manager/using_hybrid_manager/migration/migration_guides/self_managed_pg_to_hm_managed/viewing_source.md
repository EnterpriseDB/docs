---
title: Verifying your source appears in the HM console
description: Go to the Hybrid Manager console and verify if your source database is listed as a source for migrations.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_hm_managed/viewing_source/
lastModified: 2025-11-28T14:25:26+01:00
---

# Verifying your source appears in the HM console

_Sources_ are databases you connect to Hybrid Manager (HM) using the EDB DMS agent in reader mode so you can use them for migrations.

To verify a source was recognized by the EDB DMS agent and is available for a migration:

1. In the HM console, select the project you're using for the current migration.

2. From the left navigation menu, select **Migrate > Sources**.

Each source's view shows the database name, database type (Postgres or Oracle), `cdcagent` ID, the current status, the source type, and more.

## More information

For a description of the available data on this page of the HM console, see [Sources](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migrate/sources/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
