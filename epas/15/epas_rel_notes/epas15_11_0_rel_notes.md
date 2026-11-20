---
title: EDB Postgres Advanced Server 15.11.0 release notes
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/epas_rel_notes/epas15_11_0_rel_notes/
lastModified: 2025-02-13T15:55:26+01:00
---

# EDB Postgres Advanced Server 15.11.0 release notes

Released: 13 Feb 2025

EDB Postgres Advanced Server 15.11.0  includes the following enhancements and bug fixes:

| Type           | Description                                                                                                                                                                                                                                                         | Addresses                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| Upstream merge | Merged with community PostgreSQL 15.11. This release includes a fix for [CVE-2025-1094](https://www.postgresql.org/support/security/CVE-2025-1094/). See the [PostgreSQL 15.11 Release Notes](https://www.postgresql.org/docs/release/15.11/) for more information. |                          |
| Bug fix        | Fixed an issue for ECPG. ECPGPlus is now aligned with behavior of `Oracle Pro*C` by supporting `DESCRIBE BIND VARIABLE` and prevents crashes and random failures.                                                                                                   | #42790                   |
| Bug fix        | Fixed an issue for ECPG. ECPGPlus now prevents the parser anomalies especially during the usage of "/".                                                                                                                                                             | #37400                   |
| Bug fix        | Fixed an issue for ECPG. Now it supports the global declarations of unknown C types in `Pro*C` mode.                                                                                                                                                                | #37049                   |
| Bug fix        | Fixed an issue for `edb_audit`. It prevents the creation of an empty log file when the audit destination is set to `syslog`.                                                                                                                                        | #39883                   |
| Bug fix        | Fixed occasional crashes for ECPG. Added the correct `DESCRIBE SELECT LIST` grammar rule to retrieve the `SELECT LIST` descriptor properly which prevents potential unknown issues and occasional crashes.                                                          | #41977                   |
| Bug fix        | Fixed an issue for `pg_dump`. Now the memory size for the `ROWID` hidden column is fixed to avoid `OOM` errors.                                                                                                                                                     | #43579                   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
