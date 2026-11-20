---
title: Migrate your AWS RDS/Aurora PostgreSQL database to an HM-managed database
description: Learn how to migrate your AWS RDS/Aurora PostgreSQL database to an HM-managed database.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/
lastModified: 2026-03-17T17:37:45+05:30
---

# Migrate your AWS RDS/Aurora PostgreSQL database to an HM-managed database

These are all the steps you need to perform a migration from an AWS RDS for PostgreSQL or Aurora PostgreSQL database to a database managed by Hybrid Manager (HM).

## Prepare your source database

Preparing your source database for data migration involves creating a dedicated user for the migration and altering the database configuration to enable the replication features.

1. [Preparing the source AWS RDS/Aurora PostgreSQL database](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/preparing_source_pg_db/).

## Assess the database (optional)

Install and configure the EDB Postgres AI agent with your database to obtain observability and monitoring data for your Postgres database. This optional step also provides high-level migration metrics, like schema count and names, table count, and object count.

1. [Configure the EDB Postgres AI agent to assess your database](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/agent_postgres/).

## Create a destination database

Create a cluster in the HM instance to host the destination database.

1. [Create a destination database in HM](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/creating_destination_db/).

## Migrate your schema

Handle incompatibilities and transfer your schemas.

1. [Handle constraints for schema migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/handling_schema/).

2. [Migrate schemas](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/migrating_schema/).

## Migrate your data

Execute the data transfer and complete the final cleanup steps.

1. [Create project credentials for the data migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/creating_project_credentials/).

2. [Configure the DMS agent in reader mode for a data migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/configuring_reader/).

3. [Verify your source database appears in the HM console](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/viewing_source/).

4. [Create and performing the data migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/creating_migration/).

5. [Finalize the migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/finalizing_migration/) (for streaming migrations only).

6. [Apply excluded constraints](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/applying_constraints/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
