---
title: ECPGPlus
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/ecpgplus_guide/
lastModified: 2023-02-14T16:10:29+05:30
---

# ECPGPlus

EDB enhanced ECPG (the PostgreSQL precompiler) to create ECPGPlus. ECPGPlus allows you to include Pro\*C-compatible embedded SQL commands in C applications when connected to an EDB Postgres Advanced Server database. When you use ECPGPlus to compile an application, the SQL code syntax is checked and translated into C.

ECPGPlus supports:

- Oracle Dynamic SQL – Method 4 (ODS-M4)
- Pro\*C-compatible anonymous blocks
- A `CALL` statement compatible with Oracle databases

As part of ECPGPlus's Pro\*C compatibility, you don't need to include the `BEGIN DECLARE SECTION` and `END DECLARE SECTION` directives.

## PostgreSQL compatibility

While most ECPGPlus statements work with community PostgreSQL, the `CALL` statement and the `EXECUTE…END EXEC` statement work only when the client application is connected to EDB Postgres Advanced Server.

- [ECPGPlus overview](https://www.enterprisedb.com/docs/epas/14/ecpgplus_guide/02_overview/): EDB enhanced ECPG (the PostgreSQL precompiler) to create ECPGPlus. ECPGPlus is a Pro\\\*C-compatible version of the PostgreSQL C precompiler. ECPGPlus translates a program that combines C code and embedded SQL statements into an equivalent C program. As it performs the translation, ECPGPlus verifies that the syntax of each SQL construct is correct.
- [Using embedded SQL](https://www.enterprisedb.com/docs/epas/14/ecpgplus_guide/03_using_embedded_sql/): Example: A simple query
- [Using descriptors](https://www.enterprisedb.com/docs/epas/14/ecpgplus_guide/04_using_descriptors/): Dynamic SQL allows a client application to execute SQL statements that are composed at runtime. This ability is useful when you don't know the content or form for a statement when you're writing a client application. ECPGPlus doesn't allow you to use a host variable in place of an identifier (such as a table name, column name, or index name). Instead, use dynamic SQL statements to build a string that includes the information, and then execute that string. The string is passed between the client and the server in the form of a descriptor. A descriptor is a data structure that contains both the data and the information about the shape of the data.
- [Building and executing dynamic SQL statements](https://www.enterprisedb.com/docs/epas/14/ecpgplus_guide/05_building_executing_dynamic_sql_statements/): The following examples show four techniques for building and executing dynamic SQL statements. Each example shows processing a different combination of statement and input types:
- [Error handling](https://www.enterprisedb.com/docs/epas/14/ecpgplus_guide/06_error_handling/): ECPGPlus provides two methods to detect and handle errors in embedded SQL code. A client application can:
- [Reference](https://www.enterprisedb.com/docs/epas/14/ecpgplus_guide/07_reference/): ECPGPlus has these language elements:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
