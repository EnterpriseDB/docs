---
title: EXEC
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/63_exec/
lastModified: 2024-11-22T12:16:04+01:00
---

# EXEC

<div id="exec" class="registered_link"></div>

## Name

`EXEC` — Execute a function.

## Synopsis

```sql
EXEC function_name ['('[<argument_list>]')']
```

## Description

`EXECUTE`

## Parameters

`procedure_name`

The (optionally schema-qualified) function name.

`argument_list`

A comma-separated list of arguments required by the function. Each member of `argument_list` corresponds to a formal argument expected by the function. Each formal argument can be an `IN` parameter, an `OUT` parameter, or an `INOUT` parameter.

## Examples

The `EXEC` statement can take one of several forms, depending on the arguments required by the function:

```sql
EXEC update_balance;
EXEC update_balance();
EXEC update_balance(1,2,3);
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
