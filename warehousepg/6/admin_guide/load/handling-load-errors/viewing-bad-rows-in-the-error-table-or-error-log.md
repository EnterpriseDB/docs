---
title: Viewing Bad Rows in the Error Log
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/viewing-bad-rows-in-the-error-table-or-error-log/
lastModified: 2026-08-11T09:07:15Z
---

# Viewing Bad Rows in the Error Log

If you use single row error isolation (see [Define an External Table with Single Row Error Isolation](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/define-an-external-table-with-single-row-error-isolation/) or [Running COPY in Single Row Error Isolation Mode](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/running-copy-in-single-row-error-isolation-mode/)), any rows with formatting errors are logged internally by WarehousePG.

WarehousePG captures the following error information in a table format:

| column   | type        | description                                                                                                                                                                                                                                                                                                  |
| -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| cmdtime  | timestamptz | Timestamp when the error occurred.                                                                                                                                                                                                                                                                           |
| relname  | text        | The name of the external table or the target table of a `COPY` command.                                                                                                                                                                                                                                      |
| filename | text        | The name of the load file that contains the error.                                                                                                                                                                                                                                                           |
| linenum  | int         | If `COPY` was used, the line number in the load file where the error occurred. For external tables using file:// protocol or gpfdist:// protocol and CSV format, the file name and line number is logged.                                                                                                    |
| bytenum  | int         | For external tables with the gpfdist:// protocol and data in TEXT format: the byte offset in the load file where the error occurred. gpfdist parses TEXT files in blocks, so logging a line number is not possible. CSV files are parsed a line at a time so line number tracking is possible for CSV files. |
| errmsg   | text        | The error message text.                                                                                                                                                                                                                                                                                      |
| rawdata  | text        | The raw data of the rejected row.                                                                                                                                                                                                                                                                            |
| rawbytes | bytea       | In cases where there is a database encoding error (the client encoding used cannot be converted to a server-side encoding), it is not possible to log the encoding error as _rawdata_. Instead the raw bytes are stored and you will see the octal code for any non seven bit ASCII characters.              |

You can use the WarehousePG built-in SQL function `gp_read_error_log()` to display formatting errors that are logged internally. For example, this command displays the error log information for the table _ext\_expenses_:

```
SELECT gp_read_error_log('ext_expenses');
```

For information about managing formatting errors that are logged internally, see the command `COPY` or `CREATE EXTERNAL TABLE` in the _WarehousePG Reference Guide_.

**Parent topic:** [Handling Load Errors](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
