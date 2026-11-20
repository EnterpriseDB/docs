---
title: "Example: Deleting a partition"
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/13_alter_table_drop_partition/01_example_deleting_a_partition/
lastModified: 2025-11-25T20:57:39+05:30
---

# Example: Deleting a partition

<div id="example_deleting_a_partition" class="registered_link"></div>

This example deletes a partition of the `sales` table.

Create the `sales` table:

```sql
CREATE TABLE sales
(
  dept_no     number,
  part_no     varchar2,
  country     varchar2(20),
  date        date,
  amount      number
)
PARTITION BY LIST(country)
(
  PARTITION europe VALUES('FRANCE', 'ITALY'),
  PARTITION asia VALUES('INDIA', 'PAKISTAN'),
  PARTITION americas VALUES('US', 'CANADA')
);
```

Query the `ALL_TAB_PARTITIONS` view to display the partition names:

```sql
edb=# SELECT partition_name, high_value FROM ALL_TAB_PARTITIONS;
```

```output title="Output"
 partition_name |     high_value
----------------+---------------------
 EUROPE         | 'FRANCE', 'ITALY'
 ASIA           | 'INDIA', 'PAKISTAN'
 AMERICAS       | 'US', 'CANADA'
(3 rows)
```

Delete the `americas` partition from the `sales` table:

```sql
ALTER TABLE sales DROP PARTITION americas;
```

Query the `ALL_TAB_PARTITIONS` view to show that the partition was successfully deleted:

```sql
edb=# SELECT partition_name, high_value FROM ALL_TAB_PARTITIONS;
```

```output title="Output"
 partition_name |     high_value
----------------+---------------------
 EUROPE         | 'FRANCE', 'ITALY'
 ASIA           | 'INDIA', 'PAKISTAN'
(2 rows)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
