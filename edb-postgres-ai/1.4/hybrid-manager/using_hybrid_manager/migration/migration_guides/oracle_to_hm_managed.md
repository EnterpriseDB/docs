---
title: Migrate your Oracle database to an HM-managed database
description: End-to-end guide for migrating an Oracle database to an HM-managed EDB Postgres Advanced Server cluster using the EDB Postgres AI agent and EDB DMS agent.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/
lastModified: 2026-07-23T19:28:07Z
---

# Migrate your Oracle database to an HM-managed database

These are the tasks involved in an end-to-end migration from an Oracle database to an EDB Postgres Advanced Server cluster managed by Hybrid Manager (HM). The process uses two agents: the EDB Postgres AI agent (`beacon-agent`) to register your Oracle database with HM and ingest schema for assessment and conversion, and the EDB DMS agent (`cdcagent`) to perform the actual data migration.

1. **[Configure your auxiliary machine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/auxiliary_machine/)** — Configure the auxiliary machine that acts as the bridge between your Oracle source and HM. This machine hosts both agents.

2. **[Prepare your Oracle source database](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/preparing_oracle_source/)** — Create a dedicated migration user and configure your Oracle database to support schema ingestion and Change Data Capture (CDC).

3. **[Configure the EDB Postgres AI agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/configuring_beacon_agent/)** — Install and configure the EDB Postgres AI agent to connect your Oracle database to HM. This enables migration assessment and automatic schema DDL extraction for use with Migration Portal.

4. **[Prepare your destination database](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/preparing_destination_database/)** — Set up the HM-managed EDB Postgres Advanced Server cluster that will receive the migrated schema and data.

5. **[Migrate your schema](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/migrating_schema/)** — Use Migration Portal to convert your Oracle DDL to be compatible with EDB Postgres Advanced Server, then import the schema to the destination database before data migration begins.

6. **[Configure the EDB DMS agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/configuring_dms_agent/)** — Configure the EDB DMS agent in reader mode to read changes from your Oracle source for data migration.

7. **[Migrate your data](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/migrating_data/)** — Create and run the data migration in the HM console.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
