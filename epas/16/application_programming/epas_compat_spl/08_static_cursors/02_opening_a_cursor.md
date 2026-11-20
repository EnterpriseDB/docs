---
title: Opening a cursor
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/08_static_cursors/02_opening_a_cursor/
lastModified: 2024-11-22T12:16:04+01:00
---

# Opening a cursor

<div id="opening_a_cursor" class="registered_link"></div>

Before you can use a cursor to retrieve rows, you must open it using the `OPEN` statement.

```sql
OPEN <name>;
```

`name` is the identifier of a cursor that was previously declared in the declaration section of the SPL program. Don't execute the `OPEN` statement on a cursor that is already open.

This example shows an `OPEN` statement with its corresponding cursor declaration:

```sql
CREATE OR REPLACE PROCEDURE cursor_example
IS
    CURSOR emp_cur_3 IS SELECT empno, ename FROM emp WHERE deptno = 10
        ORDER BY empno;
BEGIN
    OPEN emp_cur_3;
        ...
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
