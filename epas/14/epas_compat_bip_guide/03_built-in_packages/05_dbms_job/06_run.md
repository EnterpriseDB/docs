---
title: RUN
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/05_dbms_job/06_run/
lastModified: 2023-02-14T16:10:29+05:30
---

# RUN

The `RUN` procedure forces the job to run even if its state is broken.

```text
RUN(<job> BINARY_INTEGER)
```

## Parameter

`job`

Identifier of the job to run.

## Examples

Force a job to run.

```text
BEGIN
    DBMS_JOB.RUN(104);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
