---
title: Creating a data redaction policy
description: How to use the CREATE_REDACTION_POLICY function to define a new data redaction policy for a table
product: EDB Postgres Extended Server
version: "18"
url: https://www.enterprisedb.com/docs/pge/latest/data_redaction/creating_a_data_redaction_policy/
lastModified: 2025-11-25T15:48:33+01:00
---

# Creating a data redaction policy

The `CREATE_REDACTION_POLICY` function defines a new data redaction policy for a table.

## Synopsis

```sql
DATA_REDACTION.CREATE_REDACTION_POLICY('policy_name', 
                                       'table_name', 
                                       'schema_name', 
                                       'expression', 
                                       'column_name',
                                       'func', 
                                       'scope_value', 
                                       'exception_value')
```

## Description

The `CREATE_REDACTION_POLICY` function creates a new data redaction policy for a table. The data redaction policy specifies how to redact sensitive data for certain users by applying redaction functions to the specified columns of the table.

You must be the owner of a table to create or change data redaction policies for it.

The superuser and the table owner are exempt from the data redaction policy.

## Parameters

- `policy_name` — Name of the data redaction policy to create.

- `table_name` — Name of the table the data redaction policy applies to.

- `schema_name` — Schema name in which the table resides.

- `expression` — The data redaction policy expression. No redaction is applied if this expression evaluates to false.

- `column_name` — Name of the existing column of the table on which the data redaction policy is being created.

- `func` — The data redaction function that decides how to compute the redacted column value. Return type of the redaction function must be the same as the column type on which the data redaction policy is being added.

- `scope_value` — The scope identifies the query part to apply redaction for the column. Scope value can be `query`, `top_tlist`, or `top_tlist_or_error`.
  - If the scope is `query`, then the redaction is applied on the column regardless of where it appears in the query.
  - If the scope is `top_tlist`, then the redaction is applied on the column only when it appears in the query’s top target list.
  - If the scope is `top_tlist_or_error`, the behavior is the same as the `top_tlist` but throws an errors when the column appears anywhere else in the query.

- `exception_value` — The exception identifies the query part where redaction is exempted. Exception value can be `none`, `equal`, or `leakproof`.
  - If exception is `none`, then there's no exemption.
  - If exception is `equal`, then the column isn't redacted when used in an equality test.
  - If exception is `leakproof`, the column isn't redacted when a leakproof function is applied to it.

## Caveats

- The data redaction policies created on inheritance hierarchies aren't cascaded. For example, if the data redaction policy is created for a parent, it isn't applied to the child table that inherits it, and vice versa. A user with access to these child tables can see the non-redacted data. For information about inheritance hierarchies, see the [PostgreSQL core documentation](https://www.postgresql.org/docs/current/ddl-inherit.html).

- Users must manually adjust redaction policies when renaming or dropping any relevant objects.

- If non-super user takes a dump, it has redacted values then user will get redacted values when restores that dump.

## See also

[`EXAMPLE`](https://www.enterprisedb.com/docs/pge/latest/data_redaction/working_example/), [`ENABLE/DISABLE REDACTION POLICY`](https://www.enterprisedb.com/docs/pge/latest/data_redaction/modifying_a_data_redaction_policy/), [`DROP REDACTION POLICY`](https://www.enterprisedb.com/docs/pge/latest/data_redaction/removing_a_data_redaction_policy/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
