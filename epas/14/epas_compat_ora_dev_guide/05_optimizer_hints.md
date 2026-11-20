---
title: Optimizer hints
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/05_optimizer_hints/
lastModified: 2023-02-14T16:10:29+05:30
---

# Optimizer hints

<div id="optimizer_hints" class="registered_link"></div>

When you invoke a `DELETE`, `INSERT`, `SELECT`, or `UPDATE` command, the server generates a set of execution plans. After analyzing those execution plans, the server selects a plan that generally returns the result set in the least amount of time. The server's choice of plan depends on several factors:

- The estimated execution cost of data handling operations
- Parameter values assigned to parameters in the `Query Tuning` section of the `postgresql.conf` file
- Column statistics that were gathered by the [ANALYZE](https://www.enterprisedb.com/docs/en/9.3/pg/sql-analyze.html) command

As a rule, the query planner selects the least expensive plan. You can use an _optimizer hint_ to influence the server as it selects a query plan. An optimizer hint is one or more directives embedded in a comment-like syntax that immediately follows a `DELETE`, `INSERT`, `SELECT` or `UPDATE` command. Keywords in the comment instruct the server to use or avoid a specific plan when producing the result set.

## Synopsis

You can incude optimizer hints in either of these forms:

```text
{ DELETE | INSERT | SELECT | UPDATE } /*+ { <hint> [ <comment> ] } [...] */
  <statement_body>

{ DELETE | INSERT | SELECT | UPDATE } --+ { <hint> [ <comment> ] } [...]
  <statement_body>
```

In both forms, a plus sign (+) must immediately follow the `/*` or `--` opening comment symbols, with no intervening space. Otherwise the server doesn't interpret the tokens that follow as hints.

If you're using the first form, the hint and optional comment might span multiple lines. In the second form, all hints and comments must occupy a single line. The rest of the statement must start on a new line.

## Description

Note:

- The database server always tries to use the specified hints if at all possible.
- If a planner method parameter is set so as to disable a certain plan type, then this plan isn't used even if it is specified in a hint, unless there are no other possible options for the planner. Examples of planner method parameters are `enable_indexscan`, `enable_seqscan`, `enable_hashjoin`, `enable_mergejoin`, and `enable_nestloop`. These are all Boolean parameters.
- The hint is embedded in a comment. As a consequence, if the hint is misspelled or if any parameter to a hint such as view, table, or column name is misspelled or nonexistent in the SQL command, there's no indication that an error occurred. No syntax error is given. The entire hint is silently ignored.
- If an alias is used for a table name in the SQL command, then you must use the alias name in the hint, not the original table name. For example, in the command `SELECT /*+ FULL(acct) */ * FROM accounts acct ..., acct`, you must specify the alias for `accounts` in the `FULL` hint, not in the table name `accounts`.

Use the `EXPLAIN` command to ensure that the hint is correctly formed and the planner is using the hint.

In general, don't use optimizer hints in a production application, where table data changes throughout the life of the application. By ensuring that dynamic columns are analyzed frequently via the `ANALYZE` command, the column statistics are updated to reflect value changes. The planner uses such information to produce the lowest-cost plan for any given command execution. Use of optimizer hints defeats the purpose of this process and results in the same plan regardless of how the table data changes.

## Parameters

`hint`

An optimizer hint directive.

`comment`

A string with additional information. Comments have restrictions as to what characters you can include. Generally, `comment` can consist only of alphabetic, numeric, the underscore, dollar sign, number sign, and space characters. These must also conform to the syntax of an identifier. Any subsequent hint is ignored if the comment isn't in this form.

`statement_body`

The remainder of the `DELETE`, `INSERT`, `SELECT`, or `UPDATE` command.

- [Default optimization modes](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/05_optimizer_hints/01_default_optimization_modes/): You can choose an optimization mode as the default setting for an EDB Postgres Advanced Server database cluster. You can also change this setting on a per-session basis by using the ALTER SESSION command as well as in individual DELETE, SELECT, and UPDATE commands in an optimizer hint. The configuration parameter that controls these default modes is OPTIMIZER\_MODE.
- [Access method hints](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/05_optimizer_hints/02_access_method_hints/): The following hints influence how the optimizer accesses relations to create the result set.
- [Specifying a join order](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/05_optimizer_hints/03_specifying_a_join_order/): Include the ORDERED directive to instruct the query optimizer to join tables in the order in which they're listed in the FROM clause. If you don't include the ORDERED keyword, the query optimizer chooses the order in which to join the tables.
- [Joining relations hints](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/05_optimizer_hints/04_joining_relations_hints/): When you join two tables, you can use any of three plans to perform the join.
- [Global hints](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/05_optimizer_hints/05_global_hints/): In addition to applying hits directly to tables that are referenced in the SQL command, you can apply hints to tables that appear in a view when the view is referenced in the SQL command. The hint doesn't appear in the view but in the SQL command that references the view.
- [Using the APPEND optimizer hint](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/05_optimizer_hints/06_using_the_append_optimizer_hint/): By default, EDB Postgres Advanced Server adds new data into the first available free space in a table vacated by vacuumed records. Include the APPEND directive after an INSERT or SELECT command to bypass midtable free space and affix new rows to the end of the table. This optimizer hint can be particularly useful when bulk loading data.
- [Parallelism hints](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/05_optimizer_hints/07_parallelism_hints/): The PARALLEL optimizer hint forces parallel scanning.
- [Conflicting hints](https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/05_optimizer_hints/08_conflicting_hints/): If a command includes two or more conflicting hints, the server ignores the contradicting hints. The following table lists hints that contradict each other.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
