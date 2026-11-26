---
title: ALL_JOBS
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/11_all_jobs/
lastModified: 2026-08-21T16:10:41+05:30
---

# ALL\_JOBS

<div id="all_jobs" class="registered_link"></div>

The `ALL_JOBS` view provides information about the jobs that the current user can access.

| Name          | Type                       | Description                                                                          |
| ------------- | -------------------------- | ------------------------------------------------------------------------------------ |
| `job`         | `INTEGER`                  | The identifier of the job (Job ID).                                                  |
| `log_user`    | `TEXT`                     | Name of the user that submitted the job.                                             |
| `priv_user`   | `TEXT`                     | Same as `log_user`. Included only for compatibility.                                 |
| `schema_user` | `TEXT`                     | Name of the schema used to parse the job.                                            |
| `last_date`   | `TIMESTAMP WITH TIME ZONE` | Last date that this job executed successfully.                                       |
| `last_sec`    | `TEXT`                     | Same as `last_date`.                                                                 |
| `this_date`   | `TIMESTAMP WITH TIME ZONE` | Date that the job began executing.                                                   |
| `this_sec`    | `TEXT`                     | Same as `this_date`.                                                                 |
| `next_date`   | `TIMESTAMP WITH TIME ZONE` | Next date for this job to execute.                                                   |
| `next_sec`    | `TEXT`                     | Same as `next_date`.                                                                 |
| `total_time`  | `INTERVAL`                 | Execution time of this job, in seconds.                                              |
| `broken`      | `TEXT`                     | If `Y`, no attempt is be made to run this job. If `N`, this job attempts to run.     |
| `interval`    | `TEXT`                     | Determines how often the job repeats.                                                |
| `failures`    | `BIGINT`                   | Number of times that the job failed to complete since its last successful execution. |
| `what`        | `TEXT`                     | Job definition (PL/SQL code block) that runs when the job executes.                  |
| `nls_env`     | `CHARACTER VARYING(4000)`  | Always `NULL`. Provided only for compatibility.                                      |
| `misc_env`    | `BYTEA`                    | Always `NULL`. Provided only for compatibility.                                      |
| `instance`    | `NUMERIC`                  | Always `0`. Provided only for compatibility.                                         |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
