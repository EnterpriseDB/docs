---
title: Migrating data from Oracle to an HM-managed database
description: Create and run an EDB DMS migration, monitor progress, finalize streaming, and apply post-migration constraints. Covers both Schema and data and Data only migration scopes.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/migrating_data/
lastModified: 2026-11-12T14:28:42+01:00
---

# Migrating data from Oracle to an HM-managed database

With the EDB Data Migration Service (DMS) agent running and your schema either imported or ready for Hybrid Manager (HM) to import, you're ready to create a migration in the HM console.

The steps below vary depending on the approach you chose on the previous page. Select the tab that matches your choice.

## Creating a migration

A migration establishes a sync between your Oracle source and a destination database cluster managed by HM.

1. In the HM console, select the project you're using for the migration.

2. Select **Migrate > Migrations**.

3. Select **Create Migration**.

4. Assign a meaningful name to the migration — for example, `oracle-prod-migration`.

5. Select the source of the migration. This corresponds to the `DBCONFIG_ID` you set when configuring the DMS agent.

6. In **Scope**, select the option that matches your approach:

   ### Simplified (recommended)

   Select **Schema and data**. HM imports the converted schema from the resolved Migration Portal project, creates tables without constraints to keep the initial snapshot fast, applies primary key and unique constraints after the snapshot completes (required for exactly-once delivery), and applies the remaining schema either concurrently with streaming (via **Finalize Schema Concurrently**) or automatically in the post-cutover **Schema Finalization** stage. See [Finalizing a streaming migration](#finalizing-a-streaming-migration).

   ### Manual

   Select **Data only**. The schema was already imported to the destination via Migration Portal.

   > **Note**
   >
   > You can use **Schema only** if you want to migrate the database structure without migrating any table data.

7. Select the migration type:
   - [**Snapshot**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/terminology/#snapshot-migration) — copies data once and completes. Use this for a one-time, offline migration.
   - [**Snapshot + Streaming**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/terminology/#snapshot--streaming-migration) — copies an initial snapshot, then continuously streams changes from the source. Use this to minimize downtime.

8. Under **Destination Type**, select **HM-managed Postgres** and select your destination database cluster and database. Then select **Next**.

9. On the **Review your Tables** tab, select the tables and columns to include in the migration. Expand a table and clear the check box next to any column to exclude it from the migration — see [Migrating a subset of columns](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migrate/migrations/#migrating-a-subset-of-columns) for the requirements and limitations.

   You can also [map source columns to different destination column names](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migrate/migrations/#mapping-schema-tables-and-columns-during-a-migration) (**Data only** scope only).

10. Select **Create Migration**.

The HM console displays the [new migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migrate/migrations/#viewing-existing-migrations). If you chose **Snapshot + Streaming**, the EDB DMS agent streams data changes continuously while the migration shows a **Running** state.

> **Note**
>
> The EDB DMS agent streams data changes only — not DDL changes (schema modifications).

## Monitoring progress

### Migration list view

The **Migrations** page shows a summary of all migrations in the project. The **Migration progress** column displays three metrics per migration:

- **Total number of tables** — total tables included in this migration
- **Snapshot tables completed** — tables that have finished the snapshot stage
- **Migrated rows** — cumulative rows migrated across all tables

### Migration details view

Select a migration from the list to open the details page, which has four tabs:

- **Overview** — Shows the current migration state and general information about the source and destination databases. For **Snapshot + Streaming** migrations, the migration is caught up when the status is **Streaming**. For **Snapshot** migrations, it's finished when the status is **Completed**.

- **Tables** — Shows all tables selected for migration. For each table, you can see source and destination table and schema names, snapshot status, mapped columns, migrated rows, and migration rate. Select the **+** icon to expand a table and view column-level mappings.

- **Error history** — Lists all errors logged for this migration. Select the **i** icon to open the full error log for a specific error. For stuck or failed migrations, active errors here indicate where to start troubleshooting.

- **Metrics** — Links to a Grafana dashboard with performance metrics for this migration. See [Metrics tab](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migrate/migrations/#metrics-tab) for details.

### Migration metrics

During any running migration (**Snapshot** or **Snapshot + Streaming**), the DMS agents continuously report performance metrics to HM, which are displayed in the HM console automatically. If you deployed the reader or writer agent yourself — any setup with a self-managed source or destination — set `METRICS_TASK_ENABLED=true` in the agent's `run-cdcagent.sh`. See [Configuring and running the EDB DMS agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/configuring_dms_agent/) for agent configuration steps.

For details about the Grafana dashboard shown in the **Metrics** tab, see [Metrics tab](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migrate/migrations/#metrics-tab).

### DMS agent logs

The HM console doesn't surface all DMS agent errors. If a migration is stuck or no tables are progressing, check the terminal where you ran `run-cdcagent.sh` for `ERROR` log entries — these often contain the root cause. Common issues include version incompatibility between the DMS agent and HM, and connectivity or credential failures.

## Finalizing a streaming migration

> **Note**
>
> This section applies only to **Snapshot + Streaming** migrations. For **Snapshot** migrations, DMS marks the migration as completed automatically.

### Monitoring catch-up before cutover

Before stopping writes on the source, give the destination time to catch up. Use the **Migration details** page to track row counts and replication lag. Begin the cutover only after the destination is consistently close to the source.

### Finalizing schema concurrently (recommended)

#### Simplified (recommended)

If you used the **Schema and data** scope, HM can apply most schema objects while the stream is still running: primary keys, unique constraints, indexes (built with `CREATE INDEX CONCURRENTLY`, so live writes aren't blocked), foreign keys (added as `NOT VALID`), check constraints, `NOT NULL` constraints, and similar. Foreign key validation, sequence synchronization, and other lightweight tasks run later in the post-cutover **Schema Finalization** stage.

Running this work concurrently shrinks the read-only cutover window. The larger your tables and the more indexes they have, the greater the time saved.

Once every table has completed its snapshot and the migration enters the streaming phase, the **Migration details** page shows a **Schema Finalization Available** alert with a **Finalize Schema Concurrently** button. The button stays available throughout streaming, so you can pick the moment based on how close the destination is to catching up.

1. Select **Finalize Schema Concurrently** on the **Migration details** page.

2. HM applies the deferred objects while streaming continues. The migration remains in the **Running** state, with a progress sub-step labeled **Finalizing Schema Concurrently**.

When the sub-step completes, proceed to the cutover.

> **Note**
>
> **Finalize Schema Concurrently** is available only for migrations created with the **Schema and data** scope with streaming enabled.

If you skip this step, the same objects are applied serially after you mark the migration as completed. See [Schema Finalization stage](#schema-finalization-stage). The cutover window is larger in that case because indexes are built non-concurrently and constraints are validated under exclusive locks.

#### Manual

Not applicable to the manual path. You applied the schema before migration and will reapply deferred constraints manually after cutover. See [Applying deferred constraints and verifying data](#applying-deferred-constraints-and-verifying-data).

### Performing the cutover

When you're ready to switch traffic from the source to the destination:

1. Stop all writes on the source database.

2. Verify in the HM console that the destination has applied the last source change.

3. In the HM console, select **Migrate > Migrations** in your project.

4. On the **Migration details** page, select **Mark as Completed**.

This stops the streaming process.

### Schema Finalization stage

#### Simplified (recommended)

For migrations created with the **Schema and data** scope, the migration enters a **Schema Finalization** stage automatically after **Mark as Completed**. What runs in this stage depends on whether you ran concurrent finalization first:

- **If you ran concurrent finalization**: HM runs the lightweight remaining work — foreign key validation, sequence sync, and any other deferred metadata tasks. This stage is short.
- **If you skipped concurrent finalization**: HM applies the full deferred set now (primary keys, unique constraints, indexes, foreign keys, check constraints, `NOT NULL`, and similar) followed by the lightweight tasks above. This stage takes substantially longer and runs while the source is read-only.

The migration is fully complete only after the **Schema Finalization** stage finishes. Progress is shown on the **Migration details** page.

#### Manual

No automatic schema finalization runs for the **Data only** scope. Continue to [Applying deferred constraints and verifying data](#applying-deferred-constraints-and-verifying-data) to reapply the foreign key, unique, check, and exclusion constraints you deferred before migration.

## Applying deferred constraints and verifying data

### Reapplying deferred constraints

#### Simplified (recommended)

HM applied all deferred constraints and synced sequences automatically during the **Schema Finalization** stage. No manual action is needed. See [Schema Finalization stage](#schema-finalization-stage).

#### Manual

During the schema import, you excluded foreign key, unique key (UK), check, and exclusion constraints to avoid performance overhead during data migration. Connect to the destination database and reapply those constraints now.

Primary key constraints were applied automatically by the DMS writer when the migration entered the streaming phase. `NOT NULL` constraints were applied before migration and don't require any action now.

For unique constraints, the procedure depends on whether the source table had a primary key:

- **Tables with a primary key** — apply the unique constraint directly. Primary key (PK)-based deduplication during the snapshot ensures no duplicate rows remain.

- **Tables with no primary key (UK-identity tables)** — deduplicate rows first, then add the constraint. See [Applying unique constraints on UK-identity tables](#applying-unique-constraints-on-uk-identity-tables).

#### Applying unique constraints on UK-identity tables

For tables where the unique key is the only row identifier (no primary key), the snapshot phase used plain `INSERT` operations with no conflict handling, so duplicate rows might be present. You must deduplicate before adding the unique constraint.

Apply this procedure per-table as soon as each table's snapshot finishes — check the **Tables** tab on the migration details page and look for **Snapshot completed**.

> **Warning**
>
> For **Snapshot + Streaming** migrations, the unique constraint must be in place before streaming begins for that table. Once the DMS writer starts processing CDC events for a UK-identity table, it issues keyed upserts (`INSERT ... ON CONFLICT (uk_cols) DO UPDATE`). If the unique constraint is missing at that point, the writer task fails with a fatal error and the migration stops.

For each UK-identity table, run both steps against the destination database:

1. Deduplicate rows:

   ```sql
   -- Keep the double-quoted identifiers — Postgres is case-sensitive when quoted.
   WITH d AS (
     DELETE FROM "<schema_name>"."<table_name>" t
     USING (
       SELECT "<col_1>", "<col_2>", MIN(ctid) AS keep_ctid
       FROM "<schema_name>"."<table_name>"
       GROUP BY "<col_1>", "<col_2>"
       HAVING COUNT(*) > 1
     ) k
     WHERE t."<col_1>" = k."<col_1>"
       AND t."<col_2>" = k."<col_2>"
       AND t.ctid <> k.keep_ctid
     RETURNING 1
   )
   SELECT count(*) AS rows_removed FROM d;
   ```

2. Add the unique constraint:

   ```sql
   ALTER TABLE "<schema_name>"."<table_name>"
     ADD CONSTRAINT <constraint_name> UNIQUE ("<col_1>", "<col_2>");
   ```

> **Note**
>
> Tables with a source primary key don't need this procedure — DMS handles PK application automatically via the delayed-PK path, and unique constraints on those tables can be applied directly.

### Deduplicating rows when needed

For tables that had no primary key or unique constraints, the EDB DMS agent provides at-least-once delivery, which can result in duplicate rows. As part of your verification step, and after any snapshot retry, check for duplicate rows and deduplicate them.

### Verifying migrated data

Compare the source and destination databases to confirm all data was migrated successfully. You can use [LiveCompare](https://www.enterprisedb.com/docs/livecompare/latest/) for this.

### Assessing your application SQL before cutover

With the database migration complete, the next step before switching your application to EDB Postgres Advanced Server (EPAS) is to confirm that the SQL queries your application executes are compatible with the target database. Even a successful schema and data migration doesn't guarantee that application-level SQL — embedded in your code, ORM, or scripts — will work without changes.

Use HM's application assessment to identify incompatible queries and review suggested transformations before application cutover. See [Application assessment](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/application_assessment/) for an overview, or go directly to [Creating an application record](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/application_assessment/creating_an_application_record/) to get started.

## Related topics

- [LiveCompare](https://www.enterprisedb.com/docs/livecompare/latest/) — row-level data comparison tool for verifying migration completeness
- [Migration terminology](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/terminology/) — definitions for snapshot, streaming, and other migration concepts
- [Application assessment](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/application_assessment/) — assess application SQL compatibility with EPAS before cutting over your application

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
