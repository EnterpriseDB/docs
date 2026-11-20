---
title: Understanding schema handling
description: Read about constraint handling before migrating schemas to the destination database.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/handling_schema/
lastModified: 2025-11-07T18:06:05Z
---

# Understanding schema handling

Before you use EDB Data Migration Service (EDB DMS) to configure a data migration that uses the `cdcagent`, you must prepare and import your schema to the destination database.

Importing the schema to the destination database before the migration takes place is important as EDB DMS migrates only data. The destination database must have the schemas in place for the migration to populate them with data.

Some of your schema's constraints must be included before the data migration takes place. Others must be applied after the data migration is completed. This approach ensures you can migrate without performance degradation.

## Schema integrity and performance considerations

The presence of destination database constraints, triggers, and WAL logging can impact the data migration performance. When this approach is possible, we recommend a two-step import of schema constraints.

### Primary key and unique constraints

EDB DMS leverages primary key/unique constraints to provide an exactly-once delivery when migrating data to the destination database. Therefore, you must include primary key/unique constraints in the schema import that you perform before the data migration begins. Exclude other types of constraints from the schema import.

For rows in tables that don't have primary key/unique constraints you can achieve only at-least-once delivery. You can perform deduplication during the data migration verification.

> **Note**
>
> Not null constraints don't represent a significant performance impact for destination servers and can also be included in the schema import.

### Foreign key, check, and exclusion constraints

EDB DMS can apply change events in parallel against destination database clusters. However, migrating some constraint types can negatively affect migration performance. These type of constraints lead to unnecessary CPU and memory utilization in the context of an in-flight data migration from a consistent and referentially integral source database.

Therefore, we recommend applying foreign key, check, and exclusion constraints on the destination database only after the migration is complete.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
