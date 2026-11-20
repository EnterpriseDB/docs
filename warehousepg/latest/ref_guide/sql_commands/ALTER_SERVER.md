---
title: ALTER SERVER
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_SERVER/
lastModified: 2026-10-14T08:34:33Z
---

# ALTER SERVER

Changes the definition of a foreign server.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
ALTER SERVER <name> [ VERSION '<new_version>' ]
    [ OPTIONS ( [ ADD | SET | DROP ] <option> ['<value>'] [, ... ] ) ]

ALTER SERVER <name> OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }
                
ALTER SERVER <name> RENAME TO <new_name>
```

<a id="section3"></a>

## Description

`ALTER SERVER` changes the definition of a foreign server. The first form of the command changes the version string or the generic options of the server. WarehousePG requires at least one clause. The second and third forms of the command change the owner or the name of the server.

To alter the server, you must be the owner of the server. To alter the owner you must:

- Own the server.
- Be a direct or indirect member of the new owning role.
- Have `USAGE` privilege on the server's foreign-data wrapper.

Superusers automatically satisfy all of these criteria.

<a id="section4"></a>

## Parameters

### name

The name of an existing server.

### new\_version

The new server version.

### OPTIONS

```
OPTIONS ( [ ADD | SET | DROP ] option ['value'] [, ... ] )
```

Change the server's options. `ADD`, `SET`, and `DROP` specify the action to perform. Option names must be unique. WarehousePG validates names and values using the server's foreign-data wrapper library.
Use `ADD` to define an option that is not currently set. Use `SET` to change the value of an option that you previously defined. If you do not explicitly specify an action, the default operation is `ADD`.

### new\_owner

Specifies the new owner of the foreign server.

### new\_name

Specifies the new name of the foreign server.

<a id="section6"></a>

## Examples

Change the definition of a server named `foo` by adding connection options:

```
ALTER SERVER foo OPTIONS (host 'foo', dbname 'foodb');
```

Change the option named `host` for a server named `foo`, and set the server version:

```
ALTER SERVER foo VERSION '9.1' OPTIONS (SET host 'baz');
```

<a id="section7"></a>

## Compatibility

`ALTER SERVER` conforms to ISO/IEC 9075-9 (SQL/MED). The `OWNER TO` and `RENAME` forms are WarehousePG extensions.

<a id="section8"></a>

## See Also

[CREATE SERVER](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_SERVER/), [DROP SERVER](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_SERVER/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
