---
title: synchronous_commit
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/14_synchronous_commit/
lastModified: 2023-02-14T16:10:29+05:30
---

# synchronous\_commit

<div id="synchronous_commit" class="registered_link"></div>

**Parameter type:** Boolean

**Default value:** `true`

**Range:** `{true | false}`

**Minimum scope of effect:** Per session

**When value changes take effect:** Immediate

**Required authorization to activate:** Session user

Specifies whether a transaction commit waits for WAL records to be written to disk before the command returns a `success` indication to the client. The safe setting is on, which is the default. When off, there can be a delay between when success is reported to the client and when the transaction is really guaranteed to be safe against a server crash. (The maximum delay is three times `wal_writer_delay`.)

Unlike `fsync`, setting this parameter to off does not create any risk of database inconsistency. An operating system or database crash might result in some recent "allegedly committed" transactions being lost. However, the database state is the same as if those transactions aborted cleanly.

So, turning `synchronous_commit` off can be a useful alternative when performance is more important than exact certainty about the durability of a transaction. See [`Asynchronous Commit`](https://www.postgresql.org/docs/current/wal-async-commit.html) in the PostgreSQL core documentation for information.

You can change this parameter at any time. The behavior for any one transaction is determined by the setting in effect when it commits. It's therefore possible and useful to have some transactions commit synchronously and others asynchronously. For example, to make a single multistatement transaction commit asynchronously when the default is the opposite, issue `SET LOCAL synchronous_commit TO OFF` in the transaction.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
