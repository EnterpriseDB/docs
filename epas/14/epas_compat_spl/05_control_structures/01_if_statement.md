---
title: IF statement
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/05_control_structures/01_if_statement/
lastModified: 2023-02-14T16:10:29+05:30
---

# IF statement

<div id="if_statement" class="registered_link"></div>

`IF` statements let you execute commands based on certain conditions. SPL has four forms of `IF`:

- `IF ... THEN`
- `IF ... THEN ... ELSE`
- `IF ... THEN ... ELSE IF`
- `IF ... THEN ... ELSIF ... THEN ... ELSE`

* [IF-THEN](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/05_control_structures/01_if_statement/01_if_then/): IF-THEN statements are the simplest form of IF. The statements between THEN and END IF are executed if the condition is TRUE. Otherwise, they are skipped.
* [IF-THEN-ELSE](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/05_control_structures/01_if_statement/02_if_then_else/): IF-THEN-ELSE statements add to IF-THEN by letting you specify an alternative set of statements to execute if the condition evaluates to false.
* [IF-THEN-ELSE IF](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/05_control_structures/01_if_statement/03_if_then_else_if/): You can nest IF statements. This allows you to invoke alternative IF statements once it's determined whether the conditional of an outer IF statement is TRUE or FALSE.
* [IF-THEN-ELSIF-ELSE](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/05_control_structures/01_if_statement/04_if_then_elseif_else/): IF-THEN-ELSIF-ELSE provides a method of checking many alternatives in one statement. Formally it is equivalent to nested IF-THEN-ELSE-IF-THEN commands, but only one END IF is needed.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
