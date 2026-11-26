---
title: Procedure and function parameters
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/02_spl_programs/06_procedure_and_function_parameters/
lastModified: 2025-11-25T20:39:04+05:30
---

# Procedure and function parameters

<div id="procedure_and_function_parameters" class="registered_link"></div>

An important aspect of using procedures and functions is the capability to pass data from the calling program to the procedure or function and to receive data back from the procedure or function. You do this by using _parameters_.

- [Declaring parameters](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/02_spl_programs/06_procedure_and_function_parameters/declaring_parameters/): Declare parameters in the procedure or function definition, and enclose them in parentheses following the procedure or function name. Parameters declared in the procedure or function definition are known as formal parameters. When you invoke the procedure or function, the calling program supplies the actual data to use in the called program’s processing as well as the variables that receive the results of the called program’s processing. The data and variables supplied by the calling program when the procedure or function is called are referred to as the actual parameters.
- [Positional versus named parameter notation](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/02_spl_programs/06_procedure_and_function_parameters/01_positional_vs_named_parameter_notation/): You can use either positional or named parameter notation when passing parameters to a function or procedure.
- [Parameter modes](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/02_spl_programs/06_procedure_and_function_parameters/02_parameter_modes/): A parameter has one of three possible modes
- [Using default values in parameters](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/02_spl_programs/06_procedure_and_function_parameters/03_using_default_values_in_parameters/): You can set a default value of a formal parameter by including the DEFAULT clause or using the assignment operator (:=) in the CREATE PROCEDURE or CREATE FUNCTION statement.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
