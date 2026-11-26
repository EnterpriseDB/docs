---
title: Managing clusters
description: Manage and monitor existing clusters by editing configuration, restoring or deleting clusters, upgrading versions, or analyzing performance via Kubernetes resources.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/
lastModified: 2026-11-18T21:29:30+05:30
---

# Managing clusters

Several management tasks are associated with clusters in Hybrid Manager (HM).

## Cluster creation tasks

As part of the cluster creation process, you might want to:

- [Create a cluster template](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/create-cluster-template/) that you can use as the basis for new templates.
- [Create a formula](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/formula/) to use as a value for certain configuration parameters.
- [Set up custom networking annotations](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/custom-networking/) to control how a cluster's load balancer is configured, for example with MetalLB or by disabling Azure Private Link Service.

## Working with existing clusters

After you [create a cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/), you can use the three-dot menu to the right of the cluster name to:

- [Edit the cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/edit-clusters/) to make changes to most of its configuration.
- Change a cluster password.
- [Delete a cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/delete-clusters/).
- Upgrade a cluster. You can perform a minor upgrade or a major upgrade.
- [Restore a deleted cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/restore-clusters/).

The menu includes only the options available to the current project user.

If you have a deprecated advanced high availability (AHA) cluster, see [Migrating an AHA cluster to DHA](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/migrating_aha_to_dha/).

To promote a replica cluster to primary, see [Switching over to a replica cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/switchover-clusters/).

## Analyze how your Postgres cluster's running

While your cluster is running, you may need to look at the status of the Kubernetes infrastructure your Postgres clusters are running on. You can do this by [tracing the cluster back to its Kubernetes resources](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/trace-clusters/). For example, you can use Grafana to better understand how resources are being used.

- [Create cluster templates](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/create-cluster-template/): Learn about creating database cluster templates to use for deploying a Hybrid Manager cluster.
- [Delete clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/delete-clusters/): Learn about deleting a Hybrid Manager cluster.
- [Edit clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/edit-clusters/): Learn about editing the configuration of a Hybrid Manager cluster.
- [Editing clusters programmatically](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/edit-clusters-programmatically/): Edit a cluster configuration from the command line using the Hybrid Manager API.
- [Restore clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/restore-clusters/): Learn about restoring a Hybrid Manager cluster from a backup.
- [Migrate AHA to DHA](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/migrating_aha_to_dha/): Migrate a deprecated advanced high availability (AHA) cluster to a distributed high availability (DHA) cluster.
- [Switch over clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/switchover-clusters/): Learn how to perform a planned switchover in Hybrid Manager to promote a replica cluster to primary, and what to check before you start.
- [Trace clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/trace-clusters/): Learn about tracing a Hybrid Manager cluster to its Kubernetes resources.
- [Parameter formulas](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/formula/): Learn about using formulas to configure GUCs for a Hybrid Manager cluster.
- [Custom networking](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/custom-networking/): Learn how to use custom load balancer service annotations to control cluster network access in Hybrid Manager.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
