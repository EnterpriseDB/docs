---
title: Migration Portal
product: Migration Portal
version: 5.2.0
url: https://www.enterprisedb.com/docs/migration_portal/latest/
lastModified: 2026-10-02T10:25:02+02:00
---

# Migration Portal

<div id="index" class="registered_link"></div>

Migration Portal is a web-based service for migrating Oracle database schemas to the EDB Postgres Advanced Server platform. The Migration Portal assesses and analyzes Oracle database schemas and converts:

- Tables
- Sequences
- Constraints
- Indexes (Except LOB indexes and indexes on materialized views)
- Synonyms
- Views
- Materialized views
- DB links
- Types and type body
- Triggers
- Functions
- Procedures
- Packages
- Users
- Roles
- Profiles
- Role and object grants

The Migration Portal produces data definition language (DDL) statements that are compatible with EDB Postgres Advanced Server.

The user-friendly portal interface simplifies the assessment and migration process. Log in to the portal and start the [migration process](https://www.enterprisedb.com/docs/migration_portal/latest/03_mp_using_portal/03_mp_quick_start/).

EnterpriseDB has helped companies migrate their existing database systems to Postgres for years. For more information, see the [EnterpriseDB website](https://www.enterprisedb.com/).

- [Release notes](https://www.enterprisedb.com/docs/migration_portal/latest/01_mp_release_notes/): The Migration Portal documentation describes the latest version of Migration Portal 5.0.
  - [Version 5.2.0](https://www.enterprisedb.com/docs/migration_portal/latest/01_mp_release_notes/mp_5.2.0_rel_notes/)
  - [Version 5.1.0](https://www.enterprisedb.com/docs/migration_portal/latest/01_mp_release_notes/mp_5.1.0_rel_notes/)
  - [Version 5.0.0](https://www.enterprisedb.com/docs/migration_portal/latest/01_mp_release_notes/mp_5.0.0_rel_notes/)
  - [Version 4.14.0](https://www.enterprisedb.com/docs/migration_portal/latest/01_mp_release_notes/mp_4.14.0_rel_notes/)
  - +16 more
- [Supported platforms](https://www.enterprisedb.com/docs/migration_portal/latest/02_supported_platforms/): The Migration Portal supports assessment and migration from Oracle 11g, 12c, 18c, and 19c to EDB Postgres Advanced Server 14, 15, 16, 17, and 18. Migration Portal is supported on the following browsers.
- [Using Migration Portal](https://www.enterprisedb.com/docs/migration_portal/latest/03_mp_using_portal/): Migration Portal allows you to easily migrate your database schema from Oracle to EDB Postgres Advanced Server. You can upload schemas for assessment and get immediate feedback and suggestions. The portal allows you to download assessed DDLs for all objects and create your EDB Postgres database on premises or in the cloud.
  - [Overview of the Migration Portal home page](https://www.enterprisedb.com/docs/migration_portal/latest/03_mp_using_portal/01_mp_overview_home/)
  - [Overview of the Migration Portal Projects page](https://www.enterprisedb.com/docs/migration_portal/latest/03_mp_using_portal/02_mp_overview_project/)
  - [Migration Portal quick start](https://www.enterprisedb.com/docs/migration_portal/latest/03_mp_using_portal/03_mp_quick_start/)
  - [AI Copilot](https://www.enterprisedb.com/docs/migration_portal/latest/03_mp_using_portal/mp_ai_copilot/)
- [Migrating a database](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/): To migrate a database, you must complete the following steps:
  - [Schema extraction](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/01_mp_schema_extraction/)
  - [Schema assessment](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/mp_schema_assessment/)
  - [Schema migration](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/03_mp_schema_migration/)
  - [Data migration](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/04_mp_data_migration/)
- [Known issues, limitations, and notes](https://www.enterprisedb.com/docs/migration_portal/latest/known_issues_notes/): These are the known issues, limitations, and notes for:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
