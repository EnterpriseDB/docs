---
title: Accessing External Data with External Tables
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/
lastModified: 2026-09-25T15:27:49-07:00
---

# Accessing External Data with External Tables

External tables enable you to access external data as if it were a regular database table. They are often used to move data into and out of a WarehousePG, and can utilize WarehousePG parallelism by using the resources of all WarehousePG segments to load or unload data.

When you create an external table definition, you specify the structure and format of the data, the data access _protocol_, the location of the external data source, and other protocol-specific or format-specific options.

> **Important** WarehousePG 7 internally converts external tables to foreign tables, and internally operates on and represents the table using the foreign table data structures and catalog. Refer to [Understanding the External Table to Foreign Table Mapping](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/map_ext_to_foreign/) for detailed information about this conversion, and its runtime implications.

**Parent topic:** [Working with External Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/)

<a id="protocols"></a>

## About the External Table Data Access Protocols

An external table protocol identifies the data access method for an external data source. WarehousePG supports the following built-in (automatically-enabled) and opt-in (you enable) external table protocols:

| Protocol Name | Description                                                                                                                                                                                                                                                                                                                                                           | Type     |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `file://`     | Use to access external data files on segment hosts that the WarehousePG superuser (`gpadmin`) can access. Refer to [file:// Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/file-protocol/).                                                                                                                      | Built-in |
| `gpfdist://`  | Use to serve external data files to all WarehousePG segments in parallel. See [gpfdist:// Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/gpfdist-protocol/).                                                                                                                                                     | Built-in |
| `gpfdists://` | The secure version of `gpfdist`. See [gpfdists:// Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/gpfdists-protocol/).                                                                                                                                                                                            | Built-in |
| `pxf://`      | Use to access external object store systems (Azure, Google Cloud Storage, Minio, S3-compatible), Hadoop systems (HDFS, Hive, HBase), network file systems, and SQL databases with the WarehousePG Platform Extension Framework (PXF). See [pxf:// Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/pxf-protocol/). | Opt-in   |
| `s3://`       | Use to access files in an Amazon S3 bucket. See [s3:// Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/s3-protocol/).                                                                                                                                                                                             | Opt-in   |

A third party can also create a custom protocol that connects WarehousePG to new external data sources. Refer to [Creating a Custom Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/accessing-ext-files-custom-protocol/) for more information.

The opt-in/custom and built-in protocols differ in these ways:

- You must register opt-in and custom protocols. Built-in protocols are always available and cannot be unregistered.
- When you register an opt-in or custom protocol, WarehousePG adds a row to the `pg_extprotocol` catalog table to specify the handler functions that implement the protocol. The built-in protocols are not represented in this table.
- You must have installed the opt-in or custom protocol's shared libraries on all WarehousePG hosts. The built-in protocols have no additional libraries to install.
- You use `GRANT [SELECT | INSERT | ALL] ON PROTOCOL <name>` to grant users permissions on opt-in and custom protocols. To allow (or deny) users access to the built-in protocols, you use the `CREATE ROLE` or `ALTER ROLE` commands to add the `CREATEEXTTABLE` (or `NOCREATEEXTTABLE`) attribute to each user's role.

<a id="ops"></a>

## About External Table Operations

WarehousePG provides both readable ([CREATE EXTERNAL TABLE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_EXTERNAL_TABLE/)) and writable (`CREATE WRITABLE EXTERNAL TABLE`) external tables.

Readable external tables are typically used for data loading, and allow only [SELECT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/SELECT/) operations. They support:

- Basic extraction, transformation, and loading (ETL) tasks common in data warehousing
- Reading external table data in parallel from multiple WarehousePG segment instances, to optimize large load operations
- Filter pushdown. If a query contains a `WHERE` clause, it may be passed to the external data source. Refer to the [gp\_external\_enable\_filter\_pushdown](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/config_params/guc-list/) server configuration parameter discussion for more information. Note that this feature is currently supported only with the `pxf` protocol (see [pxf:// Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/pxf-protocol/)).

Writable external tables are typically used for data unloading, and allow only [INSERT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/INSERT/) operations. They support:

- Selecting data from database tables to insert into the writable external table
- Sending data to an application as a stream of data. For example, unload data from WarehousePG and send it to an application that connects to another database or ETL tool to load the data elsewhere.

<a id="types"></a>

## About the External Table Types

External tables are typically file-based or web-based:

- Regular (file-based) external tables can access static flat files. Regular external tables are rescannable: the data is static while the query runs.
- Web (web-based) external tables access dynamic data sources, either on a web server with the `http://` protocol or by running OS commands or scripts. External web tables are not rescannable, the data can change while the query runs. Refer to [Creating and Using External Web Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/creating-and-using-web-external-tables/) for more information.

The `pxf://` protocol can also access other types of external data, such as SQL databases.

<a id="defining"></a>

## Creating an External Table

When you create an external table definition, you specify the structure and format of the data, the access protocol, the location of the external data source, and other protocol-specific or format-specific options.

[Examples for Creating External Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/creating-external-tables---examples/) provides examples for different data types and different built-in protocols.

> **Important** After you create an external table, you must operate on the table using `ALTER EXTERNAL TABLE` and `DROP EXTERNAL TABLE` commands. WarehousePG does not recommend mixing and matching external table and foreign table syntaxes for table maintenance operations.

<a id="other"></a>

## Other Considerations

WarehousePG backup and restore operations back up and restore only external and external web table _definitions_, not the data source data.

By default, if external table data contains an error, the command fails and no data loads into the target database table. See [Handling Errors in External Table Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/handling-errors-ext-table-data/) for more information.

- [Understanding the External Table to Foreign Table Mapping](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/map_ext_to_foreign/): WarehousePG 7 uses the built-in gpexttablefdw foreign-data wrapper module to internally convert an external table that you define with the CREATE EXTERNAL TABLE command to a foreign table.
- [About Changes to External Tables in WarehousePG 7](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/about_exttab_7/): This topic describes the external table implementation and changes in WarehousePG 7, and is geared towards existing users of WarehousePG 6. WarehousePG 7 converts an external table that you define with the CREATE EXTERNAL TABLE command into a foreign table, and internally operates on and represents the table using the foreign table data structures and catalog.
- [file:// Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/file-protocol/): The file// protocol are read-only tables.
- [gpfdist:// Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/gpfdist-protocol/): The gpfdist:// protocol is used in a URI to reference a running gpfdist instance.
- [gpfdists:// Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/gpfdists-protocol/): The gpfdists// protocol.
- [pxf:// Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/pxf-protocol/): You can use the WarehousePG Platform Extension Framework (PXF) pxf:// protocol to access data residing in object store systems (Azure, Google Cloud Storage, Minio, S3), external Hadoop systems (HDFS, Hive, HBase), and SQL databases.
- [s3:// Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/s3-protocol/): The s3 protocol is used in a URL that specifies the location of an Amazon S3 bucket and a prefix to use for reading or writing files in the bucket.
- [Creating a Custom Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/accessing-ext-files-custom-protocol/): A custom protocol allows you to connect WarehousePG to a data source that cannot be accessed with the file//, or pxf:// protocols.
- [Handling Errors in External Table Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/handling-errors-ext-table-data/): By default, if external table data contains an error, the command fails and no data loads into the target database table.
- [Creating and Using External Web Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/creating-and-using-web-external-tables/): External web tables allow WarehousePG to treat dynamic data sources like regular database tables. Because web table data can change as a query runs, the data is not rescannable.
- [Examples for Creating External Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/creating-external-tables---examples/): These examples show how to define external data with different protocols. Each CREATE EXTERNAL TABLE command can contain only one protocol.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
