---
title: DROP DOMAIN
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_DOMAIN/
lastModified: 2026-10-14T08:34:33Z
---

# DROP DOMAIN

<a id="topic1"></a><a id="cs20941"></a><a id="sql_command_desc"></a>

Removes a domain.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
DROP DOMAIN [IF EXISTS] <name> [, ...]  [CASCADE | RESTRICT]
```

<a id="section3">

</a>

## Description

`DROP DOMAIN` removes a previously defined domain. You must be the owner of a domain to drop it.

<a id="section4">

</a>

## Parameters

### IF EXISTS

Do not throw an error if the domain does not exist. A notice is issued in this case.

### name

The name (optionally schema-qualified) of an existing domain.

### CASCADE

Automatically drop objects that depend on the domain (such as table columns).

### RESTRICT

Refuse to drop the domain if any objects depend on it. This is the default.

<a id="section5">

</a>

## Examples

Drop the domain named `zipcode`:

```
DROP DOMAIN zipcode;
```

<a id="section6">

</a>

## Compatibility

This command conforms to the SQL standard, except for the `IF EXISTS` option, which is a WarehousePG extension.

<a id="section7">

</a>

## See Also

[ALTER DOMAIN](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_DOMAIN/), [CREATE DOMAIN](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_DOMAIN/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
