---
title: DBMS_SQL
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/
lastModified: 2025-11-25T20:57:39+05:30
---

# DBMS\_SQL

The `DBMS_SQL` package provides an application interface compatible with Oracle databases to the EDB dynamic SQL functionality. With `DBMS_SQL` you can construct queries and other commands at runtime rather than when you write the application. EDB Postgres Advanced Server offers native support for dynamic SQL. `DBMS_SQL` provides a way to use dynamic SQL in a way that's compatible with Oracle databases without modifying your application.

`DBMS_SQL` assumes the privileges of the current user when executing dynamic SQL statements.

EDB Postgres Advanced Server's implementation of `DBMS_SQL` is a partial implementation when compared to Oracle's version. Only those functions and procedures listed in the table are supported.

| Function/procedure                                                                      | Function or procedure | Return type      | Description                                                            |
| --------------------------------------------------------------------------------------- | --------------------- | ---------------- | ---------------------------------------------------------------------- |
| `BIND_ARRAY(c IN, name IN, table_variable IN [index1 IN, index2 IN])`                   | Procedure             | n/a              | Binds a value or set of values to a variable.                          |
| `BIND_VARIABLE(c, name, value [, out_value_size ])`                                     | Procedure             | n/a              | Bind a value to a variable.                                            |
| `BIND_VARIABLE_CHAR(c, name, value [, out_value_size ])`                                | Procedure             | n/a              | Bind a `CHAR` value to a variable.                                     |
| `BIND_VARIABLE_RAW(c, name, value [, out_value_size ])`                                 | Procedure             | n/a              | Bind a `RAW` value to a variable.                                      |
| `CLOSE_CURSOR(c IN OUT)`                                                                | Procedure             | n/a              | Close a cursor.                                                        |
| `COLUMN_VALUE(c, position, value OUT [, column_error OUT [, actual_length OUT ]])`      | Procedure             | n/a              | Return a column value into a variable.                                 |
| `COLUMN_VALUE_CHAR(c, position, value OUT [, column_error OUT [, actual_length OUT ]])` | Procedure             | n/a              | Return a `CHAR` column value into a variable.                          |
| `COLUMN_VALUE_RAW(c, position, value OUT [, column_error OUT [, actual_length OUT ]])`  | Procedure             | n/a              | Return a `RAW` column value into a variable.                           |
| `COLUMN_VALUE_LONG(c, position, length, offset, value OUT, value_length OUT)`           | Procedure             | n/a              | Return a part of the `LONG` column value into a variable.              |
| `COLUMN_VALUE_ROWID(c, position, value OUT [ column_error OUT [, actual_length OUT ]])` | Procedure             | n/a              | Return a `ROWID` column in a cursor.                                   |
| `DEFINE_ARRAY(c IN, position IN, table_variable IN, cnt IN, lower_bnd IN )`             | Procedure             | n/a              | Define collection for column into which to fetch rows.                 |
| `DEFINE_COLUMN(c, position, column [, column_size ])`                                   | Procedure             | n/a              | Define a column in the `SELECT` list.                                  |
| `DEFINE_COLUMN_CHAR(c, position, column, column_size)`                                  | Procedure             | n/a              | Define a `CHAR` column in the `SELECT` list.                           |
| `DEFINE_COLUMN_RAW(c, position, column, column_size)`                                   | Procedure             | n/a              | Define a `RAW` column in the `SELECT` list.                            |
| `DEFINE_COLUMN_LONG(c, position)`                                                       | Procedure             | n/a              | Define a `LONG` column in the `SELECT` list.                           |
| `DEFINE_COLUMN_ROWID(c IN, position IN, column IN)`                                     | Procedure             | n/a              | Define a `ROWID` column in the `SELECT` list.                          |
| `DESCRIBE_COLUMNS(c IN, col_cnt OUT, desc_t OUT, DESC_TAB)`                             | Procedure             | n/a              | Define columns to hold a cursor result set.                            |
| `DESCRIBE_COLUMNS2(c IN, col_cnt OUT, desc_t OUT, DESC_TAB)`                            | Procedure             | n/a              | Define columns to hold a cursor result set.                            |
| `DESCRIBE_COLUMNS3(c IN, col_cnt OUT, desc_t OUT, DESC_TAB)`                            | Procedure             | n/a              | Define columns to hold a cursor result set.                            |
| `EXECUTE(c)`                                                                            | Function              | `INTEGER`        | Execute a cursor.                                                      |
| `EXECUTE_AND_FETCH(c [, exact ])`                                                       | Function              | `INTEGER`        | Execute a cursor and fetch a single row.                               |
| `FETCH_ROWS(c)`                                                                         | Function              | `INTEGER`        | Fetch rows from the cursor.                                            |
| `IS_OPEN(c)`                                                                            | Function              | `BOOLEAN`        | Check if a cursor is open.                                             |
| `LAST_ROW_COUNT`                                                                        | Function              | `INTEGER`        | Return cumulative number of rows fetched.                              |
| `LAST_ERROR_POSITION`                                                                   | Function              | `INTEGER`        | Return byte offset in the SQL statement text where the error occurred. |
| `OPEN_CURSOR`                                                                           | Function              | `INTEGER`        | Open a cursor.                                                         |
| `PARSE(c, statement, language_flag)`                                                    | Procedure             | n/a              | Parse a statement.                                                     |
| `TO_CURSOR_NUMBER (rc IN OUT )`                                                         | Function              | `INTEGER`        | Transform a ref cursor into a SQL cursor number.                       |
| `TO_REFCURSOR (cursor_number IN OUT)`                                                   | Function              | `SYS_REFCURSOR ` | Transform an open cursor into a REF CURSOR.                            |
| `VARIABLE_VALUE`                                                                        |                       |                  | Not supported in EPAS                                                  |

