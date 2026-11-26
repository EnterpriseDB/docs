---
title: Multidimensional analysis
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/fundamentals/sql_fundamentals/03_advanced_concepts/06_multidimensional_analysis/
lastModified: 2025-11-25T20:39:04+05:30
---

# Multidimensional analysis

<div id="multidimensional_analysis" class="registered_link"></div>

_Multidimensional analysis_ refers to the process of examining data using various combinations of dimensions. _Dimensions_ are categories used to classify data such as time, geography, a company’s departments, product lines, and so forth. This process is commonly used in data warehousing applications. The results associated with a particular set of dimensions are called _facts_. Facts are typically figures associated with product sales, profits, volumes, counts, and so on.

To obtain these facts according to a set of dimensions in a relational database system, you typically use _SQL aggregation_. SQL aggregation basically means data is grouped according to certain criteria (dimensions), and the result set consists of aggregates of facts, such as counts, sums, and averages of the data in each group.

## Aggregating results

The `GROUP BY` clause of the SQL `SELECT` command supports the following extensions that simplify the process of producing aggregate results:

- `ROLLUP` extension
- `CUBE` extension
- `GROUPING SETS` extension

In addition, you can use the `GROUPING` function and the `GROUPING_ID` function in the `SELECT` list or the `HAVING` clause to aid with the interpretation of the results when you use these extensions.

> **Note**
>
> The sample `dept` and `emp` tables are used extensively in this discussion to provide usage examples. The following changes were applied to these tables to provide more informative results:

```sql
UPDATE dept SET loc = 'BOSTON' WHERE deptno = 20;
INSERT INTO emp (empno,ename,job,deptno) VALUES (9001,'SMITH','CLERK',40);
INSERT INTO emp (empno,ename,job,deptno) VALUES (9002,'JONES','ANALYST',40);
INSERT INTO emp (empno,ename,job,deptno) VALUES (9003,'ROGERS','MANAGER',40);
```

The following rows from a join of the `emp` and `dept` tables are used:

```sql
SELECT loc, dname, job, empno FROM emp e, dept d
WHERE e.deptno = d.deptno
ORDER BY 1, 2, 3, 4;
```

```output title="Output"
   loc    |   dname    |    job    | empno
----------+------------+-----------+-------
 BOSTON   | OPERATIONS | ANALYST   |  9002
 BOSTON   | OPERATIONS | CLERK     |  9001
 BOSTON   | OPERATIONS | MANAGER   |  9003
 BOSTON   | RESEARCH   | ANALYST   |  7788
 BOSTON   | RESEARCH   | ANALYST   |  7902
 BOSTON   | RESEARCH   | CLERK     |  7369
 BOSTON   | RESEARCH   | CLERK     |  7876
 BOSTON   | RESEARCH   | MANAGER   |  7566
 CHICAGO  | SALES      | CLERK     |  7900
 CHICAGO  | SALES      | MANAGER   |  7698
 CHICAGO  | SALES      | SALESMAN  |  7499
 CHICAGO  | SALES      | SALESMAN  |  7521
 CHICAGO  | SALES      | SALESMAN  |  7654
 CHICAGO  | SALES      | SALESMAN  |  7844
 NEW YORK | ACCOUNTING | CLERK     |  7934
 NEW YORK | ACCOUNTING | MANAGER   |  7782
 NEW YORK | ACCOUNTING | PRESIDENT |  7839
(17 rows)
```

The `loc`, `dname`, and `job` columns are used for the dimensions of the SQL aggregations used in the examples. The resulting facts of the aggregations are the number of employees obtained by using the `COUNT(*)` function.

## Aggregation example

A basic query grouping the `loc`, `dname`, and `job` columns is given by the following:

```sql
SELECT loc, dname, job, COUNT(*) AS "employees" FROM emp e, dept d
WHERE e.deptno = d.deptno
GROUP BY loc, dname, job
ORDER BY 1, 2, 3;
```

The rows of this result set using the basic `GROUP BY` clause without extensions are referred to as the _base aggregate_ rows.

```sql
__OUTPUT__
loc      |   dname    |    job    | employees
---------+------------+-----------+-----------
BOSTON   | OPERATIONS | ANALYST   |         1
BOSTON   | OPERATIONS | CLERK     |         1
BOSTON   | OPERATIONS | MANAGER   |         1
BOSTON   | RESEARCH   | ANALYST   |         2
BOSTON   | RESEARCH   | CLERK     |         2
BOSTON   | RESEARCH   | MANAGER   |         1
CHICAGO  | SALES      | CLERK     |         1
CHICAGO  | SALES      | MANAGER   |         1
CHICAGO  | SALES      | SALESMAN  |         4
NEW YORK | ACCOUNTING | CLERK     |         1
NEW YORK | ACCOUNTING | MANAGER   |         1
NEW YORK | ACCOUNTING | PRESIDENT |         1
(12 rows)
```

## Useful extensions

The `ROLLUP` and `CUBE` extensions add to the base aggregate rows by providing additional levels of subtotals to the result set.

The `GROUPING SETS` extension lets you combine different types of groupings into a single result set.

The `GROUPING` and `GROUPING_ID` functions help you to interpret the result set.

- [ROLLUP extension](https://www.enterprisedb.com/docs/epas/latest/fundamentals/sql_fundamentals/03_advanced_concepts/06_multidimensional_analysis/01_rollup_extension/): The ROLLUP extension produces a hierarchical set of groups with subtotals for each hierarchical group as well as a grand total. The order of the hierarchy is determined by the order of the expressions given in the ROLLUP expression list. The top of the hierarchy is the left-most item in the list. Each successive item proceeding to the right moves down the hierarchy. The right-most item is at the lowest level.
- [CUBE extension](https://www.enterprisedb.com/docs/epas/latest/fundamentals/sql_fundamentals/03_advanced_concepts/06_multidimensional_analysis/02_cube_extension/): The CUBE extension is similar to the ROLLUP extension. However, ROLLUP produces groupings and results in a hierarchy based on a left-to-right listing of items in the ROLLUP expression list. A CUBE produces groupings and subtotals based on every permutation of all items in the CUBE expression list. Thus, the result set contains more rows than a ROLLUP performed on the same expression list.
- [GROUPING SETS extension](https://www.enterprisedb.com/docs/epas/latest/fundamentals/sql_fundamentals/03_advanced_concepts/06_multidimensional_analysis/03_grouping_sets_extension/): The use of the GROUPING SETS extension in the GROUP BY clause provides a means to produce one result set that's the concatenation of multiple results sets based on different groupings. In other words, a UNION ALL operation is performed combining the result sets of multiple groupings into one result set.
- [GROUPING function](https://www.enterprisedb.com/docs/epas/latest/fundamentals/sql_fundamentals/03_advanced_concepts/06_multidimensional_analysis/04_grouping_function/): When using the ROLLUP, CUBE, or GROUPING SETS extensions to the GROUP BY clause, it can sometimes be difficult to differentiate between the various levels of subtotals generated by the extensions as well as the base aggregate rows in the result set. The GROUPING function provides a means of making this distinction.
- [GROUPING\_ID function](https://www.enterprisedb.com/docs/epas/latest/fundamentals/sql_fundamentals/03_advanced_concepts/06_multidimensional_analysis/05_grouping_id_function/): The GROUPING\_ID function provides a simplification of the GROUPING function to determine the subtotal level of a row in the result set from a ROLLBACK, CUBE, or GROUPING SETS extension.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
