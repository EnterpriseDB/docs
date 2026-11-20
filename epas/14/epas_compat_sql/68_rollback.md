---
title: ROLLBACK
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/68_rollback/
lastModified: 2023-02-14T16:10:29+05:30
---

# ROLLBACK

<div id="rollback" class="registered_link"></div>

## Name

`ROLLBACK` — Abort the current transaction.

## Synopsis

```text
ROLLBACK [ WORK ]
```

## Description

`ROLLBACK` rolls back the current transaction and discards all the updates made by the transaction.

## Parameters

`WORK`

Optional keyword that has no effect.

## Notes

Use `COMMIT` to successfully terminate a transaction.

Issuing `ROLLBACK` when not inside a transaction does no harm.

> **Note**
>
> Executing a `ROLLBACK` in a plpgsql procedure throws an error if there's an Oracle-style SPL procedure on the runtime stack.

## Examples

Abort all changes:

```text
ROLLBACK;
```

## See also

[COMMIT](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/19_commit/#commit), [ROLLBACK TO SAVEPOINT](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/69_rollback_to_savepoint/#rollback_to_savepoint), [SAVEPOINT](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/70_savepoint/#savepoint)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
