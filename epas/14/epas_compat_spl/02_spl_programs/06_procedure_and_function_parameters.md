---
title: Procedure and function parameters
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/02_spl_programs/06_procedure_and_function_parameters/
lastModified: 2023-02-14T16:10:29+05:30
---

# Procedure and function parameters

<div id="procedure_and_function_parameters" class="registered_link"></div>

An important aspect of using procedures and functions is the capability to pass data from the calling program to the procedure or function and to receive data back from the procedure or function. You do this by using _parameters_.

Declare parameters in the procedure or function definition, and enclose them in parentheses following the procedure or function name. Parameters declared in the procedure or function definition are known as _formal parameters_. When you invoke the procedure or function, the calling program supplies the actual data to use in the called program’s processing as well as the variables that receive the results of the called program’s processing. The data and variables supplied by the calling program when the procedure or function is called are referred to as the _actual parameters_.

The following is the general format of a formal parameter declaration.

```text
(<name> [ IN | OUT | IN OUT ] <data_type> [ DEFAULT <value> ])
```

- `name` is an identifier assigned to the formal parameter.
- Whether a parameter is `IN`, `OUT`, or `IN OUT` is referred to as the parameter’s _mode_. If specified, `IN` defines the parameter for receiving input data into the procedure or function. An `IN` parameter can also be initialized to a default value. If specified, `OUT` defines the parameter for returning data from the procedure or function. If specified, `IN OUT` allows the parameter to be used for both input and output. If all of `IN`, `OUT`, and `IN OUT` are omitted, then the parameter acts as if it were defined as `IN` by default.
- `data_type` defines the data type of the parameter.
- `value` is a default value assigned to an `IN` parameter in the called program if you don't specify an actual parameter in the call.

This example shows a procedure that takes parameters:

```text
CREATE OR REPLACE PROCEDURE emp_query (
    p_deptno        IN     NUMBER,
    p_empno         IN OUT NUMBER,
    p_ename         IN OUT VARCHAR2,
    p_job           OUT    VARCHAR2,
    p_hiredate      OUT    DATE,
    p_sal           OUT    NUMBER
)
IS
BEGIN
    SELECT empno, ename, job, hiredate, sal
        INTO p_empno, p_ename, p_job, p_hiredate, p_sal
        FROM emp
        WHERE deptno = p_deptno
          AND (empno = p_empno
           OR  ename = UPPER(p_ename));
END;
```

In this example, `p_deptno` is an `IN` formal parameter, `p_empno` and `p_ename` are `IN OUT` formal parameters, and `p_job, p_hiredate` and `p_sal` are `OUT` formal parameters.

> **Note**
>
> In the example, no maximum length was specified on the `VARCHAR2` parameters and no precision and scale were specified on the `NUMBER` parameters. It's illegal to specify a length, precision, scale, or other constraints on parameter declarations. These constraints are inherited from the actual parameters that are used when the procedure or function is called.

The `emp_query` procedure can be called by another program, passing it the actual parameters. This example is another SPL program that calls `emp_query`.

```text
DECLARE
    v_deptno        NUMBER(2);
    v_empno         NUMBER(4);
    v_ename         VARCHAR2(10);
    v_job           VARCHAR2(9);
    v_hiredate      DATE;
    v_sal           NUMBER;
BEGIN
    v_deptno := 30;
    v_empno  := 7900;
    v_ename  := '';
    emp_query(v_deptno, v_empno, v_ename, v_job, v_hiredate, v_sal);
    DBMS_OUTPUT.PUT_LINE('Department : ' || v_deptno);
    DBMS_OUTPUT.PUT_LINE('Employee No: ' || v_empno);
    DBMS_OUTPUT.PUT_LINE('Name       : ' || v_ename);
    DBMS_OUTPUT.PUT_LINE('Job        : ' || v_job);
    DBMS_OUTPUT.PUT_LINE('Hire Date  : ' || v_hiredate);
    DBMS_OUTPUT.PUT_LINE('Salary     : ' || v_sal);
END;
```

In this example, `v_deptno`, `v_empno`, `v_ename`, `v_job`, `v_hiredate`, and `v_sal` are the actual parameters.

The output from the example is:

```text
Department : 30
Employee No: 7900
Name       : JAMES
Job        : CLERK
Hire Date  : 03-DEC-81
Salary     : 950
```

- [Positional versus named parameter notation](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/02_spl_programs/06_procedure_and_function_parameters/01_positional_vs_named_parameter_notation/): You can use either positional or named parameter notation when passing parameters to a function or procedure. If you specify parameters using positional notation, you must list the parameters in the order that they are declared. If you specify parameters with named notation, the order of the parameters doesn't matter.
- [Parameter modes](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/02_spl_programs/06_procedure_and_function_parameters/02_parameter_modes/): A parameter has one of three possible modes
- [Using default values in parameters](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/02_spl_programs/06_procedure_and_function_parameters/03_using_default_values_in_parameters/): You can set a default value of a formal parameter by including the DEFAULT clause or using the assignment operator (:=) in the CREATE PROCEDURE or CREATE FUNCTION statement.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
