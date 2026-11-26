---
title: Lakehouse clusters
description: Learn how to add and view Lakehouse clusters with Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/hm_overview/lakehouse/
lastModified: 2025-12-10T19:58:19-08:00
---

# Lakehouse clusters

To view your Lakehouse clusters, from the **Estate** page, select **Lakehouse**. When viewing your Lakehouse clusters, you can apply filters to narrow your results. You can see the number of Lakehouse clusters you have access to and the metadata and metrics for the cluster.

## Adding a Lakehouse cluster

To add a Lakehouse cluster to your estate, from the **Quick Actions** menu, hover over **Add New Lakehouse Cluster** and select a project to associate with the new cluster. The **Create Analytics Cluster** page opens, which offers two ways to add a cluster: build from a template or create a custom build.

- To build from a template, if no templates are available, select **Create New Template** to create one. To use an existing template, select **Use Template**.
- To create a custom build, select **Start from Scratch**.

The template creation workflow and custom build workflow for analytic clusters are the same as the regular cluster creation workflow. See [Creating clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/).

To learn more about how to use the Analytics/Lakehouse feature of Hybrid Manager (HM), see [Analytics/Lakehouse](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/analytics/).

## Lakehouse clusters table

The clusters table is a list of all of the available Lakehouse clusters across your projects. It helps you monitor their performance, health, status, and other metrics. You can modify the view to see more or fewer columns, and you can apply filters to see only clusters of interest.

### Selecting columns to display

By default, the table shows these columns:

- Project Name — Project that the cluster belongs to.
- Cluster — Cluster name.
- Management — How the cluster is managed: by appliance or self-managed.
- Cluster Type — The type of cluster: PGD, single-node, or HA.
- Status — Current status of the cluster: OK, Error, Caution, or Working.
- Engine — Current Postgres distribution type this cluster is running: Postgres, EDB Postgres Advanced Server, or EDB Extended Server.
- Version — Major version of Postgres distribution the cluster is running: 13, 14, 15, 16, or 17.
- Alerts — Count of high-, medium-, and low-severity alerts for the cluster.
- Health Scores
- TPS — Transactions per second being made by the cluster and a line graph summarizing recent trends.
- CPU  — Percentage of CPU currently used by the cluster and a line graph summarizing recent trends.
- Memory — Percentage of memory currently used by the cluster and a line graph summarizing recent trends.
- Disk — Percentage of disk space currently used by the cluster and a line graph summarizing recent trends.
- Tags — Tags associated with the cluster.

You can also select the columns to display. Select the gear to open a menu with a search field at the top. Use the search field to filter columns to show column names using text matching. From the list of column names, select the ones you want to appear in the table.

These are the other columns you can display:

- \# of Alerts — Total number of alerts for the cluster.
- \# of Cores — Total number of cores used by the cluster.
- Conn. Usage — Connection usage as a percentage.
- IO Wait % — Percentage of the wait events of type Input/Output.
- IOPS — Number of input/output operations per second for the cluster.
- Kernel Version — Platform type of a self-managed cluster.
- OS Version — Operating system version of a self-managed cluster.
- Provider — ID of the CSP provider.
- Region — Locationid for an appliance cluster.
- TDS — Total database size in gibibytes.

> **Tip**
>
> To reset the columns to the default set, from the gear menu, select **Reset Columns**.

### Filtering the clusters to view

You can narrow the list of clusters displayed to include the ones you're interested in using either of two techniques:

- Use the table's **Search** box to search by name for the clusters you want to display.
- Use the **Filter** control to display clusters that match the following properties. Each property has a submenu to choose the specific type or values related to that property.

  - Engine
  - Include Deleted Clusters
  - Location
  - Management
  - Postgres Version
  - Project Name
  - Status

### Monitoring data staleness

The data in the table is refreshed every 30 seconds. A message under the table shows the last time the table was updated with new data.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
