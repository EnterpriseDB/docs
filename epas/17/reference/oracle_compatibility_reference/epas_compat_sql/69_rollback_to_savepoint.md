---
title: ROLLBACK TO SAVEPOINT
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/69_rollback_to_savepoint/
lastModified: 2025-11-25T20:57:39+05:30
---

# ROLLBACK TO SAVEPOINT

<div id="rollback_to_savepoint" class="registered_link"></div>

## Name

`ROLLBACK TO SAVEPOINT` — Roll back to a savepoint.

## Synopsis

```sql
ROLLBACK [ WORK ] TO [ SAVEPOINT ] <savepoint_name>
```

## Description

Roll back all commands that were executed after the savepoint was set. The savepoint remains valid and you can roll back to it again if you need to.

`ROLLBACK TO SAVEPOINT` destroys all savepoints that were established after the named savepoint.

## Parameters

`savepoint_name`

The savepoint to which to roll back.

## Notes

Specifying a savepoint name that wasn't established is an error.

`ROLLBACK TO SAVEPOINT` isn't supported in SPL programs.

## Examples

Undo the effects of the commands executed from the point when savepoint `depts` was established:

```sql
\set AUTOCOMMIT off
INSERT INTO dept VALUES (50, 'HR', 'NEW YORK');
SAVEPOINT depts;
INSERT INTO emp (empno, ename, deptno) VALUES (9001, 'JONES', 50);
INSERT INTO emp (empno, ename, deptno) VALUES (9002, 'ALICE', 50);
ROLLBACK TO SAVEPOINT depts;
```

## See also

[COMMIT](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/19_commit/#commit), [ROLLBACK](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/68_rollback/#rollback), [SAVEPOINT](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/70_savepoint/#savepoint)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
