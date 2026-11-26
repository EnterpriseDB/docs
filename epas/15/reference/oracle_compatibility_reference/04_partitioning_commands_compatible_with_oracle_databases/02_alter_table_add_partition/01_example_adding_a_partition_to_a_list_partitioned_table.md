---
title: "Example: Adding a partition to a LIST partitioned table"
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/02_alter_table_add_partition/01_example_adding_a_partition_to_a_list_partitioned_table/
lastModified: 2023-11-09T17:35:38+05:30
---

# Example: Adding a partition to a LIST partitioned table

<div id="example_adding_a_partition_to_a_list_partitioned_table" class="registered_link"></div>

This example adds a partition to the list-partitioned `sales` table. The table was created using the command:

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

The table contains the three partitions `americas`, `asia`, and `europe`:

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

This command adds a partition named `east_asia` to the `sales` table:

```sql
ALTER TABLE sales ADD PARTITION east_asia
  VALUES ('CHINA', 'KOREA');
```

After the command is invoked, the table includes the `east_asia` partition:

```sql
edb=# SELECT partition_name, high_value FROM ALL_TAB_PARTITIONS;
```

```output title="Output"
 partition_name |     high_value
----------------+---------------------
 EUROPE         | 'FRANCE', 'ITALY'
 ASIA           | 'INDIA', 'PAKISTAN'
 AMERICAS       | 'US', 'CANADA'
 EAST_ASIA      | 'CHINA', 'KOREA'
(4 rows)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
