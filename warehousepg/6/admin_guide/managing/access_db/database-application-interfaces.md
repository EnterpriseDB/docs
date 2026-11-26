---
title: Database Application Interfaces
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/database-application-interfaces/
lastModified: 2026-11-25T18:58:49Z
---

# Database Application Interfaces

You may want to develop your own client applications that interface to WarehousePG. PostgreSQL provides a number of database drivers for the most commonly used database application programming interfaces (APIs), which can also be used with WarehousePG. These drivers are available as a separate download. Each driver (except libpq, which comes with PostgreSQL) is an independent PostgreSQL development project and must be downloaded, installed and configured to connect to WarehousePG. The following drivers are available:

| API             | PostgreSQL Driver                                                              | Download Link                                                                                  |
| --------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| ODBC            | [EDB ODBC Connector](https://www.enterprisedb.com/docs/odbc_connector/latest/) | [EDB Connectors page](https://www.enterprisedb.com/software-downloads-postgres#edb-connectors) |
| JDBC            | [EDB JDBC Connector](https://www.enterprisedb.com/docs/jdbc_connector/latest/) | [EDB Connectors page](https://www.enterprisedb.com/software-downloads-postgres#edb-connectors) |
| Perl DBI        | pgperl                                                                         | <https://metacpan.org/release/DBD-Pg>                                                          |
| Python DBI      | pygresql                                                                       | <http://www.pygresql.org/>                                                                     |
| Python DBI      | psycopg2                                                                       | <https://www.psycopg.org/>                                                                     |
| libpq C Library | libpq                                                                          | <https://www.postgresql.org/docs/12/libpq.html>                                                |

> **Note**
>
> While WarehousePG is compatible with community PostgreSQL drivers, we recommend that you use the [EDB ODBC Connector](https://www.enterprisedb.com/docs/odbc_connector/latest/) or the [EDB JDBC Connector](https://www.enterprisedb.com/docs/jdbc_connector/latest/) for production environments. These drivers are specifically optimized for EDB-supported Postgres distributions, including WarehousePG, and ensure full compatibility with enterprise security and performance features.
>
> For WarehousePG 7 and 6, use EDB JDBC 42.7.3.5 and EDB ODBC 18.00.0001.01. EDB ODBC isn't available for EL7, so on EL7 hosts use EDB JDBC.

General instructions for accessing a WarehousePG with an API are:

1. Download your programming language platform and respective API from the appropriate source. For example, you can get the Java Development Kit (JDK) and JDBC API from Oracle.
2. Write your client application according to the API specifications. When programming your application, be aware of the SQL support in WarehousePG so you do not include any unsupported SQL syntax.

Download the appropriate driver and configure connectivity to your WarehousePG coordinator instance.

For connection steps and the behaviors that differ from PostgreSQL, see [Using JDBC and ODBC Drivers](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/using-jdbc-and-odbc-drivers/) and [PostgreSQL Application Compatibility](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/jdbc-and-odbc-differences/).

**Parent topic:** [Accessing the Database](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
