---
title: DROP TRIGGER
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/59_drop_trigger/
lastModified: 2025-11-25T20:39:04+05:30
---

# DROP TRIGGER

<div id="drop_trigger" class="registered_link"></div>

## Name

`DROP TRIGGER` — Remove a trigger.

## Synopsis

```sql
DROP TRIGGER <name>
```

## Description

`DROP TRIGGER` removes a trigger from its associated table. A superuser or the owner of the associated table can run the command.

## Parameters

`name`

The name of a trigger to remove.

## Examples

Remove a trigger named `emp_salary_trig`:

```sql
DROP TRIGGER emp_salary_trig;
```

## See also

[CREATE TRIGGER](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/38_create_trigger/#create_trigger), [ALTER TRIGGER](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/13_alter_trigger/#alter_trigger)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
