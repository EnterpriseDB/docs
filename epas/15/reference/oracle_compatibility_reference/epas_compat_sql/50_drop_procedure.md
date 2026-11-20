---
title: DROP PROCEDURE
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/50_drop_procedure/
lastModified: 2024-02-23T16:16:14Z
---

# DROP PROCEDURE

<div id="drop_procedure" class="registered_link"></div>

## Name

`DROP PROCEDURE` — Remove a procedure.

## Synopsis

```sql
DROP PROCEDURE [ IF EXISTS ] <name>
  [ ([ [ <argmode> ] [ <argname> ] <argtype> ] [, ...]) ]
  [ CASCADE | RESTRICT ]
```

## Description

`DROP PROCEDURE` removes the definition of an existing procedure. To execute this command, you must be a superuser or the owner of the procedure. For an overloaded procedure, you must specify all input (`IN`, `IN OUT`) argument data types to the procedure.

> **Note**
>
> This requirement isn't compatible with Oracle databases. In Oracle, specify only the procedure name. EDB Postgres Advanced Server allows overloading of procedure names. Therefore the procedure signature given by the input argument data types is required in the EDB Postgres Advanced Server `DROP PROCEDURE` command for an overloaded procedure.

The `IF EXISTS`, `CASCADE`, and `RESTRICT` parameters aren't compatible with Oracle databases. Only EDB Postgres Advanced Server uses them.

## Parameters

`IF EXISTS`

Specifies not to throw an error if the procedure doesn't exist. A notice is issued instead.

`name`

The name (optionally schema-qualified) of an existing procedure.

`argmode`

The mode of an argument: `IN`, `IN OUT`, or `OUT`. The default is `IN`. `DROP PROCEDURE` ignores `OUT` arguments, since only the input arguments are needed to determine the procedure’s identity. List only the `IN` and `IN OUT` arguments.

!!! Note
Specifying `argmode` isn't compatible with Oracle databases. It applies only to EDB Postgres Advanced Server.

`argname`

The name of an argument. `DROP PROCEDURE` ignores argument names, since only the argument data types are needed to determine the procedure’s identity.

!!! Note
Specifying `argname` isn't compatible with Oracle databases. It applies only to EDB Postgres Advanced Server.

`argtype`

The data type of an argument of the procedure.

!!! Note
Specifying `argtype` isn't compatible with Oracle databases. It applies only to EDB Postgres Advanced Server.

`CASCADE`

Drop objects that depend on the procedure and all objects that depend on those objects.

`RESTRICT`

Prevent dropping the procedure if any objects depend on it. This is the default.

## Examples

This example removes the `select_emp` procedure:

```sql
DROP PROCEDURE select_emp;
```

## See also

[CREATE PROCEDURE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/28_create_procedure/#create_procedure), [ALTER PROCEDURE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/04_alter_procedure/#alter_procedure)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
