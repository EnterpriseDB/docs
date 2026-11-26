---
title: Working with External Data
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/
lastModified: 2026-09-25T15:27:49-07:00
---

# Working with External Data

Both external and foreign tables provide access to data stored in data sources outside of WarehousePG as if the data were stored in regular database tables. You can read data from and write data to external and foreign tables.

> **Important** WarehousePG 7 internally converts external tables to foreign tables, and internally operates on and represents the table using the foreign table data structures and catalog. Refer to [Understanding the External Table to Foreign Table Mapping](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/map_ext_to_foreign/) for detailed information about this conversion, and its runtime implications.

**Parent topic:** [WarehousePG Administrator Guide](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/)

<a id="foreign"></a>

## About Foreign Tables

A foreign table is a WarehousePG table backed with data that resides outside of the database. Foreign tables are often used to load and unload database data. You can both read from and write to the same foreign table. You can use foreign tables in SQL commands just as you would a regular database table. For example, you can `SELECT`, `INSERT`, and `JOIN` foreign tables with other WarehousePG tables.

Refer to [Accessing External Data with Foreign Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/foreign/) for more information about accessing external data using foreign tables.

<a id="external"></a>

## About External Tables

An external table is different kind of WarehousePG table backed with data that resides outside of the database. External tables are often used to load and unload database data. You create a readable external table to read data from the external data source and create a writable external table to write data to the external source. You can use external tables in SQL commands just as you would a regular database table. For example, you can `SELECT` (readable external table), `INSERT` (writable external table), and `JOIN` external tables with other WarehousePG tables.

Refer to [Acessing External Data with External Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/) for more information about using external tables to access external data.

<a id="gpfdist"></a>

### About gpfdist External Tables

You can use the `gpfdist` file server utility and external tables to serve up external data to WarehousePG. When external data is served by `gpfdist`, all segments in the WarehousePG cluster can read or write external table data in parallel. Refer to [Using the WarehousePG Parallel File Server (gpfdist)](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/using-gpfdist/) for more information.

<a id="web_external"></a>

### About Web-Based External Tables

Web-based external tables provide access to data served by an HTTP server or an operating system process. See [Creating and Using External Web Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/creating-and-using-web-external-tables/) for more about web-based tables.

<a id="pxf"></a>

## About Accessing External Data with pxf

Data managed by your organization may already reside in external sources such as Hadoop, object stores, and other SQL databases. The WarehousePG Platform Extension Framework (PXF) provides access to this external data via built-in connectors that map an external data source to a WarehousePG table definition. Refer to [PXF for WarehousePG](https://www.enterprisedb.com/docs/pxf/latest/) for more information about using PXF.

- [Accessing External Data with Foreign Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/foreign/): WarehousePG implements portions of the SQL/MED specification, allowing you to access data that resides outside of WarehousePG using regular SQL queries. Such data is referred to as foreign or external data.
- [Accessing External Data with External Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/): External tables enable you to access external data as if it were a regular database table. They are often used to move data into and out of a WarehousePG, and can utilize WarehousePG parallelism by using the resources of all WarehousePG segments to load or unload data.
- [Using the WarehousePG Parallel File Server (gpfdist)](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/using-gpfdist/): The gpfdist protocol is used in a CREATE EXTERNAL TABLE SQL command to access external data served by the WarehousePG gpfdist file server utility. When external data is served by gpfdist, all segments in the WarehousePG cluster can read or write external table data in parallel.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
