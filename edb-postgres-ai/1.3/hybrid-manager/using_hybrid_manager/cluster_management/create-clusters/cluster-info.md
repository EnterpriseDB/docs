---
title: Cluster types to create
description: Learn about available cluster types for Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/cluster-info/
lastModified: 2025-11-07T18:06:05Z
---

# Cluster types to create

After you start to [create your cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/cluster_management/), the **Cluster Info** tab prompts you to select the type of cluster to create. This tab also appears when you're editing a cluster.

> **Note**
>
> When editing a cluster, you can't switch between a single-node or high-availability cluster and an advanced or distributed high-availability cluster.

- [**Single Node**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/overview/database_types/single_node/) creates a cluster with one primary and no standby replicas. This type of cluster is suited for test environments where high availability might not be required. You can create single-node clusters running PostgreSQL, EDB Postgres Extended Server, or EDB Postgres Advanced Server.

- [**High Availability**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/overview/database_types/primary_standby_highavailability/) creates a cluster with one primary and multiple standby replicas in different availability zones. You can create high-availability clusters running PostgreSQL, EDB Postgres Extended Server, or EDB Postgres Advanced Server.

  If you select **High Availability**, you're prompted to specify the number of standby replicas for your cluster. The default is 2.

- [**Advanced High Availability**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/overview/database_types/advanced_highavailability/) delivers single-region, multi-AZ resilience with fast, automated failover; online upgrades; and logical replication via primary/standby nodes.

  If you select **Advanced High Availability**, the tabs **DB Configuration** and **Additional Settings** no longer appear. The **Data Groups** tab appears instead.

- [**Distributed High Availability**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/overview/database_types/distributed_highavailability/) creates a cluster, powered by EDB Postgres Distributed (PGD), with three nodes and up to two data groups spread across three availability zones. This configuration delivers higher performance and faster recovery. You can create distributed high-availability clusters running PostgreSQL, EDB Postgres Extended Server, or EDB Postgres Advanced Server.

  If you select **Distributed High Availability**, the tabs **DB Configuration** and **Additional Settings** no longer appear. The **Data Groups** tab appears instead.

See [Supported cluster types](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/overview/database_types/) for more information.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
