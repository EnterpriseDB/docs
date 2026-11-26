---
title: BIND_VARIABLE_RAW
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/03_bind_variable_raw/
lastModified: 2025-11-25T20:39:04+05:30
---

# BIND\_VARIABLE\_RAW

The `BIND_VARIABLE_RAW` procedure associates a `RAW` value with an `IN` or `IN OUT` bind variable in a SQL command.

```sql
BIND_VARIABLE_RAW(<c> NUMBER, <name> VARCHAR2, <value> RAW
  [, <out_value_size> NUMBER ])
```

## Parameters

`c`

Cursor ID of the cursor for the SQL command with bind variables.

`name`

Name of the bind variable in the SQL command.

`value`

Value of type `RAW` to be assigned.

`out_value_size`

If `name` is an `IN OUT` variable, defines the maximum length of the output value. If not specified, the length of `value` is assumed.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
