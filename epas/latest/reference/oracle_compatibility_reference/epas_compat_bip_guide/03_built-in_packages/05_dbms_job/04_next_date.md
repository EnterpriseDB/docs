---
title: NEXT_DATE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/05_dbms_job/04_next_date/
lastModified: 2025-11-25T20:39:04+05:30
---

# NEXT\_DATE

The `NEXT_DATE` procedure sets the date/time to run the job next.

```sql
NEXT_DATE(<job> BINARY_INTEGER, <next_date> DATE)
```

## Parameters

`job`

Identifier of the job whose next run date you want to set.

`next_date`

Date/time when you want the job run next.

## Examples

Change the job to run next on December 14, 2007:

```sql
BEGIN
    DBMS_JOB.NEXT_DATE(104, TO_DATE('14-DEC-07','DD-MON-YY'));
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
