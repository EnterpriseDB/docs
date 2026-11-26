---
title: CREATE GROUP
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_GROUP/
lastModified: 2026-09-25T15:14:11+01:00
---

# CREATE GROUP

Defines a new database role.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
CREATE GROUP <name> [[WITH] <option> [ ... ]]
```

where option can be:

```
      SUPERUSER | NOSUPERUSER
    | CREATEDB | NOCREATEDB
    | CREATEROLE | NOCREATEROLE
    | CREATEEXTTABLE | NOCREATEEXTTABLE 
      [ ( <attribute>='<value>'[, ...] ) ]
           where <attributes> and <value> are:
           type='readable'|'writable'
           protocol='gpfdist'|'http'
    | INHERIT | NOINHERIT
    | LOGIN | NOLOGIN
    | REPLICATION | NOREPLICATION
    | BYPASSRLS | NOBYPASSRLS
    | CONNECTION LIMIT <connlimit>
    | [ ENCRYPTED | UNENCRYPTED ] PASSWORD '<password>' | PASSWORD NULL
    | VALID UNTIL '<timestamp>' 
    | IN ROLE <role_name> [, ...]
    | IN GROUP <role_name> [, ...]
    | ROLE <role_name> [, ...]
    | ADMIN <role_name> [, ...]
    | USER <role_name> [, ...]
    | SYSID <uid> [, ...]
    | RESOURCE QUEUE <queue_name>
    | RESOURCE GROUP <group_name>
    | [ DENY <deny_point> ]
    | [ DENY BETWEEN <deny_point> AND <deny_point>]
```

<a id="section3"></a>

## Description

`CREATE GROUP` is an alias for [CREATE ROLE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_ROLE/).

<a id="section4"></a>

## Compatibility

There is no `CREATE GROUP` statement in the SQL standard.

<a id="section5"></a>

## See Also

[CREATE ROLE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_ROLE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
