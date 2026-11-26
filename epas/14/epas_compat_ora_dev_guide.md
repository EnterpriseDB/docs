---
title: Database Compatibility for Oracle Developers
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/
lastModified: 2023-11-30T05:51:18Z
---

# Database Compatibility for Oracle Developers

<div id="introduction" class="registered_link"></div>

Database compatibility for Oracle means that an application runs in an Oracle environment as well as in the EDB Postgres Advanced Server environment with minimal or no changes to the application code. Developing an application that's compatible with Oracle databases in the EDB Postgres Advanced Server requires special attention to the features used when constructing the application. For example, developing a compatible application means choosing compatible:

- System and built-in functions for use in SQL statements and procedural logic
- Stored procedure language (SPL) when creating database server-side application logic for stored procedures, functions, triggers, and packages
- Data types that are compatible with Oracle databases
- SQL statements that are compatible with Oracle SQL
- System catalog views that are compatible with Oracle’s data dictionary

For detailed information about the compatible SQL syntax, data types, and views, see [SQL reference](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/).

The compatibility offered by the procedures and functions that are part of the Built-in packages is documented in [Built-in packages](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/).

For information about using the compatible tools and utilities (EDB\*Plus, EDB\*Loader, DRITA, and EDB\*Wrap) that are included with an EDB Postgres Advanced Server installation, see [Tools, utilities, and components](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/09_tools_and_utilities/).

For applications written using the Oracle Call Interface (OCI), EDB’s Open Client Library (OCL) provides interoperability with these applications. For detailed information about using the Open Client Library, see [EDB OCL Connector](https://www.enterprisedb.com/docs/ocl_connector/latest/).

- [Configuration parameters compatible with Oracle databases](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/01_introduction/): EDB Postgres Advanced Server supports developing and running applications compatible with PostgreSQL and Oracle. You can alter some system behaviors to act in a more PostgreSQL- or in a more Oracle-compliant manner. You control these behaviors by using configuration parameters.
- [About the examples](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/02_about_the_examples_used_in_this_guide/): The examples are use the PSQL program. The prompt that normally appears when using PSQL is omitted in these examples to provide extra clarity for the point being demonstrated.
- [SQL tutorial](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/02_sql_tutorial/): EDB Postgres Advanced Server is a relational database management system (RDBMS). That means it's a system for managing data stored in relations. A relation is essentially a mathematical term for a table. The notion of storing data in tables is so commonplace today that it might seem obvious, but there are a number of other ways of organizing databases. Files and directories on Unix-like operating systems form an example of a hierarchical database. A more modern development is the object-oriented database.
- [Advanced concepts](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/03_advanced_concepts/): Advanced SQL features can simplify management and prevent loss or corruption of your data.
- [Profile management](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/04_profile_management/): EDB Postgres Advanced Server allows a database superuser to create named profiles. A profile is a set of password attributes that allow you to easily manage a group of roles that share comparable authentication requirements. Each profile defines rules for password management that augment password and md5 authentication. The rules in a profile can:
- [Optimizer hints](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/05_optimizer_hints/): When you invoke a DELETE, INSERT, SELECT, or UPDATE command, the server generates a set of execution plans. After analyzing those execution plans, the server selects a plan that generally returns the result set in the least amount of time. The server's choice of plan depends on several factors:
- [dblink\_ora](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/06_dblink_ora/): dblink\_ora enables you to issue arbitrary queries to a remote Oracle server. It provides an OCI-based database link that allows you to SELECT, INSERT, UPDATE, or DELETE data stored on an Oracle system from EDB Postgres Advanced Server.
- [Open Client Library](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/07_open_client_library/): The Open Client Library provides application interoperability with the Oracle Call Interface. An application that was formerly “locked in” can now work with either an EDB Postgres Advanced Server or an Oracle database with minimal to no changes to the application code. The EDB implementation of the Open Client Library is written in C.
- [Oracle catalog views](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/08_oracle_catalog_views/): The Oracle catalog views provide information about database objects in a manner compatible with the Oracle data dictionary views. Information about the supported views is available in Database Compatibility for Oracle Developers Catalog Views.
- [Tools and utilities](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/09_tools_and_utilities/): Compatible tools and utility programs allow you to work with EDB Postgres Advanced Server in a familiar environment. The tools supported by EDB Postgres Advanced Server include:
- [ECPGPlus](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/10_ecpgplus/): EDB has enhanced ECPG (the PostgreSQL precompiler) to create ECPGPlus. ECPGPlus allows you to include embedded SQL commands in C applications. When you use ECPGPlus to compile an application that contains embedded SQL commands, the SQL code is syntax checked and translated into C.
- [System catalog tables](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/11_system_catalog_tables/): The system catalog tables contain definitions of database objects that are available to EDB Postgres Advanced Server. The layout of the system tables is subject to change. If you're writing an application that depends on information stored in the system tables, it's prudent to use an existing catalog view or create a catalog view to isolate the application from changes to the system table.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
