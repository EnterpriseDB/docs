---
title: Trigger overview
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/13_triggers/01_overview/
lastModified: 2023-11-09T17:35:38+05:30
---

# Trigger overview

<div id="overview" class="registered_link"></div>

A _trigger_ is a named SPL code block that's associated with a table and stored in the database. When a specified event occurs on the associated table, the SPL code block executes. The trigger is said to be _fired_ when the code block executes.

The event that causes a trigger to fire can be any combination of an insert, update, or deletion carried out on the table, either directly or indirectly. If the table is the object of a SQL `INSERT`, `UPDATE`, `DELETE`, or `TRUNCATE` command, the trigger is directly fired when the corresponding insert, update, delete, or truncate event is defined as a _triggering event_. The events that fire the trigger are defined in the `CREATE TRIGGER` command.

A trigger can fire indirectly if a triggering event occurs on the table as a result of an event initiated on another table. For example, suppose a trigger is defined on a table containing a foreign key defined with the `ON DELETE CASCADE` clause, and a row in the parent table is deleted. In this case, all children of the parent are deleted as well. If deletion is a triggering event on the child table, deleting the children causes the trigger to fire.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
