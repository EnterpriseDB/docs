---
title: Creating a data migration with Hybrid Manager
description: Create a migration with Hybrid Manager to start moving data.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_hm_managed/creating_migration/
lastModified: 2025-11-28T14:25:26+01:00
---

# Creating a data migration with Hybrid Manager

After you configured the EDB DMS agent (in reader mode) to establish connections to Hybrid Manager (HM), create a migration in the HM console. A migration establishes a sync between the source database and a destination database with the help of EDB DMS.

1. In the HM console, select the project from which you want to manage the migration.

2. In the project, select **Migrate > Migrations**.

3. In the **Migrations** page, select **Create New Migration**.

4. In the **Create OLTP Migration** page, assign a name to the migration.

5. Select the source of the migration. The ID for the EDB DMS agent is listed in the **Source** menu.

6. Select the migration type: [**Snapshot**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/terminology/#snapshot-migration) or [**Snapshot + Streaming**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/terminology/#snapshot--streaming-migration).

7. Under **Destination Type**, select an HM-managed destination database cluster and database for the migration. Then, select **Next**.

8. Select the tables and columns to migrate. Modify the table and column names if needed.

9. Select **Create Migration**.

The HM console displays a new migration.

If you chose the **Snapshot + Streaming** option, the EDB DMS agent is constantly streaming data when the migration displays the **Running** state. Changes to data are replicated from the source to the destination database as long as the migration is running.

> **Note**
>
> The EDB DMS agent in reader mode streams data changes. It doesn't stream changes in the DDL objects.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
