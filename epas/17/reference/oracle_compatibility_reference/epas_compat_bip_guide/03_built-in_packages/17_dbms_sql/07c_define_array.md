---
title: DEFINE_ARRAY
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/07c_define_array/
lastModified: 2025-11-25T20:57:39+05:30
---

# DEFINE\_ARRAY

The `DEFINE_ARRAY` procedure defines the collection for a column into which you want to fetch rows with a FETCH\_ROWS call. You can use this procedure to fetch multiple rows from a single SELECT statement.

When you fetch rows, they are copied into DBMS\_SQL buffers until you run a COLUMN\_VALUE call, which copies the rows into the table that was passed as an argument to the COLUMN\_VALUE call.

```sql
DEFINE_ARRAY(<c> IN NUMBER, <position> IN NUMBER, 
  <table_variable> IN { FLOAT_TABLE | BLOB_TABLE | CLOB_TABLE | VARCHAR2_TABLE | NUMBER_TABLE | TIMESTAMP_TABLE |
  INTEGER_TABLE | ROWID_TABLE | TEXT_TABLE }, <cnt> IN NUMBER, <lower_bnd> IN NUMBER);
```

## Parameters

`c`

ID of the cursor to which you want to bind an array.

`position`

Relative position of the column in the array being defined. The first column is position 1.

`table_variable`

A datatype that can be any one of the following matching pairs:

| Datatype     | Description      |
| ------------ | ---------------- |
| \<bflt\_tab> | FLOAT\_TABLE     |
| \<bl\_tab>   | BLOB\_TABLE      |
| \<cl\_tab>   | CLOB\_TABLE      |
| \<c\_tab>    | VARCHAR2\_TABLE  |
| \<n\_tab>    | NUMBER\_TABLE    |
| \<tms\_tab>  | TIMESTAMP\_TABLE |
| \<int\_tab>  | INTEGER\_TABLE   |
| \<rid\_tab>  | ROWID\_TABLE     |
| \<txt\_tab>  | TEXT\_TABLE      |

`cnt`

Number of rows to fetch. Must be a positive integer.

`lower_bnd`

Results are copied into the collection, starting at this lower bound index.

## Example

```sql
CREATE TABLE tab_test (col_int INTEGER, col_charactervarying VARCHAR(40));
INSERT into tab_test(col_int, col_charactervarying) values (10, 'user1'), (10, 'user2'), (10, 'user3'), (10, 'user4');
INSERT into tab_test(col_int, col_charactervarying) values (10, 'user1'), (10, 'user2'), (10, 'user3'), (10, 'user4');

-- DEFINE_ARRAY (used in SELECT to get multipile rows)
DECLARE
    names    DBMS_SQL.VARCHAR2_TABLE;
    dpt_id   DBMS_SQL.INTEGER_TABLE;
    c        NUMBER;
    r        NUMBER;
    id       NUMBER;
    sql_stmt VARCHAR2(32767) :=
        'SELECT col_int, col_charactervarying FROM tab_test WHERE col_int = :b1';
BEGIN
    c := DBMS_SQL.OPEN_CURSOR;
    DBMS_SQL.PARSE(c, sql_stmt, dbms_sql.native);
    id := 10;
    DBMS_SQL.BIND_VARIABLE(c, 'b1', id);
    DBMS_SQL.DEFINE_ARRAY(c, 1, dpt_id, 3, -3);
    DBMS_SQL.DEFINE_ARRAY(c, 2, names, 3, -3);
    r := DBMS_SQL.EXECUTE(c);
    LOOP
      r := DBMS_SQL.FETCH_ROWS(c);
      EXIT WHEN r = 0;
      DBMS_SQL.COLUMN_VALUE(c, 1, dpt_id);
      DBMS_SQL.COLUMN_VALUE(c, 2, names);
    END LOOP;
    DBMS_SQL.CLOSE_CURSOR(c);
    DBMS_OUTPUT.PUT_LINE('last index in table = ' || names.LAST);
    -- loop through the names and sals collections
    FOR i IN names.FIRST .. names.LAST  LOOP
      DBMS_OUTPUT.PUT_LINE(' name = ' ||names(i) || ' department_id = ' || dpt_id(i));
    END LOOP;
END;

psql:bind_array.sql:67: last index in table = 4
psql:bind_array.sql:67:  name = user1 department_id = 10
psql:bind_array.sql:67:  name = user2 department_id = 10
psql:bind_array.sql:67:  name = user3 department_id = 10
psql:bind_array.sql:67:  name = user4 department_id = 10
psql:bind_array.sql:67:  name = user1 department_id = 10
psql:bind_array.sql:67:  name = user2 department_id = 10
psql:bind_array.sql:67:  name = user3 department_id = 10
psql:bind_array.sql:67:  name = user4 department_id = 10

Here, count size is 3 so in one loop, we are printing 3 matching rows and total matching rows are 8.

so 3,3,2 (total 3 loops--one loop will fetch 3 rows at a time because count is 3), and if we don't use define_array, then loop will be 8.
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
