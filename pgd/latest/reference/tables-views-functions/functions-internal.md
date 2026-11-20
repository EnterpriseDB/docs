---
title: Internal system functions
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/functions-internal/
lastModified: 2026-11-20T11:33:47Z
---

# Internal system functions

The following are internal system functions. Many are used when creating various views. We recommend that you do not use the functions directly but instead use the views that they serve.

## General internal functions

### `bdr.bdr_get_commit_decisions`

Convenience routine to inspect shared memory state.

#### Synopsis

```sql
bdr.bdr_get_commit_decisions(dbid OID,
            origin_node_id OID,
            origin_xid xid,
            local_xid xid,
            decision "char",
            decision_ts timestamptz,
            is_camo boolean)
```

### `bdr.bdr_track_commit_decision`

Save the transaction commit status in the shared memory hash table.
This function is used by the upgrade scripts to transfer commit decisions
saved in bdr.commit\_decisions catalog to the shared memory hash table.
The transaction commit status will also be logged to the WAL and hence can be reloaded from
WAL.

#### Synopsis

```sql
bdr.bdr_track_commit_decision(OID, xid, xid, "char", timestamptz, boolean);
```

### `bdr.consensus_kv_fetch`

Fetch value from the consistent KV Store in JSON format.

#### Synopsis

```sql
bdr.consensus_kv_fetch(IN key text) RETURNS jsonb
```

#### Parameters

| Parameter | Description                |
| --------- | -------------------------- |
| `key`     | An arbitrary key to fetch. |

#### Notes

This function is an internal function, mainly used by HARP.

> **Warning**
>
> Don't use this function in user applications.

### `bdr.consensus_kv_store`

Stores value in the consistent KV Store.

Returns the timestamp of the value expiration time. This function depends on `ttl`. If `ttl`
is `NULL`, then this function returns `infinity`. If the value was deleted, it
returns `-infinity`.

#### Synopsis

```sql
bdr.consensus_kv_store(key text, value jsonb,
        prev_value jsonb DEFAULT NULL, ttl int DEFAULT NULL)
```

#### Parameters

| Parameter    | Description                                                                             |
| ------------ | --------------------------------------------------------------------------------------- |
| `key`        | An arbitrary unique key to insert, update, or delete.                                   |
| `value`      | JSON value to store. If NULL, any existing record is deleted.                           |
| `prev_value` | If set, the write operation is done only if the current value is equal to `prev_value`. |
| `ttl`        | Time-to-live of the new value, in milliseconds.                                         |

#### Notes

This is an internal function, mainly used by HARP.

> **Warning**
>
> Don't use this function in user applications.

### `bdr.decode_message_payload`

PGD message payload function that decodes the payloads of consensus messages to a more human-readable output. Used primarily by the `bdr.global_consensus_journal_details` debug view.

#### Synopsis

```sql
bdr.decode_message_payload(payload bytea)
```

### `bdr.decode_message_response_payload`

PGD message payload function that decodes the payloads of responses to consensus messages to a more human-readable output. Used primarily by the `bdr.global_consensus_journal_details` debug view.

#### Synopsis

```sql
bdr.decode_message_response_payload(payload bytea)
```

### `bdr.difference_fix_origin_create`

Creates a replication origin with a given name passed as an argument but adding a `bdr_` prefix.
Returns the internal id of the origin. This function has the same functionality
as `pg_replication_origin_create()` except this function requires bdr\_superuser
rather than postgres superuser permissions.

#### Synopsis

```sql
bdr.difference_fix_origin_create(text)
```

### `bdr.difference_fix_session_reset`

Marks the current session as not replaying from any origin, essentially
resetting the effect of `bdr.difference_fix_session_setup()`.
It returns void. This function has the same functionality as
`pg_replication_origin_session_reset()` except this function requires
bdr\_superuser rather than postgres superuser permissions.

#### Synopsis

```sql
bdr.difference_fix_session_reset()
```

### `bdr.difference_fix_session_setup`

Marks the current session as replaying from the current origin.
The function uses the pre-created `bdr_local_only_origin` local
replication origin implicitly for the session. It allows replay
progress to be reported and returns void. This function has the
same functionality as `pg_replication_origin_session_setup()`
except that this function requires bdr\_superuser rather than postgres
superuser permissions. The earlier form of the function,
`bdr.difference_fix_session_setup(text)`, was deprecated and will be
removed in a future release.

