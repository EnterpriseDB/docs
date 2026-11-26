---
title: "Database Compatibility: Table Partitioning"
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_table_partitioning/
lastModified: 2026-08-27T08:27:59-03:00
---

# Database Compatibility: Table Partitioning

In a partitioned table, one logically large table is broken into smaller physical pieces. Partitioning can provide several benefits:

- Query performance can improve dramatically, particularly when most of the heavily accessed rows of the table are in a single partition or a small number of partitions. Partitioning allows you to omit the partition column from the front of an index. This approach reduces index size and makes it more likely that the heavily used parts of the index fit in memory.
- When a query or update accesses a large percentage of a single partition, performance might improve. This improvement happens because the server performs a sequential scan of the partition instead of using an index and random-access reads scattered across the whole table.
- If you plan the requirement into the partitioning design, you can implement a bulk load or unload by adding or removing partitions. `ALTER TABLE` is far faster than a bulk operation. It also avoids the `VACUUM` overhead caused by a bulk `DELETE`.
- You can migrate seldom-used data to less-expensive or slower storage media.

Table partitioning is worthwhile when a table is becoming very large. The exact point at which a table benefits from partitioning depends on the application. A good guideline is for the size of the table not to exceed the physical memory of the database server.

EDB Postgres Advanced Server supports aspects of table partitioning that are compatible with Oracle databases.

> **Note**
>
> The _declarative partitioning_ feature, introduced with PostgreSQL version 10, is not covered here. However, PostgreSQL declarative partitioning is supported in EDB Postgres Advanced Server 10 in addition to the table partitioning compatible with Oracle databases described here. For information about declarative partitioning, see the [PostgreSQL core documentation](https://www.postgresql.org/docs/current/static/ddl-partitioning.html).

The PostgreSQL `INSERT... ON CONFLICT DO NOTHING/UPDATE` clause, commonly known as `UPSERT`, is supported on Oracle-styled partitioned tables. Since EDB Postgres Advanced Server 10, Oracle-style partitioned tables are implemented internally using PostgreSQL's native declarative partitioning, so `ON CONFLICT` behaves the same as it does on a table created with declarative partitioning syntax.

> **Note**
>
> EDB Postgres Advanced Server doesn't support global indexes, so the index isn't inherited when you define a primary key on the partitioned table that doesn't include partition key columns. However, all partitions defined in `CREATE TABLE` have an independent primary index on the column. You can re-create the primary key on all newly added partitions by using `ALTER TABLE ... ADD CONSTRAINT`. This primary index enforces uniqueness in each partition but not across the entire partition hierarchy. In other words, you can have the same value repeated for the primary index column in two or more partitions.

- [Selecting a partition type](https://www.enterprisedb.com/docs/epas/14/epas_compat_table_partitioning/02_selecting_a_partition_type/): When you create a partitioned table, you specify LIST, RANGE, or HASH partitioning rules. The partitioning rules provide a set of constraints that define the data that's stored in each partition. As you add rows to the partitioned table, the server uses the partitioning rules to decide which partition contains each row.
- [Using partition pruning](https://www.enterprisedb.com/docs/epas/14/epas_compat_table_partitioning/03_using_partition_pruning/): EDB Postgres Advanced Server's query planner uses partition pruning to compute an efficient plan to locate any rows that match the conditions specified in the WHERE clause of a SELECT statement. To successfully prune partitions from an execution plan, the WHERE clause must constrain the information that's compared to the partitioning key column specified when creating the partitioned table.
- [Partitioning commands compatible with Oracle Databases](https://www.enterprisedb.com/docs/epas/14/epas_compat_table_partitioning/04_partitioning_commands_compatible_with_oracle_databases/): EDB Postgres Advanced Server supports using table partitioning syntaxes that are compatible with Oracle databases.
- [Handling stray values in a LIST or RANGE partitioned table](https://www.enterprisedb.com/docs/epas/14/epas_compat_table_partitioning/05_handling_stray_values_in_a_list_or_range_partitioned_table/): A DEFAULT or MAXVALUE partition or subpartition captures any rows that don't meet the other partitioning rules defined for a table.
- [Specifying multiple partitioning keys in a RANGE partitioned table](https://www.enterprisedb.com/docs/epas/14/epas_compat_table_partitioning/06_specifying_multiple_partitioning_keys_in_a_range_partitioned_table/): You can often improve performance by specifying multiple key columns for a RANGE partitioned table. If you often select rows using comparison operators on a small set of columns based on a greater-than or less-than value, consider using those columns in RANGE partitioning rules.
- [Retrieving information about a partitioned table](https://www.enterprisedb.com/docs/epas/14/epas_compat_table_partitioning/07_retrieving_information_about_a_partitioned_table/): EDB Postgres Advanced Server provides five system catalog views that you can use to view information about the structure of partitioned tables.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
