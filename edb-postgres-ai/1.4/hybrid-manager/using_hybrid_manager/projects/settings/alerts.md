---
title: Alerts
description: Learn about alerts for proactive notification about critical events with Hybrid Manager.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/projects/settings/alerts/
lastModified: 2026-07-23T19:28:07Z
---

# Alerts

Alerting is integral to the Hybrid Manager (HM) observability ecosystem. It proactively notifies about critical events that impact the performance of the Postgres cluster. It continuously monitors essential performance metrics and triggers alerts whenever predefined thresholds are exceeded. This robust alerting system integrates seamlessly into the HM ecosystem, leveraging real-time data collected from Postgres clusters and their infrastructure across all regions. Alerts are enabled by default for each project created in HM.

The alerting system ensures timely notifications, allowing for quick and informed actions. You can configure specific thresholds and intervals to customize the alerting experience. This integration of monitoring and alerting enables swift responses to potential issues and so you can maintain optimal cluster performance.

## View the alerts

You can access the alerts on the **Monitoring** tab of the cluster detail page and view the alert details for a specific cluster.

For HM clusters:

1. In the HM console, select **Projects**.
2. Select any project from the list.
3. In the left navigation, select **Clusters**.
4. Select any cluster with a ready state.
5. On the cluster detail page, select the **Monitoring** tab.

For external HM clusters:

1. In the HM console, select **Estate**.
2. Go to the table listing all the clusters.
3. Select a ready cluster with **Management** as **Self-managed**.
4. On the cluster detail page, select the **Monitoring** tab.

The **Monitoring** tab displays the Active Alerts list in a table. At the top of this tab, you can view a summary of the active alerts. Possible severity levels are High, Medium, and Low.

You can search for specific alerts using the:

- Search box for query-based search
- Date range selector to search within a specific date range
- Filter to search by severity level

Select any nodes in the Node column to view the charts as they were when the alert was triggered. Selecting a node applies the filters in the **Monitoring** tab and displays the relevant charts.

You can also:

- Select **Download CSV** to download the alert details in CSV format.
- Sort the alerts list based on severity, alert start time, and alert name.
- Select **Refresh** to refresh the list.
- Use the column selector to select the columns to display in the table.

## Configure alerts

Project admins can configure alerts at the project level. Once the alerts are configured and applied, the system takes a few minutes to fully process the alerts.

To configure alerts:

1. At the top of the HM console, select **Projects**.
2. Select any project from the list.
3. In the left navigation, select **Settings**.
4. Select **Alerts**.

For each alert, select **Edit** to set:

- Enable/Disable — Activate or deactivate a specific alert.
- Notify After — Set the time duration after which the alert is triggered.
- Threshold — Specify the percentage or values that trigger an alert when exceeded.

You can configure these alerts at the database level:

- Connections Usage
- No Recent WAL Archiving Successes
- Node Down
- Replication Lag in Bytes
- Total Connections
- Total Inactive Replication Slots
- Transactions Rollback
- WAL Keeps Growing
- WAL Running Out of Disk Space

You can configure these alerts at the host level:

- CPU Utilization
- Disk IOPS
- Disk Usage
- Memory Usage

> **Note**
>
> - HM saves any changes you make to the alert configuration.
> - Not all the alerts are available for external HM clusters due to technical limitations.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
