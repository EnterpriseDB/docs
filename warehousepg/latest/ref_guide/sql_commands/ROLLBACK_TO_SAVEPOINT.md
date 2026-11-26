---
title: ROLLBACK TO SAVEPOINT
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ROLLBACK_TO_SAVEPOINT/
lastModified: 2026-10-14T08:34:33Z
---

# ROLLBACK TO SAVEPOINT

Rolls back the current transaction to a savepoint.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
ROLLBACK [ WORK | TRANSACTION ] TO [ SAVEPOINT ] <savepoint_name>
```

<a id="section3"></a>

## Description

This command rolls back all commands that were run after the savepoint was established. The savepoint remains valid and can be rolled back to again later, if needed.

`ROLLBACK TO SAVEPOINT` implicitly destroys all savepoints that were established after the named savepoint.

<a id="section4"></a>

## Parameters

### WORK | TRANSACTION

Optional key words. They have no effect.

### savepoint\_name

The name of the savepoint to roll back to.

<a id="section5"></a>

## Notes

Use [RELEASE SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/RELEASE_SAVEPOINT/) to destroy a savepoint without discarding the effects of commands run after it was established.

Specifying a savepoint name that has not been established is an error.

Cursors have somewhat non-transactional behavior with respect to savepoints. Any cursor that is opened inside a savepoint will be closed when the savepoint is rolled back. If a previously opened cursor is affected by a `FETCH` command inside a savepoint that is later rolled back, the cursor remains at the position that `FETCH` left it pointing to (that is, cursor motion caused by `FETCH` is not rolled back). Closing a cursor is not undone by rolling back, either. However, other side-effects caused by the cursor's query (such as side-effects of volatile functions called by the query) _are_ rolled back if they occur during a savepoint that is later rolled back. A cursor whose execution causes a transaction to end prematurely is put in a cannot-execute state, so while the transaction can be restored using `ROLLBACK TO SAVEPOINT`, the cursor can no longer be used.

<a id="section6"></a>

## Examples

To undo the effects of the commands run after `my_savepoint` was established:

```
ROLLBACK TO SAVEPOINT my_savepoint;
```

Cursor positions are not affected by a savepoint rollback:

```
BEGIN;
DECLARE foo CURSOR FOR SELECT 1 UNION SELECT 2;
SAVEPOINT foo;
FETCH 1 FROM foo;
column 
----------
        1

ROLLBACK TO SAVEPOINT foo;
FETCH 1 FROM foo;
column 
----------
        2

COMMIT;
```

<a id="section7"></a>

## Compatibility

The SQL standard specifies that the key word `SAVEPOINT` is mandatory, but WarehousePG (and Oracle) allow it to be omitted. SQL allows only `WORK`, not `TRANSACTION`, as a noise word after `ROLLBACK`. Also, SQL has an optional clause `AND [NO] CHAIN` which is not currently supported by WarehousePG. Otherwise, this command conforms to the SQL standard.

<a id="section8"></a>

## See Also

[BEGIN](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/BEGIN/), [COMMIT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/COMMIT/), [RELEASE SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/RELEASE_SAVEPOINT/), [ROLLBACK](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ROLLBACK/), [SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/SAVEPOINT/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
