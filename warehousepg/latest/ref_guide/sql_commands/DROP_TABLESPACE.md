---
title: DROP TABLESPACE
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_TABLESPACE/
lastModified: 2026-10-14T08:34:33Z
---

# DROP TABLESPACE

Removes a tablespace.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
DROP TABLESPACE [IF EXISTS] <name>
```

<a id="section3"></a>

## Description

`DROP TABLESPACE` removes a tablespace from the system.

A tablespace can only be dropped by its owner or a superuser. The tablespace must be empty of all database objects before it can be dropped. It is possible that objects in other databases may still reside in the tablespace even if no objects in the current database are using the tablespace. Also, if the tablespace is listed in the [temp\_tablespaces](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/config_params/guc-list/) setting of any active session, `DROP TABLESPACE` might fail due to temporary files residing in the tablespace.

<a id="section4"></a>

## Parameters

### IF EXISTS

Do not throw an error if the tablespace does not exist. WarehousePG issues a notice in this case.

### name

The name of the tablespace to remove.

<a id="notes"></a>

## Notes

You cannot run `DROP TABLESPACE` inside a transaction block.

Run `DROP TABLESPACE` during a period of low activity to avoid issues due to concurrent creation of tables and temporary objects. When a tablespace is dropped, there is a small window in which a table could be created in the tablespace that is currently being dropped. If this occurs, WarehousePG returns a warning. This is an example of the `DROP TABLESPACE` warning.

```
testdb=# DROP TABLESPACE mytest; 
WARNING:  tablespace with oid "16415" is not empty  (seg1 192.168.8.145:25433 pid=29023)
WARNING:  tablespace with oid "16415" is not empty  (seg0 192.168.8.145:25432 pid=29022)
WARNING:  tablespace with oid "16415" is not empty
DROP TABLESPACE
```

The table data in the tablespace directory is not dropped. You can use the [ALTER TABLE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_TABLE/) command to change the tablespace defined for the table and move the data to an existing tablespace.

<a id="section5"></a>

## Examples

Remove the tablespace `mystuff`:

```
DROP TABLESPACE mystuff;
```

<a id="section6"></a>

## Compatibility

`DROP TABLESPACE` is a WarehousePG extension.

<a id="section7"></a>

## See Also

[CREATE TABLESPACE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_TABLESPACE/), [ALTER TABLESPACE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_TABLESPACE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
