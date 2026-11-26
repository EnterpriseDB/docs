---
title: Creating a cluster from a template
description: Learn about using templates when creating a Hybrid Manager cluster.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/create-clusters-with-templates/
lastModified: 2026-03-17T01:01:27Z
---

# Creating a cluster from a template

You can create a database cluster using a template, if your project has any. Using a template saves time and ensures consistency across environments.

To create a template, see [Create cluster templates](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/create-cluster-template/).

## Starting points

You can start to create a cluster from a template from the **Choose Your Path** page or from the **Cluster Templates** page.

### From the Choose Your Path page

You can get to the **Choose Your Path** page from the **Estate** page or from a project page.

From the **Estate** page:

1. Select **Quick Actions > Create New Database Cluster**.

   If you have more than one project, you're prompted to select a project.

2. If prompted, select the project you want to create the database in.

   After you select the project, or if you have only one project, the **Choose Your Path** page opens.

From a project page, you can use either of these approaches. To get to a project page, from the **Projects** page, select the project.

- In the project page, select **Create New > Database Cluster**.

- In the project page, select **Clusters > Postgres Cluster**. On the **Clusters** page, select **Create New > Database Cluster**.

The **Choose Your Path** page opens.

#### Using a template from the Choose Your Path page

1. On the **Choose Your Path** page, select **Use Template**.

2. Select a template. From the list of available templates, select the one that suits your needs.

3. Select **Use Template**.

You enter cluster creation mode. See [Customize and create the cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/create-clusters-with-templates/#customize-and-create-the-cluster).

### Start from the Cluster Templates page

1. From your project page, in the left navigation, select **Cluster > Cluster Templates**.

2. Next to the template you want to use as the basis of your cluster, select the **Use** icon.

You enter cluster creation mode. See [Customize and create the cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/create-clusters-with-templates/#customize-and-create-the-cluster).

## Customize and create the cluster

After selecting a template, you can review and modify the settings of the cluster you're creating. For details, see:

- [Cluster types to create](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/cluster-info/)
- [Cluster setup](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/cluster-settings/)
- [Database configuration parameters](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/db-configuration/)
- [Backup and security settings](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/additional-settings/)
- [Creating data groups](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/data-groups/) (for advanced or distributed high-availability clusters)

You can also select a different template to work with. Select the **Cluster Templates** tab to see a list of available templates.

After you finish configuring the cluster using the tabs, select **Create Cluster**. Tabs with incorrect or missing settings show a red indicator. Correct any errors and select **Create Cluster** again.

After you select **Create Cluster** with valid settings, the cluster begins provisioning, and you return to the list of clusters. A popup confirms the creation of the cluster, and the new cluster is added to the list of clusters. The cluster is created in the background. You can see the progress in the list of clusters.

If you try to view the cluster details while the cluster creation is in progress, you can see only the overview, backup, logs, and properties.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
