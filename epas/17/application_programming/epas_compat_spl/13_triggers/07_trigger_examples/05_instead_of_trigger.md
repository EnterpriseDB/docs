---
title: INSTEAD OF trigger
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_spl/13_triggers/07_trigger_examples/05_instead_of_trigger/
lastModified: 2025-11-25T20:57:39+05:30
---

# INSTEAD OF trigger

<div id="instead_of_trigger" class="registered_link"></div>

This example shows an `INSTEAD OF` trigger for inserting a new employee row into the `emp_vw` view. The `CREATE VIEW` statement creates the `emp_vw` view by joining the two tables. The trigger adds the corresponding new rows into the `emp` and `dept` tables, respectively, for a specific employee.

```sql
CREATE VIEW emp_vw AS SELECT * FROM emp e JOIN dept d USING(deptno);
CREATE VIEW

CREATE OR REPLACE TRIGGER empvw_instead_of_trig
    INSTEAD OF INSERT ON emp_vw
    FOR EACH ROW
DECLARE
    v_empno         emp.empno%TYPE;
    v_ename         emp.ename%TYPE;
    v_deptno        emp.deptno%TYPE;
    v_dname         dept.dname%TYPE;
    v_loc           dept.loc%TYPE;
    v_action        VARCHAR2(7);
BEGIN
    v_empno     := :NEW.empno;
    v_ename     := :New.ename;
    v_deptno    := :NEW.deptno;
    v_dname     := :NEW.dname;
    v_loc       := :NEW.loc;
     INSERT INTO emp(empno, ename, deptno) VALUES(v_empno, v_ename, v_deptno);
     INSERT INTO dept(deptno, dname, loc) VALUES(v_deptno, v_dname, v_loc);
END;
CREATE TRIGGER
```

Next, insert the values into the `emp_vw` view. The insert action inserts a new row and produces the following output:

```sql
INSERT INTO emp_vw (empno, ename, deptno, dname, loc ) VALUES(1234, 'ASHTON', 50, 'IT', 'NEW JERSEY');
```

```output title="Output"
INSERT 0 1
```

```sql
SELECT empno, ename, deptno FROM emp  WHERE deptno = 50;
```

```output title="Output"
 empno | ename  | deptno
-------+--------+--------
  1234 | ASHTON |     50
(1 row)
```

```sql
SELECT * FROM dept  WHERE deptno = 50;
```

```output title="Output"
 deptno | dname |    loc
--------+-------+------------
     50 | IT    | NEW JERSEY
(1 row)
```

Similarly, if you specify an `UPDATE` or `DELETE` statement, the trigger performs the appropriate actions for `UPDATE` or `DELETE` events.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
