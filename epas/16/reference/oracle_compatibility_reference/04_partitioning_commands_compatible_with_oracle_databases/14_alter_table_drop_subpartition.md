---
title: ALTER TABLE...DROP SUBPARTITION
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/14_alter_table_drop_subpartition/
lastModified: 2024-11-22T12:16:04+01:00
---

# ALTER TABLE...DROP SUBPARTITION

<div id="alter_table_drop_subpartition" class="registered_link"></div>

Use the `ALTER TABLE… DROP SUBPARTITION` command to drop a subpartition definition and the data stored in that subpartition. The syntax is:

```sql
ALTER TABLE <table_name> DROP SUBPARTITION <subpartition_name>;
```

## Parameters

`table_name`

The name (optionally schema-qualified) of the partitioned table.

`subpartition_name`

The name of the subpartition to delete.

## Description

The `ALTER TABLE… DROP SUBPARTITION` command deletes a subpartition and the data stored in that subpartition. To use the `DROP SUBPARTITION` clause, you must be the owner of the partitioning root, a member of a group that owns the table, or have superuser or administrative privileges.

- [Example: Deleting a subpartition](https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/14_alter_table_drop_subpartition/01_example_deleting_a_subpartition/): This example deletes a subpartition of the sales table.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
