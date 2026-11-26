---
title: FlowServer for WarehousePG
description: Covers the usage of FlowServer for WarehousePG to high speed ingest external data into WarehousePG for futher analysis.
product: FlowServer for WarehousePG
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/
lastModified: 2026-10-02T11:11:03+01:00
---

# FlowServer for WarehousePG

FlowServer is a high-performance streaming ingest and ETL (Extract, Transform, Load) engine designed specifically for WarehousePG. It acts as a bridge between external data streams and your database cluster, allowing you to turn live events from sources like Kafka and RabbitMQ into immediate, actionable insights. Unlike traditional batch processing, FlowServer follows a multi-stage transformation workflow that cleans and reformats data while it is in transit.

---

### Key features

- **High-performance parallel loading**: Writes data delivered from clients directly into the segments of the WHPG cluster, bypassing coordinator bottlenecks for maximum throughput.

- **Broad data source support**: Seamlessly integrates with modern message brokers, supporting Kafka and RabbitMQ queues.

- **Versatile format handling**: Supports standard data formats including JSON, CSV, and Avro (Kafka only).

- **Optimized command-line interface**: Features a streamlined CLI that allows you to submit, start, list, and monitor jobs.

- **Real-time job monitoring**: Provides detailed visibility into active tasks, showing loading ratios, total row counts, and progress tracking.

- **Native observability**: Includes built-in Prometheus metrics to monitor system health and performance out of the box.

- **Advanced stream control**: Allows for precise data recovery and synchronization with flags to reset stream offsets to the earliest, latest, or specific timestamps.

* [Release notes](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/release_notes/): Release notes provide information on what is new in each release of FlowServer for WarehousePG.
* [Overview](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/overview/): Overview of FlowServer for WarehousePG.
* [Installing and upgrading](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/installing/): Learn how to install and upgrade FlowServer for WarehousePG.
* [Loading data](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/loading/): Learn how to load data into WarehousePG with FlowServer.
* [Reference](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/reference/): The complete reference to FlowServer commands and configuration files.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
