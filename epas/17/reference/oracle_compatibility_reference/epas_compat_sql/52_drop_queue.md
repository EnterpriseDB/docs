---
title: DROP QUEUE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/52_drop_queue/
lastModified: 2025-11-25T20:57:39+05:30
---

# DROP QUEUE

<div id="drop_queue" class="registered_link"></div>

EDB Postgres Advanced Server includes syntax not offered by Oracle with the `DROP QUEUE SQL` command. You can use this syntax with `DBMS_AQADM`.

## Name

`DROP QUEUE` — Drop an existing queue.

## Synopsis

Use `DROP QUEUE` to drop an existing queue:

```sql
DROP QUEUE [IF EXISTS] <name>
```

## Description

`DROP QUEUE` allows a superuser or a user with the `aq_administrator_role` privilege to drop an existing queue.

## Parameters

`name`

The name (possibly schema-qualified) of the queue that's being dropped.

`IF EXISTS`

Include the `IF EXISTS` clause if you don't want to return an error if the queue doesn't exist. Instead, issue a notice.

## Examples

This example drops a queue named `work_order`:

```sql
DROP QUEUE work_order;
```

## See also

[CREATE QUEUE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/30_create_queue/#create_queue), [ALTER QUEUE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/06_alter_queue/#alter_queue)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
