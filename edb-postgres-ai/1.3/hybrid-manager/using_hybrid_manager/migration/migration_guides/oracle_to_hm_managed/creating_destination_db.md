---
title: Creating your HM-managed destination database
description: Create a database with Hybrid Manager to use as a destination for your migration.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/creating_destination_db/
lastModified: 2025-11-28T14:25:26+01:00
---

# Creating your HM-managed destination database

## Create new database

If you don't have a destination database cluster on Hybrid Manager (HM) yet, create one that HM can use as destination for migrations:

1. In the HM console, select the [project](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/projects/#creating-projects) where you want to create the database cluster.

2. In your project, select **Create New** and **Database Cluster** to [create a database cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/) to serve as the destination for the migration.

3. In the **Clusters** page, select your cluster, and use the **Quick Connect** option to access your database from your terminal.

4. Create an empty database to use as a destination for the migration. Alternatively, you can use the default database `edb_admin`.

## Use existing database

Alternatively, you can use an existing HM-managed database as a destination for your migration. Before you use an existing database cluster as a destination for the migration, ensure the tables you migrate and the load generated on the destination don't interfere with existing workloads.

If you want to use an existing HM-managed database as a destination, continue with the next step.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
