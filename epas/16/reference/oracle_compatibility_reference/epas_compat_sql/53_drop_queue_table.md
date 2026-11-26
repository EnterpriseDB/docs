---
title: DROP QUEUE TABLE
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/53_drop_queue_table/
lastModified: 2024-11-22T12:16:04+01:00
---

# DROP QUEUE TABLE

<div id="drop_queue_table" class="registered_link"></div>

EDB Postgres Advanced Server includes syntax not offered by Oracle with the `DROP QUEUE TABLE SQL` command. You can use this syntax with `DBMS_AQADM`.

## Name

`DROP QUEUE TABLE` — Drop a queue table.

## Synopsis

Use `DROP QUEUE TABLE` to delete a queue table:

```sql
DROP QUEUE TABLE [ IF EXISTS ] <name> [, ...]
[CASCADE | RESTRICT]
```

## Description

`DROP QUEUE TABLE` allows a superuser or a user with the `aq_administrator_role` privilege to delete a queue table.

## Parameters

`name`

The name (possibly schema-qualified) of the queue table to delete.

`IF EXISTS`

Include the `IF EXISTS` clause if you don't want to return an error if the queue table doesn't exist. Instead, issue a notice.

`CASCADE`

Include the `CASCADE` keyword to delete objects that depend on the queue table.

`RESTRICT`

Include the `RESTRICT` keyword to prevent deleting the queue table if any objects depend on it. This is the default.

## Examples

This example deletes a queue table named `work_order_table` and any objects that depend on it:

```sql
DROP QUEUE TABLE work_order_table CASCADE;
```

## See also

[CREATE QUEUE TABLE](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/31_create_queue_table/#create_queue_table), [ALTER QUEUE TABLE](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/07_alter_queue_table/#alter_queue_table)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
