---
title: Postgres configuration
description: Postgres configuration parameters that affect PGD nodes.
product: EDB Postgres Distributed (PGD)
version: 5.8.1
url: https://www.enterprisedb.com/docs/pgd/5.8/postgres-configuration/
lastModified: 2025-08-21T21:29:34Z
---

# Postgres configuration

Several Postgres configuration parameters affect PGD nodes. You can set these
parameters differently on each node, although we don't generally recommend it.

For PGD's own settings, see the [PGD settings reference](https://www.enterprisedb.com/docs/pgd/5.8/reference/pgd-settings/).

## Postgres settings

To run correctly, PGD requires these Postgres settings:

- `wal_level` — Must be set to `logical`, since PGD relies on logical decoding.
- `shared_preload_libraries` — Must include `bdr` to enable the extension. Most other
  extensions can appear before or after the `bdr` entry in the comma-separated list. One exception
  to that is `pgaudit`, which must appear in the list before `bdr`. Also, don't include
  `pglogical` in this list.
- `track_commit_timestamp` — Must be set to `on` for conflict resolution to
  retrieve the timestamp for each conflicting row.

PGD requires these PostgreSQL settings to be set to appropriate values,
which vary according to the size and scale of the cluster:

- `logical_decoding_work_mem` — Memory buffer size used by logical decoding.
  Transactions larger than this size overflow the buffer and are stored
  temporarily on local disk. Default is 64MB, but you can set it much higher.
- `max_worker_processes` — PGD uses background workers for replication
  and maintenance tasks, so you need enough worker slots for it to
  work correctly. The formula for the correct minimal number of workers for each database is to add together these values:
  - One per PostgreSQL instance
  - One per database on that instance
  - Four per PGD-enabled database
  - One per peer node in the PGD group
  - The number of peer nodes times the (number of writers (bdr.num\_writers) plus one)
    You might need more worker processes temporarily when a node is being
    removed from a PGD group.
- `max_wal_senders` — Two needed for every peer node.
- `max_replication_slots` — Two needed for every peer node.
- `wal_sender_timeout` and `wal_receiver_timeout` — Determines how
  quickly a node considers its CAMO partner as disconnected or
  reconnected. See [CAMO failure scenarios](https://www.enterprisedb.com/docs/pgd/5.8/commit-scopes/camo/#failure-scenarios) for
  details.

In normal running for a group with N peer nodes, PGD requires
N slots and WAL senders. During synchronization, PGD temporarily uses another
N-1 slots and WAL senders, so be careful to set the parameters high enough
for this occasional peak demand.

With Parallel Apply turned on, the number of slots must be increased to
N slots from the formula \* writers. This is because `max_replication_slots`
also sets the maximum number of replication origins, and some of the functionality
of Parallel Apply uses an extra origin per writer.

When the [decoding worker](https://www.enterprisedb.com/docs/pgd/5.8/decoding_worker/) is enabled, this
process requires one extra replication slot per PGD group.

Changing the `max_worker_processes`, `max_wal_senders`, and `max_replication_slots` parameters requires restarting the local node.

A legacy synchronous replication mode is supported using the following
parameters. See [Commit scopes](https://www.enterprisedb.com/docs/pgd/5.8/commit-scopes/) for details and
limitations.

- `synchronous_commit`and `synchronous_standby_names` — Affects the durability and performance of PGD replication.
  in a similar way to [physical replication](https://www.postgresql.org/docs/11/runtime-config-wal.html#GUC-SYNCHRONOUS-COMMIT).

## Time-based snapshots

### `snapshot_timestamp`

Turns on the use of [timestamp-based snapshots](https://www.enterprisedb.com/docs/pgd/5.8/tssnapshots/) and sets the
timestamp to use.

## Max prepared transactions

### `max_prepared_transactions`

Needs to be set high enough to cope with the maximum number of concurrent prepared transactions across the cluster due to explicit two-phase commits, CAMO, or Eager transactions. Exceeding the limit prevents a node from running a local two-phase commit or CAMO transaction and prevents all Eager transactions on the cluster. This parameter can be set only at Postgres server start.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
