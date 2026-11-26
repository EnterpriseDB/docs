---
title: Optimizing query performance
description: Maximize query speeds by managing DirectScan execution, configuring compute pushdowns, and troubleshooting path fallbacks.
product: EDB Postgres AI Analytics Accelerator
version: "1.12"
url: https://www.enterprisedb.com/docs/pgaa/latest/optimize_performance/
lastModified: 2026-11-18T10:56:45Z
---

# Optimizing query performance

The Postgres Analytics Accelerator (PGAA) achieves its high performance by offloading analytical workloads to Seafowl and Apache Spark, a vectorized execution engine designed for massive scale. By understanding how PGAA selects execution paths, you can ensure your queries stay on the "fast path" for maximum acceleration.

## Understanding scan types

When you query an analytical table, PGAA manages data retrieval and processing via two distinct execution paths:

**DirectScan:** Seafowl reads data directly from object storage, applies all filters and aggregations at the source, and returns only the final result set to Postgres. This maximizes performance by fully utilizing vectorized acceleration and minimizing network traffic.

**CompatScan**: If a query contains SQL features or custom functions that Seafowl can't process natively, the system falls back to a hybrid mode. In this scenario, Seafowl still acts as the data source—streaming data from object storage and performing basic filtering—while Postgres acts as the orchestrator for final complex processing.

In CompatScan, the workload is divided:

- Seafowl reads files and handles authorized pushdowns (like joins or group-bys).
- Postgres receives the optimized stream from Seafowl to execute specialized functions, final sorting, or complex logic that the vectorized engine doesn't yet support.

While DirectScan is the goal for maximum speed, CompatScan serves as a reliable fallback, ensuring full Postgres feature compatibility at the cost of some performance.

## Analyzing your query plan

To verify how PGAA is executing your query, use the `EXPLAIN` command. The output will reveal which engine is doing the heavy lifting:

- **DirectScan:** Look for a `SeafowlDirectScan` or a `SparkDirectScan` node. This indicates that Seafowl is handling the entire operation (filtering, joining, and aggregating) and returning only the final result to Postgres.
- **CompatScan:** If you see a `SeafowlCompatScan` or a `SparkCompatScan` node, the query is running in "hybrid" mode. While Postgres orchestrates the final execution to ensure full feature compatibility, the remote engine can still accelerate parts of the query if pushdown settings are enabled.

## Managing DirectScan fallbacks

If your query falls back to the slower CompatScan path, follow these steps to troubleshoot:

1. Ensure that DirectScan is permitted in your current session:

   ```sql
   SHOW pgaa.enable_direct_scan;
   -- If off, enable it:
   SET pgaa.enable_direct_scan=on;
   ```

2. Force Error reporting: Change the failure behavior You can to reveal the cause of the fallback:

   ```sql
   SET pgaa.direct_scan_fail_behavior = 'error';
   ```

   Postgres will throw an explicit error identifying the incompatible SQL syntax or data type.

3. If the query is complex, try removing clauses one by one to isolate the specific "compatibility trigger" forcing the hybrid mode.

## Configuring compute pushdowns

Offload resource-intensive operations to maintain high performance, even in hybrid mode, using the following settings. These settings act as a performance safety net and are enabled by default:

