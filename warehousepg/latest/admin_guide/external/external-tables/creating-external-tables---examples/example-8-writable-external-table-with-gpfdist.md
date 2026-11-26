---
title: Example 8—Writable External Table with gpfdist
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/creating-external-tables---examples/example-8-writable-external-table-with-gpfdist/
lastModified: 2026-09-25T15:14:11+01:00
---

# Example 8—Writable External Table with gpfdist

Creates a writable external table, _sales\_out,_ that uses gpfdist to write output data to the file _sales.out_. The column delimiter is a pipe ( | ) and NULL (' ') is a space. The file will be created in the directory specified when you started the gpfdist file server.

```
=# CREATE WRITABLE EXTERNAL TABLE sales_out (LIKE sales) 
   LOCATION ('gpfdist://etl1:8081/sales.out')
   FORMAT 'TEXT' ( DELIMITER '|' NULL ' ')
   DISTRIBUTED BY (txn_id);
```

**Parent topic:** [Examples for Creating External Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/creating-external-tables---examples/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
