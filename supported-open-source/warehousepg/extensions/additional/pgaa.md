---
title: Postgres Analytics Accelerator (PGAA)
description: Query data in object storage directly from WarehousePG using the Postgres Analytics Accelerator extension.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgaa/
lastModified: 2026-09-25T15:14:11+01:00
---

# Postgres Analytics Accelerator (PGAA)

> **Note: Version availability**
>
> PGAA is available starting with WarehousePG 7.4.0.

The Postgres Analytics Accelerator (PGAA) extension enables WarehousePG to run distributed analytical queries directly against data in object storage, without requiring ETL or data movement into the cluster. PGAA supports Parquet, Delta Lake, and Iceberg formats, and integrates with Iceberg REST catalogs and Apache Spark.

PGAA requires the [PGFS](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgfs/) extension as a dependency, which is installed automatically when you install PGAA.

## Installing PGAA

For full installation instructions, including prerequisites, package names, and cluster configuration, see [Installing PGAA on WarehousePG](https://www.enterprisedb.com/docs/pgaa/latest/whpg/installing/).

## Using PGAA

For guidance on querying object storage, connecting to Iceberg catalogs, and accelerating queries with Spark, see [Scaling with WarehousePG](https://www.enterprisedb.com/docs/pgaa/latest/whpg/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
