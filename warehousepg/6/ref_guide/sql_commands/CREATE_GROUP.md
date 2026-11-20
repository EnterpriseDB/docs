---
title: CREATE GROUP
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_GROUP/
lastModified: 2026-08-11T09:07:15Z
---

# CREATE GROUP

<a id="topic1"></a><a id="bt20941"></a><a id="sql_command_desc"></a>

Defines a new database role.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
CREATE GROUP <name> [[WITH] <option> [ ... ]]
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
    | CONNECTION LIMIT <connlimit>
    | [ ENCRYPTED | UNENCRYPTED ] PASSWORD '<password>'
    | VALID UNTIL '<timestamp>' 
    | IN ROLE <rolename> [, ...]
    | ROLE <rolename> [, ...]
    | ADMIN <rolename> [, ...]
    | RESOURCE QUEUE <queue_name>
    | RESOURCE GROUP <group_name>
    | [ DENY <deny_point> ]
    | [ DENY BETWEEN <deny_point> AND <deny_point>]
```

<a id="section3">

</a>

## Description

`CREATE GROUP` is an alias for [CREATE ROLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_ROLE/).

<a id="section4">

</a>

## Compatibility

There is no `CREATE GROUP` statement in the SQL standard.

<a id="section5">

</a>

## See Also

[CREATE ROLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_ROLE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
