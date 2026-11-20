---
title: ALTER QUEUE TABLE
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/07_alter_queue_table/
lastModified: 2024-11-22T12:16:04+01:00
---

# ALTER QUEUE TABLE

<div id="alter_queue_table" class="registered_link"></div>

EDB Postgres Advanced Server includes extra syntax not offered by Oracle with the `ALTER QUEUE SQL` command. You can use this syntax with the `DBMS_AQADM` package.

## Name

`ALTER QUEUE TABLE` — Modify an existing queue table.

## Synopsis

Use `ALTER QUEUE TABLE` to change the name of an existing queue table:

```sql
ALTER QUEUE TABLE <name> RENAME TO <new_name>
```

## Description

`ALTER QUEUE TABLE` allows a superuser or a user with the `aq_administrator_role` privilege to change the name of an existing queue table.

## Parameters

`name`

The name (optionally schema-qualified) of an existing queue table.

`new_name`

New name for the queue table.

## Examples

This example changes the name of a queue table from `wo_table_east` to `work_order_table`:

```sql
ALTER QUEUE TABLE wo_queue_east RENAME TO work_order_table;
```

## See also

[CREATE QUEUE TABLE](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/31_create_queue_table/#create_queue_table), [DROP QUEUE TABLE](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/53_drop_queue_table/#drop_queue_table)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
