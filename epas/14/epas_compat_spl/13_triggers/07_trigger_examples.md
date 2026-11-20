---
title: Trigger examples
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/13_triggers/07_trigger_examples/
lastModified: 2023-02-14T16:10:29+05:30
---

# Trigger examples

<div id="trigger_examples" class="registered_link"></div>

The examples that follow show each type of trigger.

- [Before statement-level trigger](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/13_triggers/07_trigger_examples/01_before_statement_level_trigger/): This example shows a simple before statement-level trigger that displays a message before an insert operation on the emp table:
- [After statement-level trigger](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/13_triggers/07_trigger_examples/02_after_statement_level_trigger/): This example shows an after statement-level trigger. When an insert, update, or delete operation occurs on the emp table, a row is added to the empauditlog table recording the date, user, and action.
- [Before row-level trigger](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/13_triggers/07_trigger_examples/03_before_row_level_trigger/): This example shows a before row-level trigger that calculates the commission of every new employee belonging to department 30 that's inserted into the emp table:
- [After row-level trigger](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/13_triggers/07_trigger_examples/04_after_row_level_trigger/): This example shows an after row-level trigger. When a new employee row is inserted, the trigger adds a row to the jobhist table for that employee. When an existing employee is updated, the trigger sets the enddate column of the latest jobhist row (assumed to be the one with a null enddate) to the current date and inserts a new jobhist row with the employee’s new information.
- [INSTEAD OF trigger](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/13_triggers/07_trigger_examples/05_instead_of_trigger/): This example shows an INSTEAD OF trigger for inserting a new employee row into the empvw view. The CREATE VIEW statement creates the empvw view by joining the two tables. The trigger adds the corresponding new rows into the emp and dept tables, respectively, for a specific employee.
- [Compound triggers](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/13_triggers/07_trigger_examples/06_compound_trigger/): This example shows a compound trigger that records a change to the employee salary by defining a compound trigger (named hr\_trigger) on the emp table.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