The following table lists the public variables available in the `DBMS_SQL` package.

| Public variables | Data type | Value | Description                                                                               |
| ---------------- | --------- | ----- | ----------------------------------------------------------------------------------------- |
| `native`         | `INTEGER` | `1`   | Provided for compatibility with Oracle syntax. See `DBMS_SQL.PARSE` for more information. |
| `V6`             | `INTEGER` | `2`   | Provided for compatibility with Oracle syntax. See `DBMS_SQL.PARSE` for more information. |
| `V7`             | `INTEGER` | `3`   | Provided for compatibility with Oracle syntax. See `DBMS_SQL.PARSE` for more information  |

- [BIND\_ARRAY](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/001_bind_array/): The BIND\_ARRAY procedure binds a value or set of values to a variable in a cursor, based on the name of the variable.
- [BIND\_VARIABLE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/01_bind_variable/): The BIND\_VARIABLE procedure associates a value with an IN or IN OUT bind variable in a SQL command.
- [BIND\_VARIABLE\_CHAR](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/02_bind_variable_char/): The BINDVARIABLECHAR procedure associates a CHAR value with an IN or IN OUT bind variable in a SQL command.
- [BIND\_VARIABLE\_RAW](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/03_bind_variable_raw/): The BINDVARIABLERAW procedure associates a RAW value with an IN or IN OUT bind variable in a SQL command.
- [CLOSE\_CURSOR](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/04_close_cursor/): The CLOSE\_CURSOR procedure closes an open cursor. The resources allocated to the cursor are released and you can no longer use it.
- [COLUMN\_VALUE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/05_column_value/): The COLUMN\_VALUE procedure defines a variable to receive a value from a cursor.
- [COLUMN\_VALUE\_CHAR](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/06_column_value_char/): The COLUMNVALUECHAR procedure defines a variable to receive a CHAR value from a cursor.
- [COLUMN\_VALUE\_RAW](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/07_column_value_raw/): The COLUMNVALUERAW procedure defines a variable to receive a RAW value from a cursor.
- [COLUMN\_VALUE\_LONG](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/07a_column_value_long/): The COLUMNVALUELONG procedure gets part of a value of a LONG column to be returned and retrieved in a cursor.
- [COLUMN\_VALUE\_ROWID](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/07b_column_value_rowid/): The COLUMNVALUEROWID procedure defines a column of the type ROWID to be returned and retrieved in a cursor.
- [DEFINE\_ARRAY](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/07c_define_array/): The DEFINEARRAY procedure defines the collection for a column into which you want to fetch rows with a FETCHROWS call. You can use this procedure to fetch multiple rows from a single SELECT statement.
- [DEFINE\_COLUMN](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/08_define_column/): The DEFINE\_COLUMN procedure defines a column or expression in the SELECT list to be returned and retrieved in a cursor.
- [DEFINE\_COLUMN\_CHAR](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/09_define_column_char/): The DEFINECOLUMNCHAR procedure defines a CHAR column or expression in the SELECT list to be returned and retrieved in a cursor.
- [DEFINE\_COLUMN\_RAW](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/10_define_column_raw/): The DEFINECOLUMNRAW procedure defines a RAW column or expression in the SELECT list to be returned and retrieved in a cursor.
- [DEFINE\_COLUMN\_LONG](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/10a_define_column_long/): The DEFINECOLUMNLONG procedure defines a column of the type LONG in the SELECT list to be returned and retrieved in a cursor.
- [DEFINE\_COLUMN\_ROWID](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/10b_define_column_rowid/): The DEFINECOLUMNROWID procedure defines a column of the type ROWID in the SELECT list to be returned and retrieved in a cursor.
- [DESCRIBE\_COLUMNS](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/11_describe_columns/): The DESCRIBE\_COLUMNS procedure describes the columns returned by a cursor.
- [DESCRIBE\_COLUMNS2](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/11a_describe_columns2/): The DESCRIBECOLUMNS2 procedure describes specified columns returned by a cursor. This procedure provides an alternative to DESCRIBECOLUMN.
- [DESCRIBE\_COLUMNS3](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/11b_describe_columns3/): The DESCRIBECOLUMNS3 procedure describes specified columns returned by a cursor. This procedure provides an alternative to DESCRIBECOLUMN.
- [EXECUTE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/12_execute/): The EXECUTE function executes a parsed SQL command or SPL block.
- [EXECUTE\_AND\_FETCH](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/13_execute_and_fetch/): Function EXECUTEANDFETCH executes a parsed SELECT command and fetches one row.
- [FETCH\_ROWS](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/14_fetch_rows/): The FETCH\_ROWS function retrieves a row from a cursor.
- [IS\_OPEN](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/15_is_open/): The IS\_OPEN function tests whether the given cursor is open.
- [LAST\_ROW\_COUNT](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/16_last_row_count/): The LASTROWCOUNT function returns the number of rows that were currently fetched.
- [OPEN\_CURSOR](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/17_open_cursor/): The OPEN\_CURSOR function creates a cursor. A cursor must be used to parse and execute any dynamic SQL statement. Once a cursor is open, you can reuse it with the same or different SQL statements. You don't have to close the cursor and reopen it to reuse it.
- [PARSE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/18_parse/): The PARSE procedure parses a SQL command or SPL block. If the SQL command is a DDL command, it executes immediately and doesn't require that you run the EXECUTE function.
- [TO\_CURSOR\_NUMBER](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/19_to_cursor_number/): The TOCURSORNUMBER function transforms a ref cursor into a SQL cursor number.
- [TO\_REFCURSOR](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/17_dbms_sql/20_to_refcursor/): The TO\_REFCURSOR function transforms an open cursor into a REF CURSOR for use in SQL statements. This program is only used with SELECT cursors.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
