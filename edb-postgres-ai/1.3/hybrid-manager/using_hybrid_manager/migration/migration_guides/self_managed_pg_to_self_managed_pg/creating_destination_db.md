---
title: Creating your self-managed destination database
description: Create a self-managed database to use as a destination for your migration.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_self_managed_pg/creating_destination_db/
lastModified: 2025-11-28T14:25:26+01:00
---

# Creating your self-managed destination database

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
