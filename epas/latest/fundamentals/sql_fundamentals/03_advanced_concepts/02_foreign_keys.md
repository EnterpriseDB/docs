---
title: Foreign keys
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/fundamentals/sql_fundamentals/03_advanced_concepts/02_foreign_keys/
lastModified: 2025-11-25T20:39:04+05:30
---

# Foreign keys

<div id="foreign_keys" class="registered_link"></div>

A _foreign key_ represents one or more than one column used to establish and enforce a link between data in two database tables for controlling data stored in the foreign key table.

Suppose you want to make sure all employees belong to a valid department, that is, you want to maintain the _referential integrity_ of your data. In simplistic database systems, you can ensure referential integrity by first looking at the `dept` table to check if a matching record exists and then inserting or rejecting the new employee record.

This approach has a number of problems and is inconvenient. EDB Postgres Advanced Server can make it easier for you.

A modified version of the `emp` table presented in [Creating a new table](https://www.enterprisedb.com/docs/epas/latest/fundamentals/sql_fundamentals/02_sql_tutorial/02_creating_a_new_table/#creating_a_new_table) is shown here with the addition of a foreign key constraint. The modified `emp` table looks like the following:

```sql
CREATE TABLE emp (
    empno           NUMBER(4) NOT NULL CONSTRAINT emp_pk PRIMARY KEY,
    ename           VARCHAR2(10),
    job             VARCHAR2(9),
    mgr             NUMBER(4),
    hiredate        DATE,
    sal             NUMBER(7,2),
    comm            NUMBER(7,2),
    deptno          NUMBER(2) CONSTRAINT emp_ref_dept_fk
                        REFERENCES dept(deptno)
);
```

If you try to issue the following `INSERT` command in the sample `emp` table, the foreign key constraint `emp_ref_dept_fk` is meant to ensure that department `50` exists in the `dept` table. Since it doesn't, the command is rejected.

```sql
INSERT INTO emp VALUES (8000,'JONES','CLERK',7902,'17-AUG-07',1200,NULL,50);

ERROR:  insert or update on table "emp" violates foreign key constraint
"emp_ref_dept_fk"
DETAIL:  Key (deptno)=(50) is not present in table "dept".
```

You can finely tune the behavior of foreign keys to your application. Making correct use of foreign keys improves the quality of your database applications. We strongly encourage you to learn more about them.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
