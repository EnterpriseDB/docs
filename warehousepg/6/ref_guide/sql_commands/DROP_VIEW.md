---
title: DROP VIEW
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_VIEW/
lastModified: 2026-10-14T08:34:33Z
---

# DROP VIEW

<a id="topic1"></a><a id="dn20941"></a><a id="sql_command_desc"></a>

Removes a view.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
DROP VIEW [IF EXISTS] <name> [, ...] [CASCADE | RESTRICT]
```

<a id="section3">

</a>

## Description

`DROP VIEW` will remove an existing view. Only the owner of a view can remove it.

<a id="section4">

</a>

## Parameters

### IF EXISTS

Do not throw an error if the view does not exist. A notice is issued in this case.

### name

The name (optionally schema-qualified) of the view to remove.

### CASCADE

Automatically drop objects that depend on the view (such as other views).

### RESTRICT

Refuse to drop the view if any objects depend on it. This is the default.

<a id="section5">

</a>

## Examples

Remove the view `topten`:

```
DROP VIEW topten;
```

<a id="section6">

</a>

## Compatibility

`DROP VIEW` is fully conforming with the SQL standard, except that the standard only allows one view to be dropped per command. Also, the `IF EXISTS` option is a WarehousePG extension.

<a id="section7">

</a>

## See Also

[CREATE VIEW](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_VIEW/), [ALTER VIEW](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_VIEW/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
