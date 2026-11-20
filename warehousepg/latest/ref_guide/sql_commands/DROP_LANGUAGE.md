---
title: DROP LANGUAGE
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_LANGUAGE/
lastModified: 2026-10-14T08:34:33Z
---

# DROP LANGUAGE

Removes a procedural language.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
DROP [PROCEDURAL] LANGUAGE [IF EXISTS] <name> [CASCADE | RESTRICT]
```

<a id="section3"></a>

## Description

`DROP LANGUAGE` removes the definition of the previously registered procedural language. You must be a superuser or owner of the language to drop a language.

<a id="section4"></a>

## Parameters

### PROCEDURAL

Optional keyword - has no effect.

### IF EXISTS

Do not throw an error if the language does not exist. A notice is issued in this case.

### name

The name of an existing procedural language. For backward compatibility, the name may be enclosed by single quotes.

### CASCADE

Automatically drop objects that depend on the language (such as functions written in that language), and in turn all objects that depend on those objects.

### RESTRICT

Refuse to drop the language if any objects depend on it. This is the default.

<a id="section5"></a>

## Examples

Remove the procedural language `plsample`:

```
DROP LANGUAGE plsample;
```

<a id="section6"></a>

## Compatibility

There is no `DROP LANGUAGE` statement in the SQL standard.

<a id="section7"></a>

## See Also

[ALTER LANGUAGE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_LANGUAGE/), [CREATE LANGUAGE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_LANGUAGE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
