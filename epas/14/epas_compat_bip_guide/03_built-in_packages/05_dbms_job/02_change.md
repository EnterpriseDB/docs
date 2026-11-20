---
title: CHANGE
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/05_dbms_job/02_change/
lastModified: 2023-02-14T16:10:29+05:30
---

# CHANGE

The `CHANGE` procedure modifies certain job attributes including the stored procedure to run, the next date/time the job runs, and how often it runs.

```text
CHANGE(<job> BINARY_INTEGER <what> VARCHAR2, <next_date> DATE,
  <interval> VARCHAR2, <instance> BINARY_INTEGER, <force> BOOLEAN)
```

## Parameters

`job`

Identifier of the job to modify.

`what`

Stored procedure name. Set this parameter to null if you want the existing value to remain unchanged.

`next_date`

Date/time to run the job next. Set this parameter to null if you want the existing value to remain unchanged.

`interval`

Date function that, when evaluated, provides the next date/time to run the job. Set this parameter to null if you want the existing value to remain unchanged.

`instance`

This argument is ignored but is included for compatibility.

`force`

This argument is ignored but is included for compatibility.

## Examples

Change the job to run next on December 13, 2007. Leave other parameters unchanged.

```text
BEGIN
    DBMS_JOB.CHANGE(104,NULL,TO_DATE('13-DEC-07','DD-MON-YY'),NULL, NULL,
    NULL);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
