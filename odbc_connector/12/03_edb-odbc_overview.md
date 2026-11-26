---
title: EDB-ODBC Overview
product: ODBC Connector
version: "12"
url: https://www.enterprisedb.com/docs/odbc_connector/12/03_edb-odbc_overview/
lastModified: 2022-03-01T06:18:52-05:00
---

# EDB-ODBC Overview

EDB ODBC is an interface that allows an ODBC compliant client application to connect to an Advanced Server database. The EDB-ODBC connector allows an application that was designed to work with other databases to run on Advanced Server; EDB ODBC provides a way for the client application to establish a connection, send queries and retrieve results from Advanced Server.

While EDB ODBC provides a level of application portability, it should be noted that the portability is limited; EDB ODBC provides a connection, but does not guarantee command compatibility. Commands that are acceptable in another database, may not work in Advanced Server.

The major components in a typical ODBC application are:

- The client application - written in a language that has a binding for ODBC
- The ODBC Administrator - handles named connections for Windows or Linux
- The database specific ODBC driver - EDB ODBC
- The ODBC compliant server - EDB Postgres Advanced Server

Client applications can be written in any language that has a binding for ODBC; C, MS-Access, and C++ are just a few.

- [Installing EDB-ODBC](https://www.enterprisedb.com/docs/odbc_connector/12/03_edb-odbc_overview/01_installing_edb-odbc/): The EDB ODBC Connector is distributed and installed with the EDB Postgres Advanced Server graphical or RPM installer.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
