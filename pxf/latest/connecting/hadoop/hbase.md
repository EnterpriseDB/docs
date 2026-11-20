---
title: Connecting to HBase
description: Configure PXF to read HBase table data and query it from WarehousePG.
product: PXF for WarehousePG
version: "6"
url: https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/hbase/
lastModified: 2026-08-12T09:50:14Z
---

# Connecting to HBase

Configure a server for HBase, then query its table data through external tables. PXF only supports reading from HBase, not writing to it.

## Configuring the server

Create a server that connects to an HBase cluster.

> **Note**
>
> If you plan to filter on HBase external tables, copy `$PXF_HOME/share/pxf-hbase-*.jar` to every node in the HBase cluster first, and add its location to `$HBASE_CLASSPATH`. HBase's region servers need this JAR to execute a pushed-down filter.

1. Create a server directory under `$PXF_BASE/servers`, and copy the `hbase-site.xml` template into it. For example, to configure a server named `hbase_server`:

   ```bash
   mkdir $PXF_BASE/servers/hbase_server
   cp $PXF_HOME/templates/hbase-site.xml $PXF_BASE/servers/hbase_server
   ```

2. Edit `hbase-site.xml` with your connection details:

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <configuration>
       <property>
           <name>hbase.rootdir</name>
           <value>hdfs://<namenode_host>:<namenode_port>/hbase</value>
       </property>
       <property>
           <name>hbase.zookeeper.quorum</name>
           <value><zookeeper_host></value>
       </property>
   </configuration>
   ```

   Where:

   - `hbase.rootdir` is the location on HDFS where HBase stores its data.
   - `hbase.zookeeper.quorum` is the ZooKeeper ensemble HBase uses for coordination.

   See [Configuration templates](https://www.enterprisedb.com/docs/pxf/latest/reference/configuration-templates/#hbase-sitexml) for the full list of `hbase-site.xml` properties.

3. Sync the change to every segment host, then restart PXF to apply it:

   ```bash
   pxf cluster sync
   pxf cluster restart
   ```

## Reading data

PXF maps each HBase column to a `<column_family>:<qualifier>` column name. The following example reads an HBase table named `employees`, with `personal` and `job` column families, using the `hbase_server` server:

```sql
CREATE EXTERNAL TABLE employee_hbase ("personal:name" text, "job:department" text, "job:salary" int)
    LOCATION ('pxf://employees?PROFILE=hbase&SERVER=hbase_server')
    FORMAT 'CUSTOM' (FORMATTER='pxfwritable_import');

SELECT * FROM employee_hbase;
```

WarehousePG (WHPG) caps column names at 63 characters and requires them to be character-based, while an HBase qualifier name can be longer or contain binary data. When a qualifier doesn't fit those rules, map it indirectly through a lookup table instead. Create a table named `pxflookup` in HBase with a single column family named `mapping`, then add a row per mapped qualifier, using the target HBase table's name as the row key and the WHPG column alias as the qualifier under `mapping`:

```
create 'pxflookup', 'mapping'
put 'pxflookup', 'employees', 'mapping:name', 'personal:name'
put 'pxflookup', 'employees', 'mapping:dept', 'job:department'
```

Reference the aliases directly as column names when you create the external table:

```sql
CREATE EXTERNAL TABLE employee_hbase_mapped (name text, dept text)
    LOCATION ('pxf://employees?PROFILE=hbase&SERVER=hbase_server')
    FORMAT 'CUSTOM' (FORMATTER='pxfwritable_import');
```

Add a `recordkey bytea` column to also read the row's key, HBase's unique per-row identifier that isn't stored in any column family. Type it `text` instead of `bytea` if you want to filter on it in a `WHERE` clause and have that filter pushed down to HBase.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
