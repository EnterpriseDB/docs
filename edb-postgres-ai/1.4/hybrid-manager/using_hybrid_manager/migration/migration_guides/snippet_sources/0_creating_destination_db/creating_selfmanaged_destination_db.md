---
title: Creating a destination database cluster
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/snippet_sources/0_creating_destination_db/creating_selfmanaged_destination_db/
lastModified: 2026-07-23T19:28:07Z
---

# Creating a destination database cluster

You can use existing databases as destinations for migrations. To use an existing instance as a destination for the migration, ensure the tables you migrate and the load generated on the destination don't interfere with existing workloads.

If you don't have a self-managed destination database yet, create one that the EDB DMS agent can connect to for Hybrid Manager (HM) migrations. This example assumes you installed the Postgres database distribution of your choice and initialized the server.

1. Connect to the destination Postgres server:

   ```shell
   psql -p <PG_PORT> -U <PG_USERNAME>
   ```

2. Create an empty destination database to use as a destination for the migration.

   In this example, the destination database is `tr_target`:

   ```sql
   CREATE DATABASE tr_target;
   ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
