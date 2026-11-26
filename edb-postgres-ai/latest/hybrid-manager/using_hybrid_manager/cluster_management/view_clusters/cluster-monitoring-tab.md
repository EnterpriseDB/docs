---
title: Cluster monitoring
description: Learn about monitoring a Hybrid Manager cluster.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/view_clusters/cluster-monitoring-tab/
lastModified: 2026-07-23T17:52:58+02:00
---

# Cluster monitoring

The **Monitoring** tab provides a detailed view of node and cluster health.

## Monitoring

Review the **Monitoring** section for a summary of the cluster's health status. Use the monitoring control at the top of the table to control what the table shows.

You can specify when you want the displayed data to start. The default is 15 minutes, which means to display data from the last 15 minutes. You can specify a value between 15 days and 5 minutes. Alternatively, use the date and time pickers to select a custom time range to sample the monitoring data from. You can select time ranges only where data for the cluster is available. Select a time from the first menu clears any date and time you specified.

You can also specify whether to display the data as an aggregate of all the nodes in the cluster (**Cluster level**) or for each node (**Node level**). The default is to show the data at the cluster level.

Enable **Display Events** for each monitoring category (**Host**, **Connections**, **Transactions**, etc.) to overlay event markers, including schema change events detected by HM. For self-managed clusters monitored through the EDB Postgres AI agent, schema change events appear as event markers rather than in the Cluster Activity Log.

At the cluster level, each ring chart is a single ring showing the average of the data for all nodes in the cluster and graphs are based on a similar aggregation.

At the node level, each chart is a concentric ring chart. Each ring represents a node in the cluster. Graphs are displayed separately for each node.

## Comparing time periods

The comparison view lets you compare monitoring metrics and query statistics between two non-adjacent time periods side by side, so you can understand the impact of changes, incidents, or workload shifts. To open it, select **+ New Comparison** from the **Monitoring** tab.

Define a **Reference Period** and a **Comparison Period**. For each period, set the start and end time using the date and time pickers, or by selecting a deployment marker event. Use the **Monitoring** and **Query Diagnostics** toggles to include or exclude those sections from the comparison.

The view displays charts for both periods side by side, with a delta badge between them showing the percentage difference. The **Reference vs Comparison Period** section below the charts compares query performance across both periods. Results are scoped to a single cluster and support both cluster-level and node-level views.

> **Note**
>
> Data availability is subject to retention limits: monitoring metrics are retained for up to 30 days, and query statistics for up to 7 days.

## Active alerts

The summary of active alerts displays the number of active alerts in three categories: high severity, medium severity, and low severity.

In the searchable table view of alerts, the search/filter bar lets you:

- Filter by a text search term. Enter a value in the **Search** box.
- Filter by a time range. Select the **From** and **To** date/time pickers.
- Filter by severity. Select **Filter > Severity** and then one or more of the available severities.
- Sort by start time, severity, or alert in ascending or descending order.
- Select auto-refreshing by selecting the lightning icon.
- Select the displayed columns. Select the cog and then, from the menu, select the columns to display in the table.
- Download the currently displayed alerts in CSV format. Select the download icon.

## Host

Review the **Host** section for summary of operating system statistics displayed in charts:

- **Memory** — The average memory usage percentage of memory for Postgres primary node.

- **CPU** — The average CPU percentage for Postgres primary node.

- **Storage** — Total storage used for Postgres primary node.

- **Disk IOPS** — Total number of reads, writes, and total operations on the disk per second over a time period.

- **Disk Throughput** — Total amount of data transferred to and from the disk per second for Postgres nodes.

- **Network Activity** — Total amount of data transferred to and from the network card per second over a time period for Postgres nodes.

## Connections

- **Connections** — The current number of connections between the client applications and Postgres database by type.
- **Average Active Sessions by Wait Type** — Time spent on each wait event type by the primary Postgres nodes is calculated using Average Active Sessions (AAS).
- **Number of blocked backends** — Total number of backends waiting on locks across all Postgres nodes in the cluster.

## Transactions

- **Tuples In** — Total number of tuples inserted, updated, and deleted per second for Postgres nodes.
- **Tuples Out** — Total number of tuples fetched and returned per second for Postgres nodes.
- **Transaction Rate** — Total number of committed/rolled-back/total transactions per second for Postgres nodes.
- **Buffer Cache Hit Ratio** — Average buffer cache hit percentage across all Postgres nodes in the cluster.
- **Longest Running Transaction** — Total number of longest running transactions per second for Postgres nodes.

## Queries

- **Query Rate** — Total number of queries per second for Postgres nodes.
- **Query Latency** — Average query latency in milliseconds across all Postgres nodes in the cluster.

## Storage

- **Database size** (line chart) — Total database size across the primary Postgres nodes.
- **Disk Usage** — Disk usage in percentage for primary Postgres nodes.
- **WAL Size** — Total WAL directory size across the primary Postgres nodes.
- **WAL Usage** — WAL usage in percentage for primary Postgres nodes.
- **Live/Dead Tuples** — Total number of Live/Dead tuples for Postgres nodes.
- **Index, Table, and Temp estimated size** — Estimated size of index, table and temp for Postgres nodes.

## Internals

- **Time Since Last Autovacuum** — Time since the last autovacuum in seconds for Postgres nodes.
- **Autovacuum Stats** — Total number of autovacuum operations per second for Postgres nodes.
- **Time Since Last Checkpoint** — Time since the last checkpoint in seconds for Postgres nodes.
- **Checkpoint Stats** — Total number of checkpoints per second for Postgres nodes.
- **Time Since Last Successful WAL Archive** — Time since the last successful WAL archive in seconds for Postgres nodes.
- **WAL Archiving Stats** — Total number of WAL archiving operations per second for Postgres nodes.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
