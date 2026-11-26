---
title: pg_trigger
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_trigger/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_trigger

The `pg_trigger` system catalog table stores triggers on tables.

> **Note** WarehousePG does not support triggers.

| column           | type           | references                                                                               | description                                                                                               |
| ---------------- | -------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `oid`            | oid            |                                                                                          | The object ID                                                                                             |
| `tgrelid`        | oid            | _pg\_class.oid_<br /><br />Note that WarehousePG does not enforce referential integrity. | The table this trigger is on.                                                                             |
| `tgname`         | name           |                                                                                          | Trigger name (must be unique among triggers of same table).                                               |
| `tgfoid`         | oid            | _pg\_proc.oid_<br /><br />Note that WarehousePG does not enforce referential integrity.  | The function to be called.                                                                                |
| `tgtype`         | smallint       |                                                                                          | Bit mask identifying trigger conditions.                                                                  |
| `tgenabled`      | char           |                                                                                          | True if trigger is enabled.                                                                               |
| `tgisinternal`   | boolean        |                                                                                          | True if trigger is internally generated (usually, to enforce the constraint identified by tgconstraint).  |
| `tgconstrrelid`  | oid            | _pg\_class.oid_<br /><br />Note that WarehousePG does not enforce referential integrity. | The table referenced by an referential integrity constraint.                                              |
| `tgconstrindid`  | oid            | _pg\_class.oid_                                                                          | The index supporting a unique, primary key, or referential integrity constraint.                          |
| `tgconstraint`   | oid            | _pg\_constraint.oid_                                                                     | The `pg_constraint` entry associated with the trigger, if any.                                            |
| `tgdeferrable`   | boolean        |                                                                                          | True if deferrable.                                                                                       |
| `tginitdeferred` | boolean        |                                                                                          | True if initially deferred.                                                                               |
| `tgnargs`        | smallint       |                                                                                          | Number of argument strings passed to trigger function.                                                    |
| `tgattr`         | int2vector     |                                                                                          | Currently not used.                                                                                       |
| `tgargs`         | bytea          |                                                                                          | Argument strings to pass to trigger, each NULL-terminated.                                                |
| `tgqual`         | pg\_node\_tree |                                                                                          | Expression tree (in `nodeToString()` representation) for the trigger's `WHEN` condition, or null if none. |
| `tgoldtable`     | name           |                                                                                          | The name of the old transition table, or NULL if none.                                                    |
| `tgnewtable`     | name           |                                                                                          | The name of the new transition table, or NULL if none.                                                    |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
