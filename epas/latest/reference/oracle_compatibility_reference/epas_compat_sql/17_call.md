---
title: CALL
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/17_call/
lastModified: 2025-11-25T20:39:04+05:30
---

# CALL

<div id="call" class="registered_link"></div>

## Name

`CALL` — Invoke a procedure.

## Synopsis

```sql
CALL <procedure_name> '('[<argument_list>]')'
```

## Description

Use the `CALL` statement to invoke a procedure. To use the `CALL` statement, you must have `EXECUTE` privileges on the procedure that the `CALL` statement invokes.

## Parameters

`procedure_name`

The (optionally schema-qualified) procedure name.

`argument_list`

Specifies a comma-separated list of arguments required by the procedure. Each member of `argument_list` corresponds to a formal argument expected by the procedure. Each formal argument can be an `IN` parameter, an `OUT` parameter, or an `INOUT` parameter.

!!!! Note
You must specify an `OUT` parameter in the `CALL` statement when calling a package function. The `OUT` parameter acts as an `INOUT` parameter during package overloading.

## Examples

The `CALL` statement can take several forms, depending on the arguments required by the procedure:

```sql
CALL update_balance();
CALL update_balance(1,2,3);
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
