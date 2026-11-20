---
title: ALTER PROCEDURE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/04_alter_procedure/
lastModified: 2025-11-25T20:57:39+05:30
---

# ALTER PROCEDURE

<div id="alter_procedure" class="registered_link"></div>

## Name

`ALTER PROCEDURE` — Modify an existing procedure.

## Synopsis

```sql
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

```sql
ALTER PROCEDURE update_balance SECURITY INVOKER;
```

## See also

[CREATE PROCEDURE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/28_create_procedure/#create_procedure), [DROP PROCEDURE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/50_drop_procedure/#drop_procedure)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
