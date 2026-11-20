---
title: ALTER USER
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_USER/
lastModified: 2026-08-11T09:07:15Z
---

# ALTER USER

<a id="topic1"></a><a id="bc20941"></a><a id="sql_command_desc"></a>

Changes the definition of a database role (user).

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
ALTER USER <name> RENAME TO <newname>

ALTER USER <name> SET <config_parameter> {TO | =} {<value> | DEFAULT}

ALTER USER <name> RESET <config_parameter>

ALTER USER <name> RESOURCE QUEUE {<queue_name> | NONE}

ALTER USER <name> RESOURCE GROUP {<group_name> | NONE}

ALTER USER <name> [ [WITH] <option> [ ... ] ]
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
    | [ENCRYPTED | UNENCRYPTED] PASSWORD '<password>'
    | VALID UNTIL '<timestamp>'
    | [ DENY <deny_point> ]
    | [ DENY BETWEEN <deny_point> AND <deny_point>]
    | [ DROP DENY FOR <deny_point> ]
```

<a id="section3">

</a>

## Description

`ALTER USER` is an alias for `ALTER ROLE`. See [ALTER ROLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_ROLE/) for more information.

<a id="section4">

</a>

## Compatibility

The `ALTER USER` statement is a WarehousePG extension. The SQL standard leaves the definition of users to the implementation.

<a id="section5">

</a>

## See Also

[ALTER ROLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_ROLE/), [CREATE USER](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_USER/), [DROP USER](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_USER/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
