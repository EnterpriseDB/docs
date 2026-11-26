---
title: Database compatibility for Oracle developers
description: Provides a high-level view of Oracle compatibility features
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/fundamentals/epas_fundamentals/epas_compat_ora_dev_guide/
lastModified: 2024-11-22T12:16:04+01:00
---

# Database compatibility for Oracle developers

<div id="introduction" class="registered_link"></div>

EDB Postgres Advanced Server makes Postgres look, feel, and operate more like Oracle, so when you migrate, there is less code to rewrite, and you can be up and running quickly. The Oracle compatibility features allow you to run many applications written for Oracle in EDB Postgres Advanced Server with minimal to no changes.

EDB Postgres Advanced Server provides Oracle compatible:

- [Stored procedure language (SPL)](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/) when creating database server-side application logic for stored procedures, functions, triggers, and packages
- [Data types that are compatible with Oracle databases](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/02_data_types/)
- [SQL statements](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/01_sql_syntax/) that are compatible with Oracle SQL
- [System and built-in functions](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/) for use in SQL statements and procedural logic
- [System catalog views](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/)  that are compatible with Oracle’s data dictionary
- [Additional compatibility with Oracle MERGE](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/65a_merge/).

> **Tip: Further reading**
>
> - Compatible SQL syntax, data types, and views in [SQL reference](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/).
> - Compatibility offered by the procedures and functions that are part of the built-in packages in [Built-in packages](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/).
> - Compatible tools and utilities (EDB\*Plus, EDB\*Loader, DRITA, and EDB\*Wrap) that are included with an EDB Postgres Advanced Server installation in [Tools, utilities, and components](https://www.enterprisedb.com/docs/epas/16/tools_utilities_and_components/database_administration_tools/09_tools_and_utilities/).
> - For applications written using the Oracle Call Interface (OCI), EDB’s Open Client Library (OCL) provides interoperability with these applications. See [EDB OCL Connector](https://www.enterprisedb.com/docs/ocl_connector/latest/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
