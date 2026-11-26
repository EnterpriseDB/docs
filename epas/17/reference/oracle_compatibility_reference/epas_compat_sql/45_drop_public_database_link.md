---
title: DROP DATABASE LINK
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/45_drop_public_database_link/
lastModified: 2025-11-25T20:57:39+05:30
---

# DROP DATABASE LINK

<div id="drop_public_database_link" class="registered_link"></div>

## Name

`DROP DATABASE LINK` — Remove a database link.

## Synopsis

```sql
DROP [ PUBLIC ] DATABASE LINK <name>
```

## Description

`DROP DATABASE LINK` drops existing database links. To execute this command, you must be a superuser or the owner of the database link.

## Parameters

`name`

The name of a database link to remove.

`PUBLIC`

Indicates that `name` is a public database link.

## Examples

Remove the public database link named `oralink`:

```sql
DROP PUBLIC DATABASE LINK oralink;
```

Remove the private database link named `edblink`:

```sql
DROP DATABASE LINK edblink;
```

## See also

[CREATE PUBLIC DATABASE LINK](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/21_create_public_database_link/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
