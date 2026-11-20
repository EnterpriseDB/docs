---
title: Retrieving information about a partitioned table
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_table_partitioning/07_retrieving_information_about_a_partitioned_table/
lastModified: 2023-02-14T16:10:29+05:30
---

# Retrieving information about a partitioned table

<div id="retrieving_information_about_a_partitioned_table" class="registered_link"></div>

EDB Postgres Advanced Server provides five system catalog views that you can use to view information about the structure of partitioned tables.

## Querying the partitioning views

You can query the following views to retrieve information about partitioned and subpartitioned tables:

- `ALL_PART_TABLES`
- `ALL_TAB_PARTITIONS`
- `ALL_TAB_SUBPARTITIONS`
- `ALL_PART_KEY_COLUMNS`
- `ALL_SUBPART_KEY_COLUMNS`

The structure of each view is explained in [Table partitioning views reference](https://www.enterprisedb.com/docs/epas/14/epas_compat_table_partitioning/07_retrieving_information_about_a_partitioned_table/01_table_partitioning_views_reference/#table_partitioning_views_reference). If you're using the EDB-PSQL client, you can also learn about the structure of a view by entering:

`\d <view_name>`

Where `view_name` specifies the name of the table partitioning view.

Querying a view can provide information about the structure of a partitioned or subpartitioned table. For example, this code displays the names of a subpartitioned table:

```text
edb=# SELECT subpartition_name, partition_name FROM ALL_TAB_SUBPARTITIONS;
 subpartition_name | partition_name
-------------------+----------------
 EUROPE_2011       | EUROPE
 EUROPE_2012       | EUROPE
 ASIA_2011         | ASIA
 ASIA_2012         | ASIA
 AMERICAS_2011     | AMERICAS
 AMERICAS_2012     | AMERICAS
(6 rows)
```

- [Table partitioning views reference](https://www.enterprisedb.com/docs/epas/14/epas_compat_table_partitioning/07_retrieving_information_about_a_partitioned_table/01_table_partitioning_views_reference/): Query the catalog views that are compatible with Oracle databases to review detailed information about your partitioned tables.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
