---
title: Handling Errors in External Table Data
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/handling-errors-ext-table-data/
lastModified: 2026-08-11T09:07:15Z
---

# Handling Errors in External Table Data

By default, if external table data contains an error, the command fails and no data loads into the target database table.

Define the external table with single row error handling to enable loading correctly formatted rows and to isolate data errors in external table data. See [Handling Load Errors](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/handling-load-errors/).

The `gpfdist` file server uses the `HTTP` protocol. External table queries that use `LIMIT` end the connection after retrieving the rows, causing an HTTP socket error. If you use `LIMIT` in queries of external tables that use the `gpfdist://` or `http:// protocols`, ignore these errors – data is returned to the database as expected.

**Parent topic:** [Defining External Tables](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
