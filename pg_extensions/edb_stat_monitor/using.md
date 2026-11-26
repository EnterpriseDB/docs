---
title: Using EDB Stat Monitor
description: How to use EDB Stat Monitor
product: edb_stat_monitor
url: https://www.enterprisedb.com/docs/pg_extensions/edb_stat_monitor/using/
lastModified: 2025-07-01T03:25:11-04:00
---

# Using EDB Stat Monitor

EDB Stat Monitor is a PostgreSQL extension that provides query performance monitoring capabilities. It collects and stores statistics about SQL queries executed on the database, allowing you to analyze query performance and identify potential bottlenecks.

## Prerequisites

Before you can use EDB Stat Monitor, you need to install it and configure it in your PostgreSQL database. For installation instructions, see [Installing EDB Stat Monitor](https://www.enterprisedb.com/docs/pg_extensions/edb_stat_monitor/installing/).

After you install EDB Stat Monitor, you need to configure it in your database. Specifically, you need to add the shared library to your database cluster and create the extension in your database. For configuration instructions, see [Configuring EDB Stat Monitor](https://www.enterprisedb.com/docs/pg_extensions/edb_stat_monitor/configuring/).

## Querying EDB Stat Monitor

Once EDB Stat Monitor is enabled, you can query the edb\_stat\_monitor view to retrieve query performance statistics. The view contains aggregated data about executed queries, including execution time, number of calls, and other relevant metrics.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
