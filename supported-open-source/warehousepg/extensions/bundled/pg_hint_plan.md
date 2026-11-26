---
title: pg_hint_plan
description: Controls the execution plan the planner chooses for a query, using hints placed in SQL comments.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/bundled/pg_hint_plan/
lastModified: 2026-09-25T15:27:49-07:00
---

# pg\_hint\_plan

`pg_hint_plan` lets you control the execution plan the planner chooses for a query, using hints placed in SQL comments. See [`pg_hint_plan`](https://github.com/ossc-db/pg_hint_plan) for the upstream project.

> **Note**
>
> Scan method, join method, join order, and row-estimate hints all influence the plan whether ORCA or the Postgres-based planner runs the query. You don't need to disable ORCA for these hints to take effect. If a hint doesn't seem to apply, set `pg_hint_plan.debug_print = on` to confirm `pg_hint_plan` used it (see [Configuring pg\_hint\_plan](#configuring-pg_hint_plan)), and see [About ORCA](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-piv-optimizer/) for how to switch optimizers if you need to isolate the Postgres-based planner's behavior.

For the available hint types and examples, see [Using Optimizer Hints](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-optimizer-hints/).

## Loading the extension

Activate `pg_hint_plan` in a session by loading it as a superuser:

```sql
LOAD 'pg_hint_plan';
```

To have it load automatically, add it to `session_preload_libraries` or `shared_preload_libraries` in `postgresql.conf`, or set it for a specific database or user:

```sql
ALTER DATABASE a_database SET session_preload_libraries = 'pg_hint_plan';
ALTER USER a_user SET session_preload_libraries = 'pg_hint_plan';
```

See [Storing hints in a table](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-optimizer-hints/#storing-hints-in-a-table) for how to attach a hint to a query you can't add a comment to.

## Configuring pg\_hint\_plan

Set these configuration parameters with `SET` or `ALTER DATABASE`/`ALTER USER ... SET`:

| Parameter                        | Default | Description                                                                                                          |
| -------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| `pg_hint_plan.enable_hint`       | `on`    | Enables hint processing.                                                                                             |
| `pg_hint_plan.enable_hint_table` | `off`   | Enables looking up hints from the `hint_plan.hints` table.                                                           |
| `pg_hint_plan.debug_print`       | `off`   | Logs which hints were used, unused, duplicated, or invalid. Valid values are `off`, `on`, `detailed`, and `verbose`. |
| `pg_hint_plan.message_level`     | `log`   | Sets the log level for `debug_print` output.                                                                         |
| `pg_hint_plan.parse_messages`    | `info`  | Sets the log level for hint parsing errors.                                                                          |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
