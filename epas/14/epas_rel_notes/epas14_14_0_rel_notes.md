---
title: EDB Postgres Advanced Server 14.14.0 release notes
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_rel_notes/epas14_14_0_rel_notes/
lastModified: 2024-11-25T12:53:57Z
---

# EDB Postgres Advanced Server 14.14.0 release notes

Released: 14 Nov 2024

EDB Postgres Advanced Server 14.14.0  includes the following enhancements and bug fixes:

| Type           | Description                                                                                                                                            | Addresses                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| Upstream merge | Merged with community PostgreSQL 14.14. See the [PostgreSQL 14.14 Release Notes](https://www.postgresql.org/docs/release/14.14/) for more information. |                          |
| Bug fix        | Fixed an issue for Auditing. With `edb_audit`, now you can audit the initial connection process or authentication messages as well.                    | #39540                   |
| Bug fix        | Fixed an issue for EDB\*Loader. Now the `negative bitmapset member not allowed` error is resolved for partitioned tables.                              | #39562                   |
| Bug fix        | Fixed an issue for `Oracle Proc*c`and `ecpg with PROC` . Corrected the macro definition in `sqlda-proc.h` to fix the compilation errors when used.     | #40573                   |
| Bug fix        | Fixed an issue for replication. Now the login of locked account on the physical replica is not allowed.                                                |                          |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
