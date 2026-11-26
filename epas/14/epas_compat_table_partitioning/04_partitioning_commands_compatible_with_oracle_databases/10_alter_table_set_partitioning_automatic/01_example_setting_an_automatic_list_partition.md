---
title: "Example: Setting an AUTOMATIC list partition"
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_table_partitioning/04_partitioning_commands_compatible_with_oracle_databases/10_alter_table_set_partitioning_automatic/01_example_setting_an_automatic_list_partition/
lastModified: 2023-02-14T16:10:29+05:30
---

# Example: Setting an AUTOMATIC list partition

<div id="example_setting_an_automatic_list_partition" class="registered_link"></div>

This example modifies a table `sales` to use automatic list partitioning instead of regular list partitioning.

This command creates a `sales` table:

```text
CREATE TABLE sales
(
  dept_no      number,
  part_no      varchar2,
  sales_state  varchar2(20),
  date         date,
  amount       number
)
PARTITION BY LIST(sales_state)
(
  PARTITION P_KAN VALUES('KANSAS'),
  PARTITION P_TEX VALUES('TEXAS')
);
```

Implement automatic list partitioning on the `sales` table:

```text
ALTER TABLE sales SET AUTOMATIC;
```

Query the `ALL_TAB_PARTITIONS` view to show that an existing partition is successfully created:

```text
edb=# SELECT table_name, partition_name, high_value FROM ALL_TAB_PARTITIONS;
 table_name | partition_name | high_value
------------+----------------+------------
 SALES      | P_KAN          | 'KANSAS'
 SALES      | P_TEX          | 'TEXAS'
(2 rows)
```

Insert data into the `sales` table to create a partition and add the value:

```text
edb=# INSERT INTO sales VALUES (1, 'VIR', 'VIRGINIA');
INSERT 0 1
```

Query the `ALL_TAB_PARTITIONS` view again after the insert. The automatic list partition is successfully created and data is inserted. A system-generated name of the partition is created that varies for each session.

```text
edb=# SELECT table_name, partition_name, high_value FROM ALL_TAB_PARTITIONS;
 table_name | partition_name | high_value
------------+----------------+------------
 SALES      | P_KAN          | 'KANSAS'
 SALES      | P_TEX          | 'TEXAS'
 SALES      | SYS106900103   | 'VIRGINIA'
(3 rows)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
