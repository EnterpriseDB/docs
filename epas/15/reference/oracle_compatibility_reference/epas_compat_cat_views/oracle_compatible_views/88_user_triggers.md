---
title: USER_TRIGGERS
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/88_user_triggers/
lastModified: 2023-11-09T17:35:38+05:30
---

# USER\_TRIGGERS

<div id="user_triggers" class="registered_link"></div>

The `USER_TRIGGERS` view displays information about all triggers on tables owned by the current user.

| Name                | Type   | Description                                                                                                     |
| ------------------- | ------ | --------------------------------------------------------------------------------------------------------------- |
| `schema_name`       | `TEXT` | Name of the schema in which the trigger resides.                                                                |
| `trigger_name`      | `TEXT` | Name of the trigger.                                                                                            |
| `trigger_type`      | `TEXT` | The type of the trigger. Possible values are: `BEFORE ROW`, `BEFORE STATEMENT`, `AFTER ROW`, `AFTER STATEMENT`. |
| `triggering_event`  | `TEXT` | The event that fires the trigger.                                                                               |
| `table_owner`       | `TEXT` | The user name of the owner of the table on which the trigger is defined.                                        |
| `base_object_type`  | `TEXT` | Included only for compatibility. Value is always  `TABLE`.                                                      |
| `table_name`        | `TEXT` | Name of the table on which the trigger is defined.                                                              |
| `referencing_names` | `TEXT` | Included only for compatibility. Value is always `REFERENCING NEW AS NEW OLD AS OLD`.                           |
| `status`            | `TEXT` | Status indicates if the trigger is enabled (`VALID`) or disabled (`NOTVALID`).                                  |
| `description`       | `TEXT` | Included only for compatibility.                                                                                |
| `trigger_body`      | `TEXT` | The body of the trigger.                                                                                        |
| `action_statement`  | `TEXT` | The SQL command that executes when the trigger fires.                                                           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
