---
title: Accessing External Data with Foreign Tables
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/foreign/
lastModified: 2026-09-17T12:37:48Z
---

# Accessing External Data with Foreign Tables

WarehousePG implements portions of the SQL/MED specification, allowing you to access data that resides outside of WarehousePG using regular SQL queries. Such data is referred to as _foreign_ or external data.

You can access foreign data with help from a _foreign-data wrapper_. A foreign-data wrapper is a library that communicates with a remote data source. This library hides the source-specific connection and data access details.

The WarehousePG distribution includes the [postgres\_fdw](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/bundled/postgres_fdw/) foreign data wrapper.

If none of the existing PostgreSQL or WarehousePG foreign-data wrappers suit your needs, you can write your own as described in [Writing a Foreign Data Wrapper](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/foreign/devel-fdw/).

To access foreign data, you create a _foreign server_ object, which defines how to connect to a particular remote data source according to the set of options used by its supporting foreign-data wrapper. Then you create one or more _foreign tables_, which define the structure of the remote data. A foreign table can be used in queries just like a normal table, but a foreign table has no storage in the WarehousePG server. Whenever a foreign table is accessed, WarehousePG asks the foreign-data wrapper to fetch data from, or update data in (if supported by the wrapper), the remote source.

> **Note** GPORCA does not support foreign tables, a query on a foreign table always falls back to the Postgres Planner.

Accessing remote data may require authenticating to the remote data source. This information can be provided by a _user mapping_, which can provide additional data such as a user name and password based on the current WarehousePG role.

For additional information, refer to the [CREATE FOREIGN DATA WRAPPER](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_FOREIGN_DATA_WRAPPER/), [CREATE SERVER](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_SERVER/), [CREATE USER MAPPING](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_USER_MAPPING/), and [CREATE FOREIGN TABLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_FOREIGN_TABLE/) SQL reference pages.

## Using Foreign-Data Wrappers with WarehousePG

Most PostgreSQL foreign-data wrappers should work with WarehousePG. However, PostgreSQL foreign-data wrappers connect only through the WarehousePG coordinator by default and do not access the WarehousePG segment instances directly.

WarehousePG adds an `mpp_execute` option to FDW-related SQL commands. If the foreign-data wrapper supports it, you can specify `mpp_execute '*value*'` in the `OPTIONS` clause when you create the FDW, server, or foreign table to identify the WarehousePG host from which the foreign-data wrapper reads or writes data. Valid `*value*`s are:

- `master` (the default)—Read or write data from the coordinator host.
- `any`—Read data from either the coordinator host or any one segment, depending on which path costs less.
- `all segments`—Read or write data from all segments. If a foreign-data wrapper supports this value, for correct results it should have a policy that matches segments to data.

(A PostgreSQL foreign-data wrapper may work with the various `mpp_execute` option settings, but the results are not guaranteed to be correct. For example, a segment may not be able to connect to the foriegn server, or segments may receive overlapping results resulting in duplicate rows.)

> **Note** GPORCA does not support foreign tables, a query on a foreign table always falls back to the Postgres Planner.

**Parent topic:** [Working with External Data](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/foreign/)

- [Writing a Foreign Data Wrapper](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/foreign/devel-fdw/): This chapter outlines how to write a new foreign-data wrapper.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
