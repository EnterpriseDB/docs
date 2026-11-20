---
title: PGD reference
description: |
  The complete reference to all functions, views, and commands available in EDB Postgres Distributed.
product: EDB Postgres Distributed (PGD)
version: 5.10.0
url: https://www.enterprisedb.com/docs/pgd/5.10/reference/
lastModified: 2026-11-20T11:33:47Z
---

# PGD reference

The reference section is a definitive listing of all functions, views, and commands available in EDB Postgres Distributed.

## [User visible catalogs and views](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/)

- [`bdr.camo_decision_journal`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrcamo_decision_journal)
- [`bdr.commit_decisions`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrcommit_decisions)
- [`bdr.commit_scopes`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrcommit_scopes)
- [`bdr.conflict_history`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrconflict_history)
- [`bdr.conflict_history_summary`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrconflict_history_summary)
- [`bdr.consensus_kv_data`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrconsensus_kv_data)
- [`bdr.crdt_handlers`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrcrdt_handlers)
- [`bdr.ddl_replication`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrddl_replication)
- [`bdr.depend`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrdepend)
- [`bdr.failover_replication_slots`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrfailover_replication_slots)
- [`bdr.global_consensus_journal`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrglobal_consensus_journal)
- [`bdr.global_consensus_journal_details`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrglobal_consensus_journal_details)
- [`bdr.global_consensus_response_journal`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrglobal_consensus_response_journal)
- [`bdr.global_lock`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrglobal_lock)
- [`bdr.global_locks`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrglobal_locks)
- [`bdr.group_camo_details`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrgroup_camo_details)
- [`bdr.group_raft_details`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrgroup_raft_details)
- [`bdr.group_replslots_details`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrgroup_replslots_details)
- [`bdr.group_subscription_summary`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrgroup_subscription_summary)
- [`bdr.group_versions_details`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrgroup_versions_details)
- [`bdr.leader`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrleader)
- [`bdr.local_consensus_snapshot`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrlocal_consensus_snapshot)
- [`bdr.local_consensus_state`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrlocal_consensus_state)
- [`bdr.local_node`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrlocal_node)
- [`bdr.local_node_summary`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrlocal_node_summary)
- [`bdr.local_sync_status`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrlocal_sync_status)
- [`bdr.node`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrnode)
- [`bdr.node_catchup_info`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrnode_catchup_info)
- [`bdr.node_catchup_info_details`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrnode_catchup_info_details)
- [`bdr.node_conflict_resolvers`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrnode_conflict_resolvers)
- [`bdr.node_group`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrnode_group)
- [`bdr.node_group_replication_sets`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrnode_group_replication_sets)
- [`bdr.node_group_summary`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrnode_group_summary)
- [`bdr.node_local_info`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrnode_local_info)
- [`bdr.node_log_config`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrnode_log_config)
- [`bdr.node_peer_progress`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrnode_peer_progress)
- [`bdr.node_replication_rates`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrnode_replication_rates)
- [`bdr.node_slots`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrnode_slots)
- [`bdr.node_summary`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrnode_summary)
- [`bdr.queue`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrqueue)
- [`bdr.raft_instances`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrraft_instances)
- [`bdr.replication_set`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrreplication_set)
- [`bdr.replication_set_table`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrreplication_set_table)
- [`bdr.replication_set_ddl`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrreplication_set_ddl)
- [`bdr.replication_sets`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrreplication_sets)
- [`bdr.replication_status`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrreplication_status)
- [`bdr.schema_changes`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrschema_changes)
- [`bdr.sequence_alloc`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrsequence_alloc)
- [`bdr.sequences`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrsequences)
- [`bdr.stat_activity`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrstat_activity)
- [`bdr.stat_commit_scope`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrstat_commit_scope)
- [`bdr.stat_commit_scope_state`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrstat_commit_scope_state)
- [`bdr.stat_raft_followers_state`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrstat_raft_followers_state)
- [`bdr.stat_raft_state`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrstat_raft_state)
- [`bdr.stat_receiver`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrstat_receiver)
- [`bdr.stat_relation`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrstat_relation)
- [`bdr.stat_routing_candidate_state`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrstat_routing_candidate_state)
- [`bdr.stat_routing_state`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrstat_routing_state)
- [`bdr.stat_subscription`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrstat_subscription)
- [`bdr.stat_worker`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrstat_worker)
- [`bdr.stat_writer`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrstat_writer)
- [`bdr.subscription`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrsubscription)
- [`bdr.subscription_summary`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrsubscription_summary)
- [`bdr.tables`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrtables)
- [`bdr.taskmgr_work_queue`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrtaskmgr_work_queue)
- [`bdr.taskmgr_workitem_status`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrtaskmgr_workitem_status)
- [`bdr.taskmgr_local_work_queue`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrtaskmgr_local_work_queue)
- [`bdr.taskmgr_local_workitem_status`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrtaskmgr_local_workitem_status)
- [`bdr.trigger`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrtrigger)
- [`bdr.triggers`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrtriggers)
- [`bdr.workers`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrworkers)
- [`bdr.writers`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrwriters)
- [`bdr.worker_tasks`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrworker_tasks)
- [`bdr.xid_peer_progress`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-visible/#bdrxid_peer_progress)

## [System functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/)

### [Version information functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#version-information-functions)

- [`bdr.bdr_version`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrbdr_version)
- [`bdr.bdr_version_num`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrbdr_version_num)

### [System information functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#system-information-functions)

- [`bdr.get_relation_stats`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrget_relation_stats)
- [`bdr.get_subscription_stats`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrget_subscription_stats)

### [System and progress information parameters](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#system-and-progress-information-parameters)

- [`bdr.local_node_id`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrlocal_node_id)
- [`bdr.last_committed_lsn`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrlast_committed_lsn)
- [`transaction_id`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#transaction_id)
- [`bdr.is_node_connected`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdris_node_connected)
- [`bdr.is_node_ready`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdris_node_ready)

### [Consensus function](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#consensus-function)

- [`bdr.consensus_disable`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrconsensus_disable)
- [`bdr.consensus_enable`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrconsensus_enable)
- [`bdr.consensus_proto_version`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrconsensus_proto_version)
- [`bdr.consensus_snapshot_export`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrconsensus_snapshot_export)
- [`bdr.consensus_snapshot_import`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrconsensus_snapshot_import)
- [`bdr.consensus_snapshot_verify`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrconsensus_snapshot_verify)
- [`bdr.get_consensus_status`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrget_consensus_status)
- [`bdr.get_raft_status`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrget_raft_status)
- [`bdr.raft_leadership_transfer`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrraft_leadership_transfer)

### [Utility functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#utility-functions)

- [`bdr.wait_slot_confirm_lsn`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrwait_slot_confirm_lsn)
- [`bdr.wait_node_confirm_lsn`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrwait_node_confirm_lsn)
- [`bdr.wait_for_apply_queue`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrwait_for_apply_queue)
- [`bdr.get_node_sub_receive_lsn`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrget_node_sub_receive_lsn)
- [`bdr.get_node_sub_apply_lsn`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrget_node_sub_apply_lsn)
- [`bdr.replicate_ddl_command`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrreplicate_ddl_command)
- [`bdr.run_on_all_nodes`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrrun_on_all_nodes)
- [`bdr.run_on_nodes`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrrun_on_nodes)
- [`bdr.run_on_group`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrrun_on_group)
- [`bdr.global_lock_table`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrglobal_lock_table)
- [`bdr.wait_for_xid_progress`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrwait_for_xid_progress)
- [`bdr.local_group_slot_name`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrlocal_group_slot_name)
- [`bdr.node_group_type`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrnode_group_type)
- [`bdr.alter_node_kind`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdralter_node_kind)
- [`bdr.alter_subscription_skip_changes_upto`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdralter_subscription_skip_changes_upto)
- [`bdr.connection_manager_refresh_pools`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrconnection_manager_refresh_pools)

### [Global advisory locks](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#global-advisory-locks)

- [`bdr.global_advisory_lock`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrglobal_advisory_lock)
- [`bdr.global_advisory_unlock`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrglobal_advisory_unlock)

### [Monitoring functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#monitoring-functions)

- [`bdr.monitor_group_versions`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrmonitor_group_versions)
- [`bdr.monitor_group_raft`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrmonitor_group_raft)
- [`bdr.monitor_local_replslots`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrmonitor_local_replslots)
- [`bdr.wal_sender_stats`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrwal_sender_stats)
- [`bdr.get_decoding_worker_stat`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrget_decoding_worker_stat)
- [`bdr.lag_control`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrlag_control)

### [CAMO functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#camo-functions)

- [`bdr.is_camo_partner_connected`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdris_camo_partner_connected)
- [`bdr.is_camo_partner_ready`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdris_camo_partner_ready)
- [`bdr.get_configured_camo_partner`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrget_configured_camo_partner)
- [`bdr.wait_for_camo_partner_queue`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrwait_for_camo_partner_queue)
- [`bdr.camo_transactions_resolved`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrcamo_transactions_resolved)
- [`bdr.logical_transaction_status`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrlogical_transaction_status)

### [Commit Scope functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#commit-scope-functions)

- [`bdr.add_commit_scope`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdradd_commit_scope)
- [`bdr.create_commit_scope`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrcreate_commit_scope)
- [`bdr.alter_commit_scope`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdralter_commit_scope)
- [`bdr.drop_commit_scope`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrdrop_commit_scope)
- [`bdr.remove_commit_scope`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions/#bdrremove_commit_scope)

## [PGD settings](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/)

### [Conflict handling](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#conflict-handling)

- [`bdr.default_conflict_detection`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrdefault_conflict_detection)

### [Global sequence parameters](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#global-sequence-parameters)

- [`bdr.default_sequence_kind`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrdefault_sequence_kind)

### [DDL handling](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#ddl-handling)

- [`bdr.default_replica_identity`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrdefault_replica_identity)
- [`bdr.ddl_replication`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrddl_replication)
- [`bdr.role_replication`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrrole_replication)
- [`bdr.ddl_locking`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrddl_locking)
- [`bdr.truncate_locking`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrtruncate_locking)

### [Global locking](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#global-locking)

- [`bdr.global_lock_max_locks`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrglobal_lock_max_locks)
- [`bdr.global_lock_timeout`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrglobal_lock_timeout)
- [`bdr.global_lock_statement_timeout`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrglobal_lock_statement_timeout)
- [`bdr.global_lock_idle_timeout`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrglobal_lock_idle_timeout)
- [`bdr.lock_table_locking`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrlock_table_locking)
- [`bdr.predictive_checks`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrpredictive_checks)

### [Node management](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#node-management)

- [`bdr.replay_progress_frequency`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrreplay_progress_frequency)

### [Generic replication](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#generic-replication)

- [`bdr.writers_per_subscription`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrwriters_per_subscription)
- [`bdr.max_writers_per_subscription`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrmax_writers_per_subscription)
- [`bdr.xact_replication`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrxact_replication)
- [`bdr.permit_unsafe_commands`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrpermit_unsafe_commands)
- [`bdr.batch_inserts`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrbatch_inserts)
- [`bdr.maximum_clock_skew`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrmaximum_clock_skew)
- [`bdr.maximum_clock_skew_action`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrmaximum_clock_skew_action)
- [`bdr.accept_connections`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdraccept_connections)
- [`bdr.standby_slot_names`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrstandby_slot_names)
- [`bdr.standby_slots_min_confirmed`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrstandby_slots_min_confirmed)
- [`bdr.writer_input_queue_size`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrwriter_input_queue_size)
- [`bdr.writer_output_queue_size`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrwriter_output_queue_size)
- [`bdr.min_worker_backoff_delay`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrmin_worker_backoff_delay)

### [CRDTs](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#crdts)

- [`bdr.crdt_raw_value`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrcrdt_raw_value)

### [Commit scope](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#commit-scope)

- [`bdr.commit_scope`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrcommit_scope)

### [Commit At Most Once](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#commit-at-most-once)

- [`bdr.camo_local_mode_delay`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrcamo_local_mode_delay)
- [`bdr.camo_enable_client_warnings`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrcamo_enable_client_warnings)

### [Transaction streaming](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#transaction-streaming)

- [`bdr.default_streaming_mode`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrdefault_streaming_mode)

### [Lag Control](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#lag-control)

- [`bdr.lag_control_min_conforming_nodes`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrlag_control_min_conforming_nodes)
- [`bdr.lag_control_commit_delay_adjust`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrlag_control_commit_delay_adjust)
- [`bdr.lag_control_sample_interval`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrlag_control_sample_interval)
- [`bdr.lag_control_commit_delay_start`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrlag_control_commit_delay_start)

### [Timestamp-based snapshots](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#timestamp-based-snapshots)

- [`bdr.timestamp_snapshot_keep`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrtimestamp_snapshot_keep)

### [Monitoring and logging](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#monitoring-and-logging)

- [`bdr.debug_level`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrdebug_level)
- [`bdr.trace_level`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrtrace_level)
- [`bdr.track_subscription_apply`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrtrack_subscription_apply)
- [`bdr.track_relation_apply`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrtrack_relation_apply)
- [`bdr.track_apply_lock_timing`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrtrack_apply_lock_timing)

### [Decoding worker](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#decoding-worker)

- [`bdr.enable_wal_decoder`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrenable_wal_decoder)
- [`bdr.receive_lcr`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrreceive_lcr)
- [`bdr.lcr_cleanup_interval`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrlcr_cleanup_interval)

### [Connectivity settings](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#connectivity-settings)

- [`bdr.global_connection_timeout`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrglobal_connection_timeout)
- [`bdr.global_keepalives`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrglobal_keepalives)
- [`bdr.global_keepalives_idle`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrglobal_keepalives_idle)
- [`bdr.global_keepalives_interval`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrglobal_keepalives_interval)
- [`bdr.global_keepalives_count`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrglobal_keepalives_count)
- [`bdr.global_tcp_user_timeout`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrglobal_tcp_user_timeout)

### [Topology settings](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#topology-settings)

- [`bdr.force_full_mesh`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrforce_full_mesh)

### [Internal settings - Raft timeouts](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#internal-settings---raft-timeouts)

- [`bdr.raft_global_election_timeout`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrraft_global_election_timeout)
- [`bdr.raft_group_election_timeout`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrraft_group_election_timeout)
- [`bdr.raft_response_timeout`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrraft_response_timeout)

### [Internal settings - Other Raft values](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#internal-settings---other-raft-values)

- [`bdr.raft_keep_min_entries`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrraft_keep_min_entries)
- [`bdr.raft_log_min_apply_duration`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrraft_log_min_apply_duration)
- [`bdr.raft_log_min_message_duration`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrraft_log_min_message_duration)
- [`bdr.raft_group_max_connections`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrraft_group_max_connections)
- [`bdr.raft_vacuum_interval`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrraft_vacuum_interval)
- [`bdr.raft_vacuum_full_interval`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrraft_vacuum_full_interval)

### [Internal settings - Other values](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#internal-settings---other-values)

- [`bdr.backwards_compatibility`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrbackwards_compatibility)
- [`bdr.track_replication_estimates`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrtrack_replication_estimates)
- [`bdr.lag_tracker_apply_rate_weight`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrlag_tracker_apply_rate_weight)
- [`bdr.enable_auto_sync_reconcile`](https://www.enterprisedb.com/docs/pgd/5.10/reference/pgd-settings/#bdrenable_auto_sync_reconcile)

## [Node management](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes/)

- [List of node states](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes/#list-of-node-states)
- [Node-management commands](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes/#node-management-commands)
  - [`bdr_init_physical`](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes/#bdr_init_physical)
  - [`bdr_config`](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes/#bdr_config)

## [Node management interfaces](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes-management-interfaces/)

- [`bdr.alter_node_group_option`](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes-management-interfaces/#bdralter_node_group_option)
- [`bdr.alter_node_interface`](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes-management-interfaces/#bdralter_node_interface)
- [`bdr.alter_node_option`](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes-management-interfaces/#bdralter_node_option)
- [`bdr.alter_subscription_enable`](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes-management-interfaces/#bdralter_subscription_enable)
- [`bdr.alter_subscription_disable`](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes-management-interfaces/#bdralter_subscription_disable)
- [`bdr.create_node`](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes-management-interfaces/#bdrcreate_node)
- [`bdr.create_node_group`](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes-management-interfaces/#bdrcreate_node_group)
- [`bdr.drop_node_group`](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes-management-interfaces/#bdrdrop_node_group)
- [`bdr.join_node_group`](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes-management-interfaces/#bdrjoin_node_group)
- [`bdr.part_node`](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes-management-interfaces/#bdrpart_node)
- [`bdr.promote_node`](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes-management-interfaces/#bdrpromote_node)
- [`bdr.switch_node_group`](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes-management-interfaces/#bdrswitch_node_group)
- [`bdr.wait_for_join_completion`](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes-management-interfaces/#bdrwait_for_join_completion)
- [`bdr.alter_node_group_config`](https://www.enterprisedb.com/docs/pgd/5.10/reference/nodes-management-interfaces/#bdralter_node_group_config)

## [Routing functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/routing/)

- [`bdr.create_proxy`](https://www.enterprisedb.com/docs/pgd/5.10/reference/routing/#bdrcreate_proxy)
- [`bdr.alter_proxy_option`](https://www.enterprisedb.com/docs/pgd/5.10/reference/routing/#bdralter_proxy_option)
- [`bdr.drop_proxy`](https://www.enterprisedb.com/docs/pgd/5.10/reference/routing/#bdrdrop_proxy)
- [`bdr.routing_leadership_transfer`](https://www.enterprisedb.com/docs/pgd/5.10/reference/routing/#bdrrouting_leadership_transfer)

## [Commit scopes](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/)

- [Commit scope syntax](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#commit-scope-syntax)
  - [commit\_scope\_degrade\_operation](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#commit_scope_degrade_operation)
- [Commit scope targets](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#commit-scope-targets)
  - [ORIGIN\_GROUP](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#origin_group)
- [Commit scope groups](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#commit-scope-groups)
  - [ANY](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#any)
  - [ANY NOT](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#any-not)
  - [MAJORITY](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#majority)
  - [MAJORITY NOT](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#majority-not)
  - [ALL](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#all)
  - [ALL NOT](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#all-not)
- [Confirmation level](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#confirmation-level)
  - [ON received](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#on-received)
  - [ON replicated](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#on-replicated)
  - [ON durable](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#on-durable)
  - [ON visible](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#on-visible)
- [Commit Scope kinds](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#commit-scope-kinds)
- [SYNCHRONOUS COMMIT](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#synchronous-commit)
  - [DEGRADE ON parameters](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#degrade-on-parameters)
  - [commit\_scope\_degrade\_operation](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#commit_scope_degrade_operation)
- [GROUP COMMIT](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#group-commit)
  - [GROUP COMMIT parameters](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#group-commit-parameters)
  - [ABORT ON parameters](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#abort-on-parameters)
  - [DEGRADE ON parameters](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#degrade-on-parameters)
  - [transaction\_tracking settings](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#transaction_tracking-settings)
  - [conflict\_resolution settings](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#conflict_resolution-settings)
  - [commit\_decision settings](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#commit_decision-settings)
  - [commit\_scope\_degrade\_operation settings](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#commit_scope_degrade_operation-settings)
- [CAMO](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#camo)
  - [DEGRADE ON parameters](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#degrade-on-parameters)
- [LAG CONTROL](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#lag-control)
  - [LAG CONTROL parameters](https://www.enterprisedb.com/docs/pgd/5.10/reference/commit-scopes/#lag-control-parameters)

## [Conflicts](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflicts/)

- [Conflict detection](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflicts/#conflict-detection)
  - [List of conflict types](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflicts/#list-of-conflict-types)
- [Conflict resolution](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflicts/#conflict-resolution)
  - [List of conflict resolvers](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflicts/#list-of-conflict-resolvers)
  - [Default conflict resolvers](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflicts/#default-conflict-resolvers)
  - [List of conflict resolutions](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflicts/#list-of-conflict-resolutions)
- [Conflict logging](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflicts/#conflict-logging)

## [Conflict functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflict_functions/)

- [`bdr.alter_table_conflict_detection`](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflict_functions/#bdralter_table_conflict_detection)
- [`bdr.alter_node_set_conflict_resolver`](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflict_functions/#bdralter_node_set_conflict_resolver)
- [`bdr.alter_node_set_log_config`](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflict_functions/#bdralter_node_set_log_config)

## [Replication set management](https://www.enterprisedb.com/docs/pgd/5.10/reference/repsets-management/)

- [`bdr.create_replication_set`](https://www.enterprisedb.com/docs/pgd/5.10/reference/repsets-management/#bdrcreate_replication_set)
- [`bdr.alter_replication_set`](https://www.enterprisedb.com/docs/pgd/5.10/reference/repsets-management/#bdralter_replication_set)
- [`bdr.drop_replication_set`](https://www.enterprisedb.com/docs/pgd/5.10/reference/repsets-management/#bdrdrop_replication_set)
- [`bdr.alter_node_replication_sets`](https://www.enterprisedb.com/docs/pgd/5.10/reference/repsets-management/#bdralter_node_replication_sets)

## [Replication set membership](https://www.enterprisedb.com/docs/pgd/5.10/reference/repsets-membership/)

- [`bdr.replication_set_add_table`](https://www.enterprisedb.com/docs/pgd/5.10/reference/repsets-membership/#bdrreplication_set_add_table)
- [`bdr.replication_set_remove_table`](https://www.enterprisedb.com/docs/pgd/5.10/reference/repsets-membership/#bdrreplication_set_remove_table)

## [DDL replication filtering](https://www.enterprisedb.com/docs/pgd/5.10/reference/repsets-ddl-filtering/)

- [`bdr.replication_set_add_ddl_filter`](https://www.enterprisedb.com/docs/pgd/5.10/reference/repsets-ddl-filtering/#bdrreplication_set_add_ddl_filter)
- [`bdr.replication_set_remove_ddl_filter`](https://www.enterprisedb.com/docs/pgd/5.10/reference/repsets-ddl-filtering/#bdrreplication_set_remove_ddl_filter)

## [Testing and tuning commands](https://www.enterprisedb.com/docs/pgd/5.10/reference/testingandtuning/)

- [`pgd_bench`](https://www.enterprisedb.com/docs/pgd/5.10/reference/testingandtuning/#pgd_bench)

## [Global sequence management interfaces](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/)

### [Sequence functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#sequence-functions)

- [`bdr.alter_sequence_set_kind`](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#bdralter_sequence_set_kind)
- [`bdr.extract_timestamp_from_snowflakeid`](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#bdrextract_timestamp_from_snowflakeid)
- [`bdr.extract_nodeid_from_snowflakeid`](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#bdrextract_nodeid_from_snowflakeid)
- [`bdr.extract_localseqid_from_snowflakeid`](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#bdrextract_localseqid_from_snowflakeid)
- [`bdr.timestamp_to_snowflakeid`](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#bdrtimestamp_to_snowflakeid)
- [`bdr.extract_timestamp_from_timeshard`](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#bdrextract_timestamp_from_timeshard)
- [`bdr.extract_nodeid_from_timeshard`](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#bdrextract_nodeid_from_timeshard)
- [`bdr.extract_localseqid_from_timeshard`](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#bdrextract_localseqid_from_timeshard)
- [`bdr.timestamp_to_timeshard`](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#bdrtimestamp_to_timeshard)
- [`bdr.galloc_chunk_info`](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#bdrgalloc_chunk_info)

### [KSUUID v2 functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#ksuuid-v2-functions)

- [`bdr.gen_ksuuid_v2`](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#bdrgen_ksuuid_v2)
- [`bdr.ksuuid_v2_cmp`](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#bdrksuuid_v2_cmp)
- [`bdr.extract_timestamp_from_ksuuid_v2`](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#bdrextract_timestamp_from_ksuuid_v2)

### [KSUUID v1 functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#ksuuid-v1-functions)

- [`bdr.gen_ksuuid`](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#bdrgen_ksuuid)
- [`bdr.uuid_v1_cmp`](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#bdruuid_v1_cmp)
- [`bdr.extract_timestamp_from_ksuuid`](https://www.enterprisedb.com/docs/pgd/5.10/reference/sequences/#bdrextract_timestamp_from_ksuuid)

## [Autopartition](https://www.enterprisedb.com/docs/pgd/5.10/reference/autopartition/)

- [`bdr.autopartition`](https://www.enterprisedb.com/docs/pgd/5.10/reference/autopartition/#bdrautopartition)
- [`bdr.drop_autopartition`](https://www.enterprisedb.com/docs/pgd/5.10/reference/autopartition/#bdrdrop_autopartition)
- [`bdr.autopartition_wait_for_partitions`](https://www.enterprisedb.com/docs/pgd/5.10/reference/autopartition/#bdrautopartition_wait_for_partitions)
- [`bdr.autopartition_wait_for_partitions_on_all_nodes`](https://www.enterprisedb.com/docs/pgd/5.10/reference/autopartition/#bdrautopartition_wait_for_partitions_on_all_nodes)
- [`bdr.autopartition_find_partition`](https://www.enterprisedb.com/docs/pgd/5.10/reference/autopartition/#bdrautopartition_find_partition)
- [`bdr.autopartition_enable`](https://www.enterprisedb.com/docs/pgd/5.10/reference/autopartition/#bdrautopartition_enable)
- [`bdr.autopartition_disable`](https://www.enterprisedb.com/docs/pgd/5.10/reference/autopartition/#bdrautopartition_disable)
- [Internal functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/autopartition/#internal-functions)
- [`bdr.autopartition_create_partition`](https://www.enterprisedb.com/docs/pgd/5.10/reference/autopartition/#bdrautopartition_create_partition)
- [`bdr.autopartition_drop_partition`](https://www.enterprisedb.com/docs/pgd/5.10/reference/autopartition/#bdrautopartition_drop_partition)

## Stream triggers reference

## [Stream triggers manipulation interfaces](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/interfaces/)

- [`bdr.create_conflict_trigger`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/interfaces/#bdrcreate_conflict_trigger)
- [`bdr.create_transform_trigger`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/interfaces/#bdrcreate_transform_trigger)
- [`bdr.drop_trigger`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/interfaces/#bdrdrop_trigger)

## [Stream triggers row functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowfunctions/)

- [`bdr.trigger_get_row`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowfunctions/#bdrtrigger_get_row)
- [`bdr.trigger_get_committs`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowfunctions/#bdrtrigger_get_committs)
- [`bdr.trigger_get_xid`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowfunctions/#bdrtrigger_get_xid)
- [`bdr.trigger_get_type`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowfunctions/#bdrtrigger_get_type)
- [`bdr.trigger_get_conflict_type`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowfunctions/#bdrtrigger_get_conflict_type)
- [`bdr.trigger_get_origin_node_id`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowfunctions/#bdrtrigger_get_origin_node_id)
- [`bdr.ri_fkey_on_del_trigger`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowfunctions/#bdrri_fkey_on_del_trigger)

## [Stream triggers row variables](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowvariables/)

- [`TG_NAME`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowvariables/#tg_name)
- [`TG_WHEN`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowvariables/#tg_when)
- [`TG_LEVEL`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowvariables/#tg_level)
- [`TG_OP`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowvariables/#tg_op)
- [`TG_RELID`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowvariables/#tg_relid)
- [`TG_TABLE_NAME`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowvariables/#tg_table_name)
- [`TG_TABLE_SCHEMA`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowvariables/#tg_table_schema)
- [`TG_NARGS`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowvariables/#tg_nargs)
- [`TG_ARGV[]`](https://www.enterprisedb.com/docs/pgd/5.10/reference/streamtriggers/rowvariables/#tg_argv)

## [Internal catalogs and views](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/)

- [`bdr.autopartition_partitions`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrautopartition_partitions)
- [`bdr.autopartition_rules`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrautopartition_rules)
- [`bdr.ddl_epoch`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrddl_epoch)
- [`bdr.event_history`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrevent_history)
- [`bdr.event_summary`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrevent_summary)
- [`bdr.local_leader_change`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrlocal_leader_change)
- [`bdr.node_config`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrnode_config)
- [`bdr.node_config_summary`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrnode_config_summary)
- [`bdr.node_group_config`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrnode_group_config)
- [`bdr.node_group_routing_config_summary`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrnode_group_routing_config_summary)
- [`bdr.node_group_routing_info`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrnode_group_routing_info)
- [`bdr.node_group_routing_summary`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrnode_group_routing_summary)
- [`bdr.node_peer_progress_mapping`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrnode_peer_progress_mapping)
- [`bdr.node_routing_config_summary`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrnode_routing_config_summary)
- [`bdr.proxy_config`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrproxy_config)
- [`bdr.proxy_config_summary`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrproxy_config_summary)
- [`bdr.sequence_kind`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrsequence_kind)
- [`bdr.sync_node_requests`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrsync_node_requests)
- [`bdr.sync_node_requests_summary`](https://www.enterprisedb.com/docs/pgd/5.10/reference/catalogs-internal/#bdrsync_node_requests_summary)

## [Internal system functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/)

### [General internal functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#general-internal-functions)

- [`bdr.bdr_get_commit_decisions`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrbdr_get_commit_decisions)
- [`bdr.bdr_track_commit_decision`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrbdr_track_commit_decision)
- [`bdr.consensus_kv_fetch`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrconsensus_kv_fetch)
- [`bdr.consensus_kv_store`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrconsensus_kv_store)
- [`bdr.decode_message_payload`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrdecode_message_payload)
- [`bdr.decode_message_response_payload`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrdecode_message_response_payload)
- [`bdr.difference_fix_origin_create`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrdifference_fix_origin_create)
- [`bdr.difference_fix_session_reset`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrdifference_fix_session_reset)
- [`bdr.difference_fix_session_setup`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrdifference_fix_session_setup)
- [`bdr.difference_fix_xact_set_avoid_conflict`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrdifference_fix_xact_set_avoid_conflict)
- [`bdr.drop_node`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrdrop_node)
- [`bdr.get_global_locks`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrget_global_locks)
- [`bdr.get_node_conflict_resolvers`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrget_node_conflict_resolvers)
- [`bdr.get_slot_flush_timestamp`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrget_slot_flush_timestamp)
- [`bdr.internal_alter_sequence_set_kind`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrinternal_alter_sequence_set_kind)
- [`bdr.internal_replication_set_add_table`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrinternal_replication_set_add_table)
- [`bdr.internal_replication_set_remove_table`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrinternal_replication_set_remove_table)
- [`bdr.internal_submit_join_request`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrinternal_submit_join_request)
- [`bdr.isolation_test_session_is_blocked`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrisolation_test_session_is_blocked)
- [`bdr.local_node_info`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrlocal_node_info)
- [`bdr.msgb_connect`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrmsgb_connect)
- [`bdr.msgb_deliver_message`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrmsgb_deliver_message)
- [`bdr.node_catchup_state_name`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrnode_catchup_state_name)
- [`bdr.node_kind_name`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrnode_kind_name)
- [`bdr.peer_state_name`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrpeer_state_name)
- [`bdr.pg_xact_origin`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrpg_xact_origin)
- [`bdr.request_replay_progress_update`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrrequest_replay_progress_update)
- [`bdr.reset_relation_stats`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrreset_relation_stats)
- [`bdr.reset_subscription_stats`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrreset_subscription_stats)
- [`bdr.resynchronize_table_from_node`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrresynchronize_table_from_node)
- [`bdr.seq_currval`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrseq_currval)
- [`bdr.seq_lastval`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrseq_lastval)
- [`bdr.seq_nextval`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrseq_nextval)
- [`bdr.show_subscription_status`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrshow_subscription_status)
- [`bdr.show_workers`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrshow_workers)
- [`bdr.show_writers`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrshow_writers)
- [`bdr.sync_status_name`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrsync_status_name)

### [Task manager functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#task-manager-functions)

- [`bdr.taskmgr_set_leader`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrtaskmgr_set_leader)
- [`bdr.taskmgr_get_last_completed_workitem`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrtaskmgr_get_last_completed_workitem)
- [`bdr.taskmgr_work_queue_check_status`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrtaskmgr_work_queue_check_status)
- [`bdr.pglogical_proto_version_ranges`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrpglogical_proto_version_ranges)
- [`bdr.get_min_required_replication_slots`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrget_min_required_replication_slots)
- [`bdr.get_min_required_worker_processes`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrget_min_required_worker_processes)
- [`bdr.stat_get_activity`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrstat_get_activity)
- [`bdr.worker_role_id_name`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrworker_role_id_name)
- [`bdr.lag_history`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrlag_history)
- [`bdr.get_raft_instance_by_nodegroup`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrget_raft_instance_by_nodegroup)
- [`bdr.monitor_camo_on_all_nodes`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrmonitor_camo_on_all_nodes)
- [`bdr.monitor_raft_details_on_all_nodes`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrmonitor_raft_details_on_all_nodes)
- [`bdr.monitor_replslots_details_on_all_nodes`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrmonitor_replslots_details_on_all_nodes)
- [`bdr.monitor_subscription_details_on_all_nodes`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrmonitor_subscription_details_on_all_nodes)
- [`bdr.monitor_version_details_on_all_nodes`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrmonitor_version_details_on_all_nodes)
- [`bdr.node_group_member_info`](https://www.enterprisedb.com/docs/pgd/5.10/reference/functions-internal/#bdrnode_group_member_info)

## [Conflict functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflict_functions/)

- [`bdr.alter_table_conflict_detection`](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflict_functions/#bdralter_table_conflict_detection)
- [`bdr.alter_node_set_conflict_resolver`](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflict_functions/#bdralter_node_set_conflict_resolver)
- [`bdr.alter_node_set_log_config`](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflict_functions/#bdralter_node_set_log_config)

## [Column-level conflict functions](https://www.enterprisedb.com/docs/pgd/5.10/reference/clcd/)

- [`bdr.column_timestamps_create`](https://www.enterprisedb.com/docs/pgd/5.10/reference/clcd/#bdrcolumn_timestamps_create)

## [Conflicts](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflicts/)

- [Conflict detection](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflicts/#conflict-detection)
  - [List of conflict types](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflicts/#list-of-conflict-types)
- [Conflict resolution](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflicts/#conflict-resolution)
  - [List of conflict resolvers](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflicts/#list-of-conflict-resolvers)
  - [Default conflict resolvers](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflicts/#default-conflict-resolvers)
  - [List of conflict resolutions](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflicts/#list-of-conflict-resolutions)
- [Conflict logging](https://www.enterprisedb.com/docs/pgd/5.10/reference/conflicts/#conflict-logging)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
