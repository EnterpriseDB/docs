---
title: Parameter Categories
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc_category-list/
lastModified: 2026-09-25T10:59:55Z
---

# Parameter Categories

<a id="guc-cat-list"></a><a id="kh155019"></a>

Configuration parameters affect categories of server behaviors, such as resource consumption, query tuning, and authentication. The following topics describe WarehousePG configuration parameter categories.

<a id="ul_blz_1kk_wy"></a>

- [Connection and Authentication Parameters](#topic12)
- [System Resource Consumption Parameters](#topic15)
- [GPORCA Parameters](#topic57)
- [Query Tuning Parameters](#topic21)
- [Error Reporting and Logging Parameters](#topic29)
- [System Monitoring Parameters](#topic33)
- [Runtime Statistics Collection Parameters](#topic37)
- [Automatic Statistics Collection Parameters](#topic38)
- [Client Connection Default Parameters](#topic39)
- [Lock Management Parameters](#topic43)
- [Resource Management Parameters (Resource Queues)](#topic44)
- [Resource Management Parameters (Resource Groups)](#topic444)
- [External Table Parameters](#topic45)
- [Database Table Parameters](#topic46)
- [Past Version Compatibility Parameters](#topic48)
- [WarehousePG Array Configuration Parameters](#topic49)
- [WarehousePG Mirroring Parameters for Coordinator and Segments](#topic55)
- [WarehousePG PL/Java Parameters](#topic56)

<a id="topic12">

</a>

<a id="topic12"></a><a id="kh155037"></a>

## Connection and Authentication Parameters

These parameters control how clients connect and authenticate to WarehousePG.

<a id="topic13">

</a>

### Connection Parameters

- [client\_connection\_check\_interval](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#client_connection_check_interval)
- [gp\_connection\_send\_timeout](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_connection_send_timeout)
- [gp\_dispatch\_keepalives\_count](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_dispatch_keepalives_count)
- [gp\_dispatch\_keepalives\_idle](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_dispatch_keepalives_idle)
- [gp\_dispatch\_keepalives\_interval](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_dispatch_keepalives_interval)
- [gp\_vmem\_idle\_resource\_timeout](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_vmem_idle_resource_timeout)
- [listen\_addresses](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#listen_addresses)
- [max\_connections](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#max_connections)
- [max\_prepared\_transactions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#max_prepared_transactions)
- [superuser\_reserved\_connections](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#superuser_reserved_connections)
- [tcp\_keepalives\_count](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#tcp_keepalives_count)
- [tcp\_keepalives\_idle](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#tcp_keepalives_idle)
- [tcp\_keepalives\_interval](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#tcp_keepalives_interval)
- [unix\_socket\_directories](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#unix_socket_directories)
- [unix\_socket\_group](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#unix_socket_group)
- [unix\_socket\_permissions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#unix_socket_permissions)

<a id="topic14">

</a>

<a id="topic14"></a>

### Security and Authentication Parameters

- [authentication\_timeout](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#authentication_timeout)
- [db\_user\_namespace](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#db_user_namespace)
- [krb\_caseins\_users](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#krb_caseins_users)
- [krb\_server\_keyfile](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#krb_server_keyfile)
- [password\_encryption](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#password_encryption)
- [password\_hash\_algorithm](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#password_hash_algorithm)
- [ssl](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#ssl)
- [ssl\_ciphers](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#ssl_ciphers)

<a id="topic15">

</a>

<a id="topic15"></a><a id="kh155038"></a>

## System Resource Consumption Parameters

These parameters set the limits for system resources consumed by WarehousePG.

<a id="topic16">

</a>

### Memory Consumption Parameters

These parameters control system memory usage.

- [gp\_vmem\_idle\_resource\_timeout](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_vmem_idle_resource_timeout)
- [gp\_resource\_group\_memory\_limit](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_resource_group_memory_limit) (resource group-based resource management)
- [gp\_vmem\_protect\_limit](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_vmem_protect_limit) (resource queue-based resource management)
- [gp\_vmem\_protect\_segworker\_cache\_limit](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_vmem_protect_segworker_cache_limit)
- [gp\_workfile\_limit\_files\_per\_query](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_workfile_limit_files_per_query)
- [gp\_workfile\_limit\_per\_query](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_workfile_limit_per_query)
- [gp\_workfile\_limit\_per\_segment](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_workfile_limit_per_segment)
- [maintenance\_work\_mem](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#maintenance_work_mem)
- [max\_stack\_depth](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#max_stack_depth)
- [shared\_buffers](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#shared_buffers)
- [temp\_buffers](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#temp_buffers)
- [work\_mem](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#work_mem)

<a id="topic18">

</a>

<a id="topic18"></a>

### OS Resource Parameters

- [max\_files\_per\_process](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#max_files_per_process)
- [shared\_preload\_libraries](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#shared_preload_libraries)

<a id="topic19">

</a>

<a id="topic19"></a>

### Cost-Based Vacuum Delay Parameters

> **Caution** Do not use cost-based vacuum delay because it runs asynchronously among the segment instances. The vacuum cost limit and delay is invoked at the segment level without taking into account the state of the entire WarehousePG array

You can configure the execution cost of `VACUUM` and `ANALYZE` commands to reduce the I/O impact on concurrent database activity. When the accumulated cost of I/O operations reaches the limit, the process performing the operation sleeps for a while, Then resets the counter and continues execution

- [vacuum\_cost\_delay](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#vacuum_cost_delay)
- [vacuum\_cost\_limit](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#vacuum_cost_limit)
- [vacuum\_cost\_page\_dirty](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#vacuum_cost_page_dirty)
- [vacuum\_cost\_page\_hit](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#vacuum_cost_page_hit)
- [vacuum\_cost\_page\_miss](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#vacuum_cost_page_miss)

<a id="topic20">

</a>

<a id="topic20"></a>

### Transaction ID Management Parameters

- [xid\_stop\_limit](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#xid_stop_limit)
- [xid\_warn\_limit](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#xid_warn_limit)

<a id="topic20other">

</a>

### Other Parameters

- [gp\_max\_parallel\_cursors](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_max_parallel_cursors)

<a id="topic57">

</a>

<a id="topic57"></a>

## GPORCA Parameters

These parameters control the usage of GPORCA by WarehousePG. For information about GPORCA, see [About GPORCA](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/query/query-piv-optimizer/) in the _WarehousePG Administrator Guide_.

- [gp\_enable\_relsize\_collection](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_relsize_collection)
- [optimizer](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer)
- [optimizer\_analyze\_root\_partition](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_analyze_root_partition)
- [optimizer\_array\_expansion\_threshold](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_array_expansion_threshold)
- [optimizer\_control](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_control)
- [optimizer\_cost\_model](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_cost_model)
- [optimizer\_cte\_inlining\_bound](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_cte_inlining_bound)
- [optimizer\_dpe\_stats](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_dpe_stats)
- [optimizer\_discard\_redistribute\_hashjoin](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_discard_redistribute_hashjoin)
- [optimizer\_enable\_associativity](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_enable_associativity)
- [optimizer\_enable\_dml](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_enable_dml)
- [optimizer\_enable\_indexonlyscan](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_enable_indexonlyscan)
- [optimizer\_enable\_master\_only\_queries](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_enable_master_only_queries)
- [optimizer\_enable\_multiple\_distinct\_aggs](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_enable_multiple_distinct_aggs)
- [optimizer\_enable\_orderedagg](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_enable_orderedagg)
- [optimizer\_enable\_replicated\_table](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_enable_replicated_table)
- [optimizer\_force\_agg\_skew\_avoidance](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_force_agg_skew_avoidance)
- [optimizer\_force\_comprehensive\_join\_implementation](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_force_comprehensive_join_implementation)
- [optimizer\_force\_multistage\_agg](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_force_multistage_agg)
- [optimizer\_force\_three\_stage\_scalar\_dqa](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_force_three_stage_scalar_dqa)
- [optimizer\_join\_arity\_for\_associativity\_commutativity](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_join_arity_for_associativity_commutativity)
- [optimizer\_join\_order](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_join_order)
- [optimizer\_join\_order\_threshold](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_join_order_threshold)
- [optimizer\_mdcache\_size](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_mdcache_size)
- [optimizer\_metadata\_caching](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_metadata_caching)
- [optimizer\_parallel\_union](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_parallel_union)
- [optimizer\_penalize\_broadcast\_threshold](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_penalize_broadcast_threshold)
- [optimizer\_penalize\_skew](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_penalize_skew)
- [optimizer\_print\_missing\_stats](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_print_missing_stats)
- [optimizer\_print\_optimization\_stats](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_print_optimization_stats)
- [optimizer\_skew\_factor](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_skew_factor)
- [optimizer\_sort\_factor](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_sort_factor)
- [optimizer\_use\_gpdb\_allocators](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_use_gpdb_allocators)
- [optimizer\_xform\_bind\_threshold](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_xform_bind_threshold)

<a id="topic21">

</a>

<a id="topic21"></a><a id="kh183779"></a>

## Query Tuning Parameters

These parameters control aspects of SQL query processing such as query operators and operator settings and statistics sampling.

<a id="topic22">

</a>

### Postgres Planner Control Parameters

The following parameters control the types of plan operations the Postgres Planner can use. Enable or deactivate plan operations to force the Postgres Planner to choose a different plan. This is useful for testing and comparing query performance using different plan types.

- [enable\_bitmapscan](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#enable_bitmapscan)
- [enable\_groupagg](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#enable_groupagg)
- [enable\_hashagg](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#enable_hashagg)
- [enable\_hashjoin](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#enable_hashjoin)
- [enable\_indexscan](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#enable_indexscan)
- [enable\_mergejoin](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#enable_mergejoin)
- [enable\_nestloop](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#enable_nestloop)
- [enable\_seqscan](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#enable_seqscan)
- [enable\_sort](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#enable_sort)
- [enable\_tidscan](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#enable_tidscan)
- [gp\_eager\_two\_phase\_agg](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_eager_two_phase_agg)
- [gp\_enable\_agg\_distinct](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_agg_distinct)
- [gp\_enable\_agg\_distinct\_pruning](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_agg_distinct_pruning)
- [gp\_enable\_direct\_dispatch](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_direct_dispatch)
- [gp\_enable\_fast\_sri](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_fast_sri)
- [gp\_enable\_groupext\_distinct\_gather](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_groupext_distinct_gather)
- [gp\_enable\_groupext\_distinct\_pruning](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_groupext_distinct_pruning)
- [gp\_enable\_multiphase\_agg](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_multiphase_agg)
- [gp\_enable\_predicate\_propagation](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_predicate_propagation)
- [gp\_enable\_preunique](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_preunique)
- [gp\_enable\_relsize\_collection](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_relsize_collection)
- [gp\_enable\_sort\_distinct](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_sort_distinct)
- [gp\_enable\_sort\_limit](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_sort_limit)
- [gp\_keep\_partition\_children\_locks](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_keep_partition_children_locks)

<a id="topic23">

</a>

<a id="topic23"></a>

### Postgres Planner Costing Parameters

> **Caution** Do not adjust these query costing parameters. They are tuned to reflect WarehousePG hardware configurations and typical workloads. All of these parameters are related. Changing one without changing the others can have adverse affects on performance.

- [cpu\_index\_tuple\_cost](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#cpu_index_tuple_cost)
- [cpu\_operator\_cost](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#cpu_operator_cost)
- [cpu\_tuple\_cost](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#cpu_tuple_cost)
- [cursor\_tuple\_fraction](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#cursor_tuple_fraction)
- [effective\_cache\_size](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#effective_cache_size)
- [gp\_motion\_cost\_per\_row](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_motion_cost_per_row)
- [gp\_segments\_for\_planner](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_segments_for_planner)
- [random\_page\_cost](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#random_page_cost)
- [seq\_page\_cost](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#seq_page_cost)

<a id="topic24">

</a>

<a id="topic24"></a>

### Database Statistics Sampling Parameters

These parameters adjust the amount of data sampled by an `ANALYZE` operation. Adjusting these parameters affects statistics collection system-wide. You can configure statistics collection on particular tables and columns by using the `ALTER TABLE SET STATISTICS` clause.

- [default\_statistics\_target](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#default_statistics_target)

<a id="topic25">

</a>

<a id="topic25"></a>

### Sort Operator Configuration Parameters

- [gp\_enable\_sort\_distinct](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_sort_distinct)
- [gp\_enable\_sort\_limit](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_sort_limit)

<a id="topic26">

</a>

<a id="topic26"></a>

### Aggregate Operator Configuration Parameters

- [gp\_enable\_agg\_distinct](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_agg_distinct)
- [gp\_enable\_agg\_distinct\_pruning](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_agg_distinct_pruning)
- [gp\_enable\_multiphase\_agg](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_multiphase_agg)
- [gp\_enable\_preunique](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_preunique)
- [gp\_enable\_groupext\_distinct\_gather](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_groupext_distinct_gather)
- [gp\_enable\_groupext\_distinct\_pruning](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_groupext_distinct_pruning)
- [gp\_workfile\_compression](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_workfile_compression)

<a id="topic27">

</a>

<a id="topic27"></a>

### Join Operator Configuration Parameters

- [join\_collapse\_limit](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#join_collapse_limit)
- [gp\_adjust\_selectivity\_for\_outerjoins](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_adjust_selectivity_for_outerjoins)
- [gp\_hashjoin\_tuples\_per\_bucket](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_hashjoin_tuples_per_bucket)
- [gp\_statistics\_use\_fkeys](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_statistics_use_fkeys)
- [gp\_workfile\_compression](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_workfile_compression)

<a id="topic28">

</a>

<a id="topic28"></a>

### Other Postgres Planner Configuration Parameters

- [from\_collapse\_limit](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#from_collapse_limit)
- [gp\_enable\_predicate\_propagation](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_predicate_propagation)
- [gp\_max\_plan\_size](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_max_plan_size)
- [gp\_statistics\_pullup\_from\_child\_partition](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_statistics_pullup_from_child_partition)

<a id="topic_zd5_p32_mdb">

</a>

<a id="topic_zd5_p32_mdb"></a>

### Query Plan Execution

Control the query plan execution.

- [gp\_max\_slices](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_max_slices)
- [plan\_cache\_mode](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#plan_cache_mode)

<a id="topic29">

</a>

<a id="topic29"></a><a id="kh155046"></a>

## Error Reporting and Logging Parameters

These configuration parameters control WarehousePG logging.

<a id="topic30">

</a>

### Log Rotation

- [log\_rotation\_age](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_rotation_age)
- [log\_rotation\_size](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_rotation_size)
- [log\_truncate\_on\_rotation](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_truncate_on_rotation)

<a id="topic31">

</a>

<a id="topic31"></a>

### When to Log

- [client\_min\_messages](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#client_min_messages)
- [gp\_interconnect\_debug\_retry\_interval](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_interconnect_debug_retry_interval)
- [log\_error\_verbosity](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_error_verbosity)
- [log\_file\_mode](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_file_mode)
- [log\_min\_duration\_statement](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_min_duration_statement)
- [log\_min\_error\_statement](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_min_error_statement)
- [log\_min\_messages](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_min_messages)
- [optimizer\_minidump](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#optimizer_minidump)

<a id="topic32">

</a>

<a id="topic32"></a>

### What to Log

- [debug\_pretty\_print](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#debug_pretty_print)
- [debug\_print\_parse](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#debug_print_parse)
- [debug\_print\_plan](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#debug_print_plan)
- [debug\_print\_prelim\_plan](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#debug_print_prelim_plan)
- [debug\_print\_rewritten](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#debug_print_rewritten)
- [debug\_print\_slice\_table](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#debug_print_slice_table)
- [gp\_log\_format](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_log_format)
- [gp\_log\_interconnect](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_log_interconnect)
- [gp\_log\_resqueue\_priority\_sleep\_time](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_log_resqueue_priority_sleep_time)
- [log\_autostats](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_autostats)
- [log\_connections](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_connections)
- [log\_disconnections](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_disconnections)
- [log\_dispatch\_stats](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_dispatch_stats)
- [log\_duration](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_duration)
- [log\_executor\_stats](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_executor_stats)
- [log\_hostname](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_hostname)
- [gp\_log\_endpoints](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_log_endpoints)
- [gp\_log\_interconnect](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_log_interconnect)
- [gp\_print\_create\_gang\_time](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_print_create_gang_time)
- [log\_parser\_stats](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_parser_stats)
- [log\_planner\_stats](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_planner_stats)
- [log\_statement](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_statement)
- [log\_statement\_stats](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_statement_stats)
- [log\_timezone](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_timezone)
- [gp\_debug\_linger](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_debug_linger)
- [gp\_reraise\_signal](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_reraise_signal)

<a id="topic33">

</a>

<a id="topic33"></a><a id="kh171299"></a>

## System Monitoring Parameters

These configuration parameters control WarehousePG data collection and notifications related to database monitoring.

<a id="topic36">

</a>

### WarehousePG Performance Database

The following parameters configure the data collection agents that populate the `gpperfmon` database.

- [gp\_enable\_gpperfmon](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_gpperfmon)
- [gp\_gpperfmon\_send\_interval](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_gpperfmon_send_interval)
- [gpperfmon\_log\_alert\_level](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gpperfmon_log_alert_level)
- [gpperfmon\_port](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gpperfmon_port)

<a id="topic37">

</a>

<a id="topic37"></a><a id="kh171364"></a>

## Runtime Statistics Collection Parameters

These parameters control the server statistics collection feature. When statistics collection is enabled, you can access the statistics data using the _pg\_stat_ family of system catalog views.

- [stats\_queue\_level](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#stats_queue_level)
- [track\_activities](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#track_activities)
- [track\_counts](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#track_counts)
- [update\_process\_title](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#update_process_title)

<a id="topic38">

</a>

<a id="topic38"></a><a id="kh155054"></a>

## Automatic Statistics Collection Parameters

When automatic statistics collection is enabled, you can run `ANALYZE` automatically in the same transaction as an `INSERT`, `UPDATE`, `DELETE`, `COPY` or `CREATE TABLE...AS SELECT` statement when a certain threshold of rows is affected (`on_change`), or when a newly generated table has no statistics (`on_no_stats`). To enable this feature, set the following server configuration parameters in your WarehousePG coordinator `postgresql.conf` file and restart WarehousePG:

- [gp\_autostats\_allow\_nonowner](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_autostats_allow_nonowner)
- [gp\_autostats\_mode](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_autostats_mode)
- [gp\_autostats\_mode\_in\_functions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_autostats_mode_in_functions)
- [gp\_autostats\_on\_change\_threshold](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_autostats_on_change_threshold)
- [log\_autostats](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#log_autostats)

> **Caution** Depending on the specific nature of your database operations, automatic statistics collection can have a negative performance impact. Carefully evaluate whether the default setting of `on_no_stats` is appropriate for your system.

<a id="topic39">

</a>

<a id="topic39"></a><a id="kh181507"></a>

## Client Connection Default Parameters

These configuration parameters set defaults that are used for client connections.

<a id="topic40">

</a>

### Statement Behavior Parameters

- [check\_function\_bodies](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#check_function_bodies)
- [default\_tablespace](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#default_tablespace)
- [default\_transaction\_deferrable](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#default_transaction_deferrable)
- [default\_transaction\_isolation](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#default_transaction_isolation)
- [default\_transaction\_read\_only](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#default_transaction_read_only)
- [restrict\_nonsystem\_relation\_kind](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#restrict_nonsystem_relation_kind)
- [search\_path](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#search_path)
- [statement\_timeout](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#statement_timeout)
- [temp\_tablespaces](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#temp_tablespaces)
- [vacuum\_freeze\_min\_age](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#vacuum_freeze_min_age)

<a id="topic41">

</a>

<a id="topic41"></a>

### Locale and Formatting Parameters

- [client\_encoding](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#client_encoding)
- [DateStyle](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#datestyle)
- [extra\_float\_digits](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#extra_float_digits)
- [IntervalStyle](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#intervalstyle)
- [lc\_collate](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#lc_collate)
- [lc\_ctype](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#lc_ctype)
- [lc\_messages](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#lc_messages)
- [lc\_monetary](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#lc_monetary)
- [lc\_numeric](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#lc_numeric)
- [lc\_time](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#lc_time)
- [TimeZone](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#timezone)

<a id="topic42">

</a>

<a id="topic42"></a>

### Other Client Default Parameters

- [dynamic\_library\_path](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#dynamic_library_path)
- [explain\_pretty\_print](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#explain_pretty_print)
- [local\_preload\_libraries](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#local_preload_libraries)

<a id="topic43">

</a>

<a id="topic43"></a><a id="kh163788"></a>

## Lock Management Parameters

These configuration parameters set limits for locks and deadlocks.

- [deadlock\_timeout](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#deadlock_timeout)
- \[gp\_enable global\_deadlock\_detector]\(guc-list.html#gp\_enable global\_deadlock\_detector)
- [gp\_global\_deadlock\_detector\_period](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_global_deadlock_detector_period)
- [lock\_timeout](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#lock_timeout)
- [max\_locks\_per\_transaction](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#max_locks_per_transaction)

<a id="topic44">

</a>

<a id="topic44"></a><a id="kh155069"></a>

## Resource Management Parameters (Resource Queues)

The following configuration parameters configure the WarehousePG resource management feature (resource queues), query prioritization, memory utilization and concurrency control.

- [gp\_log\_resqueue\_priority\_sleep\_time](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_log_resqueue_priority_sleep_time)
- [gp\_resqueue\_memory\_policy](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_resqueue_memory_policy)
- [gp\_resqueue\_priority](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_resqueue_priority)
- [gp\_resqueue\_priority\_cpucores\_per\_segment](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_resqueue_priority_cpucores_per_segment)
- [gp\_resqueue\_priority\_sweeper\_interval](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_resqueue_priority_sweeper_interval)
- [gp\_vmem\_idle\_resource\_timeout](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_vmem_idle_resource_timeout)
- [gp\_vmem\_protect\_limit](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_vmem_protect_limit)
- [gp\_vmem\_protect\_segworker\_cache\_limit](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_vmem_protect_segworker_cache_limit)
- [max\_resource\_queues](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#max_resource_queues)
- [max\_resource\_portals\_per\_transaction](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#max_resource_portals_per_transaction)
- [max\_statement\_mem](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#max_statement_mem)
- [resource\_cleanup\_gangs\_on\_wait](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#resource_cleanup_gangs_on_wait)
- [resource\_select\_only](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#resource_select_only)
- [runaway\_detector\_activation\_percent](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#runaway_detector_activation_percent)
- [statement\_mem](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#statement_mem)
- [stats\_queue\_level](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#stats_queue_level)
- [vmem\_process\_interrupt](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#vmem_process_interrupt)

<a id="topic444">

</a>

<a id="topic444"></a><a id="kh1550694"></a>

## Resource Management Parameters (Resource Groups)

The following parameters configure the WarehousePG resource group workload management feature.

- [gp\_count\_host\_segments\_using\_address](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_count_host_segments_using_address)
- [gp\_resgroup\_memory\_policy](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_resgroup_memory_policy)
- [gp\_resource\_group\_bypass](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_resource_group_bypass)
- [gp\_resource\_group\_bypass\_catalog\_query](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_resource_group_bypass_catalog_query)
- [gp\_resource\_group\_cpu\_ceiling\_enforcement](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_resource_group_cpu_ceiling_enforcement)
- [gp\_resource\_group\_cpu\_limit](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_resource_group_cpu_limit)
- [gp\_resource\_group\_cpu\_priority](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_resource_group_cpu_priority)
- [gp\_resource\_group\_enable\_recalculate\_query\_mem](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_resource_group_enable_recalculate_query_mem)
- [gp\_resource\_group\_memory\_limit](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_resource_group_memory_limit)
- [gp\_resource\_group\_queuing\_timeout](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_resource_group_queuing_timeout)
- [gp\_resource\_manager](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_resource_manager)
- [gp\_vmem\_idle\_resource\_timeout](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_vmem_idle_resource_timeout)
- [gp\_vmem\_protect\_segworker\_cache\_limit](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_vmem_protect_segworker_cache_limit)
- [max\_statement\_mem](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#max_statement_mem)
- [memory\_spill\_ratio](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#memory_spill_ratio)
- [runaway\_detector\_activation\_percent](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#runaway_detector_activation_percent)
- [statement\_mem](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#statement_mem)
- [vmem\_process\_interrupt](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#vmem_process_interrupt)

<a id="topic45">

</a>

<a id="topic45"></a><a id="kh155070"></a>

## External Table Parameters

The following parameters configure the external tables feature of WarehousePG.

- [gp\_external\_enable\_exec](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_external_enable_exec)
- [gp\_external\_enable\_filter\_pushdown](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_external_enable_filter_pushdown)
- [gp\_external\_max\_segs](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_external_max_segs)
- [gp\_initial\_bad\_row\_limit](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_initial_bad_row_limit)
- [gp\_reject\_percent\_threshold](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_reject_percent_threshold)
- [gpfdist\_retry\_timeout](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gpfdist_retry_timeout)
- [readable\_external\_table\_timeout](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#readable_external_table_timeout)
- [writable\_external\_table\_bufsize](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#writable_external_table_bufsize)
- [verify\_gpfdists\_cert](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#verify_gpfdists_cert)

<a id="topic46">

</a>

<a id="topic46"></a><a id="kh155071"></a>

## Database Table Parameters

The following parameter configures default option settings for WarehousePG tables.

- [gp\_create\_table\_random\_default\_distribution](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_create_table_random_default_distribution)
- [gp\_default\_storage\_options](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_default_storage_options)
- [gp\_enable\_exchange\_default\_partition](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_exchange_default_partition)
- [gp\_enable\_segment\_copy\_checking](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_segment_copy_checking)
- [gp\_use\_legacy\_hashops](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_use_legacy_hashops)

<a id="topic_hfd_1tl_zp">

</a>

<a id="topic_hfd_1tl_zp"></a>

### Append-Optimized Table Parameters

The following parameters configure the append-optimized tables feature of WarehousePG.

- [max\_appendonly\_tables](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#max_appendonly_tables)
- [gp\_add\_column\_inherits\_table\_setting](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/) \[gp\_appendonly\_compaction]\(guc-list.html#gp\_add\_column\_inherits\_table\_setting]\(guc-list.html) \[gp\_appendonly\_compaction)
- [gp\_appendonly\_compaction\_threshold](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_appendonly_compaction_threshold)
- [validate\_previous\_free\_tid](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#validate_previous_free_tid)

<a id="topic48">

</a>

<a id="topic48"></a><a id="kh178569"></a>

## Past Version Compatibility Parameters

The following parameters provide compatibility with older PostgreSQL and WarehousePG versions. You do not need to change these parameters in WarehousePG.

<a id="topic_ax3_r1v_bdb">

</a>

### PostgreSQL

- [array\_nulls](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#array_nulls)
- [backslash\_quote](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#backslash_quote)
- [escape\_string\_warning](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#escape_string_warning)
- [quote\_all\_identifiers](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#quote_all_identifiers)
- [standard\_conforming\_strings](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#standard_conforming_strings)
- [transform\_null\_equals](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#transform_null_equals)

<a id="topic_jq1_n1v_bdb">

</a>

<a id="topic_jq1_n1v_bdb"></a>

### WarehousePG

- [enable\_implicit\_timeformat\_YYYYMMDDHH24MISS](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#enable_implicit_timeformat_yyyymmddhh24miss)
- [gp\_ignore\_error\_table](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_ignore_error_table)

<a id="topic49">

</a>

<a id="topic49"></a><a id="kh182770"></a>

## WarehousePG Array Configuration Parameters

The parameters in this topic control the configuration of the WarehousePG array and its components: segments, coordinator, distributed transaction manager, coordinator mirror, and interconnect.

<a id="topic50">

</a>

### Interconnect Configuration Parameters

- [gp\_interconnect\_address\_type](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_interconnect_address_type)
- [gp\_interconnect\_cursor\_ic\_table\_size](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_interconnect_cursor_ic_table_size)
- [gp\_interconnect\_fc\_method](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_interconnect_fc_method)
- [gp\_interconnect\_proxy\_addresses](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_interconnect_proxy_addresses)
- [gp\_interconnect\_queue\_depth](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_interconnect_queue_depth)
- [gp\_interconnect\_setup\_timeout](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_interconnect_setup_timeout)
- [gp\_interconnect\_snd\_queue\_depth](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_interconnect_snd_queue_depth)
- [gp\_interconnect\_transmit\_timeout](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_interconnect_transmit_timeout)
- [gp\_interconnect\_type](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_interconnect_type)
- [gp\_max\_packet\_size](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_max_packet_size)

> **Note** WarehousePG supports only the UDPIFC (default) and TCP interconnect types.

<a id="topic51">

</a>

<a id="topic51"></a>

### Dispatch Configuration Parameters

- [gp\_cached\_segworkers\_threshold](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_cached_segworkers_threshold)
- [gp\_enable\_direct\_dispatch](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_enable_direct_dispatch)
- [gp\_segment\_connect\_timeout](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_segment_connect_timeout)
- [gp\_set\_proc\_affinity](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_set_proc_affinity)

<a id="topic52">

</a>

<a id="topic52"></a>

### Fault Operation Parameters

- [gp\_set\_read\_only](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_set_read_only)
- [gp\_fts\_probe\_interval](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_fts_probe_interval)
- [gp\_fts\_probe\_retries](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_fts_probe_retries)
- [gp\_fts\_probe\_timeout](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_fts_probe_timeout)
- [gp\_fts\_replication\_attempt\_count](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_fts_replication_attempt_count)
- [gp\_log\_fts](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_log_fts)

<a id="topic53">

</a>

<a id="topic53"></a>

### Distributed Transaction Management Parameters

- [gp\_max\_local\_distributed\_cache](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_max_local_distributed_cache)
- [dtx\_phase2\_retry\_count](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#dtx_phase2_retry_count)

<a id="topic54">

</a>

<a id="topic54"></a>

### Read-Only Parameters

- [gp\_command\_count](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_command_count)
- [gp\_content](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_content)
- [gp\_dbid](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_dbid)
- [gp\_retrieve\_conn](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_retrieve_conn)
- [gp\_session\_id](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_session_id)
- [gp\_session\_role](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_session_role)
- [gp\_server\_version](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_server_version)
- [gp\_server\_version\_num](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_server_version_num)

<a id="topic55">

</a>

<a id="topic55"></a><a id="kh184289"></a>

## WarehousePG Mirroring Parameters for Coordinator and Segments

These parameters control the configuration of the replication between WarehousePG primary coordinator and standby coordinator.

- [max\_slot\_wal\_keep\_size](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#max_slot_wal_keep_size)
- [repl\_catchup\_within\_range](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#repl_catchup_within_range)
- [replication\_timeout](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#replication_timeout)
- [wait\_for\_replication\_threshold](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#wait_for_replication_threshold)
- [wal\_keep\_segments](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#wal_keep_segments)
- [wal\_receiver\_status\_interval](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#wal_receiver_status_interval)
- [wal\_sender\_archiving\_status\_interval](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#wal_sender_archiving_status_interval)

<a id="topic56">

</a>

<a id="topic56"></a>

## WarehousePG PL/Java Parameters

The parameters in this topic control the configuration of the WarehousePG PL/Java language.

- [pljava\_classpath](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#pljava_classpath)
- [pljava\_classpath\_insecure](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#pljava_classpath_insecure)
- [pljava\_statement\_cache\_size](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#pljava_statement_cache_size)
- [pljava\_release\_lingering\_savepoints](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#pljava_release_lingering_savepoints)
- [pljava\_vmoptions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#pljava_vmoptions)

<a id="topic_t3n_qml_rz">

</a>

<a id="topic_t3n_qml_rz"></a>

## XML Data Parameters

The parameters in this topic control the configuration of the WarehousePG XML data type.

- [xmlbinary](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#xmlbinary)
- [xmloption](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#xmloption)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
