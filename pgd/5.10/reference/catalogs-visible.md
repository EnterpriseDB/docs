---
title: User visible catalogs and views
product: EDB Postgres Distributed (PGD)
version: 5.10.0
url: https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/
lastModified: 2026-11-20T11:33:47Z
---

# User visible catalogs and views

Catalogs and views are listed here in alphabetical order.

### `bdr.camo_decision_journal`

A persistent journal of decisions resolved by a CAMO partner node
after a failover, in case `bdr.logical_transaction_status` was
invoked. Unlike `bdr.commit_decisions`, this doesn't cover
transactions processed under normal operational conditions (that is, both
nodes of a CAMO pair are running and connected). Entries in this journal
aren't ever cleaned up automatically. This is a diagnostic
tool that the system doesn't depend on.

#### `bdr.camo_decision_journal` columns

| Name             | Type        | Description                                    |
| ---------------- | ----------- | ---------------------------------------------- |
| origin\_node\_id | oid         | OID of the node where the transaction executed |
| origin\_xid      | oid         | Transaction ID on the remote origin node       |
| decision         | char        | 'c' for commit, 'a' for abort                  |
| decision\_ts     | timestamptz | Decision time                                  |

### `bdr.commit_decisions`

A view used internally on nodes configured as Commit At Most Once (CAMO) partners. Shows the decisions a CAMO partner took on transactions in the last 15 minutes.

#### `bdr.commit_decisions` columns

| Name             | Type        | Description                                         |
| ---------------- | ----------- | --------------------------------------------------- |
| origin\_node\_id | oid         | OID of the node where the transaction executed      |
| origin\_xid      | xid         | Transaction ID on the remote origin node            |
| decision         | char        | Decision taken; can be`c` (commit), or `a` (abort). |
| local\_xid       | xid         | Transaction ID on the local node                    |
| commit\_ts       | timestamptz | Commit timestamp of the transaction                 |
| decision\_ts     | timestamptz | Decision time                                       |

### `bdr.commit_scopes`

Catalog storing all possible commit scopes that you can use for
`bdr.commit_scope` to enable Group Commit.

#### `bdr.commit_scopes`  columns

| Name                               | Type | Description                                             |
| ---------------------------------- | ---- | ------------------------------------------------------- |
| commit\_scope\_id                  | oid  | ID of the scope to be referenced                        |
| commit\_scope\_name                | name | Name of the scope to be referenced                      |
| commit\_scope\_origin\_node\_group | oid  | Node group for which the rule applies, referenced by ID |
| sync\_scope\_rule                  | text | Definition of the scope                                 |

### `bdr.conflict_history`

This table is the default table where conflicts are logged. The table is
RANGE partitioned on column `local_time` and is managed by Autopartition.
The default data retention period is 30 days.

Access to this table is possible by any table owner, who can see all
conflicts for the tables they own, restricted by row-level security.

