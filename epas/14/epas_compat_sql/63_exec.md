---
title: EXEC
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/63_exec/
lastModified: 2023-02-14T16:10:29+05:30
---

# EXEC

<div id="exec" class="registered_link"></div>

## Name

`EXEC` — Execute a function.

## Synopsis

```text
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

```text
EXEC update_balance;
EXEC update_balance();
EXEC update_balance(1,2,3);
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
