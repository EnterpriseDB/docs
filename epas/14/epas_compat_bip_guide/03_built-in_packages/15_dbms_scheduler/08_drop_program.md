---
title: DROP_PROGRAM
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/15_dbms_scheduler/08_drop_program/
lastModified: 2023-02-14T16:10:29+05:30
---

# DROP\_PROGRAM

The `DROP_PROGRAM` procedure drops a program. The signature of the `DROP_PROGRAM` procedure is:

```text
DROP_PROGRAM(
  <program_name> IN VARCHAR2,
  <force> IN BOOLEAN DEFAULT FALSE)
```

## Parameters

`program_name`

`program_name` specifies the name of the program that's being dropped.

`force`

`force` is a Boolean value that tells the server how to handle programs with dependent jobs.

- Specify `FALSE` to return an error if the program is referenced by a job.

- Specify `TRUE` to disable any jobs that reference the program before dropping the program.

  The default value is `FALSE`.

## Example

The following call to `DROP_PROGRAM` drops a job named `update_emp`:

```text
DBMS_SCHEDULER.DROP_PROGRAM('update_emp');
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
