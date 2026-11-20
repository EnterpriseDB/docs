---
title: RETURN statement
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/05_control_structures/02_return_statement/
lastModified: 2023-02-14T16:10:29+05:30
---

# RETURN statement

<div id="return_statement" class="registered_link"></div>

The `RETURN` statement terminates the current function, procedure, or anonymous block and returns control to the caller.

The `RETURN` statement has two forms. The first form of the `RETURN` statement terminates a procedure or function that returns `void`. The syntax of this form is:

```text
RETURN;
```

The second form of `RETURN` returns a value to the caller. The syntax of this form is:

```text
RETURN <expression>;
```

`expression` must evaluate to the same data type as the return type of the function.

This example uses the `RETURN` statement and returns a value to the caller:

```text
CREATE OR REPLACE FUNCTION emp_comp (
    p_sal           NUMBER,
    p_comm          NUMBER
) RETURN NUMBER
IS
BEGIN
    RETURN (p_sal + NVL(p_comm, 0)) * 24;
END emp_comp;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
