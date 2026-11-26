---
title: ALTER TEXT SEARCH TEMPLATE
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_TEXT_SEARCH_TEMPLATE/
lastModified: 2026-10-14T08:34:33Z
---

# ALTER TEXT SEARCH TEMPLATE

<a id="description"></a>

Changes the definition of a text search template.

<a id="synopsis"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
ALTER TEXT SEARCH TEMPLATE <name> RENAME TO <new_name>
ALTER TEXT SEARCH TEMPLATE <name> SET SCHEMA <new_schema>
```

<a id="section3"></a>

## Description

`ALTER TEXT SEARCH TEMPLATE` changes the definition of a text search parser. Currently, the only supported functionality is to change the template's name.

You must be a superuser to use `ALTER TEXT SEARCH TEMPLATE`.

<a id="section4"></a>

## Parameters

### name

The name (optionally schema-qualified) of an existing text search template.

### new\_name

The new name of the text search template.

### new\_schema

The new schema for the text search template.

<a id="section7"></a>

## Compatibility

There is no `ALTER TEXT SEARCH TEMPLATE` statement in the SQL standard.

<a id="section8"></a>

## See Also

[CREATE TEXT SEARCH TEMPLATE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_TEXT_SEARCH_TEMPLATE/), [DROP TEXT SEARCH TEMPLATE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_TEXT_SEARCH_TEMPLATE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
