---
title: DROP INDEX
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/48_drop_index/
lastModified: 2023-02-14T16:10:29+05:30
---

# DROP INDEX

<div id="drop_index" class="registered_link"></div>

## Name

`DROP INDEX` — Remove an index.

## Synopsis

```text
DROP INDEX <name>
```

## Description

`DROP INDEX` drops an existing index from the database system. To execute this command, you must be a superuser or the owner of the index. If any objects depend on the index, an error occurs, and the index isn't dropped.

## Parameters

`name`

The name (optionally schema-qualified) of an index to remove.

## Examples

This example removes the index `name_idx`:

```text
DROP INDEX name_idx;
```

## See also

[CREATE INDEX](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/24_create_index/), [ALTER INDEX](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/03_alter_index/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
