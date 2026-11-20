---
title: PG_PROC
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_proc/
lastModified: 2025-11-25T20:57:39+05:30
---

# PG\_PROC

The `PG_PROC` view provides information about functions, procedures, aggregate functions, and window functions (collectively also known as routines).

In addition to the information in the [PostgreSQL pg\_proc description](https://www.postgresql.org/docs/current/catalog-pg-proc.html), EDB Postgres Advanced Server provides the following information.

| Name                | Type      | Description                                                           |
| ------------------- | --------- | --------------------------------------------------------------------- |
| proaccess           | "char"    | Determines PUBLIC/PRIVATE; used only when `pronamespace` is a package |
| proargdeclaredmodes | "char"\[] | Parameter modes; NULL if the same as `proargmodes`                    |
| prolineno           | integer   | Line number relative to the package body                              |
| promemberattrs      | text      | Object method attributes, such as final, overriding, or instantiable  |
| protype             | "char"    | Type of procedure, such as function or procedure                      |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
