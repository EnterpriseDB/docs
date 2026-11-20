---
title: Deploying an EDB Postgres Distributed example cluster on Azure and Google cloud platforms
description: |
  A quick guide to deploying a PGD architecture using TPA on Azure and Google clouds
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/quickstart/quick_start_cloud/
lastModified: 2025-05-30T15:32:37+01:00
---

# Deploying an EDB Postgres Distributed example cluster on Azure and Google cloud platforms

## Deploying on Azure and Google clouds

For most cloud platforms, such as Azure and Google Cloud Platform, you create Linux hosts on the cloud platform you're using. You can then use the [Deploying on Linux hosts](https://www.enterprisedb.com/docs/pgd/5.6/quickstart/quick_start_linux/) quick start to deploy PGD to those Linux hosts.

- Azure users can follow [a Microsoft guide](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal?tabs=ubuntu) on how to provision Azure VMs loaded with Linux.
- Google Cloud Platform users can follow [a Google guide](https://cloud.google.com/compute/docs/create-linux-vm-instance) on how to provision GCP VMs with Linux loaded.

Then continue with [Deploying on Linux hosts](https://www.enterprisedb.com/docs/pgd/5.6/quickstart/quick_start_linux/).

For AWS users, see the [Deploying on AWS](https://www.enterprisedb.com/docs/pgd/5.6/quickstart/quick_start_aws/) quick start. Using this quick start, TPA
provisions the hosts needed to create your cluster.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
