---
title: Using the dynamic runtime instrumentation tools architecture (DRITA)
description: How to use Dynamic Runtime Instrumentation Tools Architecture to query catalog views
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/managing_performance/04_dynamic_runtime_instrumentation_tools_architecture_DRITA/
lastModified: 2023-11-09T17:35:38+05:30
---

# Using the dynamic runtime instrumentation tools architecture (DRITA)

<div id="dynamic_runtime_instrumentation_tools_architecture_DRITA" class="registered_link"></div>

The Dynamic Runtime Instrumentation Tools Architecture (DRITA) enables a DBA to query catalog views to determine the _wait events_ that affect the performance of individual sessions or the whole system. DRITA records the number of times each event occurs as well as the time spent waiting. You can use this information to diagnose performance problems.

DRITA compares _snapshots_ to evaluate the performance of a system. A snapshot is a saved set of system performance data at a given point in time. A unique ID number identifies each snapshot. You can use snapshot ID numbers with DRITA reporting functions to return system performance statistics. DRITA consumes minimal system resources.

- [Taking a snapshot](https://www.enterprisedb.com/docs/epas/15/managing_performance/04_dynamic_runtime_instrumentation_tools_architecture_DRITA/taking_a_snapshot/): Describes how to take a snapshot of system performance data
- [Using DRITA functions](https://www.enterprisedb.com/docs/epas/15/managing_performance/04_dynamic_runtime_instrumentation_tools_architecture_DRITA/using_drita_functions/): Describes how to use DRITA functions to gather wait information and manage snapshots
- [Performance tuning recommendations](https://www.enterprisedb.com/docs/epas/15/managing_performance/04_dynamic_runtime_instrumentation_tools_architecture_DRITA/performance_tuning_recommendations/): Explains how to review DRITA reports for performance tuning recommendations
- [Simulating Statspack AWR reports](https://www.enterprisedb.com/docs/epas/15/managing_performance/04_dynamic_runtime_instrumentation_tools_architecture_DRITA/simulating_statspack_reports/): Describes how to use DRITA functions to simulate Oracle Statspack Automatic Workload Repository (AWR) reports

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
