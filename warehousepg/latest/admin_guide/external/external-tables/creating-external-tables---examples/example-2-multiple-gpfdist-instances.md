---
title: Example 2—Multiple gpfdist instances
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/creating-external-tables---examples/example-2-multiple-gpfdist-instances/
lastModified: 2026-09-25T15:14:11+01:00
---

# Example 2—Multiple gpfdist instances

Creates a readable external table, _ext\_expenses,_ using the gpfdist protocol from all files with the _txt_ extension. The column delimiter is a pipe ( | ) and NULL (' ') is a space.

```
=# CREATE EXTERNAL TABLE ext_expenses ( name text, 
   date date,  amount float4, category text, desc1 text ) 
   LOCATION ('gpfdist://etlhost-1:8081/*.txt', 
             'gpfdist://etlhost-2:8081/*.txt')
   FORMAT 'TEXT' ( DELIMITER '|' NULL ' ') ;

```

**Parent topic:** [Examples for Creating External Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/creating-external-tables---examples/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
