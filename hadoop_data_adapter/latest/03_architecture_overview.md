---
title: Architecture overview
product: Hadoop Data Adapter
version: "2"
url: https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/03_architecture_overview/
lastModified: 2022-03-22T16:18:15-04:00
---

# Architecture overview

<div id="architecture_overview" class="registered_link"></div>

Hadoop is a framework that allows you to store a large data set in a distributed file system.

The Hadoop data wrapper provides an interface between a Hadoop file system and a Postgres database. The Hadoop data wrapper transforms a Postgres `SELECT` statement into a query that is understood by the HiveQL or Spark SQL interface.

![Using a Hadoop distributed file system with Postgres](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/hadoop_data_adapter/2/images/hadoop_distributed_file_system_with_postgres.png)

When possible, the foreign data wrapper asks the Hive or Spark server to perform the actions associated with the `WHERE` clause of a `SELECT` statement. Pushing down the `WHERE` clause improves performance by decreasing the amount of data moving across the network.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
