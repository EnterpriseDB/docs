---
title: Example 3—Multiple gpfdists instances
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-3-multiple-gpfdists-instances/
lastModified: 2026-08-11T09:07:15Z
---

# Example 3—Multiple gpfdists instances

Creates a readable external table, _ext\_expenses,_ from all files with the _txt_ extension using the `gpfdists` protocol. The column delimiter is a pipe ( | ) and NULL (' ') is a space. For information about the location of security certificates, see [gpfdists:// Protocol](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/gpfdists-protocol/).

1. Run `gpfdist` with the `--ssl` option.
2. Run the following command.

   ```
   =# CREATE EXTERNAL TABLE ext_expenses ( name text, 
      date date,  amount float4, category text, desc1 text ) 
      LOCATION ('gpfdists://etlhost-1:8081/*.txt', 
                'gpfdists://etlhost-2:8082/*.txt')
      FORMAT 'TEXT' ( DELIMITER '|' NULL ' ') ;

   ```

**Parent topic:** [Examples for Creating External Tables](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
