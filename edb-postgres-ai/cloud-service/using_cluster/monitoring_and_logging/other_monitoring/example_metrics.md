---
title: Example metrics
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/other_monitoring/example_metrics/
lastModified: 2024-10-18T05:05:04Z
---

# Example metrics

Here are some helpful queries for monitoring the health of your Cloud Service database. This isn't a complete list. It's intended only as a starting point.

The examples are in [PromQL](https://prometheus.io/docs/prometheus/latest/querying/basics/) with variables suitable for use in a Grafana dashboard.

## Status

This query shows if the pods are up as provided by [Kube State metrics](https://github.com/kubernetes/kube-state-metrics/blob/main/docs/pod-metrics.md):

```PromQL
kube_pod_container_status_ready{container="postgres"}
```

![status\_example](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/other_monitoring/images/status_example.png)

## CPU

This query shows CPU usage as provided by [Kubernetes metrics](https://kubernetes.io/docs/reference/instrumentation/metrics/):

```PromQL
rate(container_cpu_usage_seconds_total{container="postgres"}[5m])
```

![cpu\_usage\_example](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/other_monitoring/images/cpu_usage_example.png)

## Memory

This query shows memory usage in megabytes as provided by [Kubernetes metrics](https://kubernetes.io/docs/concepts/cluster-administration/system-metrics/):

```PromQL
container_memory_working_set_bytes{container="postgres"}/1000000
```

![memory\_usage\_example](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/other_monitoring/images/memory_usage_example.png)

## Storage

This query shows the percentage of available storage used as provided by [Kubernetes metrics](https://kubernetes.io/docs/reference/instrumentation/metrics/):

```PromQL
(sum(kubelet_volume_stats_used_bytes{namespace=~"default"}) by (persistentvolumeclaim) / sum(kubelet_volume_stats_capacity_bytes{namespace=~"default"}) by (persistentvolumeclaim)) * 100
```

![pvc\_usage\_example](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/other_monitoring/images/pvc_usage_example.png)

## Replication lag

This query shows the replication lag as provided by the [CNP replication lag metric](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/metrics/#cnp_pg_replication) filtered by the `Postgres Instance ($instance)` pod:

```PromQL
cnp_pg_replication_lag{container="postgres", pod="$instance"}
```

![replication\_lag\_example](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/other_monitoring/images/replication_lag_example.png)

## Connections used

To calculate the connections used as a percentage, you can leverage the [cnp\_backends\_total](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/metrics/#cnp_backends) and [cnp\_pg\_settings\_setting](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/metrics/#cnp_pg_settings) metrics. This query calculates the percentage of connections used filtered by the `Postgres Instance ($instance)` pod:

```PromQL
100* (sum by (pod)(cnp_backends_total{pod="$instance"}) / max by (pod)(max_over_time(cnp_pg_settings_setting{name="max_connections",pod="$instance"}[30m])))
```

![connections\_example](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/other_monitoring/images/connections_example.png)

## Transaction ID age

This query shows the database transaction ID age as provided by the [CNP database xid metric](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/metrics/#cnp_pg_database) filtered by the `Postgres Instance ($instance)` pod:

```PromQL
(max by (pod) (cnp_pg_database_xid_age{container="postgres", pod="$instance"}))
```

![xid\_age\_example](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/other_monitoring/images/xid_age_example.png)

The age is relative to the workloads being run on your database and the following settings. See the Postgres documentation for details:

- [autovacuum\_freeze\_max\_age](https://www.postgresql.org/docs/current/runtime-config-autovacuum.html). The default is 200000000.
- [vacuum\_multixact\_failsafe\_age](https://www.postgresql.org/docs/15/runtime-config-client.html). The default is 1600000000.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
