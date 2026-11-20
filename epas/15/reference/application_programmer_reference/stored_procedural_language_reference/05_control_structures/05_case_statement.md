---
title: CASE statement
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/application_programmer_reference/stored_procedural_language_reference/05_control_structures/05_case_statement/
lastModified: 2023-11-09T17:35:38+05:30
---

# CASE statement

<div id="case_statement" class="registered_link"></div>

The `CASE` statement executes a set of one or more statements when a specified search condition is `TRUE`. The `CASE` statement is a standalone statement while the `CASE` expression must appear as part of an expression.

The two formats of the `CASE` statement are a _searched_ `CASE` and one that uses a _selector_.

- [Selector CASE statement](https://www.enterprisedb.com/docs/epas/15/reference/application_programmer_reference/stored_procedural_language_reference/05_control_structures/05_case_statement/01_selector_case_statement/): The selector CASE statement attempts to match an expression called the selector to the expression specified in one or more WHEN clauses. When a match is found, one or more corresponding statements are executed.
- [Searched CASE statement](https://www.enterprisedb.com/docs/epas/15/reference/application_programmer_reference/stored_procedural_language_reference/05_control_structures/05_case_statement/02_searched_case_statement/): A searched CASE statement uses one or more Boolean expressions to determine the resulting set of statements to execute.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
