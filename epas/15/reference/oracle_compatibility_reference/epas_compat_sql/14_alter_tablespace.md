---
title: ALTER TABLESPACE
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/14_alter_tablespace/
lastModified: 2023-11-09T17:35:38+05:30
---

# ALTER TABLESPACE

<div id="alter_tablespace" class="registered_link"></div>

## Name

`ALTER TABLESPACE` — Change the definition of a tablespace.

## Synopsis

```sql
ALTER TABLESPACE <name> RENAME TO <newname>
```

## Description

`ALTER TABLESPACE` changes the definition of a tablespace.

## Parameters

`name`

The name of an existing tablespace.

`newname`

The new name of the tablespace. The new name can't begin with `pg_`. These names are reserved for system tablespaces.

## Examples

Rename tablespace `empspace` to `employee_space`:

```sql
ALTER TABLESPACE empspace RENAME TO employee_space;
```

## See also

[DROP TABLESPACE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/58_drop_tablespace/#drop_tablespace)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
