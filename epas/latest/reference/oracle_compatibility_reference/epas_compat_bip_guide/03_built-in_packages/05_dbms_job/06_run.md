---
title: RUN
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/05_dbms_job/06_run/
lastModified: 2025-11-25T20:39:04+05:30
---

# RUN

The `RUN` procedure forces the job to run even if its state is broken.

```sql
RUN(<job> BINARY_INTEGER)
```

## Parameter

`job`

Identifier of the job to run.

## Examples

Force a job to run.

```sql
BEGIN
    DBMS_JOB.RUN(104);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
