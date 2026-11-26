---
title: Using Migration Portal to assess, convert, and migrate Oracle schemas
description: Reference material on using Migration Portal for Oracle schema migrations with Hybrid Manager, supporting the step-by-step migration guides.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/
lastModified: 2026-08-13T16:35:18+02:00
---

# Using Migration Portal to assess, convert, and migrate Oracle schemas

Migration Portal helps you to assess, analyze, convert, and migrate Oracle database schemas to EDB Postgres Advanced Server. It's available as a [web-based service](https://www.enterprisedb.com/docs/migration_portal/latest/) or as an application in Hybrid Manager (HM).

> **Note**
>
> Migration Portal projects also exist for Postgres sources, created automatically by the EDB Postgres AI agent. Since Postgres schemas are already compatible with the destination, no conversion or assessment work is needed — HM passes the schema through as-is. This section covers the Oracle workflow, where you actively use Migration Portal to resolve compatibility issues. See [Postgres schema migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/schema_migration/postgres/) for the Postgres path.

## Hybrid Manager Migration Portal vs web-based Migration Portal

Some features in the HM deployment of Migration Portal are unique or function differently from the web-based version.

### AI Copilot

> **Note**
>
> You must manually enable this feature in Migration Portal in HM. In the web-based version, it's included out-of-the-box.

AI Copilot is an AI-driven chatbot tool that assists you with issues that can occur during the schema assessment and conversion in Migration Portal. It uses third-party AI services and is trained on both EDB's product documentation and support knowledge base to deliver use-case-specific solutions.

The AI Copilot isn't enabled by default in HM.

- To use the AI Copilot for Migration Portal queries, ask the HM administrator to [enable and configure it with the AI/LLM of your organization](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/enabling_migration_copilot/).

- See [AI Copilot](https://www.enterprisedb.com/docs/migration_portal/latest/03_mp_using_portal/mp_ai_copilot/) for more information.

### Project collaboration

> **Note**
>
> The project collaboration feature is available only in the Hybrid Manager Migration Portal.

Migration Portal supports collaborative DDL editing, enabling multiple users in the same HM project to work on the same schema file simultaneously. If another user modifies a DDL you're also editing, your changes will trigger a conflict resolution view. This view displays the other user's update in an **Update** view and your own edit in a **Target** view. You can then select **Use Updated** to adopt the other user's fix or **Reassess** to apply and save your own changes, overwriting the previous update. This approach ensures efficient, concurrent schema compatibility adjustments.

### Portal access

Accessing the Migration Portal interface differs based on the version you're using.

- Access the web-based Migration Portal through the [EDB portal](https://www.enterprisedb.com/accounts/login).

- Access the Migration Portal built into HM from the HM console.

- Use [project-scoped access](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/hm_schema_migration/) to migrate schemas loaded by the EDB Postgres AI agent.

- Use the [user's workspace access](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/external_schema_migration/) to migrate externally provided schemas.

### User permissions and role-based access

- The web-based Migration Portal provides each EDB account with a dedicated workspace, meaning you can't share projects with other users.

- Migration Portal built into HM offers project-scoped, collaborative access. Users with access to a specific HM project gain access to its associated Migration Portal project.

- In HM, Migration Portal user permissions are managed directly through HM. For instance, a user with Viewer permissions can't migrate schemas or reassess DDL.

* [Migration Portal access](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/access_mp/): Reference material on accessing Migration Portal workspaces for database migrations with Hybrid Manager, supporting the step-by-step migration guides.
* [Assessing schemas loaded by agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/hm_schema_migration/): Reference material on assessing schemas for database migrations with Hybrid Manager, supporting the step-by-step migration guides.
* [Assessing external schemas](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/external_schema_migration/): Reference material on assessing schemas for external projects for database migrations with Hybrid Manager, supporting the step-by-step migration guides.
* [Controlling Migration Portal project creation](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/controlling_project_creation/): Reference material on automatic Migration Portal project creation and how to disable or customize this capability, supporting the step-by-step migration guides.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
