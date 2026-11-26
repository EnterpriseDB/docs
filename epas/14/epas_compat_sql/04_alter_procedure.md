---
title: ALTER PROCEDURE
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/04_alter_procedure/
lastModified: 2023-02-14T16:10:29+05:30
---

# ALTER PROCEDURE

<div id="alter_procedure" class="registered_link"></div>

## Name

`ALTER PROCEDURE` — Modify an existing procedure.

## Synopsis

```text
ALTER PROCEDURE <procedure_name> <options> [RESTRICT]
```

## Description

Use the `ALTER PROCEDURE` statement to specify that a procedure is a `SECURITY INVOKER` or `SECURITY DEFINER`.

## Parameters

`procedure_name`

The (possibly schema-qualified) name of a stored procedure.

`options` can be:

- `[EXTERNAL] SECURITY DEFINER`

  Specify `SECURITY DEFINER` to execute the procedure with the privileges of the user that created the procedure. The `EXTERNAL` keyword is accepted for compatibility but ignored.

- `[EXTERNAL] SECURITY INVOKER`

  Specify `SECURITY INVOKER` to execute the procedure with the privileges of the user that's invoking the procedure. The `EXTERNAL` keyword is accepted for compatibility but ignored.

The `RESTRICT` keyword is accepted for compatibility but ignored.

## Examples

This command specifies for the `update_balance` to execute with the privileges of the user invoking the procedure:

```text
ALTER PROCEDURE update_balance SECURITY INVOKER;
```

## See also

[CREATE PROCEDURE](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/28_create_procedure/#create_procedure), [DROP PROCEDURE](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/50_drop_procedure/#drop_procedure)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
