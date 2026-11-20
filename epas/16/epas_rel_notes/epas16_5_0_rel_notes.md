---
title: EDB Postgres Advanced Server 16.5.0 release notes
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/epas_rel_notes/epas16_5_0_rel_notes/
lastModified: 2024-11-25T12:53:58Z
---

# EDB Postgres Advanced Server 16.5.0 release notes

Released: 14 Nov 2024

EDB Postgres Advanced Server 16.5.0  includes the following enhancements and bug fixes:

| Type           | Description                                                                                                                                         | Addresses                |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| Upstream merge | Merged with community PostgreSQL 16.5. See the [PostgreSQL 16.5 Release Notes](https://www.postgresql.org/docs/release/16.5/) for more information. |                          |
| Bug fix        | Fixed an issue for Auditing. With `edb_audit`, now you can audit the initial connection process or authentication messages as well.                 | #39540                   |
| Bug fix        | Fixed an issue for `EDB*Loader`. Now the `negative bitmapset member not allowed` error is resolved for partitioned tables.                          | #39562                   |
| Bug fix        | Fixed an issue for `Oracle Proc*c`and `ecpg with PROC` . Corrected the macro definition in `sqlda-proc.h` to fix the compilation errors when used.  | #40573                   |
| Bug fix        | Fixed an issue for replication. Now the login of locked account on the physical replica is not allowed.                                             |                          |
| Bug fix        | Fixed an issue for `COPY` and `EDB*Loader`. Now the server is not crashed while using dynamic partitioning in `COPY` and `EDB*Loader`.              | #38963                   |
| Bug fix        | Fixed an issue with tab completion for the object names while using in SQL statements.                                                              |                          |
| Bug fix        | Fixed an issue with `ecpg`. Now it supports `EXEC SQL INCLUDE` in Pro\*C (`-C PROC`) mode.                                                          | #41438                   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
