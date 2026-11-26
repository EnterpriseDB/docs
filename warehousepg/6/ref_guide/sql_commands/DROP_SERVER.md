---
title: DROP SERVER
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_SERVER/
lastModified: 2026-10-14T08:34:33Z
---

# DROP SERVER

<a id="topic1"></a><a id="bv20941"></a><a id="sql_command_desc"></a>

Removes a foreign server descriptor.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
DROP SERVER [ IF EXISTS ] <servername> [ CASCADE | RESTRICT ]
```

<a id="section3">

</a>

## Description

`DROP SERVER` removes an existing foreign server descriptor. The user running this command must be the owner of the server.

<a id="section4">

</a>

## Parameters

### IF EXISTS

Do not throw an error if the server does not exist. WarehousePG issues a notice in this case.

### servername

The name of an existing server.

### CASCADE

Automatically drop objects that depend on the server (such as user mappings).

### RESTRICT

Refuse to drop the server if any object depends on it. This is the default.

<a id="section6">

</a>

## Examples

Drop the server named `foo` if it exists:

```
DROP SERVER IF EXISTS foo;
```

<a id="section7">

</a>

## Compatibility

`DROP SERVER` conforms to ISO/IEC 9075-9 (SQL/MED). The `IF EXISTS` clause is a WarehousePG extension.

<a id="section8">

</a>

## See Also

[CREATE SERVER](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_SERVER/), [ALTER SERVER](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_SERVER/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
