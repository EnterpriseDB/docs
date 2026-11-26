---
title: REASSIGN OWNED
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/REASSIGN_OWNED/
lastModified: 2026-10-14T08:34:33Z
---

# REASSIGN OWNED

Changes the ownership of database objects owned by a database role.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
REASSIGN OWNED BY { <old_role> | CURRENT_USER | SESSION_USER } [, ...]
               TO { <new_role> | CURRENT_USER | SESSION_USER }
```

<a id="section3"></a>

## Description

`REASSIGN OWNED` changes the ownership of database objects owned by any of the old\_roles to new\_role.

<a id="section4"></a>

## Parameters

### old\_role

The name of a role. The ownership of all the objects in the current database, and of all shared objects (databases, tablespaces), owned by this role will be reassigned to new\_role.

### new\_role

The name of the role that will be made the new owner of the affected objects.

<a id="section5"></a>

## Notes

`REASSIGN OWNED` is often used to prepare for the removal of one or more roles. Because `REASSIGN OWNED` does not affect objects in other databases, it is usually necessary to run this command in each database that contains objects owned by a role that is to be removed.

`REASSIGN OWNED` requires privileges on both the source role(s) and the target role.

The [DROP OWNED](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_OWNED/) command is an alternative that simply drops all of the database objects owned by one or more roles.

The `REASSIGN OWNED` command does not affect any privileges granted to the old\_roles on objects that are not owned by them. Likewise, it does not affect default privileges created with `ALTER DEFAULT PRIVILEGES`. Use `DROP OWNED` to revoke such privileges.

<a id="section6"></a>

## Examples

Reassign any database objects owned by the role named `sally` and `bob` to `admin`:

```
REASSIGN OWNED BY sally, bob TO admin;
```

<a id="section7"></a>

## Compatibility

The `REASSIGN OWNED` command is a WarehousePG extension.

<a id="section8"></a>

## See Also

[DROP OWNED](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_OWNED/), [DROP ROLE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_ROLE/), [ALTER DATABASE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_DATABASE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
