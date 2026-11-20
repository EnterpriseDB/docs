---
title: Preparing your HM-managed destination database
description: Prepare an HM-managed database cluster to serve as the destination for your Postgres migration.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_hm_managed/creating_destination_db/
lastModified: 2026-10-27T17:17:01+01:00
---

# Preparing your HM-managed destination database

Prepare an HM-managed database cluster to serve as the destination for your migration.

## Create new cluster

If you don't have a destination database cluster on Hybrid Manager (HM) yet, create one:

1. In the HM console, select the [project](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/projects/#creating-projects) where you want to create the database cluster.

2. In your project, select **Create New** and then **Database Cluster** to [create a database cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/).

3. In the **Clusters** page, select your cluster, and use the **Quick Connect** option to access your database from your terminal.

4. Create an empty database to use as a destination for the migration. Alternatively, you can use the default database `edb_admin`.

## Use existing cluster

If you already have an HM-managed database cluster, you can use it as the destination for your migration.

Before proceeding, ensure the tables you migrate and the load generated during migration don't interfere with existing workloads on the cluster.

## Preparing for large object (LO) migration

If you're migrating Postgres large objects (`LO_SNAPSHOT_ENABLED=true`), the destination needs a role matching each role that owns a large object on the source, so the migration can preserve ownership. This applies even though HM manages the destination for you otherwise.

1. On the source database, find which roles own large objects:

   ```sql
   SELECT DISTINCT lomowner::regrole FROM pg_largeobject_metadata;
   ```

2. Using **Quick Connect** to reach your destination cluster, create a role with the same name for each one returned:

   ```sql
   CREATE ROLE <role_name>;
   ```

   This role doesn't need `LOGIN` privileges or any grants — it only needs to exist so the writer can assign large object ownership.

## Next step

[Migrate schemas](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_hm_managed/migrating_schema/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
