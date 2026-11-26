---
title: WHAT
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/05_dbms_job/08_what/
lastModified: 2024-11-22T12:16:04+01:00
---

# WHAT

The `WHAT` procedure changes the stored procedure that the job executes.

```sql
WHAT(<job> BINARY_INTEGER, <what> VARCHAR2)
```

## Parameters

`job`

Identifier of the job whose stored procedure you want to change.

`what`

Name of the stored procedure to execute.

## Examples

Change the job to run the `list_emp` procedure:

```sql
BEGIN
    DBMS_JOB.WHAT(104,'list_emp;');
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
