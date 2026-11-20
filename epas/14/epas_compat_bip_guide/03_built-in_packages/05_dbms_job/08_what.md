---
title: WHAT
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/05_dbms_job/08_what/
lastModified: 2023-02-14T16:10:29+05:30
---

# WHAT

The `WHAT` procedure changes the stored procedure that the job executes.

```text
WHAT(<job> BINARY_INTEGER, <what> VARCHAR2)
```

## Parameters

`job`

Identifier of the job whose stored procedure you want to change.

`what`

Name of the stored procedure to execute.

## Examples

Change the job to run the `list_emp` procedure:

```text
BEGIN
    DBMS_JOB.WHAT(104,'list_emp;');
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