#### Synopsis

```sql
bdr.difference_fix_session_setup()
```

### `bdr.difference_fix_xact_set_avoid_conflict`

Marks the current transaction as replaying a transaction that
committed at LSN '0/0' and timestamp '2000-01-01'. This function has
the same functionality as
`pg_replication_origin_xact_setup('0/0', '2000-01-01')`
except this function requires bdr\_superuser rather than postgres superuser
permissions.

#### Synopsis

```sql
bdr.difference_fix_xact_set_avoid_conflict()
```

### `bdr.drop_node`

Drops a node's metadata.

After a node has been `PARTED` its metadata remains present in the cluster's nodes. For example, the node will remain in the `bdr.node_summary` results, marked as `PARTED`, until the node is dropped.

Calling `bdr.drop_node('some node', force := true)` can be necessary
and appropriate when a node becomes stuck while parting. Note that it
skips past syncing any data out of the node being dropped, if there is
any data on that node that still needs to be synced out. If a node
stuck parting has already been reimaged or deleted, there is no harm
in calling `bdr.drop_node` on it. Note that this must be called for
this stuck node on all nodes in the cluster so they all have a
consistent view that the node has been dropped.

This function removes the metadata for a given node from the local
database. The node can be either:

- The local node, in which case it removes all the node metadata, including information about remote nodes.
- A remote node, in which case it removes only metadata for that specific node.

