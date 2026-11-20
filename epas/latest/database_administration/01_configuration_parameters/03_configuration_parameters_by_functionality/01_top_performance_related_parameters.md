---
title: Top performance-related parameters
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/
lastModified: 2025-11-25T20:39:04+05:30
---

# Top performance-related parameters

<div id="top_performance_related_parameters" class="registered_link"></div>

These configuration parameters have the most immediate impact on performance.

- [shared\_buffers](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/01_shared_buffers/): Parameter type: Integer
- [work\_mem](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/02_work_mem/): Parameter type: Integer
- [maintenance\_work\_mem](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/03_maintenance_work_mem/): Parameter type: Integer
- [wal\_buffers](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/04_wal_buffers/): Parameter type: Integer
- [checkpoint\_segments](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/05_checkpoint_segments/): Deprecated. This parameter isn't supported by EDB Postgres Advanced Server.
- [checkpoint\_completion\_target](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/06_checkpoint_completion_target/): Parameter type: Floating point
- [checkpoint\_timeout](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/07_checkpoint_timeout/): Parameter type: Integer
- [max\_wal\_size](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/08_max_wal_size/): Parameter type: Integer
- [min\_wal\_size](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/09_min_wal_size/): Parameter type: Integer
- [bgwriter\_delay](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/10_bgwriter_delay/): Parameter type: Integer
- [seq\_page\_cost](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/11_seq_page_cost/): Parameter type: Floating point
- [random\_page\_cost](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/12_random_page_cost/): Parameter type: Floating point
- [effective\_cache\_size](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/13_effective_cache_size/): Parameter type: Integer
- [synchronous\_commit](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/14_synchronous_commit/): Parameter type: Boolean
- [edb\_max\_spins\_per\_delay](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/15_edb_max_spins_per_delay/): Parameter type: Integer
- [pg\_prewarm.autoprewarm](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/16_pg_prewarm.autoprewarm/): Parameter type: Boolean
- [pg\_prewarm.autoprewarm\_interval](https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/17_pg_prewarm.autoprewarm_interval/): Parameter type: Integer

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
