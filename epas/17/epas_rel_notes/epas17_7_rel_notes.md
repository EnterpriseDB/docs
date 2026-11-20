---
title: EDB Postgres Advanced Server 17.7.0 release notes
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_7_rel_notes/
lastModified: 2026-01-06T11:54:19+05:30
---

# EDB Postgres Advanced Server 17.7.0 release notes

Released: 13 Nov 2025

EDB Postgres Advanced Server 17.7.0 includes the following enhancements and bug fixes:

> **Note: Deprecation**
>
> With the release of EDB Postgres Advanced Server 17, the DRITA is being deprecated and will not be included in EDB Postgres Advanced Server 18. This decision follows the introduction of [EDB’s PWR](https://www.enterprisedb.com/docs/pwr/latest/) and [`edb_wait_states`](https://www.enterprisedb.com/docs/pg_extensions/wait_states/) extensions, which offer improved diagnostic capabilities compared to DRITA. These new extensions provide a diagnostic experience more closely aligned with Oracle’s AWR reports, making DRITA obsolete.

> **Note**
>
> The `pgAgent` and `adminpack` packages are end of life in EDB Postgres Advanced Server 17 and later.

| Type           | Description                                                                                                                                                  | Addresses      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| Upstream merge | Merged with community PostgreSQL 17.7. See the [PostgreSQL 17.7 Release Notes](https://www.postgresql.org/docs/release/17.7/) for more information.          |                |
| Bug fix        | Fixed an issue with pg\_dumpall where dependent roles could be dumped before their resource groups, which caused restoration errors.                         | #51160         |
| Bug fix        | Fixed an issue in ECPG that could lead to invalid pointer dereferencing when performing Oracle-style dynamic SQL fetches.                                    | #50148         |
| Bug fix        | Fixed an issue preventing COPY TO from correctly omitting generated columns on tables with an enabled data redaction policy.                                 | #44853         |
| Bug fix        | Fixed an issue that caused CALL statements to fail when invoking functions returning a TABLE type.                                                           | #49217         |
| Bug fix        | Fixed an issue causing the drop operation for the dbms\_job extension to fail as a result of internal dependency conflicts.                                  |                |
| Bug fix        | Fixed an issue where enabling Transparent Data Encryption (TDE) caused a server startup crash on Windows when the pg\_stat\_statements extension was in use. | #52110         |
| Bug fix        | Fixed an issue that caused edb\_dblink\_oci to miscalculate the parameter count by excluding certain remotely pushable query clauses.                        | #51510, #53250 |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
