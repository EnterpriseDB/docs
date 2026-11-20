---
title: Assessing schemas for external projects
description: Reference material on assessing schemas for external projects for database migrations with Hybrid Manager, supporting the step-by-step migration guides.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/external_schema_migration/
lastModified: 2026-07-23T19:28:07Z
---

# Assessing schemas for external projects

Use the [user's workspace](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/access_mp/#project-scoped-workspace-vs-users-workspace) of Migration Portal to assess, convert, and migrate externally provided DDL files for database migrations.

To access the project-scoped workspace of Migration Portal in the scope of Hybrid Manager (HM) migrations that leverage the EDB Postgres AI agent, [access Migration Portal from the detailed view of your registered databases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/hm_schema_migration/).

## Prerequisites

- **Optional:** To facilitate resolving schema incompatibilities in Migration Portal, the HM administrator must [enable and configure the AI Copilot with the AI/LLM of your organization](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/enabling_migration_copilot/).

## Accessing Migration Portal

Use the Launchpad to access Migration Portal.

1. [Access the Launchpad](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hm_overview/using-portal/#launchpad).

2. To open the Migration Portal tab, hover over the **Migration Portal** tile and select **View Service**.

## Next steps

Use Migration Portal to:

- Resolve any incompatibilities and complete the schema conversion.

- [Perform an online or offline migration](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/03_mp_schema_migration/) of the converted schemas to a destination database.

See the [Migration Portal documentation](https://www.enterprisedb.com/docs/migration_portal/latest/03_mp_using_portal/) for recommendations and guidelines on how to use it.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
