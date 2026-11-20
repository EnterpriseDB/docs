---
title: Capture Row Formatting Errors and Declare a Reject Limit
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/create-an-error-table-and-declare-a-reject-limit/
lastModified: 2026-08-11T09:07:15Z
---

# Capture Row Formatting Errors and Declare a Reject Limit

The following SQL fragment captures formatting errors internally in WarehousePG and declares a reject limit of 10 rows.

```
LOG ERRORS SEGMENT REJECT LIMIT 10 ROWS
```

Use the built-in SQL function `gp_read_error_log()` to read the error log data. For information about viewing log errors, see [Viewing Bad Rows in the Error Log](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/viewing-bad-rows-in-the-error-table-or-error-log/).

**Parent topic:** [Handling Load Errors](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
