---
title: Using Grafana dashboards
description: Learn how to use Grafana monitoring dashboards with Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/grafana_dashboards/
lastModified: 2025-11-07T18:06:05Z
---

# Using Grafana dashboards

The Grafana service shipped with Hybrid Manager (HM) comes with default dashboards designed to monitor different HM resources. Alternatively, create your own custom dashboard to display specific data that serves your organization's requirements.

## Default Grafana dashboards

The Grafana service shipped with HM comes with default dashboards that are grouped into the following categories:

- [Kubernetes dashboards](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/grafana_dashboards/kubernetes_dashboards/)
- [Loki dashboards](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/grafana_dashboards/loki_dashboards/)
- [Postgres dashboards](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/grafana_dashboards/postgres_dashboards/)
- [Telemetry dashboards](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/grafana_dashboards/telemetry_dashboards/)
- [Other dashboards](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/grafana_dashboards/other_dashboards/)

> **Note**
>
> The dashboard descriptions offer a generalized and exemplified overview of the default dashboards included with HM's Grafana. The availability of specific metrics depends on your environment.

## Custom dashboards

See Grafana's documentation to [create your own dashboard](https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/create-dashboard/).

> **Warning**
>
> Ensure you have a backup of any customized Grafana dashboards and have them stored on a version control repository. Any customized Grafana dashboards are deleted whenever the Grafana instance is updated or redeployed, for example, due to an HM upgrade, node Kubernetes version upgrade, or general node failure.

## Create, use, and manage dashboards

See the [Grafana documentation](https://grafana.com/docs/grafana/latest/) for information on how to create, use, and manage dashboards. Here are a few useful links:

- [Create a dashboard](https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/create-dashboard/).
- [Import dashboards](https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/import-dashboards/).
- [Modify dashboard settings](https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/modify-dashboard-settings/).
- [Manage dashboards](https://grafana.com/docs/grafana/latest/dashboards/manage-dashboards/).
- [Share dashboards](https://grafana.com/docs/grafana/latest/dashboards/share-dashboards-panels/).
- [Use Explore](https://grafana.com/docs/grafana/latest/explore/) to query, collect and analyze data.
- [Use Alerting](https://grafana.com/docs/grafana/latest/alerting/) to set up your system to watch and flag specific events.

* [Kubernetes dashboards](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/grafana_dashboards/kubernetes_dashboards/): Learn how to monitor Kubernetes using dashboards with Hybrid Manager.
* [Loki dashboards](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/grafana_dashboards/loki_dashboards/): Learn how to monitor Loki using dashboards with Hybrid Manager.
* [Postgres dashboards](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/grafana_dashboards/postgres_dashboards/): Learn how to use Postgres dashboards to monitor the performance and health of Postgres databases in Hybrid Manager.
* [Telemetry dashboards](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/grafana_dashboards/telemetry_dashboards/): Learn how to use Telemetry dashboards with FluentBit, Grafana, Memcached, Node, and Prometheus to monitor the Hybrid Manager platform.
* [Other dashboards](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/grafana_dashboards/other_dashboards/): Learn how to use other dashboards to monitor power usage, certificates, Velero, and more with Hybrid Manager.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
