---
title: Compound triggers
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/13_triggers/06_compound_triggers/
lastModified: 2023-02-14T16:10:29+05:30
---

# Compound triggers

<div id="compound_triggers" class="registered_link"></div>

EDB Postgres Advanced Server has compatible syntax to support compound triggers. A compound trigger combines all the triggering timings under one trigger body that you can invoke at one or more _timing points_. A timing point is a point in time related to a triggering statement, which is an `INSERT`, `UPDATE`, `DELETE`, or `TRUNCATE` statement that modifies data. The supported timing points are:

- `BEFORE STATEMENT` — Before the triggering statement executes.
- `BEFORE EACH ROW` — Before each row that the triggering statement affects.
- `AFTER EACH ROW` — After each row that the triggering statement affects.
- `AFTER STATEMENT` — After the triggering statement executes.
- `INSTEAD OF EACH ROW` — Trigger fires once for every row affected by the triggering statement.

A compound trigger can include any combination of timing points defined in a single trigger.

The optional declaration section in a compound trigger allows you to declare trigger-level variables and subprograms. The content of the declaration is accessible to all timing points referenced by the trigger definition. The variables and subprograms created by the declaration persist only for the duration of the triggering statement.

A compound trigger contains a declaration followed by a PL block for each timing point:

```text
CREATE OR REPLACE TRIGGER compound_trigger_name
FOR INSERT OR UPDATE OR DELETE ON table_name
COMPOUND TRIGGER
   -- Global Declaration Section (optional)
   -- Variables declared here can be used inside any timing-point blocks.

     BEFORE STATEMENT IS
     BEGIN
       NULL;
     END BEFORE STATEMENT;

     BEFORE EACH ROW IS
     BEGIN
       NULL;
     END BEFORE EACH ROW;

     AFTER EACH ROW IS
     BEGIN
       NULL;
     END AFTER EACH ROW;


     AFTER STATEMENT IS
     BEGIN
       NULL;
     END AFTER STATEMENT;
END compound_trigger_name;
/
Trigger created.
```

> **Note**
>
> You don't have to have all the four timing blocks. You can create a compound trigger for any of the required timing points.

A compound trigger has the following restrictions:

- A compound trigger body is made up of a compound trigger block.
- You can define a compound trigger on a table or a view.
- You can't transfer exceptions to another timing-point section. They must be handled separately in that section only by each compound trigger block.
- If a `GOTO` statement is specified in a timing-point section, then the target of the `GOTO` statement must also be specified in the same timing-point section.
- `:OLD` and `:NEW` variable identifiers can't exist in the declarative section, the `BEFORE STATEMENT` section, or the `AFTER STATEMENT` section.
- `:NEW` values are modified only by the `BEFORE EACH ROW` block.
- The sequence of compound trigger timing-point execution is specific. However, if a simple trigger is in the same timing point, then the simple trigger is fired first, followed by the compound triggers.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
