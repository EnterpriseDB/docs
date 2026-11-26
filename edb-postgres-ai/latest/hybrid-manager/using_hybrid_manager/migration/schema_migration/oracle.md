---
title: Migrating Oracle schemas
description: Supporting material on resolving compatibility issues and choosing a schema migration approach for Oracle sources, for the step-by-step migration guides.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/oracle/
lastModified: 2026-10-14T11:17:37+02:00
---

# Migrating Oracle schemas

To migrate an Oracle schema in Hybrid Manager (HM), start by resolving compatibility issues in your Migration Portal project. From there, choose how to import the converted schema to the destination database — automatically as part of the data migration (Simplified), or manually beforehand (Manual).

## Prerequisites

- [Register your Oracle database](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/) with HM via the EDB Postgres AI agent. HM creates a Migration Portal project automatically once the agent finishes loading the schema — see [Managing Migration Portal projects](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/hm_schema_migration/) for details, including how to create a project manually if automatic creation didn't happen.

## Resolving compatibility issues

Use the AI Copilot or QuickHelp in Migration Portal to resolve any compatibility issues found during schema assessment. After fixing an object, select **Reassess** — repeat until your schema reaches 100% compatibility.

Migration Portal in HM also tries to fix failed objects automatically with [AI DDL repair](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/#ai-ddl-repair), if your HM administrator enabled the AI Copilot and you accepted its terms of use.

- [Performing a schema assessment](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/mp_schema_assessment/) covers this process in more detail, but it's written for the EDB-hosted Migration Portal, where you create a project and upload a DDL file manually. In HM, your project already exists and the schema is already loaded, so skip straight to reviewing and fixing the flagged objects.

- See [Evaluate an assessment report](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/mp_schema_assessment/#evaluate-an-assessment-report) to understand the compatibility categories in your results.

## Importing the schema

After resolving all compatibility issues, choose how to import the schema to the destination database:

### Simplified (recommended)

Once your schema passes assessment, you're done in Migration Portal — there's nothing to export or import manually. Leave Migration Portal and continue to configuring the EDB Data Migration Service (DMS) agent. When you create the migration, select **Schema and data** as the scope: HM automatically retrieves the converted schema from Migration Portal, applies constraints in the correct order, and reapplies deferred constraints after data migration completes. See [Configuring the EDB DMS agent](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/configuring_dms_agent/).

### Manual

Import the schema into the destination database directly from Migration Portal, then manage constraint ordering yourself.

1. Select **Migrate to**.

2. Select the **Online migration** option — recommended, since Migration Portal connects directly to the destination and imports the schema for you. Select **Offline migration** instead if you'd rather download a SQL script to review or edit — for example, to comment out specific objects — before applying it to the destination yourself.

3. Select the schemas you want to migrate, but clear **Constraints** from the list of objects underneath the database. Select **Next**.

   > **Note**
   >
   > See [Importing schema](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/migrating_schema/#importing-schema) to learn more about why constraints must be disabled and other considerations.

4. In the **Connect to your cluster** page, enter the host name of the database cluster you want to use as a destination.

   > **Note**
   >
   > If you're migrating to an HM-managed database cluster, you can find the read/write host and other connection data from the **Clusters** page. Select your cluster, and then select **Connect**.

5. Select **Next** and wait until the schemas were imported successfully.

6. Connect to the target database cluster and ensure the schemas were migrated.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
