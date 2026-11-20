---
title: ALTER RULE
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_RULE/
lastModified: 2026-10-14T08:34:33Z
---

# ALTER RULE

<a id="topic1"></a><a id="sql_command_desc"></a>

Changes the definition of a rule.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
ALTER RULE name ON table\_name RENAME TO new\_name
```

<a id="section3">

</a>

## Description

`ALTER RULE` changes properties of an existing rule. Currently, the only available action is to change the rule's name.

To use `ALTER RULE`, you must own the table or view that the rule applies to.

<a id="section4">

</a>

## Parameters

### name

The name of an existing rule to alter.

### table\_name

The name (optionally schema-qualified) of the table or view that the rule applies to.

### new\_name

The new name for the rule.

<a id="section7">

</a>

## Compatibility

`ALTER RULE` is a WarehousePG language extension, as is the entire query rewrite system.

<a id="seealso">

</a>

## See Also

[CREATE RULE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_RULE/), [DROP RULE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_RULE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
