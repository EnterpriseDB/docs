---
title: RAISE_APPLICATION_ERROR
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/application_programmer_reference/stored_procedural_language_reference/05_control_structures/10_raise_application_error/
lastModified: 2025-11-25T20:39:04+05:30
---

# RAISE\_APPLICATION\_ERROR

<div id="raise_application_error" class="registered_link"></div>

The procedure `RAISE_APPLICATION_ERROR` allows you to abort processing in an SPL program by causing an exception. The exception is handled in the same manner as described in [Exception handling](https://www.enterprisedb.com/docs/epas/latest/reference/application_programmer_reference/stored_procedural_language_reference/05_control_structures/07_exception_handling/#exception_handling). In addition, the `RAISE_APPLICATION_ERROR` procedure makes a user-defined code and error message available to the program, which you can then use to identify the exception.

## Syntax

```sql
RAISE_APPLICATION_ERROR(<error_number>, <message>);
```

Where:

`error_number` is an integer value or expression returned in a variable named `SQLCODE` when the procedure is executed. The value is between `‑20000` and `-20999`.

`message` is a string literal or expression returned in a variable named `SQLERRM`.

For more information on the `SQLCODE` and `SQLERRM` variables, see [Errors and messages](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/12_working_with_collections/05_errors_and_messages/).

## Example

This example uses the `RAISE_APPLICATION_ERROR` procedure to display a different code and message depending on the information missing from an employee:

```sql
CREATE OR REPLACE PROCEDURE verify_emp (
    p_empno         NUMBER
)
IS
    v_ename         emp.ename%TYPE;
    v_job           emp.job%TYPE;
    v_mgr           emp.mgr%TYPE;
    v_hiredate      emp.hiredate%TYPE;
BEGIN
    SELECT ename, job, mgr, hiredate
        INTO v_ename, v_job, v_mgr, v_hiredate FROM emp
        WHERE empno = p_empno;
    IF v_ename IS NULL THEN
        RAISE_APPLICATION_ERROR(-20010, 'No name for ' || p_empno);
    END IF;
    IF v_job IS NULL THEN
        RAISE_APPLICATION_ERROR(-20020, 'No job for' || p_empno);
    END IF;
    IF v_mgr IS NULL THEN
        RAISE_APPLICATION_ERROR(-20030, 'No manager for ' || p_empno);
    END IF;
    IF v_hiredate IS NULL THEN
        RAISE_APPLICATION_ERROR(-20040, 'No hire date for ' || p_empno);
    END IF;
    DBMS_OUTPUT.PUT_LINE('Employee ' || p_empno ||
        ' validated without errors');
EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('SQLCODE: ' || SQLCODE);
        DBMS_OUTPUT.PUT_LINE('SQLERRM: ' || SQLERRM);
END;
```

The following shows the output in a case where the manager number is missing from an employee record:

```sql
EXEC verify_emp(7839);
```

```output title="Output"
SQLCODE: -20030
SQLERRM: EDB-20030: No manager for 7839
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
