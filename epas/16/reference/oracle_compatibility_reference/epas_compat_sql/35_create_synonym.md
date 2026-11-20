---
title: CREATE SYNONYM
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/35_create_synonym/
lastModified: 2024-11-22T12:16:04+01:00
---

# CREATE SYNONYM

<div id="create_synonym" class="registered_link"></div>

## Name

`CREATE SYNONYM` — Define a new synonym.

## Synopsis

```sql
CREATE [OR REPLACE] [PUBLIC] SYNONYM [<schema>.]<syn_name>
        FOR <object_schema>.<object_name>[@<dblink_name>];
```

## Description

`CREATE SYNONYM` defines a synonym for certain types of database objects. EDB Postgres Advanced Server supports synonyms for:

- Tables
- Views
- Materialized views
- Sequences
- Packages
- Procedures
- Functions
- Types
- Objects that are accessible through a database link
- Other synonyms

## Parameters

`syn_name`

The name of the synonym. A synonym name must be unique in a schema.

`schema`

The name of the schema where the synonym resides. If you don't specify a schema name, the synonym is created in the first existing schema in your search path.

`object_name`

The name of the object.

`object_schema`

The name of the schema where the referenced object resides.

`dblink_name`

The name of the database link through which you access an object.

Include the `REPLACE` clause to replace an existing synonym definition with a new synonym definition.

Include the `PUBLIC` clause to create the synonym in the `public` schema. The `CREATE PUBLIC SYNONYM` command, compatible with Oracle databases, creates a synonym that resides in the `public` schema:

```sql
CREATE [OR REPLACE] PUBLIC SYNONYM <syn_name> FOR
<object_schema>.<object_name>;
```

This is a shorthand way to write:

```sql
CREATE [OR REPLACE] SYNONYM public.<syn_name> FOR
<object_schema>.<object_name>;
```

## Notes

Access to the object referenced by the synonym is determined by the permissions of the current user of the synonym. The synonym user must have the appropriate permissions on the underlying database object.

## Examples

Create a synonym for the `emp` table in a schema named `enterprisedb`:

```sql
CREATE SYNONYM personnel FOR enterprisedb.emp;
```

## See also

[DROP SYNONYM](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/54_drop_synonym/#drop_synonym)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
