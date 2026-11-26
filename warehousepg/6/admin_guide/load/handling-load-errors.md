---
title: Handling Load Errors
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/
lastModified: 2026-08-11T09:07:15Z
---

# Handling Load Errors

Readable external tables are most commonly used to select data to load into regular database tables. You use the `CREATE TABLE AS SELECT` or `INSERT INTO`commands to query the external table data. By default, if the data contains an error, the entire command fails and the data is not loaded into the target database table.

The `SEGMENT REJECT LIMIT` clause allows you to isolate format errors in external table data and to continue loading correctly formatted rows. Use `SEGMENT REJECT LIMIT`to set an error threshold, specifying the reject limit `count` as number of `ROWS` (the default) or as a `PERCENT` of total rows (1-100).

The entire external table operation is cancelled, and no rows are processed, if the number of error rows reaches the `SEGMENT REJECT LIMIT`. The limit of error rows is per-segment, not per entire operation. The operation processes all good rows, and it discards and optionally logs formatting errors for erroneous rows, if the number of error rows does not reach the `SEGMENT REJECT LIMIT`.

The `LOG ERRORS` clause allows you to keep error rows for further examination. For information about the `LOG ERRORS` clause, see the `CREATE EXTERNAL TABLE` command in the _WarehousePG Reference Guide_.

When you set `SEGMENT REJECT LIMIT`, WarehousePG scans the external data in single row error isolation mode. Single row error isolation mode applies to external data rows with format errors such as extra or missing attributes, attributes of a wrong data type, or invalid client encoding sequences. WarehousePG does not check constraint errors, but you can filter constraint errors by limiting the `SELECT` from an external table at runtime. For example, to eliminate duplicate key errors:

```
=# INSERT INTO table_with_pkeys 
    SELECT DISTINCT * FROM external_table;

```

> **Note** When loading data with the `COPY` command or an external table, the value of the server configuration parameter `gp_initial_bad_row_limit` limits the initial number of rows that are processed that are not formatted properly. The default is to stop processing if the first 1000 rows contain formatting errors. See the _WarehousePG Reference Guide_ for information about the parameter.

- **[Define an External Table with Single Row Error Isolation](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/define-an-external-table-with-single-row-error-isolation/)**

- **[Capture Row Formatting Errors and Declare a Reject Limit](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/create-an-error-table-and-declare-a-reject-limit/)**

- **[Viewing Bad Rows in the Error Log](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/viewing-bad-rows-in-the-error-table-or-error-log/)**

- **[Moving Data between Tables](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/moving-data-between-tables/)**

**Parent topic:** [Loading and Unloading Data](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/)

- [Define an External Table with Single Row Error Isolation](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/define-an-external-table-with-single-row-error-isolation/): The following example logs errors internally in WarehousePG and sets an error threshold of 10 errors.
- [Capture Row Formatting Errors and Declare a Reject Limit](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/create-an-error-table-and-declare-a-reject-limit/): The following SQL fragment captures formatting errors internally in WarehousePG and declares a reject limit of 10 rows.
- [Viewing Bad Rows in the Error Log](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/viewing-bad-rows-in-the-error-table-or-error-log/): If you use single row error isolation (see Define an External Table with Single Row Error Isolation or Running COPY in Single Row Error Isolation Mode), any rows with formatting errors are logged internally by WarehousePG.
- [Moving Data between Tables](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/moving-data-between-tables/): You can use CREATE TABLE AS or INSERT...SELECT to load external and external web table data into another (non-external) database table, and the data will be loaded in parallel according to the external or external web table definition.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
