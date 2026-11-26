---
title: EDB Postgres Extended Server 15.8 release notes
product: EDB Postgres Extended Server
version: "15"
url: https://www.enterprisedb.com/docs/pge/15/release_notes/rel_notes15.8/
lastModified: 2024-08-19T11:03:10+01:00
---

# EDB Postgres Extended Server 15.8 release notes

Released: 8 Aug 2024

New features, enhancements, bug fixes, and other changes in EDB Postgres Extended Server 15.8 include:

| Type           | Description                                                                                                                                                                                                                                                                                                     | Ticket  |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Upstream merge | Merged with community PostgreSQL 15.8. Includes a fix for [CVE-2024-7348](https://www.postgresql.org/support/security/CVE-2024-7348/) (Prevent unauthorized code execution during pg\_dump) - See the [PostgreSQL 15 Release Notes](https://www.postgresql.org/docs/15/release-15-8.html) for more information. |         |
| Bug fix        | Added cleanup for incomplete transactions in reorder buffer after a crash.                                                                                                                                                                                                                                      | RT99636 |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
