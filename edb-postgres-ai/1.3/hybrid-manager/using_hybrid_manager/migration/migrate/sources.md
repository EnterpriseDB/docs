---
title: Sources
description: Learn about creating sources to prepare for database migrations to Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migrate/sources/
lastModified: 2026-03-17T01:01:27Z
---

# Sources

Sources are databases you connected to Hybrid Manager (HM) using the [Data Migration Service, or DMS,](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/) so you can use them as sources for migrations. For a database to appear in this view, you must install, configure, and run the [EDB DMS agent in reader mode](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/installing_agent/).

This view displays all the configured sources in the project.

Each source's view shows the database name, database type (Postgres or Oracle), `cdcagent` ID, the current [status](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/migrate/sources/#status), the source type, and more.

## Status

HM can display the following statuses for a source.

| Status                         | Description                                                                                                                                                                                           |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Creating                       | The database source connection is being initialized. This is a transitional state.                                                                                                                    |
| Waiting for tables metadata    | The EDB DMS agent is retrieving information about the tables (for example, names, columns, data types). If the source is stuck in this state, there might be connectivity issues with the database.   |
| Ready to start a new migration | The EDB DMS agent can successfully read the source database and you can use it for a migration.                                                                                                       |
| Running                        | A migration process using this source is currently active and data is being transferred.                                                                                                              |
| Paused                         | An ongoing migration process that's using this source was temporarily stopped.                                                                                                                        |
| Stopping                       | A currently running migration for this source is in the process of being terminated.                                                                                                                  |
| Connectivity error             | The EDB DMS agent can't establish a connection to the externally managed database. This can be due to incorrect connection details (host, port, database name, username, password) or network issues. |
| Error                          | Unspecified problem. Look at `cdcagent` logs to understand the specific cause.                                                                                                                        |

> **Note**
>
> You can't use a source or destination that's part of an active migration (in any state, including running or paused) for another migration. The existing migration must be completed or deleted before you can reuse the source or destination.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
