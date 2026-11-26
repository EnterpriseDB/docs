---
title: RETURN statement
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/application_programmer_reference/stored_procedural_language_reference/05_control_structures/02_return_statement/
lastModified: 2025-11-25T20:39:04+05:30
---

# RETURN statement

<div id="return_statement" class="registered_link"></div>

The `RETURN` statement terminates the current function, procedure, or anonymous block and returns control to the caller.

## Syntax

The `RETURN` statement has two forms. The first form of the `RETURN` statement terminates a procedure or function that returns `void`. The syntax of this form is:

```sql
RETURN;
```

The second form of `RETURN` returns a value to the caller. The syntax of this form is:

```sql
RETURN <expression>;
```

`expression` must evaluate to the same data type as the return type of the function.

## Example

This example uses the `RETURN` statement and returns a value to the caller:

```sql
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
