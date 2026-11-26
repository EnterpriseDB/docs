---
title: ABORT
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ABORT/
lastModified: 2026-10-14T08:34:33Z
---

# ABORT

<a id="topic1"></a><a id="af20941"></a><a id="sql_command_desc"></a>

Terminates the current transaction.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
ABORT [WORK | TRANSACTION]
```

<a id="section3">

</a>

## Description

`ABORT` rolls back the current transaction and causes all the updates made by the transaction to be discarded. This command is identical in behavior to the standard SQL command [ROLLBACK](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ROLLBACK/), and is present only for historical reasons.

<a id="section4">

</a>

## Parameters

### WORK | TRANSACTION

Optional key words. They have no effect.

<a id="section5">

</a>

## Notes

Use `COMMIT` to successfully terminate a transaction.

Issuing `ABORT` when not inside a transaction does no harm, but it will provoke a warning message.

<a id="section6">

</a>

## Compatibility

This command is a WarehousePG extension present for historical reasons. `ROLLBACK` is the equivalent standard SQL command.

<a id="section7">

</a>

## See Also

[BEGIN](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/BEGIN/), [COMMIT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/COMMIT/), [ROLLBACK](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ROLLBACK/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
