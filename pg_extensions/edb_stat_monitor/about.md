---
title: About EDB Stat Monitor
description: Overview of EDB Stat Monitor
product: edb_stat_monitor
url: https://www.enterprisedb.com/docs/pg_extensions/edb_stat_monitor/about/
lastModified: 2025-07-01T03:25:11-04:00
---

# About EDB Stat Monitor

EDB Stat Monitor (edb\_stat\_monitor) simplifies query observability by providing a more holistic view of queries from performance, application, and analysis perspectives. This is achieved by grouping data in configurable time buckets that allow capturing of load and performance information for smaller time windows. So performance issues and patterns can be identified based on time and workload.

- **Time interval grouping**: Instead of supplying one set of ever-increasing counts, edb\_stat\_monitor computes stats for a configured number of time intervals, or time buckets. This allows for much better data accuracy, especially in the case of high resolution or unreliable networks.
- **T-digest**: EDB Stat Monitor uses the t-digest algorithm to provide a more accurate representation of query execution times. This is particularly useful for calculating percentiles and histograms, which can help identify performance bottlenecks.
- **Sampling**: EDB Stat Monitor can be configured to sample queries, which helps reduce the overhead of monitoring while still providing valuable insights into query performance.
- **Multi-dimensional grouping**: While pg\_stat\_statements groups counters by userid, dbid, and queryid, edb\_stat\_monitor uses a more detailed group for higher precision. This allows you to drill down into the performance of queries.
- **Capture actual parameters in the queries**: edb\_stat\_monitor allows you to choose if you want to see queries with placeholders for parameters or actual parameter data. This approach simplifies debugging and analysis processes by enabling users to execute the same query.
- **Query plan**: Each SQL query is now accompanied by its actual plan that was constructed for its execution. That’s a huge advantage if you want to understand why a particular query is slower than expected.
- **Tables access statistics for a statement**: This feature allows edb\_stat\_monitor to easily identify all queries that accessed a given table. This set is at par with the information provided by the pg\_stat\_statements.
- **Histogram**: Visual representation is very helpful as it can help identify issues. With the help of the histogram function, you can now view a timing/calling data histogram in response to a SQL query. And it even works in psql.

Read more about the [features of EDB Stat Monitor](https://www.enterprisedb.com/docs/pg_extensions/edb_stat_monitor/features/) and how to [configure it](https://www.enterprisedb.com/docs/pg_extensions/edb_stat_monitor/configuring/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
