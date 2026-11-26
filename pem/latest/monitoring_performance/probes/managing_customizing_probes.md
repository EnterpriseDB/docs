---
title: Managing and customizing probes
description: Learn how to manage and customize probes in PEM
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/managing_customizing_probes/
lastModified: 2026-02-19T17:45:35+05:30
---

# Managing and customizing probes

A probe is a scheduled task that returns a set of performance metrics about a specific monitored object. A probe retrieves statistics from a monitored server, database, database object, operating system, or agent.

The **Manage Probes** tab allows administrators to configure the data collection metrics (probes) that Postgres Enterprise Manager (PEM) agents use to monitor databases and servers. This interface provides granular control over what data is collected, how often, and how long it is retained.

## Probes overview table

The **Manage Probes** tab displays a list of available probes with the following configurable attributes:

- **Name** — The descriptive identifier for the probe (e.g., Database Statistics, Tablespace Size).

- **Collection method** — The protocol used to gather data, such as `SQL`, `WMI`, or `Batch/Shell Script`.

- **Target type** — The level of the hierarchy being monitored, such as `Server`, `Database`, `Table`, `Schema`, `Index`, `Sequence`, `Function/Procedure`, or so on.

- **Monitoring target** — The parent entity where the probe is applied such as `Database Server`, `Database`, `Schema`, or `Table`.

- **Interval (Minutes/Seconds)** — The frequency at which the probe executes (e.g., every 5 minutes or 30 minutes).

- **Enabled?** — A toggle switch that displays whether a probe is enabled or disabled.

- **Data retention** — The number of days the collected historical data is stored in the PEM database before being purged.

## Key Management Actions

You can use the icons or bars to perform the following tasks:

- **Filter/Search** — Use the search bar at the top to find specific probes by name.

- **Toggle System Probes** — Use the **Show System Probes?** switch in the top-right to view or hide built-in default probes.

- **Create Custom Probe** — Use the plus icon on the top-right toolbar to create a new custom probe.

- **Refresh Probes List** — Use the refresh icon on the top-right toolbar to reload the list of probes and reflect any recent changes.

- **Save Changes** — Use the disk icon on the top-right toolbar to save any modifications made to probe configurations.

- **Export/Import** — Use the outbox arrow and inbox arrow icons in the top-right toolbar to export probe configurations or import the probe configurations from a file.

- **Edit Probe** — Use the pencil icon on the left of probe name to modify a probe's collection interval or retention period.

- **Delete Probe** — Use the trash can icon to remove custom probes. You can't delete built-in system probes.

> **Note**
>
> If data from a disabled probe is used in a chart, the chart displays an information icon in the upper-left corner that allows you to enable the probe by clicking the provided link.

- [Creating custom probes](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/managing_customizing_probes/creating_custom_probe/): Learn how to create custom probes in PEM
- [Exporting or importing probes](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/managing_customizing_probes/exporting_importing_probes/): Learn how to export and import probes in PEM
- [Deleting a custom probe](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/managing_customizing_probes/deleting_probe/): Learn how to delete a custom probe in PEM
- [Managing probes using pemworker](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/managing_customizing_probes/managing_using_pemworker/): Learn how to manage probes using pemworker in PEM

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
