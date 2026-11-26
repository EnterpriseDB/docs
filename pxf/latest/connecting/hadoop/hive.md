---
title: Connecting to Hive
description: Configure PXF to read Hive table data and query it from WarehousePG.
product: PXF for WarehousePG
version: "6"
url: https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/hive/
lastModified: 2026-08-12T09:50:14Z
---

# Connecting to Hive

Configure a server for Hive, then query its table data through external tables. PXF only supports reading from Hive, not writing to it. Configure the Hadoop Distributed File System (HDFS) first, since Hive builds on that same connection.

## Configuring the server

Hive tables live on HDFS, so PXF reuses the server you already configured for HDFS, for example `hdfssrvcfg` from [HDFS](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/hdfs/). Add `hive-site.xml` to that same server directory.

1. Copy `hive-site.xml` from the templates directory into the server:

   ```bash
   cp $PXF_HOME/templates/hive-site.xml $PXF_BASE/servers/hdfssrvcfg
   ```

2. Edit `hive-site.xml` to point to your Hive metastore:

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <configuration>
       <property>
           <name>hive.metastore.uris</name>
           <value>thrift://<metastore_host>:9083</value>
       </property>
   </configuration>
   ```

   `hive.metastore.uris` is the Thrift URI PXF uses to reach your Hive metastore. See [Configuration templates](https://www.enterprisedb.com/docs/pxf/latest/reference/configuration-templates/#hive-sitexml) for the full list of `hive-site.xml` properties.

3. Sync the change to every segment host, then restart PXF to apply it:

   ```bash
   pxf cluster sync
   pxf cluster restart
   ```

## Reading data

Read a Hive table by creating a readable external table with the `hive` profile and the server you configured. For example, to read a table named `employee` in the `hr` Hive database, using the `hdfssrvcfg` server:

```sql
CREATE EXTERNAL TABLE emp_hive (id int, name text)
    LOCATION ('pxf://hr.employee?PROFILE=hive&SERVER=hdfssrvcfg')
    FORMAT 'CUSTOM' (FORMATTER='pxfwritable_import');

SELECT * FROM emp_hive;
```

The path in `LOCATION` is `<hive_database>.<hive_table>`.

The `hive` profile works with any format Hive supports, reading through Hive's SerDe (serializer/deserializer), the class Hive itself uses to parse that format. For a table stored in text, RCFile, or ORC, switch to the matching `hive:<format>` profile instead for faster reads that skip the SerDe and go straight to the files.

`hive:orc` also supports `VECTORIZE=true`, to read up to 1024 rows at once. Vectorized reads don't support complex types or the `timestamp` data type:

```sql
CREATE EXTERNAL TABLE emp_hive_orc_vectorized (id int, name text)
    LOCATION ('pxf://hr.employee?PROFILE=hive:orc&SERVER=hdfssrvcfg&VECTORIZE=true')
    FORMAT 'CUSTOM' (FORMATTER='pxfwritable_import');
```

See [PXF profiles](https://www.enterprisedb.com/docs/pxf/latest/reference/profiles/#hive) for the full list of Hive profiles.

## Filtering on partitions

For a Hive table partitioned on one or more columns, a `WHERE` clause on a partition column lets PXF skip non-matching partitions instead of reading and filtering every row in WarehousePG (WHPG). Which comparisons trigger this depends on the partition column's type:

- On a string-typed column, `=`, `<>`, `<`, `<=`, `>`, and `>=` all work.
- On an integral-typed column (such as `int`), `=` and `<>` work when you enable `hive.metastore.integral.jdo.pushdown` in `hive-site.xml`.

You must define partition columns at the end of your `CREATE EXTERNAL TABLE` column list, matching Hive's names and order.

Hive excludes a row from partition queries if its value doesn't match the partition column's type, commonly a `NULL`. PXF instead surfaces that row under an actual `NULL`, so `IS NULL` queries can return different row counts between Hive and PXF.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
