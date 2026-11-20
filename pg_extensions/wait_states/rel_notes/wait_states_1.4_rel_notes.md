---
title: Release notes for Wait States version 1.4
product: EDB Wait States
url: https://www.enterprisedb.com/docs/pg_extensions/wait_states/rel_notes/wait_states_1.4_rel_notes/
lastModified: 2025-02-13T13:45:28+01:00
---

# Release notes for Wait States version 1.4

Release date: 22 Nov 2024

This release of Wait States includes:

| Type    | Description                                                                                                                                                                                  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bug Fix | Improved the output of `edb_wait_states_sql_statements()` function by skipping the queries with 0 wait time or 0 CPU time from the result. Also, fixed the duplicate counts for wait events. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
