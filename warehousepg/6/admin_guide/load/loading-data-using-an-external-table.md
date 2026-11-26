---
title: Loading Data Using an External Table
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/loading-data-using-an-external-table/
lastModified: 2026-08-11T09:07:15Z
---

# Loading Data Using an External Table

Use SQL commands such as `INSERT` and `SELECT` to query a readable external table, the same way that you query a regular database table. For example, to load travel expense data from an external table, `ext_expenses`, into a database table, `expenses_travel`:

```
=# INSERT INTO expenses_travel 
    SELECT * from ext_expenses where category='travel';

```

To load all data into a new database table:

```
=# CREATE TABLE expenses AS SELECT * from ext_expenses;

```

**Parent topic:** [Loading and Unloading Data](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
