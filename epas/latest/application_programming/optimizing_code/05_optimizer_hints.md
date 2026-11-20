---
title: Using optimizer hints
description: Describes how to generate and use optimizer hints
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/application_programming/optimizing_code/05_optimizer_hints/
lastModified: 2025-11-25T20:39:04+05:30
---

# Using optimizer hints

<div id="optimizer_hints" class="registered_link"></div>

When you invoke a `DELETE`, `INSERT`, `SELECT`, or `UPDATE` command, the server generates a set of execution plans. After analyzing those execution plans, the server selects a plan that generally returns the result set in the least amount of time. The server's choice of plan depends on several factors:

- The estimated execution cost of data handling operations
- Parameter values assigned to parameters in the `Query Tuning` section of the `postgresql.conf` file
- Column statistics that were gathered by the ANALYZE command

As a rule, the query planner selects the least expensive plan. You can use an _optimizer hint_ to influence the server as it selects a query plan.

- [About optimizer hints](https://www.enterprisedb.com/docs/epas/latest/application_programming/optimizing_code/05_optimizer_hints/about_optimizer_hints/): An optimizer hint is one or more directives embedded in a comment-like syntax that immediately follows a DELETE, INSERT, SELECT, or UPDATE command. Keywords in the comment instruct the server to use or avoid a specific plan when producing the result set.
- [Default optimization modes](https://www.enterprisedb.com/docs/epas/latest/application_programming/optimizing_code/05_optimizer_hints/01_default_optimization_modes/): You can choose an optimization mode as the default setting for an EDB Postgres Advanced Server database cluster. You can also change this setting on a per-session basis by using the ALTER SESSION command as well as in individual DELETE, SELECT, and UPDATE commands in an optimizer hint. The configuration parameter that controls these default modes is OPTIMIZER\_MODE.
- [Access method hints](https://www.enterprisedb.com/docs/epas/latest/application_programming/optimizing_code/05_optimizer_hints/02_access_method_hints/): The following hints influence how the optimizer accesses relations to create the result set.
- [Specifying a join order](https://www.enterprisedb.com/docs/epas/latest/application_programming/optimizing_code/05_optimizer_hints/03_specifying_a_join_order/): Include the ORDERED directive to instruct the query optimizer to join tables in the order in which they're listed in the FROM clause. If you don't include the ORDERED keyword, the query optimizer chooses the order in which to join the tables.
- [Joining relations hints](https://www.enterprisedb.com/docs/epas/latest/application_programming/optimizing_code/05_optimizer_hints/04_joining_relations_hints/): When you join two tables, you can use any of three plans to perform the join.
- [Global hints](https://www.enterprisedb.com/docs/epas/latest/application_programming/optimizing_code/05_optimizer_hints/05_global_hints/): In addition to applying hints directly to tables that are referenced in the SQL command, you can apply hints to tables that appear in a view when the view is referenced in the SQL command. The hint doesn't appear in the view but in the SQL command that references the view.
- [APPEND optimizer hint](https://www.enterprisedb.com/docs/epas/latest/application_programming/optimizing_code/05_optimizer_hints/06_using_the_append_optimizer_hint/): By default, EDB Postgres Advanced Server adds new data into the first available free space in a table vacated by vacuumed records. Include the APPEND directive after an INSERT or SELECT command to bypass midtable free space and affix new rows to the end of the table. This optimizer hint can be particularly useful when bulk loading data.
- [Parallelism hints](https://www.enterprisedb.com/docs/epas/latest/application_programming/optimizing_code/05_optimizer_hints/07_parallelism_hints/): Parallel scanning is the use of multiple background workers to simultaneously perform a scan of a table, that is, in parallel, for a given query. This process provides performance improvement over other methods such as the sequential scan.
- [Conflicting hints](https://www.enterprisedb.com/docs/epas/latest/application_programming/optimizing_code/05_optimizer_hints/08_conflicting_hints/): If a command includes two or more conflicting hints, the server ignores the contradicting hints. The following table lists hints that contradict each other.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
