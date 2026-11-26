---
title: Declaring a cursor
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/08_static_cursors/01_declaring_a_cursor/
lastModified: 2023-02-14T16:10:29+05:30
---

# Declaring a cursor

<div id="declaring_a_cursor" class="registered_link"></div>

Before you can use a cursor, you must first declare it in the declaration section of the SPL program. A cursor declaration appears as follows:

```text
CURSOR <name> IS <query>;
```

Where:

`name` is an identifier used to reference the cursor and its result set later in the program.

`query` is a SQL `SELECT` command that determines the result set retrievable by the cursor.

> **Note**
>
> An extension of this syntax allows the use of parameters. For details, see [Parameterized cursors](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/08_static_cursors/08_parameterized_cursors/#parameterized_cursors).

This example shows some cursor declarations:

```text
CREATE OR REPLACE PROCEDURE cursor_example
IS
    CURSOR emp_cur_1 IS SELECT * FROM emp;
    CURSOR emp_cur_2 IS SELECT empno, ename FROM emp;
    CURSOR emp_cur_3 IS SELECT empno, ename FROM emp WHERE deptno = 10
        ORDER BY empno;
BEGIN
    ...
END;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
