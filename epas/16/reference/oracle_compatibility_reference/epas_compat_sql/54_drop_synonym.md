---
title: DROP SYNONYM
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/54_drop_synonym/
lastModified: 2024-11-22T12:16:04+01:00
---

# DROP SYNONYM

<div id="drop_synonym" class="registered_link"></div>

## Name

`DROP SYNONYM` — Remove a synonym.

## Synopsis

```sql
DROP [PUBLIC] SYNONYM [<schema>.]<syn_name>
```

## Description

`DROP SYNONYM` deletes existing synonyms. To execute this command, you must be a superuser or the owner of the synonym and have `USAGE` privileges on the schema in which the synonym resides.

## Parameters

`syn_name`

The name of the synonym. A synonym name must be unique in a schema.

`schema`

The name of the schema where the synonym resides.

Like any other object that can be schema qualified, you can have two synonyms with the same name in your search path. To specify the name of the synonym that you're dropping, include a schema name. Unless a synonym is schema qualified in the `DROP SYNONYM` command, EDB Postgres Advanced Server deletes the first instance of the synonym it finds in your search path.

You can optionally include the `PUBLIC` clause to drop a synonym that resides in the `public` schema. The `DROP PUBLIC SYNONYM` command, compatible with Oracle databases, drops a synonym that resides in the `public` schema:

```sql
DROP PUBLIC SYNONYM syn_name;
```

## Examples

This example drops the synonym `personnel`:

```sql
DROP SYNONYM personnel;
```

## See also

[CREATE SYNONYM](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/35_create_synonym/#create_synonym)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
