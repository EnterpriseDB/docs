---
title: DROP STATISTICS
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_STATISTICS/
lastModified: 2026-10-14T08:34:33Z
---

# DROP STATISTICS

Removes extended statistics.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
DROP STATISTICS [ IF EXISTS ] <name> [, ...] [ CASCADE | RESTRICT ]
```

<a id="section3"></a>

## Description

`DROP STATISTICS` removes statistics object(s) from the database. Only the statistics object's owner, the schema owner, or a superuser can drop a statistics object.

<a id="section4"></a>

## Parameters

`IF EXISTS`
Do not throw an error if the statistics object does not exist. WarehousePG issues a notice in this case.

### name

The name (optionally schema-qualified) of the statistics object to drop.

### CASCADE | RESTRICT

These key words have no effect, since there are no dependencies on statistics.

<a id="section6"></a>

## Examples

Destroy two statistics objects in different schemas, without failing if they do not exist:

```
DROP STATISTICS IF EXISTS
    accounting.users_uid_creation,
    public.grants_user_role;
```

<a id="section7"></a>

## Compatibility

There is no `DROP STATISTICS` command in the SQL standard.

<a id="section8"></a>

## See Also

[ALTER STATISTICS](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_STATISTICS/), [CREATE STATISTICS](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_STATISTICS/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
