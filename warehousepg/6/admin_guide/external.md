---
title: Working with External Data
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/
lastModified: 2026-09-25T15:27:49-07:00
---

# Working with External Data

Both external and foreign tables provide access to data stored in data sources outside of WarehousePG as if the data were stored in regular database tables. You can read data from and write data to external and foreign tables.

An external table is a WarehousePG table backed with data that resides outside of the database. You create a readable external table to read data from the external data source and create a writable external table to write data to the external source. You can use external tables in SQL commands just as you would a regular database table. For example, you can `SELECT` (readable external table), `INSERT` (writable external table), and join external tables with other WarehousePG tables. External tables are most often used to load and unload database data. Refer to [Defining External Tables](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/) for more information about using external tables to access external data.

[PXF for WarehousePG](https://www.enterprisedb.com/docs/pxf/latest/) describes using PXF and external tables to access external data sources.

A foreign table is a different kind of WarehousePG table backed with data that resides outside of the database. You can both read from and write to the same foreign table. You can similarly use foreign tables in SQL commands as described above for external tables. Refer to [Accessing External Data with Foreign Tables](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/foreign/) for more information about accessing external data using foreign tables.

Web-based external tables provide access to data served by an HTTP server or an operating system process. See [Creating and Using External Web Tables](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-and-using-web-external-tables/) for more about web-based tables.

- **[PXF for WarehousePG](https://www.enterprisedb.com/docs/pxf/latest/)**\
  Data managed by your organization may already reside in external sources such as Hadoop, object stores, and other SQL databases. The WarehousePG Platform Extension Framework (PXF) provides access to this external data via built-in connectors that map an external data source to a WarehousePG table definition.

- **[Defining External Tables](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/)**\
  External tables enable accessing external data as if it were a regular database table. They are often used to move data into and out of a WarehousePG.

- **[Accessing External Data with Foreign Tables](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/foreign/)**

- **[Using the WarehousePG Parallel File Server (gpfdist)](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/using-gpfdist/)**\
  The gpfdist protocol is used in a `CREATE EXTERNAL TABLE` SQL command to access external data served by the WarehousePG `gpfdist` file server utility. When external data is served by gpfdist, all segments in the WarehousePG cluster can read or write external table data in parallel.

**Parent topic:** [WarehousePG Administrator Guide](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/)

- [Accessing External Data with Foreign Tables](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/foreign/): WarehousePG implements portions of the SQL/MED specification, allowing you to access data that resides outside of WarehousePG using regular SQL queries. Such data is referred to as foreign or external data.
- [Defining External Tables](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/): External tables enable accessing external data as if it were a regular database table. They are often used to move data into and out of a WarehousePG.
- [Using the WarehousePG Parallel File Server (gpfdist)](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/using-gpfdist/): The gpfdist protocol is used in a CREATE EXTERNAL TABLE SQL command to access external data served by the WarehousePG gpfdist file server utility. When external data is served by gpfdist, all segments in the WarehousePG cluster can read or write external table data in parallel.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
