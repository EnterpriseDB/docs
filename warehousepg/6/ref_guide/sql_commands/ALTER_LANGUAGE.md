---
title: ALTER LANGUAGE
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_LANGUAGE/
lastModified: 2026-10-14T08:34:33Z
---

# ALTER LANGUAGE

<a id="topic1"></a><a id="aq20941"></a><a id="sql_command_desc"></a>

Changes the name of a procedural language.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
ALTER LANGUAGE <name> RENAME TO <newname>
ALTER LANGUAGE <name> OWNER TO <new_owner>
```

<a id="section3">

</a>

## Description

`ALTER LANGUAGE` changes the definition of a procedural language for a specific database. Definition changes supported include renaming the language or assigning a new owner. You must be superuser or the owner of the language to use `ALTER LANGUAGE`.

<a id="section4">

</a>

## Parameters

### name

Name of a language.

### newname

The new name of the language.

### new\_owner

The new owner of the language.

<a id="section5">

</a>

## Compatibility

There is no `ALTER LANGUAGE` statement in the SQL standard.

<a id="section6">

</a>

## See Also

[CREATE LANGUAGE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_LANGUAGE/), [DROP LANGUAGE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_LANGUAGE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
