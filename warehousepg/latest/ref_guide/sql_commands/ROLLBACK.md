---
title: ROLLBACK
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ROLLBACK/
lastModified: 2026-10-14T08:34:33Z
---

# ROLLBACK

Stops the current transaction.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
ROLLBACK [WORK | TRANSACTION] [AND [NO] CHAIN]
```

<a id="section3"></a>

## Description

`ROLLBACK` rolls back the current transaction and causes all the updates made by the transaction to be discarded.

<a id="section4"></a>

## Parameters

### WORK | TRANSACTION

Optional key words. They have no effect.

### AND CHAIN

If `AND CHAIN` is specified, a new transaction is immediately started with the same transaction characteristics (see [SET TRANSACTION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/SET_TRANSACTION/)) as the just finished one. Otherwise, no new transaction is started.

<a id="section5"></a>

## Notes

Use [COMMIT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/COMMIT/) to successfully end the current transaction.

Issuing `ROLLBACK` when not inside a transaction block emits a warning and otherwise has no effect. `ROLLBACK AND CHAIN` outside of a transaction block is an error.

<a id="section6"></a>

## Examples

To discard all changes made in the current transaction:

```
ROLLBACK;
```

<a id="section7"></a>

## Compatibility

The command `ROLLBACK` conforms to the SQL standard. The form `ROLLBACK TRANSACTION` is a WarehousePG extension.

<a id="section8"></a>

## See Also

[BEGIN](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/BEGIN/), [COMMIT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/COMMIT/), [ROLLBACK TO SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ROLLBACK_TO_SAVEPOINT/), [SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/SAVEPOINT/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
