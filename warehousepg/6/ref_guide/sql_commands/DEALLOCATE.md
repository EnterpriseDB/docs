---
title: DEALLOCATE
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DEALLOCATE/
lastModified: 2026-10-14T08:34:33Z
---

# DEALLOCATE

<a id="topic1"></a><a id="ck20941"></a><a id="sql_command_desc"></a>

Deallocates a prepared statement.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
DEALLOCATE [PREPARE] <name>
```

<a id="section3">

</a>

## Description

`DEALLOCATE` is used to deallocate a previously prepared SQL statement. If you do not explicitly deallocate a prepared statement, it is deallocated when the session ends.

For more information on prepared statements, see [PREPARE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/PREPARE/).

<a id="section4">

</a>

## Parameters

### PREPARE

Optional key word which is ignored.

### name

The name of the prepared statement to deallocate.

<a id="section5">

</a>

## Examples

Deallocated the previously prepared statement named `insert_names`:

```
DEALLOCATE insert_names;
```

<a id="section6">

</a>

## Compatibility

The SQL standard includes a `DEALLOCATE` statement, but it is only for use in embedded SQL.

<a id="section7">

</a>

## See Also

[EXECUTE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/EXECUTE/), [PREPARE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/PREPARE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
