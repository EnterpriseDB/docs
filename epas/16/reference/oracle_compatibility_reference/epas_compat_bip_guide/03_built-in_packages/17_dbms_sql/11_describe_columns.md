---
title: DESCRIBE_COLUMNS
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/11_describe_columns/
lastModified: 2024-11-22T12:16:04+01:00
---

# DESCRIBE\_COLUMNS

The `DESCRIBE_COLUMNS` procedure describes the columns returned by a cursor.

```sql
DESCRIBE_COLUMNS(<c> NUMBER, <col_cnt> OUT NUMBER, <desc_t> OUT
  DESC_TAB);
```

## Parameters

`c`

The cursor ID of the cursor.

`col_cnt`

The number of columns in the cursor result set.

`desc_tab`

The table that contains a description of each column returned by the cursor. The descriptions are of type `DESC_REC` and contain the following values:

| Column name           | Type            |
| --------------------- | --------------- |
| `col_type`            | `INTEGER`       |
| `col_max_len`         | `INTEGER`       |
| `col_name`            | `VARCHAR2(128)` |
| `col_name_len`        | `INTEGER`       |
| `col_schema_name`     | `VARCHAR2(128)` |
| `col_schema_name_len` | `INTEGER`       |
| `col_precision`       | `INTEGER`       |
| `col_scale`           | `INTEGER`       |
| `col_charsetid`       | `INTEGER`       |
| `col_charsetform`     | `INTEGER`       |
| `col_null_ok`         | `BOOLEAN`       |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
