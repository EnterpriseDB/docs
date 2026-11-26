---
title: DROP MATERIALIZED VIEW
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_MATERIALIZED_VIEW/
lastModified: 2026-10-14T08:34:33Z
---

# DROP MATERIALIZED VIEW

<a id="topic1"></a><a id="cj20941"></a><a id="sql_command_desc"></a>

Removes a materialized view.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
DROP MATERIALIZED VIEW [ IF EXISTS ] <name> [, ...] [ CASCADE | RESTRICT ]
```

<a id="section3">

</a>

## Description

`DROP MATERIALIZED VIEW` drops an existing materialized view. To run this command, you must be the owner of the materialized view.

<a id="section4">

</a>

## Parameters

### IF EXISTS

Do not throw an error if the materialized view does not exist. A notice is issued in this case.

### name

The name (optionally schema-qualified) of a materialized view to be dropped.

### CASCADE

Automatically drop objects that depend on the materialized view (such as other materialized views, or regular views).

### RESTRICT

Refuse to drop the materialized view if any objects depend on it. This is the default.

<a id="section6">

</a>

## Examples

This command removes the materialized view called `order_summary`.

```
DROP MATERIALIZED VIEW order_summary;
```

<a id="section7">

</a>

## Compatibility

`DROP MATERIALIZED VIEW` is a WarehousePG extension of the SQL standard.

<a id="section8">

</a>

## See Also

[ALTER MATERIALIZED VIEW](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_MATERIALIZED_VIEW/), [CREATE MATERIALIZED VIEW](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_MATERIALIZED_VIEW/), [REFRESH MATERIALIZED VIEW](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/REFRESH_MATERIALIZED_VIEW/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
