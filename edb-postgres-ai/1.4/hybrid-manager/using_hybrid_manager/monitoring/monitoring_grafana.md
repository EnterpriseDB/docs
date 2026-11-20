---
title: Grafana
description: Learn about monitoring with Grafana for Hybrid Manager.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/
lastModified: 2026-07-23T19:28:07Z
---

# Grafana

Grafana allows you to visualize and analyze metrics about Hybrid Manager (HM) deployments, HM-managed database clusters and any other external clusters connected to HM.
You can monitor performance, troubleshoot issues, and gain insights into resource utilization.

For HM-managed clusters, Grafana gathers metrics out of the box. For external clusters, you must first install EDB Postgres AI agent, as explained in [Monitoring external databases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/).

## Grafana support

Grafana dashboards are supported as follows:

- HM-managed clusters — Full support out of the box.

- Self-managed clusters — Partial support after the cluster is connected via EDB Postgres AI agent.

- CNP clusters — Partial support after the cluster is connected via EDB Postgres AI agent.

- RDS clusters — Partial support after the cluster is connected via Kubernetes secret.

## Accessing Grafana

You can access the built-in Grafana instance via the [Launchpad](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hm_overview/using-portal/#launchpad).

## Filtering results

Every cluster managed by HM has an ID, which can be traced back to a namespace and its pods. You can filter and analyze metrics on Grafana by cluster ID (equivalent to a namespace) or by pod name to perform troubleshooting and resource planning operations.

See [Tracing clusters back to their Kubernetes resources](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/trace-clusters/) to understand how Kubernetes infrastructure relates to your cluster. More specifically:

- Understand how to obtain the [ID and namespace for a cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/trace-clusters/#using-hm-to-collate-the-cluster-to-its-namespace).
- Understand how to recognize the [pods](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/trace-clusters/#pods) in a cluster/namespace.

## Related topics

- [Using Grafana dashboards](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/grafana_dashboards/)
- [Grafana's Explore option](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/grafana_explore/)

* [Grafana dashboards](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/grafana_dashboards/): Learn how to use Grafana monitoring dashboards with Hybrid Manager.
* [Query logs with Explore](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/grafana_explore/): Learn about monitoring with the Explore option in Grafana for Hybrid Manager.
* [Troubleshooting](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/troubleshooting/): Understand common causes of warnings in Grafana and learn diagnostic steps.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
