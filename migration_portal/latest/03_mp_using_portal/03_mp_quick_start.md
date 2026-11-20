---
title: Migration Portal quick start
product: Migration Portal
version: 5.2.0
url: https://www.enterprisedb.com/docs/migration_portal/latest/03_mp_using_portal/03_mp_quick_start/
lastModified: 2026-05-27T09:05:38+02:00
---

# Migration Portal quick start

To migrate Oracle schemas using Migration Portal:

1. Generate a `.sql` file with metadata information of your schemas. For more information, see [Performing a schema extraction](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/01_mp_schema_extraction/).

2. Log in to [Migration Portal](https://migration.enterprisedb.com/) with your EDB credentials.

3. Create a new project.

4. Upload the `.sql` file with your schema metadata.

   > **Note**
   >
   > Uploading large DDL files might freeze or crash the browser (depending on the browser and the system resources in use). In this scenario, try running Migration Portal in a different browser or extracting fewer schemas and uploading that file into Migration Portal.

5. Select **Create & assess**.
   Migration Portal reviews every construct, executes repair actions to improve compatibility with EDB Postgres Advanced Server, and flags any remaining errors that require manual intervention.

6. Verify the DDL objects, for example, TABLES that don't show a 100% success ratio.

7. Select the objects that aren't compatible with EDB Postgres Advanced Server.

8. To look up and understand possible workarounds for the objects that aren't compatible in EDB Postgres Advanced Server, refer to the Knowledge Base or interact with [AI Copilot](https://www.enterprisedb.com/docs/migration_portal/latest/03_mp_using_portal/mp_ai_copilot/).

   > **Important**
   >
   > Ensure you test all suggested solutions to confirm the converted schemas behave as expected.

9. Make the required changes and select **Reassess** to rerun the analysis.

10. After resolving errors in your schemas, you can download the modified EDB compatible DDL file and use any client application such as pgAdmin or PSQL client and migrate the schema to EDB Postgres Advanced Server. You can also migrate to EDB Postgres Advanced Server on the cloud. For more information, see [Schema migration](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/03_mp_schema_migration/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
