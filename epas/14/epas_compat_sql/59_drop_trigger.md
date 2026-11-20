---
title: DROP TRIGGER
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/59_drop_trigger/
lastModified: 2023-02-14T16:10:29+05:30
---

# DROP TRIGGER

<div id="drop_trigger" class="registered_link"></div>

## Name

`DROP TRIGGER` — Remove a trigger.

## Synopsis

```text
DROP TRIGGER <name>
```

## Description

`DROP TRIGGER` removes a trigger from its associated table. A superuser or the owner of the associated table can run the command.

## Parameters

`name`

The name of a trigger to remove.

## Examples

Remove a trigger named `emp_salary_trig`:

```text
DROP TRIGGER emp_salary_trig;
```

## See also

[CREATE TRIGGER](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/38_create_trigger/#create_trigger), [ALTER TRIGGER](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/13_alter_trigger/#alter_trigger)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
