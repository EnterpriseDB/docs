---
title: Finalizing a streaming data migration
description: Finalize streaming migration when you're ready to perform the cutover.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/finalizing_migration/
lastModified: 2025-11-28T14:25:26+01:00
---

# Finalizing a streaming data migration

If you selected the [**Snapshot + Streaming**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/terminology/#snapshot--streaming-migration) option when creating a migration, the EDB DMS agent continues to stream any data updates performed on the source database to the destination database until you mark the migration as completed (for example, to perform a cutover).

If you selected the [**Snapshot**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/terminology/#snapshot-migration) option, you can skip this page, as the DMS marks the migration as completed after it finishes copying the entire snapshot to the destination.

## Stop the streaming process

This process applies only to [**Snapshot + Streaming**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/terminology/#snapshot--streaming-migration) migrations.

It's important that you carefully select the best time to stop the data migration stream. Ensure no new inserts are executed in the source and verify that the last known inserts were synchronized in the destination.

After checking that your data is present in the destination database, you can stop the stream by marking the migration as completed.

1. In the Hybrid Manager (HM) console, in your project, select **Migrate > Migrations**.

2. Select the checkmark next to your migration to mark the migration as completed.

   Alternatively, select the migration from the list to open the [Migration details page](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migrations/migration_database_details_view/). Then select **Mark as Completed**.

This stops the streaming procedure.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
