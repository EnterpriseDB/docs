---
title: EDB Postgres Advanced Server 14.21.0 release notes
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_rel_notes/epas14_21_0_rel_notes/
lastModified: 2026-02-12T12:06:24+05:30
---

# EDB Postgres Advanced Server 14.21.0 release notes

Released: 12 Feb 2026

EDB Postgres Advanced Server 14.21.0 includes the following enhancements and bug fixes:

| Type           | Description                                                                                                                                                                                                                                    | Addresses  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Upstream merge | Merged with community PostgreSQL 14.21. See the [PostgreSQL 14.21 Release Notes](https://www.postgresql.org/docs/release/14.21/) for more information.                                                                                         |            |
| Bug fix        | Fixed an issue where memory was allocated in an inappropriate context during parallel execution, leading to rare crashes when the system released data still in use by active workers; memory is now correctly scoped to a long-lived context. | #52519     |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
