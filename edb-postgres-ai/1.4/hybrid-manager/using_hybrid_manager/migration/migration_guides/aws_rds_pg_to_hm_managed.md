---
title: Migrate your AWS RDS/Aurora PostgreSQL database to an HM-managed database
description: End-to-end guide for migrating an AWS RDS or Aurora PostgreSQL database to an HM-managed database cluster using the EDB Postgres AI agent and EDB DMS agent.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/
lastModified: 2026-07-23T19:28:07Z
---

# Migrate your AWS RDS/Aurora PostgreSQL database to an HM-managed database

These are the tasks involved in an end-to-end migration from an AWS RDS for PostgreSQL or Aurora PostgreSQL database to a database cluster managed by Hybrid Manager (HM). The process uses two agents: the EDB Postgres AI agent (`beacon-agent`) to register your database with HM and ingest schema for assessment, and the EDB DMS agent (`cdcagent`) to perform the actual data migration.

1. **[Configure your auxiliary machine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/auxiliary_machine/)** — Configure the machine that hosts both migration agents. This machine acts as the bridge between your AWS RDS or Aurora PostgreSQL source and HM.

2. **[Prepare your source AWS RDS/Aurora PostgreSQL database](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/preparing_source_pg/)** — Create the required users, configure schema extraction permissions, enable logical replication via an AWS DB cluster parameter group, and validate your configuration.

3. **[Configure the EDB Postgres AI agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/agent_postgres/)** — Connect the agent to your source database and to HM to enable schema ingestion and migration assessment.

4. **[Prepare a destination database](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/creating_destination_db/)** — Create or identify the HM-managed database cluster that will receive the migrated schema and data.

5. **[Migrate your schema](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/migrating_schema/)** — Choose between the simplified path, where HM handles schema migration and constraint ordering automatically, or the manual path, where you export, prepare, and import the schema yourself.

6. **[Configure the EDB DMS agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/configuring_dms_agent/)** — Create migration credentials, configure the DMS agent in reader mode to read changes from your AWS RDS or Aurora PostgreSQL source, and verify the source appears in HM.

7. **[Migrate your data](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/migrating_data/)** — Create and run the data migration in the HM console, monitor its progress, finalize streaming, and apply post-migration constraints.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
