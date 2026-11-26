---
title: DROP EXTERNAL TABLE
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_EXTERNAL_TABLE/
lastModified: 2026-10-14T08:34:33Z
---

# DROP EXTERNAL TABLE

Removes an external table definition.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
DROP EXTERNAL [WEB] TABLE [IF EXISTS] <name> [CASCADE | RESTRICT]
```

<a id="section3"></a>

## Description

`DROP EXTERNAL TABLE` drops an existing external table definition from the database system. The external data sources or files are not deleted. To run this command you must be the owner of the external table.

<a id="section4"></a>

## Parameters

### WEB

Optional keyword for dropping external web tables.

### IF EXISTS

Do not throw an error if the external table does not exist. WarehousePG issues a notice in this case.

### name

The name (optionally schema-qualified) of an existing external table.

### CASCADE

Automatically drop objects that depend on the external table (such as views).

### RESTRICT

Refuse to drop the external table if any objects depend on it. This is the default.

<a id="section5"></a>

## Examples

Remove the external table named `staging` if it exists:

```
DROP EXTERNAL TABLE IF EXISTS staging;
```

<a id="section6"></a>

## Compatibility

There is no `DROP EXTERNAL TABLE` statement in the SQL standard.

<a id="section7"></a>

## See Also

[CREATE EXTERNAL TABLE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_EXTERNAL_TABLE/), [ALTER EXTERNAL TABLE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_EXTERNAL_TABLE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
