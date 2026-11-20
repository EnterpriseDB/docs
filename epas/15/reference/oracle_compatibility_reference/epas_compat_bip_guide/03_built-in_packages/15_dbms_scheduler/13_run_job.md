---
title: RUN_JOB
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/15_dbms_scheduler/13_run_job/
lastModified: 2023-11-09T17:35:38+05:30
---

# RUN\_JOB

Use the `RUN_JOB` procedure to execute a job immediately. The signature of the `RUN_JOB` procedure is:

```sql
RUN_JOB(
  <job_name> IN VARCHAR2,
  <use_current_session> IN BOOLEAN DEFAULT TRUE
```

## Parameters

`job_name`

`job_name` specifies the name of the job to execute.

`use_current_session`

By default, the job executes in the current session. If specified, `use_current_session` must be set to `TRUE`. If `use_current_session` is set to `FALSE`, EDB Postgres Advanced Server returns an error.

## Example

The following call to `RUN_JOB` executes a job named `update_log`:

```sql
DBMS_SCHEDULER.RUN_JOB('update_log', TRUE);
```

Passing a value of `TRUE` as the second argument instructs the server to invoke the job in the current session.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
