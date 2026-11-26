---
title: Internal catalogs and views
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/reference/tables-views-functions/catalogs-internal/
lastModified: 2026-08-21T09:22:11+02:00
---

# Internal catalogs and views

Catalogs and views are listed here in alphabetical order.

### `bdr.autopartition_partitions`

An internal catalog table that stores information about the partitions created by the autopartitioning feature.

#### `bdr.autopartition_partitions` columns

| Name                   | Type                     | Description              |
| ---------------------- | ------------------------ | ------------------------ |
| ap\_parent\_relid      | oid                      | OID for relation         |
| ap\_part\_relname      | name                     | Name of created relation |
| ap\_part\_created\_at  | timestamp with time zone | Creation timestamp       |
| ap\_part\_migrated\_at | timestamp with time zone | Migration timestamp      |
| ap\_part\_dropped\_at  | timestamp with time zone | Timestamp when dropped   |

### `bdr.autopartition_rules`

An internal catalog table that stores information about the autopartitioning rules.

#### `bdr.autopartition_rules` columns

| Name                               | Type                     | Description |
| ---------------------------------- | ------------------------ | ----------- |
| ap\_partition\_relid               | oid                      |             |
| ap\_partition\_relname             | name                     |             |
| ap\_partition\_schemaname          | name                     |             |
| ap\_partition\_increment\_kind     | "char"                   |             |
| ap\_secondary\_tablespace          | oid                      |             |
| ap\_maximum\_advance\_partitions   | integer                  |             |
| ap\_is\_autoscaled                 | boolean                  |             |
| ap\_latest\_partitions             | integer                  |             |
| ap\_enabled                        | boolean                  |             |
| ap\_migrate\_after\_period         | interval                 |             |
| ap\_data\_retention\_period        | interval                 |             |
| ap\_last\_triggered                | timestamp with time zone |             |
| ap\_partition\_increment\_value    | text                     |             |
| ap\_partition\_autocreate\_expr    | text                     |             |
| ap\_partition\_initial\_lowerbound | text                     |             |
| ap\_partition\_last\_upperbound    | text                     |             |
| ap\_partition\_min\_upperbound     | text                     |             |

### `bdr.ddl_epoch`

An internal catalog table holding state per DDL epoch.

#### `bdr.ddl_epoch` columns

| Name                    | Type        | Description                                                              |
| ----------------------- | ----------- | ------------------------------------------------------------------------ |
| ddl\_epoch              | int8        | Monotonically increasing epoch number                                    |
| origin\_node\_id        | oid         | Internal node ID of the node that requested creation of this epoch       |
| epoch\_consume\_timeout | timestamptz | Timeout of this epoch                                                    |
| epoch\_consumed         | boolean     | Switches to true as soon as the local node has fully processed the epoch |
| epoch\_consumed\_lsn    | boolean     | LSN at which the local node has processed the epoch                      |

### `bdr.event_history`

Internal catalog table that tracks cluster membership events for a given PGD
node. Specifically, it tracks:

