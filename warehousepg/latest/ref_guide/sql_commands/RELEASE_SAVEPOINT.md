---
title: RELEASE SAVEPOINT
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/RELEASE_SAVEPOINT/
lastModified: 2026-10-14T08:34:33Z
---

# RELEASE SAVEPOINT

Destroys a previously defined savepoint.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
RELEASE [SAVEPOINT] <savepoint_name>
```

<a id="section3"></a>

## Description

`RELEASE SAVEPOINT` destroys a savepoint previously defined in the current transaction.

Destroying a savepoint makes it unavailable as a rollback point, but it has no other user visible behavior. It does not undo the effects of commands run after the savepoint was established. (To do that, see [ROLLBACK TO SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ROLLBACK_TO_SAVEPOINT/).) Destroying a savepoint when it is no longer needed may allow the system to reclaim some resources earlier than transaction end.

`RELEASE SAVEPOINT` also destroys all savepoints that were established _after_ the named savepoint was established.

<a id="section4"></a>

## Parameters

### savepoint\_name

The name of the savepoint to destroy.

<a id="section_notes"></a>

## Notes

Specifying a savepoint name that was not previously defined is an error.

It is not possible to release a savepoint when the transaction is in an aborted state.

If multiple savepoints have the same name, WarehousePG releases only the most recently defined unreleased savepoint. Repeated commands release progressively older savepoints.

<a id="section5"></a>

## Examples

To establish and later destroy a savepoint:

```
BEGIN;
    INSERT INTO table1 VALUES (3);
    SAVEPOINT my_savepoint;
    INSERT INTO table1 VALUES (4);
    RELEASE SAVEPOINT my_savepoint;
COMMIT;
```

The above transaction inserts both 3 and 4.

<a id="section6"></a>

## Compatibility

This command conforms to the SQL standard. The standard specifies that the key word `SAVEPOINT` is mandatory, but WarehousePG allows it to be omitted.

<a id="section7"></a>

## See Also

[BEGIN](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/BEGIN/), [COMMIT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/COMMIT/), [ROLLBACK](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ROLLBACK/), [ROLLBACK TO SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ROLLBACK_TO_SAVEPOINT/), [SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/SAVEPOINT/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
