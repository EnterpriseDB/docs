---
title: Preparing and importing Postgres schemas
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/snippet_sources/4_migrating_schemas/preparing_postgres_schemas/
lastModified: 2026-11-12T17:51:38+01:00
---

# Preparing and importing Postgres schemas

## Simplified (recommended)

No manual schema preparation is required. HM handles schema migration and constraint ordering automatically when you select the **Schema and data** scope when creating your migration. Before proceeding, confirm:

- The EDB Postgres AI agent has ingested your source schema and a Migration Portal project exists for the database. To verify, go to **Estate > Migrations** in the HM console, select the database in the **Database Name** column, and confirm a project appears in the **MP Project** column.
- When you configure the Data Migration Service (DMS) reader agent, set `DBCONFIG_DATABASES_<N>__RESOURCEID` to the same `resource_id` value as in `beacon_agent.yaml`. The **Schema and data** and **Schema only** scopes will fail without it.

By default, objects created by schema migration are owned by the destination database user configured for the DMS writer, and no roles or privileges are carried over from the source. For migrations to self-managed destinations, you can optionally migrate roles, ownership, and privileges as well — see [Migrating roles, ownership, and privileges](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/schema_migration/migrating_roles_and_privileges/).

## Manual

Before you use EDB DMS for data migration, export and import your schema to the destination database yourself. DMS migrates data only — the destination database must have schemas in place before migration begins.

### Handling constraints

How to handle constraints depends on the constraint type and the key structure of each source table.

| Constraint type                              | Action                                               | Notes                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Primary key                                  | Exclude now — DMS applies automatically              | The DMS writer applies the primary key when the migration enters the streaming phase, using it to deduplicate snapshot data.                                                                                                                                                                           |
| Unique key (source table has a primary key)  | Exclude now, apply after streaming starts            | Primary key-based deduplication ensures no duplicate rows remain when you apply unique constraints after streaming starts.                                                                                                                                                                             |
| Unique key (source table has no primary key) | Exclude now — apply post-snapshot with deduplication | Don't create the unique key (UK) on the destination before the snapshot completes — doing so causes an infinite retry loop. Requires replica identity setup on the source before migration starts. See [UK-identity tables](#uk-identity-tables-replica-identity-and-post-snapshot-constraints) below. |
| `NOT NULL`                                   | Include now                                          | `NOT NULL` validation adds no meaningful overhead to the data load, unlike foreign key and check constraint validation.                                                                                                                                                                                |
| Foreign key, check, and exclusion            | Exclude now, reapply after migration                 | These constraints cause unnecessary CPU and memory overhead while data is actively being migrated.                                                                                                                                                                                                     |

> **Note**
>
> For tables with no primary key or unique key, you don't need to create key constraints on the destination, before or after migration. DMS treats these tables as keyless and provides at-least-once delivery, so check for duplicate rows and deduplicate them as part of your post-migration verification.
>
> To include these tables in a migration that streams changes, you must also set a replica identity on them in the source database. In HM 1.4.2 and later, a **Snapshot** migration doesn't require it. See [Migrating tables without a primary key](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_hm_managed/migrating_schema/#migrating-tables-without-a-primary-key).

#### UK-identity tables: replica identity and post-snapshot constraints

A UK-identity table is a source table that has no primary key and uses a unique key as its only row identifier.

Before starting the migration, set replica identity on each UK-identity table on the source database. DMS needs this configuration to emit change events keyed by the UK columns so streaming works correctly after you add the constraint on the destination.

```sql
-- Run on the source database for each UK-identity table.
ALTER TABLE <schema_name>.<table_name>
  REPLICA IDENTITY USING INDEX <index_name>;
```

Don't create the unique constraint on the destination before the snapshot completes. With delayed primary key (PK) behavior enabled, the DMS writer treats tables as keyless if they have no PK on the destination — even if a UK exists. This behavior means snapshot writes use plain `INSERT` operations with no conflict handling. If a retry occurs before the snapshot finishes, those rows hit the UK constraint and the migration enters an infinite retry loop.

After the snapshot for a UK-identity table completes, follow the deduplication and constraint procedure described in [Applying unique constraints on UK-identity tables](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_hm_managed/migrating_data/#applying-unique-constraints-on-uk-identity-tables).

### Exporting your schema

We recommend using [EDB Migration Toolkit](https://www.enterprisedb.com/docs/migration_toolkit/latest/) (MTK) to export your schema. MTK's [offline migration](https://www.enterprisedb.com/docs/migration_toolkit/latest/07_invoking_mtk/08_mtk_command_options/#offline-migration-options) capability generates SQL scripts you can apply on the destination without direct connectivity. Other valid export methods include `pg_dump`/`pg_restore`, pgAdmin, or `psql`.

When using Migration Toolkit:

- Use the `-offlineMigration` option to generate SQL scripts.
- Use the `-schemaOnly <schema_scope>` option to export schema only.
- Exclude (comment out) primary key, unique, foreign key, check, and exclusion constraints from the generated script before importing.
- If you plan to map objects to different names in the destination, edit them directly in the DDL script before importing. Update all dependent objects — views, constraints, and other references — that reference renamed objects. See [Mapping schema, tables, and columns](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migrate/migrations/#mapping-schema-tables-and-columns-during-a-migration) for details.

### Importing your schema

After preparing the DDL and excluding the deferred constraints, connect to the destination database and apply the SQL file by executing the generated [offline migration script](https://www.enterprisedb.com/docs/migration_toolkit/latest/07_invoking_mtk/08_mtk_command_options/#offline-migration-options).

> **Note**
>
> Apply the excluded unique, foreign key, check, and exclusion constraints after migration completes. The DMS writer applies primary key constraints automatically — don't reapply them manually. Keep track of excluded constraints so you can reapply them when the time comes.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
