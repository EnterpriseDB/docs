---
title: Declaring a cursor
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_spl/08_static_cursors/01_declaring_a_cursor/
lastModified: 2025-11-25T20:57:39+05:30
---

# Declaring a cursor

<div id="declaring_a_cursor" class="registered_link"></div>

Before you can use a cursor, you must first declare it in the declaration section of the SPL program. A cursor declaration appears as follows:

```sql
CURSOR <name> IS <query>;
```

Where:

- `name` is an identifier used to reference the cursor and its result set later in the program.
- `query` is a SQL `SELECT` command that determines the result set retrievable by the cursor.

> **Note**
>
> An extension of this syntax allows the use of parameters. For details, see [Parameterized cursors](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_spl/08_static_cursors/08_parameterized_cursors/#parameterized_cursors).

This example shows some cursor declarations:

```sql
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
