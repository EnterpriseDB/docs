---
title: Removing a data redaction policy
description: How to use the DROP_REDACTION_POLICY function to remove a data redaction policy from a table.
product: EDB Postgres Extended Server
version: "18"
url: https://www.enterprisedb.com/docs/pge/latest/data_redaction/removing_a_data_redaction_policy/
lastModified: 2025-11-25T15:48:33+01:00
---

# Removing a data redaction policy

The `DROP_REDACTION_POLICY` function removes a data redaction policy from a table.

## Synopsis

```sql
DATA_REDACTION.DROP_REDACTION_POLICY('policy_name', 
                                     'table_name', 
                                     'schema_name')
```

## Description

`DROP_REDACTION_POLICY` removes the specified data redaction policy from the table.

To use `DROP_REDACTION_POLICY`, you must own the table that the redaction policy applies to.

## Parameters

- `policy_name` — Name of the data redaction policy to remove.

- `table_name` — Name of the table the data redaction policy applies to.

- `schema_name` — Schema name in which the table resides.

## See also

[`CREATE REDACTION POLICY`](https://www.enterprisedb.com/docs/pge/latest/data_redaction/creating_a_data_redaction_policy/), [`ENABLE/DISABLE REDACTION POLICY`](https://www.enterprisedb.com/docs/pge/latest/data_redaction/modifying_a_data_redaction_policy/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
