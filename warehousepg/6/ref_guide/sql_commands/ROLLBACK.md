---
title: ROLLBACK
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ROLLBACK/
lastModified: 2026-10-14T08:34:33Z
---

# ROLLBACK

<a id="topic1"></a><a id="ed20941"></a><a id="sql_command_desc"></a>

Stops the current transaction.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
ROLLBACK [WORK | TRANSACTION]
```

<a id="section3">

</a>

## Description

`ROLLBACK` rolls back the current transaction and causes all the updates made by the transaction to be discarded.

<a id="section4">

</a>

## Parameters

### WORK | TRANSACTION

Optional key words. They have no effect.

<a id="section5">

</a>

## Notes

Use `COMMIT` to successfully end the current transaction.

Issuing `ROLLBACK` when not inside a transaction does no harm, but it will provoke a warning message.

<a id="section6">

</a>

## Examples

To discard all changes made in the current transaction:

```
ROLLBACK;
```

<a id="section7">

</a>

## Compatibility

The SQL standard only specifies the two forms `ROLLBACK` and `ROLLBACK WORK`. Otherwise, this command is fully conforming.

<a id="section8">

</a>

## See Also

[BEGIN](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/BEGIN/), [COMMIT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/COMMIT/), [SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/SAVEPOINT/), [ROLLBACK TO SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ROLLBACK_TO_SAVEPOINT/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
