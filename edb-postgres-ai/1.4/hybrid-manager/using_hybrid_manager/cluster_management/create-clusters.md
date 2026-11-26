---
title: Creating a database cluster
description: Create and configure a new database cluster from a template or custom settings.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/
lastModified: 2026-07-23T19:28:07Z
---

# Creating a database cluster

You can create a database cluster from a template (if you have one) or create the cluster from scratch.

## Starting points

The starting point for creating a cluster can be either the **Estate** page or a project page. When you start from the **Estate** page, you specify the project where you want to create the database. When you start from a project page, you're creating the database in that project.

To start from the **Estate** page:

1. Select **Quick Actions > Create New Database Cluster**.

   If you have more than one project, you're prompted to select a project.

2. If prompted, select the project you want to create the database in.

   After you select the project, or if you have only one project, the **Create Cluster** [Choose your path](#choose-your-path) page opens.

To start from a project page, you can use either of these approaches. To get to a project page, from the **Projects** page, select the project.

- In the project page, select **Create New > Database Cluster**.

- In the project page, select **Clusters > Postgres Cluster**. On the **Clusters** page, select **Create New > Database Cluster**.

In both cases, the [**Choose your path**](#choose-your-path) page for creating clusters opens.

## Choose your path

On the **Choose Your Path** page, you specify whether you want to create a cluster from a predefined template or from scratch as a custom build.

- To create the cluster from any available template, select **Use Template**. See [Creating a cluster from a template](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/create-clusters-with-templates/).

- If no templates are available, or if you want to create a cluster from scratch, select **Custom Build**.

You can also launch template creation from here by selecting **Create New Template**. See [Create a database cluster template](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/create-cluster-template/).

## Creating a cluster from scratch

After you select **Custom Build**, you can start to specify your new cluster.

On the [**Cluster Info**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/cluster-info/) tab, select the cluster type:

- Single node
- High availability
- Distributed high availability

Select the tab you want to work on, or step through the tabs in order using **Next**. If you select **Distributed High Availability**, instead of the **DB Configuration** and **Additional Settings** tabs, you see the [**Data Groups**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/data-groups/) tab.

- [**Cluster Info**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/cluster-info/)
- [**Cluster Settings**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/cluster-settings/)
- [**DB Configuration**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/db-configuration/) (optional)
- [**Additional Settings**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/additional-settings/) (optional)
- [**Replica Clusters**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/replica-clusters/) (for single-node and high-availability clusters)
- [**Data Groups**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/data-groups/) (for distributed high-availability clusters)

> **Note**
>
> Settings in optional tabs that you don't configure use default values.

To provision a cluster that uses only FIPS-approved cryptography, see [Provisioning FIPS-compatible clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/fips-compatible-clusters/).

## Create the cluster

After you finish configuring the tabs, select **Create Cluster**. Tabs with incorrect or missing settings show a red indicator. Correct any errors and select **Create Cluster** again.

After you select **Create Cluster** with valid settings, the cluster begins provisioning, and you return to the list of clusters. A popup confirms the creation of the cluster, and the new cluster is added to the list of clusters. The cluster is created in the background. You can see the progress in the list of clusters.

If you try to view the cluster details while the cluster creation is in progress, you can see only the overview, backup, logs, and properties.

- [Cluster types](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/cluster-info/): Learn about available cluster types for Hybrid Manager.
- [Cluster setup](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/cluster-settings/): Learn about settings to configure when creating a Hybrid Manager cluster.
- [Configuration parameters](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/db-configuration/): Learn about various database configuration parameters for a Hybrid Manager cluster.
- [Backup and security settings](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/additional-settings/): Learn about settings for backups and security for Hybrid Manager.
- [Replica clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/replica-clusters/): Learn about creating replica clusters for single-node and high availability clusters in HM.
- [Data groups](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/data-groups/): Learn about creating data groups when creating a Hybrid Manager cluster.
- [Creating clusters from templates](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/create-clusters-with-templates/): Learn about using templates when creating a Hybrid Manager cluster.
- [FIPS compatibility](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/fips-compatible-clusters/): Learn how to provision FIPS-compatible database clusters in Hybrid Manager by configuring the ssl\_groups parameter.
- [Creating clusters programmatically](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/create-cluster-programmatically/): Create a cluster from the command line using the API

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
