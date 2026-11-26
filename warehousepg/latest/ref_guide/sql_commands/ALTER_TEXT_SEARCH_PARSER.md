---
title: ALTER TEXT SEARCH PARSER
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_TEXT_SEARCH_PARSER/
lastModified: 2026-10-14T08:34:33Z
---

# ALTER TEXT SEARCH PARSER

<a id="description"></a>

Changes the definition of a text search parser.

<a id="synopsis"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
ALTER TEXT SEARCH PARSER <name> RENAME TO <new_name>
ALTER TEXT SEARCH PARSER <name> SET SCHEMA <new_schema>
```

<a id="section3"></a>

## Description

`ALTER TEXT SEARCH PARSER` changes the definition of a text search parser. Currently, the only supported functionality is to change the parser's name.

You must be a superuser to use `ALTER TEXT SEARCH PARSER`.

<a id="section4"></a>

## Parameters

### name

The name (optionally schema-qualified) of an existing text search parser.

### new\_name

The new name of the text search parser.

### new\_schema

The new schema for the text search parser.

<a id="section7"></a>

## Compatibility

There is no `ALTER TEXT SEARCH PARSER` statement in the SQL standard.

<a id="section8"></a>

## See Also

[CREATE TEXT SEARCH PARSER](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_TEXT_SEARCH_PARSER/), [DROP TEXT SEARCH PARSER](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_TEXT_SEARCH_PARSER/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
