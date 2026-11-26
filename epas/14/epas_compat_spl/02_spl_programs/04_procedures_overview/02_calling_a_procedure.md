---
title: Calling a procedure
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/02_spl_programs/04_procedures_overview/02_calling_a_procedure/
lastModified: 2023-02-14T16:10:29+05:30
---

# Calling a procedure

<div id="calling_a_procedure" class="registered_link"></div>

You can invoke a procedure from another SPL program by specifying the procedure name followed by any parameters and a semicolon:

```text
<name> [ ([ <parameters> ]) ];
```

Where:

`name` is the identifier of the procedure.

`parameters` is a list of parameters.

> **Note**
>
> - If there are no parameters to pass, you can call the procedure with an empty parameter list, or you can omit the parentheses.
>
> - The syntax for calling a procedure is the same as in the preceding syntax diagram when executing it with the `EXEC` command in PSQL or EDB\*Plus. See [Database Compatibility: SQL](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/63_exec/) for information about the `EXEC` command.

This example calls the procedure from an anonymous block:

```text
BEGIN
   simple_procedure;
END;

That's all folks!
```

> **Note**
>
> Each application has its own way of calling a procedure. For example, a Java application uses the application programming interface JDBC.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
