---
title: Connecting to external data
description: Learn how PXF servers and profiles work, and how to reference them when you create an external table.
product: PXF for WarehousePG
version: "6"
url: https://www.enterprisedb.com/docs/pxf/latest/connecting/
lastModified: 2026-08-12T09:50:14Z
---

# Connecting to external data

Reach external data from WarehousePG (WHPG) by pointing a PXF external table at a server, for connection details, and a profile, for the connector and data format to read or write it with. Understand how servers, profiles, and formats work before you configure one for the connector you need, on [Object stores](https://www.enterprisedb.com/docs/pxf/latest/connecting/object-stores/), [Hadoop](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/), [Connecting to SQL databases over JDBC](https://www.enterprisedb.com/docs/pxf/latest/connecting/jdbc/), or [Network file system](https://www.enterprisedb.com/docs/pxf/latest/connecting/network-file-system/).

Every connector, regardless of the external source it reaches, relies on the same two pieces of configuration: a server for connection details and a profile for the data format, such as Parquet, Avro, or JSON. An external table's `LOCATION` clause references both:

```sql
CREATE EXTERNAL TABLE sales (id int, name text, amount numeric)
    LOCATION ('pxf://data/sales.csv?PROFILE=s3:text&SERVER=example')
    FORMAT 'CSV' (delimiter=',');
```

## Understanding PXF servers

PXF connects to an external data source through a named server configuration to read or write data. Each server is a directory under `$PXF_BASE/servers` that contains one or more site XML files with the connection settings for that source, such as the endpoint URL and credentials.

When you initialize your cluster, `pxf cluster prepare` creates an empty `default` server. To read and write from several sources, create multiple servers by adding a separate subdirectory for each one under `$PXF_BASE/servers`, with its own site XML files. `$PXF_HOME/templates` holds a sample site XML file for each connector, ready to copy into your server directory and edit. See [Configuration templates](https://www.enterprisedb.com/docs/pxf/latest/reference/configuration-templates/) for the properties in each.

> **Note**
>
> If `LOCATION` omits `SERVER`, PXF falls back to `$PXF_BASE/servers/default`.

## Understanding PXF profiles

A PXF profile name follows a `<connector>:<format>` pattern, for example `hdfs:parquet` or `s3:avro`, and PXF uses it to pick which connector and format code handles the request.

PXF ships with a built-in profile for each connector and format combination it supports, compiled into the PXF service. See [PXF profiles](https://www.enterprisedb.com/docs/pxf/latest/reference/profiles/) for the full list.

PXF also supports custom profiles, defined in [`pxf-profiles.xml`](https://www.enterprisedb.com/docs/pxf/latest/reference/configuration-files/#pxf-profilesxml) and backed by your own Java plugin classes.

The `format` part of a profile works the same way regardless of which connector it's paired with. PXF supports text, CSV, Parquet, ORC, Avro, JSON, and SequenceFile, depending on the connector. See [PXF profiles](https://www.enterprisedb.com/docs/pxf/latest/reference/profiles/) for the full list of formats and which connectors support each.

## Choosing a connector

Configure the connector that matches your external data source.

- [Object stores](https://www.enterprisedb.com/docs/pxf/latest/connecting/object-stores/): Amazon S3, MinIO, Azure Blob Storage, Azure Data Lake Storage, and Google Cloud Storage.
- [Hadoop](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/): HDFS, Hive, and HBase.
- [Connecting to SQL databases over JDBC](https://www.enterprisedb.com/docs/pxf/latest/connecting/jdbc/): external SQL databases through a JDBC driver.
- [Network file system](https://www.enterprisedb.com/docs/pxf/latest/connecting/network-file-system/): a shared network file system.

* [Connecting to Hadoop](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/): Configure PXF to connect to a Hadoop cluster and query HDFS, Hive, and HBase data from WarehousePG.
* [Connecting to SQL databases over JDBC](https://www.enterprisedb.com/docs/pxf/latest/connecting/jdbc/): Configure PXF to read and write data in an external SQL database over JDBC, and query it from WarehousePG.
* [Connecting to a network file system](https://www.enterprisedb.com/docs/pxf/latest/connecting/network-file-system/): Configure PXF to read and write data on a network file system, and query it from WarehousePG.
* [Connecting to object stores](https://www.enterprisedb.com/docs/pxf/latest/connecting/object-stores/): Configure PXF to read and write data in Amazon S3, MinIO, Azure, or Google Cloud Storage, and query it from WarehousePG.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
