---
title: Preparing your HM-managed destination database
description: Prepare your HM-managed EDB Postgres Advanced Server destination database cluster before importing schema and migrating data.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/preparing_destination_database/
lastModified: 2026-07-23T17:52:58+02:00
---

# Preparing your HM-managed destination database

Prepare an HM-managed database cluster to serve as the destination for your Oracle migration.

> **Note**
>
> The destination database cluster must use the **EDB Postgres Advanced Server** distribution. HM's built-in schema migration features — Migration Portal and EDB DMS — require EDB Postgres Advanced Server when migrating from Oracle.

## Create new cluster

If you don't have a destination database cluster on Hybrid Manager (HM) yet, create one:

1. In the HM console, select the [project](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/projects/#creating-projects) where you want to create the database cluster.

2. In your project, select **Create New** and then **Database Cluster** to [create a database cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/). When prompted to select a distribution, choose **EDB Postgres Advanced Server**.

   > **Note**
   >
   > If you're creating an EDB Postgres Advanced Server 18 or later cluster, you must update the `ssl_groups` database parameter to remove the `X25519` group from the default value. `X25519` isn't FIPS-compliant, and Migration Portal's connection to the destination database requires FIPS.

3. In the **Clusters** page, select your cluster, and use the **Quick Connect** option to access your database from your terminal.

4. Create an empty database to use as a destination for the migration. Alternatively, you can use the default database `edb_admin`.

## Use existing cluster

If you already have an HM-managed EDB Postgres Advanced Server database cluster, you can use it as the destination for your migration.

Before proceeding, ensure:

- The cluster uses the **EDB Postgres Advanced Server** distribution. If it uses a different distribution, create a new EDB Postgres Advanced Server cluster instead.
- The tables you migrate and the load generated during migration don't interfere with existing workloads on the cluster.

## Next step

[Migrate your schema](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/migrating_schema/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
