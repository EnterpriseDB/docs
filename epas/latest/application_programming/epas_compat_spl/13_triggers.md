---
title: Working with triggers
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/13_triggers/
lastModified: 2025-11-25T20:39:04+05:30
---

# Working with triggers

<div id="triggers" class="registered_link"></div>

As with procedures and functions, you write triggers in the SPL language.

- [Trigger overview](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/13_triggers/01_overview/): A trigger is a named SPL code block that's associated with a table and stored in the database. When a specified event occurs on the associated table, the SPL code block executes. The trigger is said to be fired when the code block executes.
- [Types of triggers](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/13_triggers/02_types_of_triggers/): EDB Postgres Advanced Server supports row-level and statement-level triggers.
- [Creating triggers](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/13_triggers/03_creating_triggers/): The CREATE TRIGGER command defines and names a trigger that's stored in the database. You can create a simple trigger or a compound trigger.
- [Trigger variables](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/13_triggers/04_trigger_variables/): In the trigger code block, several special variables are available for use.
- [Transactions and exceptions](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/13_triggers/05_transactions_and_exceptions/): A trigger is always executed as part of the same transaction in which the triggering statement is executing. When no exceptions occur in the trigger code block, the effects of any triggering commands in the trigger are committed only if the transaction containing the triggering statement is committed. Therefore, if the transaction is rolled back, the effects of any triggering commands in the trigger are also rolled back.
- [Compound triggers](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/13_triggers/06_compound_triggers/): EDB Postgres Advanced Server has compatible syntax to support compound triggers.
- [Trigger examples](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/13_triggers/07_trigger_examples/): The examples that follow show each type of trigger.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
