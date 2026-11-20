---
title: ALTER CONVERSION
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_CONVERSION/
lastModified: 2026-10-14T08:34:33Z
---

# ALTER CONVERSION

Changes the definition of a conversion.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
ALTER CONVERSION <name> RENAME TO <new_name>

ALTER CONVERSION <name> OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }

ALTER CONVERSION <name> SET SCHEMA <new_schema>

```

<a id="section3"></a>

## Description

`ALTER CONVERSION` changes the definition of a conversion.

You must own the conversion to use `ALTER CONVERSION`. To alter the owner, you must also be a direct or indirect member of the new owning role, and that role must have `CREATE` privilege on the conversion's schema. (These restrictions enforce that altering the owner does not do anything you could not do by dropping and recreating the conversion. However, a superuser can alter ownership of any conversion anyway.)

<a id="section4"></a>

## Parameters

### name

The name (optionally schema-qualified) of an existing conversion.

### new\_name

The new name of the conversion.

### new\_owner

The new owner of the conversion.

### new\_schema

The new schema for the conversion.

<a id="section5"></a>

## Examples

To rename the conversion `iso_8859_1_to_utf8` to `latin1_to_unicode`:

```
ALTER CONVERSION iso_8859_1_to_utf8 RENAME TO latin1_to_unicode;
```

To change the owner of the conversion `iso_8859_1_to_utf8` to `joe`:

```
ALTER CONVERSION iso_8859_1_to_utf8 OWNER TO joe;
```

<a id="section6"></a>

## Compatibility

There is no `ALTER CONVERSION` statement in the SQL standard.

<a id="section7"></a>

## See Also

[CREATE CONVERSION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_CONVERSION/), [DROP CONVERSION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_CONVERSION/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
