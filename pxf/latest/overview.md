---
title: Overview of PXF for WarehousePG
description: Learn what the WarehousePG Platform Extension Framework (PXF) does and which external sources it connects to.
product: PXF for WarehousePG
version: "6"
url: https://www.enterprisedb.com/docs/pxf/latest/overview/
lastModified: 2026-08-12T09:50:14Z
---

# Overview of PXF for WarehousePG

Data managed by your organization often lives outside your WarehousePG (WHPG) cluster, in systems like Hadoop, object stores, or other SQL databases. The WarehousePG Platform Extension Framework (PXF) gives you access to that external data through built-in connectors that map an external data source to a WHPG table definition. You read and write external data through PXF the same way you query or insert into a WHPG external table, using standard SQL.

## Supported connectors and formats

PXF connects to external data through [profiles](https://www.enterprisedb.com/docs/pxf/latest/connecting/#understanding-pxf-profiles), which pair a connector, such as an object store or Hadoop, with a data format. Supported connectors include:

- Object stores compatible with the S3 API, including Amazon S3 and MinIO
- Hadoop (HDFS)
- Hive
- HBase
- SQL databases, through the Java Database Connectivity (JDBC) connector

Supported data formats include text, CSV, Avro, JSON, RCFile, Parquet, SequenceFile, and ORC, depending on the connector.

PXF supports both reading external data into WHPG and writing WHPG data out to external storage, through readable and writable external tables respectively.

## Explore PXF

- [Architecture](https://www.enterprisedb.com/docs/pxf/latest/overview/architecture/): Understand the PXF components and how a query reaches external data.
- [Compatibility](https://www.enterprisedb.com/docs/pxf/latest/overview/compatibility/): Check supported WHPG versions, platforms, and PXF versions.
- [Known issues](https://www.enterprisedb.com/docs/pxf/latest/overview/known_issues/): Review current limitations and workarounds.

* [Architecture](https://www.enterprisedb.com/docs/pxf/latest/overview/architecture/): Overview of the PXF architecture and how a query reaches external data.
* [Compatibility](https://www.enterprisedb.com/docs/pxf/latest/overview/compatibility/): Supported WarehousePG versions, platforms, and PXF versions for the WarehousePG Platform Extension Framework (PXF).
* [Known issues](https://www.enterprisedb.com/docs/pxf/latest/overview/known_issues/): Learn about known issues and configuration gotchas for PXF on WarehousePG.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
