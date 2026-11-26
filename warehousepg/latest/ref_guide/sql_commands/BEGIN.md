---
title: BEGIN
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/BEGIN/
lastModified: 2026-10-14T08:34:33Z
---

# BEGIN

Starts a transaction block.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
BEGIN [WORK | TRANSACTION] [<transaction_mode>]

where <transaction_mode> is:

   ISOLATION LEVEL {READ UNCOMMITTED | READ COMMITTED | REPEATABLE READ | SERIALIZABLE}
   READ WRITE | READ ONLY
   [NOT] DEFERRABLE
```

<a id="section3"></a>

## Description

`BEGIN` initiates a transaction block, that is, all statements after a `BEGIN` command will be run in a single transaction until an explicit [COMMIT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/COMMIT/) or [ROLLBACK](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ROLLBACK/) is given. By default (without `BEGIN`), WarehousePG runs transactions in "autocommit" mode, that is, each statement is run in its own transaction and a commit is implicitly performed at the end of the statement (if execution was successful, otherwise a rollback is done).

Statements are run more quickly in a transaction block, because transaction start/commit requires significant CPU and disk activity. Execution of multiple statements inside a transaction is also useful to ensure consistency when making several related changes: other sessions will be unable to see the intermediate states wherein not all the related updates have been done.

If the isolation level, read/write mode, or deferrable mode is specified, the new transaction has those characteristics, as if [SET TRANSACTION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/SET_TRANSACTION/) was run.

<a id="section4"></a>

## Parameters

### WORK | TRANSACTION

Optional key words. They have no effect.

Refer to [SET TRANSACTION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/SET_TRANSACTION/) for information on the meaning of the other parameters to this statement.

<a id="section5"></a>

## Notes

[START TRANSACTION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/START_TRANSACTION/) has the same functionality as `BEGIN`.

Use [COMMIT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/COMMIT/) or [ROLLBACK](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ROLLBACK/) to terminate a transaction block.

Issuing `BEGIN` when already inside a transaction block will provoke a warning message. The state of the transaction is not affected. To nest transactions within a transaction block, use savepoints (see [SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/SAVEPOINT/)).

For reasons of backwards compatibility, the commas between successive transaction\_modes can be omitted.

<a id="section6"></a>

## Examples

To begin a transaction block:

```
BEGIN;
```

<a id="section7"></a>

## Compatibility

`BEGIN` is a WarehousePG language extension. It is equivalent to the SQL-standard command [START TRANSACTION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/START_TRANSACTION/), whose reference page contains additional compatibility information.

The `DEFERRABLE` transaction\_mode is a WarehousePG language extension.

Incidentally, the `BEGIN` key word is used for a different purpose in embedded SQL. You are advised to be careful about the transaction semantics when porting database applications.

<a id="section8"></a>

## See Also

[COMMIT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/COMMIT/), [ROLLBACK](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ROLLBACK/), [SAVEPOINT](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/SAVEPOINT/), [START TRANSACTION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/START_TRANSACTION/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
