---
title: Reporting and logging/what to log
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/06_reporting_and_logging_what_to_log/
lastModified: 2025-11-25T20:39:04+05:30
---

# Reporting and logging/what to log

<div id="reporting_and_logging_what_to_log" class="registered_link"></div>

These configuration parameters control reporting and logging.

## trace\_hints

**Parameter type:** Boolean

**Default value:** `false`

**Range:** `{true | false}`

**Minimum scope of effect:** Per session

**When value changes take effect:** Immediate

**Required Aauthorization to activate:** Session user

Use with the optimizer hints feature to provide more detailed information about whether the planner used a hint. Set the `client_min_messages` and `trace_hints` configuration parameters as follows:

```sql
SET client_min_messages TO info;
SET trace_hints TO true;
```

This example shows how the `SELECT` command with the `NO_INDEX` hint displays the added information produced when you set those configuration parameters:

```sql
EXPLAIN SELECT /*+ NO_INDEX(accounts accounts_pkey) */ * FROM accounts
WHERE aid = 100;

INFO: [HINTS] Index Scan of [accounts].[accounts_pkey] rejected because
of NO_INDEX hint.

INFO: [HINTS] Bitmap Heap Scan of [accounts].[accounts_pkey] rejected
because of NO_INDEX hint.
```

```output title="Output"
                          QUERY PLAN

-------------------------------------------------------------

Seq Scan on accounts (cost=0.00..14461.10 rows=1 width=97)
  Filter: (aid = 100)
(2 rows)
```

## edb\_log\_every\_bulk\_value

<div id="edb_log_every_bulk_value_1" class="registered_link"></div>

**Parameter type:** Boolean

**Default value:** `false`

**Range:** `{true | false}`

**Minimum scope of effect:** Per session

**When value changes take effect:** Immediate

**Required authorization to activate:** Superuser

Bulk processing logs the resulting statements into both the EDB Postgres Advanced Server log file and the EDB Audit log file. However, logging every statement in bulk processing is costly. You can control the bulk processing statements that are logged with the `edb_log_every_bulk_value` configuration parameter.

When this parameter is set to `true`, every statement in bulk processing is logged. During bulk execution, when `edb_log_every_bulk_value` is set to `false`, a log message is recorded once per bulk processing along with the number of rows processed. The duration is emitted once per bulk processing.

## edb\_log\_redact\_password\_statements

**Parameter type:** Boolean

**Default value:** `false`

**Range:** `{true | false}`

**Minimum scope of effect:** Per session

**When value changes take effect:** Immediate

**Required authorization to activate:** Superuser

The `edb_log_redact_password_statements` parameter controls whether statements that include database link password information are redacted in the server log. When enabled, this parameter ensures that sensitive password information used in CREATE ROLE/USER, ALTER ROLE/USER, CREATE DATABASE LINK and ALTER DATABASE LINK statements is not written in plain text to the log files. Instead, such statements are replaced with a redacted message, enhancing security and compliance.

To enable redaction of password statements in the logs, set the parameter to `true`:

```sql
edb=# SET edb_log_redact_password_statements=true;
```

```output title="Output"
SET
```

After enabling this parameter, any subsequent CREATE DATABASE LINK or ALTER DATABASE LINK statements that include password information will be logged with the password redacted. For example:

```sql
edb=# CREATE DATABASE LINK my_link CONNECT TO user IDENTIFIED BY 'mypassword' USING 'mydb';
```

```output title="Output"
CREATE DATABASE LINK
```

```sql
edb=# ALTER DATABASE LINK my_link CONNECT TO user IDENTIFIED BY 'newpassword';
```

```output title="Output"
ALTER DATABASE LINK
```

Corresponding log entries will show the statements with the password redacted, ensuring that sensitive information is not exposed in the logs.

```text
2025-07-23 12:19:16 UTC LOG:  statement: redacted CREATE DATABASE LINK command
2025-07-23 12:19:35 UTC LOG:  statement: redacted ALTER DATABASE LINK command
```

> **Note**
>
> - This parameter should be added to the configuration file (postgresql.conf) or set at the session level as needed.
> - It is recommended to enable this parameter in environments where database links are used to enhance security and protect sensitive information.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
