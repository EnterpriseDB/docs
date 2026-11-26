---
title: Migrate your self-managed Postgres database to a different self-managed Postgres database
description: End-to-end guide for migrating a self-managed Postgres database to another self-managed Postgres database using the EDB Postgres AI agent and EDB DMS agent.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/
lastModified: 2026-07-23T17:52:58+02:00
---

# Migrate your self-managed Postgres database to a different self-managed Postgres database

These are the tasks involved in an end-to-end migration from a self-managed Postgres database to a different self-managed Postgres database using the Data Migration Service (DMS) of Hybrid Manager (HM). Because the destination isn't HM-managed, this migration requires two DMS agent instances: a reader to stream changes from the source, and a writer to apply them to the destination.

1. **[Configure your auxiliary machine](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/auxiliary_machine/)** — Configure the machine that hosts both migration agents. This machine acts as the bridge between your Postgres source and HM.

2. **[Prepare your source Postgres database](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/preparing_source_pg/)** — Create the required users and configure your Postgres database for schema ingestion with the EDB Postgres AI agent and data migration with the DMS reader agent.

3. **[Configure the EDB Postgres AI agent](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/agent_postgres/)** — Connect the agent to your source database and to HM to enable schema ingestion and migration assessment.

4. **[Prepare a destination database](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/creating_destination_db/)** — Create a self-managed Postgres database and configure it with SSL and a CDC migration role to receive the migrated data.

5. **[Migrate your schema](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/migrating_schema/)** — Choose between the simplified path, where HM handles schema migration and constraint ordering automatically, or the manual path, where you export, prepare, and import the schema yourself.

6. **[Configure the EDB DMS agent](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/configuring_dms_agent/)** — Create migration credentials, configure the reader agent for your source and the writer agent for your destination, and verify both appear in HM.

7. **[Migrate your data](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/migrating_data/)** — Create and run the data migration in the HM console, monitor its progress, finalize streaming, and apply post-migration constraints.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
