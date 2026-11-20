---
title: Migrate your self-managed Postgres database to a different self-managed Postgres database
description: Learn how to migrate your self-managed Postgres database to a different self-managed Postgres database.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/
lastModified: 2026-03-17T17:37:45+05:30
---

# Migrate your self-managed Postgres database to a different self-managed Postgres database

These are all the steps you need to perform a migration from a self-managed Postgres database to a different self-managed Postgres database using the data migration service (DMS) of Hybrid Manager (HM).

## Prepare your source database

Prepare your source database for data migration. This involves creating a dedicated user for the migration and altering the database configuration to enable replication features.

1. [Prepare the source Postgres database](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/preparing_source_pg_db/).

## Assess the database (optional)

Install and configure the EDB Postgres AI agent with your database to obtain observability and monitoring data for your Postgres database. This optional step also provides high-level migration metrics, like schema count and names, table count, and object count.

1. [Configure the EDB Postgres AI agent to assess your database](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/agent_postgres/).

## Prepare your destination database

Create a server to host the destination database. Then, alter the destination database's configuration to to enable replication features.

1. [Create a destination database in your server](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/creating_destination_db/).

2. [Prepare the destination Postgres database](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/preparing_destination_selfpg_db/).

## Migrate your schema

Handle incompatibilities and transfer your schemas.

1. [Handling constraints for schema migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/handling_schema/).

2. [Migrating schemas](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/migrating_schema/).

## Migrate your data

Execute the data transfer and complete the final cleanup steps.

1. [Create project credentials for the data migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/creating_project_credentials/).

2. [Configure a DMS agent in reader mode for a data migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/configuring_reader/).

3. [Verify your source database appears in the HM console](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/viewing_source/).

4. [Configure a DMS Agent in writer mode for a data migration to a self-managed Postgres database](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/configuring_writer/).

5. [Verify your destination appears in the HM console](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/viewing_destination_console/).

6. [Create and perform the data migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/creating_migration/).

7. [Finalize the migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/finalizing_migration/) (for streaming migrations only).

8. [Apply excluded constraints](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/applying_constraints/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
