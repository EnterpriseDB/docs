---
title: ECPGPlus
description: How to use ECPGPlus to include embedded SQL commands in C applications
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/tools_utilities_and_components/application_developer_tools/10_ecpgplus/
lastModified: 2024-11-22T12:16:04+01:00
---

# ECPGPlus

<div id="ecpgplus" class="registered_link"></div>

EDB has enhanced ECPG (the PostgreSQL precompiler) to create ECPGPlus. ECPGPlus allows you to include embedded SQL commands in C applications. When you use ECPGPlus to compile an application that contains embedded SQL commands, the SQL code is syntax checked and translated into C.

ECPGPlus supports Pro\*C-compatible syntax in C programs when connected to an EDB Postgres Advanced Server database. ECPGPlus supports:

- Oracle Dynamic SQL – Method 4 (ODS-M4)
- Pro\*C-compatible anonymous blocks
- A `CALL` statement compatible with Oracle databases

As part of ECPGPlus' Pro\*C compatibility, you don't need to include the `BEGIN DECLARE SECTION` and `END DECLARE SECTION` directives.

See [ECPGPlus overview](https://www.enterprisedb.com/docs/epas/16/application_programming/ecpgplus_guide/02_overview/) for details about installing and configuring the utility.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
