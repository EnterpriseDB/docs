---
title: Types of SPL programs
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/
lastModified: 2024-11-22T12:16:04+01:00
---

# Types of SPL programs

<div id="spl_programs" class="registered_link"></div>

SPL is a procedural, block-structured language. You can create four different types of programs using SPL: _procedures_, _functions_, _triggers_, and _packages_.

In addition, you can use SPL to create subprograms. A _subprogram_ refers to a _subprocedure_ or a _subfunction_. These are nearly identical in appearance to procedures and functions. They differ in that procedures and functions are _standalone programs_. They are stored individually in the database, and you can invoke them from other SPL programs or from PSQL. You can invoke subprograms only from the standalone program where they were created.

- [SPL block structure overview](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/02_spl_block_structure/): Regardless of whether the program is a procedure, function, subprogram, or trigger, an SPL program has the same block structure. A block consists of up to three sections: an optional declaration section, a mandatory executable section, and an optional exception section. Minimally, a block has an executable section that consists of one or more SPL statements between the keywords BEGIN and END.
- [Anonymous blocks](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/03_anonymous_blocks/): You typically write blocks as part of a procedure, function, subprogram, or trigger. You name procedure, function, and trigger programs and store them in the database if you want to reuse them.
- [Procedures overview](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/04_procedures_overview/): Procedures are standalone SPL programs that you invoke or call as an individual SPL program statement. When called, procedures can optionally receive values from the caller in the form of input parameters. They can optionally return values to the caller in the form of output parameters.
- [Functions overview](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/05_functions_overview/): Functions are standalone SPL programs that are invoked as expressions. When evaluated, a function returns a value that's substituted in the expression in which the function is embedded. Functions can optionally take values from the calling program in the form of input parameters.
- [Procedure and function parameters](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/06_procedure_and_function_parameters/): An important aspect of using procedures and functions is the capability to pass data from the calling program to the procedure or function and to receive data back from the procedure or function. You do this by using parameters.
- [Subprograms: subprocedures and subfunctions](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/07_subprograms_subprocedures_and_subfunctions/): You can use the capability and functionality of SPL procedure and function programs to your advantage to build well-structured and maintainable programs by organizing the SPL code into subprocedures and subfunctions.
- [Compilation errors in procedures and functions](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/08_compilation_errors_in_procedures_and_functions/): When the EDB Postgres Advanced Server parsers compile a procedure or function, they confirm that both the CREATE statement and the program body (the portion of the program that follows the AS keyword) conform to the grammar rules for SPL and SQL constructs. By default, the server stops compiling if a parser detects an error. The parsers detect syntax errors in expressions, but they don't detect semantic errors. Semantic errors include an expression referencing a nonexistent column, table, or function, or a value of incorrect type.
- [Program security](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/09_program_security/): You can control the security over whether a user can execute an SPL program. You can also control the database objects an SPL program can access for any given user executing the program. These are controlled by the following:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
