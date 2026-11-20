---
title: DROP FOREIGN DATA WRAPPER
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_FOREIGN_DATA_WRAPPER/
lastModified: 2026-10-14T08:34:33Z
---

# DROP FOREIGN DATA WRAPPER

Removes a foreign-data wrapper.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
DROP FOREIGN DATA WRAPPER [ IF EXISTS ] <name> [ CASCADE | RESTRICT ]
```

<a id="section3"></a>

## Description

`DROP FOREIGN DATA WRAPPER` removes an existing foreign-data wrapper from the current database. A foreign-data wrapper may be removed only by its owner.

<a id="section4"></a>

## Parameters

### IF EXISTS

Do not throw an error if the foreign-data wrapper does not exist. WarehousePG issues a notice in this case.

### name

The name of an existing foreign-data wrapper.

### CASCADE

Automatically drop objects that depend on the foreign-data wrapper (such as foreign tables and servers), and in turn all objects that depend on those objects.

### RESTRICT

Refuse to drop the foreign-data wrapper if any object depends on it. This is the default.

<a id="section6"></a>

## Examples

Drop the foreign-data wrapper named `dbi`:

```
DROP FOREIGN DATA WRAPPER dbi;
```

<a id="section7"></a>

## Compatibility

`DROP FOREIGN DATA WRAPPER` conforms to ISO/IEC 9075-9 (SQL/MED). The `IF EXISTS` clause is a WarehousePG extension.

<a id="section8"></a>

## See Also

[CREATE FOREIGN DATA WRAPPER](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_FOREIGN_DATA_WRAPPER/), [ALTER FOREIGN DATA WRAPPER](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_FOREIGN_DATA_WRAPPER/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
