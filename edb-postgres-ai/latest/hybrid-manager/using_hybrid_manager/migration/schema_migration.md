---
title: Migrating schemas
description: Supporting material on schema migration concepts and tools for Oracle and Postgres sources, for the step-by-step migration guides.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/
lastModified: 2026-10-14T11:17:37+02:00
---

# Migrating schemas

Schema migration is an essential step in database migrations — your schema must be present on the destination database before data migration begins. Hybrid Manager (HM) supports two approaches, regardless of your source database type:

- **Simplified (recommended)**: Once your source database is registered with HM through the EDB Postgres AI agent, HM manages schema migration and constraint ordering for you automatically as part of the data migration. Select **Schema and data** as the migration scope when creating the migration.

- **Manual**: Export and import the schema yourself, and handle constraint ordering based on the key structure of each source table.

The tools involved in each approach — and the amount of manual work required — still depend on your source database, since Oracle schemas require conversion and Postgres schemas don't. Every registered database also gets a Migration Portal project automatically, used to track the schema and, for Oracle, convert it — see [Migration Portal in HM](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/) below for managing that project.

## Migrating by source database

- [Migrating Oracle schemas](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/oracle/) — resolve compatibility issues in Migration Portal, then choose the Simplified or Manual import path.

- [Migrating Postgres schemas](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/postgres/) — no conversion needed; choose the Simplified or Manual import path. Postgres refers to all distributions supported by HM: PostgreSQL, Enterprise Postgres (PGE), and Enterprise Postgres Oracle compatible (EPAS).

- [Migrating roles, ownership, and privileges](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/migrating_roles_and_privileges/) — for Postgres-to-Postgres migrations to a self-managed destination, optionally migrate the source cluster's roles, object ownership, privileges, and row-level security policies too.

## Migration Portal in HM

Use these topics to manage the Migration Portal project created for your database, regardless of source type:

- [Using Migration Portal in HM](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/) — features unique to HM, including AI DDL repair and project collaboration.
- [Accessing Migration Portal](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/access_mp/) — the difference between the project-scoped and user's workspaces.
- [Managing Migration Portal projects](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/hm_schema_migration/) — create, view, or delete a Migration Portal project.
- [Managing Migration Portal projects for external schemas](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/external_schema_migration/) — assess externally provided DDL files outside the EDB Postgres AI agent workflow.
- [Controlling Migration Portal project creation](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/controlling_project_creation/) — customize or disable automatic project creation.

* [Migrating Oracle schemas](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/oracle/): Supporting material on resolving compatibility issues and choosing a schema migration approach for Oracle sources, for the step-by-step migration guides.
* [Migrating Postgres schemas](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/postgres/): Supporting material on Simplified (HM-managed) and Manual schema migration options for Postgres sources, for the step-by-step migration guides.
* [Migrating roles and privileges](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/migrating_roles_and_privileges/): Optionally migrate the source cluster's roles, object ownership, privileges, and row-level security policies during a Postgres-to-Postgres schema migration to a self-managed destination.
* [Migration Portal in HM](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/): Supporting material on Migration Portal features, access modes, and project management for Oracle and Postgres schema migrations with Hybrid Manager.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
