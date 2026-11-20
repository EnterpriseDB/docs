---
title: DROP ROUTINE
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_ROUTINE/
lastModified: 2026-09-25T15:14:11+01:00
---

# DROP ROUTINE

Removes a routine.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
DROP ROUTINE [IF EXISTS] name ( [ [argmode] [argname] argtype [, ...] ] )
    [CASCADE | RESTRICT]
```

<a id="section3"></a>

## Description

`DROP ROUTINE` removes the definition of an existing routine, which can be an aggregate function, a normal function, or a procedure. Refer to [DROP AGGREGATE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_AGGREGATE/), [DROP FUNCTION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_FUNCTION/), and [DROP PROCEDURE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_PROCEDURE/) for the description of the parameters, more examples, and further details.

<a id="section5"></a>

## Examples

To drop the routine `foo` for type `integer`:

```
DROP ROUTINE foo(integer);
```

This command will work independent of whether `foo` is an aggregate, function, or procedure.

<a id="section6"></a>

## Compatibility

This command conforms to the SQL standard, with these WarehousePG extensions:

- The standard only allows one routine to be dropped per command.

- The `IF EXISTS` option.

- The ability to specify argument modes and names.

- Aggregate functions are an extension.

<a id="section7"></a>

## See Also

[DROP AGGREGATE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_AGGREGATE/), [DROP FUNCTION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_FUNCTION/), [DROP PROCEDURE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_PROCEDURE/), [ALTER ROUTINE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_ROUTINE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
