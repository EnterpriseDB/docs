---
title: "Example: Adding a subpartition to a RANGE/LIST partitioned table"
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_table_partitioning/04_partitioning_commands_compatible_with_oracle_databases/03_alter_table_add_subpartition/02_example_adding_a_subpartition_to_a_range_list_partitioned_table/
lastModified: 2023-02-14T16:10:29+05:30
---

# Example: Adding a subpartition to a RANGE/LIST partitioned table

<div id="example_adding_a_subpartition_to_a_range_list_partitioned_table" class="registered_link"></div>

This example adds a `LIST` subpartition to the `RANGE` partitioned `sales` table. The `sales` table was created with the command:

```text
CREATE TABLE sales
(
  dept_no     number,
  part_no     varchar2,
  country     varchar2(20),
  date        date,
  amount      number
)
PARTITION BY RANGE(date)
  SUBPARTITION BY LIST (country)
  (
    PARTITION first_half_2012 VALUES LESS THAN('01-JUL-2012')
    (
      SUBPARTITION europe VALUES ('ITALY', 'FRANCE'),
      SUBPARTITION americas VALUES ('US', 'CANADA')
    ),
    PARTITION second_half_2012 VALUES LESS THAN('01-JAN-2013')
    (
      SUBPARTITION asia VALUES ('INDIA', 'PAKISTAN')
    )
);
```

After the command is invoked, the `sales` table has two partitions, named `first_half_2012` and `second_half_2012`. The `first_half_2012 partition` has two subpartitions, named `europe` and `americas`. The `second_half_2012` partition has one partition, named `asia`.

```text
edb=# SELECT partition_name, subpartition_name, high_value FROM ALL_TAB_SUBPARTITIONS;
  partition_name  | subpartition_name |     high_value
------------------+-------------------+---------------------
 SECOND_HALF_2012 | ASIA              | 'INDIA', 'PAKISTAN'
 FIRST_HALF_2012  | AMERICAS          | 'US', 'CANADA'
 FIRST_HALF_2012  | EUROPE            | 'ITALY', 'FRANCE'
(3 rows)
```

This command adds a subpartition named `east_asia` to the `second_half_2012` partition:

```text
ALTER TABLE sales MODIFY PARTITION second_half_2012
  ADD SUBPARTITION east_asia VALUES ('CHINA');
```

After the command is invoked, the table includes a subpartition named `east_asia`:

```text
edb=# SELECT partition_name, subpartition_name, high_value FROM ALL_TAB_SUBPARTITIONS;
  partition_name  | subpartition_name |     high_value
------------------+-------------------+---------------------
 SECOND_HALF_2012 | ASIA              | 'INDIA', 'PAKISTAN'
 SECOND_HALF_2012 | EAST_ASIA         | 'CHINA'
 FIRST_HALF_2012  | AMERICAS          | 'US', 'CANADA'
 FIRST_HALF_2012  | EUROPE            | 'ITALY', 'FRANCE'
(4 rows)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
