---
title: Monitoring a migration
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/snippet_sources/11_monitoring_migration/monitoring_migration/
lastModified: 2026-07-23T17:52:58+02:00
---

# Monitoring a migration

After creating a data migration with the Hybrid Manager (HM), you can monitor the migration progress through the HM console.

## Access the migration details page

1. In the HM console, select the project from which you started the data migration.

2. Within your project, select **Migrate** > **Migrations**.

3. Select the migration you want to monitor from the migrations table list.

   This opens **Overview**, **Tables** and **Error history** tabs.

## Monitor the progress of your migration

On the **Migrations** page, you can see a summary of all migrations in the project. The **Migration progress** column on this page displays three metrics for each migration:

- **Total number of tables** — The total number of tables included in this migration.

- **Snapshot tables completed** — The number of tables that have finished the snapshot stage.

- **Migrated rows** — The cumulative number of rows that have been migrated across all tables in this migration.

When you select a migration from the list, a migration details page is displayed where you can further monitor the progress of your migration using the following tabs:

1. Select the **Overview** tab to see the current state of your migration.

   If you selected the **Snapshot + Streaming** option, your migration is caught up when the current status is **Streaming**.

   If you selected the **Snapshot** option, your migration is finished when the status is **Completed**.

   In this tab you can also view general information about the source and destination databases.

2. Select the **Tables** tab to see more information about all the tables selected for the migration.

   For each table, view the source and destination table and schema names, the snapshot status, the number of mapped columns and migrated rows, as well as the migration rate (for ongoing migrations) and snapshot status.

   To view the detailed column-level mapping from the source to the destination, select the **+** icon to expand the table.

3. Select the **Error history** tab to see all errors the DMS has logged for this migration.

   To troubleshoot a failed or stuck migration, look for active errors. The summarized error message and error source can indicate where to start troubleshooting. Additionally, you can select the **i** information icon to open the full error log.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
