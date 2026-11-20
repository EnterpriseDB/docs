---
title: Overview of WarehousePG Copy
description: Overview of WarehousePG Copy.
product: WarehousePG Copy
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-copy/overview/
lastModified: 2026-01-30T09:42:40Z
---

# Overview of WarehousePG Copy

The WarehousePG (WHPG) Copy utility, or `whpg-copy`, is a high-performance migration tool designed to move data between source and destination WHPG clusters. By executing transfers directly between segment hosts, it bypasses the coordinator node bottleneck to achieve massive throughput.

WarehousePG Copy streamlines the migration of database objects and datasets by managing the following critical tasks:

- **Schema migration:** Automatically replicates schemas and table structures on the destination cluster if they are not already present.
- **High-velocity data transfer:** Moves data efficiently using parallelized workers and optional compression to optimize network bandwidth.
- **Dependency resolution:** Intelligently analyzes table relationships—such as foreign keys—to ensure data is loaded in the correct logical sequence.
- **Operational resilience:** Provides comprehensive success and failure reporting, and automatically generates retry configurations to handle interrupted or failed tasks without restarting the entire process.

* [Supported platforms](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-copy/overview/supported_platforms/): Provides information for determining the platform support for WarehousePG Copy.
* [Known Issues](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-copy/overview/known_issues/): Learn about known issues in WarehousePG Copy version 1.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
