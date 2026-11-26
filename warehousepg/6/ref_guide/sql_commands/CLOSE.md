---
title: CLOSE
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CLOSE/
lastModified: 2026-10-14T08:34:33Z
---

# CLOSE

<a id="topic1"></a><a id="bg20941"></a><a id="sql_command_desc"></a>

Closes a cursor.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
CLOSE <cursor_name>
```

<a id="section3">

</a>

## Description

`CLOSE` frees the resources associated with an open cursor. After the cursor is closed, no subsequent operations are allowed on it. A cursor should be closed when it is no longer needed.

Every non-holdable open cursor is implicitly closed when a transaction is terminated by `COMMIT` or `ROLLBACK`. A holdable cursor is implicitly closed if the transaction that created it is prematurely ended via `ROLLBACK`. If the creating transaction successfully commits, the holdable cursor remains open until an explicit `CLOSE` is run, or the client disconnects.

<a id="section4">

</a>

## Parameters

### cursor\_name

The name of an open cursor to close.

<a id="section5">

</a>

## Notes

WarehousePG does not have an explicit `OPEN` cursor statement. A cursor is considered open when it is declared. Use the `DECLARE` statement to declare (and open) a cursor.

You can see all available cursors by querying the [pg\_cursors](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_cursors/) system view.

If a cursor is closed after a savepoint which is later rolled back, the `CLOSE` is not rolled back; that is the cursor remains closed.

<a id="section6">

</a>

## Examples

Close the cursor `portala`:

```
CLOSE portala;
```

<a id="section7">

</a>

## Compatibility

`CLOSE` is fully conforming with the SQL standard.

<a id="section8">

</a>

## See Also

[DECLARE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DECLARE/), [FETCH](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/FETCH/), [MOVE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/MOVE/), [RETRIEVE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/RETRIEVE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
