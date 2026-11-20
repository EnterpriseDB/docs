---
title: DROP TABLESPACE
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/58_drop_tablespace/
lastModified: 2023-11-09T17:35:38+05:30
---

# DROP TABLESPACE

<div id="drop_tablespace" class="registered_link"></div>

## Name

`DROP TABLESPACE` — Remove a tablespace.

## Synopsis

```sql
DROP TABLESPACE <tablespacename>
```

## Description

`DROP TABLESPACE` removes a tablespace from the system.

Only a superuser or the tablespace owner can drop a tablespace. The tablespace must be empty of all database objects before you drop it. Objects in other databases might still reside in the tablespace even if no objects in the current database are using the tablespace.

## Parameters

`tablespacename`

The name of a tablespace.

## Examples

This example removes the tablespace `employee_space` from the system:

```sql
DROP TABLESPACE employee_space;
```

## See also

[ALTER TABLESPACE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/14_alter_tablespace/#alter_tablespace)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
