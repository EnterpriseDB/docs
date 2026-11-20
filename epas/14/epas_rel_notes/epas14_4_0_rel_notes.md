---
title: Version 14.4.0
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_rel_notes/epas14_4_0_rel_notes/
lastModified: 2023-02-14T16:10:29+05:30
---

# Version 14.4.0

EDB Postgres Advanced Server 14.4.0 includes the following bug fixes:

| Type           | Description                                                                                                                          | ID      | Category |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------- | -------- |
| Upstream merge | Merged with community PostgreSQL 14.4. See the community [Release Notes](https://www.postgresql.org/docs/release/14.4/) for details. |         |          |
| Bug fix        | Fix server crash while executing the function which returns TABLE and requires casting on attributes. \[Support Ticket: #81924]      | DB-1778 |          |
| Bug fix        | Fix \dn command query. \[Support Ticket: #83263]                                                                                     | DB-1777 | psql     |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
