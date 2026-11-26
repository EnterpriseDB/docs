---
title: EDB ODBC Connector
product: ODBC Connector
version: "18"
url: https://www.enterprisedb.com/docs/odbc_connector/latest/
lastModified: 2026-08-12T12:13:41+02:00
---

# EDB ODBC Connector

ODBC (Open Database Connectivity) is a programming interface that allows a client application to connect to any database that provides an ODBC driver. EDB ODBC Connector is an interface that allows an ODBC-compliant client application to connect to an EDB Postgres Advanced Server database. The EDB ODBC Connector allows an application that was designed to work with other databases to run on EDB Postgres Advanced Server. The ODBC Connector provides a way for the client application to establish a connection, send queries, and retrieve results from EDB Postgres Advanced Server.

While ODBC Connector provides a level of application portability, the portability is limited. It provides a connection but doesn't guarantee command compatibility. Commands that are acceptable in another database might not work in EDB Postgres Advanced Server.

The major components in a typical ODBC application are:

- The client application written in a language that has a binding for ODBC
- The ODBC Administrator, which handles named connections for Windows or odbc.ini which contains named connections for Linux
- The database-specific ODBC driver (ODBC Connector)
- The ODBC-compliant server (EDB Postgres Advanced Server)

You can write client applications in any language that has a binding for ODBC. C, MS-Access, and C++ are just a few.

- [Release notes](https://www.enterprisedb.com/docs/odbc_connector/latest/01_odbc_rel_notes/): The EDB ODBC connector documentation describes the latest version of the EDB ODBC connector.
  - [Version 18.00.0001.01](https://www.enterprisedb.com/docs/odbc_connector/latest/01_odbc_rel_notes/odbc_18.00.0001.01_rel_notes/)
- [Supported platforms](https://www.enterprisedb.com/docs/odbc_connector/latest/02_requirements_overview/): The ODBC Connector is supported on the same platforms as EDB Postgres Advanced Server. To determine the platform support for the ODBC Connector, you can either refer to the platform support for EDB Postgres Advanced Server on the Platform Compatibility page on the EDB website or refer to Installing EDB ODBC Connector.
- [Installing](https://www.enterprisedb.com/docs/odbc_connector/latest/installing/): Select a link to access the applicable installation instructions:
  - [On Linux ppc64le](https://www.enterprisedb.com/docs/odbc_connector/latest/installing/linux_ppc64le/)
  - [On Linux x86](https://www.enterprisedb.com/docs/odbc_connector/latest/installing/linux_x86_64/)
  - [On Linux ARM64](https://www.enterprisedb.com/docs/odbc_connector/latest/installing/linux_arm64/)
  - [On Windows](https://www.enterprisedb.com/docs/odbc_connector/latest/installing/windows/)
  - +1 more
- [Creating a data source](https://www.enterprisedb.com/docs/odbc_connector/latest/04_creating_a_data_source/): When a client application tries to establish a connection with a server, it typically provides a data source name (DSN). The driver manager looks through the ODBC configuration database for a data source whose name matches the DSN provided by the application.
- [Connection properties](https://www.enterprisedb.com/docs/odbc_connector/latest/05_edb-odbc_connection_properties/): The following table describes the connection properties that you can specify through the dialog boxes in the graphical connection manager tools or in the odbc.ini file that defines a named data source. The columns identify the connection property (as it appears in the ODBC Administrator dialogs), the corresponding keyword (as it appears in the odbc.ini file), the default value of the property, and a description of the connection property.
- [Driver functionality](https://www.enterprisedb.com/docs/odbc_connector/latest/06_edb-odbc_driver_functionality/): You can use ODBC functions to query ODBC for specific information about the various attributes of the connection between EDB-ODBC and the server.
- [Scram compatibility](https://www.enterprisedb.com/docs/odbc_connector/latest/07_scram_compatibility/): The EDB ODBC Connector provides SCRAM-SHA-256 support for EDB Postgres Advanced Server versions 10 and later. This support is available from EDB ODBC 10.01.0000.01 release and later.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
