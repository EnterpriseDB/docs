---
title: Unloading Data Using a Writable External Table
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/unloading-data-from-warehousepg/unloading-data-using-a-writable-external-table/
lastModified: 2026-08-11T09:07:15Z
---

# Unloading Data Using a Writable External Table

Writable external tables allow only `INSERT` operations. You must grant `INSERT` permission on a table to enable access to users who are not the table owner or a superuser. For example:

```
GRANT INSERT ON writable_ext_table TO admin;

```

To unload data using a writable external table, select the data from the source table(s) and insert it into the writable external table. The resulting rows are output to the writable external table. For example:

```
INSERT INTO writable_ext_table SELECT * FROM regular_table;

```

**Parent topic:** [Unloading Data from WarehousePG](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/unloading-data-from-warehousepg/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
