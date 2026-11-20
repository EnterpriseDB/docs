---
title: CREATE USER
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_USER/
lastModified: 2026-08-11T09:07:15Z
---

# CREATE USER

<a id="topic1"></a><a id="ci20941"></a><a id="sql_command_desc"></a>

Defines a new database role with the `LOGIN` privilege by default.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
CREATE USER <name> [[WITH] <option> [ ... ]]
```

where option can be:

```
      SUPERUSER | NOSUPERUSER
    | CREATEDB | NOCREATEDB
    | CREATEROLE | NOCREATEROLE
    | CREATEUSER | NOCREATEUSER
    | CREATEEXTTABLE | NOCREATEEXTTABLE 
      [ ( <attribute>='<value>'[, ...] ) ]
           where <attributes> and <value> are:
           type='readable'|'writable'
           protocol='gpfdist'|'http'
    | INHERIT | NOINHERIT
    | LOGIN | NOLOGIN
    | REPLICATION | NOREPLICATION
    | CONNECTION LIMIT <connlimit>
    | [ ENCRYPTED | UNENCRYPTED ] PASSWORD '<password>'
    | VALID UNTIL '<timestamp>'
    | IN ROLE <role_name> [, ...]
    | IN GROUP <role_name>
    | ROLE <role_name> [, ...]
    | ADMIN <role_name> [, ...]
    | USER <role_name> [, ...]
    | SYSID <uid>
    | RESOURCE QUEUE <queue_name>
    | RESOURCE GROUP <group_name>
    | [ DENY <deny_point> ]
    | [ DENY BETWEEN <deny_point> AND <deny_point>]
```

<a id="section3">

</a>

## Description

`CREATE USER` is an alias for [CREATE ROLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_ROLE/).

The only difference between `CREATE ROLE` and `CREATE USER` is that `LOGIN` is assumed by default with `CREATE USER`, whereas `NOLOGIN` is assumed by default with `CREATE ROLE`.

<a id="section4">

</a>

## Compatibility

There is no `CREATE USER` statement in the SQL standard.

<a id="section5">

</a>

## See Also

[CREATE ROLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_ROLE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
