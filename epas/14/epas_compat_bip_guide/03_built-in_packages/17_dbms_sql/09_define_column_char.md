---
title: DEFINE_COLUMN_CHAR
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/09_define_column_char/
lastModified: 2023-02-14T16:10:29+05:30
---

# DEFINE\_COLUMN\_CHAR

The `DEFINE_COLUMN_CHAR` procedure defines a `CHAR` column or expression in the `SELECT` list to be returned and retrieved in a cursor.

```text
DEFINE_COLUMN_CHAR(<c> NUMBER, <position> NUMBER, <column>
CHAR, <column_size> NUMBER)
```

## Parameters

`c`

Cursor id of the cursor associated with the `SELECT` command.

`position`

Position of the column or expression in the `SELECT` list being defined.

`column`

A `CHAR` variable.

`column_size`

The maximum length of the returned data. Returned data exceeding `column_size` is truncated to `column_size` characters.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
