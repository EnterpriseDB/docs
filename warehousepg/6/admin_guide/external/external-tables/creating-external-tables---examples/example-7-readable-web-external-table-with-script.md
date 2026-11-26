---
title: Example 7—Readable External Web Table with Script
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-7-readable-web-external-table-with-script/
lastModified: 2026-08-11T09:07:15Z
---

# Example 7—Readable External Web Table with Script

Creates a readable external web table that runs a script once per segment host:

```
=# CREATE EXTERNAL WEB TABLE log_output (linenum int, 
    message text) 
   EXECUTE '/var/load_scripts/get_log_data.sh' ON HOST 
   FORMAT 'TEXT' (DELIMITER '|');

```

**Parent topic:** [Examples for Creating External Tables](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
