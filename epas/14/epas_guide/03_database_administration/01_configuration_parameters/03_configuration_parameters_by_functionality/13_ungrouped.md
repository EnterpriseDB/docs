---
title: Ungrouped
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/13_ungrouped/
lastModified: 2026-02-06T16:57:37-05:00
---

# Ungrouped

<div id="ungrouped" class="registered_link"></div>

These configuration parameters apply only to EDB Postgres Advanced Server and are for a specific, limited purpose.

## nls\_length\_semantics

**Parameter type:** Enum

**Default value:** `byte`

**Range:** `{byte | char}`

**Minimum scope of effect:** Per session

**When value changes take effect:** Immediate

**Required authorization to activate:** Superuser

This parameter has no effect in EDB Postgres Advanced Server. For example, this form of the `ALTER SESSION` command is accepted in EDB Postgres Advanced Server without throwing a syntax error. However, it doesn't alter the session environment.

```text
ALTER SESSION SET nls_length_semantics = char;
```

> **Note**
>
> Since setting this parameter has no effect on the server environment, it doesn't appear in the system view `pg_settings`.

## query\_rewrite\_enabled

**Parameter type:** Enum

**Default value:** `false`

**Range:** `{true | false | force}`

**Minimum scope of effect:** Per session

**When value changes take effect:** Immediate

**Required authorization to activate:** Session user

This parameter has no effect in EDB Postgres Advanced Server. For example, this form of the `ALTER SESSION` command is accepted in EDB Postgres Advanced Server without throwing a syntax error. However, it doesn't alter the session environment.

```text
ALTER SESSION SET query_rewrite_enabled = force;
```

> **Note**
>
> Since setting this parameter has no effect on the server environment, it doesn't appear in the system view `pg_settings`.

## query\_rewrite\_integrity

**Parameter type:** Enum

**Default value:** `enforced`

**Range:** `{enforced | trusted | stale_tolerated}`

**Minimum scope of effect:** Per session

**When value changes take effect:** Immediate

**Required authorization to activate:** Superuser

This parameter has no effect in EDB Postgres Advanced Server. For example, this form of the `ALTER SESSION` command is accepted in EDB Postgres Advanced Server without throwing a syntax error. However, it doesn't alter the session environment.

```text
ALTER SESSION SET query_rewrite_integrity = stale_tolerated;
```

> **Note**
>
> Since setting this parameter has no effect on the server environment, it doesn't appear in the system view `pg_settings`.

## timed\_statistics

**Parameter type:** Boolean

**Default value:** `true`

**Range:** `{true | false}`

**Minimum scope of effect:** Per session

**When value changes take effect:** Immediate

**Required authorization to activate:** Session user

Controls collecting timing data for the Dynamic Runtime Instrumentation Tools Architecture (DRITA) feature. When set to `on`, timing data is collected.

> **Note**
>
> When EDB Postgres Advanced Server is installed, the `postgresql.conf` file contains an explicit entry that sets `timed_statistics` to `off`. If this entry is commented out and the configuration file is reloaded, timed statistics collection uses the default value, which is `on`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