- Node joins (to the cluster)
- Raft state changes (that is, whenever the node changes its role in the consensus
  protocol - leader, follower, or candidate to leader); see [Monitoring Raft consensus](https://www.enterprisedb.com/docs/pgd/6.4/monitoring/sql/#monitoring-raft-consensus)
- Whenever a worker has errored out (see [bdr.workers](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrworkers)
  and [Monitoring PGD replication workers](https://www.enterprisedb.com/docs/pgd/6.4/monitoring/sql/#monitoring-pgd-replication-workers))

#### `bdr.event_history` columns

| Name             | Type        | Description                                                                         |
| ---------------- | ----------- | ----------------------------------------------------------------------------------- |
| event\_node\_id  | oid         | ID of the node to which the event refers                                            |
| event\_type      | int         | Type of the event (a node, raft, or worker-related event)                           |
| event\_sub\_type | int         | Subtype of the event, that is, if it's a join, a state change, or an error          |
| event\_source    | text        | Name of the worker process where the event was sourced                              |
| event\_time      | timestamptz | Timestamp at which the event occurred                                               |
| event\_text      | text        | Textual representation of the event (for example, the error of the worker)          |
| event\_detail    | text        | A more detailed description of the event (for now, only relevant for worker errors) |

### `bdr.event_summary`

A view of the `bdr.event_history` catalog that displays the information in a more
human-friendly format. Specifically, it displays the event types and subtypes
as textual representations rather than integers.

### `bdr.local_leader_change`

This is a local cache of the recent portion of leader change history. It has the same fields as [`bdr.leader`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrleader), except that it is an ordered set of (node\_group\_id, leader\_kind, generation) instead of a map tracking merely the current version.

### `bdr.node_config`

An internal catalog table with per-node configuration options.

#### `bdr.node_config` columns

| Name                  | Type    | Description                                                                                                                                                                                                                                                                                                                                                   |
| --------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| node\_id              | oid     | Node ID                                                                                                                                                                                                                                                                                                                                                       |
| node\_route\_priority | int     | Priority assigned to this node                                                                                                                                                                                                                                                                                                                                |
| node\_route\_fence    | boolean | Switch to fence this node                                                                                                                                                                                                                                                                                                                                     |
| node\_route\_writes   | boolean | Switch to allow writes                                                                                                                                                                                                                                                                                                                                        |
| node\_route\_reads    | boolean | Switch to allow reads                                                                                                                                                                                                                                                                                                                                         |
| node\_route\_dsn      | text    | Interface of this node                                                                                                                                                                                                                                                                                                                                        |
| node\_group\_dsn      | text    | Preferred connection string for nodes in the same subgroup. When set, nodes within the same subgroup connect using this DSN instead of `node_dsn`. Defaults to empty. Set using [`bdr.alter_node_option`](https://www.enterprisedb.com/docs/pgd/6.4/reference/tables-views-functions/nodes-management-interfaces/#bdralter_node_option) with key `group_dsn`. |

### `bdr.node_config_summary`

A view of the `bdr.node_config` catalog that displays the information in a more human-readable format.

#### `bdr.node_config_summary` columns

| Name                  | Type    | Description                                                                                                                                                           |
| --------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| node\_name            | text    | The name of this node                                                                                                                                                 |
| node\_id              | oid     | Node ID                                                                                                                                                               |
| node\_route\_priority | int     | Priority assigned to this node                                                                                                                                        |
| node\_route\_fence    | boolean | Switch to fence this node                                                                                                                                             |
| node\_route\_writes   | boolean | Switch to allow writes                                                                                                                                                |
| node\_route\_reads    | boolean | Switch to allow reads                                                                                                                                                 |
| node\_route\_dsn      | text    | Interface of this node                                                                                                                                                |
| node\_group\_dsn      | text    | Preferred connection string for nodes in the same subgroup. When set, nodes within the same subgroup connect using this DSN instead of `node_dsn`. Defaults to empty. |
| effective\_route\_dsn | text    | Full DSN of this node                                                                                                                                                 |
| effective\_group\_dsn | text    | The effective group DSN for this node, derived from [`node_group_dsn`](#bdrnode_config).                                                                              |

### `bdr.node_group_config`

An internal catalog table with per-node group configuration options.

#### `bdr.node_group_config` columns

| Name                               | Type     | Description                                                                                                                                                                                       |
| ---------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| node\_group\_id                    | oid      | Node group ID.                                                                                                                                                                                    |
| route\_writer\_max\_lag            | bigint   | Maximum write lag accepted.                                                                                                                                                                       |
| route\_reader\_max\_lag            | bigint   | Maximum read lag accepted.                                                                                                                                                                        |
| route\_writer\_wait\_flush         | boolean  | Switch if we need to wait for the flush.                                                                                                                                                          |
| leader\_progress\_tracking\_enable | boolean  | Enables periodic replication progress reports on each data nodes to the Raft leader. These reports ensure the most up-to-date node is selected during write leader elections. Defaults to `true`. |
| leader\_progress\_tracking\_period | interval | The frequency at which replication progress reports are sent to the Raft leader. Defaults to `1s`.                                                                                                |

### `bdr.node_group_routing_config_summary`

Per-node-group routing configuration options.

#### `bdr.node_group_routing_config_summary` columns

| Name                       | Type    | Description                                                     |
| -------------------------- | ------- | --------------------------------------------------------------- |
| node\_group\_name          | name    | Node group name                                                 |
| location                   | name    | Node group location                                             |
| enable\_routing            | boolean | Group routing enabled?                                          |
| node\_group\_type          | text    | Node group type (one of "global", "data", or "subscriber-only") |
| route\_writer\_max\_lag    | bigint  | Maximum write lag accepted                                      |
| route\_reader\_max\_lag    | bigint  | Maximum read lag accepted                                       |
| route\_writer\_wait\_flush | boolean | Wait for flush                                                  |

### `bdr.node_group_routing_info`

An internal catalog table holding current routing information for connection manager.

#### `bdr.node_group_routing_info` columns

| Name                   | Type        | Description                                                                                 |
| ---------------------- | ----------- | ------------------------------------------------------------------------------------------- |
| node\_group\_id        | oid         | Node group ID.                                                                              |
| write\_node\_id        | oid         | Current write node.                                                                         |
| prev\_write\_node\_id  | oid         | Previous write node.                                                                        |
| read\_node\_ids        | oid\[]      | List of read-only nodes IDs.                                                                |
| record\_version        | bigint      | Record version. Incremented by 1 on every material change to the routing record.            |
| record\_ts             | timestamptz | Timestamp of last update to record\_version.                                                |
| write\_leader\_version | bigint      | Write leader version. Copied from record\_version every time write\_node\_id is changed.    |
| write\_leader\_ts      | timestamptz | Write leader timestamp. Copied from record\_ts every time write\_node\_id is changed.       |
| read\_nodes\_version   | bigint      | Read nodes version. Copied from record\_version every time read\_node\_ids list is changed. |
| read\_nodes\_ts        | timestamptz | Read nodes timestamp. Copied from record\_tw every time read\_node\_ids list is changed.    |

### `bdr.node_group_routing_summary`

A view of `bdr.node_group_routing_info` catalog that shows the information in more friendly way.

#### `bdr.node_group_routing_summary` columns

| Name                  | Type    | Description             |
| --------------------- | ------- | ----------------------- |
| node\_group\_name     | name    | Node group name         |
| write\_lead           | name    | Current write lead      |
| previous\_write\_lead | name    | Previous write lead     |
| read\_nodes           | name\[] | Current read-only nodes |

### `bdr.node_peer_progress_mapping`

A internal catalog used to track the relative progress of each node in the cluster against each other node to assist with group slot movement.

This is an internal relation used by PGD to assist with node progress tracking. Its contents are primarily for system use and should not be used as a standalone reference to infer the exact state or health of replication progress.

#### `bdr.node_peer_progress_mapping` columns

| Name           | Type    | Description                                                                   |
| -------------- | ------- | ----------------------------------------------------------------------------- |
| peer\_node\_id | oid     | OID of the remote peer node for which this progress information was reported. |
| local\_lsn     | pg\_lsn | LSN on the local node at the time the progress was recorded.                  |
| remote\_lsn    | pg\_lsn | LSN on the originating node at the time the progress was reported.            |

### `bdr.node_routing_config_summary`

A friendly view of the per-node routing configuration options.
Shows the node name rather than the oid and shorter field names.

#### `bdr.node_routing_config_summary` columns

| Name            | Type    | Description                    |
| --------------- | ------- | ------------------------------ |
| gid             | name    | Node name                      |
| route\_priority | int     | Priority assigned to this node |
| route\_fence    | boolean | Switch to fence this node      |
| route\_writes   | boolean | Switch to allow writes         |
| route\_reads    | boolean | Switch to allow reads          |
| route\_dsn      | text    | Interface of this node         |

### `bdr.prepared_xacts_summary`

An internal local node view that provides diagnostic information for prepared transactions implicitly created by an origin node when using group commit scopes.

#### `bdr.prepared_xacts_summary` columns

| Name                | Type                     | Description                                                                                  |
| ------------------- | ------------------------ | -------------------------------------------------------------------------------------------- |
| gid                 | name                     | Global identifier of the implicitly prepared transaction.                                    |
| origin\_node\_id    | oid                      | OID of the node where the transaction originated.                                            |
| origin\_xid         | xid                      | Transaction ID of the prepared transaction on the origin node.                               |
| origin\_name        | name                     | Name of the origin node.                                                                     |
| commit\_scope\_name | name                     | Name of the commit scope used for the transaction.                                           |
| origin\_node\_group | name                     | Name of the node group associated with the origin node group for the commit scope.           |
| cs\_id              | oid                      | Internal ID of the commit scope.                                                             |
| transaction\_state  | name                     | Current state of the prepared transaction. For example, `waiting for prepared confirmation`. |
| local\_prepared\_ts | timestamp with time zone | Timestamp when the transaction was prepared on the local node.                               |
| local\_xid          | xid                      | Transaction ID of the corresponding prepared transaction on the local node.                  |
| pid                 | int                      | PID of the process handling the prepared transaction, if active.                             |
| decision            | char                     | The commit decision for the prepared transaction, if reached.                                |

### `bdr.reconcile_2pc_requests`

An internal state table storing the current state of 2 phase commit reconciliation requests. The view [bdr.reconcile\_2pc\_requests\_summary](#bdrreconcile_2pc_requests_summary) provides a human-readable representation of this table.

#### `bdr.reconcile_2pc_requests` columns

| Name                   | Type        | Description                                                                                                                      |
| ---------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| origin\_id             | oid         | OID of the origin node for which the reconciliation request was created.                                                         |
| coord\_id              | oid         | OID of the coordinator node acting as the reconciler. Remains empty until a coordinator is elected.                              |
| reconcile\_status      | integer     | Status code of the reconciliation request.                                                                                       |
| origin\_lsn            | pg\_lsn     | LSN of the origin node as seen by the coordinator at the time of assignment. Remains empty until a coordinator is elected.       |
| origin\_commit\_ts     | timestamptz | Commit timestamp of the origin known to the coordinator at the time of assignment. Remains empty until a coordinator is elected. |
| reconcile\_request\_ts | timestamptz | The timestamp when the reconciliation request was registered for the origin ID.                                                  |

### `bdr.reconcile_2pc_requests_summary`

A view providing a human-readable summary of the reconciliation requests stored in [bdr.reconcile\_2pc\_requests](#bdrreconcile_2pc_requests).

#### `bdr.reconcile_2pc_requests_summary` columns

| Name                   | Type        | Description                                                                                                                |
| ---------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------- |
| origin                 | text        | Name of the origin node for which the reconciliation request was created.                                                  |
| coordinator            | text        | Name of the coordinator node performing the reconciliation. Remains empty until a coordinator is elected.                  |
| origin\_commit\_ts     | timestamptz | Commit timestamp of the origin known to the coordinator at the time of assignment.                                         |
| origin\_lsn            | pg\_lsn     | LSN of the origin node as seen by the coordinator at the time of assignment. Remains empty until a coordinator is elected. |
| reconcile\_request\_ts | timestamptz | The timestamp when the reconciliation request was registered for the origin. Remains empty until a coordinator is elected. |
| reconcile\_status      | text        | Textual status of the reconciliation request. For example: `leader elect`, `start`, `done`, `failed`.                      |

### `bdr.sequence_kind`

An internal state table storing the type of each non-local sequence. We recommend the view
`bdr.sequences` for diagnostic purposes.

#### `bdr.sequence_kind` columns

| Name    | Type | Description                                                                 |
| ------- | ---- | --------------------------------------------------------------------------- |
| seqid   | oid  | Internal OID of the sequence                                                |
| seqkind | char | Internal sequence kind (`l`=local,`t`=timeshard,`s`=snowflakeid,`g`=galloc) |
| sequuid | name | Global identifier for the sequence.                                         |

### `bdr.sync_node_requests`

An internal state table storing the state of node synchronization requests. The view
[`bdr.sync_node_requests_summary`](https://www.enterprisedb.com/docs/pgd/6.4/reference/tables-views-functions/catalogs-internal/#bdrsync_node_requests_summary)
provides a human-readable representation of this table.

#### `bdr.sync_node_requests` columns

| Name                 | Type        | Description                                      |
| -------------------- | ----------- | ------------------------------------------------ |
| sn\_origin\_node\_id | oid         | Unavailable node with changes to be synchronized |
| sn\_target\_node\_id | oid         | Node with the origin node's changes              |
| sn\_source\_node\_id | oid         | Target node for the sync request                 |
| sn\_sync\_start\_lsn | pg\_lsn     | Start LSN of the sync request                    |
| sn\_sync\_start\_ts  | timestamptz | Start timestamp of the sync request              |
| sn\_sync\_end\_lsn   | pg\_lsn     | End LSN of the sync request                      |
| sn\_sync\_end\_ts    | timestamptz | End timestamp of the sync request                |
| sn\_sync\_status     | text        | Status of the sync request                       |

### `bdr.sync_node_requests_summary`

A view providing a human-readable version of the underlying [`bdr.sync_node_requests`](https://www.enterprisedb.com/docs/pgd/6.4/reference/tables-views-functions/catalogs-internal/#bdrsync_node_requests)
table.

#### `bdr.sync_node_requests_summary` columns

| Name             | Type        | Description                                      |
| ---------------- | ----------- | ------------------------------------------------ |
| origin           | text        | Unavailable node with changes to be synchronized |
| source           | text        | Node with the origin node's changes              |
| target           | text        | Target node for the sync request                 |
| sync\_start\_lsn | pg\_lsn     | Start LSN of the sync request                    |
| sync\_start\_ts  | timestamptz | Start timestamp of the sync request              |
| sync\_end\_lsn   | pg\_lsn     | End LSN of the sync request                      |
| sync\_end\_ts    | timestamptz | End timestamp of the sync request                |
| sync\_status     | text        | Status of the sync request                       |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
