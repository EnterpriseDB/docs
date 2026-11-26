---
title: EDB Postgres Extended Server 16.4 release notes
product: EDB Postgres Extended Server
version: "16"
url: https://www.enterprisedb.com/docs/pge/16/release_notes/rel_notes16.4/
lastModified: 2024-08-19T11:03:10+01:00
---

# EDB Postgres Extended Server 16.4 release notes

Released: 8 Aug 2024

EDB Postgres Extended Server 16.4 includes the following enhancements and bug fixes:

| Type           | Description                                                                                                                                                                                                                                                                                                       | Ticket  |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Upstream merge | Merged with community PostgreSQL 16.4. Includes a fix for [CVE-2024-7348](https://www.postgresql.org/support/security/CVE-2024-7348/) (Prevent unauthorized code execution during pg\_dump) - see the [PostgreSQL 16.4 Release Notes](https://www.postgresql.org/docs/16/release-16-4.html) for more information. |         |
| Bug fix        | Added cleanup for incomplete transactions in reorder buffer after a crash.                                                                                                                                                                                                                                        | RT99636 |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
