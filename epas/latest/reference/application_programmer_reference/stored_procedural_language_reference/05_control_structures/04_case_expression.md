---
title: CASE expression
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/application_programmer_reference/stored_procedural_language_reference/05_control_structures/04_case_expression/
lastModified: 2025-11-25T20:39:04+05:30
---

# CASE expression

<div id="case_expression" class="registered_link"></div>

The `CASE` expression returns a value that's substituted where the `CASE` expression is located in an expression.

The two formats of the `CASE` expression are called a _searched_ `CASE` and one that uses a _selector_.

- [Selector CASE expression](https://www.enterprisedb.com/docs/epas/latest/reference/application_programmer_reference/stored_procedural_language_reference/05_control_structures/04_case_expression/01_selector_case_expression/): The selector CASE expression attempts to match an expression, called the selector, to the expression specified in one or more WHEN clauses. result is an expression that is type-compatible in the context where the CASE expression is used. If a match is found, the value given in the corresponding THEN clause is returned by the CASE expression. If there are no matches, the value following ELSE is returned. If ELSE is omitted, the CASE expression returns null.
- [Searched CASE expression](https://www.enterprisedb.com/docs/epas/latest/reference/application_programmer_reference/stored_procedural_language_reference/05_control_structures/04_case_expression/02_searched_case_expression/): A searched CASE expression uses one or more Boolean expressions to determine the resulting value to return.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
