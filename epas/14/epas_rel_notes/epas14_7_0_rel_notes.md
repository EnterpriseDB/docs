---
title: Version 14.7.0
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_rel_notes/epas14_7_0_rel_notes/
lastModified: 2023-02-15T09:43:46-05:00
---

# Version 14.7.0

EDB Postgres Advanced Server 14.7.0 includes the following enhancements and bug fixes:

| Type           | Description                                                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Upstream merge | Merged with community PostgreSQL 14.7.0. See the community [Release Notes](https://www.postgresql.org/docs/release/14.7/) for details. |
| Bug fix        | Fix possible server crash with autonomous transaction and temp table. \[Support tickets: #89602 and #82695]                            |
| Bug fix        | Allow the password expiry feature to work with SCRAM authentication. \[Support ticket: #89340]                                         |
| Bug fix        | Fix Bulk API for update on an invisible tuple. \[Support ticket: #86900]                                                               |
| Bug fix        | Fix command tag for the partition objects. \[Support ticket: #86598]                                                                   |
| Bug fix        | Fix dynamic partitioning to avoid duplicate partitions in high concurrency. \[Support ticket: #89194]                                  |
| Bug fix        | `edb_audit`: Add `leader_pid` and `query_id` to XML logs.                                                                              |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
