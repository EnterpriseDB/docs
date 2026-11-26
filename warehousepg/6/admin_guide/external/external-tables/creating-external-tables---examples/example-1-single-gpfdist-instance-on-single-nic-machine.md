---
title: Example 1—Single gpfdist instance on single-NIC machine
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-1-single-gpfdist-instance-on-single-nic-machine/
lastModified: 2026-08-11T09:07:15Z
---

# Example 1—Single gpfdist instance on single-NIC machine

Creates a readable external table, `ext_expenses`, using the `gpfdist` protocol. The files are formatted with a pipe (|) as the column delimiter.

```
=# CREATE EXTERNAL TABLE ext_expenses ( name text,
    date date, amount float4, category text, desc1 text )
    LOCATION ('gpfdist://etlhost-1:8081/*')
FORMAT 'TEXT' (DELIMITER '|');
```

**Parent topic:** [Examples for Creating External Tables](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
