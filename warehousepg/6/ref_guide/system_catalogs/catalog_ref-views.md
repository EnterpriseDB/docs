---
title: System Views
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/catalog_ref-views/
lastModified: 2026-08-11T09:07:15Z
---

# System Views

<a id="topic1"></a>

WarehousePG provides the following system views not available in PostgreSQL.

<a id="ul_hsv_3bd_xp"></a><a id="ul_c5v_3bd_xp"></a>

- [gp\_distributed\_log](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_distributed_log/)
- [gp\_distributed\_xacts](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_distributed_xacts/)
- [gp\_endpoints](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_endpoints/)
- [gp\_pgdatabase](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_pgdatabase/)
- [gp\_resgroup\_config](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_resgroup_config/)
- [gp\_resgroup\_status](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_resgroup_status/)
- [gp\_resgroup\_status\_per\_host](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_resgroup_status_per_host/)
- [gp\_resgroup\_status\_per\_segment](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_resgroup_status_per_segment/)
- [gp\_resqueue\_status](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_resqueue_status/)
- [gp\_segment\_endpoints](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_segment_endpoints/)
- [gp\_session\_endpoints](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_session_endpoints/)
- [gp\_suboverflowed\_backend](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_suboverflowed_backend/)
- [gp\_stat\_archiver](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_stat_archiver/)
- [gp\_transaction\_log](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_transaction_log/)
- [gpexpand.expansion\_progress](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gpexpand_expansion_progress/)
- [pg\_cursors](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_cursors/)
- [pg\_matviews](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_matviews/)
- [pg\_max\_external\_files](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_max_external_files/)
- [pg\_partition\_columns](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_partition_columns/)
- [pg\_partition\_templates](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_partition_templates/)
- [pg\_partitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_partitions/)
- [pg\_resqueue\_attributes](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_resqueue_attributes/)
- pg\_resqueue\_status (Deprecated. Use [gp\_toolkit.gp\_resqueue\_status](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/gp_toolkit/).)
- [pg\_stat\_activity](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_stat_activity/)
- [pg\_stat\_all\_indexes](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_stat_indexes/)
- [pg\_stat\_all\_tables](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_stat_tables/)
- [pg\_stat\_replication](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_stat_replication/)
- [pg\_stat\_resqueues](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_stats_resqueue/)
- session\_level\_memory\_consumption (See [Monitoring a WarehousePG cluster](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/monitor/#topic_slt_ddv_1q).)

For more information about the standard system views supported in PostgreSQL and WarehousePG, see the following sections of the PostgreSQL documentation:

- [System Views](https://www.postgresql.org/docs/9.4/views-overview.html)
- [Statistics Collector Views](https://www.postgresql.org/docs/9.4/monitoring-stats.html#MONITORING-STATS-VIEWS-TABLE)
- [The Information Schema](https://www.postgresql.org/docs/9.4/information-schema.html)

**Parent topic:** [System Catalogs](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
