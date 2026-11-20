---
title: Getting started with WarehousePG Enterprise Manager
description: Learn how to access the console, understand user roles, and navigate the primary dashboard components.
product: WarehousePG Enterprise Manager
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/get-started/
lastModified: 2026-10-22T09:33:56+02:00
---

# Getting started with WarehousePG Enterprise Manager

Once WarehousePG Enterprise Manager (WEM) is installed and the backend services are running, you can begin observing system health and tuning performance.

> **Important**
>
> The host running WEM must remain online and the application must be active to ensure continuous data gathering. Stopping the application halts the collection of SQL and cluster-level metrics.

## Accessing the console and managing your session

Access the centralized management suite to begin monitoring your WarehousePG (WHPG) cluster.

1. Navigate to your WEM server URL (for example, `http://your-server:8080`) and enter your administrative credentials. The initial administrator username is `admin`, with the password you set (or that WEM auto-generated) as `WEM_ADMIN_PASSWORD` during installation.
2. Check the top right bar of the interface to confirm your current role (**Admin**, **Operator**, or **Viewer**). Your role determines which panels and actions are visible during the session.
3. Sessions automatically expire after a period of inactivity for security. If a timeout occurs, you must log in again to return to the authentication screen. Save any active work in the **Query Editor** regularly to prevent data loss.

## Navigating the interface structure

The WEM interface is organized into functional areas designed to help you move from high-level alerts to deep-dive diagnostics.

- **Panels (left sidebar):**  Access the primary functional modules such as **Cluster**, **Monitoring**, and **Access Management**.
- **Header (top):** View the current page title, system time, and global controls.
- **Tabs (top of content):** Navigate between specific tools or sub-views in a selected panel.
- **Interactive data (center):** Interact with data tables, live performance charts, and configuration tools.

**Navigation directory**

| Task                                                                                                                                                             | Panel               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| [Verifying and managing cluster health](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/cluster-overview/)                    | Cluster             |
| [Monitoring and evaluating queries](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/performance/query-monitor/)                          | Query Monitoring    |
| [Authoring and tuning SQL statements](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/performance/query-monitor/#using-the-query-editor) | Query Editor        |
| [Analyzing data distribution](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/performance/data-analysis/)                                | Database Objects    |
| [Planning storage capacity](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/performance/storage/)                                        | Storage             |
| [Defining access policies](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/system-access/access-management/)                             | Access Management   |
| [Visualizing hardware performance](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/system-metrics/)                           | System Metrics      |
| [Managing system resources](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/performance/managing-resources/)                             | Resource Management |
| [Securing backups](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/protecting-data/backups/)                                             | Backups             |
| [Managing disaster recovery](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/protecting-data/safeguard/)                                 | Safeguard           |
| [Auditing system logs](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/logs/)                                                 | Logs                |
| [Validating database responsiveness](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/monitoring/)                             | Monitoring          |
| [Managing alerts](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/alerts/)                                                    | Alerts              |
| [Performing administrative management](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/system-access/management/)                        | Management          |

## Understanding user roles and permissions

WEM uses role-based access control (RBAC). After the initial bootstrap, all user management and password updates are handled exclusively via the **Management** panel. A user's assigned profile, and the individual actions granted to it, determine which panels and actions are visible. See [Defining role-based access control](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/system-access/management/#defining-role-based-access-control) for how to configure it, and the [Role permissions matrix](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/reference/#role-permissions-matrix) for the default access each profile has.

## Monitoring cluster health with the Dashboard

The **Dashboard** is your landing page, which provides a real-time snapshot of cluster health and resource consumption.

**Review status and resources:**

- Monitor high-level indicators for an immediate status check, such as **Uptime**, **Connections**, and **Last Sync** time.
- View healthy vs. unhealthy segments.
- Monitor storage utilization for the coordinator and segments.

**Analyze performance charts**

- Track running, queued, and blocked queries in the **Active Queries** chart.
- Visualize system and user utilization with **CPU Usage**.
- Monitor total memory usage percentage with **Memory Usage**.

**Audit recent alerts**

- Review the **Recent Logs** card for the 10 most recent `ERROR`, `FATAL`, `PANIC`, and `WARNING` logs, with their time, severity level, and source host. Navigate to the [**Logs** panel](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/logs/) for a full audit trail.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
