---
title: Define an External Table with Single Row Error Isolation
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/define-an-external-table-with-single-row-error-isolation/
lastModified: 2026-08-11T09:07:15Z
---

# Define an External Table with Single Row Error Isolation

The following example logs errors internally in WarehousePG and sets an error threshold of 10 errors.

```
=# CREATE EXTERNAL TABLE ext_expenses ( name text, 
   date date,  amount float4, category text, desc1 text ) 
   LOCATION ('gpfdist://etlhost-1:8081/*', 
             'gpfdist://etlhost-2:8082/*')
   FORMAT 'TEXT' (DELIMITER '|')
   LOG ERRORS SEGMENT REJECT LIMIT 10 
     ROWS;
```

Use the built-in SQL function `gp_read_error_log('external_table')` to read the error log data. This example command displays the log errors for _ext\_expenses_:

```
SELECT gp_read_error_log('ext_expenses');
```

For information about the format of the error log, see [Viewing Bad Rows in the Error Log](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/viewing-bad-rows-in-the-error-table-or-error-log/).

The built-in SQL function `gp_truncate_error_log('external_table')` deletes the error data. This example deletes the error log data created from the previous external table example :

```
SELECT gp_truncate_error_log('ext_expenses'); 
```

**Parent topic:** [Handling Load Errors](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
