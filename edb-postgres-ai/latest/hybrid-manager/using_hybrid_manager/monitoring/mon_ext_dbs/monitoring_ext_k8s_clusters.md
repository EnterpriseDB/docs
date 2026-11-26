---
title: Monitoring standalone Kubernetes clusters
description: Monitor external Kubernetes clusters with the EDB Postgres AI agent.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/monitoring_ext_k8s_clusters/
lastModified: 2026-07-23T17:52:58+02:00
---

# Monitoring standalone Kubernetes clusters

Use the EDB Postgres AI agent for centralized monitoring, metrics collection, and resource management for your [EDB Postgres® AI for CloudNativePG™](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/) or [CloudNativePG™](https://cloudnative-pg.io/) clusters and integrate them on your Hybrid Manager (HM) console. By integrating these clusters with your HM console, you gain a unified view of your cloud-native environment. This integration is deployed using a Helm chart.

You can configure the EDB Postgres AI agent to run anywhere. To activate specific capabilities, assign one or more roles to it: Webhooks, Providers, Dispatchers, or Runners. You can configure a single agent to perform any combination of these functions simultaneously.

## Architecture

The architecture to implement monitoring Kubernetes deployments consists of the following components.

### EDB Postgres AI agent

The EDB Postgres AI agent serves as a centralized tool for resource discovery and monitoring, while also streamlining the collection and forwarding of your metrics.

### OpenTelemetry collector (optional)

The OpenTelemetry (OTEL) collector acts as a centralized data pipeline that gathers logs and exports telemetry data from your environment.

**Key functions:**

- Container metrics (cAdvisor): The cAdvisor service collects and processes resource usage data (CPU, memory) from active containers.
- Kubelet metrics: Monitors the health and performance of Kubernetes nodes and pods.
- Application logs: Aggregates and forwards logs from your database applications.
- Custom metrics: Allows for the collection of user-defined metrics tailored to specific application needs.

### Kube-state-metrics (optional)

Kube-state-metrics generates metrics based on the state of Kubernetes objects. Enable it as a subchart with `additionalCharts.kube-state-metrics.install: true`. See the [Configuration reference](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/monitoring_ext_k8s_clusters/configuration_reference/).

> **Important: Important:**
>
> When deploying [CloudNativePG™](https://www.enterprisedb.com/docs/supported-open-source/cloud_native_pg/) or [EDB Postgres® AI for CloudNativePG™](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/) clusters or Postgres Distributed (PGD) groups in different namespaces, you must [create the required secrets](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/monitoring_ext_k8s_clusters/installation_requirements/#namespace-and-secrets) in each namespace separately.

- [Requirements](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/monitoring_ext_k8s_clusters/installation_requirements/): Requirements for the EDB Postgres AI agent installation for external Kubernetes cluster
- [Installing](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/monitoring_ext_k8s_clusters/mon_ext_k8s_clusters/): Installing the EDB Postgres AI agent.
- [Configuration reference](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/monitoring_ext_k8s_clusters/configuration_reference/): Configuration reference for the EDB Postgres AI agent installation on Kubernetes environments.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
