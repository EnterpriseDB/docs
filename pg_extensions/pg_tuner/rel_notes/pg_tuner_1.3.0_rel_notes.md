---
title: Release notes for Postgres Tuner version 1.3.0
product: EDB Postgres Tuner
url: https://www.enterprisedb.com/docs/pg_extensions/pg_tuner/rel_notes/pg_tuner_1.3.0_rel_notes/
lastModified: 2024-12-19T13:04:49-06:00
---

# Release notes for Postgres Tuner version 1.3.0

This release of Postgres Tuner includes:

| Type    | Description                                                                                                                                                                          |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Feature | Proactively adjust the `work_mem` parameter based on historical execution data.                                                                                                      |
| Feature | Added the following parameters for Postgres 14 and higher:  `edb_pg_tuner.tune_work_mem`, `edb_pg_tuner.work_mem_pool`, `edb_pg_tuner.log_min_duration`,  `edb_pg_tuner.buffer_size` |
| Feature | Added the following functions for Postgres 14 and higher:: `edb_pg_tuner_global_stats()`, `edb_pg_tuner_query_stats()`                                                               |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
