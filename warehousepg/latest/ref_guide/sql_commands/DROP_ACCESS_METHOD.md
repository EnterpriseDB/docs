---
title: DROP ACCESS METHOD
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_ACCESS_METHOD/
lastModified: 2026-10-14T08:34:33Z
---

# DROP ACCESS METHOD

Removes an access method

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
DROP ACCESS METHOD [IF EXISTS] <name> [CASCADE | RESTRICT]
```

<a id="section3"></a>

## Description

`DROP ACCESS METHOD` removes an existing access method. Only superusers can drop access methods.

<a id="section4"></a>

## Parameters

### IF EXISTS

Do not throw an error if the access method does not exist. WarehousePG issues a notice in this case.

### name

The name of an existing access method.

### CASCADE

Automatically drop objects that depend on the access method (such as operator classes, operator families, and indexes), and in turn all objects that depend on those objects.

### RESTRICT

Refuse to drop the access method if any objects depend on it. This is the default.

<a id="section5"></a>

## Examples

Drop the access method `heptree`;

```sql
DROP ACCESS METHOD heptree;
```

<a id="section6"></a>

## Compatibility

`DROP ACCESS METHOD` is a WarehousePG extension.

<a id="section7"></a>

## See Also

[CREATE ACCESS METHOD](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_ACCESS_METHOD/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
