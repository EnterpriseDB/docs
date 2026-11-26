---
title: "Example: Renaming a partition"
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/04_partitioning_commands_compatible_with_oracle_databases/08_alter_table_rename_partition/01_example_renaming_a_partition/
lastModified: 2024-11-22T12:16:04+01:00
---

# Example: Renaming a partition

<div id="example_renaming_a_partition" class="registered_link"></div>

This command creates a list-partitioned table named `sales`:

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

This command renames the `americas` partition to `n_america`:

```sql
ALTER TABLE sales
 RENAME PARTITION americas TO n_america;
```

Query the `ALL_TAB_PARTITIONS` view to show that the partition was successfully renamed:

```sql
edb=# SELECT partition_name, high_value FROM ALL_TAB_PARTITIONS;
```

```output title="Output"
 partition_name |     high_value
----------------+---------------------
 EUROPE         | 'FRANCE', 'ITALY'
 ASIA           | 'INDIA', 'PAKISTAN'
 N_AMERICA      | 'US', 'CANADA'
(3 rows)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
