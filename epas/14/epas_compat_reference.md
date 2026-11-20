---
title: "Database Compatibility for Oracle Developers: Reference"
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_reference/
lastModified: 2023-02-14T16:10:29+05:30
---

# Database Compatibility for Oracle Developers: Reference

<div id="introduction" class="registered_link"></div>

Database compatibility for Oracle means that an application runs in an Oracle environment as well as in the EDB Postgres Advanced Server environment with minimal or no changes to the application code.

Developing an application that's compatible with Oracle databases in EDB Postgres Advanced Server requires special attention to the features you're using. For example, developing a compatible application means selecting:

- Data types to define the application’s database tables that are compatible with Oracle databases
- SQL statements that are compatible with Oracle SQL
- System and built-in functions for use in SQL statements and procedural logic that are compatible with Oracle databases
- Stored procedure language (SPL) to create database server-side application logic for stored procedures, functions, triggers, and packages
- System catalog views that are compatible with Oracle’s data dictionary

* [The SQL language](https://www.enterprisedb.com/docs/epas/14/epas_compat_reference/02_the_sql_language/): A subset of the EDB Postgres Advanced Server SQL language is compatible with Oracle databases. These SQL syntaxes, data types, and functions work in both EDB Postgres Advanced Server and Oracle.
* [System catalog tables](https://www.enterprisedb.com/docs/epas/14/epas_compat_reference/03_system_catalog_tables/): The following system catalog tables contain definitions of database objects. The layout of the system tables is subject to change. If you're writing an application that depends on information stored in the system tables, use an existing catalog view or create a catalog view to isolate the application from changes to the system table.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
