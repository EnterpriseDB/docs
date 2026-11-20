---
title: Enable/Disable data redaction policy
description: How to enable or disable a data redaction policy for a table.
product: EDB Postgres Extended Server
version: "18"
url: https://www.enterprisedb.com/docs/pge/latest/data_redaction/modifying_a_data_redaction_policy/
lastModified: 2025-11-25T15:48:33+01:00
---

# Enable/Disable data redaction policy

The `ENABLE_REDACTION_POLICY` function enables the data redaction policy and `DISABLE_REDACTION_POLICY` function disables the data redaction policy for a table.

## Synopsis

```sql
# Enable a data redaction policy:
DATA_REDACTION.ENABLE_REDACTION_POLICY('policy_name', 
                                       'table_name', 
                                       'schema_name')

# Disable a data redaction policy:
DATA_REDACTION.DISABLE_REDACTION_POLICY('policy_name', 
                                        'table_name', 
                                        'schema_name')
```

## Description

By default, when a data redaction policy is created, it is enabled.

`ENABLE_REDACTION_POLICY` function enables the specified data redaction policy for the table, while `DISABLE_REDACTION_POLICY` function disables it.

## Parameters

- `policy_name` — Name of the data redaction policy to enable or disable.

- `table_name` — Name of the table the data redaction policy applies to.

- `schema_name` — Schema name in which the table resides.

If data redaction policy is enabled then,

- Superusers and the table owner bypass data redaction and see the original data.
- All other users have the redaction policy applied and see the reformatted data.

If data redaction policy is disabled then,

- Superusers and the table owner bypass data redaction and see the original data.
- All other users get un-redacted data.

## See also

[`CREATE REDACTION POLICY`](https://www.enterprisedb.com/docs/pge/latest/data_redaction/creating_a_data_redaction_policy/), [`DROP REDACTION POLICY`](https://www.enterprisedb.com/docs/pge/latest/data_redaction/removing_a_data_redaction_policy/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
