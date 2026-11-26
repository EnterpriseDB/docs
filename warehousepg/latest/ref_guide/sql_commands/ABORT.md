---
title: ABORT
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ABORT/
lastModified: 2026-10-14T08:34:33Z
---

# ABORT

Terminates the current transaction.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
ABORT [WORK | TRANSACTION] [AND [NO] CHAIN]
```

<a id="section3"></a>

## Description

`ABORT` rolls back the current transaction and causes all the updates made by the transaction to be discarded. This command is identical in behavior to the standard SQL command [ROLLBACK](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ROLLBACK/), and is present only for historical reasons.

<a id="section4"></a>

## Parameters

### WORK | TRANSACTION

Optional key words. They have no effect.

### AND CHAIN

If `AND CHAIN` is specified, a new transaction is immediately started with the same transaction characteristics (see [SET TRANSACTION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/SET_TRANSACTION/)) as the just finished one. Otherwise, no new transaction is started.

<a id="section5"></a>

## Notes

Use [COMMIT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/COMMIT/) to successfully terminate a transaction.

Issuing `ABORT` outside of a transaction block emits a warning and otherwise has no effect.

<a id="section5a"></a>

## Examples

To terminate all changes:

```
ABORT;
```

<a id="section6"></a>

## Compatibility

This command is a WarehousePG extension present for historical reasons. `ROLLBACK` is the equivalent standard SQL command.

<a id="section7"></a>

## See Also

[BEGIN](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/BEGIN/), [COMMIT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/COMMIT/), [ROLLBACK](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ROLLBACK/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
