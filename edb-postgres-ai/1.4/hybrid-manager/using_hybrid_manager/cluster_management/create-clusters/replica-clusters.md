---
title: Creating replica clusters
description: Learn about creating replica clusters for single-node and high availability clusters in HM.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/replica-clusters/
lastModified: 2026-10-08T19:21:36+02:00
---

# Creating replica clusters

The **Replica Clusters** tab is available when you create or edit a single-node or high-availability cluster. Use it to create and manage _replica clusters_ for single-node and high-availability clusters.

A replica cluster is typically used to create read-only copies of the primary database cluster to offload read queries and enhance performance. You can create replica clusters in a different geographic location from the primary cluster to provide disaster recovery and high availability.

> **Note: Replica clusters vs. read-only connections**
>
> Replica clusters and read-only connections are two distinct features:
>
> - A **replica cluster** is a separate, independent database cluster that replicates from a primary cluster. It's suited for disaster recovery or serving traffic from a different geographic location.
>
> - A **read-only connection** is a dedicated connection endpoint within the same cluster that routes queries to standby replicas, enabling read workload distribution without creating a separate cluster.
>
> To configure a read-only connection for your HA cluster instead, see [Cluster setup](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/cluster-settings/#connections-read-only).

> **Note**
>
> If you want to create replica clusters on different data centers or locations, ensure that your [Hybrid Manager (HM) environment has been configured to support deployments in multiple data centers (multi-DC)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/multi_dc/).

> **Note: TDE and replica clusters**
>
> If you enable TDE, the customer key you configure on a replica must resolve to key material that is compatible with the primary's key (for example, an AWS KMS multi-region replica key, a key vault reachable from both locations, or the same passphrase). See [TDE across data centers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/multi_dc/tde/) before creating replica clusters with a customer-managed key.

## Creating replica clusters

1. With **Single Node** or **High Availability** selected on the **Cluster Info** tab, after assigning a name and password to the cluster, select the **Replica Clusters** tab.

2. Select the [**Node Settings**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/data-groups/#node-settings) tab and fill out the required information.

3. Select the [**DB Configuration**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/data-groups/#database-parameter-configuration) tab and modify parameters as needed.

4. Select the [**Additional Settings**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/additional-settings/) tab and modify parameters settings as needed.

5. Select **Add Replica Cluster**.

   The new replica cluster is listed in the **Replica Clusters** tab. Expand the replica cluster to configure the replica cluster settings. You can create replica clusters in a different geographic location from the primary cluster to provide disaster recovery and high availability.

   Create as many replica clusters as needed.

## Managing replica clusters

You can edit and delete replica clusters:

- Select **Edit** to make adjustments to the replica cluster.

- Select **Delete** to delete a replica cluster.

- To add a replica cluster, select **Add Replica Cluster**.

To promote a replica cluster to primary, see [Switching over to a replica cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/switchover-clusters/). Both clusters must be able to reach each other before you switch over.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
