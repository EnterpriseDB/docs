---
title: TO_CURSOR_NUMBER
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/19_to_cursor_number/
lastModified: 2024-11-22T12:16:04+01:00
---

# TO\_CURSOR\_NUMBER

The `TO_CURSOR_NUMBER` function transforms a ref cursor into a SQL cursor number.

This function is useful to retrieve the metadata (columns, column types, and so forth) from a ref cursor, when you have a SYS\_REFCURSOR variable with an unknown return structure.

```sql
TO_CURSOR_NUMBER (<rc> IN OUT SYS_REFCURSOR)
    RETURN INTEGER;
```

## Parameters

`rc`

The ref cursor to be transformed into a cursor number.

## Examples

```sql
DECLARE
    cur1        SYS_REFCURSOR;
    cur_id      INTEGER;
    tbl_desc    test_tbl%ROWTYPE;
    totcols     INTEGER;
    ret         INTEGER;
    rowcnt      NUMBER;
    col1_data   VARCHAR(30);
    col2_data   VARCHAR(30);
BEGIN
    OPEN cur1 FOR 'SELECT * FROM test_tbl_tbl';
    cur_id:= dbms_sql.to_cursor_number(cur1);

    dbms_sql.define_column(cur_id, 1, tbl_desc.col1);
    dbms_sql.define_column(cur_id, 2, tbl_desc.col2);

    LOOP
      ret := dbms_sql.FETCH_ROWS(cur_id);
      EXIT WHEN ret = 0;
      dbms_sql.column_value(cur_id, 1, tbl_desc.col1);
      dbms_sql.column_value(cur_id, 2, tbl_desc.col2);
      dbms_output.put_line('Col1: ' || tbl_desc.col1 || ' Col2: ' || tbl_desc.col2);
    END LOOP;
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
