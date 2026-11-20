---
title: Selecting a partition type
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_table_partitioning/02_selecting_a_partition_type/
lastModified: 2025-11-25T20:57:39+05:30
---

# Selecting a partition type

<div id="selecting_a_partition_type" class="registered_link"></div>

When you create a partitioned table, you specify `LIST`, `RANGE`, or `HASH` partitioning rules. The partitioning rules provide a set of constraints that define the data that's stored in each partition. As you add rows to the partitioned table, the server uses the partitioning rules to decide which partition contains each row.

EDB Postgres Advanced Server can also use the partitioning rules to enforce partition pruning, which improves performance when responding to user queries. When selecting a partitioning type and partitioning keys for a table, consider how the data that's stored in a table is queried, and include often-queried columns in the partitioning rules.

## List partitioning

When you create a list-partitioned table, you specify a single partitioning key column. When adding a row to the table, the server compares the key values specified in the partitioning rule to the corresponding column in the row. If the column value matches a value in the partitioning rule, the row is stored in the partition named in the rule.

> **Note**
>
> List partitioning doesn't support multi-column list partitioning.

See [Automatic list partitioning](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_table_partitioning/02_selecting_a_partition_type/02_automatic_list_partitioning/) for information about an extension to `LIST` partitioning that enables a database to automatically create a partition for any new distinct value of the list partitioning key.

## Range partitioning

When you create a range-partitioned table, you specify one or more partitioning key columns. When you add a row to the table, the server compares the value of the partitioning keys to the corresponding columns in a table entry. If the column values satisfy the conditions specified in the partitioning rule, the row is stored in the partition named in the rule.

See [Interval range partitioning](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_table_partitioning/02_selecting_a_partition_type/01_interval_range_partitioning/) for information about an extension to range partitioning that enables a database to create a partition when the inserted data exceeds the range of an existing partition.

## Hash partitioning

When you create a hash-partitioned table, you specify one or more partitioning key columns. Data is divided into approximately equal-sized partitions among the specified partitions. When you add a row to a hash-partitioned table, the server computes a hash value for the data in the specified columns and stores the row in a partition according to the hash value.

> **Note**
>
> When upgrading EDB Postgres Advanced Server, you must rebuild each hash-partitioned table on the upgraded version server.

## Subpartitioning

Subpartitioning breaks a partitioned table into smaller subsets. You must store all subsets in the same database server cluster. A table is typically subpartitioned by a different set of columns. It can have a different subpartitioning type from the parent partition. If you subpartition one partition, then each partition has at least one subpartition.

If you subpartition a table, no data is stored in any of the partition tables. Instead, the data is stored in the corresponding subpartitions.

- [Interval range partitioning](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_table_partitioning/02_selecting_a_partition_type/01_interval_range_partitioning/): Interval range partitioning is an extension to range partitioning that allows a database to create a partition when the inserted data exceeds the range of an existing partition. To implement interval range partitioning, include the INTERVAL clause, and specify the range size for a new partition.
- [Automatic list partitioning](https://www.enterprisedb.com/docs/epas/17/application_programming/epas_compat_table_partitioning/02_selecting_a_partition_type/02_automatic_list_partitioning/): Automatic list partitioning is an extension to LIST partitioning that allows a database to create a partition for any new distinct value of the list partitioning key. A new partition is created when data is inserted into the LIST partitioned table and the inserted value doesn't match any of the existing table partition. Use the AUTOMATIC clause to implement automatic list partitioning.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
