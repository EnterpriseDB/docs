---
title: WarehousePG Enterprise Manager
description: Use WarehousePG Enterprise Manager as a centralized hub for monitoring, managing, and optimizing WarehousePG clusters.
product: WarehousePG Enterprise Manager
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/
lastModified: 2026-10-02T11:11:03+01:00
---

# WarehousePG Enterprise Manager

WarehousePG Enterprise Manager (WEM) is a comprehensive management and monitoring platform for WarehousePG (WHPG) clusters. By integrating real-time telemetry, AI-assisted development, and interactive configuration, WEM streamlines complex distributed database operations into a single visual interface. It provides a single pane of glass for auditing cluster health, tuning SQL performance, and managing security in high-performance environments.

## Why WEM?

Managing a distributed architecture across multiple segment nodes is inherently complex. WEM simplifies cluster management by providing:

- **Consolidated visibility:** Stop jumping between nodes. View host metrics, SQL statistics, and system logs in one place.

- **Built-in intelligence:** Use the AI Assistant to explain execution plans and optimize distributed queries.

- **Proactive health:** Identify data skew, monitor resource bottlenecks, and run automated Canary checks.

### Key capabilities

WEM introduces a robust suite of tools for the modern database administrator and developer:

- **Observability & health**

  - [Real-time & historical metrics:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/overview/architecture/) Monitor live cluster pulse using WEM's internal database extraction engine, and analyze long-term trends stored in ClickHouse.

  - [Cluster overview:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/cluster-overview/) A dedicated dashboard for the immediate health status of your coordinator and segment architecture.

  - [Hardware monitoring:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/system-metrics/) Real-time and historical tracking of CPU, memory, disk I/O, and network usage across the cluster, filterable by host and time range.

  - [Log management:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/logs/) Searchable, aggregated log streams powered by ClickHouse for rapid root-cause analysis.

  - [Alerting & incident management:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/alerts/) Configurable alert rules against canary check failures, segment outages, disk thresholds, and long-running queries, with notifications, silencing, and history.

- **Intelligence & analysis**

  - [Query monitoring & editor:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/performance/query-monitor/) Track active queries and sessions in real time, and use a full-featured SQL editor with an AI Assistant and a unified output panel for query results, `EXPLAIN`, and `ANALYZE`, to write, optimize, and explain distributed queries.

  - [Data skew & schema analysis:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/performance/data-analysis/) Deep-dive tools to analyze table distribution, compression, bloat, and missing statistics, keeping schemas efficient across the cluster segments.

  - [Storage capacity planning:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/performance/storage/) Audit disk utilization across the cluster, spot storage imbalances between hosts, and forecast future capacity needs from historical growth trends.

  - [PXF management:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/performance/data-analysis/#managing-pxf) Start, stop, and sync the PXF service across your cluster from a dedicated tab, dispatched through the host agent.

- **Cluster administration**

  - [Cluster lifecycle management:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/cluster-overview/#starting-stopping-and-restarting-the-cluster) Start, stop, and restart the cluster, and recover failed segments, directly from WEM, without shell access to the coordinator.

  - [Resource governance:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/performance/managing-resources/) Configure resource groups or resource queues to govern CPU, memory, and concurrency limits per workload, and schedule limit changes for specific days and times.

  - [Access policies:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/system-access/access-management/) An interactive HBA editor for `pg_hba.conf` and role-based permissions at the schema and table level.

  - [Administrative management:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/system-access/management/) A centralized interface for user accounts, profiles, and per-action permission grants, alongside existing panel-level access controls.

  - [Audit logging:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/system-access/management/#auditing-administrative-actions) A chronological record of every administrative action, including logins, failed logins, and account changes, filterable by time range and action type.

  - [System settings audit:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/system-access/access-management/#auditing-system-settings) A searchable interface to verify and audit cluster-level configuration parameters.

  - [Secure, self-registering host agents:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/host-agent/) Host agents register themselves with WEM automatically and authenticate every connection with mutual TLS, with Admin approval for each new agent from a dedicated tab.

  - [Dedicated database role:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/wem/#target-cluster) WEM connects to your WarehousePG cluster with a dedicated login role, created automatically during setup, instead of reusing the same superuser credentials for every connection.

  - [Canary checks:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/monitoring/) Automated "heartbeat" tests that proactively verify cluster connectivity and query responsiveness.

- **Data protection**

  - [Backup & recovery:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/protecting-data/backups/) Take, restore, and schedule backups directly from WEM, and audit recovery points and snapshot health across the cluster.

  - [Disaster recovery:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/protecting-data/safeguard/) Check DR readiness at a glance with Safeguard, and manage backups, restores, and promotion between your primary cluster and a DR standby, through `whpg-dr` integration.

* [Release notes](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/release_notes/): Release notes provide information on what's new in each release of WarehousePG Enterprise Manager.
* [Overview](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/overview/): Learn about the architecture, supported platforms, and operational considerations for WarehousePG Enterprise Manager.
* [Installing and upgrading](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/): Learn how to install and upgrade WarehousePG Enterprise Manager.
* [Getting started](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/get-started/): Learn how to access the console, understand user roles, and navigate the primary dashboard components.
* [Configuring WEM](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/configuring/): Configure WEM settings after installation using the WEM settings tab or configuration file.
* [Monitoring and managing your cluster](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/): Use WarehousePG Enterprise Manager as a centralized hub for monitoring, managing, and optimizing WarehousePG clusters.
* [Optimizing system performance](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/performance/): Use WarehousePG Enterprise Manager to tune workloads, manage resource allocation, and ensure data durability across WarehousePG clusters.
* [Protecting data](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/protecting-data/): Use WarehousePG Enterprise Manager to monitor backups.
* [Managing system access](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/system-access/): Use WarehousePG Enterprise Manager to establish safety protocols, manage user credentials, and enforce role-based access controls.
* [Troubleshooting](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/troubleshooting/): Solutions for connectivity, authentication, and permission issues within WarehousePG Enterprise Manager.
* [Reference](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/reference/): Comprehensive technical reference for WarehousePG Enterprise Manager.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
