---
title: Migrate your Oracle database to an HM-managed database
description: Learn how to migrate your Oracle database to an HM-managed database.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/
lastModified: 2026-03-17T17:37:45+05:30
---

# Migrate your Oracle database to an HM-managed database

These are the tasks involved in an end-to-end migration from an Oracle database to a database cluster managed by Hybrid Manager (HM).

## Prepare your source database

Preparing your source database for schema ingestion, migration assessment, and subsequent data migration involves creating a dedicated user for both the EDB Postgres AI agent and DMS agent and altering the database configuration to enable replication features.

1. [Prepare your source for schema ingestion](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/agent_preparing_oracle/).

2. [Prepare the source for data migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/preparing_source_oracle_db/).

## Ingest source schema and assess the database

Install and configure the EDB Postgres AI agent with your Oracle database. This process performs a migration assessment to help you scope the effort, complexity, and time required for the migration. Also, the EDB Postgres AI agent extracts schema DDL that you can use to perform schema migrations with the built-in Migration Portal.

1. [Create a machine user for registration with the EDB Postgres AI agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/agent_creating_machine_user/).

2. [Install the EDB Postgres AI agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/agent_installing/).

3. [Configure the EDB Postgres AI agent to register your Oracle database](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/agent_configuring_oracle/).

4. [Run the EDB Postgres AI agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/agent_running/).

5. [Run the EDB Postgres AI agent as a service](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/agent_service/).

6. [Verify the EDB Postgres AI agent has registered your Oracle database and view the migration assessment results](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/agent_verifying_assessment/).

## Create a destination database

Create a cluster in the HM instance to host the destination database.

1. [Create a destination database in HM](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/creating_destination_db/).

## Migrate your schema

Use the Migration Portal integration to handle incompatibilities and transfer your schemas.

1. [Handle constraints for schema migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/handling_schema/).

2. [Migrate schemas using the Migration Portal integration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/migrating_schema/).

## Migrate your data

Execute the data transfer and complete the final cleanup steps.

1. [Create project credentials for the data migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/creating_project_credentials/).

2. [Configure the DMS agent in reader mode for a data migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/configuring_reader/).

3. [Verify your source database appears in the HM console](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/viewing_source/).

4. [Create and perform the data migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/creating_migration/).

5. [Finalize the migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/finalizing_migration/) (for streaming migrations only).

6. [Apply excluded constraints](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/applying_constraints/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
