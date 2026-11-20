---
title: ALL_TRIGGERS
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/27_all_triggers/
lastModified: 2024-11-22T12:16:04+01:00
---

# ALL\_TRIGGERS

<div id="all_triggers" class="registered_link"></div>

The `ALL_TRIGGERS` view provides information about the triggers on tables that the current user can accessed.

| Name               | Type   | Description                                                                                                     |
| ------------------ | ------ | --------------------------------------------------------------------------------------------------------------- |
| `owner`            | `TEXT` | User name of the trigger owner.                                                                                 |
| `schema_name`      | `TEXT` | Name of the schema in which the trigger resides.                                                                |
| `trigger_name`     | `TEXT` | Name of the trigger.                                                                                            |
| `trigger_type`     | `TEXT` | The type of the trigger. Possible values are: `BEFORE ROW`, `BEFORE STATEMENT`, `AFTER ROW`, `AFTER STATEMENT`. |
| `triggering_event` | `TEXT` | The event that fires the trigger.                                                                               |
| `table_owner`      | `TEXT` | The user name of the owner of the table on which the trigger is defined.                                        |
| `base_object_type` | `TEXT` | Included only for compatibility. Value is always `TABLE`.                                                       |
| `table_name`       | `TEXT` | Name of the table on which the trigger is defined.                                                              |
| `referencing_name` | `TEXT` | Included only for compatibility. Value is always `REFERENCING NEW AS NEW OLD AS OLD`.                           |
| `status`           | `TEXT` | Status indicates if the trigger is enabled `(VALID)` or disabled `(NOTVALID)`.                                  |
| `description`      | `TEXT` | Included only for compatibility.                                                                                |
| `trigger_body`     | `TEXT` | The body of the trigger.                                                                                        |
| `action_statement` | `TEXT` | The SQL command that executes when the trigger fires.                                                           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
