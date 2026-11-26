---
title: DROP TRANSFORM
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_TRANSFORM/
lastModified: 2026-10-14T08:34:33Z
---

# DROP TRANSFORM

Removes a transform.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
DROP TRANSFORM [IF EXISTS] FOR <type_name> LANGUAGE <lang_name> [CASCADE | RESTRICT]
```

<a id="section3"></a>

## Description

`DROP TRANSFORM` removes a previously defined transform.

To drop a transform, you must own the type and the language. These are the same privileges that are required to create a transform.

<a id="section4"></a>

## Parameters

### IF EXISTS

Do not throw an error if the transform does not exist. WarehousePG issues a notice in this case.

### type\_name

The name of the data type of the transform.

### lang\_name

The name of the language of the transform.

### CASCADE

Automatically drop objects that depend on the transform, and in turn all objects that depend on those objects.

### RESTRICT

Refuse to drop the transform if any objects depend on it. This is the default.

<a id="section5"></a>

## Examples

To drop the transform for type `hstore` and language `plpython3u`:

```sql
DROP TRANSFORM FOR hstore LANGUAGE plpython3u;
```

<a id="section6"></a>

## Compatibility

This form of `DROP TRANSFORM` is a WarehousePG extension. See [CREATE TRANSFORM](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_TRANSFORM/) for details.

<a id="section7"></a>

## See Also

[CREATE TRANSFORM](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_TRANSFORM/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
