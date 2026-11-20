---
title: Understanding requirements in Google Cloud
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/your_cloud_account/preparing_cloud_account/preparing_gcp/understanding_quotas_in_gcp/
lastModified: 2025-04-24T09:25:04+05:30
---

# Understanding requirements in Google Cloud

Follow these EDB Postgres AI Cloud Service requirements and recommended resource limits in Google Cloud.

## vCPU limits

Any time a new VM is deployed in Google Cloud, the vCPUs for the VMs must not exceed the total vCPU limits for the region.

The number of cores required by the database cluster depends on the instance type and cluster type of the clusters. For example, if you create a cluster with the standard E2 instance type, you can calculate the number of E2 cores required for your cluster based on the following:

- A virtual machine instance of type e2-standard-{N} uses {N} cores. For example, an instance of type e2-standard-32 uses 32 e2-standard cores.

- A cluster running on an e2-standard-{N} instance without HA enabled uses exactly {N} e2-standard cores.

- A cluster running on an e2-standard-{N} instance with HA enabled and 2 replicas uses 3 \* {N} e2-standard cores.

EDB Postgres AI Cloud Service requires an additional eight n2-standard virtual machine cores per region for management resources.

EDB Postgres AI Cloud Service requires an additional four n2-standard virtual machine cores per region for periodic maintenance upgrades.

## Recommended limits

EDB Postgres AI Cloud Service recommends the following per region when requesting virtual machine resource limit increases:

- Total Regional vCPUs: minimum of 50 per designated region

- n2-standard vCPUs: minimum of 12 per designated region

- Other machine family vCPUs: depends on the instance type, cluster type, and number of clusters.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
