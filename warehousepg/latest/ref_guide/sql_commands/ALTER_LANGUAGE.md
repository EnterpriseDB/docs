---
title: ALTER LANGUAGE
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_LANGUAGE/
lastModified: 2026-10-14T08:34:33Z
---

# ALTER LANGUAGE

Changes the definition of a procedural language.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
ALTER [ PROCEDURAL ] LANGUAGE <name> RENAME TO <new_name>
ALTER [ PROCEDURAL ] LANGUAGE <name> OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }
```

<a id="section3"></a>

## Description

`ALTER LANGUAGE` changes the definition of a procedural language for a specific database. Definition changes supported include renaming the language or assigning a new owner. You must be superuser or the owner of the language to use `ALTER LANGUAGE`.

<a id="section4"></a>

## Parameters

### name

Name of a language.

### new\_name

The new name of the language.

### new\_owner

The new owner of the language.

<a id="section5"></a>

## Compatibility

There is no `ALTER LANGUAGE` statement in the SQL standard.

<a id="section6"></a>

## See Also

[CREATE LANGUAGE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_LANGUAGE/), [DROP LANGUAGE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_LANGUAGE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
