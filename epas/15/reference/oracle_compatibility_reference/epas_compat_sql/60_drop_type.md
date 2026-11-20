---
title: DROP TYPE
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/60_drop_type/
lastModified: 2023-11-09T17:35:38+05:30
---

# DROP TYPE

<div id="drop_type" class="registered_link"></div>

## Name

`DROP TYPE` — Remove a type definition.

## Synopsis

```sql
DROP TYPE [ BODY ] <name>
```

## Description

`DROP TYPE` removes the type definition. To execute this command, you must be a superuser or the owner of the type.

The optional `BODY` qualifier applies only to object type definitions, not to collection types or to composite types. If you specify `BODY`, only the object type body is removed and not the object type specification. If you omit `BODY`, both the object type specification and body are removed.

The type isn't deleted if other database objects depend on the named type.

## Parameters

`name`

The name of a type definition to remove.

## Examples

Drop the object type named `addr_obj_typ`:

```sql
DROP TYPE addr_obj_typ;
```

Drop the nested table type named `budget_tbl_typ`:

```sql
DROP TYPE budget_tbl_typ;
```

## See also

[CREATE TYPE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/39_create_type/#create_type), [CREATE TYPE BODY](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/40_create_type_body/#create_type_body)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
