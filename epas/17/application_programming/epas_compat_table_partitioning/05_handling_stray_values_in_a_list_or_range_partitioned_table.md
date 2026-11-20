---
title: Handling stray values in a LIST or RANGE partitioned table
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_table_partitioning/05_handling_stray_values_in_a_list_or_range_partitioned_table/
lastModified: 2025-11-25T20:57:39+05:30
---

# Handling stray values in a LIST or RANGE partitioned table

<div id="handling_stray_values_in_a_list_or_range_partitioned_table" class="registered_link"></div>

A `DEFAULT` or `MAXVALUE` partition or subpartition captures any rows that don't meet the other partitioning rules defined for a table.

- [Defining a DEFAULT partition](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_table_partitioning/05_handling_stray_values_in_a_list_or_range_partitioned_table/defining_a_default_partition/): A DEFAULT partition captures any rows that don't fit into any other partition in a LIST partitioned or subpartitioned table. If you don't include a DEFAULT rule, any row that doesn't match one of the values in the partitioning constraints causes an error. Each LIST partition or subpartition can have its own DEFAULT rule.
- [Defining a MAXVALUE partition](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_table_partitioning/05_handling_stray_values_in_a_list_or_range_partitioned_table/defining_a_maxvalue_partition/): A MAXVALUE partition or subpartition captures any rows that don't fit into any other partition in a range-partitioned or subpartitioned table. If you don't include a MAXVALUE rule, any row that exceeds the maximum limit specified by the partitioning rules causes in an error. Each partition or subpartition can have its own MAXVALUE partition.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
