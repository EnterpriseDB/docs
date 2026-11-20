---
title: DROP TYPE
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_TYPE/
lastModified: 2026-10-14T08:34:33Z
---

# DROP TYPE

Removes a data type.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
DROP TYPE [IF EXISTS] <name> [, ...] [CASCADE | RESTRICT]
```

<a id="section3"></a>

## Description

`DROP TYPE` will remove a user-defined data type. Only the owner of a type can remove it.

<a id="section4"></a>

## Parameters

### IF EXISTS

Do not throw an error if the type does not exist. WarehousePG issues a notice in this case.

### name

The name (optionally schema-qualified) of the data type to remove.

### CASCADE

Automatically drop objects that depend on the type (such as table columns, functions, operators), and in turn all objects that depend on those objects.

### RESTRICT

Refuse to drop the type if any objects depend on it. This is the default.

<a id="section5"></a>

## Examples

Remove the data type `box`;

```
DROP TYPE box;
```

<a id="section6"></a>

## Compatibility

This command is similar to the corresponding command in the SQL standard, apart from the `IF EXISTS` option, which is a WarehousePG extension. But note that much of the `CREATE TYPE` command and the data type extension mechanisms in WarehousePG differ from the SQL standard.

<a id="section7"></a>

## See Also

[ALTER TYPE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_TYPE/), [CREATE TYPE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_TYPE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
