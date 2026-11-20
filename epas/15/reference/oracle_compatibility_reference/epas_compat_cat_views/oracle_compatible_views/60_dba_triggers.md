---
title: DBA_TRIGGERS
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/60_dba_triggers/
lastModified: 2023-11-09T17:35:38+05:30
---

# DBA\_TRIGGERS

<div id="dba_triggers" class="registered_link"></div>

The `DBA_TRIGGERS` view provides information about all triggers in the database.

| Name                | Type   | Description                                                                                                 |
| ------------------- | ------ | ----------------------------------------------------------------------------------------------------------- |
| `owner`             | `TEXT` | User name of the trigger owner.                                                                             |
| `schema_name`       | `TEXT` | Name of the schema in which the trigger resides.                                                            |
| `trigger_name`      | `TEXT` | Name of the trigger.                                                                                        |
| `trigger_type`      | `TEXT` | Type of the trigger. Possible values are: `BEFORE ROW`, `BEFORE STATEMENT`, `AFTER ROW`, `AFTER STATEMENT`. |
| `triggering_event`  | `TEXT` | Event that fires the trigger.                                                                               |
| `table_owner`       | `TEXT` | User name of the owner of the table on which the trigger is defined.                                        |
| `base_object_type`  | `TEXT` | Included only for compatibility. Value is always `TABLE`.                                                   |
| `table_name`        | `TEXT` | Name of the table on which the trigger is defined.                                                          |
| `referencing_names` | `TEXT` | Included only for compatibility. Value is always `REFERENCING NEW AS NEW OLD AS OLD`.                       |
| `status`            | `TEXT` | Status indicates if the trigger is enabled `(VALID)` or disabled `(NOTVALID)`.                              |
| `description`       | `TEXT` | Included onky for compatibility.                                                                            |
| `trigger_body`      | `TEXT` | The body of the trigger.                                                                                    |
| `action_statement`  | `TEXT` | The SQL command that executes when the trigger fires.                                                       |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
