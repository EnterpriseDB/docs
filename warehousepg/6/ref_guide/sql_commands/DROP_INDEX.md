---
title: DROP INDEX
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_INDEX/
lastModified: 2026-10-14T08:34:33Z
---

# DROP INDEX

<a id="topic1"></a><a id="cx154761"></a><a id="sql_command_desc"></a>

Removes an index.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
DROP INDEX [ CONCURRENTLY ] [ IF EXISTS ] <name> [, ...] [ CASCADE | RESTRICT ]
```

<a id="section3">

</a>

## Description

`DROP INDEX` drops an existing index from the database system. To run this command you must be the owner of the index.

<a id="section4">

</a>

## Parameters

### CONCURRENTLY

Drop the index without locking out concurrent selects, inserts, updates, and deletes on the index's table. A normal `DROP INDEX` acquires an exclusive lock on the table, blocking other accesses until the index drop can be completed. With this option, the command instead waits until conflicting transactions have completed.

There are several caveats to be aware of when using this option. Only one index name can be specified, and the `CASCADE` option is not supported. (Thus, an index that supports a `UNIQUE` or `PRIMARY KEY` constraint cannot be dropped this way.) Also, regular `DROP INDEX` commands can be performed within a transaction block, but `DROP INDEX CONCURRENTLY` cannot.

### IF EXISTS

Do not throw an error if the index does not exist. A notice is issued in this case.

### name

The name (optionally schema-qualified) of an existing index.

### CASCADE

Automatically drop objects that depend on the index.

### RESTRICT

Refuse to drop the index if any objects depend on it. This is the default.

<a id="section5">

</a>

## Examples

Remove the index `title_idx`:

```
DROP INDEX title_idx;
```

<a id="section6">

</a>

## Compatibility

`DROP INDEX` is a WarehousePG language extension. There are no provisions for indexes in the SQL standard.

<a id="section7">

</a>

## See Also

[ALTER INDEX](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_INDEX/), [CREATE INDEX](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_INDEX/), [REINDEX](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/REINDEX/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
