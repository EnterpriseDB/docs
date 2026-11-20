---
title: ALTER TEXT SEARCH CONFIGURATION
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_TEXT_SEARCH_CONFIGURATION/
lastModified: 2026-10-14T08:34:33Z
---

# ALTER TEXT SEARCH CONFIGURATION

Changes the definition of a text search configuration.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
ALTER TEXT SEARCH CONFIGURATION <name>
    ADD MAPPING FOR <token_type> [, ... ] WITH <dictionary_name> [, ... ]
ALTER TEXT SEARCH CONFIGURATION <name>
    ALTER MAPPING FOR <token_type> [, ... ] WITH <dictionary_name> [, ... ]
ALTER TEXT SEARCH CONFIGURATION <name>
    ALTER MAPPING REPLACE <old_dictionary> WITH <new_dictionary>
ALTER TEXT SEARCH CONFIGURATION <name>
    ALTER MAPPING FOR <token_type> [, ... ] REPLACE <old_dictionary> WITH <new_dictionary>
ALTER TEXT SEARCH CONFIGURATION <name>
    DROP MAPPING [ IF EXISTS ] FOR <token_type> [, ... ]
ALTER TEXT SEARCH CONFIGURATION <name> RENAME TO <new_name>
ALTER TEXT SEARCH CONFIGURATION <name> OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }
ALTER TEXT SEARCH CONFIGURATION <name> SET SCHEMA <new_schema>
```

<a id="section3"></a>

## Description

`ALTER TEXT SEARCH CONFIGURATION` changes the definition of a text search configuration. You can modify its mappings from token types to dictionaries, or change the configuration's name or owner.

You must be the owner of the configuration to use `ALTER TEXT SEARCH CONFIGURATION`.

<a id="section4"></a>

## Parameters

### name

The name (optionally schema-qualified) of an existing text search configuration.

### token\_type

The name of a token type that is emitted by the configuration's parser.

### dictionary\_name

The name of a text search dictionary to be consulted for the specified token type(s). If multiple dictionaries are listed, they are consulted in the specified order.

### old\_dictionary

The name of a text search dictionary to be replaced in the mapping.

### new\_dictionary

The name of a text search dictionary to be substituted for old\_dictionary.

### new\_name

The new name of the text search configuration.

### new\_owner

The new owner of the text search configuration.

### new\_schema

The new schema for the text search configuration.

The `ADD MAPPING FOR` form installs a list of dictionaries to be consulted for the specified token type(s); it is an error if there is already a mapping for any of the token types. The `ALTER MAPPING FOR` form does the same, but first removing any existing mapping for those token types. The `ALTER MAPPING REPLACE` forms substitute new\_dictionary for old\_dictionary anywhere the latter appears. This is done for only the specified token types when `FOR` appears, or for all mappings of the configuration when it doesn't. The `DROP MAPPING` form removes all dictionaries for the specified token type(s), causing tokens of those types to be ignored by the text search configuration. It is an error if there is no mapping for the token types, unless `IF EXISTS` appears.

<a id="section5"></a>

## Examples

The following example replaces the `english` dictionary with the `swedish` dictionary anywhere that `english` is used within `my_config`.

```
ALTER TEXT SEARCH CONFIGURATION my_config
  ALTER MAPPING REPLACE english WITH swedish;
```

<a id="section6"></a>

## Compatibility

There is no `ALTER TEXT SEARCH CONFIGURATION` statement in the SQL standard.

<a id="section7"></a>

## See Also

[CREATE TEXT SEARCH CONFIGURATION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_TEXT_SEARCH_CONFIGURATION/), [DROP TEXT SEARCH CONFIGURATION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_TEXT_SEARCH_CONFIGURATION/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
