---
title: Example 2—Hadoop file server (pxf)
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/unloading-data-from-warehousepg/defining-a-file-based-writable-external-table/example-2-hadoop-file-server/
lastModified: 2026-09-25T15:14:11+01:00
---

# Example 2—Hadoop file server (pxf)

```
=# CREATE WRITABLE EXTERNAL TABLE unload_expenses 
   ( LIKE expenses ) 
   LOCATION ('pxf://dir/path?PROFILE=hdfs:text') 
 FORMAT 'TEXT' (DELIMITER ',')
 DISTRIBUTED BY (exp_id);

```

You specify an HDFS directory for a writable external table that you create with the `pxf` protocol.

**Parent topic:** [Defining a File-Based Writable External Table](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/unloading-data-from-warehousepg/defining-a-file-based-writable-external-table/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
