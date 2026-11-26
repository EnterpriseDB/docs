---
title: DROP DATABASE LINK
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/45_drop_public_database_link/
lastModified: 2023-02-14T16:10:29+05:30
---

# DROP DATABASE LINK

<div id="drop_public_database_link" class="registered_link"></div>

## Name

`DROP DATABASE LINK` — Remove a database link.

## Synopsis

```text
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

```text
DROP PUBLIC DATABASE LINK oralink;
```

Remove the private database link named `edblink`:

```text
DROP DATABASE LINK edblink;
```

## See also

[CREATE PUBLIC DATABASE LINK](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/21_create_public_database_link/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
