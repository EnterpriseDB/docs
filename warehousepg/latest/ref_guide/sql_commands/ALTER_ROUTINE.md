---
title: ALTER ROUTINE
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_ROUTINE/
lastModified: 2026-09-25T15:14:11+01:00
---

# ALTER ROUTINE

Changes the definition of a routine.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
ALTER ROUTINE <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ] 
   <action> [, ... ] [RESTRICT]

ALTER ROUTINE <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ]
   RENAME TO <new_name>

ALTER ROUTINE <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ]
   OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }

ALTER ROUTINE <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ]
   SET SCHEMA <new_schema>

ALTER ROUTINE <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ]
   DEPENDS ON EXTENSION <extension_name>

where <action> is one of (depending on the type of routine):

    { IMMUTABLE | STABLE | VOLATILE }
    [ NOT ] LEAKPROOF
    { [EXTERNAL] SECURITY INVOKER | [EXTERNAL] SECURITY DEFINER }
    PARALLEL { UNSAFE | RESTRICTED | SAFE }
    EXECUTE ON { ANY | COORDINATOR | ALL SEGMENTS | INITPLAN }
    COST <execution_cost>
    ROWS <result_rows>
    SET <configuration_parameter> { TO | = } { <value> | DEFAULT }
    SET <configuration_parameter> FROM CURRENT
    RESET <configuration_parameter>
    RESET ALL
```

<a id="section3"></a>

## Description

`ALTER ROUTINE` changes the definition of a routine, which can be an aggregate function, a normal function, or a procedure. Refer to [ALTER AGGREGATE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_AGGREGATE/), [ALTER FUNCTION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_FUNCTION/), and [ALTER PROCEDURE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_PROCEDURE/) for the description of the parameters, more examples, and further details.

<a id="section6"></a>

## Examples

To rename the routine `foo` for type `integer` to `foobar`:

```
ALTER ROUTINE foo(integer) RENAME TO foobar;
```

This command will work independent of whether `foo` is an aggregate, function, or procedure.

<a id="section7"></a>

## Compatibility

This statement is partially compatible with the `ALTER ROUTINE` statement in the SQL standard. Refer to [ALTER FUNCTION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_FUNCTION/) and [ALTER PROCEDURE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_PROCEDURE/) for more details. Allowing routine names to refer to aggregate functions is a WarehousePG extension.

<a id="section8"></a>

## See Also

[ALTER AGGREGATE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_AGGREGATE/), [ALTER FUNCTION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_FUNCTION/), [ALTER PROCEDURE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_PROCEDURE/), [DROP ROUTINE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_ROUTINE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
