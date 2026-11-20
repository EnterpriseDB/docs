---
title: Example 1 - WarehousePG file server (gpfdist)
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/unloading-data-from-warehousepg/defining-a-file-based-writable-external-table/example-1-warehousepg-file-server-gpfdist/
lastModified: 2026-08-11T09:07:15Z
---

# Example 1 - WarehousePG file server (gpfdist)

```
=# CREATE WRITABLE EXTERNAL TABLE unload_expenses 
   ( LIKE expenses ) 
   LOCATION ('gpfdist://etlhost-1:8081/expenses1.out', 
             'gpfdist://etlhost-2:8081/expenses2.out')
 FORMAT 'TEXT' (DELIMITER ',')
 DISTRIBUTED BY (exp_id);

```

**Parent topic:** [Defining a File-Based Writable External Table](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/unloading-data-from-warehousepg/defining-a-file-based-writable-external-table/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
