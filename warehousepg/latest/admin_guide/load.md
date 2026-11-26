---
title: Loading and Unloading Data
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/
lastModified: 2026-09-25T15:27:49-07:00
---

# Loading and Unloading Data

The topics in this section describe methods for loading and writing data into and out of a WarehousePG, and how to format data files.

WarehousePG supports high-performance parallel data loading and unloading, and for smaller amounts of data, single file, non-parallel data import and export.

WarehousePG can read from and write to several types of external data sources, including text files, Hadoop file systems, Amazon S3, and web servers.

- The `COPY` SQL command transfers data between an external text file on the coordinator host, or multiple text files on segment hosts, and a WarehousePG table.
- Readable external tables allow you to query data outside of the database directly and in parallel using SQL commands such as `SELECT` or `JOIN`, or sort external table data, and you can create views for external tables. External tables are often used to load external data into a regular database table using a command such as `CREATE TABLE table AS SELECT * FROM ext_table`.
- External web tables provide access to dynamic data. They can be backed with data from URLs accessed using the HTTP protocol or by the output of an OS script running on one or more segments.
- The `gpfdist` utility is the WarehousePG parallel file distribution program. It is an HTTP server that is used with external tables to allow WarehousePG segments to load external data in parallel, from multiple file systems. You can run multiple instances of `gpfdist` on different hosts and network interfaces and access them in parallel.
- The `gpload` utility automates the steps of a load task using `gpfdist` and a YAML-formatted control file.
- You can create readable and writable external tables with the WarehousePG Platform Extension Framework (PXF), and use these tables to load data into, or offload data from, WarehousePG. For information about using PXF, refer to [PXF for WarehousePG](https://www.enterprisedb.com/docs/pxf/latest/).

The method you choose to load data depends on the characteristics of the source data—its location, size, format, and any transformations required.

In the simplest case, the `COPY` SQL command loads data into a table from a text file that is accessible to the WarehousePG coordinator instance. This requires no setup and provides good performance for smaller amounts of data. With the `COPY` command, the data copied into or out of the database passes between a single file on the coordinator host and the database. This limits the total size of the dataset to the capacity of the file system where the external file resides and limits the data transfer to a single file write stream.

More efficient data loading options for large datasets take advantage of the WarehousePG MPP architecture, using the WarehousePG segments to load data in parallel. These methods allow data to load simultaneously from multiple file systems, through multiple NICs, on multiple hosts, achieving very high data transfer rates. External tables allow you to access external files from within the database as if they are regular database tables. When used with `gpfdist`, the WarehousePG parallel file distribution program, external tables provide full parallelism by using the resources of all WarehousePG segments to load or unload data.

WarehousePG leverages the parallel architecture of the Hadoop Distributed File System to access files on that system.

- [Loading Data Using an External Table](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-data-using-an-external-table/): Use SQL commands such as INSERT and SELECT to query a readable external table, the same way that you query a regular database table. For example, to load travel expense data from an external table, extexpenses, into a database table, expensestravel:
- [Loading and Writing Non-HDFS Custom Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-and-writing-non-hdfs-custom-data/): WarehousePG supports TEXT and CSV formats for importing and exporting data through external tables. You can load and save data in other formats by defining a custom format or custom protocol or by setting up a transformation with the gpfdist parallel file server.
- [Handling Load Errors](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/handling-load-errors/): Readable external tables are most commonly used to select data to load into regular database tables. You use the CREATE TABLE AS SELECT or INSERT INTOcommands to query the external table data. By default, if the data contains an error, the entire command fails and the data is not loaded into the target database table.
- [Loading Data with gpload](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-data-with-gpload/): The WarehousePG gpload utility loads data using readable external tables and the WarehousePG parallel file server (gpfdist or gpfdists). It handles parallel file-based external table setup and allows users to configure their data format, external table definition, and gpfdist or gpfdists setup in a single configuration file.
- [Transforming External Data with gpfdist and gpload](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/transforming-xml-data/): The gpfdist parallel file server allows you to set up transformations that enable WarehousePG external tables to read and write files in formats that are not supported with the CREATE EXTERNAL TABLE command's FORMAT clause. An input transformation reads a file in the foreign data format and outputs rows to gpfdist in the CSV or other text format specified in the external table's FORMAT clause. An output transformation receives rows from gpfdist in text format and converts them to the foreign data format.
- [Loading Data with COPY](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-data-with-copy/): COPY FROM copies data from a file or standard input into a table and appends the data to the table contents. COPY is non-parallel: data is loaded in a single process using the WarehousePG coordinator instance. Using COPY is only recommended for very small data files.
- [Running COPY in Single Row Error Isolation Mode](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/running-copy-in-single-row-error-isolation-mode/): By default, COPY stops an operation at the first error: if the data contains an error, the operation fails and no data loads. If you run COPY FROM in single row error isolation mode, WarehousePG skips rows that contain format errors and loads properly formatted rows. Single row error isolation mode applies only to rows in the input file that contain format errors. If the data contains a constraint error such as violation of a NOT NULL, CHECK, or UNIQUE constraint, the operation fails and no data loads.
- [Optimizing Data Load and Query Performance](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/optimizing-data-load-and-query-performance/): Use the following tips to help optimize your data load and subsequent query performance.
- [Unloading Data from WarehousePG](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/unloading-data-from-warehousepg/): A writable external table allows you to select rows from other database tables and output the rows to files, named pipes, to applications. You can define file-based and web-based writable external tables.
- [Formatting Data Files](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/formatting-data-files/): When you use the WarehousePG tools for loading and unloading data, you must specify how your data is formatted. COPY, CREATE EXTERNAL TABLE,and gpload have clauses that allow you to specify how your data is formatted. Data can be delimited text (TEXT) or comma separated values (CSV) format. External data must be formatted correctly to be read by WarehousePG. This topic explains the format of data files expected by WarehousePG.
- [Example Custom Data Access Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/example-custom-data-access-protocol/): The following is the API for the WarehousePG custom data access protocol. The example protocol implementation gpextprotocal.c is written in C and shows how the API can be used. For information about accessing a custom data access protocol, see Using a Custom Protocol.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
