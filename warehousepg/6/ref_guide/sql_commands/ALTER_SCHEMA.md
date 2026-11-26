---
title: ALTER SCHEMA
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_SCHEMA/
lastModified: 2026-10-14T08:34:33Z
---

# ALTER SCHEMA

<a id="topic1"></a><a id="aw20941"></a><a id="sql_command_desc"></a>

Changes the definition of a schema.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
ALTER SCHEMA <name> RENAME TO <newname>

ALTER SCHEMA <name> OWNER TO <newowner>
```

<a id="section3">

</a>

## Description

`ALTER SCHEMA` changes the definition of a schema.

You must own the schema to use `ALTER SCHEMA`. To rename a schema you must also have the `CREATE` privilege for the database. To alter the owner, you must also be a direct or indirect member of the new owning role, and you must have the `CREATE` privilege for the database. Note that superusers have all these privileges automatically.

<a id="section4">

</a>

## Parameters

### name

The name of an existing schema.

### newname

The new name of the schema. The new name cannot begin with `pg_`, as such names are reserved for system schemas.

### newowner

The new owner of the schema.

<a id="section5">

</a>

## Compatibility

There is no `ALTER SCHEMA` statement in the SQL standard.

<a id="section6">

</a>

## See Also

[CREATE SCHEMA](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_SCHEMA/), [DROP SCHEMA](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_SCHEMA/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
