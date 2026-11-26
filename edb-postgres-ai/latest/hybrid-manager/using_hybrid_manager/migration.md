---
title: Migrating databases with Hybrid Manager
description: Learn how to migrate databases with Hybrid Manager.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/
lastModified: 2026-11-05T19:23:14Z
---

# Migrating databases with Hybrid Manager

Hybrid Manager (HM) provides an integrated solution to perform migrations from external databases into your environment. This capability allows you to bring your existing data, schemas, and applications into a centralized management hub, facilitating easier administration and monitoring.

For data migration, the migration process primarily leverages the EDB Data Migration Service (DMS). It works with other integrations like the Migration Portal and AI Copilot to offer a comprehensive workflow for assessing, converting, and migrating your databases.

## How do I use migration capabilities in HM?

You perform the migration process using a series of steps that connect your source database and your destination database to the HM console.
To understand the workflow, see [Migration architecture](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/architecture/).

## What kind of migrations does the EDB Data Migration Service support?

The EDB DMS supports migrations from external databases into HM-managed databases, from external databases to other external databases, from HM-managed databases to external databases, and more. To see end-to-end examples of possible migration paths, see [Choosing your migration path](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/).

For supported source and destination databases, see the [support matrix](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/supported_versions/).

For supported migration methods, see [Migration types](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/terminology/#migration-types).

## What kind of technologies does the EDB Data Migration Service use?

DMS is built on Apache Kafka and the open-source Debezium CDC platform. Using change data capture (CDC) and event streaming, source database row changes are replicated to the migration destination.

## Planning

- [Architecture](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/architecture/): Understand the components of the Data Migration Service and how you can leverage them to perform migrations.
- [Terminology](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/terminology/): Learn some basic concepts associated with EDB Data Migration Service.
- [Features](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/features/): See a list of the most important features you can leverage to perform migrations with Hybrid Manager.
- [Compatibility](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/supported_versions/): Verify that your Oracle or Postgres database version is compatible with EDB Data Migration Service.
- [Limitations](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/limitations/): Review unsupported data types and features.
- [Performance considerations](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/specs/): Learn about recommended specifications to improve the performance and speed of database migrations using Hybrid Manager.

## Migrating

- [Choose your migration](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/): Learn how to migrate databases with Hybrid Manager.

## Reference

- [DMS agent compatibility](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/cdcagent_compatibility/): Verify which DMS agent (\`cdcagent\`) version is compatible with your Hybrid Manager version before installing the agent on your auxiliary machine.
- [DMS agent parameters](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/dms_agent_reference/): Learn how to configure parameters for the EDB DMS agent to access the Hybrid Manager instance and connect to source and destination databases.
- [Installing agent](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/installing_agent/): Install and configure EDB DMS Agent with Hybrid Manager versions 1.3 and later. For Hybrid Manager 1.2 and earlier versions, use EDB DMS Reader and EDB DMS Writer.
- [Upgrading agent](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/upgrading_agent/): Check, upgrade, and verify the EDB DMS agent (cdcagent) package on Linux.
- [Migration assessment](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migrations/): Learn about migration assessments that are available through the HM console.
- [Application assessment](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/application_assessment/): Evaluate your Oracle application SQL statements to ensure that SQL queries can be executed by your application after migrating to EPAS.
- [Schema migration](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/): Supporting material on schema migration concepts and tools for Oracle and Postgres sources, for the step-by-step migration guides.
- [Data migration](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migrate/): Learn about data migration-related UI elements and options available to you through the HM Console.
- [Migration API](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_portal_api/): Learn how to use the Migration API from Hybrid Manager's console.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
