---
title: ENABLE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/15_dbms_scheduler/11_dbms_scheduler_enable/
lastModified: 2025-11-25T20:57:39+05:30
---

# ENABLE

<div id="dbms_scheduler_enable" class="registered_link"></div>

Use the `ENABLE` procedure to enable a disabled program or job.

The signature of the `ENABLE` procedure is:

```sql
ENABLE(
  <name> IN VARCHAR2,
  <commit_semantics> IN VARCHAR2 DEFAULT 'STOP_ON_FIRST_ERROR')
```

## Parameters

`name`

`name` specifies the name of the program or job that's being enabled.

`commit_semantics`

`commit_semantics` tells the server how to handle an error encountered while enabling a program or job. By default, `commit_semantics` is set to `STOP_ON_FIRST_ERROR`, tellin the server to stop when it encounters an error.

The `TRANSACTIONAL` and `ABSORB_ERRORS` keywords are accepted for compatibility and ignored.

## Example

The following call to `DBMS_SCHEDULER.ENABLE` enables the `update_emp` program:

```sql
DBMS_SCHEDULER.ENABLE('update_emp');
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
