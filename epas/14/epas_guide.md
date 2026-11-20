---
title: EDB Postgres Advanced Server
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_guide/
lastModified: 2023-02-23T19:24:44Z
---

# EDB Postgres Advanced Server

EDB Postgres Advanced Server adds extended functionality to the open-source PostgreSQL database. The extended functionality supports database administration, enhanced SQL capabilities, database and application security, performance monitoring and analysis, and application development utilities, including:

- Enhanced compatibility features.
- Database administration. These features and tools are helpful to the database administrator:
  - Index Advisor helps to determine the additional indexes needed on tables to improve application performance.
  - SQL Profiler locates and diagnoses poorly running SQL queries in applications.
  - `pgsnmpd` is an SNMP agent that returns hierarchical monitoring information regarding the current state of EDB Postgres Advanced Server.
- EDB Resource Manager. This feature helps you to control system resource use by EDB Postgres Advanced Server processes.
  - Resource groups help you to create and maintain the groups on which you can define resource limits.
  - CPU usage throttling is a method for controlling CPU usage by EDB Postgres Advanced Server processes.
  - Dirty buffer throttling is a method for controlling the dirty rate of shared buffers by EDB Postgres Advanced Server processes.
- The libpq C library, the C application programming interface (API) language for EDB Postgres Advanced Server.
- The PL Debugger, a graphically oriented debugging tool for PL/pgSQL.
- Performance analysis and tuning. Various tools are available for analyzing and improving application and database server performance:
  - Dynatune provides a quick and easy means for configuring EDB Postgres Advanced Server depending on the type of application use.
  - EDB wait states provides a way to capture wait events and other data for performance diagnosis.
- The EDB clone schema feature lets you copy a schema and its database objects in a single database or from one database to another database.
- Enhanced SQL and other features provide additional flexibility and convenience.
- Additional system catalog tables are available for EDB Postgres Advanced Server-specific database objects.
- EDB Postgres Advanced Server exception descriptions include the predefined exceptions, SQLstate values, associated redwood error code, and description of the exceptions.
- EDB Postgres Advanced Server keywords are the words that EDB Postgres Advanced Server recognizes as keywords.

For information about the features that are shared by EDB Postgres Advanced Server and PostgreSQL, see the [PostgreSQL core documentation](https://www.postgresql.org/docs/current/index.html).

- [Introduction](https://www.enterprisedb.com/docs/epas/14/epas_guide/01_introduction/): See the release notes for the features added in EDB Postgres Advanced Server 14.
- [Enhanced compatibility features](https://www.enterprisedb.com/docs/epas/14/epas_guide/02_enhanced_compatibility_features/): EDB Postgres Advanced Server includes extended functionality that provides compatibility for syntax supported by Oracle applications. See Database compatibility for Oracle developers for detailed information about the compatibility features supported by EDB Postgres Advanced Server.
- [Database administration](https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/): Adminstration features help you to manage and administer EDB Postgres Advanced Server databases.
- [EDB Resource Manager](https://www.enterprisedb.com/docs/epas/14/epas_guide/10_edb_resource_manager/): EDB Resource Manager is an EDB Postgres Advanced Server feature that lets you control the use of operating system resources used by EDB Postgres Advanced Server processes.
- [libpq C library](https://www.enterprisedb.com/docs/epas/14/epas_guide/11_libpq_c_library/): libpq is the C application programmer’s interface to EDB Postgres Advanced Server. libpq is a set of library functions that allow client programs to pass queries to the EDB Postgres Advanced Server and to receive the results of these queries.
- [Debugger](https://www.enterprisedb.com/docs/epas/14/epas_guide/12_debugger/): The debugger gives developers and DBAs the ability to test and debug server-side programs using a graphical, dynamic environment. The types of programs that you can debug are SPL stored procedures, functions, triggers, and packages as well as PL/pgSQL functions and triggers.
- [Performance analysis and tuning](https://www.enterprisedb.com/docs/epas/14/epas_guide/13_performance_analysis_and_tuning/): EDB Postgres Advanced Server provides tools for analyzing performance and tuning.
- [EDB clone schema](https://www.enterprisedb.com/docs/epas/14/epas_guide/14_edb_clone_schema/): EDB Clone Schema is an extension module for EDB Postgres Advanced Server that allows you to copy a schema and its database objects from a local or remote database (the source database) to a receiving database (the target database).
- [Enhanced SQL and other miscellaneous features](https://www.enterprisedb.com/docs/epas/14/epas_guide/15_enhanced_sql_and_other_misc_features/): EDB Postgres Advanced Server includes enhanced SQL functionality and other features that add flexibility and convenience.
- [System catalog tables](https://www.enterprisedb.com/docs/epas/14/epas_guide/16_system_catalog_tables/): The following system catalog tables contain definitions of database objects. The layout of the system tables is subject to change. If you're writing an application that depends on information stored in the system tables, we recommend using an existing catalog view or creating a catalog view to isolate the application from changes to the system table.
- [EDB Postgres Advanced Server exceptions](https://www.enterprisedb.com/docs/epas/14/epas_guide/17_advanced_server_keywords/): The following table lists the predefined exceptions, the SQLstate values, associated redwood error code, and descriptions of the exceptions.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
