---
title: ALTER TABLE...SET [ PARTITIONING ] AUTOMATIC
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/10_alter_table_set_partitioning_automatic/
lastModified: 2024-11-22T12:16:04+01:00
---

# ALTER TABLE...SET \[ PARTITIONING ] AUTOMATIC

<div id="alter_table_set_partitioning_automatic" class="registered_link"></div>

Use the `ALTER TABLE… SET [ PARTITIONING ] AUTOMATIC` command to convert an existing list-partitioned table to automatic list partitioning. The database automatically creates a partition based on a new value inserted into a table when `AUTOMATIC` is set. The syntax is:

```sql
ALTER TABLE <table_name> SET [ PARTITIONING ] AUTOMATIC;
```

To disable `AUTOMATIC LIST PARTITIONING` and convert to regular `LIST` partition, the syntax is:

```sql
ALTER TABLE <table_name> SET [ PARTITIONING ] MANUAL;
```

## Parameters

`table_name`

The name (optionally schema-qualified) of the list-partitioned table.

## Description

You can use the `ALTER TABLE… SET [ PARTITIONING ] AUTOMATIC` command to convert the regular list-partitioned table to use automatic partitioning. A partition is created, and you can insert data into the new partition.

You can use the `ALTER TABLE… SET [ PARTITIONING ] MANUAL` command to disable the automatic list partitioning. The database converts an automatic list-partitioned table to a regular list-partitioned table.

- [Example: Setting an AUTOMATIC list partition](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/10_alter_table_set_partitioning_automatic/01_example_setting_an_automatic_list_partition/): This example modifies a table sales to use automatic list partitioning instead of regular list partitioning.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
