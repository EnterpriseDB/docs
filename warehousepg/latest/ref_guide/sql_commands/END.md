---
title: END
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/END/
lastModified: 2026-10-14T08:34:33Z
---

# END

Commits the current transaction.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
END [WORK | TRANSACTION] [AND [NO] CHAIN]
```

<a id="section3"></a>

## Description

`END` commits the current transaction. All changes made by the transaction become visible to others and are guaranteed to be durable if a crash occurs. This command is a WarehousePG extension that is equivalent to [COMMIT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/COMMIT/).

<a id="section4"></a>

## Parameters

### WORK | TRANSACTION

Optional keywords. They have no effect.

### AND CHAIN

If `AND CHAIN` is specified, a new transaction is immediately started with the same transaction characteristics (see [SET TRANSACTION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/SET_TRANSACTION/)) as the just finished one. Otherwise, no new transaction is started.

<a id="section4a"></a>

## Notes

Use [ROLLBACK](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ROLLBACK/) to terminate a transaction.

Issuing `END` when not inside a transaction does no harm, but it will provoke a warning message.

<a id="section5"></a>

## Examples

To commit the current transaction and make all changes permanent:

```
END;
```

<a id="section6"></a>

## Compatibility

`END` is a WarehousePG extension that provides functionality equivalent to [COMMIT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/COMMIT/), which is specified in the SQL standard.

<a id="section7"></a>

## See Also

[BEGIN](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/BEGIN/), [COMMIT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/COMMIT/), [ROLLBACK](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ROLLBACK/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
