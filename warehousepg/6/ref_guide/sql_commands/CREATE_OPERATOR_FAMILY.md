---
title: CREATE OPERATOR FAMILY
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_OPERATOR_FAMILY/
lastModified: 2026-10-14T08:34:33Z
---

# CREATE OPERATOR FAMILY

<a id="topic1"></a><a id="bx20941"></a><a id="sql_command_desc"></a>

Defines a new operator family.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
CREATE OPERATOR FAMILY <name>  USING <index_method>  
```

<a id="section3">

</a>

## Description

`CREATE OPERATOR FAMILY` creates a new operator family. An operator family defines a collection of related operator classes, and perhaps some additional operators and support functions that are compatible with these operator classes but not essential for the functioning of any individual index. (Operators and functions that are essential to indexes should be grouped within the relevant operator class, rather than being "loose" in the operator family. Typically, single-data-type operators are bound to operator classes, while cross-data-type operators can be loose in an operator family containing operator classes for both data types.)

The new operator family is initially empty. It should be populated by issuing subsequent `CREATE OPERATOR CLASS` commands to add contained operator classes, and optionally `ALTER OPERATOR FAMILY` commands to add "loose" operators and their corresponding support functions.

If a schema name is given then the operator family is created in the specified schema. Otherwise it is created in the current schema. Two operator families in the same schema can have the same name only if they are for different index methods.

The user who defines an operator family becomes its owner. Presently, the creating user must be a superuser. (This restriction is made because an erroneous operator family definition could confuse or even crash the server.)

<a id="section4">

</a>

## Parameters

### name

The (optionally schema-qualified) name of the operator family to be defined. The name can be schema-qualified.

### index\_method

The name of the index method this operator family is for.

<a id="section7">

</a>

## Compatibility

`CREATE OPERATOR FAMILY` is a WarehousePG extension. There is no `CREATE OPERATOR FAMILY` statement in the SQL standard.

<a id="section8">

</a>

## See Also

[ALTER OPERATOR FAMILY](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_OPERATOR_FAMILY/), [DROP OPERATOR FAMILY](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_OPERATOR_FAMILY/), [CREATE FUNCTION](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_FUNCTION/), [ALTER OPERATOR CLASS](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_OPERATOR_CLASS/), [CREATE OPERATOR CLASS](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_OPERATOR_CLASS/), [DROP OPERATOR CLASS](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_OPERATOR_CLASS/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
