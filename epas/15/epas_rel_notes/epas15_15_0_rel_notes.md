---
title: EDB Postgres Advanced Server 15.15.0 release notes
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/epas_rel_notes/epas15_15_0_rel_notes/
lastModified: 2025-11-13T14:10:40+01:00
---

# EDB Postgres Advanced Server 15.15.0 release notes

Released: 13 Nov 2025

EDB Postgres Advanced Server 15.15.0 includes the following enhancements and bug fixes:

| Type           | Description                                                                                                                                            | Addresses  |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| Upstream merge | Merged with community PostgreSQL 15.15. See the [PostgreSQL 15.15 Release Notes](https://www.postgresql.org/docs/release/15.15/) for more information. |            |
| Bug fix        | Fixed an issue with pg\_dumpall where dependent roles could be dumped before their resource groups, which caused restoration errors.                   | #51160     |
| Bug fix        | Fixed an issue in ECPG that could lead to invalid pointer dereferencing when performing Oracle-style dynamic SQL fetches.                              | #50148     |
| Bug fix        | Fixed an issue preventing COPY TO from correctly omitting generated columns on tables with an enabled data redaction policy.                           | #44853     |
| Bug fix        | Fixed an issue that caused CALL statements to fail when invoking functions returning a TABLE type.                                                     | #49217     |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
