---
title: Release notes for Query Advisor version 1.2.3
product: EDB Query Advisor
url: https://www.enterprisedb.com/docs/pg_extensions/query_advisor/rel_notes/query_advisor_1.2.3_rel_notes/
lastModified: 2026-11-05T10:57:56+05:30
---

# Release notes for Query Advisor version 1.2.3

This release of Query Advisor includes:

| Type    | Description                                                                                                                                                                                                                                                                                                      | Addresses |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Bug fix | Fixed an issue where a query longer than `query_advisor.max_workload_query_size` could overflow the workload entry in shared memory. This could happen when the query was run with `EXPLAIN (ANALYZE, BUFFERS)` and could cause shared memory corruption and a server crash. The query text copy is now bounded. |           |
| Change  | Removed support for Postgres 13, which is end of life.                                                                                                                                                                                                                                                           |           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
