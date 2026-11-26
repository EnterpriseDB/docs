---
title: COMMIT
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/19_commit/
lastModified: 2023-11-09T17:35:38+05:30
---

# COMMIT

<div id="commit" class="registered_link"></div>

## Name

`COMMIT` — Commit the current transaction.

## Synopsis

```sql
COMMIT [ WORK ]
```

## Description

`COMMIT` commits the current transaction. All changes made by the transaction become visible to others and are guaranteed to be durable if a crash occurs.

## Parameters

`WORK`

Optional keyword that has no effect.

## Notes

Use `ROLLBACK` to abort a transaction. Issuing `COMMIT` when not inside a transaction does no harm.

> **Note**
>
> Executing a `COMMIT` in a plpgsql procedure throws an error if there's an Oracle-style SPL procedure on the runtime stack.

## Examples

To commit the current transaction and make all changes permanent:

```sql
COMMIT;
```

## See also

[ROLLBACK](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/68_rollback/#rollback), [ROLLBACK TO SAVEPOINT](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/69_rollback_to_savepoint/#rollback_to_savepoint)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
