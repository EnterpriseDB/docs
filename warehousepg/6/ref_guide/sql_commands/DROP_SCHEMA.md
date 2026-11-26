---
title: DROP SCHEMA
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_SCHEMA/
lastModified: 2026-10-14T08:34:33Z
---

# DROP SCHEMA

<a id="topic1"></a><a id="dg20941"></a><a id="sql_command_desc"></a>

Removes a schema.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
DROP SCHEMA [IF EXISTS] <name> [, ...] [CASCADE | RESTRICT]
```

<a id="section3">

</a>

## Description

`DROP SCHEMA` removes schemas from the database. A schema can only be dropped by its owner or a superuser. Note that the owner can drop the schema (and thereby all contained objects) even if they do not own some of the objects within the schema.

<a id="section4">

</a>

## Parameters

### IF EXISTS

Do not throw an error if the schema does not exist. A notice is issued in this case.

### name

The name of the schema to remove.

### CASCADE

Automatically drops any objects contained in the schema (tables, functions, etc.).

### RESTRICT

Refuse to drop the schema if it contains any objects. This is the default.

<a id="section5">

</a>

## Examples

Remove the schema `mystuff` from the database, along with everything it contains:

```
DROP SCHEMA mystuff CASCADE;
```

<a id="section6">

</a>

## Compatibility

`DROP SCHEMA` is fully conforming with the SQL standard, except that the standard only allows one schema to be dropped per command. Also, the `IF EXISTS` option is a WarehousePG extension.

<a id="section7">

</a>

## See Also

[CREATE SCHEMA](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_SCHEMA/), [ALTER SCHEMA](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_SCHEMA/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
