---
title: User API
product: EDB Job Scheduler
url: https://www.enterprisedb.com/docs/pg_extensions/edb_job_scheduler/user_api/
lastModified: 2024-02-23T16:16:14Z
---

# User API

The EDB Job Scheduler extension offers these API functions:

- `sys.reload_all_jobs` — Reloads all the unscheduled jobs from the current database.

  > **Note**
  >
  > This function requests only the scheduler process. So, if the local storage of the scheduler limit meets the maximum set by `edb_job_scheduler.max_jobs_per_database`, loading fails.

- `sys.dump_schedule()` — Displays the current job schedule from the scheduler's local memory. The scheduler's local memory dumps all the jobs that weren't executed yet into the server log in JSON format.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
