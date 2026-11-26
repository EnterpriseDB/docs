---
title: Loops
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/05_control_structures/06_loops/
lastModified: 2023-02-14T16:10:29+05:30
---

# Loops

<div id="loops" class="registered_link"></div>

When you use the `LOOP`, `EXIT`, `CONTINUE`, `WHILE`, and `FOR` statements, your SPL program can repeat a series of commands.

- [LOOP](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/05_control_structures/06_loops/01_loop/): LOOP defines an unconditional loop that's repeated indefinitely until terminated by an EXIT or RETURN statement.
- [EXIT](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/05_control_structures/06_loops/02_exit/): The innermost loop is terminated, and the statement following END LOOP is executed next.
- [CONTINUE](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/05_control_structures/06_loops/03_continue/): The CONTINUE statement provides a way to proceed with the next iteration of a loop while skipping intervening statements.
- [WHILE](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/05_control_structures/06_loops/04_while/): The WHILE statement repeats a sequence of statements when the condition expression evaluates to TRUE. The condition is checked just before each entry to the loop body.
- [FOR (integer variant)](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/05_control_structures/06_loops/05_for_integer_variant/): This form of FOR creates a loop that iterates over a range of integer values. The variable name is of type INTEGER and exists only inside the loop. The two expressions giving the loop range are evaluated once when entering the loop. The iteration step is +1.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
