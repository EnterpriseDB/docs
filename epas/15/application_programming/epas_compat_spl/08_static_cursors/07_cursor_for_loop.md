---
title: Using a cursor FOR loop
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/08_static_cursors/07_cursor_for_loop/
lastModified: 2025-09-02T21:32:02+05:30
---

# Using a cursor FOR loop

<div id="cursor_for_loop" class="registered_link"></div>

The programming logic required to process the result set of a cursor usually includes a statement to open the cursor, a loop construct to retrieve each row of the result set, a test for the end of the result set, and a statement to close the cursor. The _cursor FOR loop_ is a loop construct that eliminates the need to individually code these statements.

The cursor `FOR` loop opens a previously declared cursor, fetches all rows in the cursor result set, and then closes the cursor.

The cursor opened in this fashion is a holdable cursor, which means it will survive any COMMIT or ROLLBACK that occurs within the `FOR` loop.

The syntax for creating a cursor `FOR` loop is as follows:

```sql
FOR <record> IN <cursor>
LOOP
   <statements>
END LOOP;
```

Where:

`record` is an identifier assigned to an implicitly declared record with definition `cursor%ROWTYPE`.

`cursor` is the name of a previously declared cursor.

`statements` are one or more SPL statements. There must be at least one statement.

This example uses a cursor `FOR` loop:

```sql
CREATE OR REPLACE PROCEDURE cursor_example
IS
    CURSOR emp_cur_1 IS SELECT * FROM emp;
BEGIN
    DBMS_OUTPUT.PUT_LINE('EMPNO    ENAME');
    DBMS_OUTPUT.PUT_LINE('-----    -------');
    FOR v_emp_rec IN emp_cur_1 LOOP
        DBMS_OUTPUT.PUT_LINE(v_emp_rec.empno || '     ' || v_emp_rec.ename);
    END LOOP;
END;
```

The following is the output from this procedure:

```sql
EXEC cursor_example;
```

```output title="Output"
EMPNO    ENAME
-----    -------
7369     SMITH
7499     ALLEN
7521     WARD
7566     JONES
7654     MARTIN
7698     BLAKE
7782     CLARK
7788     SCOTT
7839     KING
7844     TURNER
7876     ADAMS
7900     JAMES
7902     FORD
7934     MILLER
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
