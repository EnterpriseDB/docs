---
title: "Database Compatibility for Oracle Developers: Built-in Package"
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/
lastModified: 2023-02-14T16:10:29+05:30
---

# Database Compatibility for Oracle Developers: Built-in Package

Database compatibility for Oracle means that an application runs in an Oracle environment as well as in the EDB Postgres Advanced Server environment with minimal or no changes to the application code. The features that follow are related to the package support provided by EDB Postgres Advanced Server.

- [Packages](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/02_packages/): A package is a named collection of functions, procedures, variables, cursors, user-defined record types, and records that are referenced using a common qualifier
- [Built-in packages](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/): Built-in packages are provided with EDB Postgres Advanced Server. For certain packages, non-superusers must be explicitly granted the EXECUTE privilege on the package before using any of the package’s functions or procedures. For most of the built-in packages, EXECUTE privilege is granted to PUBLIC by default.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
