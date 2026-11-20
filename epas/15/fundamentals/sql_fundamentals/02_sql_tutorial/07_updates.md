---
title: Updating a table
description: Provides an example of updating a table
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/fundamentals/sql_fundamentals/02_sql_tutorial/07_updates/
lastModified: 2023-11-09T17:35:38+05:30
---

# Updating a table

<div id="updates" class="registered_link"></div>

You can change the column values of existing rows using the `UPDATE` command. For example, the following sequence of commands shows the before and after results of giving everyone who is a manager a 10% raise:

```sql
SELECT ename, sal FROM emp WHERE job = 'MANAGER';
```

```output title="Output"
 ename |   sal
-------+---------
 JONES | 2975.00
 BLAKE | 2850.00
 CLARK | 2450.00
(3 rows)
```

```sql
UPDATE emp SET sal = sal * 1.1 WHERE job = 'MANAGER';

SELECT ename, sal FROM emp WHERE job = 'MANAGER';
```

```output title="Output"
 ename |   sal
-------+---------
 JONES | 3272.50
 BLAKE | 3135.00
 CLARK | 2695.00
(3 rows)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
