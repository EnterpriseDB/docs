---
title: Example 9—Writable External Web Table with Script
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/creating-external-tables---examples/example-9-writable-external-web-table-with-script/
lastModified: 2026-09-25T15:14:11+01:00
---

# Example 9—Writable External Web Table with Script

Creates a writable external web table, `campaign_out`, that pipes output data received by the segments to an executable script, `to_adreport_etl.sh`:

```
=# CREATE WRITABLE EXTERNAL WEB TABLE campaign_out
    (LIKE campaign)
    EXECUTE '/var/unload_scripts/to_adreport_etl.sh'
    FORMAT 'TEXT' (DELIMITER '|');
```

**Parent topic:** [Examples for Creating External Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/creating-external-tables---examples/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
