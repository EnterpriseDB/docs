---
title: Probes
description: Learn about monitoring performance using probes.
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/
lastModified: 2026-09-29T20:16:05+05:30
---

# Probes

Probe is a scheduled task performed by a Postgres Enterprise Manager (PEM) agent to retrieve performance metrics and information about monitored database objects.

Probes are categorized into the following types:

- [System probes](#system-probes)
- [Custom probes](#customizing-probes)

To monitor probe health and diagnose failing or stale probes across your fleet, see [Probe diagnostics](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/probe_diagnostics/).

## System probes

PEM features built-in probes at five levels.

- **Agent level** — Monitors host-specific data such as CPU usage, disk space, memory usage, and network statistics.

- **Server level** — Tracks global database information including background writer statistics, blocked sessions, session information, and WAL files.

- **Database/Schema level** — Monitors specific object data such as database size, function statistics, table statistics, and index size.

- **Tool-specific probes** — Includes probes for Barman (backup), Failover manager (HA), Patroni cluster status, and various replication methods (Streaming, Replication Server).

- **Extension level** — Monitors specific extension data such as [Postgres distributed (PGD) probes](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/system_probes/#postgres-distributed-pgd-probes).

## Customizing probes

You can create, modify, copy, export/import, and delete custom probes to tailor monitoring to your specific needs.

You can modify probe settings using **Management > Probes > Manage Probes** tab.

1. [**Creating custom probes**](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/managing_customizing_probes/creating_custom_probe/)

   Custom probes can be created to monitor specific metrics not covered by built-in probes using three collection methods:

   - **SQL Query** — Write custom SQL queries to fetch specific metrics from the database.
   - **WMI** — Uses WMI to collect data from Windows systems.
   - **Batch** — Uses command-line or shell scripts to gather data from the system. It requires `allow_batch_probes` to be enabled in the `agent.cfg` file.

2. **Core management tasks**

   - **Modify schedule** — Customize execution frequency (minutes/seconds) of probes by disabling the **Default** switch.
   - **Enable/Disable probes** — Toggle the status to **on** or **off** as needed. Disabled probes used in charts displays an icon to re-enable them.
   - **Data retention** — Specifies how long probe history is stored before automatic deletion.
   - **Copying configurations** — Use the **Copy probe** button to duplicate probe settings from one object to another except for extension-level probes.

3. **Export/Import and deletion**

   - **Export/Import** — Use the **Export**/**Import** buttons to transfer probe configurations between different PEM installations.
   - **Deletion** — Custom probes can be deleted using the **Delete** button. System probes cannot be deleted.

- [System probes](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/system_probes/): Learn about system probes in PEM.
- [Managing and customizing probes](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/managing_customizing_probes/): Learn how to manage and customize probes in PEM
- [Probe configuration](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/probe_configuration/): Learn about probe configuration in PEM
- [Probe diagnostics](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/probe_diagnostics/): Learn how to monitor probe health across your fleet and diagnose failing or stale probes.
- [Copying probe configurations](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/copying_probe/): Learn how to copy probe configurations in PEM

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
