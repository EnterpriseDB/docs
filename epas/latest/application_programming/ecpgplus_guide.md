---
title: Including embedded SQL commands
description: How to use ECPGPlus to complie applications
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/application_programming/ecpgplus_guide/
lastModified: 2025-11-25T20:39:04+05:30
---

# Including embedded SQL commands

EDB enhanced ECPG (the PostgreSQL precompiler) to create ECPGPlus. ECPGPlus allows you to include Pro\*C-compatible embedded SQL commands in C applications when connected to an EDB Postgres Advanced Server database. When you use ECPGPlus to compile an application, the SQL code syntax is checked and translated into C.

ECPGPlus supports:

- Oracle Dynamic SQL – Method 4 (ODS-M4)
- Pro\*C-compatible anonymous blocks
- A `CALL` statement compatible with Oracle databases

As part of ECPGPlus's Pro\*C compatibility, you don't need to include the `BEGIN DECLARE SECTION` and `END DECLARE SECTION` directives.

While most ECPGPlus statements work with community PostgreSQL, the `CALL` statement and the `EXECUTE…END EXEC` statement work only when the client application is connected to EDB Postgres Advanced Server.

- [ECPGPlus overview](https://www.enterprisedb.com/docs/epas/latest/application_programming/ecpgplus_guide/02_overview/): Provides an overview of the ECPGPlus precompiler capabilities
- [Installing and configuring ECPGPlus](https://www.enterprisedb.com/docs/epas/latest/application_programming/ecpgplus_guide/installing_ecpgplus/): Provides an overview of the ECPGPlus precompiler capabilities
- [Using embedded SQL](https://www.enterprisedb.com/docs/epas/latest/application_programming/ecpgplus_guide/03_using_embedded_sql/): Provides examples for making a query and for using a cursor to process a result set
- [Using descriptors](https://www.enterprisedb.com/docs/epas/latest/application_programming/ecpgplus_guide/04_using_descriptors/): Describes the process for executing SQL statements that are composed at runtime
- [Building and executing dynamic SQL statements](https://www.enterprisedb.com/docs/epas/latest/application_programming/ecpgplus_guide/05_building_executing_dynamic_sql_statements/): Outlines four techniques for building and executing dynamic SQL statements
- [Error handling](https://www.enterprisedb.com/docs/epas/latest/application_programming/ecpgplus_guide/06_error_handling/): Outlines the methods for detecting and handling errors in embedded SQL code

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