> **Important: When to use bdr.drop\_node()**
>
> It is not necessary to use `bdr.drop_node()` to drop node metadata just to reuse node names. PGD 5 and later can reuse existing node names as long as the node name in question belongs to a node in a `PARTED` state. Instead of dropping the node, use `bdr.part_node()` to remove the original node and place it in a `PARTED`.
>
> Use of this internal function is limited to:
>
> - When you're instructed to by EDB Technical Support.
> - Where you're specifically instructed to in the documentation.
>
> Use [`bdr.part_node`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/nodes-management-interfaces/#bdrpart_node) to remove a node from a PGD group. That function sets the node to `PARTED` state and enables reuse of the node name.

#### Synopsis

```sql
bdr.drop_node(node_name text, force boolean DEFAULT false)
```

#### Parameters

| Parameter   | Description                                                                                                                                                                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `node_name` | Name of an existing node.                                                                                                                                                                                                                   |
| `force`     | Circumvents all sanity checks and forces the removal of all metadata for the given PGD node despite a possible danger of causing inconsistencies. Only Technical Support uses a forced node drop in case of emergencies related to parting. |

#### Notes

Before you run this function, part the node using `bdr.part_node()`.

This function removes metadata for a given node from the local database. The node
can be the local node, in which case all the node metadata is removed,
including information about remote nodes. Or it can be the remote node, in
which case only metadata for that specific node is removed.

> **Note**
>
> PGD can have a maximum of 1024 node records (both ACTIVE and PARTED)
> at one time because each node has a unique sequence number
> assigned to it, for use by snowflakeid and timeshard sequences.
> PARTED nodes aren't automatically cleaned up. If this
> becomes a problem, you can use this function to remove those records.

### `bdr.get_global_locks`

Shows information about global locks held on the local node.

Used to implement the `bdr.global_locks` view to provide a more detailed
overview of the locks.

#### Synopsis

```sql
bdr.get_global_locks(
    OUT dboid Oid,
    OUT origin_node_id Oid,
    OUT lock_type text,
    OUT relation text,
    OUT pid int,
    OUT acquire_stage text,
    OUT waiters int[],
    OUT global_lock_request_time timestamptz,
    OUT local_lock_request_time timestamptz,
    OUT last_state_change_time timestamptz)
```

### `bdr.get_node_conflict_resolvers`

Displays a text string of all the conflict resolvers on the local node.

#### Synopsis

```sql
bdr.get_node_conflict_resolvers(
    node_name bdr.regnode DEFAULT NULL,
    OUT conflict_type text,
    OUT conflict_resolver text)
```

### `bdr.get_slot_flush_timestamp`

Retrieves the timestamp of the last flush position confirmation for a given
replication slot.

Used internally to implement the `bdr.node_slots` view.

#### Synopsis

```sql
bdr.get_slot_flush_timestamp(name)
```

### `bdr.initialize_replication_slot`

Internal function that `bdr_init_physical` uses to initialize a replication slot for a PGD node. Run it on the node that's the source of the replication.

#### Synopsis

```sql
bdr.initialize_replication_slot(
    node_name name,
    temporary boolean DEFAULT false,
    twophase boolean DEFAULT false,
    faillover boolean DEFAULT false,
    OUT slot_name name,
    OUT lsn pg_lsn)
```

### `bdr.internal_alter_sequence_set_kind`

A function previously used internally for replication of the various function calls.
No longer used by the current version of PGD. Exists only for backward
compatibility during rolling upgrades.

### `bdr.internal_replication_set_add_table`

A function previously used internally for replication of the various function calls.
No longer used by the current version of PGD. Exists only for backward
compatibility during rolling upgrades.

### `bdr.internal_replication_set_remove_table`

A function previously used internally for replication of the various function calls.
No longer used by the current version of PGD. Exists only for backward
compatibility during rolling upgrades.

### `bdr.internal_submit_join_request`

Submits a consensus request for joining a new node.

Needed by the PGD group reconfiguration internal mechanisms.

#### Synopsis

```sql
bdr.internal_submit_join_request(
    nodegroup_name text,
    joining_node_name text,
    joining_node_id oid,
    target_state oid,
    joining_node_dbname text,
    joining_node_dsn text,
    trace_context bytea,
    proto_version_ranges int[] DEFAULT NULL,
    synchronize_structure text DEFAULT 'all',
    node_kind text DEFAULT NULL,
    node_uuid uuid DEFAULT NULL,
    retcode OUT text,
    retmsg OUT text)
```

### `bdr.isolation_test_session_is_blocked`

A helper function, extending (and actually invoking) the original
`pg_isolation_test_session_is_blocked` with an added check for blocks
on global locks.

Used for isolation/concurrency tests.

#### Synopsis

```sql
bdr.isolation_test_session_is_blocked(blocked_pid int, interesting_pids int[])
```

### `bdr.local_node_info`

Displays information for the local node needed by the PGD group
reconfiguration internal mechanisms.

The view `bdr.local_node_summary` provides similar information useful for
user consumption.

#### Synopsis

```sql
bdr.local_node_info(
    OUT node_id oid,
    OUT node_name text,
    OUT node_state oid,
    OUT target_state oid,
    OUT node_seq_id integer,
    OUT nodegroup_id oid,
    OUT nodegroup_name text,
    OUT node_dsn text,
    OUT bdr_dbname text,
    OUT local_slot_name text,
    OUT node_topgroup_id oid,
    OUT node_topgroup_name text)
```

### `bdr.msgb_connect`

Connects to the connection pooler of another node.
Used by the consensus protocol.

#### Synopsis

```sql
bdr.msgb_connect(
    channel text,
    origin_node oid,
    destination_node oid,
    last_sent_msgid bigint)
```

### `bdr.msgb_deliver_message`

Sends messages to another node's connection pooler.
Used by the consensus protocol.

#### Synopsis

```sql
bdr.msgb_deliver_message(
    destination_node oid,
    message_id bigint,
    payload bytea,
    trace_context bytea)
```

### `bdr.node_catchup_state_name`

Converts catchup state code in name.

#### Synopsis

```sql
bdr.node_catchup_state_name(catchup_state oid);
```

#### Parameters

| Parameter       | Description                    |
| --------------- | ------------------------------ |
| `catchup_state` | Oid code of the catchup state. |

### `bdr.node_kind_name`

Returns human-friendly name of the node kind (data|standby|witness|subscriber-only).

#### Synopsis

```sql
bdr.node_kind_name(node_kind oid)
```

### `bdr.peer_state_name`

Transforms the node state (`node_state`) into a textual
representation. Used mainly to implement the `bdr.node_summary` view.

#### Synopsis

```sql
bdr.peer_state_name(oid)
```

### `bdr.pg_xact_origin`

Returns the origin id of a given transaction.

#### Synopsis

```sql
bdr.pg_xact_origin(xmin xid)
```

#### Parameters

| Parameter | Description                              |
| --------- | ---------------------------------------- |
| `xid`     | Transaction id whose origin is returned. |

### `bdr.reconcile_2pc_status_name`

Converts a numerical reconciliation status code into its corresponding textual representation. This function is primarily used to populate the [bdr.reconcile\_2pc\_requests\_summary](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-internal/#bdrreconcile_2pc_requests_summary) view.

#### Synopsis

```sql
bdr.reconcile_2pc_status_name(reconcile_status oid) RETURNS text
```

#### Parameters

| Parameter          | Description                                                                   |
| ------------------ | ----------------------------------------------------------------------------- |
| `reconcile_status` | The OID code representing the specific reconciliation status to be converted. |

### `bdr.remove_unwanted_data`

Internal function that removes unnecessary physically copied data during the `bdr_init_physical` process.

#### Synopsis

```sql
bdr.remove_unwanted_data(dropsub boolean DEFAULT false)
```

### `bdr.request_replay_progress_update`

Requests the immediate writing of a 'replay progress update' Raft message.
Used mainly for test purposes but can also be used to test if the
consensus mechanism is working.

#### Synopsis

```sql
bdr.request_replay_progress_update()
```

### `bdr.reset_relation_stats`

Returns a Boolean result after resetting the relation stats,
as viewed by `bdr.stat_relation`.

#### Synopsis

```sql
bdr.reset_relation_stats()
```

### `bdr.reset_subscription_stats`

Returns a Boolean result after resetting the statistics created by subscriptions,
as viewed by `bdr.stat_subscription`.

#### Synopsis

```sql
bdr.reset_subscription_stats()
```

### `bdr.resynchronize_table_from_node`

Resynchronizes the relation from a remote node.

#### Synopsis

```sql
bdr.resynchronize_table_from_node(node_name name, relation regclass)
```

#### Parameters

| Parameter   | Description                                              |
| ----------- | -------------------------------------------------------- |
| `node_name` | The node from which to copy or resync the relation data. |
| `relation`  | The relation to copy from the remote node.               |

#### Notes

This function acquires a global DML lock on the relation, truncates the relation
locally, and copies data into it from the remote node.

The relation must exist on both nodes with the same name and definition.

The following are supported:

- Resynchronizing partitioned tables with identical partition definitions
- Resynchronizing partitioned table to nonpartitioned table and vice versa
- Resynchronizing referenced tables by temporarily dropping and re-creating
  foreign key constraints

After running the function on a referenced table, if the referenced column
data no longer matches the referencing column values, the function throws an error.
After resynchronizing the referencing table data, rerun the function.

Furthermore, it supports resynchronization of tables with generated columns by
computing the generated column values locally after copying the data from
remote node.

Currently, row\_filters are ignored by this function.

The `bdr.resynchronize_table_from_node` function can be executed only by
the owner of the table, provided the owner has bdr\_superuser privileges.

### `bdr.seq_currval`

Part of the internal implementation of global sequence manipulation.

Invoked automatically when `currval()` is called on a galloc or snowflakeid sequence.

#### Synopsis

```sql
bdr.seq_currval(seqoid oid)
```

### `bdr.seq_lastval`

Part of the internal implementation of global sequence manipulation.

Invoked automatically when `lastval()` is called on a galloc or snowflakeid sequence.

#### Synopsis

```sql
bdr.seq_lastval()
```

### `bdr.seq_nextval`

Part of the internal implementation of global sequence increments.

Invoked automatically when `nextval()` is called on a galloc or snowflakeid sequence

#### Synopsis

```sql
bdr.seq_nextval(seqoid oid)
```

### `bdr.show_subscription_status`

Retrieves information about the subscription status. Used mainly to
implement the `bdr.subscription_summary` view.

#### Synopsis

```sql
bdr.show_subscription_status(
    subscription_name name DEFAULT NULL,
    OUT sub_id Oid,
    OUT status text)
```

### `bdr.show_workers`

Information related to the bdr workers.

#### Synopsis

```sql
bdr.show_workers(
    worker_pid int,
    worker_role int,
    worker_role_name text,
    worker_subid oid)
```

### `bdr.show_writers`

Function used in the `bdr.writers` view.

#### Synopsis

```sql
bdr.show_writers(
    subscription_name name DEFAULT NULL,
    OUT pid int,
    OUT subid oid,
    OUT writer_nr int,
    OUT syncing_relid oid,
    OUT applying_remote_xid xid,
    OUT applying_remote_lsn pg_lsn,
    OUT streaming_allowed bool,
    OUT streaming_remote_xid xid,
    OUT streaming_remote_lsn pg_lsn,
    OUT commit_queue_position int,
    OUT nxacts bigint,
    OUT ncommits bigint,
    OUT naborts bigint,
    OUT nstream_file bigint,
    OUT nstream_writer bigint,
    OUT xact_nchanges bigint,
    OUT xact_origin_node_id oid,
    OUT xact_origin_lsn pg_lsn,
    OUT xact_origin_ts timestamptz,
    OUT xact_apply_source text,
    OUT xact_apply_size bigint,
    OUT xact_apply_progress bigint,
    OUT remote_change_type "char",
    OUT remote_change_lsn pg_lsn)
```

### `bdr.ri_fkey_trigger`

Trigger function that rechecks all foreign keys on a table when called as a `BEFORE` trigger. It uses `FOREIGN KEY` information to avoid foreign key anomalies by setting referencing columns to NULL. See [Foreign key conflicts](https://www.enterprisedb.com/docs/pgd/latest/conflict-management/conflicts/02_types_of_conflict/) for details.

#### Synopsis

```sql
bdr.ri_fkey_trigger()
```

### `bdr.sync_status_name`

Converts sync state code into a textual representation.
Used mainly to implement the [`bdr.sync_node_requests_summary`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-internal/#bdrsync_node_requests_summary)
view.

#### Synopsis

```sql
bdr.sync_status_name(sync_state oid)
```

#### Parameters

| Parameter    | Description                 |
| ------------ | --------------------------- |
| `sync_state` | Oid code of the sync state. |

### `bdr.worker_task_reset_backoff_all`

Forces all worker backoff intervals to expire immediately. See [`bdr.min_worker_backoff_delay`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/pgd-settings/#bdrmin_worker_backoff_delay).

#### Synopsis

```sql
bdr.worker_task_reset_backoff_all()
```

## Task manager functions

### `bdr.taskmgr_set_leader`

Requests the given `node` to be the task manager leader node. The leader
node is responsible for creating new tasks. (Currently only autopartition
makes use of this facility.) A witness node, a logical standby, or a
subscriber-only node can't become a leader. Such requests will fail with
an error.

#### Synopsis

```sql
bdr.taskmgr_set_leader(node name, wait_for_completion boolean DEFAULT true);
```

### `bdr.taskmgr_get_last_completed_workitem`

Return the `id` of the last workitem successfully completed on all nodes in the
cluster.

#### Synopsis

```sql
bdr.taskmgr_get_last_completed_workitem(local boolean DEFAULT false);
```

#### Parameters

| Parameter | Description                               |
| --------- | ----------------------------------------- |
| `local`   | Deprecated. This parameter has no effect. |

### `bdr.taskmgr_work_queue_check_status`

Lets you see the status of the background workers
that are doing their job to generate and finish the tasks.

The status can be seen through these views:

- `bdr.taskmgr_work_queue_local_status`
- `bdr.taskmgr_work_queue_global_status`

#### Synopsis

```sql
bdr.taskmgr_work_queue_check_status(workid bigint,
                           local boolean DEFAULT false);
```

#### Parameters

| Parameter | Description                  |
| --------- | ---------------------------- |
| `workid`  | The key of the task.         |
| `local`   | Check the local status only. |

#### Notes

Taskmgr workers are always running in the background, even before the
`bdr.autopartition` function is called for the first time. If an invalid
`workid` is used, the function returns `unknown`. `In-progress` is the typical status.

### `bdr.get_min_required_replication_slots`

Returns the minimum value needed for `max_replication_slots` so a node join can complete without exhausting available slots. The estimate reserves headroom for the temporary catch-up subscription that briefly coexists with the steady-state subscriptions during a join. On Postgres versions earlier than 18, where `max_active_replication_origins` is aliased to `max_replication_slots`, the returned value also covers the origin requirement. PGD-CLI uses this function internally, but you can also run it directly when sizing a cluster.

#### Synopsis

```sql
bdr.get_min_required_replication_slots()
```

### `bdr.get_min_required_active_replication_origins`

Returns the minimum value needed for `max_active_replication_origins`, the configuration parameter introduced in Postgres 18. On earlier Postgres versions, where `max_active_replication_origins` is aliased to `max_replication_slots`, this value is informational only. PGD-CLI uses this function internally, but you can also run it directly when sizing a cluster.

#### Synopsis

```sql
bdr.get_min_required_active_replication_origins()
```

### `bdr.get_min_required_worker_processes`

Internal function intended for use by PGD-CLI.

#### Synopsis

```sql
bdr.get_min_required_worker_processes()
```

### `bdr.get_min_required_settings`

Returns the minimum values PGD needs for its related Postgres settings, such as `max_replication_slots`, `max_active_replication_origins`, and `max_worker_processes`. The result is a `jsonb` object keyed by setting name. The minimums count every PGD process. Use it when sizing a cluster instead of working the values out from the number of peer nodes and writers.

#### Synopsis

```sql
bdr.get_min_required_settings()
```

### `bdr.stat_last_reset_time`

Internal function used to retrieve the most recent reset timestamp for a specific statistics category. For standard monitoring, each statistic that supports [bdr.stat\_reset](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/functions/#bdrstat_reset) includes a `stats_reset` column in the [bdr.stat\_commit\_scope](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrstat_commit_scope) view, which provides this information in a more accessible format for user consumption.

#### Synopsis

```sql
bdr.stat_last_reset_time(stats_type text)
```

### `bdr.stat_get_activity`

Internal function underlying view `bdr.stat_activity`. Do not use directly. Use the [`bdr.stat_activity`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrstat_activity) view instead.

#### Synopsis

```sql
bdr.stat_get_activity(
    pid integer,
    OUT datid oid,
    OUT pid integer,
    OUT usesysid oid,
    OUT application_name text,
    OUT state text,
    OUT query text,
    OUT wait_event_type text,
    OUT wait_event text,
    OUT xact_start timestamp with time zone,
    OUT query_start timestamp with time zone,
    OUT backend_start timestamp with time zone,
    OUT state_change timestamp with time zone,
    OUT client_addr inet,
    OUT client_hostname text,
    OUT client_port integer,
    OUT backend_xid xid,
    OUT backend_xmin xid,
    OUT backend_type text,
    OUT ssl boolean,
    OUT sslversion text,
    OUT sslcipher text,
    OUT sslbits integer,
    OUT sslcompression boolean,
    OUT ssl_client_dn text,
    OUT ssl_client_serial numeric,
    OUT ssl_issuer_dn text,
    OUT gss_auth boolean,
    OUT gss_princ text,
    OUT gss_enc boolean,
    OUT leader_pid integer,
    OUT connection_manager_client_addr inet,
    OUT connection_manager_client_port integer,
    OUT session_read_only boolean)
```

### `bdr.stat_get_commit_scope`

Internal function to fetch commit scope statistics. For standard monitoring and troubleshooting, use the [bdr.stat\_commit\_scope](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrstat_commit_scope) view, which provides the same information in a more accessible format.

#### Synopsis

```sql
bdr.stat_get_commit_scope(
    IN cs_id Oid,
    OUT ncalls bigint,
    OUT ncommits bigint,
    OUT naborts bigint,
    OUT ndegrades bigint,
    OUT nconfig_degrades bigint,
    OUT last_state_change_time timestamptz,
    OUT total_commit_time float8,
    OUT min_commit_time float8,
    OUT max_commit_time float8,
    OUT mean_commit_time float8)
```

### `bdr.stat_get_commit_scope_proc_wait`

Internal function used to retrieve the wait state statistics for processes associated with specific commit scopes. For standard monitoring and troubleshooting, use the [bdr.stat\_commit\_scope](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrstat_commit_scope) view, which provides a more accessible representation of this data.

#### Synopsis

```sql
bdr.stat_get_commit_scope_proc_wait(
    IN pid integer,
    OUT pid integer,
    OUT cs_id Oid,
    OUT waiting_op_num integer,
    OUT waiting_prepare_confirmations integer,
    OUT waiting_commit_confirmations integer,
    OUT waiting_lsn_confirmations integer)
```

### `bdr.stat_get_reconcile_commit_scope`

Internal function used to retrieve reconciliation statistics for commit scopes. For standard monitoring and troubleshooting, use the [bdr.stat\_reconcile\_commit\_scope](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrstat_reconcile_commit_scope) view, which provides a more accessible and user-friendly representation of this data.

#### Synopsis

```sql
bdr.stat_get_reconcile_commit_scope(
    IN cs_id Oid,
    IN origin_id Oid,
    OUT nreconciles bigint,
    OUT ncommits bigint,
    OUT naborts bigint,
    OUT ntimeouts bigint,
    OUT total_reconcile_time float8)
```

### `bdr.worker_role_id_name`

Internal helper function used when generating view `bdr.worker_tasks`. Do not use directly. Use the [`bdr.worker_tasks`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrworker_tasks) view instead.

#### Synopsis

```sql
bdr.worker_role_id_name(role_id int)
```

### `bdr.lag_history`

Internal function used when generating view `bdr.node_replication_rates`. Do not use directly. Use the [`bdr.node_replication_rates`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrnode_replication_rates) view instead.

#### Synopsis

```sql
bdr.lag_history(
    OUT peer_node_id OID,
    OUT ts TIMESTAMP WITH TIME ZONE,
    OUT send_ptr pg_lsn,
    OUT write_ptr pg_lsn,
    OUT flush_ptr pg_lsn,
    OUT apply_ptr pg_lsn,
    OUT apply_rate bigint)
```

### `bdr.get_raft_instance_by_nodegroup`

Internal function used when generating view `bdr.group_raft_details`. Do not use directly. Use the [`bdr.group_raft_details`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrgroup_raft_details) view instead.

#### Synopsis

```sql
bdr.get_raft_instance_by_nodegroup(node_group_id oid)
```

### `bdr.monitor_camo_on_all_nodes`

Internal function used when generating view `bdr.group_camo_details`. Do not use directly. Use the [`bdr.group_camo_details`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrgroup_camo_details) view instead.

#### Synopsis

```sql
bdr.monitor_camo_on_all_nodes()
```

### `bdr.monitor_raft_details_on_all_nodes`

Internal function used when generating view `bdr.group_raft_details`. Do not use directly. Use the [`bdr.group_raft_details`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrgroup_raft_details) view instead.

#### Synopsis

```sql
bdr.monitor_raft_details_on_all_nodes()
```

### `bdr.monitor_replslots_details_on_all_nodes`

Internal function used when generating view `bdr.group_replslots_details`. Do not use directly. Use the [`bdr.group_replslots_details`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrgroup_replslots_details) view instead.

#### Synopsis

```sql
bdr.monitor_replslots_details_on_all_nodes()
```

### `bdr.monitor_subscription_details_on_all_nodes`

Internal function used when generating view `bdr.group_subscription_summary`. Do not use directly. Use the [`bdr.group_subscription_summary`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrgroup_subscription_summary) view instead.

#### Synopsis

```sql
bdr.monitor_subscription_details_on_all_nodes()
```

### `bdr.monitor_version_details_on_all_nodes`

Internal function used when generating view `bdr.group_versions_details`. Do not use directly. Use the [`bdr.group_versions_details`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrgroup_versions_details) view instead.

#### Synopsis

```sql
bdr.monitor_version_details_on_all_nodes()
```

### `bdr.node_group_member_info`

Internal function used when generating view `bdr.group_raft_details`. Do not use directly. Use the [`bdr.group_raft_details`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/catalogs-visible/#bdrgroup_raft_details) view instead.

#### Synopsis

```sql
bdr.node_group_member_info(
    IN nodegroup_id oid,
    OUT node_id oid,
    OUT node_name text,
    OUT node_state oid,
    OUT target_state oid,
    OUT node_seq_id integer,
    OUT nodegroup_id oid,
    OUT nodegroup_name text,
    OUT node_dsn text,
    OUT bdr_dbname text,
    OUT local_slot_name text,
    OUT node_topgroup_id oid,
    OUT node_topgroup_name text)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
