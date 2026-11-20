---
title: PGD predefined roles
description: Describes predefined roles in PGD
product: EDB Postgres Distributed (PGD)
version: 5.10.0
url: https://www.enterprisedb.com/docs/pgd/5.10/security/pgd-predefined-roles/
lastModified: 2026-11-20T11:33:47Z
---

# PGD predefined roles

PGD predefined roles are created when the BDR extension is installed. After BDR
extension is dropped from a database, the roles continue to exist. You need to
drop them manually if dropping is required.

### bdr\_superuser

This is a role for an admin user that can manage anything PGD related. It allows you to separate management of the database and table access. Using it allows you to have a user that can manage the PGD cluster without giving them PostgreSQL superuser privileges.

#### Privileges

- ALL PRIVILEGES ON ALL TABLES IN SCHEMA BDR
- ALL PRIVILEGES ON ALL ROUTINES IN SCHEMA BDR

### bdr\_read\_all\_stats

This role provides read access to most of the tables, views, and functions that users or applications may need to observe the statistics and state of the PGD cluster.

#### Privileges

`SELECT` privilege on:

- [`bdr.autopartition_partitions`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-internal/#bdrautopartition_partitions)
- [`bdr.autopartition_rules`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-internal/#bdrautopartition_rules)
- [`bdr.ddl_epoch`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-internal/#bdrddl_epoch)
- [`bdr.ddl_replication`](https://www.enterprisedb.com/docs/pgd/5.9/reference/pgd-settings/#bdrddl_replication)
- [`bdr.global_consensus_journal_details`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrglobal_consensus_journal_details)
- [`bdr.global_lock`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrglobal_lock)
- [`bdr.global_locks`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrglobal_locks)
- [`bdr.group_camo_details`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrgroup_camo_details)
- [`bdr.local_consensus_state`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrlocal_consensus_state)
- [`bdr.local_node_summary`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrlocal_node_summary)
- [`bdr.node`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrnode)
- [`bdr.node_catchup_info`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrnode_catchup_info)
- [`bdr.node_catchup_info_details`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrnode_catchup_info_details)
- [`bdr.node_conflict_resolvers`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrnode_conflict_resolvers)
- [`bdr.node_group`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrnode_group)
- [`bdr.node_local_info`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrnode_local_info)
- [`bdr.node_peer_progress`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrnode_peer_progress)
- [`bdr.node_replication_rates`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrnode_replication_rates)
- [`bdr.node_slots`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrnode_slots)
- [`bdr.node_summary`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrnode_summary)
- [`bdr.replication_sets`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrreplication_sets)
- `bdr.replication_status`
- [`bdr.sequences`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrsequences)
- [`bdr.stat_activity`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrstat_activity)
- [`bdr.stat_relation`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrstat_relation)
- [`bdr.stat_subscription`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrstat_subscription) _deprecated_
- [`bdr.state_journal_details`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#)
- [`bdr.subscription`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrsubscription)
- [`bdr.subscription_summary`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrsubscription_summary)
- [`bdr.tables`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrtables)
- [`bdr.taskmgr_local_work_queue`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrtaskmgr_local_work_queue)
- [`bdr.taskmgr_work_queue`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrtaskmgr_work_queue)
- [`bdr.worker_errors`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#) _deprecated_
- [`bdr.workers`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrworkers)
- [`bdr.writers`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrwriters)
- `bdr.xid_peer_progress`

EXECUTE privilege on:

- `bdr.bdr_edition` _deprecated_
- [`bdr.bdr_version`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrbdr_version)
- [`bdr.bdr_version_num`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrbdr_version_num)
- [`bdr.decode_message_payload`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrdecode_message_payload)
- [`bdr.get_consensus_status`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrget_consensus_status)
- [`bdr.get_decoding_worker_stat`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrget_decoding_worker_stat)
- [`bdr.get_global_locks`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrget_global_locks)
- [`bdr.get_min_required_replication_slots`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrget_min_required_replication_slots)
- [`bdr.get_min_required_worker_processes`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrget_min_required_worker_processes)
- [`bdr.get_raft_status`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrget_raft_status)
- [`bdr.get_relation_stats`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrget_relation_stats)
- [`bdr.get_slot_flush_timestamp`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrget_slot_flush_timestamp)
- `bdr.get_sub_progress_timestamp`
- [`bdr.get_subscription_stats`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrget_subscription_stats)
- [`bdr.lag_control`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrlag_control)
- [`bdr.lag_history`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrlag_history)
- [`bdr.node_catchup_state_name`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrnode_catchup_state_name)
- [`bdr.node_kind_name`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrnode_kind_name)
- [`bdr.peer_state_name`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrpeer_state_name)
- [`bdr.pglogical_proto_version_ranges`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrpglogical_proto_version_ranges)
- [`bdr.show_subscription_status`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrshow_subscription_status)
- [`bdr.show_workers`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrshow_workers)
- [`bdr.show_writers`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrshow_writers)
- [`bdr.stat_get_activity`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrstat_get_activity)
- [`bdr.wal_sender_stats`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrwal_sender_stats)
- [`bdr.worker_role_id_name`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrworker_role_id_name)

### bdr\_monitor

This role provides read access to any tables, views, and functions that users or applications may need to monitor the PGD cluster. It includes all the privileges of the [`bdr_read_all_stats`](#bdr_read_all_stats) role.

#### Privileges

All privileges from [`bdr_read_all_stats`](#bdr_read_all_stats) plus the following additional privileges:

`SELECT` privilege on:

- [`bdr.group_raft_details`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrgroup_raft_details)
- [`bdr.group_replslots_details`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrgroup_replslots_details)
- [`bdr.group_subscription_summary`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrgroup_subscription_summary)
- [`bdr.group_versions_details`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrgroup_versions_details)
- `bdr.raft_instances`

`EXECUTE` privilege on:

- [`bdr.get_raft_instance_by_nodegroup`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrget_raft_instance_by_nodegroup)
- [`bdr.monitor_camo_on_all_nodes`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrmonitor_camo_on_all_nodes)
- [`bdr.monitor_group_raft`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrmonitor_group_raft)
- [`bdr.monitor_group_versions`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrmonitor_group_versions)
- [`bdr.monitor_local_replslots`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrmonitor_local_replslots)
- [`bdr.monitor_raft_details_on_all_nodes`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrmonitor_raft_details_on_all_nodes)
- [`bdr.monitor_replslots_details_on_all_nodes`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrmonitor_replslots_details_on_all_nodes)
- [`bdr.monitor_subscription_details_on_all_nodes`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrmonitor_subscription_details_on_all_nodes)
- [`bdr.monitor_version_details_on_all_nodes`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrmonitor_version_details_on_all_nodes)
- [`bdr.node_group_member_info`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrnode_group_member_info)

### bdr\_application

This role is designed for applications that require access to PGD features, objects, and functions such as sequences, CRDT datatypes, CAMO status functions, or trigger management functions.

#### Privileges

`EXECUTE` privilege on:

- All functions for column\_timestamps datatypes
- All functions for CRDT datatypes
- [`bdr.alter_sequence_set_kind`](https://www.enterprisedb.com/docs/pgd/5.9/reference/sequences/#bdralter_sequence_set_kind)
- [`bdr.create_conflict_trigger`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/interfaces/#bdrcreate_conflict_trigger)
- [`bdr.create_transform_trigger`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/interfaces/#bdrcreate_transform_trigger)
- [`bdr.drop_trigger`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/interfaces/#bdrdrop_trigger)
- [`bdr.get_configured_camo_partner`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrget_configured_camo_partner)
- [`bdr.global_lock_table`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrglobal_lock_table)
- [`bdr.is_camo_partner_connected`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdris_camo_partner_connected)
- [`bdr.is_camo_partner_ready`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdris_camo_partner_ready)
- [`bdr.logical_transaction_status`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrlogical_transaction_status)
- `bdr.ri_fkey_trigger`
- [`bdr.seq_nextval`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrseq_nextval)
- [`bdr.seq_currval`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrseq_currval)
- [`bdr.seq_lastval`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions-internal/#bdrseq_lastval)
- [`bdr.trigger_get_committs`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/rowfunctions/#bdrtrigger_get_committs)
- [`bdr.trigger_get_conflict_type`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/rowfunctions/#bdrtrigger_get_conflict_type)
- [`bdr.trigger_get_origin_node_id`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/rowfunctions/#bdrtrigger_get_origin_node_id)
- [`bdr.trigger_get_row`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/rowfunctions/#bdrtrigger_get_row)
- [`bdr.trigger_get_type`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/rowfunctions/#bdrtrigger_get_type)
- [`bdr.trigger_get_xid`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/rowfunctions/#bdrtrigger_get_xid)
- [`bdr.wait_for_camo_partner_queue`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrwait_for_camo_partner_queue)
- [`bdr.wait_slot_confirm_lsn`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrwait_slot_confirm_lsn)
- [`bdr.wait_node_confirm_lsn`](https://www.enterprisedb.com/docs/pgd/5.9/reference/functions/#bdrwait_node_confirm_lsn)

Many of these functions require additional privileges before you can use them.
For example, you must be the table owner to successfully execute
`bdr.alter_sequence_set_kind`. These additional rules are described with each
specific function.

### bdr\_read\_all\_conflicts

PGD logs conflicts into the
[`bdr.conflict_history`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrconflict_history)
table. Conflicts are visible only to table owners, so no extra privileges are
required for the owners to read the conflict history.

If, though, it's useful to have a user that can see conflicts for all tables,
you can optionally grant the role `bdr_read_all_conflicts` to that user.

#### Privileges

An explicit policy is set on [`bdr.conflict_history`](https://www.enterprisedb.com/docs/pgd/5.9/reference/catalogs-visible/#bdrconflict_history) that allows this role to read the `bdr.conflict_history` table.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
