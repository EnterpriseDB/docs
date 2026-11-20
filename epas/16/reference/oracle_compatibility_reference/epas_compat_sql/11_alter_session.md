---
title: ALTER SESSION
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_sql/11_alter_session/
lastModified: 2024-11-22T12:16:04+01:00
---

# ALTER SESSION

<div id="alter_session" class="registered_link"></div>

## Name

`ALTER SESSION` — Change a runtime parameter.

## Synopsis

```sql
ALTER SESSION SET <name> = <value>
```

## Description

The `ALTER SESSION` command changes runtime configuration parameters. `ALTER SESSION` affects only the value used by the current session. Some of these parameters are provided solely for compatibility with Oracle syntax and have no effect on the runtime behavior of EDB Postgres Advanced Server. Others alter a corresponding EDB Postgres Advanced Server database server runtime configuration parameter.

## Parameters

`name`

Name of a settable runtime parameter.

`value`

New value of parameter.

## Configuration parameters

You can modify the following configuration parameters using the `ALTER SESSION` command:

- `NLS_DATE_FORMAT (string)`

  Sets the display format for date and time values as well as the rules for interpreting ambiguous date input values. Has the same effect as setting the EDB Postgres Advanced Server `datestyle` runtime configuration parameter.

- `NLS_LANGUAGE (string)`

  Sets the message-display language. Has the same effect as setting the EDB Postgres Advanced Server `lc_messages` runtime configuration parameter.

- `NLS_LENGTH_SEMANTICS (string)`

  Valid values are `BYTE` and `CHAR`. The default is `BYTE`. This parameter is provided only for syntax compatibility and has no effect in the EDB Postgres Advanced Server.

- `OPTIMIZER_MODE (string)`

  Sets the default optimization mode for queries. Valid values are `ALL_ROWS`, `CHOOSE`, `FIRST_ROWS`, `FIRST_ROWS_10`, `FIRST_ROWS_100`, and `FIRST_ROWS_1000`. The default is `CHOOSE`. This parameter is implemented in EDB Postgres Advanced Server.

- `QUERY_REWRITE_ENABLED (string)`

  Valid values are `TRUE`, `FALSE`, and `FORCE`. The default is `FALSE`. This parameter is provided only for syntax compatibility and has no effect in EDB Postgres Advanced Server.

- `QUERY_REWRITE_INTEGRITY (string)`

  Valid values are `ENFORCED`, `TRUSTED`, and `STALE_TOLERATED`. The default is `ENFORCED`. This parameter is provided only for syntax compatibility and has no effect in EDB Postgres Advanced Server.

## Examples

Set the language to U.S. English in UTF-8 encoding. In this example, the value `en_US.UTF-8` is in the format for EDB Postgres Advanced Server. This form isn't compatible with Oracle databases.

```sql
ALTER SESSION SET NLS_LANGUAGE = 'en_US.UTF-8';
```

Set the date display format:

```sql
ALTER SESSION SET NLS_DATE_FORMAT = 'dd/mm/yyyy';
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
