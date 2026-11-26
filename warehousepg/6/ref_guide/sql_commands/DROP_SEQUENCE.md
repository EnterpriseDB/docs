---
title: DROP SEQUENCE
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_SEQUENCE/
lastModified: 2026-10-14T08:34:33Z
---

# DROP SEQUENCE

<a id="topic1"></a><a id="dh20941"></a><a id="sql_command_desc"></a>

Removes a sequence.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
DROP SEQUENCE [IF EXISTS] <name> [, ...] [CASCADE | RESTRICT]
```

<a id="section3">

</a>

## Description

`DROP SEQUENCE` removes a sequence generator table. You must own the sequence to drop it (or be a superuser).

<a id="section4">

</a>

## Parameters

### IF EXISTS

Do not throw an error if the sequence does not exist. A notice is issued in this case.

### name

The name (optionally schema-qualified) of the sequence to remove.

### CASCADE

Automatically drop objects that depend on the sequence.

### RESTRICT

Refuse to drop the sequence if any objects depend on it. This is the default.

<a id="section5">

</a>

## Examples

Remove the sequence `myserial`:

```
DROP SEQUENCE myserial;
```

<a id="section6">

</a>

## Compatibility

`DROP SEQUENCE` is fully conforming with the SQL standard, except that the standard only allows one sequence to be dropped per command. Also, the `IF EXISTS` option is a WarehousePG extension.

<a id="section7">

</a>

## See Also

[ALTER SEQUENCE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_SEQUENCE/), [CREATE SEQUENCE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_SEQUENCE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
