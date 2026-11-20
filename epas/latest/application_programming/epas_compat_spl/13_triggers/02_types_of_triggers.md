---
title: Types of triggers
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/13_triggers/02_types_of_triggers/
lastModified: 2025-11-25T20:39:04+05:30
---

# Types of triggers

<div id="types_of_triggers" class="registered_link"></div>

EDB Postgres Advanced Server supports _row-level_ and _statement-level_ triggers.

- A row-level trigger fires once for each row that's affected by a triggering event. For example, suppose deletion is defined as a triggering event on a table, and a single `DELETE` command is issued that deletes five rows from the table. In this case, the trigger fires five times, once for each row.

- A statement-level trigger fires once per triggering statement, regardless of the number of rows affected by the triggering event. In the previous example of a single `DELETE` command deleting five rows, a statement-level trigger fires only once.

You can define the sequence of actions regarding whether the trigger code block executes before or after the triggering statement for statement-level triggers. For row-level triggers, you can define whether the trigger code block executes before or after each row is affected by the triggering statement.

- In a _before_ row-level trigger, the trigger code block executes before the triggering action is carried out on each affected row. In a _before_ statement-level trigger, the trigger code block executes before the action of the triggering statement is carried out.

- In an _after_ row-level trigger, the trigger code block executes after the triggering action is carried out on each affected row. In an _after_ statement-level trigger, the trigger code block executes after the action of the triggering statement is carried out.

In a _compound trigger_, you can define a statement-level and a row-level trigger in a single trigger and fire it at more than one timing point. For details, see [Compound triggers](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/13_triggers/06_compound_triggers/#compound_triggers).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