For details, see [Logging conflicts to a table](https://www.enterprisedb.com/docs/pgd/5.10/conflict-management/conflicts/).

#### `bdr.conflict_history` columns

| Name                       | Type                     | Description                                                                                                                                                                         |
| -------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sub\_id                    | oid                      | Subscription that produced this conflict; can be joined to `bdr.subscription` table                                                                                                 |
| origin\_node\_id           | oid                      | OID (as seen in the [pg\_replication\_origin](https://www.postgresql.org/docs/current/catalog-pg-replication-origin.html) catalog) of the node that produced the conflicting change |
| local\_xid                 | xid                      | Local transaction of the replication process at the time of conflict                                                                                                                |
| local\_lsn                 | pg\_lsn                  | Local LSN at the time of conflict                                                                                                                                                   |
| local\_time                | timestamp with time zone | Local time of the conflict                                                                                                                                                          |
| remote\_xid                | xid                      | Transaction that produced the conflicting change on the remote node (an origin)                                                                                                     |
| remote\_change\_nr         | oid                      | Index of the change within its transaction                                                                                                                                          |
| remote\_commit\_lsn        | pg\_lsn                  | Commit LSN of the transaction which produced the conflicting change on the remote node (an origin)                                                                                  |
| remote\_commit\_time       | timestamp with time zone | Commit timestamp of the transaction that produced the conflicting change on the remote node (an origin)                                                                             |
| conflict\_type             | text                     | Detected type of the conflict                                                                                                                                                       |
| conflict\_resolution       | text                     | Conflict resolution chosen                                                                                                                                                          |
| conflict\_index            | regclass                 | Conflicting index (valid only if the index wasn't dropped since)                                                                                                                    |
| reloid                     | oid                      | Conflicting relation (valid only if the index wasn't dropped since)                                                                                                                 |
| nspname                    | text                     | Name of the schema for the relation on which the conflict has occurred at the time of conflict (doesn't follow renames)                                                             |
| relname                    | text                     | Name of the relation on which the conflict has occurred at the time of conflict (does not follow renames)                                                                           |
| key\_tuple                 | json                     | Json representation of the key used for matching the row                                                                                                                            |
| remote\_tuple              | json                     | Json representation of an incoming conflicting row                                                                                                                                  |
| local\_tuple               | json                     | Json representation of the local conflicting row                                                                                                                                    |
| apply\_tuple               | json                     | Json representation of the resulting (the one that has been applied) row                                                                                                            |
| local\_tuple\_xmin         | xid                      | Transaction that produced the local conflicting row (if `local_tuple` is set and the row isn't frozen)                                                                              |
| local\_tuple\_node\_id     | oid                      | Node that produced the local conflicting row (if `local_tuple` is set and the row isn't frozen)                                                                                     |
| local\_tuple\_commit\_time | timestamp with time zone | Last-known-change timestamp of the local conflicting row (if `local_tuple` is set and the row isn't frozen)                                                                         |

### `bdr.conflict_history_summary`

A view containing user-readable details on row conflict.

#### `bdr.conflict_history_summary` columns

| Name                       | Type                     | Description                                                                                                                                                                         |
| -------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nspname                    | text                     | Name of the schema                                                                                                                                                                  |
| relname                    | text                     | Name of the table                                                                                                                                                                   |
| origin\_node\_id           | oid                      | OID (as seen in the [pg\_replication\_origin](https://www.postgresql.org/docs/current/catalog-pg-replication-origin.html) catalog) of the node that produced the conflicting change |
| remote\_commit\_lsn        | pg\_lsn                  | Commit LSN of the transaction which produced the conflicting change on the remote node (an origin)                                                                                  |
| remote\_change\_nr         | oid                      | Index of the change within its transaction                                                                                                                                          |
| local\_time                | timestamp with time zone | Local time of the conflict                                                                                                                                                          |
| local\_tuple\_commit\_time | timestamp with time zone | Time of local commit                                                                                                                                                                |
| remote\_commit\_time       | timestamp with time zone | Time of remote commit                                                                                                                                                               |
| conflict\_type             | text                     | Type of conflict                                                                                                                                                                    |
| conflict\_resolution       | text                     | Resolution adopted                                                                                                                                                                  |

### `bdr.consensus_kv_data`

A persistent storage for the internal Raft-based KV store used by
`bdr.consensus_kv_store()` and `bdr.consensus_kv_fetch()` interfaces.

#### `bdr.consensus_kv_data` Columns

| Name           | Type        | Description                                      |
| -------------- | ----------- | ------------------------------------------------ |
| kv\_key        | text        | Unique key                                       |
| kv\_val        | json        | Arbitrary value in json format                   |
| kv\_create\_ts | timestamptz | Last write timestamp                             |
| kv\_ttl        | int         | Time to live for the value in milliseconds       |
| kv\_expire\_ts | timestamptz | Expiration timestamp (`kv_create_ts` + `kv_ttl`) |

### `bdr.crdt_handlers`

This table lists merge ("handlers") functions for all CRDT data types.

#### `bdr.crdt_handlers` Columns

| Name            | Type    | Description                       |
| --------------- | ------- | --------------------------------- |
| crdt\_type\_id  | regtype | CRDT data type ID                 |
| crdt\_merge\_id | regproc | Merge function for this data type |

### `bdr.ddl_replication`

This view lists DDL replication configuration as set up by current [DDL filters](https://www.enterprisedb.com/docs/pgd/5.10/repsets/#ddl-replication-filtering).

#### `bdr.ddl_replication` columns

| Name           | Type | Description                                                  |
| -------------- | ---- | ------------------------------------------------------------ |
| set\_ddl\_name | name | Name of DDL filter                                           |
| set\_ddl\_tag  | text | Command tags it applies on (regular expression)              |
| set\_ddl\_role | text | Roles it applies to (regular expression)                     |
| set\_name      | name | Name of the replication set for which this filter is defined |

### `bdr.depend`

This table tracks internal object dependencies inside PGD catalogs.

### `bdr.failover_replication_slots`

This table tracks the status of logical replication slots that are being used with failover support. For more information on failover replication slots, see [CDC Failover support](https://www.enterprisedb.com/docs/pgd/5.9/cdc-failover/).

#### `bdr.failover_replication_slots` columns

| Name            | Type    | Description                                    |
| --------------- | ------- | ---------------------------------------------- |
| slot\_name      | name    | Name of the replication slot                   |
| slot\_id        | oid     | ID of the replication slot                     |
| node\_group\_id | oid     | ID of the node group                           |
| plugin          | name    | Name of the plugin                             |
| twophase        | boolean | Is the slot used for two-phase commit          |
| active\_node    | oid     | ID of the active node                          |
| active\_pid     | int     | PID of the process currently decoding the slot |
| prev\_node      | oid     | ID of the previous node                        |

### `bdr.global_consensus_journal`

This catalog table logs all the Raft messages that were sent while
managing global consensus.

As for the `bdr.global_consensus_response_journal` catalog, the
payload is stored in a binary encoded format, which can be decoded
with the `bdr.decode_message_payload()` function. See the
[`bdr.global_consensus_journal_details`](#bdrglobal_consensus_journal_details) view for more details.

#### `bdr.global_consensus_journal` columns

| Name           | Type  | Description                             |
| -------------- | ----- | --------------------------------------- |
| log\_index     | int8  | ID of the journal entry                 |
| term           | int8  | Raft term                               |
| origin         | oid   | ID of node where the request originated |
| req\_id        | int8  | ID for the request                      |
| req\_payload   | bytea | Payload for the request                 |
| trace\_context | bytea | Trace context for the request           |

### `bdr.global_consensus_journal_details`

This view presents Raft messages that were sent and the corresponding
responses, using the `bdr.decode_message_payload()` function to decode
their payloads.

#### `bdr.global_consensus_journal_details` columns

| Name                        | Type  | Description                                   |
| --------------------------- | ----- | --------------------------------------------- |
| node\_group\_name           | name  | Name of the node group                        |
| log\_index                  | int8  | ID of the journal entry                       |
| term                        | int8  | Raft term                                     |
| request\_id                 | int8  | ID of the request                             |
| origin\_id                  | oid   | ID of the node where the request originated   |
| req\_payload                | bytea | Payload of the request                        |
| origin\_node\_name          | name  | Name of the node where the request originated |
| message\_type\_no           | oid   | ID of the PGD message type for the request    |
| message\_type               | text  | Name of the PGD message type for the request  |
| message\_payload            | text  | PGD message payload for the request           |
| response\_message\_type\_no | oid   | ID of the PGD message type for the response   |
| response\_message\_type     | text  | Name of the PGD message type for the response |
| response\_payload           | text  | PGD message payload for the response          |
| response\_errcode\_no       | text  | SQLSTATE for the response                     |
| response\_errcode           | text  | Error code for the response                   |
| response\_message           | text  | Error message for the response                |

### `bdr.global_consensus_response_journal`

This catalog table collects all the responses to the Raft messages
that were received while managing global consensus.

As for the `bdr.global_consensus_journal` catalog, the payload is
stored in a binary-encoded format, which can be decoded with the
`bdr.decode_message_payload()` function. See the
[`bdr.global_consensus_journal_details`](#bdrglobal_consensus_journal_details) view for more details.

#### `bdr.global_consensus_response_journal` columns

| Name           | Type  | Description                    |
| -------------- | ----- | ------------------------------ |
| log\_index     | int8  | ID of the journal entry        |
| res\_status    | oid   | Status code for the response   |
| res\_payload   | bytea | Payload for the response       |
| trace\_context | bytea | Trace context for the response |

### `bdr.global_lock`

This catalog table stores the information needed for recovering the
global lock state on server restart.

For monitoring usage, the
[`bdr.global_locks`](#bdrglobal_locks) view is preferable because the visible rows
in `bdr.global_lock` don't necessarily reflect all global locking activity.

Don't modify the contents of this table. It is an important PGD catalog.

#### `bdr.global_lock` columns

| Name             | Type    | Description                                                                  |
| ---------------- | ------- | ---------------------------------------------------------------------------- |
| ddl\_epoch       | int8    | DDL epoch for the lock                                                       |
| origin\_node\_id | oid     | OID of the node where the global lock has originated                         |
| lock\_type       | oid     | Type of the lock (DDL or DML)                                                |
| nspname          | name    | Schema name for the locked relation                                          |
| relname          | name    | Relation name for the locked relation                                        |
| groupid          | oid     | OID of the top level group (for Advisory locks)                              |
| key1             | integer | First 32-bit key or lower order 32-bits of 64-bit key (for advisory locks)   |
| key2             | integer | Second 32-bit key or higher order 32-bits of 64-bit key (for advisory locks) |
| key\_is\_bigint  | boolean | True if 64-bit integer key is used (for advisory locks)                      |

### `bdr.global_locks`

A view containing active global locks on this node. The [`bdr.global_locks`](#bdrglobal_locks) view
exposes PGD's shared-memory lock state tracking, giving administrators greater
insight into PGD's global locking activity and progress.

See [Monitoring global locks](https://www.enterprisedb.com/docs/pgd/5.10/monitoring/sql/#monitoring-global-locks)
for more information about global locking.

#### `bdr.global_locks` columns

| Name                        | Type        | Description                                                       |
| --------------------------- | ----------- | ----------------------------------------------------------------- |
| origin\_node\_id            | oid         | OID of the node where the global lock has originated              |
| origin\_node\_name          | name        | Name of the node where the global lock has originated             |
| lock\_type                  | text        | Type of the lock (DDL or DML)                                     |
| relation                    | text        | Locked relation name (for DML locks) or keys (for advisory locks) |
| pid                         | int4        | PID of the process holding the lock                               |
| acquire\_stage              | text        | Internal state of the lock acquisition process                    |
| waiters                     | int4        | List of backends waiting for the same global lock                 |
| global\_lock\_request\_time | timestamptz | Time this global lock acquire was initiated by origin node        |
| local\_lock\_request\_time  | timestamptz | Time the local node started trying to acquire the local lock      |
| last\_state\_change\_time   | timestamptz | Time `acquire_stage` last changed                                 |

Column details:

- `relation`: For DML locks, `relation` shows the relation on which the DML
  lock is acquired. For global advisory locks, `relation` column actually shows
  the two 32-bit integers or one 64-bit integer on which the lock is acquired.

- `origin_node_id` and `origin_node_name`: If these are the same as the local
  node's ID and name, then the local node is the initiator of the global DDL
  lock, that is, it is the node running the acquiring transaction. If these fields
  specify a different node, then the local node is instead trying to acquire its
  local DDL lock to satisfy a global DDL lock request from a remote node.

- `pid`: The process ID of the process that requested the global DDL lock,
  if the local node is the requesting node. Null on other nodes. Query the
  origin node to determine the locker pid.

- `global_lock_request_time`: The timestamp at which the global-lock request
  initiator started the process of acquiring a global lock. Can be null if
  unknown on the current node. This time is stamped at the beginning
  of the DDL lock request and includes the time taken for DDL epoch management
  and any required flushes of pending-replication queues. Currently only
  known on origin node.

- `local_lock_request_time`: The timestamp at which the local node started
  trying to acquire the local lock for this global lock. This includes the
  time taken for the heavyweight session lock acquire but doesn't include
  any time taken on DDL epochs or queue flushing. If the lock is reacquired
  after local node restart, it becomes the node restart time.

- `last_state_change_time`: The timestamp at which the
  `bdr.global_locks.acquire_stage` field last changed for this global lock
  entry.

### `bdr.group_camo_details`

Uses `bdr.run_on_all_nodes` to gather CAMO-related information from all nodes.

#### `bdr.group_camo_details` columns

| Name                         | Type | Description                                                                         |
| ---------------------------- | ---- | ----------------------------------------------------------------------------------- |
| node\_id                     | text | Internal node ID                                                                    |
| node\_name                   | text | Name of the node                                                                    |
| camo\_partner                | text | Node name of the camo partner                                                       |
| is\_camo\_partner\_connected | text | Connection status                                                                   |
| is\_camo\_partner\_ready     | text | Readiness status                                                                    |
| camo\_transactions\_resolved | text | Are there any pending and unresolved CAMO transactions                              |
| apply\_lsn                   | text | Latest position reported as replayed (visible)                                      |
| receive\_lsn                 | text | Latest LSN of any change or message received (can go backwards in case of restarts) |
| apply\_queue\_size           | text | Bytes difference between apply\_lsn and receive\_lsn                                |

### `bdr.group_raft_details`

Uses `bdr.run_on_all_nodes` to gather Raft Consensus status from all nodes.

#### `bdr.group_raft_details` columns

| Name              | Type | Description                    |
| ----------------- | ---- | ------------------------------ |
| node\_id          | oid  | Internal node ID               |
| node\_name        | name | Name of the node               |
| node\_group\_name | name | Name of the group is part of   |
| state             | text | Raft worker state on the node  |
| leader\_id        | oid  | Node id of the RAFT\_LEADER    |
| current\_term     | int  | Raft election internal ID      |
| commit\_index     | int  | Raft snapshot internal ID      |
| nodes             | int  | Number of nodes accessible     |
| voting\_nodes     | int  | Number of nodes voting         |
| protocol\_version | int  | Protocol version for this node |

### `bdr.group_replslots_details`

Uses `bdr.run_on_all_nodes` to gather PGD slot information from all nodes.

#### `bdr.group_replslots_details` columns

| Name              | Type     | Description                                                                     |
| ----------------- | -------- | ------------------------------------------------------------------------------- |
| node\_group\_name | text     | Name of the PGD group                                                           |
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

#### `bdr.group_subscription_summary` columns

| Name                          | Type | Description                                                                                                   |
| ----------------------------- | ---- | ------------------------------------------------------------------------------------------------------------- |
| origin\_node\_name            | text | Name of the origin of the subscription                                                                        |
| target\_node\_name            | text | Name of the target of the subscription                                                                        |
| last\_xact\_replay\_timestamp | text | Timestamp of the last replayed transaction                                                                    |
| sub\_lag\_seconds             | text | Lag between now and last\_xact\_replay\_timestamp                                                             |
| subscription\_status          | text | Status of the subscription. Possible values are: `initializing`,`replicating`,`down`,`disabled` and `unknown` |

### `bdr.group_versions_details`

Uses `bdr.run_on_all_nodes` to gather PGD information from all nodes.

#### `bdr.group_versions_details` columns

| Name              | Type | Description                    |
| ----------------- | ---- | ------------------------------ |
| node\_id          | oid  | Internal node ID               |
| node\_name        | name | Name of the node               |
| postgres\_version | text | PostgreSQL version on the node |
| bdr\_version      | text | PGD version on the node        |

### `bdr.leader`

Tracks leader nodes across subgroups in the cluster. Shows the status of all write leaders and subscriber-only group leaders (when optimized topology is enabled) in the cluster.

#### `bdr.leader` columns

| Name             | Type   | Description                                                 |
| ---------------- | ------ | ----------------------------------------------------------- |
| node\_group\_id  | oid    | ID of the node group.                                       |
| leader\_node\_id | oid    | ID of the leader node.                                      |
| generation       | int    | Generation of the leader node. Leader\_kind sets semantics. |
| leader\_kind     | "char" | Kind of the leader node.                                    |

Leader\_kind values can be:

| Value | Description                                                                                                                                                                                                                                                                                      |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| W     | Write leader, as per proxy routing. In this case leader is maintained by subgroup Raft instance. <br/> `generation` corresponds to `write_leader_version` of respective `bdr.node_group_routing_info` record.                                                                                    |
| S     | Subscriber-only group leader. This designated member of a SO group subscribes to upstream data nodes and is tasked with publishing upstream changes to remaining SO group members. Leader is maintained by top-level Raft instance.<br/>`generation` is updated sequentially upon leader change. |

### `bdr.local_consensus_snapshot`

This catalog table contains consensus snapshots created or received by
the local node.

#### `bdr.local_consensus_snapshot` columns

| Name       | Type  | Description             |
| ---------- | ----- | ----------------------- |
| log\_index | int8  | ID of the journal entry |
| log\_term  | int8  | Raft term               |
| snapshot   | bytea | Raft snapshot data      |

### `bdr.local_consensus_state`

This catalog table stores the current state of Raft on the local node.

#### `bdr.local_consensus_state` columns

| Name                | Type | Description                         |
| ------------------- | ---- | ----------------------------------- |
| node\_id            | oid  | ID of the node                      |
| current\_term       | int8 | Raft term                           |
| apply\_index        | int8 | Raft apply index                    |
| voted\_for          | oid  | Vote cast by this node in this term |
| last\_known\_leader | oid  | node\_id of last known Raft leader  |

### `bdr.local_node`

This table identifies the local node in the current database of the current Postgres instance.

#### `bdr.local_node` columns

| Name         | Type    | Description                                  |
| ------------ | ------- | -------------------------------------------- |
| node\_id     | oid     | ID of the node                               |
| pub\_repsets | text\[] | Published replication sets                   |
| sub\_repsets | text\[] | Subscribed replication sets                  |
| node\_uuid   | uuid    | Globally unique identifier for each BDR node |

### `bdr.local_node_summary`

A view containing the same information as [`bdr.node_summary`](#bdrnode_summary) (plus `pub_repsets` and `sub_repsets`), but only for the local node.

### `bdr.local_sync_status`

Information about status of either subscription or table synchronization process.

#### `bdr.local_sync_status` columns

| Name                | Type    | Description                                              |
| ------------------- | ------- | -------------------------------------------------------- |
| sync\_kind          | char    | Kind of synchronization done                             |
| sync\_subid         | oid     | ID of subscription doing the synchronization             |
| sync\_nspname       | name    | Schema name of the synchronized table (if any)           |
| sync\_relname       | name    | Name of the synchronized table (if any)                  |
| sync\_status        | char    | Current state of the synchronization                     |
| sync\_remote\_relid | oid     | ID of the synchronized table (if any) on the upstream    |
| sync\_end\_lsn      | pg\_lsn | Position at which the synchronization state last changed |

### `bdr.node`

This table lists all the PGD nodes in the cluster.

The view [`bdr.node_summary`](#bdrnode_summary) provides a human-readable version of most of the columns from `bdr.node`.

#### `bdr.node` columns

| Name                   | Type     | Description                                                                 |
| ---------------------- | -------- | --------------------------------------------------------------------------- |
| node\_id               | oid      | ID of the node                                                              |
| node\_name             | name     | Name of the node                                                            |
| node\_group\_id        | oid      | ID of the node group                                                        |
| source\_node\_id       | oid      | ID of the source node                                                       |
| synchronize\_structure | "char"   | Schema synchronization done during the join                                 |
| node\_state            | oid      | Consistent state of the node                                                |
| target\_state          | oid      | State that the node is trying to reach (during join or promotion)           |
| seq\_id                | int4     | Sequence identifier of the node used for generating unique sequence numbers |
| dbname                 | name     | Database name of the node                                                   |
| node\_dsn              | char     | Connection string for the node                                              |
| proto\_version\_ranges | int\[]   | Supported protocol version ranges by the node                               |
| generation             | smallint | Counter incremented when a node joins with the same name as a previous node |
| node\_kind             | oid      | ID of the node kind                                                         |
| node\_join\_finished   | boolean  | Check if the join is finished                                               |
| node\_uuid             | uuid     | Globally unique identifier for each BDR node                                |

### `bdr.node_catchup_info`

This catalog table records relevant catchup information on each node, either
if it is related to the join or part procedure.

#### `bdr.node_catchup_info` columns

| Name             | Type    | Description                                                                |
| ---------------- | ------- | -------------------------------------------------------------------------- |
| node\_id         | oid     | ID of the node                                                             |
| node\_source\_id | oid     | ID of the node used as source for the data                                 |
| slot\_name       | name    | Slot used for this source                                                  |
| min\_node\_lsn   | pg\_lsn | Minimum LSN at which the node can switch to direct replay from a peer node |
| catchup\_state   | oid     | Status code of the catchup state                                           |
| origin\_node\_id | oid     | ID of the node from which we want transactions                             |

If a node(node\_id) needs missing data from a parting node(origin\_node\_id),
it can get it from a node that already has it(node\_source\_id) by forwarding.
The records in this table persists until the node(node\_id) is a member of
the EDB Postgres Distributed cluster.

### `bdr.node_catchup_info_details`

A view of `bdr.node_catchup_info` catalog which shows info in more friendly way

### `bdr.node_conflict_resolvers`

Currently configured conflict resolution for all known conflict types.

#### `bdr.node_conflict_resolvers` columns

| Name               | Type | Description                          |
| ------------------ | ---- | ------------------------------------ |
| conflict\_type     | text | Type of the conflict                 |
| conflict\_resolver | text | Resolver used for this conflict type |

### `bdr.node_group`

This catalog table lists all the PGD node groups. See also
[`bdr.node_group_summary`](#bdrnode_group_summary) for a view containing
user-readable details.

#### `bdr.node_group` columns

| Name                                | Type     | Description                                                                                   |
| ----------------------------------- | -------- | --------------------------------------------------------------------------------------------- |
| node\_group\_id                     | oid      | ID of the node group                                                                          |
| node\_group\_name                   | name     | Name of the node group                                                                        |
| node\_group\_default\_repset        | oid      | Default replication set for this node group                                                   |
| node\_group\_default\_repset\_ext   | oid      | Default replication set for this node group                                                   |
| node\_group\_parent\_id             | oid      | ID of parent group (0 if this is a root group)                                                |
| node\_group\_flags                  | int      | Group flags                                                                                   |
| node\_group\_uuid                   | uuid     | The uuid of the group                                                                         |
| node\_group\_apply\_delay           | interval | How long a subscriber waits before applying changes from the provider                         |
| node\_group\_check\_constraints     | bool     | Whether the apply process checks constraints when applying data                               |
| node\_group\_num\_writers           | int      | Number of writers to use for subscriptions backing this node group                            |
| node\_group\_enable\_wal\_decoder   | bool     | Whether the group has enable\_wal\_decoder set                                                |
| node\_group\_streaming\_mode        | char     | Transaction streaming setting: 'O' - off, 'F' - file, 'W' - writer, 'A' - auto, 'D' - default |
| node\_group\_default\_commit\_scope | oid      | ID of the node group's default commit scope                                                   |
| node\_group\_location               | char     | Name of the location associated with the node group                                           |
| node\_group\_enable\_proxy\_routing | char     | Whether the node group allows routing from `pgd-proxy`                                        |
| node\_group\_enable\_raft           | bool     | Whether the node group allows Raft Consensus                                                  |

### `bdr.node_group_replication_sets`

A view showing default replication sets create for PGD groups. See also
`bdr.replication_sets`.

#### `bdr.node_group_replication_sets` columns

| Name                  | Type    | Description                                                                            |
| --------------------- | ------- | -------------------------------------------------------------------------------------- |
| node\_group\_name     | name    | Name of the PGD group                                                                  |
| def\_repset           | name    | Name of the default repset                                                             |
| def\_repset\_ops      | text\[] | Actions replicated by the default repset                                               |
| def\_repset\_ext      | name    | Name of the default "external" repset (usually same as def\_repset)                    |
| def\_repset\_ext\_ops | text\[] | Actions replicated by the default "external" repset (usually same as def\_repset\_ops) |

### `bdr.node_group_summary`

A view containing user-readable details about node groups. See also
[`bdr.node_group`](#bdrnode_group).

#### `bdr.node_group_summary` columns

| Name                       | Type     | Description                                                                    |
| -------------------------- | -------- | ------------------------------------------------------------------------------ |
| node\_group\_name          | name     | Name of the node group                                                         |
| default\_repset            | name     | Default replication set for this node group                                    |
| parent\_group\_name        | name     | Name of parent group (NULL if this is a root group)                            |
| node\_group\_type          | text     | Type of the node group (one of "global", "data", "shard" or "subscriber-only") |
| apply\_delay               | interval | How long a subscriber waits before applying changes from the provider          |
| check\_constraints         | boolean  | Whether the apply process checks constraints when applying data                |
| num\_writers               | integer  | Number of writers to use for subscriptions backing this node group             |
| enable\_wal\_decoder       | boolean  | Whether the group has enable\_wal\_decoder set                                 |
| streaming\_mode            | text     | Transaction streaming setting: "off", "file", "writer", "auto" or "default"    |
| default\_commit\_scope     | name     | Name of the node group's default commit scope                                  |
| location                   | name     | Name of the location associated with the node group                            |
| enable\_proxy\_routing     | boolean  | Whether the node group allows routing from `pgd-proxy`                         |
| enable\_raft               | boolean  | Whether the node group allows Raft Consensus                                   |
| route\_writer\_max\_lag    | bigint   | Maximum write lag accepted                                                     |
| route\_reader\_max\_lag    | bigint   | Maximum read lag accepted                                                      |
| route\_writer\_wait\_flush | boolean  | Switch if we need to wait for the flush                                        |

### `bdr.node_local_info`

A catalog table used to store per-node configuration that's specific to the
local node (as opposed to global view of per-node configuration).

#### `bdr.node_local_info` columns

| Name           | Type | Description                                                                                                                                                                                                                                    |
| -------------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| node\_id       | oid  | The OID of the node (including the local node)                                                                                                                                                                                                 |
| applied\_state | oid  | Internal ID of the node state                                                                                                                                                                                                                  |
| ddl\_epoch     | int8 | Last epoch number processed by the node                                                                                                                                                                                                        |
| slot\_name     | name | Name of the slot used to connect to that node (NULL for the local node)                                                                                                                                                                        |
| origin\_name   | name | Name of the [replication origin](https://www.postgresql.org/docs/current/catalog-pg-replication-origin.html) for that node. It will be NULL for the local node or for nodes that are not data nodes such as subscriber-only nodes or standbys. |

### `bdr.node_log_config`

A catalog view that stores information on the conflict logging configurations.

#### `bdr.node_log_config` columns

| Name                | Description                                               |
| ------------------- | --------------------------------------------------------- |
| log\_name           | Name of the logging configuration                         |
| log\_to\_file       | Whether it logs to the server log file                    |
| log\_to\_table      | Whether it logs to a table, and which table is the target |
| log\_conflict\_type | Which conflict types it logs, if NULL means all           |
| log\_conflict\_res  | Which conflict resolutions it logs, if NULL means all     |

### `bdr.node_peer_progress`

Catalog used to keep track of every node's progress in the replication stream.
Every node in the cluster regularly broadcasts its progress every
`bdr.replay_progress_frequency` milliseconds to all other nodes (default
is 60000 ms, that is, 1 minute). Expect N \* (N-1) rows in this relation.

You might be more interested in the `bdr.node_slots` view for monitoring
purposes. See also [Monitoring](https://www.enterprisedb.com/docs/pgd/5.10/monitoring/).

#### `bdr.node_peer_progress` columns

| Name                       | Type        | Description                                                                          |
| -------------------------- | ----------- | ------------------------------------------------------------------------------------ |
| node\_id                   | oid         | OID of the originating node that reported this position info                         |
| peer\_node\_id             | oid         | OID of the node's peer (remote node) for which this position info was reported       |
| last\_update\_sent\_time   | timestamptz | Time at which the report was sent by the originating node                            |
| last\_update\_recv\_time   | timestamptz | Time at which the report was received by the local server                            |
| last\_update\_node\_lsn    | pg\_lsn     | LSN on the originating node at the time of the report                                |
| peer\_position             | pg\_lsn     | Latest LSN of the node's peer seen by the originating node                           |
| peer\_replay\_time         | timestamptz | Latest replay time of peer seen by the reporting node                                |
| last\_update\_horizon\_xid | oid         | Internal resolution horizon: all lower xids are known resolved on the reporting node |
| last\_update\_horizon\_lsn | pg\_lsn     | Internal resolution horizon: same in terms of an LSN of the reporting node           |

### `bdr.node_replication_rates`

This view contains information about outgoing replication activity from a
given node.

#### `bdr.node_replication_rates` columns

| Column             | Type     | Description                                                                                           |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------- |
| peer\_node\_id     | oid      | OID of node's peer (remote node) for which this info was reported                                     |
| target\_name       | name     | Name of the target peer node                                                                          |
| sent\_lsn          | pg\_lsn  | Latest sent position                                                                                  |
| replay\_lsn        | pg\_lsn  | Latest position reported as replayed (visible)                                                        |
| replay\_lag        | interval | Approximate lag time for reported replay                                                              |
| replay\_lag\_bytes | int8     | Bytes difference between replay\_lsn and current WAL write position on origin                         |
| replay\_lag\_size  | text     | Human-readable bytes difference between replay\_lsn and current WAL write position                    |
| apply\_rate        | bigint   | LSNs being applied per second at the peer node                                                        |
| catchup\_interval  | interval | Approximate time required for the peer node to catch up to all the changes that are yet to be applied |

> **Note**
>
> The `replay_lag` is set immediately to zero after reconnect.
> As a workaround, use `replay_lag_bytes`, `replay_lag_size`, or
> `catchup_interval`.

### `bdr.node_slots`

This view contains information about replication slots used in the current
database by PGD.

See [Monitoring outgoing replication](https://www.enterprisedb.com/docs/pgd/5.10/monitoring/sql/#monitoring-outgoing-replication)
for guidance on the use and interpretation of this view's fields.

#### `bdr.node_slots` columns

| Name                  | Type        | Description                                                                                                                           |
| --------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| target\_dbname        | name        | Database name on the target node                                                                                                      |
| node\_group\_name     | name        | Name of the PGD group                                                                                                                 |
| node\_group\_id       | oid         | OID of the PGD group                                                                                                                  |
| origin\_name          | name        | Name of the origin node                                                                                                               |
| target\_name          | name        | Name of the target node                                                                                                               |
| origin\_id            | oid         | OID of the origin node                                                                                                                |
| target\_id            | oid         | OID of the target node                                                                                                                |
| local\_slot\_name     | name        | Name of the replication slot according to PGD                                                                                         |
| slot\_name            | name        | Name of the slot according to Postgres (same as above)                                                                                |
| is\_group\_slot       | boolean     | True if the slot is the node-group crash recovery slot for this node (see \["Group Replication Slot"]\(nodes#Group Replication Slot)) |
| is\_decoder\_slot     | boolean     | Is this slot used by the decoding worker feature                                                                                      |
| plugin                | name        | Logical decoding plugin using this slot (should be pglogical\_output or bdr)                                                          |
| slot\_type            | text        | Type of the slot (should be logical)                                                                                                  |
| datoid                | oid         | OID of the current database                                                                                                           |
| database              | name        | Name of the current database                                                                                                          |
| temporary             | bool        | Is the slot temporary                                                                                                                 |
| active                | bool        | Is the slot active (does it have a connection attached to it)                                                                         |
| active\_pid           | int4        | PID of the process attached to the slot                                                                                               |
| xmin                  | xid         | XID needed by the slot                                                                                                                |
| catalog\_xmin         | xid         | Catalog XID needed by the slot                                                                                                        |
| restart\_lsn          | pg\_lsn     | LSN at which the slot can restart decoding                                                                                            |
| confirmed\_flush\_lsn | pg\_lsn     | Latest confirmed replicated position                                                                                                  |
| usesysid              | oid         | sysid of the user the replication session is running as                                                                               |
| usename               | name        | username of the user the replication session is running as                                                                            |
| application\_name     | text        | Application name of the client connection (used by `synchronous_standby_names`)                                                       |
| client\_addr          | inet        | IP address of the client connection                                                                                                   |
| client\_hostname      | text        | Hostname of the client connection                                                                                                     |
| client\_port          | int4        | Port of the client connection                                                                                                         |
| backend\_start        | timestamptz | When the connection started                                                                                                           |
| state                 | text        | State of the replication (catchup, streaming, ...) or 'disconnected' if offline                                                       |
| sent\_lsn             | pg\_lsn     | Latest sent position                                                                                                                  |
| write\_lsn            | pg\_lsn     | Latest position reported as written                                                                                                   |
| flush\_lsn            | pg\_lsn     | Latest position reported as flushed to disk                                                                                           |
| replay\_lsn           | pg\_lsn     | Latest position reported as replayed (visible)                                                                                        |
| write\_lag            | interval    | Approximate lag time for reported write                                                                                               |
| flush\_lag            | interval    | Approximate lag time for reported flush                                                                                               |
| replay\_lag           | interval    | Approximate lag time for reported replay                                                                                              |
| sent\_lag\_bytes      | int8        | Bytes difference between sent\_lsn and current WAL write position                                                                     |
| write\_lag\_bytes     | int8        | Bytes difference between write\_lsn and current WAL write position                                                                    |
| flush\_lag\_bytes     | int8        | Bytes difference between flush\_lsn and current WAL write position                                                                    |
| replay\_lag\_bytes    | int8        | Bytes difference between replay\_lsn and current WAL write position                                                                   |
| sent\_lag\_size       | text        | Human-readable bytes difference between sent\_lsn and current WAL write position                                                      |
| write\_lag\_size      | text        | Human-readable bytes difference between write\_lsn and current WAL write position                                                     |
| flush\_lag\_size      | text        | Human-readable bytes difference between flush\_lsn and current WAL write position                                                     |
| replay\_lag\_size     | text        | Human-readable bytes difference between replay\_lsn and current WAL write position                                                    |

> **Note**
>
> While a peer is reconnecting and replication isn't yet in the `streaming` state, such as during
> catch-up, `write_lag`, `flush_lag`, and `replay_lag` report an estimate based on the time elapsed
> since the slot's last confirmed flush. Once the state becomes `streaming`, they report the measured lag.

### `bdr.node_summary`

This view contains summary information about all PGD nodes known to the local
node.

#### `bdr.node_summary` columns

| Name                      | Type | Description                                                                 |
| ------------------------- | ---- | --------------------------------------------------------------------------- |
| node\_name                | name | Name of the node                                                            |
| node\_group\_name         | name | Name of the PGD group the node is part of                                   |
| interface\_connstr        | text | Connection string to the node                                               |
| peer\_state\_name         | text | Consistent state of the node in human readable form                         |
| peer\_target\_state\_name | text | State that the node is trying to reach (during join or promotion)           |
| node\_seq\_id             | int4 | Sequence identifier of the node used for generating unique sequence numbers |
| node\_local\_dbname       | name | Database name of the node                                                   |
| node\_id                  | oid  | OID of the node                                                             |
| node\_group\_id           | oid  | OID of the PGD node group                                                   |
| node\_kind\_name          | oid  | Node kind name                                                              |
| node\_uuid                | uuid | Globally unique identifier for each BDR node                                |

### `bdr.queue`

This table stores the historical record of replicated DDL statements.

#### `bdr.queue` columns

| Name              | Type        | Description                                                                                                                     |
| ----------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| queued\_at        | timestamptz | When was the statement queued                                                                                                   |
| role              | name        | Which role has executed the statement                                                                                           |
| replication\_sets | text\[]     | Which replication sets was the statement published to                                                                           |
| message\_type     | char        | Type of a message. Possible values:<br />A - Table sync<br />D - DDL<br />S - Sequence<br />T - Truncate<br />Q - SQL statement |
| message           | json        | Payload of the message needed for replication of the statement                                                                  |

### `bdr.raft_instances`

Lists the local Raft consensus instance for each top-level node group. There
is currently always exactly one Raft instance per top-level group.

#### `bdr.raft_instances` columns

| Name            | Type | Description                     |
| --------------- | ---- | ------------------------------- |
| instance\_id    | oid  | OID of the Raft instance        |
| node\_group\_id | oid  | OID of the top-level node group |

### `bdr.replication_set`

A table that stores replication set configuration. For user queries, we recommend instead checking the
`bdr.replication_sets` view.

#### `bdr.replication_set` columns

| Name                 | Type    | Description                                                                |
| -------------------- | ------- | -------------------------------------------------------------------------- |
| set\_id              | oid     | OID of the replication set                                                 |
| set\_nodeid          | oid     | OID of the node (always local node oid currently)                          |
| set\_name            | name    | Name of the replication set                                                |
| replicate\_insert    | boolean | Indicates if the replication set replicates INSERTs                        |
| replicate\_update    | boolean | Indicates if the replication set replicates UPDATEs                        |
| replicate\_delete    | boolean | Indicates if the replication set replicates DELETEs                        |
| replicate\_truncate  | boolean | Indicates if the replication set replicates TRUNCATEs                      |
| set\_isinternal      | boolean | Reserved                                                                   |
| set\_autoadd\_tables | boolean | Indicates if new tables are automatically added to this replication set    |
| set\_autoadd\_seqs   | boolean | Indicates if new sequences are automatically added to this replication set |

### `bdr.replication_set_table`

A table that stores replication set table membership. For user queries, we recommend instead checking
the `bdr.tables` view.

#### `bdr.replication_set_table` columns

| Name             | Type           | Description                       |
| ---------------- | -------------- | --------------------------------- |
| set\_id          | oid            | OID of the replication set        |
| set\_reloid      | regclass       | Local ID of the table             |
| set\_att\_list   | text\[]        | Reserved                          |
| set\_row\_filter | pg\_node\_tree | Compiled row filtering expression |

### `bdr.replication_set_ddl`

A table that stores replication set ddl replication filters. For user queries, we recommend
instead checking the `bdr.ddl_replication` view.

#### `bdr.replication_set_ddl` Columns

| Name           | Type | Description                    |
| -------------- | ---- | ------------------------------ |
| set\_id        | oid  | OID of the replication set     |
| set\_ddl\_name | name | Name of the DDL filter         |
| set\_ddl\_tag  | text | Command tag for the DDL filter |
| set\_ddl\_role | text | Role executing the DDL         |

### `bdr.replication_sets`

A view showing replication sets defined in the PGD group, even if they aren't
currently used by any node.

#### `bdr.replication_sets` columns

| Name                 | Type    | Description                                                                |
| -------------------- | ------- | -------------------------------------------------------------------------- |
| set\_id              | oid     | OID of the replication set                                                 |
| set\_name            | name    | Name of the replication set                                                |
| replicate\_insert    | boolean | Indicates if the replication set replicates INSERTs                        |
| replicate\_update    | boolean | Indicates if the replication set replicates UPDATEs                        |
| replicate\_delete    | boolean | Indicates if the replication set replicates DELETEs                        |
| replicate\_truncate  | boolean | Indicates if the replication set replicates TRUNCATEs                      |
| set\_autoadd\_tables | boolean | Indicates if new tables are automatically added to this replication set    |
| set\_autoadd\_seqs   | boolean | Indicates if new sequences are automatically added to this replication set |

### `bdr.replication_status`

A view showing the connection and replay status of each subscription on the
local node, joined with the origin and target node names. Useful for
checking whether replication from a given peer node is currently connected
or blocked.

#### `bdr.replication_status` columns

| Name                 | Type        | Description                                                                               |
| -------------------- | ----------- | ----------------------------------------------------------------------------------------- |
| node\_id             | oid         | OID of the target (local) node                                                            |
| node\_name           | name        | Name of the target (local) node                                                           |
| origin\_node\_id     | oid         | OID of the origin node the subscription replicates from                                   |
| origin\_node\_name   | name        | Name of the origin node the subscription replicates from                                  |
| sub\_id              | oid         | OID of the subscription                                                                   |
| sub\_name            | name        | Name of the subscription                                                                  |
| connected            | boolean     | Whether the subscription is currently connected to the origin node                        |
| replication\_blocked | boolean     | Whether replication appears blocked (retries at the same LSN with no commits in progress) |
| connect\_time        | timestamptz | Time the current connection was established, if connected                                 |
| disconnect\_time     | timestamptz | Time of the last disconnect, if currently disconnected                                    |
| uptime               | interval    | How long the current connection has been up, if connected                                 |

### `bdr.schema_changes`

A simple view to show all the changes to schemas win PGD.

#### `bdr.schema_changes` columns

| Name                       | Type         | Description               |
| -------------------------- | ------------ | ------------------------- |
| schema\_changes\_ts        | timestampstz | ID of the trigger         |
| schema\_changes\_change    | char         | Flag of change type       |
| schema\_changes\_classid   | oid          | Class ID                  |
| schema\_changes\_objectid  | oid          | Object ID                 |
| schema\_changes\_subid     | smallint     | Subscription              |
| schema\_changes\_descr     | text         | Object changed            |
| schema\_changes\_addrnames | text\[]      | Location of schema change |

### `bdr.sequence_alloc`

A view to see the allocation details for galloc sequences.

#### `bdr.sequence_alloc` columns

| Name                   | Type        | Description                                      |
| ---------------------- | ----------- | ------------------------------------------------ |
| seqid                  | regclass    | ID of the sequence                               |
| seq\_chunk\_size       | bigint      | A sequence number for the chunk within its value |
| seq\_allocated\_up\_to | bigint      |                                                  |
| seq\_nallocs           | bigint      |                                                  |
| seq\_last\_alloc       | timestamptz | Last sequence allocated                          |

### `bdr.sequences`

This view lists all sequences with their kind, excluding sequences
for internal PGD bookkeeping.

#### `bdr.sequences` columns

| Name    | Type | Description                                           |
| ------- | ---- | ----------------------------------------------------- |
| nspname | name | Namespace containing the sequence                     |
| relname | name | Name of the sequence                                  |
| seqkind | text | Type of the sequence ('local', 'timeshard', 'galloc') |

### `bdr.stat_activity`

Dynamic activity for each backend or worker process.

This contains the same information as [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW), except `wait_event`
is set correctly when the wait relates to PGD.

### `bdr.stat_commit_scope`

A view containing statistics for each commit scope.

#### `bdr.stat_commit_scope` columns

| Column              | Type                     | Description                                                           |
| ------------------- | ------------------------ | --------------------------------------------------------------------- |
| commit\_scope\_name | name                     | Name of the commit scope                                              |
| group\_name         | name                     | Name of group for which the commit scope is defined                   |
| ncalls              | bigint                   | The number of times the commit scope was used                         |
| ncommits            | bigint                   | The number of successful commits were made with the commit scope      |
| naborts             | bigint                   | The number of times the commit scope used was eventually aborted      |
| total\_commit\_time | double precision         | Total time spent committing using the commit scope, in milliseconds   |
| min\_commit\_time   | double precision         | Minimum time spent committing using the commit scope, in milliseconds |
| max\_commit\_time   | double precision         | Maximum time spend committing using the commit scope, in milliseconds |
| mean\_commit\_time  | double precision         | Mean time spent committing using the commit scope, in milliseconds    |
| stats\_reset        | timestamp with time zone | Time at which all statistics in the view were last reset              |

### `bdr.stat_commit_scope_state`

A view of information about the current use of commit scopes by backends.

#### `bdr.stat_commit_scope_state` columns

| Column                          | Type    | Description                                                                |
| ------------------------------- | ------- | -------------------------------------------------------------------------- |
| pid                             | integer | Process ID of the backend                                                  |
| commit\_scope\_name             | name    | Name of the commit scope being used                                        |
| group\_name                     | name    | Name of group for which the commit scope is defined                        |
| waiting\_op\_num                | integer | Index of the first operation in the commit scope that is not satisfied yet |
| waiting\_prepare\_confirmations | integer | The number of PREPARE confirmations that are still needed by the operation |
| waiting\_commit\_confirmations  | integer | The number of COMMIT confirmations that are still needed by the operation  |
| waiting\_lsn\_confirmations     | integer | The number of LSN confirmations that are still needed by the operation     |

### `bdr.stat_raft_followers_state`

A view of the state of the raft leader's followers on the Raft leader node (empty on other nodes).

#### `bdr.stat_raft_followers_state` columns

| Column                          | Type                                                                       | Description                                                                             |
| ------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| group\_name                     | name                                                                       | The group this information is for (each group can have a separate consensus configured) |
| node\_name                      | name                                                                       | Name of the follower node                                                               |
| sent\_commit\_index             | bigint                                                                     | Latest Raft index sent to the follower node                                             |
| match\_index                    | bigint                                                                     | Raft index we expect to match the next response from the follower node                  |
| last\_message\_time             | timestamp with time zone                                                   | Last message (any, including requests) seen from the follower node                      |
| last\_heartbeat\_send\_time     | timestamp with time zone                                                   | Last time the leader sent heartbeat to the follower node                                |
| last\_heartbeat\_response\_time | Lasat time the leader has seen a heartbeat response from the follower node |                                                                                         |
| approx\_clock\_drift\_ms        | bigint                                                                     | Approximate clock drift seen by the leader against the follower node in milliseconds    |

### `bdr.stat_raft_state`

A view describing the state of the Raft consensus on the local node.

#### `bdr.stat_raft_state` columns

| Column                       | Type    | Description                                                                                             |
| ---------------------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| group\_name                  | name    | The group this information is for (each group can have a separate consensus configured)                 |
| raft\_stat                   | text    | State of the local node in the Raft ('LEADER', 'CANDIDATE', 'FOLLOWER', 'STOPPED')                      |
| leader\_name                 | name    | Name of the Raft leader, if any                                                                         |
| voted\_for\_name             | name    | The node the local node voted for as leader last vote                                                   |
| is\_voting                   | boolean | The local node part of Raft is voting                                                                   |
| heartbeat\_timeout\_ms       | bigint  | The heartbeat timeout on the local node                                                                 |
| heartbeat\_elapsed\_ms       | bigint  | The number of milliseconds that have elapsed since the local node has seen a heartbeat from the leader  |
| current\_term                | bigint  | The current Raft term the local node is at                                                              |
| commit\_index                | bigint  | The current Raft commit index the local node is at                                                      |
| apply\_index                 | bigint  | The Raft commit index the local node applied to catalogs                                                |
| last\_log\_term              | bigint  | Last Raft term in the request log                                                                       |
| last\_log\_index             | bigint  | Last Raft index in the request log                                                                      |
| oldest\_log\_index           | bigint  | Oldest Raft index still in the request log                                                              |
| newest\_prunable\_log\_index | bigint  | Newest Raft index that can be safely removed from the request log                                       |
| snapshot\_term               | bigint  | Raft term of the last snapshot                                                                          |
| snapshot\_index              | bigint  | Raft index of the last snapshot                                                                         |
| nnodes                       | integer | Number of nodes in the Raft consensus (should normally be the same as the number of nodes in the group) |
| nvoting\_nodes               | integer | Number of voting nodes in the Raft consensus                                                            |

### `bdr.stat_receiver`

A view containing all the necessary info about the replication subscription receiver processes.

#### `bdr.stat_receiver` columns

| Column                         | Type                     | Description                                                                                                                                                                                                                                                                          |
| ------------------------------ | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| worker\_role                   | text                     | Role of the BDR worker (always 'receiver')                                                                                                                                                                                                                                           |
| worker\_state                  | text                     | State of receiver worker (can be 'running', 'down', or 'disabled')                                                                                                                                                                                                                   |
| worker\_pid                    | integer                  | Process id of the receiver worker                                                                                                                                                                                                                                                    |
| sub\_name                      | name                     | Name of the subscription the receiver belongs to                                                                                                                                                                                                                                     |
| sub\_slot\_name                | name                     | Replication slot name used by the receiver                                                                                                                                                                                                                                           |
| source\_name                   | name                     | Source node for this receiver (the one it connects to), this is normally the same as the origin node, but is different for forward mode subscriptions                                                                                                                                |
| origin\_name                   | name                     | The origin node for this receiver (the one it receives forwarded changes from), this is normally the same as the source node, but is different for forward mode subscriptions                                                                                                        |
| subscription\_mode             | char                     | Mode of the subscription, see [`bdr.subscription_summary`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrsubscription_summary) for more details                                                                                                           |
| sub\_replication\_sets         | text\[]                  | Replication sets this receiver is subscribed to                                                                                                                                                                                                                                      |
| sub\_apply\_delay              | interval                 | Apply delay interval                                                                                                                                                                                                                                                                 |
| receive\_lsn                   | pg\_lsn                  | LSN of the last change received so far                                                                                                                                                                                                                                               |
| receive\_commit\_lsn           | pg\_lsn                  | LSN of the last commit received so far                                                                                                                                                                                                                                               |
| xact\_apply\_lsn               | pg\_lsn                  | Last applied transaction LSN                                                                                                                                                                                                                                                         |
| xact\_flush\_lsn               | pg\_lsn                  | Last flushed transaction LSN                                                                                                                                                                                                                                                         |
| xact\_apply\_timestamp         | timestamp with time zone | Last applied transaction (commit) timestamp                                                                                                                                                                                                                                          |
| worker\_start                  | timestamp with time zone | Time at which the receiver started                                                                                                                                                                                                                                                   |
| worker\_xact\_start            | timestamp with time zome | Time at which the receiver started local db transaction (if it is currently processing a local transaction), usually NULL, see `xact_start` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details |
| worker\_backend\_state\_change | timestamp with time zone | Backend state change timestamp, see `state_change` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details                                                                                          |
| worker\_backend\_state         | text                     | Current backend state, see `state` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details                                                                                                          |
| wait\_event\_type              | text                     | Type of wait event the receiver is currently waiting on (if any), see `wait_event_type` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details                                                     |
| wait\_event                    | text                     | Exact event the receiver is currently waiting on (if any, see `wait_event` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details)                                                                 |

### `bdr.stat_relation`

Shows apply statistics for each relation. Contains data only if tracking is enabled with
[`bdr.track_relation_apply`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrtrack_relation_apply)
and if data was replicated for a given relation.

`lock_acquire_time` is updated only if [`bdr.track_apply_lock_timing`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrtrack_apply_lock_timing)
is set to `on` (default: `off`).

You can reset the stored relation statistics by calling
[`bdr.reset_relation_stats()`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrreset_relation_stats).

#### `bdr.stat_relation` columns

| Column                | Type                     | Description                                                                                                                     |
| --------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| nspname               | name                     | Name of the relation's schema                                                                                                   |
| relname               | name                     | Name of the relation                                                                                                            |
| relid                 | oid                      | OID of the relation                                                                                                             |
| total\_time           | double precision         | Total time spent processing replication for the relation, in milliseconds                                                       |
| ninsert               | bigint                   | Number of inserts replicated for the relation                                                                                   |
| nupdate               | bigint                   | Number of updates replicated for the relation                                                                                   |
| ndelete               | bigint                   | Number of deletes replicated for the relation                                                                                   |
| ntruncate             | bigint                   | Number of truncates replicated for the relation                                                                                 |
| shared\_blks\_hit     | bigint                   | Total number of shared block cache hits for the relation                                                                        |
| shared\_blks\_read    | bigint                   | Total number of shared blocks read for the relation                                                                             |
| shared\_blks\_dirtied | bigint                   | Total number of shared blocks dirtied for the relation                                                                          |
| shared\_blks\_written | bigint                   | Total number of shared blocks written for the relation                                                                          |
| blk\_read\_time       | double precision         | Total time spent reading blocks for the relation, in milliseconds (if `track_io_timing` is enabled, otherwise zero)             |
| blk\_write\_time      | double precision         | Total time spent writing blocks for the relation, in milliseconds (if `track_io_timing` is enabled, otherwise zero)             |
| lock\_acquire\_time   | double precision         | Total time spent acquiring locks on the relation, in milliseconds (if `bdr.track_apply_lock_timing` is enabled, otherwise zero) |
| stats\_reset          | timestamp with time zone | Time of the last statistics reset (performed by `bdr.reset_relation_stats()`)                                                   |

### `bdr.stat_routing_candidate_state`

A view of information about the routing candidate nodes on the Raft leader (empty on other nodes).

#### `bdr.stat_routing_candidate_state` columns

| Column              | Type                     | Description                                                                                                    |
| ------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| node\_group\_name   | name                     | The group this information is for (each group can have a separate routing proxy)                               |
| node\_name          | name                     | Candidate node name                                                                                            |
| node\_route\_fence  | boolean                  | The node is fenced (when true it cannot become leader or read-only connection target)                          |
| node\_route\_reads  | boolean                  | The node is being considered as a read-only connection target                                                  |
| node\_route\_writes | boolean                  | The node is being considered as a write lead candidate.                                                        |
| last\_message\_time | timestamp with time zone | The time of the last Raft message (any, including requests) seen by this node (used to check liveness of node) |

### `bdr.stat_routing_state`

A view of the state of the connection routing which PGD Proxy uses to route the connections.

#### `bdr.stat_routing_state` columns

| Column                      | Type    | Description                                                                                     |
| --------------------------- | ------- | ----------------------------------------------------------------------------------------------- |
| node\_group\_name           | name    | The group this is information for (each group can have a separate routing proxy)                |
| write\_lead\_name           | name    | Name of the write lead node                                                                     |
| previous\_write\_lead\_name | name    | Name of the previous write lead node                                                            |
| read\_names                 | name\[] | Array of nodes to which read-only connections are routed                                        |
| write\_candidate\_names     | name\[] | Nodes that match all criteria needed to become write lead in case of failover                   |
| read\_candidate\_names      | name\[] | Nodes that match all criteria needed to become read-only connection targets in case of failover |

### `bdr.stat_subscription`

Shows apply statistics for each subscription. Contains data only if tracking is enabled with
[`bdr.track_subscription_apply`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrtrack_subscription_apply).

You can reset the stored subscription statistics by calling
[`bdr.reset_subscription_stats()`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrreset_subscription_stats).

#### `bdr.stat_subscription` columns

| Column                      | Type                     | Description                                                                                                                                                                                      |
| --------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| sub\_name                   | name                     | Name of the subscription                                                                                                                                                                         |
| subid                       | oid                      | OID of the subscription                                                                                                                                                                          |
| mean\_apply\_time           | double precision         | Average time per apply transaction, in milliseconds                                                                                                                                              |
| nconnect                    | bigint                   | Number of times this subscription has connected upstream                                                                                                                                         |
| ncommit                     | bigint                   | Number of commits this subscription did                                                                                                                                                          |
| nabort                      | bigint                   | Number of aborts writer did for this subscription                                                                                                                                                |
| nerror                      | bigint                   | Number of errors writer has hit for this subscription                                                                                                                                            |
| nskippedtx                  | bigint                   | Number of transactions skipped by writer for this subscription (due to `skip_transaction` conflict resolver)                                                                                     |
| ninsert                     | bigint                   | Number of inserts this subscription did                                                                                                                                                          |
| nupdate                     | bigint                   | Number of updates this subscription did                                                                                                                                                          |
| ndelete                     | bigint                   | Number of deletes this subscription did                                                                                                                                                          |
| ntruncate                   | bigint                   | Number of truncates this subscription did                                                                                                                                                        |
| nddl                        | bigint                   | Number of DDL operations this subscription has executed                                                                                                                                          |
| ndeadlocks                  | bigint                   | Number of errors that were caused by deadlocks                                                                                                                                                   |
| nretries                    | bigint                   | Number of retries the writer did (without going for full restart/reconnect)                                                                                                                      |
| nstream\_writer             | bigint                   | Number of transactions streamed to writer                                                                                                                                                        |
| nstream\_file               | bigint                   | Number of transactions streamed to file                                                                                                                                                          |
| nstream\_commit             | bigint                   | Number of streaming transactions committed                                                                                                                                                       |
| nstream\_abort              | bigint                   | Number of streaming transactions aborted                                                                                                                                                         |
| nstream\_start              | bigint                   | Number of STREAM START messages processed                                                                                                                                                        |
| nstream\_stop               | bigint                   | Number of STREAM STOP messages processed                                                                                                                                                         |
| nstream\_commit             | bigint                   | Number of streaming transactions committed                                                                                                                                                       |
| nstream\_abort              | bigint                   | Number of streaming transactions aborted                                                                                                                                                         |
| nstream\_prepare            | bigint                   | Number of streaming transactions prepared                                                                                                                                                        |
| nstream\_insert             | bigint                   | Number of streaming inserts processed                                                                                                                                                            |
| nstream\_update             | bigint                   | Number of streaming updates processed                                                                                                                                                            |
| nstream\_delete             | bigint                   | Number of streaming deletes processed                                                                                                                                                            |
| nstream\_truncate           | bigint                   | Number of streaming truncates processed                                                                                                                                                          |
| shared\_blks\_hit           | bigint                   | Total number of shared block cache hits by the subscription                                                                                                                                      |
| shared\_blks\_read          | bigint                   | Total number of shared blocks read by the subscription                                                                                                                                           |
| shared\_blks\_dirtied       | bigint                   | Total number of shared blocks dirtied by the subscription                                                                                                                                        |
| shared\_blks\_written       | bigint                   | Total number of shared blocks written by the subscription                                                                                                                                        |
| blk\_read\_time             | double precision         | Total time the subscription spent reading blocks, in milliseconds (if `track_io_timing` is enabled, otherwise zero)                                                                              |
| blk\_write\_time            | double precision         | Total time the subscription spent writing blocks, in milliseconds (if `track_io_timing` is enabled, otherwise zero)                                                                              |
| connect\_time               | timestamp with time zone | Time when the current upstream connection was established, NULL if not connected                                                                                                                 |
| last\_disconnect\_time      | timestamp with time zone | Time when the last upstream connection was dropped                                                                                                                                               |
| start\_lsn                  | pg\_lsn                  | LSN from which this subscription requested to start replication from the upstream                                                                                                                |
| retries\_at\_same\_lsn      | bigint                   | Number of attempts the subscription was restarted from the same LSN value                                                                                                                        |
| curr\_ncommit               | bigint                   | Number of commits this subscription did after the current connection was established                                                                                                             |
| npre\_commit\_confirmations | bigint                   | Number of precommit confirmations by CAMO partners                                                                                                                                               |
| npre\_commit                | bigint                   | Number of precommits                                                                                                                                                                             |
| ncommit\_prepared           | bigint                   | Number of prepared transaction commits                                                                                                                                                           |
| nabort\_prepared            | bigint                   | Number of prepared transaction aborts                                                                                                                                                            |
| nprovisional\_waits         | bigint                   | Number of update/delete operations on same tuples by concurrent apply transactions. These are provisional waits. See [Parallel Apply](https://www.enterprisedb.com/docs/pgd/5.10/parallelapply/) |
| ntuple\_waits               | bigint                   | Number of update/delete operations that waited to be safely applied. See [Parallel Apply](https://www.enterprisedb.com/docs/pgd/5.10/parallelapply/)                                             |
| ncommit\_waits              | bigint                   | Number of fully applied transactions that had to wait before being committed. See [Parallel Apply](https://www.enterprisedb.com/docs/pgd/5.10/parallelapply/)                                    |
| stats\_reset                | timestamp with time zone | Time of the last statistics reset (performed by `bdr.reset_subscription_stats()`)                                                                                                                |

### `bdr.stat_worker`

A view containing summary information and per worker statistics for PGD manager workers.

#### `bdr.stat_worker` columns

| Column                         | Type                     | Description                                                                                                                                                                                                                         |
| ------------------------------ | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| worker\_role                   | text                     | Role of the BDR worker                                                                                                                                                                                                              |
| worker\_pid                    | integer                  | Process id of the worker                                                                                                                                                                                                            |
| sub\_name                      | name                     | Name of the subscription the worker is related to, if any                                                                                                                                                                           |
| worker\_start                  | timestamp with time zone | Time at which the worker started                                                                                                                                                                                                    |
| worker\_xact\_start            | timestamp with time zone | Time at which the worker started the local db transaction, see `xact_start` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details                |
| worker\_xid                    | xid                      | Transaction id of the worker, see `backend_xid` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details                                            |
| worker\_xmin                   | xid                      | Oldest transaction id needed by the worker, see `backend_xmin` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details                             |
| worker\_backend\_state\_change | timestamp with time zone | Backend state change timestamp see `state_change` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details                                          |
| worker\_backend\_state         | text                     | Current backend state see `state` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details                                                          |
| wait\_event\_type              | text                     | The type of wait event the worker is currently waitiing on, if any (see `wait_event_type` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details) |
| wait\_event                    | text                     | The exact event the worker is waiting on, if any (see `wait_event` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details)                        |
| blocked\_by\_pids              | integer\[]               | List of PIDs blocking the worker, if any                                                                                                                                                                                            |
| query                          | text                     | Query currently being run by the worker                                                                                                                                                                                             |
| worker\_query\_start           | timestamp with time zone | Timestamp at which the current query run by the worker started                                                                                                                                                                      |

### `bdr.stat_writer`

A view containing summary information and statistics for each subscription replication writer. There can be multiple writers for each subscription.

#### `bdr.stat_writer` columns

| Column                                  | Type                     | Description                                                                                                                                                                                                                   |
| --------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| worker\_role                            | text                     | Role of the BDR worker (always 'writer')                                                                                                                                                                                      |
| worker\_state                           | text                     | State of the worker (can be 'running', 'down', or 'disabled')                                                                                                                                                                 |
| worker\_pid                             | integer                  | Process id of the writer                                                                                                                                                                                                      |
| sub\_name                               | name                     | Name of the subscription the writer belongs to                                                                                                                                                                                |
| writer\_nr                              | integer                  | Writer index in the writer group for the same subscription                                                                                                                                                                    |
| nxacts                                  | bigint                   | The number of transactions the writer has processed since start                                                                                                                                                               |
| ncommits                                | bigint                   | The number of commits the writer processed since start                                                                                                                                                                        |
| naborts                                 | bigint                   | The number of aborts the writer processed since start                                                                                                                                                                         |
| commit\_queue\_position                 | integer                  | Position in the commit queue, when serializing transactions against other writers in the same writer group                                                                                                                    |
| xact\_source\_xid                       | xid                      | Transaction id of the currently processed transaction on the source node                                                                                                                                                      |
| xact\_source\_commit\_lsn               | pg\_lsn                  | LSN of the currently processed transaction on the source node                                                                                                                                                                 |
| xact\_nchanges                          | bigint                   | The number of changes in the currently processed transaction that have been written (updated every 1000 changes)                                                                                                              |
| xact\_origin\_node\_name                | name                     | Origin node of the currently processed transaction                                                                                                                                                                            |
| xact\_origin\_lsn                       | pg\_lsn                  | Origin LSN of the currently processed transaction                                                                                                                                                                             |
| xact\_origin\_timestamp                 | timestamp with time zone | Origin commit timestamp of the currently processed transaction                                                                                                                                                                |
| streaming\_allowed                      | boolean                  | The writer can receive direct stream for large transactions                                                                                                                                                                   |
| is\_streaming                           | boolean                  | The writer is currently receiving a direct stream of a large transaction                                                                                                                                                      |
| nstream\_file                           | bigint                   | The number of stream files the writer has processed                                                                                                                                                                           |
| nstream\_writer                         | bigint                   | The number of directly streamed transactions the writer has processed                                                                                                                                                         |
| worker\_start                           | timestamp with time zone | The time at which the writer started                                                                                                                                                                                          |
| worker\_xact\_start                     | timestamp with time zone | The time at which the writer start the local db transaction (see xact\_start in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details)        |
| worker\_xid                             | xid                      | Transaction id of the worker (see `backend_xid` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details)                                     |
| worker\_xmin                            | xid                      | Oldest transaction id needed by the worker (see `backend_xmin` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details)                      |
| worker\_backend\_state\_change          | timestamp with time zone | Backend state change timestamp (see `state_change` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details)                                  |
| worker\_backend\_state                  | text                     | Current backend state (see `state` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details)                                                  |
| wait\_event\_type                       | text                     | The type of wait event the writer is currently waiting on, if any (see `event_type` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details) |
| wait\_event                             | text                     | The exact event the writer is waiting on, if any (see `wait_event` in [`pg_stat_activity`](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW) for more details)                  |
| blocked\_by\_pids                       | integer\[]               | List of PIDs blocking the writer, if any                                                                                                                                                                                      |
| query                                   | text                     | Query currently being run by the writer (normally only set for DDL)                                                                                                                                                           |
| worker\_query\_start                    | timestamp with time zone | Timestamp at which the current query run by the worker started                                                                                                                                                                |
| command\_progress\_cmdtag               | text                     | For commands with progress tracking, identifies the command current processed by the writer  (can be one of 'CREATE INDEX', 'CREATE INDEX CONCURRENTLY', 'REINDEX', 'REINDEX CONCURRENTLY', 'CLUSTER', and 'VACUUM FULL')     |
| command\_progress\_relation             | text                     | For commands with progress tracking, identifies therelation which the command is working on                                                                                                                                   |
| command\_progress\_phase                | text                     | For commands with progress tracking, name of the current phase the command is in, refer to [Progress Reporting](https://www.postgresql.org/docs/current/progress-reporting.html) in the Postgres documentation for details    |
| command\_progress\_count                | integer                  | For commands with progress tracking, the number of phases this command has gone through                                                                                                                                       |
| command\_progress\_phase\_nr            | integer                  | For commands with progress tracking, the number of the phase of `command_progress_count`                                                                                                                                      |
| command\_progress\_phase\_tuples\_total | real                     | For commands with progress tracking, the number of rows the current phase of the command has to process (if the phase is process rows)                                                                                        |
| command\_progress\_tuples\_done         | bigint                   | For commands with progress tracking, the number of rows the current phase of the command has already processed (if the phase is process rows)                                                                                 |

### `bdr.subscription`

This catalog table lists all the subscriptions owned by the local PGD
node and their modes.

#### `bdr.subscription` columns

| Name               | Type     | Description                                                                      |
| ------------------ | -------- | -------------------------------------------------------------------------------- |
| sub\_id            | oid      | ID of the subscription                                                           |
| sub\_name          | name     | Name of the subscription                                                         |
| nodegroup\_id      | oid      | ID of nodegroup                                                                  |
| origin\_node\_id   | oid      | ID of origin node                                                                |
| source\_node\_id   | oid      | ID of source node                                                                |
| target\_node\_id   | oid      | ID of target node                                                                |
| subscription\_mode | char     | Mode of subscription                                                             |
| sub\_enabled       | bool     | Whether the subscription is enabled (should be replication)                      |
| apply\_delay       | interval | How much behind should the apply of changes on this subscription be (normally 0) |
| slot\_name         | name     | Slot on upstream used by this subscription                                       |
| origin\_name       | name     | Local origin used by this subscription                                           |
| num\_writers       | int      | Number of writer processes this subscription uses                                |
| streaming\_mode    | char     | Streaming configuration for the subscription                                     |
| replication\_sets  | text\[]  | Replication sets replicated by this subscription (NULL = all)                    |
| forward\_origin    | text\[]  | Origins forwarded by this subscription (NULL = all)                              |

### `bdr.subscription_summary`

This view contains summary information about all PGD subscriptions that the
local node has to other nodes.

#### `bdr.subscription_summary` columns

| Name                          | Type        | Description                                                                              |
| ----------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| node\_group\_name             | name        | Name of the PGD group the node is part of                                                |
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
| node\_group\_id               | oid         | OID of the PGD group the node is part of                                                 |
| sub\_id                       | oid         | OID of the subscription                                                                  |
| origin\_id                    | oid         | OID of the origin node                                                                   |
| target\_id                    | oid         | OID of the target node                                                                   |
| receive\_lsn                  | pg\_lsn     | Latest LSN of any change or message received (this can go backwards in case of restarts) |
| receive\_commit\_lsn          | pg\_lsn     | Latest LSN of last COMMIT received (this can go backwards in case of restarts)           |
| last\_xact\_replay\_lsn       | pg\_lsn     | LSN of last transaction replayed on this subscription                                    |
| last\_xact\_flush\_lsn        | timestamptz | LSN of last transaction replayed on this subscription that's flushed durably to disk     |
| last\_xact\_replay\_timestamp | timestamptz | Timestamp of last transaction replayed on this subscription                              |

### `bdr.tables`

This view lists information about table membership in replication sets.
If a table exists in multiple replication sets, it appears multiple times
in this table.

#### `bdr.tables` columns

| Name                | Type    | Description                                                                          |
| ------------------- | ------- | ------------------------------------------------------------------------------------ |
| relid               | oid     | OID of the relation                                                                  |
| nspname             | name    | Name of the schema relation is in                                                    |
| relname             | name    | Name of the relation                                                                 |
| set\_name           | name    | Name of the replication set                                                          |
| set\_ops            | text\[] | List of replicated operations                                                        |
| rel\_columns        | text\[] | List of replicated columns (NULL = all columns) (\*)                                 |
| row\_filter         | text    | Row filtering expression                                                             |
| conflict\_detection | text    | Conflict detection method used: row\_origin (default), row\_version or column\_level |

(\*) These columns are reserved for future use and should currently be NULL

### `bdr.taskmgr_work_queue`

Contains work items created and processed by task manager. The work items are created on
only one node and processed on different nodes.

#### `bdr.taskmgr_work_queue` columns

| Column                 | Type   | Description                                                                                                           |
| ---------------------- | ------ | --------------------------------------------------------------------------------------------------------------------- |
| ap\_wq\_workid         | bigint | Unique ID of the work item                                                                                            |
| ap\_wq\_ruleid         | int    | ID of the rule listed in autopartition\_rules. Rules are specified using bdr.autopartition command                    |
| ap\_wq\_relname        | name   | Name of the relation the task belongs to                                                                              |
| ap\_wq\_relnamespace   | name   | Name of the tablespace specified in rule for this work item                                                           |
| ap\_wq\_partname       | name   | Name of the partition created by the workitem                                                                         |
| ap\_wq\_work\_category | char   | Work category; can be `c` (create partition), `m` (migrate partition), `d` (drop partition), or `a` (alter partition) |
| ap\_wq\_work\_sql      | text   | SQL query for the work item                                                                                           |
| ap\_wq\_work\_depends  | Oid\[] | OIDs of the nodes on which the work item depends                                                                      |

### `bdr.taskmgr_workitem_status`

The status of the work items that is updated locally on each node.

#### `bdr.taskmgr_workitem_status` columns

| Column               | Type        | Description                                                                 |
| -------------------- | ----------- | --------------------------------------------------------------------------- |
| ap\_wi\_workid       | bigint      | ID of the work item                                                         |
| ap\_wi\_nodeid       | Oid         | OID of the node on which the work item is being processed                   |
| ap\_wi\_status       | char        | Status; can be `q` (queued), `c` (complete), `f` (failed), or `u` (unknown) |
| ap\_wi\_started\_at  | timestamptz | Start timestamptz of work item                                              |
| ap\_wi\_finished\_at | timestamptz | End timestamptz of work item                                                |

### `bdr.taskmgr_local_work_queue`

Contains work items created and processed by the task manager. This is
similar to `bdr.taskmgr_work_queue`, except that these work items are for
locally managed tables. Each node creates and processes its own local work
items, independent of other nodes in the cluster.

#### `bdr.taskmgr_local_work_queue` columns

| Column                 | Type   | Description                                                                                                      |
| ---------------------- | ------ | ---------------------------------------------------------------------------------------------------------------- |
| ap\_wq\_workid         | bigint | Unique ID of the work item                                                                                       |
| ap\_wq\_ruleid         | int    | ID of the rule listed in autopartition\_rules. Rules are specified using bdr.autopartition command               |
| ap\_wq\_relname        | name   | Name of the relation the task belongs to                                                                         |
| ap\_wq\_relnamespace   | name   | Name of the tablespace specified in rule for this work item.                                                     |
| ap\_wq\_partname       | name   | Name of the partition created by the workitem                                                                    |
| ap\_wq\_work\_category | char   | Category; can be `c` (create partition), `m` (migrate partition), `d` (drop partition), or `a` (alter partition) |
| ap\_wq\_work\_sql      | text   | SQL query for the work item                                                                                      |
| ap\_wq\_work\_depends  | Oid\[] | Always NULL                                                                                                      |

### `bdr.taskmgr_local_workitem_status`

The status of the work items for locally managed tables.

#### `bdr.taskmgr_local_workitem_status` columns

| Column               | Type        | Description                                                                 |
| -------------------- | ----------- | --------------------------------------------------------------------------- |
| ap\_wi\_workid       | bigint      | ID of the work item                                                         |
| ap\_wi\_nodeid       | Oid         | OID of the node on which the work item is being processed                   |
| ap\_wi\_status       | char        | Status; can be `q` (queued), `c` (complete), `f` (failed), or `u` (unknown) |
| ap\_wi\_started\_at  | timestamptz | Start timestamptz of work item                                              |
| ap\_wi\_finished\_at | timestamptz | End timestamptz of work item                                                |

### `bdr.trigger`

In this view, you can see all the stream triggers created.
Often triggers here are created from `bdr.create_conflict_trigger`.

#### `bdr.trigger` columns

| Name            | Type     | Description                   |
| --------------- | -------- | ----------------------------- |
| trigger\_id     | oid      | ID of the trigger             |
| trigger\_reloid | regclass | Name of the relating function |
| trigger\_pgtgid | oid      | Postgres trigger ID           |
| trigger\_type   | char     | Type of trigger call          |
| trigger\_name   | name     | Name of the trigger           |

### `bdr.triggers`

An expanded view of `bdr.trigger` with columns that are easier to read.

| Name                | Type                | Description                  |
| ------------------- | ------------------- | ---------------------------- |
| trigger\_name       | name                | Name of the trigger          |
| event\_manipulation | text                | Operations                   |
| trigger\_type       | bdr.trigger\_type   | Type of trigger              |
| trigger\_table      | bdr.trigger\_reloid | Table that calls the trigger |
| trigger\_function   | name                | Function used                |

### `bdr.workers`

Information about running PGD worker processes.

This can be joined with `bdr.stat_activity` using pid to get even more insight
into the state of PGD workers.

#### `bdr.workers` Columns

| Name               | Type | Description                                          |
| ------------------ | ---- | ---------------------------------------------------- |
| worker\_pid        | int  | Process ID of the worker process                     |
| worker\_role       | int  | Numeric representation of worker role                |
| worker\_role\_name | text | Name of the worker role                              |
| worker\_subid      | oid  | Subscription ID if the worker is associated with one |

### `bdr.writers`

Specific information about PGD writer processes.

#### `bdr.writers` columns

| Name                    | Type    | Description                                                          |
| ----------------------- | ------- | -------------------------------------------------------------------- |
| sub\_name               | name    | Name of the subscription                                             |
| pid                     | int     | Process ID of the worker process                                     |
| syncing\_rel            | int     | OID of the relation being synchronized (if any)                      |
| streaming\_allowed      | text    | Can this writer be target of direct to writer streaming              |
| is\_streaming           | bool    | Is there transaction being streamed to this writer                   |
| remote\_xid             | xid     | Remote transaction id of the transaction being processed (if any)    |
| remote\_commit\_lsn     | pg\_lsn | LSN of last commit processed                                         |
| commit\_queue\_position | int     | Position in the internal commit queue                                |
| nxacts                  | bigint  | Number of transactions processed by this writer                      |
| ncommits                | bigint  | Number of transactions committed by this writer                      |
| naborts                 | bigint  | Number of transactions aborted by this writer                        |
| nstream\_file           | bigint  | Number of streamed-to-file transactions processed by this writer     |
| nstream\_writer         | bigint  | Number of streamed-to-writer transactions processed by this writer   |
| xact\_nchanges          | bigint  | Number of changes processed by this writer (updated every 1000 rows) |

### `bdr.worker_tasks`

The `bdr.worker_tasks` view shows PGD's current worker launch rate
limiting state as well as some basic statistics on background worker launch
and registration activity.

Unlike the other views listed here, it isn't specific to the current database
and PGD node. State for all PGD nodes on the current PostgreSQL
instance is shown. Join on the current database to filter it.

`bdr.worker_tasks` doesn't track walsenders and output plugins.

#### `bdr.worker_tasks` columns

| Column                                | Type                     | Description                                             |
| ------------------------------------- | ------------------------ | ------------------------------------------------------- |
| task\_key\_worker\_role               | integer                  | Worker role identifier                                  |
| task\_key\_worker\_role\_name         | text                     | Worker role name                                        |
| task\_key\_dboid                      | oid                      | Database identifier, if available                       |
| datname                               | name                     | Name of the database, if available                      |
| task\_key\_subid                      | oid                      | Subscription identifier, if available                   |
| sub\_name                             | name                     | Name of the subscription, if available                  |
| task\_key\_ext\_libname               | name                     | Name of the library (most likely bdr)                   |
| task\_key\_ext\_funcname              | name                     | Name of the function entry point                        |
| task\_key\_ext\_workername            | name                     | Name assigned to the worker                             |
| task\_key\_remoterelid                | oid                      | Identifier of the remote syncing relation, if available |
| task\_pid                             | integer                  | Process ID of the worker                                |
| task\_registered                      | timestamp with time zone | Worker registration timestamp                           |
| since\_registered                     | interval                 | Interval since the worker registered                    |
| task\_attached                        | timestamp with time zone | Worker attach timestamp                                 |
| since\_attached                       | interval                 | Interval since the worker attached                      |
| task\_exited                          | timestamp with time zone | Worker exit timestamp                                   |
| since\_exited                         | interval                 | Interval since the worker exited                        |
| task\_success                         | boolean                  | Is worker still running?                                |
| task\_next\_launch\_not\_before       | timestamp with time zone | Timestamp when the worker will be restarted again       |
| until\_launch\_allowed                | interval                 | Time remaining for next launch                          |
| task\_last\_launch\_requestor\_pid    | integer                  | Process ID that requested launch                        |
| task\_last\_launch\_request\_time     | timestamp with time zone | Timestamp when the request was made                     |
| since\_last\_request                  | interval                 | Interval since the last request                         |
| task\_last\_launch\_request\_approved | boolean                  | Did the last request succeed?                           |
| task\_nrequests                       | integer                  | Number of requests                                      |
| task\_nregistrations                  | integer                  | Number of registrations                                 |
| task\_prev\_pid                       | integer                  | Process ID of the previous generation                   |
| task\_prev\_registered                | timestamp with time zone | Timestamp of the previous registered task               |
| since\_prev\_registered               | interval                 | Interval since the previous registration                |
| task\_prev\_launched                  | timestamp with time zone | Timestamp of the previous launch                        |
| since\_prev\_launched                 | interval                 | Interval since the previous launch                      |
| task\_prev\_exited                    | timestamp with time zone | Timestamp when the previous task exited                 |
| since\_prev\_exited                   | interval                 | Interval since the previous task exited                 |
| task\_first\_registered               | timestamp with time zone | Timestamp when the first registration happened          |
| since\_first\_registered              | interval                 | Interval since the first registration                   |

### `bdr.xid_peer_progress`

Tracks per-transaction progress used by `bdr.wait_for_xid_progress()`. A node
records the transaction status here as soon as it makes progress on it, and
also reports it to all other nodes; the same table stores the reports
received from peer nodes, with `peer_node_id`, `peer_apply_xid`, and
`peer_apply_lsn` then referring to the peer.

#### `bdr.xid_peer_progress` columns

| Name                 | Type    | Description                                              |
| -------------------- | ------- | -------------------------------------------------------- |
| origin\_node\_id     | oid     | OID of the node where the transaction originated         |
| origin\_node\_topxid | xid     | Top-level XID of the transaction on the origin node      |
| origin\_node\_lsn    | pg\_lsn | LSN on the origin node at the time progress was recorded |
| peer\_node\_id       | oid     | OID of the peer node this progress report is about       |
| peer\_apply\_xid     | xid     | XID applied on the peer node                             |
| peer\_apply\_lsn     | pg\_lsn | LSN applied on the peer node                             |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
