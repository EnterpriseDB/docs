---
title: REMOVE
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/05_dbms_job/05_remove/
lastModified: 2023-02-14T16:10:29+05:30
---

# REMOVE

The `REMOVE` proceduzre deletes the specified job from the database. You must resubmit the job using the `SUBMIT` procedure to execute it again. The stored procedure that was associated with the job isn't deleted.

```text
REMOVE(<job> BINARY_INTEGER)
```

## Parameter

`job`

Identifier of the job to remove from the database.

## Examples

Remove a job from the database:

```text
BEGIN
    DBMS_JOB.REMOVE(104);
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
