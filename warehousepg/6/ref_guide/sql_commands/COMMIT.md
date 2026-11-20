---
title: COMMIT
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/COMMIT/
lastModified: 2026-10-14T08:34:33Z
---

# COMMIT

<a id="topic1"></a><a id="bj20941"></a><a id="sql_command_desc"></a>

Commits the current transaction.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
COMMIT [WORK | TRANSACTION]
```

<a id="section3">

</a>

## Description

`COMMIT` commits the current transaction. All changes made by the transaction become visible to others and are guaranteed to be durable if a crash occurs.

<a id="section4">

</a>

## Parameters

### WORK | TRANSACTION

Optional key words. They have no effect.

<a id="section5">

</a>

## Notes

Use [ROLLBACK](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ROLLBACK/) to prematurely end a transaction.

Issuing `COMMIT` when not inside a transaction does no harm, but it will provoke a warning message.

<a id="section6">

</a>

## Examples

To commit the current transaction and make all changes permanent:

```
COMMIT;
```

<a id="section7">

</a>

## Compatibility

The SQL standard only specifies the two forms `COMMIT` and `COMMIT WORK`. Otherwise, this command is fully conforming.

<a id="section8">

</a>

## See Also

[BEGIN](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/BEGIN/), [END](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/END/), [START TRANSACTION](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/START_TRANSACTION/), [ROLLBACK](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ROLLBACK/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
