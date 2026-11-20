---
title: ALTER GROUP
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_GROUP/
lastModified: 2026-10-14T08:34:33Z
---

# ALTER GROUP

<a id="topic1"></a><a id="ao20941"></a><a id="sql_command_desc"></a>

Changes a role name or membership.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
ALTER GROUP <groupname> ADD USER <username> [, ... ]

ALTER GROUP <groupname> DROP USER <username> [, ... ]

ALTER GROUP <groupname> RENAME TO <newname>
```

<a id="section3">

</a>

## Description

`ALTER GROUP` changes the attributes of a user group. This is an obsolete command, though still accepted for backwards compatibility, because users and groups are superseded by the more general concept of roles. See [ALTER ROLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_ROLE/) for more information.

The first two variants add users to a group or remove them from a group. Any role can play the part of groupname or username. The preferred method for accomplishing these tasks is to use [GRANT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/GRANT/) and [REVOKE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/REVOKE/).

<a id="section4">

</a>

## Parameters

### groupname

The name of the group (role) to modify.

### username

Users (roles) that are to be added to or removed from the group. The users (roles) must already exist.

### newname

The new name of the group (role).

<a id="section5">

</a>

## Examples

To add users to a group:

```
ALTER GROUP staff ADD USER karl, john;
```

To remove a user from a group:

```
ALTER GROUP workers DROP USER beth;
```

<a id="section6">

</a>

## Compatibility

There is no `ALTER GROUP` statement in the SQL standard.

<a id="section7">

</a>

## See Also

[ALTER ROLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_ROLE/), [GRANT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/GRANT/), [REVOKE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/REVOKE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
