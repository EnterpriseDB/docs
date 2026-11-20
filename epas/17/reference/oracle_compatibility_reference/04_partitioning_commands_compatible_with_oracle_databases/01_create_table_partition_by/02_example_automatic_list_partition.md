---
title: "Example: AUTOMATIC LIST PARTITION"
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/01_create_table_partition_by/02_example_automatic_list_partition/
lastModified: 2025-11-25T20:57:39+05:30
---

# Example: AUTOMATIC LIST PARTITION

<div id="example_automatic_list_partition" class="registered_link"></div>

This example shows a `sales` table that uses an `AUTOMATIC` clause to create an automatic list partitioned table on the `sales_state` column. The database creates a partition and adds data to a table.

```sql
CREATE TABLE sales
(
  dept_no      number,
  part_no      varchar2,
  sales_state  varchar2(20),
  date         date,
  amount       number
)
PARTITION BY LIST(sales_state) AUTOMATIC
(
  PARTITION P_CAL VALUES('CALIFORNIA'),
  PARTITION P_FLO VALUES('FLORIDA')
);
```

Query the `ALL_TAB_PARTITIONS` view to see an existing partition that's successfully created:

```sql
edb=# SELECT table_name, partition_name, high_value from ALL_TAB_PARTITIONS;
```

```output title="Output"
 table_name | partition_name |  high_value
------------+----------------+--------------
 SALES      | P_CAL          | 'CALIFORNIA'
 SALES      | P_FLO          | 'FLORIDA'
(2 rows)
```

Insert data into a `sales` table that can't fit into an existing partition. For the regular list partitioned table, you get an error. However, automatic list partitioning creates and inserts the data into a new partition.

```sql
edb=# INSERT INTO sales VALUES (1, 'IND', 'INDIANA');
INSERT 0 1
edb=# INSERT INTO sales VALUES (2, 'OHI', 'OHIO');
INSERT 0 1
```

Query the `ALL_TAB_PARTITIONS` view again after the insert. The partition is created, and data is inserted to hold a new value. A system-generated name of the partition is created that varies for each session.

```sql
edb=# SELECT table_name, partition_name, high_value from ALL_TAB_PARTITIONS;
```

```output title="Output"
 table_name | partition_name |  high_value
------------+----------------+--------------
 SALES      | P_CAL          | 'CALIFORNIA'
 SALES      | P_FLO          | 'FLORIDA'
 SALES      | SYS106900103   | 'INDIANA'
 SALES      | SYS106900104   | 'OHIO'
(4 rows)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
