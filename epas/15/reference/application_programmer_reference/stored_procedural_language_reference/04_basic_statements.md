---
title: Types of programming statements
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/application_programmer_reference/stored_procedural_language_reference/04_basic_statements/
lastModified: 2023-11-09T17:35:38+05:30
---

# Types of programming statements

<div id="basic_statements" class="registered_link"></div>

You can use several programming statements in an SPL program.

- [Assignment](https://www.enterprisedb.com/docs/epas/15/reference/application_programmer_reference/stored_procedural_language_reference/04_basic_statements/01_assignment/): The assignment statement sets a variable or a formal parameter of mode OUT or IN OUT specified on the left side of the assignment := to the evaluated expression specified on the right side of the assignment.
- [DELETE](https://www.enterprisedb.com/docs/epas/15/reference/application_programmer_reference/stored_procedural_language_reference/04_basic_statements/02_delete/): You can use the DELETE command available in the SQL language in SPL programs.
- [INSERT](https://www.enterprisedb.com/docs/epas/15/reference/application_programmer_reference/stored_procedural_language_reference/04_basic_statements/03_insert/): You can use the INSERT command available in the SQL language in SPL programs.
- [NULL](https://www.enterprisedb.com/docs/epas/15/reference/application_programmer_reference/stored_procedural_language_reference/04_basic_statements/04_null/): The simplest statement is the NULL statement. This statement is an executable statement that does nothing.
- [RETURNING INTO](https://www.enterprisedb.com/docs/epas/15/reference/application_programmer_reference/stored_procedural_language_reference/04_basic_statements/05_using_the_returning_into_clause/): You can append the INSERT, UPDATE, and DELETE commands with the optional RETURNING INTO clause. This clause allows the SPL program to capture the newly added, modified, or deleted values from the results of an INSERT, UPDATE, or DELETE command, respectively.
- [SELECT INTO](https://www.enterprisedb.com/docs/epas/15/reference/application_programmer_reference/stored_procedural_language_reference/04_basic_statements/06_select_into/): The SELECT INTO statement is an SPL variation of the SQL SELECT command. The differences are:
- [UPDATE](https://www.enterprisedb.com/docs/epas/15/reference/application_programmer_reference/stored_procedural_language_reference/04_basic_statements/07_update/): You can use the UPDATE command available in the SQL language in SPL programs.
- [Obtaining the result status](https://www.enterprisedb.com/docs/epas/15/reference/application_programmer_reference/stored_procedural_language_reference/04_basic_statements/08_obtaining_the_result_status/): You can use several attributes to determine the effect of a command. SQL%FOUND is a Boolean that returns TRUE if at least one row was affected by an INSERT, UPDATE or DELETE command or a SELECT INTO command retrieved one or more rows.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
