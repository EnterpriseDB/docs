---
title: DROP PROTOCOL
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_PROTOCOL/
lastModified: 2026-10-14T08:34:33Z
---

# DROP PROTOCOL

Removes a data access protocol from a database.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
DROP PROTOCOL [IF EXISTS] <name>
```

<a id="section3"></a>

## Description

`DROP PROTOCOL` removes the specified protocol from a database. You specify a protocol name in the `CREATE EXTERNAL TABLE` command to read data from or write data to an external data source.

You must be a superuser or the protocol owner to drop a protocol.

> **Caution** If you drop a data access prococol, external tables that have been defined specifying the protocol will no longer be able to access the external data source.

<a id="section4"></a>

## Parameters

### IF EXISTS

Do not throw an error if the protocol does not exist. WarehousePG issues a notice in this case.

### name

The name of an existing data access protocol.

<a id="section5"></a>

## Notes

Dropping a data access protocol, does not drop the protocol's call handlers. You must drop these functions manually.

Be sure to remove any shared libraries that were used by the protocol from the WarehousePG hosts.

<a id="section6"></a>

## Compatibility

`DROP PROTOCOL` is a WarehousePG extension.

<a id="section7"></a>

## See Also

[CREATE EXTERNAL TABLE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_EXTERNAL_TABLE/), [CREATE PROTOCOL](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_PROTOCOL/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
