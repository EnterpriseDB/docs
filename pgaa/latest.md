---
title: Postgres Analytics Accelerator (PGAA)
description: Explore EDB Postgres Analytics Accelerator with concepts, how-tos, and reference material.
product: EDB Postgres AI Analytics Accelerator
version: "1.12"
url: https://www.enterprisedb.com/docs/pgaa/latest/
lastModified: 2026-11-18T10:56:45Z
---

# Postgres Analytics Accelerator (PGAA)

Postgres Analytics Accelerator (PGAA) is a high-performance extension that enables Postgres to query large-scale data stored in open table formats like Delta Lake, Apache Iceberg, and Parquet. By offloading heavy analytical queries to a vectorized execution engine, PGAA bridges the gap between operational databases and data lakes.

> **Note: Using PGAA with an AI coding agent**
>
> If you work with PGAA through an AI coding agent such as Claude Code, install the [PGAA Agent Skill](https://www.enterprisedb.com/docs/edb-postgres-ai/agent-factory/packages/agent-skills/) so the agent has built-in, validated knowledge of PGAA.

### Get started

- [Compatibility](https://www.enterprisedb.com/docs/pgaa/latest/overview/compatibility/): Check supported PostgreSQL versions, operating systems, and other requirements.

- [Architecture](https://www.enterprisedb.com/docs/pgaa/latest/overview/architecture/): Understand the core architecture and how the vectorized engine works.

- [Core concepts](https://www.enterprisedb.com/docs/pgaa/latest/overview/concepts/): Understand the fundamental principles of vectorized execution, data lake integration, and DirectScan.

- [Quickstart guide](https://www.enterprisedb.com/docs/pgaa/latest/overview/quick_start/): Install PGAA, create a storage location and read table from our sample benchmark datasets.

### Using PGAA

- [Installation](https://www.enterprisedb.com/docs/pgaa/latest/installing/): Step-by-step instructions for installing the extension and enabling the Seafowl background worker.

- [Read from object storage](https://www.enterprisedb.com/docs/pgaa/latest/read_no_catalog/): Connect directly to S3, GCS, or Azure Blob Storage to query Parquet, Delta, or Iceberg files using a PGFS storage location.

- [Read using Iceberg catalogs](https://www.enterprisedb.com/docs/pgaa/latest/catalog/): Integrate with external Iceberg REST catalogs to manage table metadata.

- [Write to object storage using CTAS](https://www.enterprisedb.com/docs/pgaa/latest/ctas/): Use `CREATE TABLE AS SELECT` (CTAS) to export Postgres data into optimized lakehouse formats in your object store.

- [Replicate Postgres tables natively](https://www.enterprisedb.com/docs/pgaa/latest/replication/): Continuously replicate standard Postgres tables to Delta Lake or Iceberg tables in your object store, without PGD. PGAA loads the existing rows and then streams changes by decoding the write-ahead log.

### Replicating with PGD

- [Replicating with PGD:](https://www.enterprisedb.com/docs/pgaa/latest/pgd/) Combine PGD and PGAA to manage the complete data lifecycle, from automated partition offloading and real-time replication to surgical archival of cold data in object storage.

### Performance & optimization

- [Accelerate with Spark](https://www.enterprisedb.com/docs/pgaa/latest/spark/): Offload massive datasets and complex distributed joins to a remote Spark cluster via Spark Connect. PGAA offers two integration modes depending on your performance requirements:

  - [Standard Spark integration:](https://www.enterprisedb.com/docs/pgaa/latest/spark/spark-only/) Leverage a remote Spark cluster for high-concurrency analytical queries and distributed processing.

  - [GPU-Accelerated Spark](https://www.enterprisedb.com/docs/pgaa/latest/spark/spark-rapids/): Integrate with the NVIDIA RAPIDS Accelerator for Apache Spark to leverage GPU acceleration.

- [Monitor and maintain your analytical tables](https://www.enterprisedb.com/docs/pgaa/latest/monitoring/): Audit storage utilization, monitor table health, and perform table maintenance tasks for PGAA-managed tables.

- [Optimize query performance](https://www.enterprisedb.com/docs/pgaa/latest/optimize_performance/): Maximize query speeds by managing DirectScan execution, configuring compute pushdowns, and troubleshooting path fallbacks.

### Operations

- [Backing up and restoring](https://www.enterprisedb.com/docs/pgaa/latest/backup_restore/): Back up and restore PGAA analytical tables using Barman, with restore procedures for standalone Postgres and PGD deployments.

### Reference

- [Configuration parameters](https://www.enterprisedb.com/docs/pgaa/latest/reference/configuration_parameters/): The behavior of the PGAA extension is governed by Grand Unified Configuration (GUC) variables. These parameters allow you to switch executors, enable performance optimizations, and manage security credentials.

- [Functions](https://www.enterprisedb.com/docs/pgaa/latest/reference/functions/): PGAA introduces a suite of SQL functions for administrative tasks, such as mapping new tables, monitoring storage health, and launching maintenance background jobs.

- [Table options](https://www.enterprisedb.com/docs/pgaa/latest/reference/table_options/): When mapping or creating analytical tables, specific options allow you to define how data is read from or written to your object store.

- [Data types](https://www.enterprisedb.com/docs/pgaa/latest/reference/data_types/): PGAA maps native Postgres data types to optimized columnar formats in the data lake.

- [Datasets](https://www.enterprisedb.com/docs/pgaa/latest/reference/datasets/): Access pre-configured schemas and data loading instructions for analytical datasets to baseline your performance.

* [Release notes](https://www.enterprisedb.com/docs/pgaa/latest/release_notes/): Release notes for version 1.12 of Analytics Accelerator.
* [Overview](https://www.enterprisedb.com/docs/pgaa/latest/overview/): An overview of Analytics Accelerator.
  - [Quickstart](https://www.enterprisedb.com/docs/pgaa/latest/overview/quick_start/)
  - [Architecture](https://www.enterprisedb.com/docs/pgaa/latest/overview/architecture/)
  - [Concepts](https://www.enterprisedb.com/docs/pgaa/latest/overview/concepts/)
  - [Compatibility](https://www.enterprisedb.com/docs/pgaa/latest/overview/compatibility/)
  - +1 more
* [Installing](https://www.enterprisedb.com/docs/pgaa/latest/installing/): Step-by-step instructions to install the PGAA extension.
* [Reading tables in object storage](https://www.enterprisedb.com/docs/pgaa/latest/read_no_catalog/): How to read from tables in object storage using Analytics Accelerator.
* [Integrating with Iceberg catalogs](https://www.enterprisedb.com/docs/pgaa/latest/catalog/): How to integrate your Postgres environment with an external Iceberg catalog using Analytics Accelerator.
* [Writing to object storage](https://www.enterprisedb.com/docs/pgaa/latest/ctas/): How to write to object storage with Analytics Accelerator by creating tables from queries and appending rows to them.
* [Replicating Postgres tables natively](https://www.enterprisedb.com/docs/pgaa/latest/replication/): Replicate standard Postgres tables to Delta Lake or Iceberg tables with Analytics Accelerator, without the need to use Postgres Distributed.
* [Replicating with PGD](https://www.enterprisedb.com/docs/pgaa/latest/pgd/): Understand how PGD and PGAA work together to enable cost-efficient data lifecycle management with tiered storage.
* [Accelerating with Spark](https://www.enterprisedb.com/docs/pgaa/latest/spark/): How to accelerate with Spark using Analytics Accelerator.
  - [Distributed Spark execution](https://www.enterprisedb.com/docs/pgaa/latest/spark/spark-only/)
  - [GPU-accelerated Spark](https://www.enterprisedb.com/docs/pgaa/latest/spark/spark-rapids/)
* [Scaling with WarehousePG](https://www.enterprisedb.com/docs/pgaa/latest/whpg/): Use Postgres Analytics Accelerator on a WarehousePG cluster to run distributed vectorized analytical queries directly against data in object storage.
  - [Installing](https://www.enterprisedb.com/docs/pgaa/latest/whpg/installing/)
  - [Reading and writing](https://www.enterprisedb.com/docs/pgaa/latest/whpg/reading/)
  - [Backing up and restoring](https://www.enterprisedb.com/docs/pgaa/latest/whpg/backup/)
* [Monitoring and maintaining analytical tables](https://www.enterprisedb.com/docs/pgaa/latest/monitoring/): Audit storage utilization, monitor table health, and perform table maintenance tasks for PGAA-managed tables.
* [Optimizing query performance](https://www.enterprisedb.com/docs/pgaa/latest/optimize_performance/): Maximize query speeds by managing DirectScan execution, configuring compute pushdowns, and troubleshooting path fallbacks.
* [Backing up and restoring](https://www.enterprisedb.com/docs/pgaa/latest/backup_restore/): How to back up and restore Postgres Analytics Accelerator (PGAA) deployments, including Postgres Distributed (PGD) clusters that use tiered storage.
* [Reference](https://www.enterprisedb.com/docs/pgaa/latest/reference/): The reference section is a definitive listing of all functions, configuration parameters, table options, and data types available in Postgres Analytics Accelerator.
  - [Configuration parameters](https://www.enterprisedb.com/docs/pgaa/latest/reference/configuration_parameters/)
  - [Functions](https://www.enterprisedb.com/docs/pgaa/latest/reference/functions/)
  - [Table options](https://www.enterprisedb.com/docs/pgaa/latest/reference/table_options/)
  - [Data types and definitions](https://www.enterprisedb.com/docs/pgaa/latest/reference/data_types/)
  - +1 more

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
