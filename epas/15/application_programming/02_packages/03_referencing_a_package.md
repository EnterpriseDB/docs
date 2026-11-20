---
title: Referencing a package
description: Describes how to reference the types, items, and subprograms that are declared in a package specification
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/application_programming/02_packages/03_referencing_a_package/
lastModified: 2023-11-09T17:35:38+05:30
---

# Referencing a package

To reference the types, items, and subprograms that are declared in a package specification, use the dot notation. For example:

`package_name.type_name`

`package_name.item_name`

`package_name.subprogram_name`

To invoke a function from the `emp_admin` package specification, execute the following SQL command:

```sql
SELECT emp_admin.get_dept_name(10) FROM DUAL;
```

This example invokes the `get_dept_name` function declared in the package `emp_admin`. It passes the department number as an argument to the function, which returns the name of the department. The value returned is `ACCOUNTING`, which corresponds to department number `10`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
