---
title: Functions overview
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/05_functions_overview/
lastModified: 2024-11-22T12:16:04+01:00
---

# Functions overview

<div id="functions_overview" class="registered_link"></div>

Functions are standalone SPL programs that are invoked as expressions. When evaluated, a function returns a value that's substituted in the expression in which the function is embedded. Functions can optionally take values from the calling program in the form of input parameters.

In addition to the fact that the function returns a value, a function can also optionally return values to the caller in the form of output parameters. However, we don't encourage the use of output parameters in functions.

- [Creating a function](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/05_functions_overview/01_creating_a_function/): The CREATE FUNCTION command defines and names a standalone function to store in the database.
- [Calling a function](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/05_functions_overview/02_calling_a_function/): You can use a function anywhere an expression can appear in an SPL statement. Invoke a function by specifying its name followed by any parameters enclosed in parentheses.
- [Deleting a function](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/05_functions_overview/03_deleting_a_function/): You can delete a function from the database using DROP FUNCTION.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
