---
title: DROP CONVERSION
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_CONVERSION/
lastModified: 2026-10-14T08:34:33Z
---

# DROP CONVERSION

<a id="topic1"></a><a id="cq20941"></a><a id="sql_command_desc"></a>

Removes a conversion.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
DROP CONVERSION [IF EXISTS] <name> [CASCADE | RESTRICT]
```

<a id="section3">

</a>

## Description

`DROP CONVERSION` removes a previously defined conversion. To be able to drop a conversion, you must own the conversion.

<a id="section4">

</a>

## Parameters

### IF EXISTS

Do not throw an error if the conversion does not exist. A notice is issued in this case.

### name

The name of the conversion. The conversion name may be schema-qualified.

### CASCADE | RESTRICT

These keywords have no effect since there are no dependencies on conversions.

<a id="section5">

</a>

## Examples

Drop the conversion named `myname`:

```
DROP CONVERSION myname;
```

<a id="section6">

</a>

## Compatibility

There is no `DROP CONVERSION` statement in the SQL standard. The standard has `CREATE TRANSLATION` and `DROP TRANSLATION` statements that are similar to the WarehousePG `CREATE CONVERSION` and `DROP CONVERSION` statements.

<a id="section7">

</a>

## See Also

[ALTER CONVERSION](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_CONVERSION/), [CREATE CONVERSION](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_CONVERSION/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
