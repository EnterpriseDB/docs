---
title: EDB Postgres AI Migration and ETL
description: About the migration and ETL tools that feed the EDB Postgres AI platform.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/migration-etl/
lastModified: 2025-10-10T16:33:05Z
---

# EDB Postgres AI Migration and ETL

Moving your data to Postgres is a challenge that EDB Postgres AI is built to solve. The EDB Postgres AI platform includes a set of tools that help you migrate your data to Postgres and keep it up-to-date.

The available migration tools are suitable for different migration scenarios. The tool you use depends on the source database, the target database and the migration scenario.

## EDB Data Migration Service

[EDB Data Migration Service](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/) is a cloud-based, Hybrid Manager service that helps you migrate your data, either with **Snapshot** or **Snapshot + Streaming** capabilities.

EDB DMS offers a secure and fault-tolerant way to migrate database data using change data capture and event streaming technologies. This allows the migration to stream any changes in the source database to the destination database until you decide to cut over.

At the end of a data migration with EDB DMS, the data in your source database will have been copied to a Postgres database.

### Migration scenarios

**To HCP-managed databases**

- **Purpose:** Migration of database data to an HCP-managed Postgres database

- **Applicable migration scenarios:** From Oracle, PostgreSQL or EDB Postgres Advanced Server to EDB Postgres AI Hybrid Manager databases with PostgreSQL, EDB Postgres Advanced Server or EDB Postgres Extended Server

\*\* To self-managed Postgres databases\*\*

Alternatively, you can use the EDB Data Migration Service to migrate either HCP-managed databases or other external, self-managed databases to a different Postgres destination database outside of the Hybrid Manager.

- **Purpose:** Migration of database data to a self-managed Postgres database

- **Applicable migration scenarios:** From HCP-managed or self-managed databases running on Oracle, PostgreSQL or EDB Postgres Advanced Server to self-managed instances of PostgreSQL, EDB Postgres Advanced Server or EDB Postgres Extended Server

## EDB Postgres AI Migration Portal

[EDB Postgres AI Migration Portal](https://www.enterprisedb.com/docs/migration_portal/latest/) is a web-based tool that helps you assess and analyze Oracle database schemas and convert them to EDB Postgres Advanced Server.

EDB Postgres® AI Migration Portal offers an [AI copilot](https://www.enterprisedb.com/docs/migration_portal/latest/03_mp_using_portal/mp_ai_copilot/) to assist users who are migrating their databases to EDB Postgres Advanced Server.

- **Purpose:** Conversion and import of schemas

- **Applicable migration scenarios:** From Oracle to EDB Postgres Advanced Server

## EDB Postgres AI Migration Toolkit

[EDB Postgres Migration Toolkit](https://www.enterprisedb.com/docs/migration_toolkit/latest/) is a a tool that help you migrate database objects and data at a granular level from non-EDB databases to EDB Postgres.

- **Purpose:** Migration of database objects and data, includes options for more granular control of the process.

- **Applicable migration scenarios:** From Oracle, MySQL, Microsoft SQL Server, Sybase Adaptive Server Enterprise or Postgresql to EDB Postgres Advanced Server or PostgreSQL.

## EDB Postgres AI Replication Server

[EDB Postgres Replication Server](https://www.enterprisedb.com/docs/eprs/latest/) is a tool that replicates data between Postgres databases, or from non-Postgres databases to Postgres databases, for asynchronous data replication as part of a migration.

- **Purpose:** Ongoing data synchronization

- **Applicable migration scenarios:** A number of combinations from and to Oracle, SQL Server, PostgreSQL, EDB Postgres Advanced Server. See [Introduction](https://www.enterprisedb.com/docs/eprs/latest/01_introduction/) for an overview of possible replication scenarios.

## EDB Postgres AI LiveCompare

[LiveCompare](https://www.enterprisedb.com/docs/livecompare/latest/) is a utility that you can use to compare the data in two databases to verify that they're identical.

You can use it to compare two or several databases, to generate a comparison report with differences, and to generate a DML script thay you can run to fix any inconsistencies.

- **Purpose:** In a migration scenario, you can use LiveCompare to validate that all data was transferred.

- **Applicable migration scenarios:** LiveCompare supports analyzing PostgreSQL, EDB Postgres Extended, EDB Postgres Advanced Server, EDB Postgres Distributed and Oracle databases. See [Supported technologies](https://www.enterprisedb.com/docs/livecompare/latest/supported_technologies/) for a list of supported databases and versions.

## EDB Oracle Migration Handbook

The Oracle Migration Handbook is not a tool or software, but a set of guidelines to help you through your migration journey.

The purpose of the [Migrantion Handbook](https://www.enterprisedb.com/docs/migrating/oracle/) is to help you plan and execute an Oracle to EDB Postgres Advanced Server migration. It identifies and describes the factors to consider when performing a migration, the steps in the migration journey, and the capabilities, tools, and services that EDB provides to help with migrations. It also covers the key similarities and differences between Oracle and EDB Postgres Advanced Server and workarounds for known differences or incompatibilities.

- **Purpose:** Planning and walking you through a migration from Oracle.

- **Applicable migration scenarios:** From Oracle to EDB Postgres Advanced Server

## Other tools and services

Additionally, EDB offers other tools that can be helpful in your migration journey, for example, [EDB\*Plus](https://www.enterprisedb.com/docs/edb_plus/latest/), [Postgres Enterprise Manager](https://www.enterprisedb.com/docs/pem/latest/), [Failover Manager](https://www.enterprisedb.com/docs/efm/latest/), etc. EDB also offers professional services that can help you with the assessment, planning, and execution of your database migrations as well as configuring and optimizing your post migration environment. For an overview of all available tools and services you can use during your migration journey, see [EDB migration software and services](https://www.enterprisedb.com/docs/migrating/oracle/edb_migration_tools/#edb-migration-software-and-services).

- [Migration Portal](https://www.enterprisedb.com/docs/migration_portal/latest/): Migration Portal Version 5.x Documentation and release notes. Migration Portal converts Oracle database schemas to EDB Postgres Advanced Server online.
- [Migration Toolkit](https://www.enterprisedb.com/docs/migration_toolkit/latest/): EDB Postgres Migration Toolkit Version 55 Documentation and release notes. EDB Postgres Migration Toolkit helps migrate data from Oracle or any other database to PostgreSQL or EDB Postgres Advanced Server.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
