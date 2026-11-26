---
title: SET CONSTRAINTS
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/72_set_constraints/
lastModified: 2023-11-09T17:35:38+05:30
---

# SET CONSTRAINTS

<div id="set_constraints" class="registered_link"></div>

## Name

`SET CONSTRAINTS` — Set constraint-checking modes for the current transaction.

## Synopsis

```sql
SET CONSTRAINTS { ALL | name [, ...] } { DEFERRED | IMMEDIATE }
```

## Description

`SET CONSTRAINTS` sets the behavior of constraint checking in the current transaction. `IMMEDIATE` constraints are checked at the end of each statement. `DEFERRED` constraints are checked when the transaction commits. Each constraint has its own `IMMEDIATE` or `DEFERRED` mode.

When you create a constraint, you give it one of three characteristics: `DEFERRABLE INITIALLY DEFERRED`, `DEFERRABLE INITIALLY IMMEDIATE`, or `NOT DEFERRABLE`. The third class is always `IMMEDIATE` and isn't affected by the `SET CONSTRAINTS` command. The first two classes start every transaction in the indicated mode, but you can change their behavior in a transaction by using `SET CONSTRAINTS`.

`SET CONSTRAINTS` with a list of constraint names changes the mode of just those constraints. Those constraints must all be deferrable. If multiple constraints match any given name, all are affected. `SET CONSTRAINTS ALL` changes the mode of all deferrable constraints.

When `SET CONSTRAINTS` changes the mode of a constraint from `DEFERRED` to `IMMEDIATE`, the new mode takes effect retroactively. Any outstanding data modifications that normally are checked at the end of the transaction are instead checked while `SET CONSTRAINTS` executes. If any such constraint is violated, the `SET CONSTRAINTS` fails and doesn't change the constraint mode. Thus, you can use `SET CONSTRAINTS` to force constraint checking to occur at a specific point in a transaction.

Currently, only foreign key constraints are affected by this setting. Check and unique constraints are never deferrable.

## Notes

This command alters only the behavior of constraints in the current transaction. If you execute this command outside of a transaction block, it doesn't have any effect.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
