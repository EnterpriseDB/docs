---
title: CREATE QUEUE
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/30_create_queue/
lastModified: 2023-02-14T16:10:29+05:30
---

# CREATE QUEUE

<div id="create_queue" class="registered_link"></div>

EDB Postgres Advanced Server includes extra syntax not offered by Oracle with the `CREATE QUEUE SQL` command. You can use this syntax with `DBMS_AQADM`.

## Name

`CREATE QUEUE` — Create a queue.

## Synopsis

Use `CREATE QUEUE` to define a new queue:

```text
CREATE QUEUE <name> QUEUE TABLE <queue_table_name> [ ( { <option_name option_value>} [, ... ] ) ]
```

Where possible values for `option_name` and the corresponding `option_value` are:

```text
TYPE [normal_queue | exception_queue]
RETRIES [INTEGER]
RETRYDELAY [DOUBLE PRECISION]
RETENTION [DOUBLE PRECISION]
```

## Description

The `CREATE QUEUE` command allows a database superuser or any user with the system-defined `aq_administrator_role` privilege to create a queue in the current database.

If the name of the queue is schema-qualified, the queue is created in the specified schema. If the `CREATE QUEUE` command doesn't include a schema, the queue is created in the current schema. You can create a queue only in the schema where the queue table resides. The name of the queue must be unique among queues in the same schema.

Use `DROP QUEUE` to remove a queue.

## Parameters

`name`

The name (optionally schema-qualified) of the queue to create.

`queue_table_name`

The name of the queue table with which this queue is associated.

`option_name option_value`

The name of any options to associate with the new queue and the corresponding value for the option. If the call to `CREATE QUEUE` includes duplicate option names, the server returns an error. The following values are accepted:

- `TYPE` — Specify `normal_queue` to indicate that the queue is a normal queue or `exception_queue` for an exception queue. An exception queue accepts only dequeue operations.
- `RETRIES` — An integer value that specifies the maximum number of attempts to remove a message from a queue.
- `RETRYDELAY` — A double-precision value that specifies the number of seconds after a rollback that the server waits before retrying a message.
- `RETENTION` — A double-precision value that specifies the number of seconds to save a message in the queue table after dequeueing.

## Examples

This command creates a queue named `work_order` that's associated with a queue table named `work_order_table`:

```text
CREATE QUEUE work_order QUEUE TABLE work_order_table (RETRIES 5, RETRYDELAY 2);
```

The server allows 5 attempts to remove a message from the queue and enforces a retry delay of 2 seconds between attempts.

## See also

[ALTER QUEUE](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/06_alter_queue/#alter_queue), [DROP QUEUE](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/52_drop_queue/#drop_queue)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
