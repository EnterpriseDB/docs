---
title: DISABLE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/15_dbms_scheduler/06_dbms_scheduler_disable/
lastModified: 2025-11-25T20:57:39+05:30
---

# DISABLE

<div id="dbms_scheduler_disable" class="registered_link"></div>

Use the `DISABLE` procedure to disable a program or a job. The signature of the `DISABLE` procedure is:

```sql
DISABLE(
  <name> IN VARCHAR2,
  <force> IN BOOLEAN DEFAULT FALSE,
  <commit_semantics> IN VARCHAR2 DEFAULT 'STOP_ON_FIRST_ERROR')
```

## Parameters

`name`

`name` specifies the name of the program or job that's being disabled.

`force`

`force` is accepted for compatibility and ignored.

`commit_semantics`

`commit_semantics` tells the server how to handle an error encountered while disabling a program or job. By default, `commit_semantics` is set to `STOP_ON_FIRST_ERROR`, which means to stop when an error is encountered. Any programs or jobs that were successfully disabled before the error are committed to disk.

The `TRANSACTIONAL` and `ABSORB_ERRORS` keywords are accepted for compatibility and ignored.

## Example

The following call to the `DISABLE` procedure disables a program named `update_emp`:

```sql
DBMS_SCHEDULER.DISABLE('update_emp');
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
