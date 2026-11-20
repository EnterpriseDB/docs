---
title: Overview of FlowServer for WarehousePG
description: Overview of FlowServer for WarehousePG.
product: FlowServer for WarehousePG
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/overview/
lastModified: 2026-01-21T17:42:05Z
---

# Overview of FlowServer for WarehousePG

FlowServer for WarehousePG (WHPG) provides a dedicated framework for your data ingestion pipelines. It is designed to deliver real-time visibility into the health and performance of ETL jobs, ensuring that data moving from streaming sources like Kafka and RabbitMQ reaches your WarehousePG cluster efficiently.

## What it delivers

What it delivers

- **High-performance parallel loading**: Writes data delivered from clients directly into the segments of the WHPG cluster, bypassing coordinator bottlenecks for maximum throughput.

- **Broad data source support**: Seamlessly integrates with modern message brokers, supporting Kafka and RabbitMQ queues.

- **Versatile format handling**: Supports standard data formats including JSON, CSV, and Avro (Kafka only).

- **Optimized command-line interface**: Features a streamlined CLI that allows you to submit, start, list, and monitor jobs.

- **Real-time job monitoring**: Provides detailed visibility into active tasks, showing loading ratios, total row counts, and progress tracking.

- **Native observability**: Includes built-in Prometheus metrics to monitor system health and performance out of the box.

- **Advanced stream control**: Allows for precise data recovery and synchronization with flags to reset stream offsets to the earliest, latest, or specific timestamps.

* [Architecture](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/overview/architecture/): Understand the architechure of FlowServer for WarehousePG and its main components
* [Supported platforms](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/overview/supported_platforms/): Provides information for determining the platform support for FlowServer for WarehousePG.
* [Known Issues](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/overview/known_issues/): Learn about known issues in FlowServer for WarehousePG.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
