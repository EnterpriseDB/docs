---
title: Release notes for Wait States version 1.5.2
product: EDB Wait States
url: https://www.enterprisedb.com/docs/pg_extensions/wait_states/rel_notes/wait_states_1.5.2_rel_notes/
lastModified: 2025-12-16T17:23:49+05:30
---

# Release notes for Wait States version 1.5.2

Release date: 12 Dec 2025

This release of Wait States includes:

| Type        | Description                                                                                             | Addresses |
| ----------- | ------------------------------------------------------------------------------------------------------- | --------- |
| Enhancement | Added support for EDB Postgres Advanced Server, EDB Postgres Extended Server and PostgreSQL version 18. |           |
| Bug fix     | Added support for new query types (`RTE_GROUP`, `RTE_RESULT`) to prevent query normalization errors.    |           |
| Bug fix     | Streamlined MaxBackends management using upstream `shmem_request_hook` for better compatibility.        |           |
| Bug fix     | Improved log file handling. Logs are now automatically reinitialized if unlinked by the backend.        |           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
