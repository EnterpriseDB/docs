---
title: COLUMN_VALUE_CHAR
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/06_column_value_char/
lastModified: 2024-11-22T12:16:04+01:00
---

# COLUMN\_VALUE\_CHAR

The `COLUMN_VALUE_CHAR` procedure defines a variable to receive a `CHAR` value from a cursor.

```sql
COLUMN_VALUE_CHAR(<c> NUMBER, <position> NUMBER, <value> OUT CHAR
  [, <column_error> OUT NUMBER [, <actual_length> OUT INTEGER ]])
```

## Parameters

`c`

Cursor id of the cursor returning data to the variable being defined.

`position`

Position of the returned data in the cursor. The first value in the cursor is position 1.

`value`

Variable of data type `CHAR` receiving the data returned in the cursor by a prior fetch call.

`column_error`

Error number associated with the column, if any.

`actual_length`

Actual length of the data prior to any truncation.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
