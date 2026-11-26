---
title: Accessing the Database
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/
lastModified: 2026-11-24T10:40:00Z
---

# Accessing the Database

This topic describes the various client tools you can use to connect to WarehousePG, and how to establish a database session.

- **[Establishing a Database Session](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/establishing-a-database-session/)**

- **[Supported Client Applications](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/supported-client-applications/)**

- **[WarehousePG Client Applications](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/warehousepg-client-applications/)**

- **[Connecting with psql](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/connecting-with-psql/)**

- **[Database Application Interfaces](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/database-application-interfaces/)**

- **[Using JDBC and ODBC Drivers](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/using-jdbc-and-odbc-drivers/)**

- **[PostgreSQL Application Compatibility](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/jdbc-and-odbc-differences/)**

- **[Troubleshooting Connection Problems](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/troubleshooting-connection-problems/)**

**Parent topic:** [Managing a WarehousePG cluster](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/)

- [Establishing a Database Session](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/establishing-a-database-session/): Users can connect to WarehousePG using a PostgreSQL-compatible client program, such as psql. Users and administrators always connect to WarehousePG through the coordinator node; the segments cannot accept client connections.
- [Supported Client Applications](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/supported-client-applications/): Users can connect to WarehousePG using various client applications:
- [WarehousePG Client Applications](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/warehousepg-client-applications/): WarehousePG comes installed with a number of client utility applications located in the $GPHOME/bin directory of your WarehousePG coordinator host installation. The following are the most commonly used client utility applications:
- [Connecting with psql](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/connecting-with-psql/): Depending on the default values used or the environment variables you have set, the following examples show how to access a database via psql:
- [Using the PgBouncer Connection Pooler](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/pgbouncer/): The PgBouncer utility manages connection pools for PostgreSQL and WarehousePG connections.
- [Database Application Interfaces](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/database-application-interfaces/): You may want to develop your own client applications that interface to WarehousePG. PostgreSQL provides a number of database drivers for the most commonly used database application programming interfaces (APIs), which can also be used with WarehousePG. These drivers are available as a separate download. Each driver (except libpq, which comes with PostgreSQL) is an independent PostgreSQL development project and must be downloaded, installed and configured to connect to WarehousePG. The following drivers are available:
- [Using JDBC and ODBC Drivers](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/using-jdbc-and-odbc-drivers/): Connect Java and ODBC applications to WarehousePG with a standard PostgreSQL driver such as pgJDBC or psqlODBC. Point the driver at the coordinator, allow the connection in pghba.conf, and apply the practices that suit a massively parallel processing (MPP) database. To choose a driver, see Database Application Interfaces. To anticipate behaviors that differ from PostgreSQL, see PostgreSQL Application Compatibility.
- [PostgreSQL Application Compatibility](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/jdbc-and-odbc-differences/): Account for the distributed nature of WarehousePG when you connect PostgreSQL clients and drivers, such as pgJDBC and psqlODBC, to it. As a massively parallel processing (MPP) system, WarehousePG changes the behavior of some PostgreSQL features and doesn't support others. Each difference has a workaround. For complete SQL support, see Summary of WarehousePG Features. For connection details, see Using JDBC and ODBC Drivers.
- [Troubleshooting Connection Problems](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/access_db/troubleshooting-connection-problems/): A number of things can prevent a client application from successfully connecting to WarehousePG. This topic explains some of the common causes of connection problems and how to correct them.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
