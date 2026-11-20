---
title: DROP CAST
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_CAST/
lastModified: 2026-10-14T08:34:33Z
---

# DROP CAST

<a id="topic1"></a><a id="cp20941"></a><a id="sql_command_desc"></a>

Removes a cast.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
DROP CAST [IF EXISTS] (<sourcetype> AS <targettype>) [CASCADE | RESTRICT]
```

<a id="section3">

</a>

## Description

`DROP CAST` will delete a previously defined cast. To be able to drop a cast, you must own the source or the target data type. These are the same privileges that are required to create a cast.

<a id="section4">

</a>

## Parameters

### IF EXISTS

Do not throw an error if the cast does not exist. A notice is issued in this case.

### sourcetype

The name of the source data type of the cast.

### targettype

The name of the target data type of the cast.

### CASCADE | RESTRICT

These keywords have no effect since there are no dependencies on casts.

<a id="section5">

</a>

## Examples

To drop the cast from type `text` to type `int`:

```
DROP CAST (text AS int);
```

<a id="section6">

</a>

## Compatibility

There `DROP CAST` command conforms to the SQL standard.

<a id="section7">

</a>

## See Also

[CREATE CAST](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_CAST/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
