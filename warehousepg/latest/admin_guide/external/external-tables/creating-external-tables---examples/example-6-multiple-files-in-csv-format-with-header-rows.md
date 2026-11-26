---
title: Example 6—Multiple files in CSV format with header rows
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/creating-external-tables---examples/example-6-multiple-files-in-csv-format-with-header-rows/
lastModified: 2026-09-25T15:14:11+01:00
---

# Example 6—Multiple files in CSV format with header rows

Creates a readable external table, _ext\_expenses,_ using the `file` protocol. The files are `CSV` format and have a header row.

```
=# CREATE EXTERNAL TABLE ext_expenses ( name text, 
   date date,  amount float4, category text, desc1 text ) 
   LOCATION ('file://filehost/data/international/*', 
             'file://filehost/data/regional/*',
             'file://filehost/data/supplement/*.csv')
   FORMAT 'CSV' (HEADER);

```

**Parent topic:** [Examples for Creating External Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/creating-external-tables---examples/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
