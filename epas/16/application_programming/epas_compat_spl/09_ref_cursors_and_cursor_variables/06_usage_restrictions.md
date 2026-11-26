---
title: Usage restrictions
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/09_ref_cursors_and_cursor_variables/06_usage_restrictions/
lastModified: 2024-11-22T12:16:04+01:00
---

# Usage restrictions

<div id="usage_restrictions" class="registered_link"></div>

The following are restrictions on cursor variable usage:

- You can't use comparison operators to test cursor variables for equality, inequality, null, or not null.
- You can't assign null to a cursor variable.
- You can't store the value of a cursor variable in a database column.
- Static cursors and cursor variables aren't interchangeable. For example, you can't use a static cursor in an `OPEN FOR` statement.

The table shows the permitted parameter modes for a cursor variable used as a procedure or function parameter. This use depends on the operations on the cursor variable in the procedure or function.

| Operation | IN    | IN OUT | OUT  |
| --------- | ----- | ------ | ---- |
| `OPEN`    | `No`  | `Yes`  | `No` |
| `FETCH`   | `Yes` | `Yes`  | `No` |
| `CLOSE`   | `Yes` | `Yes`  | `No` |

For example, if a procedure performs all three operations—`OPEN FOR`, `FETCH`, and `CLOSE`—on a cursor variable declared as the procedure’s formal parameter, then that parameter must be declared with `IN OUT` mode.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
