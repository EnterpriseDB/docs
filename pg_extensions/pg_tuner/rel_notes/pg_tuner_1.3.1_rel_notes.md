---
title: Release notes for Postgres Tuner version 1.3.1
product: EDB Postgres Tuner
url: https://www.enterprisedb.com/docs/pg_extensions/pg_tuner/rel_notes/pg_tuner_1.3.1_rel_notes/
lastModified: 2025-12-18T09:30:51+01:00
---

# Release notes for Postgres Tuner version 1.3.1

This release of Postgres Tuner includes:

| Type        | Description                                                                                                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | The application now prioritizes reading the container memory limit from `edb_pg_tuner.container_memory_limit_file_path`. If unavailable, it defaults to reading total system memory from `/proc/meminfo`. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
