---
title: ALTER TRIGGER
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_TRIGGER/
lastModified: 2026-10-14T08:34:33Z
---

# ALTER TRIGGER

Changes the definition of a trigger.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
ALTER TRIGGER <name> ON <table> RENAME TO <newname>
```

<a id="section3"></a>

## Description

`ALTER TRIGGER` changes properties of an existing trigger. The `RENAME` clause changes the name of the given trigger without otherwise changing the trigger definition. You must own the table on which the trigger acts to be allowed to change its properties.

<a id="section4"></a>

## Parameters

### name

The name of an existing trigger to alter.

### table

The name of the table on which this trigger acts.

### newname

The new name for the trigger.

<a id="section5"></a>

## Notes

The ability to temporarily activate or deactivate a trigger is provided by [ALTER TABLE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_TABLE/), not by `ALTER TRIGGER`, because `ALTER TRIGGER` has no convenient way to express the option of activating or deactivating all of a table's triggers at once.

Note that WarehousePG has limited support of triggers in this release. See [CREATE TRIGGER](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_TRIGGER/) for more information.

<a id="section6"></a>

## Examples

To rename an existing trigger:

```
ALTER TRIGGER emp_stamp ON emp RENAME TO emp_track_chgs;
```

<a id="section7"></a>

## Compatibility

`ALTER TRIGGER` is a WarehousePG extension of the SQL standard.

<a id="section8"></a>

## See Also

[ALTER TABLE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_TABLE/), [CREATE TRIGGER](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_TRIGGER/), [DROP TRIGGER](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_TRIGGER/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
