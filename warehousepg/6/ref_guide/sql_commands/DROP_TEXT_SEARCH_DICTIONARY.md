---
title: DROP TEXT SEARCH DICTIONARY
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_TEXT_SEARCH_DICTIONARY/
lastModified: 2026-10-14T08:34:33Z
---

# DROP TEXT SEARCH DICTIONARY

<a id="topic1"></a><a id="az137232"></a><a id="sql_command_desc"></a>

Removes a text search dictionary.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
DROP TEXT SEARCH DICTIONARY [ IF EXISTS ] <name> [ CASCADE | RESTRICT ]
```

<a id="section3">

</a>

## Description

`DROP TEXT SEARCH DICTIONARY` drops an existing text search dictionary. To run this command you must be the owner of the dictionary.

<a id="section4">

</a>

## Parameters

### IF EXISTS

Do not throw an error if the text search dictionary does not exist. A notice is issued in this case.

### name

The name (optionally schema-qualified) of an existing text search dictionary.

### CASCADE

Automatically drop objects that depend on the text search dictionary.

### RESTRICT

Refuse to drop the text search dictionary if any objects depend on it. This is the default.

<a id="section5">

</a>

## Examples

Remove the text search dictionary `english`:

```
DROP TEXT SEARCH DICTIONARY english;
```

This command will not succeed if there are any existing text search configurations that use the dictionary. Add `CASCADE` to drop such configurations along with the dictionary.

<a id="section6">

</a>

## Compatibility

There is no `CREATE TEXT SEARCH DICTIONARY` statement in the SQL standard.

<a id="section7">

</a>

## See Also

[ALTER TEXT SEARCH DICTIONARY](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_TEXT_SEARCH_DICTIONARY/), [CREATE TEXT SEARCH DICTIONARY](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_TEXT_SEARCH_DICTIONARY/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
