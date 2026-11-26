---
title: Unloading Data from WarehousePG
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/unloading-data-from-warehousepg/
lastModified: 2026-09-25T15:14:11+01:00
---

# Unloading Data from WarehousePG

A writable external table allows you to select rows from other database tables and output the rows to files, named pipes, to applications. You can define file-based and web-based writable external tables.

This topic describes how to unload data from WarehousePG using parallel unload (writable external tables) and non-parallel unload (`COPY`).

- **[Defining a File-Based Writable External Table](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/unloading-data-from-warehousepg/defining-a-file-based-writable-external-table/)**

- **[Defining a Command-Based Writable External Web Table](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/unloading-data-from-warehousepg/defining-a-command-based-writable-external-web-table/)**

- **[Unloading Data Using a Writable External Table](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/unloading-data-from-warehousepg/unloading-data-using-a-writable-external-table/)**

- **[Unloading Data Using COPY](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/unloading-data-from-warehousepg/unloading-data-using-copy/)**

**Parent topic:** [Loading and Unloading Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/unloading-data-from-warehousepg/)

- [Defining a File-Based Writable External Table](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/unloading-data-from-warehousepg/defining-a-file-based-writable-external-table/): Writable external tables that output data to files can use the WarehousePG parallel file server program, gpfdist, or the WarehousePG Platform Extension Framework (PXF), WarehousePG's interface to Hadoop.
- [Defining a Command-Based Writable External Web Table](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/unloading-data-from-warehousepg/defining-a-command-based-writable-external-web-table/): You can define writable external web tables to send output rows to an application or script. The application must accept an input stream, reside in the same location on all of the WarehousePG segment hosts, and be executable by the gpadmin user. All segments in the WarehousePG cluster run the application or script, whether or not a segment has output rows to process.
- [Unloading Data Using a Writable External Table](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/unloading-data-from-warehousepg/unloading-data-using-a-writable-external-table/): Writable external tables allow only INSERT operations. You must grant INSERT permission on a table to enable access to users who are not the table owner or a superuser. For example:
- [Unloading Data Using COPY](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/unloading-data-from-warehousepg/unloading-data-using-copy/): COPY TO copies data from a table to a file (or standard input) on the WarehousePG coordinator host using a single process on the WarehousePG coordinator instance. Use COPY to output a table's entire contents, or filter the output using a SELECT statement. For example:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
