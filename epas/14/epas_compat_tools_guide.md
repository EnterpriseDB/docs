---
title: "Database Compatibility for Oracle Developers: Tools and Utilities"
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_tools_guide/
lastModified: 2023-11-30T05:51:18Z
---

# Database Compatibility for Oracle Developers: Tools and Utilities

<div id="introduction" class="registered_link"></div>

These tools and utilities allow a developer that works with Oracle utilities to work with EDB Postgres Advanced Server in a familiar environment.

These compatible tools and utilities that are supported by EDB Postgres Advanced Server:

- [EDB\*Loader](https://www.enterprisedb.com/docs/epas/14/epas_compat_tools_guide/02_edb_loader/)
- [EDB\*Wrap](https://www.enterprisedb.com/docs/epas/14/epas_compat_tools_guide/03_edb_wrap/)
- [Dynamic Runtime Instrumentation](https://www.enterprisedb.com/docs/epas/14/epas_compat_tools_guide/04_dynamic_runtime_instrumentation_tools_architecture_DRITA/)

The EDB\*Plus command line client provides a user interface to EDB Postgres Advanced Server that supports SQL\*Plus commands; EDB\*Plus allows you to:

- Query database objects
- Execute stored procedures
- Format output from SQL commands
- Execute batch scripts
- Execute OS commands
- Record output

See [EDB\*Plus](https://www.enterprisedb.com/docs/edb_plus/latest/) for detailed installation and usage information about EDB\*Plus.

- [EDB\*Loader](https://www.enterprisedb.com/docs/epas/14/epas_compat_tools_guide/02_edb_loader/): EDB\Loader is a high-performance bulk data loader that provides an interface compatible with Oracle databases for EDB Postgres Advanced Server. The EDB\Loader command line utility loads data from an input source, typically a file, into one or more tables using a subset of the parameters offered by Oracle SQL\\\*Loader.
- [EDB\*Wrap](https://www.enterprisedb.com/docs/epas/14/epas_compat_tools_guide/03_edb_wrap/): The EDB\Wrap utility protects proprietary source code and programs like functions, stored procedures, triggers, and packages from unauthorized scrutiny. The EDB\Wrap program translates a plaintext file that contains SPL or PL/pgSQL source code into a file that contains the same code in a form that's nearly impossible to read. Once you have the obfuscated form of the code, you can send that code to the PostgreSQL server, and the server stores those programs in obfuscated form. While EDB\\\*Wrap does obscure code, table definitions are still exposed.
- [Dynamic runtime instrumentation tools architecture (DRITA)](https://www.enterprisedb.com/docs/epas/14/epas_compat_tools_guide/04_dynamic_runtime_instrumentation_tools_architecture_DRITA/): The Dynamic Runtime Instrumentation Tools Architecture (DRITA) allows a DBA to query catalog views to determine the wait events that affect the performance of individual sessions or the whole system. DRITA records the number of times each event occurs as well as the time spent waiting. You can use this information to diagnose performance problems. DRITA consumes minimal system resources.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
