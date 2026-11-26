---
title: "Example: PARTITION BY HASH"
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_table_partitioning/04_partitioning_commands_compatible_with_oracle_databases/01_create_table_partition_by/05_example_partition_by_hash/
lastModified: 2023-02-14T16:10:29+05:30
---

# Example: PARTITION BY HASH

<div id="example_partition_by_hash" class="registered_link"></div>

This example creates a partitioned table `sales` using the `PARTITION BY HASH` clause. The `sales` table stores information in three partitions: `p1`, `p2`, and `p3`.

```text
CREATE TABLE sales
(
  dept_no     number,
  part_no     varchar2,
  country     varchar2(20),
  date        date,
  amount      number
)
PARTITION BY HASH (part_no)
(
  PARTITION p1,
  PARTITION p2,
  PARTITION p3
);
```

The table returns an empty string for the hash partition value specified in the `part_no` column:

```text
edb=# SELECT partition_name, high_value from ALL_TAB_PARTITIONS;
 partition_name | high_value
----------------+------------
 P1             |
 P2             |
 P3             |
(3 rows)
```

Use the following command to view the hash value of the `part_no` column:

```text
edb=# \d+ sales
                                       Partitioned table "public.sales"
 Column  |            Type            |Collation|Nullable|Default|Storage  |
---------+----------------------------+----------+--------+------+---------+-
 dept_no | numeric                    |          |        |      | main    |
 part_no | character varying          |          |        |      | extended|
 country | character varying(20)      |          |        |      | extended|
 date    | timestamp without time zone|          |        |      | plain   |
 amount  | numeric                    |          |        |      | main    |
Partition key: HASH (part_no)
Partitions: sales_p1 FOR VALUES WITH (modulus 3, remainder 0),
            sales_p2 FOR VALUES WITH (modulus 3, remainder 1),
            sales_p3 FOR VALUES WITH (modulus 3, remainder 2)
```

The table is partitioned by the hash value of the values specified in the `part_no` column:

```text
edb=# SELECT partition_name, partition_position from ALL_TAB_PARTITIONS;
 partition_name | partition_position
----------------+--------------------
 P1             |                  1
 P2             |                  2
 P3             |                  3
(3 rows)
```

The server evaluates the hash value of the `part_no` column and distributes the rows into approximately equal partitions.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
