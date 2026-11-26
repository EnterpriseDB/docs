---
title: PXF for WarehousePG
description: PXF (Platform Extension Framework) provides WarehousePG with access to external data sources such as Hadoop, object stores, and SQL databases.
product: PXF for WarehousePG
version: "6"
url: https://www.enterprisedb.com/docs/pxf/latest/
lastModified: 2026-08-12T13:25:27+01:00
---

# PXF for WarehousePG

The WarehousePG Platform Extension Framework (PXF) gives WarehousePG (WHPG) access to data that lives outside the cluster, in systems like Hadoop, object stores, and external SQL databases. You interact with that external data through external tables, using a readable external table to query it and a writable external table to insert into it, the same way you'd work with any other WHPG table.

A `pxf` extension and a PXF service run on the coordinator, standby coordinator, and every segment host. When a query touches a PXF external table, each segment's PXF service connects to the external source independently and reads or writes its share of the data in parallel, so a PXF query scales with your cluster rather than routing through the coordinator. See [Architecture](https://www.enterprisedb.com/docs/pxf/latest/overview/architecture/) for how these pieces fit together.

## Key features

- **Broad connector support.** Reach Hadoop, object stores such as Amazon S3, MinIO, Azure Blob Storage, and Google Cloud Storage, SQL databases over JDBC, and network file systems.

- **Multiple data formats.** Read and write text, CSV, Avro, JSON, RCFile, Parquet, SequenceFile, and ORC, depending on the connector. See [Compatibility](https://www.enterprisedb.com/docs/pxf/latest/overview/compatibility/) for supported sources, formats, and versions.

- **Parallel, segment-based execution.** Each segment's PXF service handles its own portion of the data independently, so performance scales with the number of segments in your cluster.

- **Full read and write support.** Query external data or insert into it using PXF external tables.

- **Cluster-wide management.** The `pxf cluster` command line tool syncs configuration and starts or stops the PXF service across every host from one place. See [Managing the PXF cluster](https://www.enterprisedb.com/docs/pxf/latest/administering/) for details.

* [Release notes](https://www.enterprisedb.com/docs/pxf/latest/release_notes/): Release notes provide information on what's new in each release of PXF for WarehousePG.
  - [Version 6.10.2](https://www.enterprisedb.com/docs/pxf/latest/release_notes/6.10.2_rel_notes/)
  - [Version 6.10.3](https://www.enterprisedb.com/docs/pxf/latest/release_notes/6.10.3_rel_notes/)
* [Overview](https://www.enterprisedb.com/docs/pxf/latest/overview/): Learn what the WarehousePG Platform Extension Framework (PXF) does and which external sources it connects to.
  - [Architecture](https://www.enterprisedb.com/docs/pxf/latest/overview/architecture/)
  - [Compatibility](https://www.enterprisedb.com/docs/pxf/latest/overview/compatibility/)
  - [Known issues](https://www.enterprisedb.com/docs/pxf/latest/overview/known_issues/)
* [Installing and upgrading](https://www.enterprisedb.com/docs/pxf/latest/installing/): Learn how to install and upgrade the WarehousePG Platform Extension Framework (PXF) package across your WarehousePG cluster.
* [Configuring and starting](https://www.enterprisedb.com/docs/pxf/latest/configuring/): Learn how to configure PXF's runtime environment, initialize it across your cluster, and start the PXF service.
* [Managing the PXF cluster](https://www.enterprisedb.com/docs/pxf/latest/administering/): Learn how to start, stop, and check the status of PXF, and how to apply a configuration change.
* [Using the foreign data wrapper](https://www.enterprisedb.com/docs/pxf/latest/foreign-data-wrapper/): Use the pxf\_fdw extension to query PXF-connected data sources through standard Postgres foreign tables instead of external tables.
* [Connecting to external data](https://www.enterprisedb.com/docs/pxf/latest/connecting/): Learn how PXF servers and profiles work, and how to reference them when you create an external table.
  - [Connecting to Hadoop](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/)
  - [Connecting to SQL databases over JDBC](https://www.enterprisedb.com/docs/pxf/latest/connecting/jdbc/)
  - [Connecting to a network file system](https://www.enterprisedb.com/docs/pxf/latest/connecting/network-file-system/)
  - [Connecting to object stores](https://www.enterprisedb.com/docs/pxf/latest/connecting/object-stores/)
* [Reference](https://www.enterprisedb.com/docs/pxf/latest/reference/): Reference material for PXF configuration files and commands.
  - [Commands](https://www.enterprisedb.com/docs/pxf/latest/reference/commands/)
  - [Configuration files](https://www.enterprisedb.com/docs/pxf/latest/reference/configuration-files/)
  - [Configuration templates](https://www.enterprisedb.com/docs/pxf/latest/reference/configuration-templates/)
  - [Profiles](https://www.enterprisedb.com/docs/pxf/latest/reference/profiles/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
