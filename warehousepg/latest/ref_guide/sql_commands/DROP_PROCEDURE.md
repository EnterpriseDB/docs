---
title: DROP PROCEDURE
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_PROCEDURE/
lastModified: 2026-10-14T08:34:33Z
---

# DROP PROCEDURE

Removes a procedure.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
DROP PROCEDURE [IF EXISTS] name ( [ [argmode] [argname] argtype [, ...] ] )
    [CASCADE | RESTRICT]
```

<a id="section3"></a>

## Description

`DROP PROCEDURE` removes the definition of an existing procedure. To run this command the user must be the owner of the procedure. The argument types to the procedure must be specified, since several different procedures may exist with the same name and different argument lists.

<a id="section4"></a>

## Parameters

### IF EXISTS

Do not throw an error if the procedure does not exist. A notice is issued in this case.

### name

The name (optionally schema-qualified) of an existing procedure. If no argument list is specified, the name must be unique in its schema.

### argmode

The mode of an argument: `IN` or `VARIADIC`. If omitted, the default is `IN`.

### argname

The name of an argument. Note that `DROP PROCEDURE` does not actually pay any attention to argument names, since only the argument data types are needed to determine the procedure's identity.

### argtype

The data type(s) of the procedure's arguments (optionally schema-qualified), if any.

### CASCADE

Automatically drop objects that depend on the procedure, and in turn all objects that depend on those objects.

### RESTRICT

Refuse to drop the procedure if any objects depend on it. This is the default.

<a id="section5"></a>

## Examples

This command removes the procedure named `do_db_maintenance`:

```
DROP PROCEDURE do_db_maintenance();
```

<a id="section6"></a>

## Compatibility

This command conforms to the SQL standard, with these WarehousePG extensions:

- The standard only allows one procedure to be dropped per command.

- The `IF EXISTS` option.

- The ability to specify argument modes and names.

<a id="section7"></a>

## See Also

[CREATE PROCEDURE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_PROCEDURE/), [ALTER PROCEDURE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_PROCEDURE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
