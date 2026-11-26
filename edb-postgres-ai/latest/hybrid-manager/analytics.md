---
title: Analytics in Hybrid Manager
description: Configure tiered storage and run analytical queries on object storage using Postgres Analytics Accelerator (PGAA), pre-installed on Hybrid Manager DHA clusters.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/analytics/
lastModified: 2026-07-23T17:52:58+02:00
---

# Analytics in Hybrid Manager

Perform analytics management for your Distributed High Availability (DHA) clusters directly from the Hybrid Manager (HM) console, including table management, tiered storage configuration, and catalog exploration.

DHA clusters include [Postgres Analytics Accelerator](https://www.enterprisedb.com/docs/pgaa/latest/) (PGAA), a high-performance extension that enables Postgres to query large-scale data stored in open table formats like Delta Lake, Apache Iceberg, and Parquet.

Manage your cluster's analytics end-to-end from the HM console by deploying a minimal DHA cluster in your project. A dedicated cluster gives you a unified view of all analytical tables across your DHA clusters in a HM project, with table management, tiered storage configuration, and catalog exploration available from a single interface.

For concepts, architecture, and reference documentation, see the [PGAA documentation](https://www.enterprisedb.com/docs/pgaa/latest/).

- [Configuring tiered storage](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/analytics/tiered-storage/): Configure tiered storage on your Hybrid Manager Distributed High Availability clusters using Postgres Analytics Accelerator.
- [Managing catalogs](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/analytics/catalogs/): Create and manage Iceberg catalogs in Hybrid Manager to enable tiered storage on DHA clusters and cross-cluster querying.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
