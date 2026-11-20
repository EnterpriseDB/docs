---
title: EDB PgBouncer
description: EDB PgBouncer availability on Cloud Service.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/poolers/
lastModified: 2024-10-18T05:05:04Z
---

# EDB PgBouncer

EDB PgBouncer can manage your connections to Postgres databases and help your workloads run more efficiently. It's particularly useful if you plan to use more than a few hundred active connections. You can enable EDB PgBouncer to be entirely managed by Cloud Service, when creating your cluster. See [Creating a cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/creating_cluster/creating_a_cluster/#pgbouncer).

Cloud Service provisions up to three instances per EDB PgBouncer-enabled cluster to ensure that performance is unaffected, so each availability zone receives its own instance of EDB PgBouncer.

> **Note**
>
> Currently, you can't enable EDB PgBouncer when creating a distributed high-availability cluster.

If you want to deploy and manage PgBouncer outside of Cloud Service, see the [How to configure EDB PgBouncer with Cloud Service cluster](https://support.biganimal.com/hc/en-us/articles/4848726654745-How-to-configure-PgBouncer-with-BigAnimal-Cluster) knowledge-base article.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
