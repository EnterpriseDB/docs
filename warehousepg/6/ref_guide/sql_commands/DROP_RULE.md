---
title: DROP RULE
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_RULE/
lastModified: 2026-10-14T08:34:33Z
---

# DROP RULE

<a id="topic1"></a><a id="de20941"></a><a id="sql_command_desc"></a>

Removes a rewrite rule.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
DROP RULE [IF EXISTS] <name> ON <table_name> [CASCADE | RESTRICT]
```

<a id="section3">

</a>

## Description

`DROP RULE` drops a rewrite rule from a table or view.

<a id="section4">

</a>

## Parameters

### IF EXISTS

Do not throw an error if the rule does not exist. A notice is issued in this case.

### name

The name of the rule to remove.

### table\_name

The name (optionally schema-qualified) of the table or view that the rule applies to.

### CASCADE

Automatically drop objects that depend on the rule.

### RESTRICT

Refuse to drop the rule if any objects depend on it. This is the default.

<a id="section5">

</a>

## Examples

Remove the rewrite rule `sales_2006` on the table `sales`:

```
DROP RULE sales_2006 ON sales;
```

<a id="section6">

</a>

## Compatibility

`DROP RULE` is a WarehousePG language extension, as is the entire query rewrite system.

<a id="section7">

</a>

## See Also

[ALTER RULE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_RULE/), [CREATE RULE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_RULE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
