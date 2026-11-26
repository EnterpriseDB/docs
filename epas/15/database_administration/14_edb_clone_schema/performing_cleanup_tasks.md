---
title: Performing cleanup tasks
description: Describes how to cleanup log files
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/database_administration/14_edb_clone_schema/performing_cleanup_tasks/
lastModified: 2023-11-09T17:35:38+05:30
---

# Performing cleanup tasks

<div id="remove_log_file_and_job" class="registered_link"></div>

The `remove_log_file_and_job` function performs cleanup tasks by removing the log files created by the schema cloning functions and the jobs created by the non-blocking functions.

```sql
remove_log_file_and_job (
  { <log_file> TEXT |
    <job_id> INTEGER |
    <log_file> TEXT, <job_id> INTEGER
  }
)
```

You can specify values for either or both of the two parameters when invoking the `remove_log_file_and_job` function:

- If you specify only `log_file`, then the function removes only the log file.
- If you specify only `job_id`, then the function removes only the job.
- If you specify both, then the function removes only the log file and the job.

## Parameters

`log_file`

Name of the log file to remove.

`job_id`

Job ID of the job to remove.

## Example

This example removes only the log file, given the log file name:

```sql
edb=# SELECT edb_util.remove_log_file_and_job ('clone_edb_edbcopy');
```

```output title="Output"
 remove_log_file_and_job
-------------------------
 t
(1 row)
```

This example removes only the job, given the job ID:

```sql
edb=# SELECT edb_util.remove_log_file_and_job (3);
```

```output title="Output"
 remove_log_file_and_job
-------------------------
 t
(1 row)
```

This example removes the log file and the job, given both values:

```sql
tgtdb=# SELECT edb_util.remove_log_file_and_job ('clone_rmt_src_tgt',2);
```

```output title="Output"
 remove_log_file_and_job
-------------------------
 t
(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
