---
title: Connecting to HDFS
description: Configure PXF to read data from the Hadoop Distributed File System (HDFS) and query it from WarehousePG.
product: PXF for WarehousePG
version: "6"
url: https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/hdfs/
lastModified: 2026-08-12T09:50:14Z
---

# Connecting to HDFS

Configure a server for the Hadoop Distributed File System (HDFS), then read and write its data through external tables. If you also plan to use Hive, configure HDFS first, since Hive builds on this same connection.

## Configuring the server

Create a server that connects to HDFS.

1. Create a server directory under `$PXF_BASE/servers`, and copy the `core-site.xml` template from `$PXF_HOME/templates` into it. For example, to configure a server named `hdfssrvcfg`:

   ```bash
   mkdir -p $PXF_BASE/servers/hdfssrvcfg
   cp $PXF_HOME/templates/core-site.xml $PXF_BASE/servers/hdfssrvcfg
   ```

2. Edit `fs.defaultFS` in that file to point to your HDFS NameNode:

   ```xml
   <property>
       <name>fs.defaultFS</name>
       <value>hdfs://<namenode_host>:<namenode_port></value>
   </property>
   ```

   See [Configuration templates](https://www.enterprisedb.com/docs/pxf/latest/reference/configuration-templates/#core-sitexml) for the full list of `core-site.xml` properties.

3. Sync the change to every segment host, then restart PXF to apply it:

   ```bash
   pxf cluster sync
   pxf cluster restart
   ```

## Reading data

Read data from HDFS by creating a readable external table with the profile for its format and the server you configured. For example, to read a CSV file using the `hdfssrvcfg` server:

```sql
CREATE EXTERNAL TABLE pxf_hdfs_example (id int, name text, age int)
    LOCATION ('pxf://<hdfs_path>/data.csv?PROFILE=hdfs:csv&SERVER=hdfssrvcfg')
    FORMAT 'CSV' (delimiter=',');

SELECT * FROM pxf_hdfs_example;
```

PXF also supports structured formats like Parquet, through the same profile-based syntax:

```sql
CREATE EXTERNAL TABLE pxf_parquet_read (id int, name text)
    LOCATION ('pxf://parquet_data?PROFILE=hdfs:parquet&SERVER=hdfssrvcfg')
    FORMAT 'CUSTOM' (FORMATTER='pxfwritable_import');

SELECT * FROM pxf_parquet_read;
```

See [PXF profiles](https://www.enterprisedb.com/docs/pxf/latest/reference/profiles/) for the full list of supported formats, including worked examples of Avro, JSON, and multi-byte delimiters.

## Writing data

Create a writable external table with the `pxfwritable_export` formatter to write WHPG data out to HDFS, then a separate readable external table at the same location to query it back:

```sql
CREATE WRITABLE EXTERNAL TABLE pxf_parquet_write (id int, name text)
    LOCATION ('pxf://parquet_data?PROFILE=hdfs:parquet&SERVER=hdfssrvcfg')
    FORMAT 'CUSTOM' (FORMATTER='pxfwritable_export');

INSERT INTO pxf_parquet_write VALUES (1, 'New York');
```

```sql
CREATE EXTERNAL TABLE pxf_parquet_read_back (id int, name text)
    LOCATION ('pxf://parquet_data?PROFILE=hdfs:parquet&SERVER=hdfssrvcfg')
    FORMAT 'CUSTOM' (FORMATTER='pxfwritable_import');

SELECT * FROM pxf_parquet_read_back;
```

The same pattern applies to other connectors, using their own profile prefix, for example `s3:parquet`. See [Object stores](https://www.enterprisedb.com/docs/pxf/latest/connecting/object-stores/) for an example.

## Next steps

With HDFS configured, you're ready to connect to [Hive](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/hive/), which builds on this same connection, or [HBase](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/hbase/). If your cluster uses Kerberos, see [Authenticating with Kerberos](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/kerberos/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
