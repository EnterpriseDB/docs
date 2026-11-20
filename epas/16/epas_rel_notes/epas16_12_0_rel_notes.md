---
title: EDB Postgres Advanced Server 16.12.0 release notes
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/epas_rel_notes/epas16_12_0_rel_notes/
lastModified: 2026-02-12T12:06:24+05:30
---

# EDB Postgres Advanced Server 16.12.0 release notes

Released: 12 Feb 2026

EDB Postgres Advanced Server 16.12.0 includes the following enhancements and bug fixes:

| Type           | Description                                                                                                                                                                                                                                    | Addresses  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Upstream merge | Merged with community PostgreSQL 16.12. See the [PostgreSQL 16.12 Release Notes](https://www.postgresql.org/docs/release/16.12/) for more information.                                                                                         |            |
| Bug fix        | Fixed an issue where memory was allocated in an inappropriate context during parallel execution, leading to rare crashes when the system released data still in use by active workers; memory is now correctly scoped to a long-lived context. | #52519     |
| Bug fix        | Fixed an issue with stack overflow in `edb_partition` due to circular references during partition creation.                                                                                                                                    |            |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
