---
title: Deleting a table
description: Provides an example of how to delete a table
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/fundamentals/sql_fundamentals/02_sql_tutorial/08_deletions/
lastModified: 2025-11-25T20:57:39+05:30
---

# Deleting a table

<div id="deletions" class="registered_link"></div>

You can remove rows from a table using the `DELETE` command. For example, the following sequence of commands shows the before and after results of deleting all employees in department `20`.

```sql
SELECT ename, deptno FROM emp;
```

```output title="Output"
 ename  | deptno
--------+--------
 SMITH  |     20
 ALLEN  |     30
 WARD   |     30
 JONES  |     20
 MARTIN |     30
 BLAKE  |     30
 CLARK  |     10
 SCOTT  |     20
 KING   |     10
 TURNER |     30
 ADAMS  |     20
 JAMES  |     30
 FORD   |     20
 MILLER |     10
(14 rows)
```

```sql
DELETE FROM emp WHERE deptno = 20;

SELECT ename, deptno FROM emp;
```

```output title="Output"
 ename  | deptno
--------+--------
 ALLEN  |     30
 WARD   |     30
 MARTIN |     30
 BLAKE  |     30
 CLARK  |     10
 KING   |     10
 TURNER |     30
 JAMES  |     30
 MILLER |     10
(9 rows)
```

> **Warning**
>
> Be careful when giving a `DELETE` command without a `WHERE` clause such as the following:
>
> ```sql
> DELETE FROM tablename;
> ```
>
> This statement removes all rows from the given table, leaving it completely empty. The system doesn't request confirmation before doing this.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