- [`pgaa.enable_join_pushdown`](https://www.enterprisedb.com/docs/pgaa/latest/reference/configuration_parameters/#pgaaenable_join_pushdown): Authorizes the system to attempt to offload joins, including semi and anti joins, to the remote executor (Seafowl or Spark). By joining data where it resides, you avoid pulling massive raw datasets into Postgres memory, significantly reducing network traffic.
- [`pgaa.enable_groupby_pushdown`](https://www.enterprisedb.com/docs/pgaa/latest/reference/configuration_parameters/#pgaaenable_groupby_pushdown): Authorizes the offloading of aggregations (`SUM`, `COUNT`, `AVG`) and `GROUP BY` clauses. Aggregating 1 billion rows into 10 groups at the source reduces data transfer by several orders of magnitude, saving both bandwidth and Postgres CPU.
- [`pgaa.enable_orderby_pushdown`](https://www.enterprisedb.com/docs/pgaa/latest/reference/configuration_parameters/#pgaaenable_orderby_pushdown): Authorizes the offloading of `ORDER BY` and any constant `LIMIT`/`OFFSET` as a bounded top-N operation, so sorting and truncation happen at the source instead of after streaming full results back to Postgres.
- [`pgaa.enable_distinct_pushdown`](https://www.enterprisedb.com/docs/pgaa/latest/reference/configuration_parameters/#pgaaenable_distinct_pushdown): Authorizes the offloading of plain `SELECT DISTINCT` to the remote executor.
- [`pgaa.enable_window_pushdown`](https://www.enterprisedb.com/docs/pgaa/latest/reference/configuration_parameters/#pgaaenable_window_pushdown): Authorizes the offloading of window functions to the remote executor.
- [`pgaa.enable_setop_pushdown`](https://www.enterprisedb.com/docs/pgaa/latest/reference/configuration_parameters/#pgaaenable_setop_pushdown): Authorizes the offloading of `UNION ALL` to the remote executor.
- [`pgaa.enable_partition_pushdown`](https://www.enterprisedb.com/docs/pgaa/latest/reference/configuration_parameters/#pgaaenable_partition_pushdown): Authorizes the offloading of scans and aggregates over the PGAA partitions of a partitioned table, including sub-partitioned tables. If the table also has heap partitions, Postgres combines the offloaded partial aggregate with the results from the heap partitions. For these mixed tables, only `count`, `min`, `max`, `sum`, and `avg` over integer or numeric values push down.

Whole-row references, such as `to_json(r.*)`, are pushed down to the remote executor automatically and don't have a dedicated toggle.

### Expressions that push down

PGAA pushes down the following expressions along with the operations that contain them. They don't have dedicated toggles.

- `CAST` and `::` casts, `CASE`, `COALESCE`, and string concatenation (`||`).
- Date arithmetic with integers, such as `date_column + 7`, where the integer is a number of days.
- The scalar functions `substr`/`substring`, `extract`/`date_part`, `upper`, `lower`, `length`, the `trim` family, `abs`, `floor`, `ceil`, `round`, `replace`, `lpad`, `rpad`, and `strpos`.
- `DISTINCT` aggregates: `count`, `sum`, and `avg`.
- `HAVING` clauses.
- Partially supported aggregates. When an expression contains an aggregate that the remote executor can't evaluate as a whole, such as `round(avg(x), 2)` or `sum(a) / nullif(sum(b), 0)`, PGAA offloads the aggregate parts and Postgres computes the rest.

PGAA doesn't push down casts from `numeric` or floating-point types to integer types. Postgres rounds the value in these casts, while the remote executor truncates it.

> **Note**
>
> `pgaa.enable_distinct_pushdown` doesn't apply on WarehousePG, where the MPP planner deduplicates `DISTINCT` with a Motion and HashAggregate above the scan before PGAA's pushdown stage runs.

## Using vectorized execution (technical preview)

By default, PGAA accelerates queries over analytical tables. With vectorized execution, PGAA can also run part of a query over regular Postgres tables in its built-in vectorized engine, which is based on DataFusion, without replicating the data to Iceberg or Delta Lake. Postgres still handles table scans and other parts of the plan, and PGAA works with the Postgres planner to decide which joins, aggregates, sorts, and window functions to execute in the vectorized engine. The vectorized engine runs in the Postgres process on a single thread.

> **Note**
>
> Vectorized execution is a technical preview feature. EDB can remove the feature or change how it works without keeping backward compatibility, with the aim of making it stable in a later version. WarehousePG isn't supported.

To enable vectorized execution for your session:

```sql
SET pgaa.enable_vectorized_execution = on;
```

The following parameters control how frequently vectorized nodes appear in query plans:

- [`pgaa.vectorized_conversion_cost`](https://www.enterprisedb.com/docs/pgaa/latest/reference/configuration_parameters/#pgaavectorized_conversion_cost): The planner cost per row of converting data between Postgres and Arrow.
- [`pgaa.vectorized_compute_cost_factor`](https://www.enterprisedb.com/docs/pgaa/latest/reference/configuration_parameters/#pgaavectorized_compute_cost_factor): How much cheaper the planner prices vectorized aggregates, sorts, and window functions than the equivalent Postgres nodes.
- [`pgaa.vectorized_join_cost_factor`](https://www.enterprisedb.com/docs/pgaa/latest/reference/configuration_parameters/#pgaavectorized_join_cost_factor): How much cheaper the planner prices vectorized joins than the equivalent Postgres joins.
- [`pgaa.vectorized_batch_size`](https://www.enterprisedb.com/docs/pgaa/latest/reference/configuration_parameters/#pgaavectorized_batch_size): The number of rows converted per Arrow record batch.

To check whether a query uses vectorized execution, run `EXPLAIN`. Vectorized nodes appear as `Custom Scan (PGAA Vectorized)` and show the vectorized plan and query. `EXPLAIN ANALYZE` also shows the runtime metrics of the vectorized plan, such as row counts and elapsed compute time.

## Managing Seafowl memory

After a query finishes, Seafowl can keep memory that it no longer uses instead of returning it to the operating system, so the memory the Seafowl process occupies can stay high while it's idle. To return this memory, enable the memory reaper by setting [`pgaa.autostart_seafowl_memory_reaper_check_interval_s`](https://www.enterprisedb.com/docs/pgaa/latest/reference/configuration_parameters/#pgaaautostart_seafowl_memory_reaper_check_interval_s) to the number of seconds between checks. The reaper is disabled by default.

The reaper acts only when resident memory exceeds the pool's reservation by more than [`pgaa.autostart_seafowl_memory_reaper_slack_threshold_mb`](https://www.enterprisedb.com/docs/pgaa/latest/reference/configuration_parameters/#pgaaautostart_seafowl_memory_reaper_slack_threshold_mb) (512 MB by default). To limit how much memory Seafowl can use, set [`pgaa.autostart_seafowl_max_memory_mb`](https://www.enterprisedb.com/docs/pgaa/latest/reference/configuration_parameters/#pgaaautostart_seafowl_max_memory_mb).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
