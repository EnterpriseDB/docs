---
title: Trigger variables
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/13_triggers/04_trigger_variables/
lastModified: 2023-02-14T16:10:29+05:30
---

# Trigger variables

<div id="trigger_variables" class="registered_link"></div>

In the trigger code block, several special variables are available for use.

`NEW`

`NEW` is a pseudo-record name that refers to the new table row for insert and update operations in row-level triggers. This variable doesn't apply to statement-level triggers and delete operations of row-level triggers.

Its usage is:

```text
:NEW.column 
```

Where `column` is the name of a column in the table where the trigger is defined.

The initial content of `:NEW.column` is the value in the named column of the new row to insert. Or, when used in a before row-level trigger, it's the value of the new row that replaces the old one. When used in an after row-level trigger, this value is already stored in the table since the action already occurred on the affected row.

In the trigger code block, you can use `:NEW.column` like any other variable. If a value is assigned to `:NEW.column` in the code block of a before row-level trigger, the assigned value is used in the new inserted or updated row.

`OLD`

`OLD` is a pseudo-record name that refers to the old table row for update and delete operations in row-level triggers. This variable doesn't apply in statement-level triggers and in insert operations of row-level triggers.

Its usage is: `:OLD.column`, where `column` is the name of a column in the table on which the trigger is defined.

The initial content of `:OLD.column` is the value in the named column of the row to delete or of the old row to replace with the new one when used in a before row-level trigger. When used in an after row-level trigger, this value is no longer stored in the table since the action already occurred on the affected row.

In the trigger code block, you can use `:OLD.column` like any other variable. Assigning a value to `:OLD.column` has no effect on the action of the trigger.

`INSERTING`

`INSERTING` is a conditional expression that returns `TRUE` if an insert operation fired the trigger. Otherwise it returns `FALSE`.

`UPDATING`

`UPDATING` is a conditional expression that returns `TRUE` if an update operation fired the trigger. Otherwise it returns `FALSE`.

`DELETING`

`DELETING` is a conditional expression that returns `TRUE` if a delete operation fired the trigger. Otherwise it returns `FALSE`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
