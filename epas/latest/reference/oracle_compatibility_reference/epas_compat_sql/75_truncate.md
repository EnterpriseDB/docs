---
title: TRUNCATE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/75_truncate/
lastModified: 2025-11-25T20:39:04+05:30
---

# TRUNCATE

<div id="truncate" class="registered_link"></div>

## Name

`TRUNCATE` — Empty a table.

## Synopsis

```sql
TRUNCATE TABLE <name> [DROP STORAGE]
```

## Description

`TRUNCATE` removes all rows from a table. It has the same effect as an unqualified `DELETE`. However, since it doesn't scan the table, it's faster. `TRUNCATE` is most useful on large tables.

The `DROP STORAGE` clause is accepted for compatibility but is ignored.

## Parameters

`name`

The name (optionally schema-qualified) of the table to truncate.

## Notes

You can't use `TRUNCATE` if there are foreign-key references to the table from other tables. Checking validity in such cases requires table scans, which `TRUNCATE` aims to avoid.

`TRUNCATE` doesn't run any user-defined `ON DELETE` triggers for the table.

## Examples

This command truncates a table named `accounts`:

```sql
TRUNCATE TABLE accounts;
```

## See also

[DROP VIEW](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/62_drop_view/#drop_view), [DELETE](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/44_delete/#delete)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
