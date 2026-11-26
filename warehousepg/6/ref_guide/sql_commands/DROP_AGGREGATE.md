---
title: DROP AGGREGATE
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_AGGREGATE/
lastModified: 2026-10-14T08:34:33Z
---

# DROP AGGREGATE

<a id="topic1"></a><a id="co20941"></a><a id="sql_command_desc"></a>

Removes an aggregate function.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
DROP AGGREGATE [IF EXISTS] <name> ( <aggregate_signature> ) [CASCADE | RESTRICT]
```

where aggregate\_signature is:

```
* |
[ <argmode> ] [ <argname> ] <argtype> [ , ... ] |
[ [ <argmode> ] [ <argname> ] <argtype> [ , ... ] ] ORDER BY [ <argmode> ] [ <argname> ] <argtype> [ , ... ]
```

<a id="section3">

</a>

## Description

`DROP AGGREGATE` will delete an existing aggregate function. To run this command the current user must be the owner of the aggregate function.

<a id="section4">

</a>

## Parameters

### IF EXISTS

Do not throw an error if the aggregate does not exist. A notice is issued in this case.

### name

The name (optionally schema-qualified) of an existing aggregate function.

### argmode

The mode of an argument: `IN` or `VARIADIC`. If omitted, the default is `IN`.

### argname

The name of an argument. Note that `DROP AGGREGATE` does not actually pay any attention to argument names, since only the argument data types are needed to determine the aggregate function's identity.

### argtype

An input data type on which the aggregate function operates. To reference a zero-argument aggregate function, write `*` in place of the list of input data types. To reference an ordered-set aggregate function, write `ORDER BY` between the direct and aggregated argument specifications.

### CASCADE

Automatically drop objects that depend on the aggregate function.

### RESTRICT

Refuse to drop the aggregate function if any objects depend on it. This is the default.

<a id="notes">

</a>

## Notes

Alternative syntaxes for referencing ordered-set aggregates are described under `ALTER AGGREGATE`.

<a id="section5">

</a>

## Examples

To remove the aggregate function `myavg` for type `integer`:

```
DROP AGGREGATE myavg(integer);
```

To remove the hypothetical-set aggregate function `myrank`, which takes an arbitrary list of ordering columns and a matching list of direct arguments:

```
DROP AGGREGATE myrank(VARIADIC "any" ORDER BY VARIADIC "any");
```

<a id="section6">

</a>

## Compatibility

There is no `DROP AGGREGATE` statement in the SQL standard.

<a id="section7">

</a>

## See Also

[ALTER AGGREGATE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_AGGREGATE/), [CREATE AGGREGATE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_AGGREGATE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
