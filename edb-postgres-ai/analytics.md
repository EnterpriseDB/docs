---
title: EDB Postgres AI analytics
description: About the analytics products in the EDB Postgres AI platform, for querying large-scale data and running analytical workloads on Postgres.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/analytics/
lastModified: 2026-11-02T13:02:55+01:00
---

# EDB Postgres AI analytics

The EDB Postgres AI analytics products extend Postgres with high-performance analytical capabilities, from vectorized query execution over open table formats in object storage to massively parallel processing (MPP) for large-scale data warehousing workloads.

## Postgres Analytics Accelerator (PGAA)

[Postgres Analytics Accelerator (PGAA)](https://www.enterprisedb.com/docs/pgaa/latest/) is a high-performance Postgres extension that enables querying large-scale data stored in open table formats like Delta Lake, Apache Iceberg, and Parquet directly from Postgres.

By offloading heavy analytical queries to a vectorized execution engine, PGAA bridges the gap between operational databases and data lakes without requiring data movement.

Key capabilities:

- **[Read tables in object storage](https://www.enterprisedb.com/docs/pgaa/latest/read_no_catalog/)**: Query Parquet, Delta Lake, and Iceberg files in S3, GCS, or Azure using standard SQL.
- **[Iceberg catalog integration](https://www.enterprisedb.com/docs/pgaa/latest/catalog/)**: Connect to external Iceberg REST catalogs to manage table metadata.
- **[Write to object storage](https://www.enterprisedb.com/docs/pgaa/latest/ctas/)**: Write Postgres data out to optimized lakehouse formats in your object store using CTAS.
- **[Spark acceleration](https://www.enterprisedb.com/docs/pgaa/latest/spark/)**: Offload massive datasets and complex joins to a remote Spark cluster, with optional GPU acceleration via NVIDIA RAPIDS.
- **[Replicate with PGD](https://www.enterprisedb.com/docs/pgaa/latest/pgd/)**: Combine with EDB Postgres Distributed for automated partition offloading and real-time replication.

## WarehousePG

[WarehousePG](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/) is an open-source massively parallel processing (MPP) database built on Postgres, designed for large-scale analytical and data warehousing workloads.

Key capabilities:

- **[Massively parallel processing](https://www.enterprisedb.com/docs/warehousepg/latest/)**: Distribute query execution across multiple segments for high-throughput analytical queries.
- **[PXF for WarehousePG](https://www.enterprisedb.com/docs/pxf/latest/)**: Access external data sources, such as Hadoop, object stores, and SQL databases, from WarehousePG.
- **[Support for Greenplum migrations](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/edbpggpsupp/)**: Tools and guidance for migrating existing Greenplum workloads to WarehousePG.
- **[WarehousePG Enterprise Manager (WEM)](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/)**: Monitor, manage, and optimize your WarehousePG cluster.
- **[FlowServer](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/)**: High-speed data loading into WarehousePG.
- **[whpg-copy](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-copy/)**: A utility for efficient bulk data copy operations.

## ClickHouse®

[EDB Postgres AI for ClickHouse®](https://www.enterprisedb.com/docs/clickhouse/latest/) is a high-performance, column-oriented SQL database for online analytical processing (OLAP), distributed and supported by EDB as part of the Analytics pillar.

Key capabilities:

- **[Connecting to WarehousePG](https://www.enterprisedb.com/docs/clickhouse/latest/connecting_warehousepg/)**: Read from and write to WarehousePG tables directly from ClickHouse using the `PostgreSQL` table engine.
- **[Reading Apache Iceberg® tables](https://www.enterprisedb.com/docs/clickhouse/latest/reading_iceberg/)**: Query Iceberg tables in Amazon S3 or Azure Blob Storage using the `IcebergS3` and `IcebergAzureBlobStorage` engines.

ClickHouse is a registered trademark of [ClickHouse, Inc.](https://clickhouse.com/), and EDB is not affiliated with, associated with, or sponsored by ClickHouse, Inc.

- [Postgres Analytics Accelerator (PGAA)](https://www.enterprisedb.com/docs/pgaa/latest/): Explore EDB Postgres Analytics Accelerator with concepts, how-tos, and reference material.
- [WarehousePG](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/): Covering the open source WarehousePG and EDB Postgres AI support for Greenplum workloads with WarehousePG.
- [EDB Postgres AI for ClickHouse®](https://www.enterprisedb.com/docs/clickhouse/latest/): ClickHouse is an open-source, column-oriented SQL database management system (DBMS) designed for online analytical processing (OLAP). EDB supports ClickHouse as part of the EDB Postgres AI Analytics pillar.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
