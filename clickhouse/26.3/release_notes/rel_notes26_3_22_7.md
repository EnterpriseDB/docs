---
title: EDB Postgres AI for ClickHouse® 26.3.22.7 release notes
description: Release notes for EDB Postgres AI for ClickHouse 26.3.22.7, including the Kubernetes operator, MCP server, and pg_stat_ch updates.
product: EDB Postgres AI for ClickHouse
version: "26.3"
url: https://www.enterprisedb.com/docs/clickhouse/26.3/release_notes/rel_notes26_3_22_7/
lastModified: 2026-11-02T13:02:55+01:00
---

# EDB Postgres AI for ClickHouse® 26.3.22.7 release notes

Released: 7 September 2026

EDB Postgres AI for ClickHouse® 26.3.22.7 updates the ClickHouse server from 26.3.17.56 and updates the Kubernetes operator, and introduces pg\_stat\_ch and the MCP server as tracked components.

## ClickHouse® server

| Type           | Description                                                                                                                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Upstream merge | Updated to the open-source [ClickHouse 26.3.22.7](https://github.com/ClickHouse/ClickHouse/releases/tag/v26.3.22.7-lts) LTS release, rolling up upstream bug fixes from 26.3.17 through 26.3.22. |

## Kubernetes operator

| Type           | Description                                                                                                                                                                                                                                                                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Upstream merge | Updated to `0.27.3-1edb1`, tracking upstream [Altinity clickhouse-operator release-0.27.3](https://github.com/Altinity/clickhouse-operator/releases/tag/release-0.27.3).                                                                                                                                                                             |
| Feature        | Added a Keeper metrics `ServiceMonitor` to the Helm chart. Setting `serviceMonitor.enabled` now creates a `ServiceMonitor` that scrapes the native ClickHouse Keeper Prometheus endpoints on operator-managed Keeper services. Opt out with `serviceMonitor.keeperMetrics.enabled=false`.                                                            |
| Feature        | The host-hook execution machinery now uses explicit shell creation and a run-on-host command, and emits a new event when a hook is skipped because the host is unreachable.                                                                                                                                                                          |
| Bug fix        | Added retries for transient Kubernetes API errors. `Get` calls in the `chi` and `chk` kube drivers now retry with a bounded exponential backoff, up to 5 attempts over roughly 7.5 seconds, instead of aborting the whole rollout on a sub-second control plane blip. Terminal errors, such as `NotFound` and `Conflict`, still surface immediately. |
| Bug fix        | Improved shard safety so it no longer starves sibling shards. Unhealthy replicas in a shard now reconcile before healthy ones, and a host deferred for shard safety no longer aborts the whole reconciliation pass. The deferral now surfaces as a dedicated `Aborted` reason instead of getting swallowed.                                          |
| Bug fix        | Restored `shouldExcludeHost` for image changes, so hosts are excluded and drained again when their image changes.                                                                                                                                                                                                                                    |
| Bug fix        | Fixed the `onLostVolume: no` reconcile setting, which was previously ignored.                                                                                                                                                                                                                                                                        |
| Bug fix        | Fixed informer delete handling. Direct objects and `DeletedFinalStateUnknown` tombstones now go through one typed delete handler that reports malformed events instead of panicking.                                                                                                                                                                 |
| Bug fix        | Restored reconciliation after operator IP address changes.                                                                                                                                                                                                                                                                                           |

## pg\_stat\_ch

| Type           | Description                                                                                                                                                                                                                                                                                                             |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Upstream merge | Initial EDB packaging of `pg_stat_ch`, EDB's build of the open-source [pg\_stat\_ch](https://github.com/ClickHouse/pg_stat_ch) Postgres extension, at upstream `0.4.0`, packaged as `0.4.0-1edb1`. See [Monitoring Postgres with pg\_stat\_ch](https://www.enterprisedb.com/docs/clickhouse/26.3/monitoring_postgres/). |

## MCP server

| Type           | Description                                                                                                                                                                                                                                                                                                             |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Upstream merge | Initial EDB packaging of `edb-clickhouse-mcp`, EDB's fork of the open-source [ClickHouse MCP server](https://github.com/ClickHouse/mcp-clickhouse), at upstream `v0.4.1`, packaged as `0.4.1-1edb1`. See [Connecting AI agents to ClickHouse](https://www.enterprisedb.com/docs/clickhouse/26.3/connecting_ai_agents/). |
| Feature        | The container image runs as an unprivileged user rather than root, limiting what a compromised container could access on the host.                                                                                                                                                                                      |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
