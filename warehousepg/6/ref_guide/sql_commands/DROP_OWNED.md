---
title: DROP OWNED
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_OWNED/
lastModified: 2026-10-14T08:34:33Z
---

# DROP OWNED

<a id="topic1"></a><a id="db20941"></a><a id="sql_command_desc"></a>

Removes database objects owned by a database role.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
DROP OWNED BY <name> [, ...] [CASCADE | RESTRICT]
```

<a id="section3">

</a>

## Description

`DROP OWNED` drops all the objects in the current database that are owned by one of the specified roles. Any privileges granted to the given roles on objects in the current database or on shared objects (databases, tablespaces) will also be revoked.

<a id="section4">

</a>

## Parameters

### name

The name of a role whose objects will be dropped, and whose privileges will be revoked.

### CASCADE

Automatically drop objects that depend on the affected objects.

### RESTRICT

Refuse to drop the objects owned by a role if any other database objects depend on one of the affected objects. This is the default.

<a id="section5">

</a>

## Notes

`DROP OWNED` is often used to prepare for the removal of one or more roles. Because `DROP OWNED` only affects the objects in the current database, it is usually necessary to run this command in each database that contains objects owned by a role that is to be removed.

Using the `CASCADE` option may make the command recurse to objects owned by other users.

The [`REASSIGN OWNED`](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/REASSIGN_OWNED/) command is an alternative that reassigns the ownership of all the database objects owned by one or more roles. However, `REASSIGN OWNED` does not deal with privileges for other objects.

<a id="section6">

</a>

## Examples

Remove any database objects owned by the role named `sally`:

```
DROP OWNED BY sally;
```

<a id="section7">

</a>

## Compatibility

The `DROP OWNED` command is a WarehousePG extension.

<a id="section8">

</a>

## See Also

[REASSIGN OWNED](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/REASSIGN_OWNED/), [DROP ROLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_ROLE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
