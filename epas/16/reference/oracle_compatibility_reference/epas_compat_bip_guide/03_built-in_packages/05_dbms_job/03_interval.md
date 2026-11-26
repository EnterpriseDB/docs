---
title: INTERVAL
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/05_dbms_job/03_interval/
lastModified: 2024-11-22T12:16:04+01:00
---

# INTERVAL

The `INTERVAL` procedure sets how often to run a job.

```sql
INTERVAL(<job> BINARY_INTEGER, <interval> VARCHAR2)
```

## Parameters

`job`

Identifier of the job to modify.

`interval`

Date function that, when evaluated, provides the next date/time to run the job. If `interval` is `NULL` and the job is complete, the job is removed from the queue.

## Examples

Change the job to run once a week:

```sql
BEGIN
    DBMS_JOB.INTERVAL(104,'SYSDATE + 7');
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
