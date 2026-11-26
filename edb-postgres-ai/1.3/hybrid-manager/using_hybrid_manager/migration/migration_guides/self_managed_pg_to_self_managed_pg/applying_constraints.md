---
title: Applying constraints after the migration is finalized
description: Apply the constraints you excluded when migrating the source schema to the destination schema after the migration is finished.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/applying_constraints/
lastModified: 2025-11-28T14:25:26+01:00
---

# Applying constraints after the migration is finalized

At the beginning of your data migration journey with EDB Data Migration Service (EDB DMS), you prepared and imported the schema of your source database. Now, connect to the destination database and reapply the constraints that were excluded from the schema and data migration.

## Primary key and unique constraints

For primary key and unique constraints, you already created the tables and constraints in the destination Postgres database. This allowed EDB DMS to map them to the source objects and migrate data successfully. You don't need do to anything else.

The same applies to not null constraints if you included them in your schema import.

## Foreign key, check, and exclusion constraints

You can now reapply any foreign key, check, or exclusion constraints you excluded during the schema preparation and import.

## Ensuring data integrity

Rows in tables that don't have primary key or unique constraints were migrated with at-least-once delivery, Therefore, it's possible that these rows are duplicates.

Deduplication can be performed as part of the verification.

## Verification

To verify that all data was migrated, compare the source and destination databases.

You can use [LiveCompare](https://www.enterprisedb.com/docs/livecompare/latest/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
