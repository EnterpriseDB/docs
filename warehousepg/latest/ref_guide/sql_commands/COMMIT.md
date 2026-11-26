---
title: COMMIT
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/COMMIT/
lastModified: 2026-10-14T08:34:33Z
---

# COMMIT

Commits the current transaction.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
COMMIT [WORK | TRANSACTION] [AND [NO] CHAIN]
```

<a id="section3"></a>

## Description

`COMMIT` commits the current transaction. All changes made by the transaction become visible to others and are guaranteed to be durable if a crash occurs.

<a id="section4"></a>

## Parameters

### WORK | TRANSACTION

Optional key words. They have no effect.

### AND CHAIN

If `AND CHAIN` is specified, a new transaction is immediately started with the same transaction characteristics (see [SET TRANSACTION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/SET_TRANSACTION/)) as the just finished one. Otherwise, no new transaction is started.

<a id="section5"></a>

## Notes

Use [ROLLBACK](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ROLLBACK/) to prematurely end a transaction.

Issuing `COMMIT` when not inside a transaction does no harm, but it will provoke a warning message. `COMMIT AND CHAIN` when not inside a transaction is an error.

<a id="section6"></a>

## Examples

To commit the current transaction and make all changes permanent:

```
COMMIT;
```

<a id="section7"></a>

## Compatibility

The command `COMMIT` conforms to the SQL standard. The form `COMMIT TRANSACTION` is a WarehousePG extension.

<a id="section8"></a>

## See Also

[BEGIN](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/BEGIN/), [END](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/END/), [ROLLBACK](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ROLLBACK/), [START TRANSACTION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/START_TRANSACTION/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
