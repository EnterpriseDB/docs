---
title: Protecting proprietary source code (EDB*Wrap)
description: Overview of the EDB*Wrap utility, which you use to protect proprietary source code and programs
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/working_with_oracle_data/proprietary_source_code/
lastModified: 2025-11-25T20:57:39+05:30
---

# Protecting proprietary source code (EDB\*Wrap)

The EDB\*Wrap utility protects proprietary source code and programs like functions, stored procedures, triggers, and packages from unauthorized scrutiny. The EDB\*Wrap program translates a plaintext file that contains SPL or PL/pgSQL source code into a file that contains the same code in a form that's nearly impossible to read. Once you have the obfuscated form of the code, you can send that code to the PostgreSQL server, and the server stores those programs in obfuscated form. While EDB\*Wrap does obscure code, table definitions are still exposed.

See [EDB\*Wrap](https://www.enterprisedb.com/docs/epas/17/epas_security_guide/03_edb_wrap/) for details about using the utility.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
