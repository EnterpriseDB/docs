---
title: Cluster logs
description: Learn about the various log files for a Hybrid Manager cluster.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/view_clusters/cluster-logs-tab/
lastModified: 2026-08-13T16:37:46+02:00
---

# Cluster logs

The **Logs** tab for a cluster in Hybrid Manager (HM) displays log entries from the cluster's pods. Use it to trace events, warnings, and errors while debugging. You can filter the entries by service, pod, time range, and the structured fields of each entry.

## What the tab displays by default

By default, the **Logs** tab displays Postgres logs only. If you're looking for entries that aren't there, change the **Service Name** menu:

- **Postgres** — logs from the Postgres service. This option is the default.

- **Beacon Agent** — logs from the [EDB Postgres AI agent](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/), which collects monitoring data and pushes it to HM. Select this when you're investigating data collection problems, such as missing metrics or gaps in monitoring data, rather than database problems.

To isolate Postgres logs, filter by service rather than by container. On CloudNativePG (CNPG)-based clusters, the `postgres` container also carries instance-manager output, so filtering by container doesn't return the database's own logs alone.

When filtering by log field, **Severity** is the error severity reported by Postgres itself (`INFO`, `LOG`, `WARNING`, `ERROR`, `FATAL`, or `PANIC`), while **Level** is the log level recorded by the collector. Filter on **Severity** when you want the database's own assessment of an event.

## Availability

Log collection isn't available for every cluster type:

- For HM-managed clusters, HM collects logs by default.

- For external self-managed clusters, the EDB Postgres AI agent must have log collection enabled. If this tab is empty for a self-managed cluster, check that `general.metrics.push.include_logs` is `true` and that `logs.disabled` is `false` for the relevant node. See [Fine-tuning monitoring data collection](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/configure_agent/fine_tune_monitoring/).

- For external cloud service provider (CSP)-managed databases, such as AWS RDS, HM doesn't collect logs and this tab has no data. See [Metrics support scope](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/monitoring_console/support_scope/).

## Timestamps and retention

The tab displays timestamps in Coordinated Universal Time (UTC), not your local time zone. Account for this difference when you correlate entries with logs from other systems.

HM retains log entries for 30 days by default, so the time range you select can't reach further back than that. The tab refreshes every 10 seconds. See [Metrics refresh intervals](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/monitoring_console/metrics_latency/).

## Querying logs beyond this tab

HM collects logs into Loki. For queries this tab can't express, such as searching across several clusters at once, use [Grafana's Explore option](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/grafana_explore/) to query Loki directly.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
