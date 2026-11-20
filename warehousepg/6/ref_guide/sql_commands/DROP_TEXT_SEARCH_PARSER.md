---
title: DROP TEXT SEARCH PARSER
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_TEXT_SEARCH_PARSER/
lastModified: 2026-10-14T08:34:33Z
---

# DROP TEXT SEARCH PARSER

<a id="topic1"></a>

<a id="desc">

</a>

<a id="section3"></a>

Remove a text search parser.

<a id="synops">

</a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
DROP TEXT SEARCH PARSER [ IF EXISTS ] <name> [ CASCADE | RESTRICT ]
```

<a id="section3">

</a>

## Description

`DROP TEXT SEARCH PARSER` drops an existing text search parser. You must be a superuser to use this command.

<a id="section4">

</a>

## Parameters

### IF EXISTS

Do not throw an error if the text search parser does not exist. A notice is issued in this case.

### name

The name (optionally schema-qualified) of an existing text search parser.

### CASCADE

Automatically drop objects that depend on the text search parser.

### RESTRICT

Refuse to drop the text search parser if any objects depend on it. This is the default.

<a id="examples">

</a>

## Examples

Remove the text search parser `my_parser`:

```
DROP TEXT SEARCH PARSER my_parser;
```

This command will not succeed if there are any existing text search configurations that use the parser. Add `CASCADE` to drop such configurations along with the parser.

<a id="section7">

</a>

## Compatibility

There is no `DROP TEXT SEARCH PARSER` statement in the SQL standard.

<a id="section8">

</a>

## See Also

[ALTER TEXT SEARCH PARSER](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_TEXT_SEARCH_PARSER/), [CREATE TEXT SEARCH PARSER](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_TEXT_SEARCH_PARSER/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
