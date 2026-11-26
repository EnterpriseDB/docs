---
title: Monitoring and logging
description: All the available monitoring and logging solutions on EDB Postgres AI Cloud Service.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/
lastModified: 2024-10-18T05:05:04Z
---

# Monitoring and logging

With Cloud Service, you have a few options for monitoring and logging solutions:

- If you're using your own cloud, the default observability solution is viewing metrics and logs from your cloud service provider. For more information about viewing metrics and logs from your cloud provider, see:

  - [Viewing metrics and logs from Azure](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/monitoring_from_azure/)

  - [Viewing metrics and logs from AWS](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/monitoring_from_aws/)

  For details on the types and format of metrics available from Cloud Service in your cloud provider, see [Metrics details](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/metrics/).

- Cloud Service provides a Prometheus-compatible endpoint you can use to connect to your own metrics infrastructure, such as your AWS Managed Grafana. It also provides the option to view logs from your cloud provider's blob storage solution. For more information, see [Other monitoring and logging solutions](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/other_monitoring/). This ability is an optional solution when you're using your own cloud account but is the only option when using Cloud Service's account.

- Cloud Service provides Cloud Service Observability as another metric endpoint. It consolidates and exposes metrics in each data plane. It is an integrated monitoring and alerting solution in Cloud Service. It's designed to monitor performance of the Postgres clusters. See [Cloud Service Observability](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/monitoring_using_biganimal_observability/) for more information.

- Existing Postgres Enterprise Manager (PEM) users who want to monitor Cloud Service clusters alongside self-managed Postgres clusters can use the remote monitoring capability of PEM. See [Remote monitoring](https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/pem_remote_monitoring/).

  With remote monitoring, you have access to many PEM features, including the ability to profile the workloads on your Cloud Service clusters. See [Profiling workloads](https://www.enterprisedb.com/docs/pem/latest/profiling_workloads/) for more information.

* [Metrics details](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/metrics/): Cloud Service collects a wide set of metrics about Postgres instances and makes them available in your cloud provider. Most of these metrics are acquired directly from Postgres system tables, views, and functions. The Postgres documentation is the main reference for these metrics.
* [Viewing metrics and logs from AWS](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/monitoring_from_aws/): Cloud Service sends all metrics and logs from Postgres clusters to AWS. You can view metrics and logs directly from AWS using AWS CloudWatch.
* [Viewing metrics and logs from Azure](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/monitoring_from_azure/): Cloud Service sends all metrics and logs from Postgres clusters to Azure. You can view metrics and logs directly from Azure.
* [Monitoring using Cloud Service Observability](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/monitoring_using_biganimal_observability/): Cloud Service Observability is an integrated monitoring and alerting solution in Cloud Service. It's designed to monitor the performance of the Postgres clusters. It actively monitors various metrics of the Postgres clusters and triggers an alert as the defined thresholds are exceeded. This solution smoothly integrates into the Cloud Service ecosystem, using the vast amount of metric data that's gathered from Postgres clusters and their underlying infrastructure across all the regions.
* [Other monitoring and logging solutions](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/other_monitoring/): Cloud Service provides a Prometheus-compatible endpoint you can use to connect to your own monitoring infrastructure as well as Postgres logs by way of blob storage.
* [Setting real-time alerts in Azure](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/alerts/): Cloud Service provides a wide range of metrics for your clusters. For details, see Metrics details. You can use a Log Analytics query to trigger a real-time alerts based on these metrics.
* [Health Status](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/health_status/): The Health Status dashboard provides real-time insight into the topology and health of Postgres high-availability clusters. It supports both primary/standby and distributed high-availability clusters.
* [Third-party monitoring integrations](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/third_party_integrations/): Cloud Service provides support for third-party monitoring integrations for using both your own account and Cloud Service's account.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
