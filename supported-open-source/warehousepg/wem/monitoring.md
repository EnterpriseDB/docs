---
title: Monitoring and managing your cluster
description: Use WarehousePG Enterprise Manager as a centralized hub for monitoring, managing, and optimizing WarehousePG clusters.
product: WarehousePG Enterprise Manager
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/
lastModified: 2026-09-22T14:04:10+01:00
---

# Monitoring and managing your cluster

Verify cluster health, maintain operational awareness, respond to system events in real time, and control the cluster directly, through the following core actions:

- [Verifying and managing cluster health:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/cluster-overview/) Maintain a real-time view of the cluster's topology and health, and start, stop, restart, or recover it directly from WEM when coordinator, standby, or segment nodes need attention.

- [Visualizing hardware performance:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/system-metrics/) Track the physical health of your infrastructure. Identify OS-level bottlenecks, such as CPU spikes, memory exhaustion, or network latency across specific hosts.

- [Validating database responsiveness:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/monitoring/) Ensure the database engine is actively processing requests. Review automated Canary checks, which are synthetic SQL probes that verify connectivity and execution speed.

- [Auditing system logs:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/logs/) Investigate the unified stream of system and database telemetry stored in ClickHouse, to pinpoint the root cause of query failures or administrative changes.

- [Managing alerts:](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/alerts/) Evaluate metric thresholds against ClickHouse and govern the incident lifecycle through real-time notifications.

* [Verifying and managing cluster health](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/cluster-overview/): Monitor real-time WarehousePG cluster health, verify node availability, and start, stop, restart, or recover the cluster directly from WEM.
* [Visualizing hardware performance](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/system-metrics/): Track physical host metrics, identifying resource bottlenecks, and correlating hardware spikes with database activity.
* [Validating database responsiveness](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/monitoring/): Track proactive health indicators and automated canary check results to ensure database availability.
* [Auditing system logs](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/logs/): Access, filter, and analyze system and database telemetry through integrated log viewers.
* [Managing alerts](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/monitoring/alerts/): Manage alerts to govern the incident lifecycle using the Prometheus Alertmanager integration to receive real-time notifications.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
