---
title: SAVEPOINT
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/SAVEPOINT/
lastModified: 2026-10-14T08:34:33Z
---

# SAVEPOINT

<a id="topic1"></a><a id="ef20941"></a><a id="sql_command_desc"></a>

Defines a new savepoint within the current transaction.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
SAVEPOINT <savepoint_name>
```

<a id="section3">

</a>

## Description

`SAVEPOINT` establishes a new savepoint within the current transaction.

A savepoint is a special mark inside a transaction that allows all commands that are run after it was established to be rolled back, restoring the transaction state to what it was at the time of the savepoint.

<a id="section4">

</a>

## Parameters

### savepoint\_name

The name of the new savepoint.

<a id="section5">

</a>

## Notes

Use [ROLLBACK TO SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ROLLBACK_TO_SAVEPOINT/) to rollback to a savepoint. Use [RELEASE SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/RELEASE_SAVEPOINT/) to destroy a savepoint, keeping the effects of commands run after it was established.

Savepoints can only be established when inside a transaction block. There can be multiple savepoints defined within a transaction.

<a id="section6">

</a>

## Examples

To establish a savepoint and later undo the effects of all commands run after it was established:

```
BEGIN;
    INSERT INTO table1 VALUES (1);
    SAVEPOINT my_savepoint;
    INSERT INTO table1 VALUES (2);
    ROLLBACK TO SAVEPOINT my_savepoint;
    INSERT INTO table1 VALUES (3);
COMMIT;
```

The above transaction will insert the values 1 and 3, but not 2.

To establish and later destroy a savepoint:

```
BEGIN;
    INSERT INTO table1 VALUES (3);
    SAVEPOINT my_savepoint;
    INSERT INTO table1 VALUES (4);
    RELEASE SAVEPOINT my_savepoint;
COMMIT;
```

The above transaction will insert both 3 and 4.

<a id="section7">

</a>

## Compatibility

SQL requires a savepoint to be destroyed automatically when another savepoint with the same name is established. In WarehousePG, the old savepoint is kept, though only the more recent one will be used when rolling back or releasing. (Releasing the newer savepoint will cause the older one to again become accessible to [ROLLBACK TO SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ROLLBACK_TO_SAVEPOINT/) and [RELEASE SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/RELEASE_SAVEPOINT/).) Otherwise, `SAVEPOINT` is fully SQL conforming.

<a id="section8">

</a>

## See Also

[BEGIN](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/BEGIN/), [COMMIT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/COMMIT/), [ROLLBACK](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ROLLBACK/), [RELEASE SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/RELEASE_SAVEPOINT/), [ROLLBACK TO SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ROLLBACK_TO_SAVEPOINT/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
