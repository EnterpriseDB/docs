---
title: Verifying your Oracle database was assessed for migration
description: Verify the Oracle database was assessed for migration by Hybrid Manager (HM) through the EDB Postgres AI agent.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/agent_verifying_assessment/
lastModified: 2026-04-08T17:27:59+05:30
---

# Verifying your Oracle database was assessed for migration

To verify the Oracle database was recognized by the EDB Postgres AI agent and is available for assessment, on the HM console, select **Estate** and then select **Migrations**.

If the database appears in the table, you have access to the following resources:

- A migration assessment, which provides a summarized view of database schema count, core count, migration complexity, and level of effort. It's available on the [**Migrations** tab](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migrate/migrations/) of the **Estate** page.

- A migration database [detailed view](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migrations/migration_database_details_view/), which provides an expanded analysis of schemas, a global and more detailed assessment, as well as a **Migrations** hub that provides direct connections to other tools in the HM console that can help you perform migrations. These resources are available when you select a specific Oracle database from the **Migrations** tab of the **Estates** page.

- Automatic schema DDL extraction that you can leverage to perform schema migrations with the built-in Migration Portal.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
