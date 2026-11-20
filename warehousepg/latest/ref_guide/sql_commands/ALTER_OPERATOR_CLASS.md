---
title: ALTER OPERATOR CLASS
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_OPERATOR_CLASS/
lastModified: 2026-10-14T08:34:33Z
---

# ALTER OPERATOR CLASS

Changes the definition of an operator class.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
ALTER OPERATOR CLASS <name> USING <index_method> RENAME TO <new_name>

ALTER OPERATOR CLASS <name> USING <index_method> OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }

ALTER OPERATOR CLASS <name> USING <index_method> SET SCHEMA <new_schema>
```

<a id="section3"></a>

## Description

`ALTER OPERATOR CLASS` changes the definition of an operator class.

You must own the operator class to use `ALTER OPERATOR CLASS`. To alter the owner, you must also be a direct or indirect member of the new owning role, and that role must have `CREATE` privilege on the operator class's schema. (These restrictions enforce that altering the owner does not do anything you could not do by dropping and recreating the operator class. However, a superuser can alter ownership of any operator class anyway.)

<a id="section4"></a>

## Parameters

### name

The name (optionally schema-qualified) of an existing operator class.

### index\_method

The name of the index method this operator class is for.

### new\_name

The new name of the operator class.

### new\_owner

The new owner of the operator class

### new\_schema

The new schema for the operator class.

<a id="section5"></a>

## Compatibility

There is no `ALTER OPERATOR CLASS` statement in the SQL standard.

<a id="section6"></a>

## See Also

[CREATE OPERATOR CLASS](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_OPERATOR_CLASS/), [DROP OPERATOR CLASS](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_OPERATOR_CLASS/), [ALTER OPERATOR FAMILY](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_OPERATOR_FAMILY/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
