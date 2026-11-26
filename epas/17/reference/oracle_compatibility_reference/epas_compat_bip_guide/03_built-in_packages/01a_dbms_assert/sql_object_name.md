---
title: SQL_OBJECT_NAME
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/01a_dbms_assert/sql_object_name/
lastModified: 2025-11-25T20:57:39+05:30
---

# SQL\_OBJECT\_NAME

The `SQL_OBJECT_NAME` function determines whether an input string is a valid SQL object accessible to the current user. An error is thrown otherwise.

The function first checks the database name, then the schema name, and then other SQL objects in the following order:

1. Table, view, materialized view, index, sequence, foreign table, partition-table, type, object type
2. Function, procedure, aggregate, routine
3. Packages
4. Synonym
5. Trigger
6. Queue, queue table
7. Event trigger

Only objects in the current database can be verified by this function. It validates names to four levels: `dbname.schema_name.object_name.object_member`. The function verifies that an actual database object exists for the first three levels. For the fourth level, `object_member`, only the syntax is verified.

For example, if the input is `table_name.column_name`, the function validates `table_name` by searching through database objects in the current search path. After finding the `table_name`, the function validates the basic syntax of `column_name` and does not check if the column actually exists. Similarly, in the case of `package_name.member_name`, after the function finds the package name in the search path, it validates only the basic syntax of `member_name`.

```sql
SQL_OBJECT_NAME(str VARCHAR2) RETURN VARCHAR2;
```

## Parameters

`str`

The input string.

## Examples

```sql
edb=# CREATE TABLE t1_dbassert (a INT);
CREATE TABLE
edb=# SELECT SYS.DBMS_ASSERT.SQL_OBJECT_NAME('t1_dbassert') FROM DUAL;
 sql_object_name 
-----------------
 t1_dbassert
(1 row)

-- The column_name is only syntax verified
edb=# SELECT dbms_assert.sql_object_name('t1_dbassert.col1');
 sql_object_name  
------------------
 t1_dbassert.col1
(1 row)

edb=# SELECT dbms_assert.sql_object_name('t1_dbassert.1col');
ERROR:  invalid object name

CREATE OR REPLACE package pkg_dbassert AS
    i_dbassert NUMBER;
    PROCEDURE proc_dbassert;
    FUNCTION func_dbassert(i INT) RETURN NUMBER;
    t1_table_dbassert t1_dbassert;
    CURSOR cur(c1 t1_dbassert.a%TYPE) IS SELECT a FROM t1_dbassert;
    TYPE trec_dbassert IS RECORD ( a INTEGER, b INTEGER );
    r trec_dbassert := NULL;
END;

edb=# SELECT DBMS_ASSERT.SQL_OBJECT_NAME('pkg_dbassert.i_dbassert') FROM DUAL;
     sql_object_name     
-------------------------
 pkg_dbassert.i_dbassert
(1 row)

edb=# SELECT DBMS_ASSERT.SQL_OBJECT_NAME('public.pkg_dbassert.i_dbassert') FROM DUAL;
        sql_object_name         
--------------------------------
 public.pkg_dbassert.i_dbassert
(1 row)

```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
