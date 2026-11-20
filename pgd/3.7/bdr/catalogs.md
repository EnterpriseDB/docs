---
title: Catalogs and Views
product: EDB Postgres Distributed (PGD)
version: 3.7.26
url: https://www.enterprisedb.com/docs/pgd/3.7/bdr/catalogs/
lastModified: 2026-08-28T14:39:19+01:00
---

# Catalogs and Views

This section contains a listing of system catalogs and views used by BDR in
alphabetical order.

## User-Visible Catalogs and Views

### `bdr.conflict_history`

This table is the default table where conflicts are logged. The table is
RANGE partitioned on column `local_time` and is managed by Autopartition.
The default data retention period is 30 days.

Access to this table is possible by any table owner, who may see all
conflicts for the tables they own, restricted by row-level security.

For further details see [Logging Conflicts to a Table](https://www.enterprisedb.com/docs/pgd/3.7/bdr/conflicts/).

#### `bdr.conflict_history` Columns

| Name                       | Type                     | Description                                                                                                              |
| -------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| sub\_id                    | oid                      | which subscription produced this conflict; can be joined to `bdr.subscription` table                                     |
| local\_xid                 | xid                      | local transaction of the replication process at the time of conflict                                                     |
| local\_lsn                 | pg\_lsn                  | local transaction of the replication process at the time of conflict                                                     |
| local\_time                | timestamp with time zone | local time of the conflict                                                                                               |
| remote\_xid                | xid                      | transaction which produced the conflicting change on the remote node (an origin)                                         |
| remote\_commit\_lsn        | pg\_lsn                  | commit lsn of the transaction which  produced the conflicting change on the remote node (an origin)                      |
| remote\_commit\_time       | timestamp with time zone | commit timestamp of the transaction which produced the conflicting change on the remote node (an origin)                 |
| conflict\_type             | text                     | detected type of the conflict (see \[List of Conflict Types])                                                            |
| conflict\_resolution       | text                     | conflict resolution chosen (see \[List of Conflict Resolutions])                                                         |
| conflict\_index            | regclass                 | conflicting index (only valid if the index wasn't dropped since)                                                         |
| reloid                     | oid                      | conflicting relation (only valid if the index wasn't dropped since)                                                      |
| nspname                    | text                     | name of the schema for the relation on which the conflict has occurred at the time of conflict (does not follow renames) |
| relname                    | text                     | name of the relation on which the conflict has occurred at the time of conflict (does not follow renames)                |
| key\_tuple                 | json                     | json representation of the key used for matching the row                                                                 |
| remote\_tuple              | json                     | json representation of an incoming conflicting row                                                                       |
| local\_tuple               | json                     | json representation of the local conflicting row                                                                         |
| apply\_tuple               | json                     | json representation of the resulting (the one that has been applied) row                                                 |
| local\_tuple\_xmin         | xid                      | transaction which produced the local conflicting row (if `local_tuple` is set and the row is not frozen)                 |
| local\_tuple\_node\_id     | oid                      | node which produced the local conflicting row (if `local_tuple` is set and the row is not frozen)                        |
| local\_tuple\_commit\_time | timestamp with time zone | last known change timestamp of the local conflicting row (if `local_tuple` is set and the row is not frozen)             |

### `bdr.conflict_history_summary`

A view containing user-readable details on row conflict.

#### `bdr.conflict_history_summary` Columns

| Name                       | Type                     | Description                |
| -------------------------- | ------------------------ | -------------------------- |
| schema                     | text                     | Name of the schema         |
| table                      | text                     | Name of the table          |
| local\_time                | timestamp with time zone | local time of the conflict |
| local\_tuple\_commit\_time | timestamp with time zone | Time of local commit       |
| remote\_commit\_time       | timestamp with time zone | Time of remote commit      |
| conflict\_type             | text                     | Type of conflict           |
| conflict\_resolution       | text                     | Resolution adopted         |

### `bdr.consensus_kv_data`

A persistent storage for the internal Raft based KV store used by
`bdr.consensus_kv_store()` and `bdr.consensus_kv_fetch()` interfaces.

#### `bdr.consensus_kv_data` Columns

| Name           | Type        | Description                                      |
| -------------- | ----------- | ------------------------------------------------ |
| kv\_key        | text        | Unique key                                       |
| kv\_val        | json        | Arbitrary value in json format                   |
| kv\_create\_ts | timestamptz | Last write timestamp                             |
| kv\_ttl        | int         | Time to live for the value in milliseconds       |
| kv\_expire\_ts | timestamptz | Expiration timestamp (`kv_create_ts` + `kv_ttl`) |

### `bdr.camo_decision_journal`

A persistent journal of decisions resolved by a CAMO partner node
after a failover, in case `bdr.logical_transaction_status` got
invoked.  Unlike `bdr.node_pre_commit`, this does not cover
transactions processed under normal operational conditions (i.e. both
nodes of a CAMO pair are running and connected). Entries in this journal
are not ever cleaned up automatically.  This is a purely diagnostic
tool that the system does not depend on in any way.

#### `bdr.camo_decision_journal` Columns

| Name             | Type        | Description                                    |
| ---------------- | ----------- | ---------------------------------------------- |
| origin\_node\_id | oid         | OID of the node where the transaction executed |
| origin\_xid      | oid         | Transaction Id on the remote origin node       |
| decision         | char        | 'c' for commit, 'a' for abort                  |
| decision\_ts     | timestamptz | Decision time                                  |

> **Note**
>
> This catalog is only present when bdr-enterprise extension is installed.

### `bdr.crdt_handlers`

This table lists merge ("handlers") functions for all CRDT data types.

#### `bdr.crdt_handlers` Columns

| Name            | Type    | Description                       |
| --------------- | ------- | --------------------------------- |
| crdt\_type\_id  | regtype | CRDT data type id                 |
| crdt\_merge\_id | regproc | Merge function for this data type |

> **Note**
>
> This catalog is only present when bdr-enterprise extension is installed.

### `bdr.ddl_replication`

This view lists DDL replication configuration as set up by current [DDL filters](https://www.enterprisedb.com/docs/pgd/3.7/bdr/repsets/#ddl-replication-filtering).

#### `bdr.ddl_replication` Columns

| Name           | Type | Description                                                  |
| -------------- | ---- | ------------------------------------------------------------ |
| set\_ddl\_name | name | Name of DDL filter                                           |
| set\_ddl\_tag  | text | Which command tags it applies on (regular expression)        |
| set\_ddl\_role | text | Which roles it applies to (regular expression)               |
| set\_name      | name | Name of the replication set for which this filter is defined |

### `bdr.global_consensus_journal`

This catalog table logs all the Raft messages that were sent while
managing global consensus.

As for the `bdr.global_consensus_response_journal` catalog, the
payload is stored in a binary encoded format, which can be decoded
with the `bdr.decode_message_payload()` function; see the
\[`bdr.global_consensus_journal_details`] view for more details.

#### `bdr.global_consensus_journal` Columns

| Name           | Type  | Description                             |
| -------------- | ----- | --------------------------------------- |
| log\_index     | int8  | Id of the journal entry                 |
| term           | int8  | Raft term                               |
| origin         | oid   | Id of node where the request originated |
| req\_id        | int8  | Id for the request                      |
| req\_payload   | bytea | Payload for the request                 |
| trace\_context | bytea | Trace context for the request           |

### `bdr.global_consensus_journal_details`

This view presents Raft messages that were sent, and the corresponding
responses, using the `bdr.decode_message_payload()` function to decode
their payloads.

#### `bdr.global_consensus_journal_details` Columns

| Name                        | Type  | Description                                   |
| --------------------------- | ----- | --------------------------------------------- |
| log\_index                  | int8  | Id of the journal entry                       |
| term                        | int8  | Raft term                                     |
| request\_id                 | int8  | Id of the request                             |
| origin\_id                  | oid   | Id of the node where the request originated   |
| req\_payload                | bytea | Payload of the request                        |
| origin\_node\_name          | name  | Name of the node where the request originated |
| message\_type\_no           | oid   | Id of the BDR message type for the request    |
| message\_type               | text  | Name of the BDR message type for the request  |
| message\_payload            | text  | BDR message payload for the request           |
| response\_message\_type\_no | oid   | Id of the BDR message type for the response   |
| response\_message\_type     | text  | Name of the BDR message type for the response |
| response\_payload           | text  | BDR message payload for the response          |
| response\_errcode\_no       | text  | SQLSTATE for the response                     |
| response\_errcode           | text  | Error code for the response                   |
| response\_message           | text  | Error message for the response                |

### `bdr.global_consensus_response_journal`

This catalog table collects all the responses to the Raft messages
that were received while managing global consensus.

As for the `bdr.global_consensus_journal` catalog, the payload is
stored in a binary-encoded format, which can be decoded with the
`bdr.decode_message_payload()` function; see the
\[`bdr.global_consensus_journal_details`] view for more details.

#### `bdr.global_consensus_response_journal` Columns

| Name           | Type  | Description                    |
| -------------- | ----- | ------------------------------ |
| log\_index     | int8  | Id of the journal entry        |
| res\_status    | oid   | Status code for the response   |
| res\_payload   | bytea | Payload for the response       |
| trace\_context | bytea | Trace context for the response |

### `bdr.global_lock`

This catalog table stores the information needed for recovering the
global lock state on server restart.

For monitoring usage, operators should prefer the
[`bdr.global_locks`](#bdrglobal_locks) view, because the visible rows
in `bdr.global_lock` do not necessarily reflect all global locking activity.

Do not modify the contents of this table: it is an important BDR catalog.

#### `bdr.global_lock` Columns

| Name             | Type    | Description                                                                  |
| ---------------- | ------- | ---------------------------------------------------------------------------- |
| ddl\_epoch       | int8    | DDL epoch for the lock                                                       |
| origin\_node\_id | oid     | OID of the node where the global lock has originated                         |
| lock\_type       | oid     | Type of the lock (DDL or DML)                                                |
| nspname          | name    | Schema name for the locked relation                                          |
| relname          | name    | Relation name for the locked relation                                        |
| groupid          | oid     | OID of the top level group (for Advisory locks)                              |
| key1             | integer | First 32-bit key or lower order 32-bits of 64-bit key (for Advisory locks)   |
| key2             | integer | Second 32-bit key or higher order 32-bits of 64-bit key (for Advisory locks) |
| key\_is\_bigint  | boolean | True if 64-bit integer key is used (for Advisory locks)                      |

### `bdr.global_locks`

A view containing active global locks on this node. The `bdr.global_locks` view
exposes BDR's shared-memory lock state tracking, giving administrators a greater
insight into BDR's global locking activity and progress.

See [Monitoring Global Locks](https://www.enterprisedb.com/docs/pgd/3.7/bdr/monitoring/#monitoring-global-locks)
for more information about global locking.

#### `bdr.global_locks` Columns

| Name                       | Type        | Description                                                       |
| -------------------------- | ----------- | ----------------------------------------------------------------- |
| `origin_node_id`           | oid         | The OID of the node where the global lock has originated          |
| `origin_node_name`         | name        | Name of the node where the global lock has originated             |
| `lock_type`                | text        | Type of the lock (DDL or DML)                                     |
| `relation`                 | text        | Locked relation name (for DML locks) or keys (for advisory locks) |
| `pid`                      | int4        | PID of the process holding the lock                               |
| `acquire_stage`            | text        | Internal state of the lock acquisition process                    |
| `waiters`                  | int4        | List of backends waiting for the same global lock                 |
| `global_lock_request_time` | timestamptz | Time this global lock acquire was initiated by origin node        |
| `local_lock_request_time`  | timestamptz | Time the local node started trying to acquire the local-lock      |
| `last_state_change_time`   | timestamptz | Time `acquire_stage` last changed                                 |

Column details:

- `relation`: For DML locks, `relation` shows the relation on which the DML
  lock is acquired. For global advisory locks, `relation` column actually shows
  the two 32-bit integers or one 64-bit integer on which the lock is acquired.

- `origin_node_id` and `origin_node_name`: If these are the same as the local
  node's ID and name, then the local node is the initiator of the global DDL
  lock, i.e. it is the node running the acquiring transaction. If these fields
  specify a different node, then the local node is instead trying to acquire its
  local DDL lock to satisfy a global DDL lock request from a remote node.

- `pid`: The process ID of the process that requested the global DDL lock,
  if the local node is the requesting node. Null on other nodes; query the
  origin node to determine the locker pid.

- `global_lock_request_time`: The timestamp at which the global-lock request
  initiator started the process of acquiring a global lock. May be null if
  unknown on the current node. This time is stamped at the very beginning
  of the DDL lock request, and includes the time taken for DDL epoch management
  and any required flushes of pending-replication queues. Currently only
  known on origin node.

- `local_lock_request_time`: The timestamp at which the local node started
  trying to acquire the local lock for this global lock. This includes the
  time taken for the heavyweight session lock acquire, but does NOT include
  any time taken on DDL epochs or queue flushing. If the lock is re-acquired
  after local node restart, this will be the node restart time.

- `last_state_change_time`: The timestamp at which the
  `bdr.global_locks.acquire_stage` field last changed for this global lock
  entry.

### `bdr.local_consensus_snapshot`

This catalog table contains consensus snapshots created or received by
the local node.

#### `bdr.local_consensus_snapshot` Columns

| Name       | Type  | Description             |
| ---------- | ----- | ----------------------- |
| log\_index | int8  | Id of the journal entry |
| log\_term  | int8  | Raft term               |
| snapshot   | bytea | Raft snapshot data      |

### `bdr.local_consensus_state`

This catalog table stores the current state of Raft on the local node.

#### `bdr.local_consensus_state` Columns

| Name                | Type | Description                         |
| ------------------- | ---- | ----------------------------------- |
| node\_id            | oid  | Id of the node                      |
| current\_term       | int8 | Raft term                           |
| apply\_index        | int8 | Raft apply index                    |
| voted\_for          | oid  | Vote cast by this node in this term |
| last\_known\_leader | oid  | node\_id of last known Raft leader  |

### `bdr.local_node_summary`

A view containing the same information as \[`bdr.node_summary`] but only for the
local node.

### `bdr.network_path_info`

A catalog view that stores user-defined information on network costs between node locations.

#### `bdr.network_path_info` Columns

| Name              | Type    | Description                                 |
| ----------------- | ------- | ------------------------------------------- |
| node\_group\_name | name    | Name of the BDR group                       |
| node\_region1     | text    | Node region name, from bdr.node\_location   |
| node\_region2     | text    | Node region name, from bdr.node\_location   |
| node\_location1   | text    | Node location name, from bdr.node\_location |
| node\_location2   | text    | Node location name, from bdr.node\_location |
| network\_cost     | numeric | Node location name, from bdr.node\_location |

### `bdr.node`

This table lists all the BDR nodes in the cluster.

#### `bdr.node` Columns

| Name                   | Type   | Description                                                                 |
| ---------------------- | ------ | --------------------------------------------------------------------------- |
| node\_id               | oid    | Id of the node                                                              |
| node\_group\_id        | oid    | Id of the node group                                                        |
| source\_node\_id       | oid    | Id of the source node                                                       |
| node\_state            | oid    | Consistent state of the node                                                |
| target\_state          | oid    | State that the node is trying to reach (during join or promotion)           |
| seq\_id                | int4   | Sequence identifier of the node used for generating unique sequence numbers |
| dbname                 | name   | Database name of the node                                                   |
| proto\_version\_ranges | int\[] | Supported protocol version ranges by the node                               |
| reserved               | int2   | Reserved field for compatibility purposes                                   |
| synchronize\_structure | "char" | Schema synchronization done during the join                                 |

### `bdr.node_catchup_info`

This catalog table records relevant catch-up information on each node, either
if it is related to the join or part procedure.

#### `bdr.node_catchup_info` Columns

| Name             | Type    | Description                                                                |
| ---------------- | ------- | -------------------------------------------------------------------------- |
| node\_id         | oid     | Id of the node                                                             |
| node\_source\_id | oid     | Id of the node used as source for the data                                 |
| slot\_name       | name    | Slot used for this source                                                  |
| min\_node\_lsn   | pg\_lsn | Minimum LSN at which the node can switch to direct replay from a peer node |
| catchup\_state   | oid     | Status code of the catchup state                                           |
| origin\_node\_id | oid     | Id of the node from which we want transactions                             |

If a node(node\_id) needs missing data from a parting node(origin\_node\_id),
it can get it from a node that already has it(node\_source\_id) via forwarding.
The records in this table will persist until the node(node\_id) is a member of
the EDB Postgres Distributed cluster.

### `bdr.node_conflict_resolvers`

Currently configured conflict resolution for all known conflict types.

#### `bdr.node_conflict_resolvers` Columns

| Name               | Type | Description                          |
| ------------------ | ---- | ------------------------------------ |
| conflict\_type     | text | Type of the conflict                 |
| conflict\_resolver | text | Resolver used for this conflict type |

### `bdr.node_group`

This catalog table lists all the BDR node groups.

#### `bdr.node_group` Columns

| Name                              | Type     | Description                                                           |
| --------------------------------- | -------- | --------------------------------------------------------------------- |
| node\_group\_id                   | oid      | ID of the node group                                                  |
| node\_group\_name                 | name     | Name of the node group                                                |
| node\_group\_default\_repset      | oid      | Default replication set for this node group                           |
| node\_group\_default\_repset\_ext | oid      | Default replication set for this node group                           |
| node\_group\_parent\_id           | oid      | ID of parent group (0 if this is a root group)                        |
| node\_group\_flags                | int      | The group flags                                                       |
| node\_group\_uuid                 | uuid     | The uuid of the group                                                 |
| node\_group\_apply\_delay         | interval | How long a subscriber waits before applying changes from the provider |
| node\_group\_check\_constraints   | bool     | Whether the apply process should check constraints when applying data |
| node\_group\_num\_writers         | int      | Number of writers to use for subscriptions backing this node group    |
| node\_group\_enable\_wal\_decoder | bool     | Whether the group has enable\_wal\_decoder set                        |

### `bdr.node_group_replication_sets`

A view showing default replication sets create for BDR groups. See also
`bdr.replication_sets`.

#### `bdr.node_group_replication_sets` Columns

| Name                  | Type    | Description                                                                            |
| --------------------- | ------- | -------------------------------------------------------------------------------------- |
| node\_group\_name     | name    | Name of the BDR group                                                                  |
| def\_repset           | name    | Name of the default repset                                                             |
| def\_repset\_ops      | text\[] | Actions replicated by the default repset                                               |
| def\_repset\_ext      | name    | Name of the default "external" repset (usually same as def\_repset)                    |
| def\_repset\_ext\_ops | text\[] | Actions replicated by the default "external" repset (usually same as def\_repset\_ops) |

### `bdr.node_local_info`

A catalog table used to store per-node information that changes less
frequently than peer progress.

#### `bdr.node_local_info` Columns

| Name           | Type    | Description                                                               |
| -------------- | ------- | ------------------------------------------------------------------------- |
| node\_id       | oid     | The OID of the node (including the local node)                            |
| applied\_state | oid     | Internal id of the node state                                             |
| ddl\_epoch     | int8    | Last epoch number processed by the node                                   |
| pub\_repsets   | text\[] | List of replication sets publised by the node (only for the local node)   |
| slot\_name     | name    | Name of the slot used to connect to that node (NULL for the local node)   |
| sub\_repsets   | text\[] | List of replication sets subscribed by the node (only for the local node) |

### `bdr.node_location`

A catalog view that stores user-defined information on node locations.

#### `bdr.node_location` Columns

| Name              | Type | Description                 |
| ----------------- | ---- | --------------------------- |
| node\_group\_name | name | Name of the BDR group       |
| node\_id          | oid  | Id of the node              |
| node\_region      | text | User supplied region name   |
| node\_location    | text | User supplied location name |

### `bdr.node_log_config`

A catalog view that stores information on the conflict logging configurations.

#### `bdr.node_log_config` Columns

| Name                | Description                                               |
| ------------------- | --------------------------------------------------------- |
| log\_name           | name of the logging configuration                         |
| log\_to\_file       | whether it logs to the server log file                    |
| log\_to\_table      | whether it logs to a table, and which table is the target |
| log\_conflict\_type | which conflict types it logs, if NULL means all           |
| log\_conflict\_res  | which conflict resolutions it logs, if NULL means all     |

### `bdr.node_peer_progress`

Catalog used to keep track of every node's progress in the replication stream.
Every node in the cluster regularly broadcasts its progress every
`bdr.replay_progress_frequency` milliseconds to all other nodes (default
is 60000 ms - i.e 1 minute). Expect N \* (N-1) rows in this relation.

You may be more interested in the `bdr.node_slots` view for monitoring
purposes. See also [Monitoring](https://www.enterprisedb.com/docs/pgd/3.7/bdr/monitoring/).

#### `bdr.node_peer_progress` Columns

| Name                       | Type        | Description                                                                          |
| -------------------------- | ----------- | ------------------------------------------------------------------------------------ |
| node\_id                   | oid         | The OID of the originating node which reported this position info                    |
| peer\_node\_id             | oid         | The OID of the node's peer (remote node) for which this position info was reported   |
| last\_update\_sent\_time   | timestamptz | The time at which the report was sent by the originating node                        |
| last\_update\_recv\_time   | timestamptz | The time at which the report was received by the local server                        |
| last\_update\_node\_lsn    | pg\_lsn     | LSN on the originating node at the time of the report                                |
| peer\_position             | pg\_lsn     | Latest LSN of the node's peer seen by the originating node                           |
| peer\_replay\_time         | timestamptz | Latest replay time of peer seen by the reporting node                                |
| last\_update\_horizon\_xid | oid         | Internal resolution horizon: all lower xids are known resolved on the reporting node |
| last\_update\_horizon\_lsn | pg\_lsn     | Internal resolution horizon: same in terms of an LSN of the reporting node           |

### `bdr.xid_peer_progress`

Tracks per-transaction progress used by `bdr.wait_for_xid_progress()`. A node
records the transaction status here as soon as it makes progress on it, and
also reports it to all other nodes; the same table stores the reports received
from peer nodes, with `peer_node_id`, `peer_apply_xid` and `peer_apply_lsn` then
referring to the peer.

#### `bdr.xid_peer_progress` Columns

| Name                 | Type    | Description                                              |
| -------------------- | ------- | -------------------------------------------------------- |
| origin\_node\_id     | oid     | OID of the node where the transaction originated         |
| origin\_node\_topxid | xid     | Top-level XID of the transaction on the origin node      |
| origin\_node\_lsn    | pg\_lsn | LSN on the origin node at the time progress was recorded |
| peer\_node\_id       | oid     | OID of the peer node this progress report is about       |
| peer\_apply\_xid     | xid     | XID applied on the peer node                             |
| peer\_apply\_lsn     | pg\_lsn | LSN applied on the peer node                             |

### `bdr.node_pre_commit`

Used internally on a node configured as a Commit At Most Once (CAMO)
partner.  Shows the decisions a CAMO partner took on transactions in
the last 15 minutes.

#### `bdr.node_pre_commit` Columns

| Name             | Type        | Description                                    |
| ---------------- | ----------- | ---------------------------------------------- |
| origin\_node\_id | oid         | OID of the node where the transaction executed |
| origin\_xid      | oid         | Transaction Id on the remote origin node       |
| decision         | char        | 'c' for commit, 'a' for abort                  |
| local\_xid       | xid         | Transaction Id on the local node               |
| commit\_ts       | timestamptz | commit timestamp of the transaction            |
| decision\_ts     | timestamptz | decision time                                  |

> **Note**
>
> This catalog is only present when bdr-enterprise extension is installed.

### `bdr.node_replication_rates`

This view contains information about outgoing replication activity from a
given node

#### `bdr.node_replication_rates` Columns

| Column             | Type     | Description                                                                                          |
| ------------------ | -------- | ---------------------------------------------------------------------------------------------------- |
| peer\_node\_id     | oid      | The OID of node's peer (remote node) for which this info was reported                                |
| target\_name       | name     | Name of the target peer node                                                                         |
| sent\_lsn          | pg\_lsn  | Latest sent position                                                                                 |
| replay\_lsn        | pg\_lsn  | Latest position reported as replayed (visible)                                                       |
| replay\_lag        | interval | Approximate lag time for reported replay                                                             |
| replay\_lag\_bytes | int8     | Bytes difference between replay\_lsn and current WAL write position on origin                        |
| replay\_lag\_size  | text     | Human-readable bytes difference between replay\_lsn and current WAL write position                   |
| apply\_rate        | bigint   | LSNs being applied per second at the peer node                                                       |
| catchup\_interval  | interval | Approximate time required for the peer node to catchup to all the changes that are yet to be applied |

> **Note**
>
> The `replay_lag` is set immediately to zero after reconnect; we suggest
> as a workaround to use `replay_lag_bytes`, `replay_lag_size` or
> `catchup_interval`.

> **Note**
>
> This catalog is only present when bdr-enterprise extension is installed.

### `bdr.node_slots`

This view contains information about replication slots used in the current
database by BDR.

See [Monitoring Outgoing Replication](https://www.enterprisedb.com/docs/pgd/3.7/bdr/monitoring/#monitoring-outgoing-replication)
for guidance on the use and interpretation of this view's fields.

#### `bdr.node_slots` Columns

| Name                  | Type        | Description                                                                                                                              |
| --------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| target\_dbname        | name        | Database name on the target node                                                                                                         |
| node\_group\_name     | name        | Name of the BDR group                                                                                                                    |
| node\_group\_id       | oid         | The OID of the BDR group                                                                                                                 |
| origin\_name          | name        | Name of the origin node                                                                                                                  |
| target\_name          | name        | Name of the target node                                                                                                                  |
| origin\_id            | oid         | The OID of the origin node                                                                                                               |
| target\_id            | oid         | The OID of the target node                                                                                                               |
| local\_slot\_name     | name        | Name of the replication slot according to BDR                                                                                            |
| slot\_name            | name        | Name of the slot according to Postgres (should be same as above)                                                                         |
| is\_group\_slot       | boolean     | True if the slot is the node-group crash recovery slot for this node (see \["Group Replication Slot"]\(nodes.md#Group Replication Slot)) |
| is\_decoder\_slot     | boolean     | True if the slot is the [decoding worker](https://www.enterprisedb.com/docs/pgd/3.7/bdr/nodes/#decoding-worker)'s slot                   |
| plugin                | name        | Logical decoding plugin using this slot (should be pglogical\_output)                                                                    |
| slot\_type            | text        | Type of the slot (should be logical)                                                                                                     |
| datoid                | oid         | The OID of the current database                                                                                                          |
| database              | name        | Name of the current database                                                                                                             |
| temporary             | bool        | Is the slot temporary                                                                                                                    |
| active                | bool        | Is the slot active (does it have a connection attached to it)                                                                            |
| active\_pid           | int4        | The PID of the process attached to the slot                                                                                              |
| xmin                  | xid         | The XID needed by the slot                                                                                                               |
| catalog\_xmin         | xid         | The catalog XID needed by the slot                                                                                                       |
| restart\_lsn          | pg\_lsn     | LSN at which the slot can restart decoding                                                                                               |
| confirmed\_flush\_lsn | pg\_lsn     | Latest confirmed replicated position                                                                                                     |
| usesysid              | oid         | sysid of the user the replication session is running as                                                                                  |
| usename               | name        | username of the user the replication session is running as                                                                               |
| application\_name     | text        | Application name of the client connection (used by `synchronous_standby_names`)                                                          |
| client\_addr          | inet        | IP address of the client connection                                                                                                      |
| client\_hostname      | text        | Hostname of the client connection                                                                                                        |
| client\_port          | int4        | Port of the client connection                                                                                                            |
| backend\_start        | timestamptz | When the connection started                                                                                                              |
| state                 | text        | State of the replication (catchup, streaming, ...) or 'disconnected' if offline                                                          |
| sent\_lsn             | pg\_lsn     | Latest sent position                                                                                                                     |
| write\_lsn            | pg\_lsn     | Latest position reported as written                                                                                                      |
| flush\_lsn            | pg\_lsn     | Latest position reported as flushed to disk                                                                                              |
| replay\_lsn           | pg\_lsn     | Latest position reported as replayed (visible)                                                                                           |
| write\_lag            | interval    | Approximate lag time for reported write                                                                                                  |
| flush\_lag            | interval    | Approximate lag time for reported flush                                                                                                  |
| replay\_lag           | interval    | Approximate lag time for reported replay                                                                                                 |
| sent\_lag\_bytes      | int8        | Bytes difference between sent\_lsn and current WAL write position                                                                        |
| write\_lag\_bytes     | int8        | Bytes difference between write\_lsn and current WAL write position                                                                       |
| flush\_lag\_bytes     | int8        | Bytes difference between flush\_lsn and current WAL write position                                                                       |
| replay\_lag\_bytes    | int8        | Bytes difference between replay\_lsn and current WAL write position                                                                      |
| sent\_lag\_size       | text        | Human-readable bytes difference between sent\_lsn and current WAL write position                                                         |
| write\_lag\_size      | text        | Human-readable bytes difference between write\_lsn and current WAL write position                                                        |
| flush\_lag\_size      | text        | Human-readable bytes difference between flush\_lsn and current WAL write position                                                        |
| replay\_lag\_size     | text        | Human-readable bytes difference between replay\_lsn and current WAL write position                                                       |

> **Note**
>
> The `replay_lag` is set immediately to zero after reconnect; we suggest
> as a workaround to use `replay_lag_bytes` or `replay_lag_size`.

### `bdr.node_summary`

This view contains summary information about all BDR nodes known to the local
node.

#### `bdr.node_summary` Columns

| Name                      | Type    | Description                                                                 |
| ------------------------- | ------- | --------------------------------------------------------------------------- |
| node\_name                | name    | Name of the node                                                            |
| node\_group\_name         | name    | Name of the BDR group the node is part of                                   |
| interface\_name           | name    | Name of the connection interface used by the node                           |
| interface\_connstr        | text    | Connection string to the node                                               |
| peer\_state\_name         | text    | Consistent state of the node in human readable form                         |
| peer\_target\_state\_name | text    | State which the node is trying to reach (during join or promotion)          |
| node\_seq\_id             | int4    | Sequence identifier of the node used for generating unique sequence numbers |
| node\_local\_dbname       | name    | Database name of the node                                                   |
| pub\_repsets              | text\[] | Deprecated column, always NULL, will be removed in 4.0                      |
| sub\_repsets              | text\[] | Deprecated column, always NULL, will be removed in 4.0                      |
| node\_id                  | oid     | The OID of the node                                                         |
| node\_group\_id           | oid     | The OID of the BDR node group                                               |
| if\_id                    | oid     | The OID of the connection interface used by the node                        |

### `bdr.replication_sets`

A view showing replication sets defined in the BDR group, even if they are not
currently used by any node.

#### `bdr.replication_sets` Columns

| Name                 | Type    | Description                                                                    |
| -------------------- | ------- | ------------------------------------------------------------------------------ |
| set\_id              | oid     | The OID of the replication set                                                 |
| set\_name            | name    | Name of the replication set                                                    |
| replicate\_insert    | boolean | Indicates if the replication set replicates INSERTs                            |
| replicate\_update    | boolean | Indicates if the replication set replicates UPDATEs                            |
| replicate\_delete    | boolean | Indicates if the replication set replicates DELETEs                            |
| replicate\_truncate  | boolean | Indicates if the replication set replicates TRUNCATEs                          |
| set\_autoadd\_tables | boolean | Indicates if new tables will be automatically added to this replication set    |
| set\_autoadd\_seqs   | boolean | Indicates if new sequences will be automatically added to this replication set |

### `bdr.schema_changes`

A simple view to show all the changes to schemas within BDR.

#### `bdr.schema_changes` Columns

| Name                       | Type         | Description               |
| -------------------------- | ------------ | ------------------------- |
| schema\_changes\_ts        | timestampstz | The ID of the trigger     |
| schema\_changes\_change    | char         | A flag of change type     |
| schema\_changes\_classid   | oid          | Class ID                  |
| schema\_changes\_objectid  | oid          | Object ID                 |
| schema\_changes\_subid     | smallint     | The subscription          |
| schema\_changes\_descr     | text         | The object changed        |
| schema\_changes\_addrnames | text\[]      | Location of schema change |

### `bdr.sequence_alloc`

A view to see the allocation details for galloc sequences.

#### `bdr.sequence_alloc` Columns

| Name                   | Type        | Description                                      |
| ---------------------- | ----------- | ------------------------------------------------ |
| seqid                  | regclass    | The ID of the sequence                           |
| seq\_chunk\_size       | bigint      | A sequence number for the chunk within its value |
| seq\_allocated\_up\_to | bigint      |                                                  |
| seq\_nallocs           | bigint      |                                                  |
| seq\_last\_alloc       | timestamptz | Last sequence allocated                          |

### `bdr.schema_changes`

A simple view to show all the changes to schemas within BDR.

#### `bdr.schema_changes` Columns

| Name                       | Type         | Description               |
| -------------------------- | ------------ | ------------------------- |
| schema\_changes\_ts        | timestampstz | The ID of the trigger     |
| schema\_changes\_change    | char         | A flag of change type     |
| schema\_changes\_classid   | oid          | Class ID                  |
| schema\_changes\_objectid  | oid          | Object ID                 |
| schema\_changes\_subid     | smallint     | The subscription          |
| schema\_changes\_descr     | text         | The object changed        |
| schema\_changes\_addrnames | text\[]      | Location of schema change |

### `bdr.sequence_alloc`

A view to see the sequences allocated.

#### `bdr.sequence_alloc` Columns

| Name                   | Type        | Description                                      |
| ---------------------- | ----------- | ------------------------------------------------ |
| seqid                  | regclass    | The ID of the sequence                           |
| seq\_chunk\_size       | bigint      | A sequence number for the chunk within its value |
| seq\_allocated\_up\_to | bigint      |                                                  |
| seq\_nallocs           | bigint      |                                                  |
| seq\_last\_alloc       | timestamptz | Last sequence allocated                          |

### `bdr.sequences`

This view lists all sequences with their kind, excluding sequences
for internal BDR book-keeping.

#### `bdr.sequences` Columns

| Name    | Type | Description                                           |
| ------- | ---- | ----------------------------------------------------- |
| nspname | name | Namespace containing the sequence                     |
| relname | name | Name of the sequence                                  |
| seqkind | text | Type of the sequence ('local', 'timeshard', 'galloc') |

### `bdr.stat_activity`

Dynamic activity for each backend or worker process.

This contains the same information as pg\_stat\_activity, except wait\_event
is set correctly when the wait relates to BDR.

### `bdr.stat_relation`

Apply statistics for each relation. Only contains data if the tracking
is enabled and something was replicated for a given relation.

#### `bdr.stat_relation` Columns

| Column                | Type             | Description                                                                                                                           |
| --------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| nspname               | name             | Name of the relation's schema                                                                                                         |
| relname               | name             | Name of the relation                                                                                                                  |
| relid                 | oid              | Oid of the relation                                                                                                                   |
| total\_time           | double precision | Total time spent processing replication for the relation                                                                              |
| ninsert               | bigint           | Number of inserts replicated for the relation                                                                                         |
| nupdate               | bigint           | Number of updates replicated for the relation                                                                                         |
| ndelete               | bigint           | Number of deletes replicated for the relation                                                                                         |
| ntruncate             | bigint           | Number of truncates replicated for the relation                                                                                       |
| shared\_blks\_hit     | bigint           | Total number of shared block cache hits for the relation                                                                              |
| shared\_blks\_read    | bigint           | Total number of shared blocks read for the relation                                                                                   |
| shared\_blks\_dirtied | bigint           | Total number of shared blocks dirtied for the relation                                                                                |
| shared\_blks\_written | bigint           | Total number of shared blocks written for the relation                                                                                |
| blk\_read\_time       | double precision | Total time spent reading blocks for the relation, in milliseconds (if `track_io_timing` is enabled, otherwise zero)                   |
| blk\_write\_time      | double precision | Total time spent writing blocks for the relation, in milliseconds (if `track_io_timing` is enabled, otherwise zero)                   |
| lock\_acquire\_time   | double precision | Total time spent acquiring locks on the relation, in milliseconds (if `pglogical.track_apply_lock_timing` is enabled, otherwise zero) |

### `bdr.stat_subscription`

Apply statistics for each subscription. Only contains data if the tracking
is enabled.

#### `bdr.stat_subscription` Columns

| Column                 | Type                     | Description                                                                                                         |
| ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| sub\_name              | name                     | Name of the subscription                                                                                            |
| subid                  | oid                      | Oid of the subscription                                                                                             |
| nconnect               | bigint                   | Number of times this subscription has connected upstream                                                            |
| ncommit                | bigint                   | Number of commits this subscription did                                                                             |
| nabort                 | bigint                   | Number of aborts writer did for this subscription                                                                   |
| nerror                 | bigint                   | Number of errors writer has hit for this subscription                                                               |
| nskippedtx             | bigint                   | Number of transactions skipped by writer for this subscription (due to `skip_transaction` conflict resolver)        |
| ninsert                | bigint                   | Number of inserts this subscription did                                                                             |
| nupdate                | bigint                   | Number of updates this subscription did                                                                             |
| ndelete                | bigint                   | Number of deletes this subscription did                                                                             |
| ntruncate              | bigint                   | Number of truncates this subscription did                                                                           |
| nddl                   | bigint                   | Number of DDL operations this subscription has executed                                                             |
| ndeadlocks             | bigint                   | Number of errors that were caused by deadlocks                                                                      |
| nretries               | bigint                   | Number of retries the writer did (without going for full restart/reconnect)                                         |
| shared\_blks\_hit      | bigint                   | Total number of shared block cache hits by the subscription                                                         |
| shared\_blks\_read     | bigint                   | Total number of shared blocks read by the subscription                                                              |
| shared\_blks\_dirtied  | bigint                   | Total number of shared blocks dirtied by the subscription                                                           |
| shared\_blks\_written  | bigint                   | Total number of shared blocks written by the subscription                                                           |
| blk\_read\_time        | double precision         | Total time the subscription spent reading blocks, in milliseconds (if `track_io_timing` is enabled, otherwise zero) |
| blk\_write\_time       | double precision         | Total time the subscription spent writing blocks, in milliseconds (if `track_io_timing` is enabled, otherwise zero) |
| connect\_time          | timestamp with time zone | Time when the current upstream connection was established, NULL if not connected                                    |
| last\_disconnect\_time | timestamp with time zone | Time when the last upstream connection was dropped                                                                  |
| start\_lsn             | pg\_lsn                  | LSN from which this subscription requested to start replication from the upstream                                   |
| retries\_at\_same\_lsn | bigint                   | Number of attempts the subscription was restarted from the same LSN value                                           |
| curr\_ncommit          | bigint                   | Number of commits this subscription did after the current connection was established                                |

### `bdr.subscription`

This catalog table lists all the subscriptions owned by the local BDR
node, and which mode they are in.

#### `bdr.subscription` Columns

| Name                  | Type | Description               |
| --------------------- | ---- | ------------------------- |
| pgl\_subscription\_id | oid  | Subscription in pglogical |
| nodegroup\_id         | oid  | Id of nodegroup           |
| origin\_node\_id      | oid  | Id of origin node         |
| target\_node\_id      | oid  | Id of target node         |
| subscription\_mode    | char | Mode of subscription      |
| source\_node\_id      | oid  | Id of source node         |
| ddl\_epoch            | int8 | DDL epoch                 |

### `bdr.subscription_summary`

This view contains summary information about all BDR subscriptions that the
local node has to other nodes.

#### `bdr.subscription_summary` Columns

| Name                          | Type        | Description                                                                              |
| ----------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| node\_group\_name             | name        | Name of the BDR group the node is part of                                                |
| sub\_name                     | name        | Name of the subscription                                                                 |
| origin\_name                  | name        | Name of the origin node                                                                  |
| target\_name                  | name        | Name of the target node (normally local node)                                            |
| sub\_enabled                  | bool        | Is the subscription enabled                                                              |
| sub\_slot\_name               | name        | Slot name on the origin node used by this subscription                                   |
| sub\_replication\_sets        | text\[]     | Replication sets subscribed                                                              |
| sub\_forward\_origins         | text\[]     | Does the subscription accept changes forwarded from other nodes besides the origin       |
| sub\_apply\_delay             | interval    | Delay transactions by this much compared to the origin                                   |
| sub\_origin\_name             | name        | Replication origin name used by this subscription                                        |
| bdr\_subscription\_mode       | char        | Subscription mode                                                                        |
| subscription\_status          | text        | Status of the subscription worker                                                        |
| node\_group\_id               | oid         | The OID of the BDR group the node is part of                                             |
| sub\_id                       | oid         | The OID of the subscription                                                              |
| origin\_id                    | oid         | The OID of the origin node                                                               |
| target\_id                    | oid         | The OID of the target node                                                               |
| receive\_lsn                  | pg\_lsn     | Latest LSN of any change or message received (this can go backwards in case of restarts) |
| receive\_commit\_lsn          | pg\_lsn     | Latest LSN of last COMMIT received (this can go backwards in case of restarts)           |
| last\_xact\_replay\_lsn       | pg\_lsn     | LSN of last transaction replayed on this subscription                                    |
| last\_xact\_flush\_lsn        | timestamptz | LSN of last transaction replayed on this subscription that's flushed durably to disk     |
| last\_xact\_replay\_timestamp | timestamptz | Timestamp of last transaction replayed on this subscription                              |

### `bdr.replication_status`

This view shows incoming replication status between the local node and all other
nodes in the EDB Postgres Distributed cluster. If this is a logical standby node, then only
the status for its upstream node is shown. Similarly, replication
status is not shown for subscriber-only nodes since they never send
replication changes to other nodes.

#### `bdr.replication_status` Columns

| Column               | Type                     | Description                                                     |
| -------------------- | ------------------------ | --------------------------------------------------------------- |
| node\_id             | oid                      | OID of the local node                                           |
| node\_name           | name                     | Name of the local node                                          |
| origin\_node\_id     | oid                      | OID of the origin node                                          |
| origin\_node\_name   | name                     | Name of the origin node                                         |
| sub\_id              | oid                      | OID of the subscription for this origin node                    |
| sub\_name            | name                     | Name of the subscription for this origin node                   |
| connected            | boolean                  | Is this node connected to the origin node?                      |
| replication\_blocked | boolean                  | Is the replication currently blocked for this origin?           |
| connect\_time        | timestamp with time zone | Time when the current connection was established                |
| disconnect\_time     | timestamp with time zone | Time when the last connection was dropped                       |
| uptime               | interval                 | Duration since the current connection is active for this origin |

### `bdr.tables`

This view lists information about table membership in replication sets.
If a table exists in multiple replication sets, it will appear multiple times
in this table.

#### `bdr.tables` Columns

| Name                | Type    | Description                                                                          |
| ------------------- | ------- | ------------------------------------------------------------------------------------ |
| relid               | oid     | The OID of the relation                                                              |
| nspname             | name    | Name of the schema relation is in                                                    |
| relname             | name    | Name of the relation                                                                 |
| set\_name           | name    | Name of the replication set                                                          |
| set\_ops            | text\[] | List of replicated operations                                                        |
| rel\_columns        | text\[] | List of replicated columns (NULL = all columns) (\*)                                 |
| row\_filter         | text    | Row filtering expression                                                             |
| conflict\_detection | text    | Conflict detection method used: row\_origin (default), row\_version or column\_level |

(\*) These columns are reserved for future use and should currently be NULL

### `bdr.trigger`

Within this view, you can see all the stream triggers created.
Often triggers here are created from `bdr.create_conflict_trigger`.

#### `bdr.trigger` Columns

| Name            | Type     | Description                   |
| --------------- | -------- | ----------------------------- |
| trigger\_id     | oid      | The ID of the trigger         |
| trigger\_reloid | regclass | Name of the relating function |
| trigger\_pgtgid | oid      | Postgres trigger ID           |
| trigger\_type   | char     | Type of trigger call          |
| trigger\_name   | name     | Name of the trigger           |

### `bdr.triggers`

An expanded view of `bdr.trigger` with more easy to read columns.

| Name                | Type                | Description             |
| ------------------- | ------------------- | ----------------------- |
| trigger\_name       | name                | The name of the trigger |
| event\_manipulation | text                | The operation(s)        |
| trigger\_type       | bdr.trigger\_type   | Type of trigger         |
| trigger\_table      | bdr.trigger\_reloid | The table that calls it |
| trigger\_function   | name                | The function used       |

### `bdr.workers`

Information about running BDR worker processes.

This can be joined with `bdr.stat_activity` using pid to get even more insight
into the state of BDR workers.

#### `bdr.workers` Columns

| Name                      | Type        | Description                                               |
| ------------------------- | ----------- | --------------------------------------------------------- |
| worker\_pid               | int         | Process Id of the worker process                          |
| worker\_role              | int         | Numeric representation of worker role                     |
| worker\_role\_name        | text        | Name of the worker role                                   |
| worker\_subid             | oid         | Subscription Id if the worker is associated with one      |
| worker\_commit\_timestamp | timestamptz | Last commit timestamp processed by this worker if any     |
| worker\_local\_timestamp  | timestamptz | Local time at which the above commit was processed if any |

### `bdr.worker_errors`

A persistent log of errors from BDR background worker processes, which
includes errors from the underlying pglogical worker processes.

#### `bdr.worker_errors` Columns

| Name                    | Type        | Description                                                                                                 |
| ----------------------- | ----------- | ----------------------------------------------------------------------------------------------------------- |
| node\_group\_name       | name        | Name of the BDR group                                                                                       |
| origin\_name            | name        | Name of the origin node                                                                                     |
| source\_name            | name        |                                                                                                             |
| target\_name            | name        | Name of the target node (normally local node)                                                               |
| sub\_name               | name        | Name of the subscription                                                                                    |
| worker\_role            | int4        | Internal identifier of the role of this worker (1: manager, 2: receive, 3: writer, 4: output, 5: extension) |
| worker\_role\_name      | text        | Role name                                                                                                   |
| worker\_pid             | int4        | Process id of the worker causing the error                                                                  |
| error\_time             | timestamptz | Date and time of the error                                                                                  |
| error\_age              | interval    | Duration since error                                                                                        |
| error\_message          | text        | Description of the error                                                                                    |
| error\_context\_message | text        | Context in which the error happened                                                                         |
| remoterelid             | oid         | Oid of remote relation on that node                                                                         |
| subwriter\_id           | oid         |                                                                                                             |
| subwriter\_name         | name        |                                                                                                             |

### `bdr.autopartition_work_queue`

Contains work items created and processed by autopartition worker. The work items are created on
only one node and processed on different nodes.

#### `bdr.autopartition_work_queue` Columns

| Column               | Type   | Description                                                                                                              |
| -------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------ |
| ap\_wq\_workid       | bigint | The Unique ID of the work item                                                                                           |
| ap\_wq\_relname      | name   | Name of the relation being autopartitioned                                                                               |
| ap\_wq\_relnamespace | name   | Name of the tablespace specified in rule for this work item.                                                             |
| ap\_wq\_partname     | name   | Name of the partition created by the workitem                                                                            |
| ap\_wq\_work\_kind   | char   | The work kind can be either 'c' (Create Partition), 'm' (Migrate Partition), 'd' (Drop Partition), 'a' (Alter Partition) |
| ap\_wq\_work\_sql    | text   | SQL query for the work item                                                                                              |
| ap\_wq\_depends\_on  | Oid\[] | Oids of the nodes on which the work item depends                                                                         |

### `bdr.autopartition_workitem_status`

The status of the work items which is updated locally on each node.

#### `bdr.autopartition_workitem_status` Columns

| Column               | Type        | Description                                                                        |
| -------------------- | ----------- | ---------------------------------------------------------------------------------- |
| ap\_wi\_workid       | bigint      | The ID of the work item                                                            |
| ap\_wi\_nodeid       | Oid         | Oid of the node on which the work item is being processed                          |
| ap\_wi\_status       | char        | The status can be either 'q' (Queued), 'c' (Complete), 'f' (Failed), 'u' (Unknown) |
| ap\_wi\_started\_at  | timestamptz | The start timestamptz of work item                                                 |
| ap\_wi\_finished\_at | timestamptz | The end timestamptz of work item                                                   |

### `bdr.autopartition_local_work_queue`

Contains work items created and processed by autopartition worker. This is
similar to bdr.autopartition\_work\_queue, except that these work items are for
locally managed tables. Each node creates and processes its own local work
items, independent of other nodes in the cluster.

#### `bdr.autopartition_local_work_queue` Columns

| Column               | Type   | Description                                                                                                              |
| -------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------ |
| ap\_wq\_workid       | bigint | The Unique ID of the work item                                                                                           |
| ap\_wq\_relname      | name   | Name of the relation being autopartitioned                                                                               |
| ap\_wq\_relnamespace | name   | Name of the tablespace specified in rule for this work item.                                                             |
| ap\_wq\_partname     | name   | Name of the partition created by the workitem                                                                            |
| ap\_wq\_work\_kind   | char   | The work kind can be either 'c' (Create Partition), 'm' (Migrate Partition), 'd' (Drop Partition), 'a' (Alter Partition) |
| ap\_wq\_work\_sql    | text   | SQL query for the work item                                                                                              |
| ap\_wq\_depends\_on  | Oid\[] | Always NULL                                                                                                              |

### `bdr.autopartition_local_workitem_status`

The status of the work items for locally managed tables.

#### `bdr.autopartition_local_workitem_status` Columns

| Column               | Type        | Description                                                                        |
| -------------------- | ----------- | ---------------------------------------------------------------------------------- |
| ap\_wi\_workid       | bigint      | The ID of the work item                                                            |
| ap\_wi\_nodeid       | Oid         | Oid of the node on which the work item is being processed                          |
| ap\_wi\_status       | char        | The status can be either 'q' (Queued), 'c' (Complete), 'f' (Failed), 'u' (Unknown) |
| ap\_wi\_started\_at  | timestamptz | The start timestamptz of work item                                                 |
| ap\_wi\_finished\_at | timestamptz | The end timestamptz of work item                                                   |

### `bdr.autopartition_rules`

Stores the autopartitioning rule configured for each relation via `bdr.autopartition()`.
One row per relation that has autopartitioning enabled.

#### `bdr.autopartition_rules` Columns

| Column                             | Type        | Description                                                            |
| ---------------------------------- | ----------- | ---------------------------------------------------------------------- |
| ap\_partition\_relid               | oid         | Oid of the relation being autopartitioned                              |
| ap\_partition\_relname             | name        | Name of the relation being autopartitioned                             |
| ap\_partition\_schemaname          | name        | Schema of the relation being autopartitioned                           |
| ap\_partition\_increment\_kind     | char        | Internal kind marker for the partition increment value                 |
| ap\_secondary\_tablespace          | oid         | Tablespace Oid for new partitions, if configured                       |
| ap\_minimum\_advance\_partitions   | integer     | Minimum number of partitions to keep pre-created ahead of current data |
| ap\_maximum\_advance\_partitions   | integer     | Maximum number of partitions to keep pre-created ahead of current data |
| ap\_is\_autoscaled                 | boolean     | Whether the partition increment is automatically scaled                |
| ap\_latest\_partitions             | integer     | Number of most recent partitions to keep                               |
| ap\_enabled                        | boolean     | Whether autopartitioning is currently enabled for this relation        |
| ap\_migrate\_after\_period         | interval    | Age after which partitions are migrated, if configured                 |
| ap\_data\_retention\_period        | interval    | Age after which partitions are dropped, if configured                  |
| ap\_last\_triggered                | timestamptz | When the autopartition worker last processed this rule                 |
| ap\_partition\_increment\_value    | text        | The configured partition increment                                     |
| ap\_partition\_autocreate\_expr    | text        | Expression used to determine when to create the next partition         |
| ap\_partition\_initial\_lowerbound | text        | Lower bound used for the first partition                               |
| ap\_partition\_last\_upperbound    | text        | Upper bound of the most recently created partition                     |
| ap\_is\_local                      | boolean     | Whether this rule is managed locally rather than cluster-wide          |

### `bdr.autopartition_partitions`

Tracks the lifecycle of each partition created by the autopartitioning worker for
a given parent relation.

#### `bdr.autopartition_partitions` Columns

| Column                 | Type        | Description                                    |
| ---------------------- | ----------- | ---------------------------------------------- |
| ap\_parent\_relid      | oid         | Oid of the autopartitioned parent relation     |
| ap\_part\_relname      | name        | Name of the partition                          |
| ap\_part\_created\_at  | timestamptz | When the partition was created                 |
| ap\_part\_migrated\_at | timestamptz | When the partition was migrated, if applicable |
| ap\_part\_dropped\_at  | timestamptz | When the partition was dropped, if applicable  |

### `bdr.group_camo_details`

Uses `bdr.run_on_all_nodes` to gather CAMO-related information from all nodes.

#### `bdr.group_camo_details` Columns

| Name                         | Type | Description                                                                         |
| ---------------------------- | ---- | ----------------------------------------------------------------------------------- |
| node\_id                     | text | Internal node id                                                                    |
| node\_name                   | text | Name of the node                                                                    |
| camo\_partner\_of            | text | Node name for whom this node is partner                                             |
| camo\_origin\_for            | text | Node name for whom this node is origin                                              |
| is\_camo\_partner\_connected | text | Connection status                                                                   |
| is\_camo\_partner\_ready     | text | Readiness status                                                                    |
| camo\_transactions\_resolved | text | Are there any pending and unresolved CAMO transactions                              |
| apply\_lsn                   | text | Latest position reported as replayed (visible)                                      |
| receive\_lsn                 | text | Latest LSN of any change or message received (can go backwards in case of restarts) |
| apply\_queue\_size           | text | Bytes difference between apply\_lsn and receive\_lsn                                |

> **Note**
>
> This catalog is only present when bdr-enterprise extension is installed.

### `bdr.group_raft_details`

Uses `bdr.run_on_all_nodes` to gather Raft Consensus status from all nodes.

#### `bdr.group_raft_details` Columns

| Name              | Type | Description                    |
| ----------------- | ---- | ------------------------------ |
| node\_id          | oid  | Internal node id               |
| node\_name        | name | Name of the node               |
| state             | text | Raft worker state on the node  |
| leader\_id        | oid  | Node id of the RAFT\_LEADER    |
| current\_term     | int  | Raft election internal id      |
| commit\_index     | int  | Raft snapshot internal id      |
| nodes             | int  | Number of nodes accessible     |
| voting\_nodes     | int  | Number of nodes voting         |
| protocol\_version | int  | Protocol version for this node |

### `bdr.raft_instances`

Lists the local Raft consensus instance for each top-level node group. There is
currently always exactly one Raft instance per top-level group.

#### `bdr.raft_instances` Columns

| Name            | Type | Description                                |
| --------------- | ---- | ------------------------------------------ |
| instance\_id    | int  | Identifier of the Raft instance (always 1) |
| node\_group\_id | oid  | OID of the top-level node group            |

### `bdr.group_replslots_details`

Uses `bdr.run_on_all_nodes` to gather BDR/pglogical slot information from all nodes.

#### `bdr.group_replslots_details` Columns

| Name              | Type     | Description                                                                     |
| ----------------- | -------- | ------------------------------------------------------------------------------- |
| node\_group\_name | text     | Name of the BDR group                                                           |
| origin\_name      | text     | Name of the origin node                                                         |
| target\_name      | text     | Name of the target node                                                         |
| slot\_name        | text     | Slot name on the origin node used by this subscription                          |
| active            | text     | Is the slot active (does it have a connection attached to it)                   |
| state             | text     | State of the replication (catchup, streaming, ...) or 'disconnected' if offline |
| write\_lag        | interval | Approximate lag time for reported write                                         |
| flush\_lag        | interval | Approximate lag time for reported flush                                         |
| replay\_lag       | interval | Approximate lag time for reported replay                                        |
| sent\_lag\_bytes  | int8     | Bytes difference between sent\_lsn and current WAL write position               |
| write\_lag\_bytes | int8     | Bytes difference between write\_lsn and current WAL write position              |
| flush\_lag\_bytes | int8     | Bytes difference between flush\_lsn and current WAL write position              |
| replay\_lag\_byte | int8     | Bytes difference between replay\_lsn and current WAL write position             |

### `bdr.group_subscription_summary`

Uses `bdr.run_on_all_nodes` to gather subscription status from all nodes.

#### `bdr.group_subscription_summary` Columns

| Name                          | Type | Description                                       |
| ----------------------------- | ---- | ------------------------------------------------- |
| origin\_node\_name            | text | Name of the origin of the subscription            |
| target\_node\_name            | text | Name of the target of the subscription            |
| last\_xact\_replay\_timestamp | text | Timestamp of the last replayed transaction        |
| sub\_lag\_seconds             | text | Lag between now and last\_xact\_replay\_timestamp |

### `bdr.group_versions_details`

Uses `bdr.run_on_all_nodes` to gather BDR/pglogical information from all nodes.

#### `bdr.group_versions_details` Columns

| Name               | Type | Description                        |
| ------------------ | ---- | ---------------------------------- |
| node\_id           | oid  | Internal node id                   |
| node\_name         | name | Name of the node                   |
| postgres\_version  | text | PostgreSQL version on the node     |
| pglogical\_version | text | Pglogical version on the node      |
| bdr\_version       | text | BDR version on the node            |
| bdr\_edition       | text | BDR edition (SE or EE) on the node |

## Internal Catalogs and Views

### `bdr.ddl_epoch`

An internal catalog table holding state per DDL epoch.

#### `bdr.ddl_epoch` Columns

| Name                    | Type        | Description                                                              |
| ----------------------- | ----------- | ------------------------------------------------------------------------ |
| ddl\_epoch              | int8        | Monotonically increasing epoch number                                    |
| origin\_node\_id        | oid         | Internal node id of the node that requested creation of this epoch       |
| epoch\_consume\_timeout | timestamptz | Timeout of this epoch                                                    |
| epoch\_consumed         | boolean     | Switches to true as soon as the local node has fully processed the epoch |

### `bdr.internal_node_pre_commit`

Internal catalog table; please use the `bdr.node_pre_commit` view.

> **Note**
>
> This catalog is only present when bdr-enterprise extension is installed.

### `bdr.sequence_kind`

An internal state table storing the type of each non-local sequence.  The view
`bdr.sequences` is recommended for diagnostic purposes.

#### `bdr.sequence_kind` Columns

| Name    | Type | Description                                                 |
| ------- | ---- | ----------------------------------------------------------- |
| seqid   | oid  | Internal OID of the sequence                                |
| seqkind | char | Internal sequence kind ('l'=local,'t'=timeshard,'g'=galloc) |

### `bdr.state_journal`

An internal node state journal.  Please use `bdr.state_journal_details` for
diagnostic purposes instead.

### `bdr.state_journal_details`

Every change of node state of each node is logged permanently in `bdr.state_journal`
for diagnostic purposes.
This view provides node names and human-readable state names and carries all of
the information in that journal.
Once a node has successfully joined, the last state entry will be
`BDR_PEER_STATE_ACTIVE`. This differs from the state of each replication connection
listed in `bdr.node_slots.state`.

#### `bdr.state_journal_details` Columns

| Name           | Type        | Description                                              |
| -------------- | ----------- | -------------------------------------------------------- |
| state\_counter | oid         | Monotonically increasing event counter, per node         |
| node\_id       | oid         | Internal node id                                         |
| node\_name     | name        | Name of the node                                         |
| state          | oid         | Internal state id                                        |
| state\_name    | text        | Human-readable state name                                |
| entered\_time  | timestamptz | Point in time the current node observed the state change |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
