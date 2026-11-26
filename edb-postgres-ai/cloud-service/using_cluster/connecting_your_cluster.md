---
title: Connecting to your cluster
description: Connect to your cluster from your applications, client apps, and EDB's tools.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connecting_your_cluster/
lastModified: 2024-11-21T09:29:59-08:00
---

# Connecting to your cluster

You can connect to your cluster from your cloud applications, from your client apps, and from integration points such as EDB's migration tools.

## From your applications

The private networking option offers a higher level of isolation and security by moving your cluster out of the public internet. Clusters with private networking enabled by default aren't accessible from outside of your cluster's resource network. You need to perform additional configuration steps to connect your applications in other parts of your cloud infrastructure to your clusters by way of private network links.

> **Note**
>
> We strongly discourage provisioning additional resources in the cluster's resource virtual network.

See:

- [Connecting from Azure](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connecting_your_cluster/connecting_from_azure/)
- [Connecting from AWS](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connecting_your_cluster/02_connecting_from_aws/)
- [Connecting from Google Cloud](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connecting_your_cluster/connecting_from_gcp/)

## From a client app

For details on connecting from psql or edb-psql, other common database drivers, and pgAdmin, see [Connecting from a client app](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connect_from_a_client/).

- [psql or edb-psql](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connect_from_a_client/#connect-to-your-cluster-using-psql-or-edb-psql)
- [other common database drivers](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connect_from_a_client/#connect-to-your-cluster-using-common-database-drivers)
- [pgAdmin](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connect_from_a_client/#connect-to-your-cluster-using-pgadmin)

There you'll also find details on connecting read-only workloads and configuring SSL settings.

## From an EDB's migration tools integration point

To connect your cluster to EDB's migration tools, see [Migrating databases to EDB Postgres AI](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/managing_your_cluster/migration/).

## See also

- [Get cluster connection information](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/cli/managing_clusters/#get-cluster-connection-information) using the CLI

* [From AWS](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connecting_your_cluster/02_connecting_from_aws/): Connect to your cluster from AWS.
* [From Google Cloud](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connecting_your_cluster/connecting_from_gcp/): Connect to your cluster from Google Cloud.
* [From Azure](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connecting_your_cluster/connecting_from_azure/): Connect to your cluster from Azure.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
