---
title: Release notes for Query Advisor version 1.2.4
product: EDB Query Advisor
url: https://www.enterprisedb.com/docs/pg_extensions/query_advisor/rel_notes/query_advisor_1.2.4_rel_notes/
lastModified: 2026-11-05T10:57:56+05:30
---

# Release notes for Query Advisor version 1.2.4

This release of Query Advisor includes:

| Type        | Description                                                                                                                                                                                                                                                        | Addresses |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| Enhancement | Added support for PostgreSQL, EDB Postgres Advanced Server, and EDB Postgres Extended Server version 19.                                                                                                                                                           |           |
| Bug fix     | Fixed an issue where a truncated workload query text wasn't always null-terminated, which could crash the server when the text was read later, especially under concurrent or high-load workloads. This completes the fix for the shared memory overflow in 1.2.3. |           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
