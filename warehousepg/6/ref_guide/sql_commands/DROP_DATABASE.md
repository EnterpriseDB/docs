---
title: DROP DATABASE
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_DATABASE/
lastModified: 2026-10-14T08:34:33Z
---

# DROP DATABASE

<a id="topic1"></a><a id="cr20941"></a><a id="sql_command_desc"></a>

Removes a database.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
DROP DATABASE [IF EXISTS] <name>
```

<a id="section3">

</a>

## Description

`DROP DATABASE` drops a database. It removes the catalog entries for the database and deletes the directory containing the data. It can only be run by the database owner. Also, it cannot be run while you or anyone else are connected to the target database. (Connect to `postgres` or any other database to issue this command.)

> **Caution** `DROP DATABASE` cannot be undone. Use it with care!

<a id="section4">

</a>

## Parameters

### IF EXISTS

Do not throw an error if the database does not exist. A notice is issued in this case.

### name

The name of the database to remove.

<a id="section5">

</a>

## Notes

`DROP DATABASE` cannot be run inside a transaction block.

This command cannot be run while connected to the target database. Thus, it might be more convenient to use the program `dropdb` instead, which is a wrapper around this command.

<a id="section6">

</a>

## Examples

Drop the database named `testdb`:

```
DROP DATABASE testdb;
```

<a id="section7">

</a>

## Compatibility

There is no `DROP DATABASE` statement in the SQL standard.

<a id="section8">

</a>

## See Also

[ALTER DATABASE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_DATABASE/), [CREATE DATABASE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_DATABASE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
