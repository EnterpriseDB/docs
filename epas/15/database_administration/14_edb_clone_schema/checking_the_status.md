---
title: Checking the status of the cloning process
description: Describes how to obtain the status of the cloning function
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/database_administration/14_edb_clone_schema/checking_the_status/
lastModified: 2025-04-14T17:22:03+02:00
---

# Checking the status of the cloning process

<div id="process_status_from_log" class="registered_link"></div>

The `process_status_from_log` function provides the status of a cloning function from its log file:

```sql
process_status_from_log (
  <log_file> TEXT
)
```

The function returns the following fields from the log file:

| Field name       | Description                                                                                               |
| ---------------- | --------------------------------------------------------------------------------------------------------- |
| `status`         | Displays either `STARTING`, `RUNNING`, `FINISH`, or `FAILED`.                                             |
| `execution_time` | When the command was executed. Displayed in timestamp format.                                             |
| `pid`            | Session process ID in which clone schema is getting called.                                               |
| `level`          | Displays either `INFO`, or `ERROR`.                                                                       |
| `stage`          | Displays either `STARTUP`, `INITIAL`, `DDL-COLLECTION`, `PRE-DATA`, `DATA-COPY`, `POST-DATA`, or `FINAL`. |
| `message`        | Information respective to each command or failure.                                                        |

## Parameters

`log_file`

Name of the log file recording the cloning of a schema as specified when the cloning function was invoked.

## Example

The following shows the use of the `process_status_from_log` function:

```sql
edb=# SELECT edb_util.process_status_from_log('clone_edb_edbcopy');
```

```output title="Output"
                                      process_status_from_log
---------------------------------------------------------------------------------------------------
 (FINISH,"26-JUN-17 11:57:03.214458 -04:00",3691,INFO,"STAGE: FINAL","successfully cloned schema")
(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
