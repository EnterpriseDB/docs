---
title: "Subprograms: subprocedures and subfunctions"
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/07_subprograms_subprocedures_and_subfunctions/
lastModified: 2024-11-22T12:16:04+01:00
---

# Subprograms: subprocedures and subfunctions

<div id="subprograms_subprocedures_and_subfunctions" class="registered_link"></div>

You can use the capability and functionality of SPL procedure and function programs to your advantage to build well-structured and maintainable programs by organizing the SPL code into subprocedures and subfunctions.

You can invoke the same SPL code multiple times from different locations in a relatively large SPL program by declaring subprocedures and subfunctions in the SPL program.

Subprocedures and subfunctions have the following characteristics:

- The syntax, structure, and functionality of subprocedures and subfunctions are almost identical to standalone procedures and functions. The major difference is the use of the keyword `PROCEDURE` or `FUNCTION` instead of `CREATE PROCEDURE` or `CREATE FUNCTION` to declare the subprogram.
- Subprocedures and subfunctions provide isolation for the identifiers (that is, variables, cursors, types, and other subprograms) declared within itself. That is, you can't access or alter these identifiers from the upper, parent-level SPL programs or subprograms outside of the subprocedure or subfunction. This ensures that the subprocedure and subfunction results are reliable and predictable.
- The declaration section of subprocedures and subfunctions can include its own subprocedures and subfunctions. Thus, a multi-level hierarchy of subprograms can exist in the standalone program. In the hierarchy, a subprogram can access the identifiers of upper-level parent subprograms and also invoke upper-level parent subprograms. However, the same access to identifiers and invocation can't be done for lower-level child subprograms in the hierarchy.

You can declare and invoke subprocedures and subfunctions from any of the following types of SPL programs:

- Standalone procedures and functions
- Anonymous blocks
- Triggers
- Packages
- Procedure and function methods of an object type body
- Subprocedures and subfunctions declared in any of the preceding programs

* [Creating a subprocedure](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/07_subprograms_subprocedures_and_subfunctions/01_creating_a_subprocedure/): The PROCEDURE clause specified in the declaration section defines and names a subprocedure local to that block.
* [Creating a subfunction](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/07_subprograms_subprocedures_and_subfunctions/02_creating_a_subfunction/): The FUNCTION clause specified in the declaration section defines and names a subfunction local to that block.
* [Declaring block relationships](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/07_subprograms_subprocedures_and_subfunctions/03_block_relationships/): You can declare the relationship between blocks in an SPL program. The ability to invoke subprograms and access identifiers declared in a block depends on this relationship.
* [Invoking subprograms](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/07_subprograms_subprocedures_and_subfunctions/04_invoking_subprograms/): Invoke a subprogram in the same manner as a standalone procedure or function by specifying its name and any actual parameters.
* [Using forward declarations](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/07_subprograms_subprocedures_and_subfunctions/05_using_forward_declarations/): When you want to invoke a subprogram, you must declare it in the hierarchy of blocks in the standalone program prior to where you invoke it. In other words, when scanning the SPL code from beginning to end, the subprogram declaration must appear before its invocation.
* [Overloading subprograms](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/07_subprograms_subprocedures_and_subfunctions/06_overloading_subprograms/): Generally, subprograms of the same type (subprocedure or subfunction) with the same name and same formal parameter specification can appear multiple times in the same standalone program as long as they aren't sibling blocks (that is, the subprograms aren't declared in the same local block).
* [Accessing subprogram variables](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/07_subprograms_subprocedures_and_subfunctions/07_accessing_subprogram_variables/): You can access variables declared in blocks, such as subprograms or anonymous blocks, from the executable section or the exception section of other blocks depending on their relative location.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
