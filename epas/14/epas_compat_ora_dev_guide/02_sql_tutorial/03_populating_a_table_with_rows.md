---
title: Populating a table With rows
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/02_sql_tutorial/03_populating_a_table_with_rows/
lastModified: 2023-02-14T16:10:29+05:30
---

# Populating a table With rows

<div id="populating_a_table_with_rows" class="registered_link"></div>

Use the `INSERT` statement to populate a table with rows:

```text
INSERT INTO emp VALUES (7369,'SMITH','CLERK',7902,'17-DEC-80',800,NULL,20);
```

All data types use obvious input formats. Constants that aren't simple numeric values usually are surrounded by single quotes ('), as in the example. The `DATE` type is flexible in what it accepts. However, for this tutorial we use the unambiguous format shown here.

The syntax used so far requires you to remember the order of the columns. An alternative syntax allows you to list the columns explicitly:

```text
INSERT INTO emp(empno,ename,job,mgr,hiredate,sal,comm,deptno)
    VALUES (7499,'ALLEN','SALESMAN',7698,'20-FEB-81',1600,300,30);
```

You can list the columns in a different order if you want or even omit some columns, for example, if the commission is unknown:

```text
INSERT INTO emp(empno,ename,job,mgr,hiredate,sal,deptno)
    VALUES (7369,'SMITH','CLERK',7902,'17-DEC-80',800,20);
```

Many developers consider explicitly listing the columns better style than relying on the order implicitly.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
