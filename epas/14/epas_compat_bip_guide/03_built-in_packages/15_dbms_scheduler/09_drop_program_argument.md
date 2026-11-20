---
title: DROP_PROGRAM_ARGUMENT
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/15_dbms_scheduler/09_drop_program_argument/
lastModified: 2023-02-14T16:10:29+05:30
---

# DROP\_PROGRAM\_ARGUMENT

Use the `DROP_PROGRAM_ARGUMENT` procedure to drop a program argument. The `DROP_PROGRAM_ARGUMENT` procedure comes in two forms. The first form uses an argument position to specify the argument to drop:

```text
DROP_PROGRAM_ARGUMENT(
  <program_name> IN VARCHAR2,
  <argument_position> IN PLS_INTEGER)
```

The second form takes the argument name:

```text
DROP_PROGRAM_ARGUMENT(
  <program_name> IN VARCHAR2,
  <argument_name> IN VARCHAR2)
```

## Parameters

`program_name`

`program_name` specifies the name of the program that's being modified.

`argument_position`

`argument_position` specifies the position of the argument that's being dropped.

`argument_name`

`argument_name` specifies the name of the argument that's being dropped.

## Examples

The following call to `DROP_PROGRAM_ARGUMENT` drops the first argument in the `update_emp` program:

```text
DBMS_SCHEDULER.DROP_PROGRAM_ARGUMENT('update_emp', 1);
```

The following call to `DROP_PROGRAM_ARGUMENT` drops an argument named `emp_name`:

```text
DBMS_SCHEDULER.DROP_PROGRAM_ARGUMENT(update_emp', 'emp_name');
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
