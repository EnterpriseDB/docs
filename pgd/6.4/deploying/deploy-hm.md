---
title: Deploying and configuring PGD on Hybrid Manager
description: How to deploy and configure Distributed High-Availability and Advanced High Availability clusters powered by PGD using Hybrid Manager.
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/deploying/deploy-hm/
lastModified: 2026-10-21T00:19:17Z
---

# Deploying and configuring PGD on Hybrid Manager

EDB Postgres AI Hybrid Manager (HM) is the centralized control plane for the EDB Postgres AI platform, providing additional value such as Oracle compatibility via EDB Postgres Advanced Server and Transparent Data Encryption (TDE) using either EDB Postgres Extended or Advanced Server. It allows you to deploy and manage the full lifecycle of PGD-powered clusters through two primary configurations: Advanced High Availability (AHA) and Distributed High-Availability (DHA).

The primary distinction between these configurations lies in their scalability and group architecture:

- **Distributed High-Availability (DHA):** Designed for global scale and geographic redundancy, this configuration supports multiple data groups. This allows for distributed workloads across different locations or regions.
- **Advanced High Availability (AHA):** Designed for localized resilience, this configuration consists of a single data group. It is ideal for high availability within a single region or data center.

Detailed comparisons of these architectures, including resource requirements and recommended use cases, are provided within the Hybrid Manager console during the cluster creation process.

Refer to [Creating a database cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/) for step-by-step instructions on deploying these high-availability configurations.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
