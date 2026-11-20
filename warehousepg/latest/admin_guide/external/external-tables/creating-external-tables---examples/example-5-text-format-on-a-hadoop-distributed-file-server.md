---
title: Example 5—TEXT Format on a Hadoop Distributed File Server
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/creating-external-tables---examples/example-5-text-format-on-a-hadoop-distributed-file-server/
lastModified: 2026-09-25T15:27:49-07:00
---

# Example 5—TEXT Format on a Hadoop Distributed File Server

Creates a readable external table, _ext\_expenses,_ using the `pxf` protocol. The column delimiter is a pipe ( | ).

```
=# CREATE EXTERNAL TABLE ext_expenses ( name text, 
   date date,  amount float4, category text, desc1 text ) 
   LOCATION ('pxf://dir/data/filename.txt?PROFILE=hdfs:text') 
   FORMAT 'TEXT' (DELIMITER '|');

```

Refer to [HDFS](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/hdfs/) for information about using the WarehousePG Platform Extension Framework (PXF) to access data on a Hadoop Distributed File System.

**Parent topic:** [Examples for Creating External Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/creating-external-tables---examples/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
