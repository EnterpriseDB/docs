---
title: Configuration parameters
description: Reference for the configuration parameters provided by the PGAA extension.
product: EDB Postgres AI Analytics Accelerator
version: "1.12"
url: https://www.enterprisedb.com/docs/pgaa/latest/reference/configuration_parameters/
lastModified: 2026-11-18T10:56:45Z
---

# Configuration parameters

This reference guide describes the configuration parameters provided by the Postgres Analytics Accelerator (PGAA) extension, allowing you to tune the execution engine, manage remote connectivity, and optimize query performance across your data lake.

## Executor engine

### pgaa.executor\_engine

Determines which compute backend is responsible for executing analytical operations.

Supported values are `seafowl`, and `spark_connect`.

Default is `seafowl`.

### pgaa.spark\_connect\_url

Defines the connection endpoint for the Spark Connect service. Specifies the URL of the remote Spark Connect service. This setting is mandatory when `pgaa.executor_engine` is set to `spark_connect`.

The value must follow the specific Spark Connect URI format: `sc://<host>:<port>`.

Default is `NULL`.

### pgaa.spark\_connect\_extra\_config

When using `pgaa.executor_engine= 'spark_connect'`, provides fine-grained tuning parameters and runtime settings directly to the Spark session as a JSON object. See [Spark Connect configuration](https://spark.apache.org/docs/latest/configuration.html) for a list of options.

**Example**

```sql
SET pgaa.spark_connect_extra_config = '{
    "spark.sql.execution.arrow.maxRecordsPerBatch": "65536"
}';
```

Default is `NULL`.

## Query behavior

### pgaa.enable\_direct\_scan

Controls the query execution strategy for analytical tables. It determines whether PGAA attempts to offload the entire query to the optimized Seafowl engine or processes it using standard Postgres compatibility layers.

Default is `on`, which means PGAA will attempt a DirectScan first before failing over to CompatScan.

### pgaa.direct\_scan\_fail\_behavior

Defines the system's reaction when a Direct Scan is attempted but can't be completed due to unsupported SQL features or syntax.

Supported values are:

- `ignore`: The system silently falls back to CompatScan.
- `warn` (default): The query executes using the compatibility fallback, but Postgres issues a warning notice indicating that DirectScan failed.
- `error`: The query execution is aborted entirely if it can't use DirectScan.

Behavior if DirectScan was requested but failed, one of `ignore`, `warn`, `error`. Default is `warn`.

### pgaa.enable\_join\_pushdown

In CompatScan, controls the optimization strategy for join operations between analytical tables. It determines whether joins are processed locally within Postgres or offloaded to the remote execution engine (Seafowl or Spark).

Default is `on`.

### pgaa.enable\_groupby\_pushdown

In CompatScan, attempt to offload aggregation operations (like `SUM`, `COUNT`, `AVG`) and  (`GROUP BY`) to the remote executor engine (Seafowl or Spark).

Default is `on`.

### pgaa.enable\_orderby\_pushdown

In CompatScan, attempt to offload `ORDER BY` and any constant `LIMIT`/`OFFSET` as a bounded top-N operation to the remote executor engine (Seafowl or Spark).

Default is `on`.

### pgaa.enable\_distinct\_pushdown

In CompatScan, attempt to offload `SELECT DISTINCT` to the remote executor engine (Seafowl or Spark).

Default is `on`.

> **Note**
>
> `pgaa.enable_distinct_pushdown` doesn't apply on WarehousePG, where the MPP planner deduplicates `DISTINCT` with a Motion and HashAggregate above the scan before PGAA's pushdown stage runs.

### pgaa.enable\_window\_pushdown

In CompatScan, attempt to offload window functions to the remote executor engine (Seafowl or Spark).

Default is `on`.

### pgaa.enable\_setop\_pushdown

In CompatScan, attempt to offload `UNION ALL` to the remote executor engine (Seafowl or Spark).

Default is `on`.

### pgaa.enable\_partition\_pushdown

In CompatScan, attempt to offload queries over partitioned tables that have PGAA partitions, including sub-partitioned tables, to the remote executor engine (Seafowl or Spark). PGAA fuses the PGAA partitions of a partitioned table into one remote query. For tables that mix PGAA and heap partitions, PGAA splits aggregates into a remote partial aggregate over the PGAA partitions and a local partial aggregate over the heap partitions, and Postgres combines the results.

Default is `on`.

### pgaa.enable\_vectorized\_execution

[Technical preview](https://www.enterprisedb.com/docs/pgaa/latest/optimize_performance/#using-vectorized-execution-technical-preview). Enables PGAA to propose plans that run eligible joins, aggregates, sorts, and window functions over regular Postgres tables in PGAA's built-in vectorized engine, which is based on DataFusion, without requiring replication to Iceberg or Delta Lake. Postgres handles table scans and other parts of the plan. Vectorized execution works together with the Postgres planner. The [`pgaa.vectorized_conversion_cost`](#pgaavectorized_conversion_cost), [`pgaa.vectorized_compute_cost_factor`](#pgaavectorized_compute_cost_factor), and [`pgaa.vectorized_join_cost_factor`](#pgaavectorized_join_cost_factor) parameters determine how frequently vectorized nodes appear in plans.

The cost model and configuration for this feature might change in future versions. WarehousePG isn't supported.

Default is `off`.

### pgaa.vectorized\_batch\_size

[Technical preview](https://www.enterprisedb.com/docs/pgaa/latest/optimize_performance/#using-vectorized-execution-technical-preview). Sets the number of Postgres rows that PGAA converts per Arrow record batch before feeding them to the vectorized engine. Used when [`pgaa.enable_vectorized_execution`](#pgaaenable_vectorized_execution) is on.

Default is 8192.

### pgaa.vectorized\_conversion\_cost

[Technical preview](https://www.enterprisedb.com/docs/pgaa/latest/optimize_performance/#using-vectorized-execution-technical-preview). Sets the planner cost of converting one row between Postgres and Arrow. The planner charges this cost for each row that enters or leaves the vectorized engine. Accepts values of `0` or greater. Used when [`pgaa.enable_vectorized_execution`](#pgaaenable_vectorized_execution) is on.

Default is 0.0025.

### pgaa.vectorized\_compute\_cost\_factor

[Technical preview](https://www.enterprisedb.com/docs/pgaa/latest/optimize_performance/#using-vectorized-execution-technical-preview). Sets the planner cost of a vectorized aggregate, sort, window function, or distinct operation relative to the Postgres estimate for the same operator. Lower values make the planner favor vectorized nodes. Accepts values of `0` or greater. Used when [`pgaa.enable_vectorized_execution`](#pgaaenable_vectorized_execution) is on.

Default is 0.1.

### pgaa.vectorized\_join\_cost\_factor

[Technical preview](https://www.enterprisedb.com/docs/pgaa/latest/optimize_performance/#using-vectorized-execution-technical-preview). Sets the planner cost of a vectorized join relative to the Postgres estimate for the same join. Lower values make the planner favor vectorized joins. At the default value of 1, the planner prefers a vectorized join only when its input is already in Arrow format or when the join feeds a vectorized aggregate. Accepts values of `0` or greater. Used when [`pgaa.enable_vectorized_execution`](#pgaaenable_vectorized_execution) is on.

Default is 1.0.

### pgaa.ctas\_intermediate\_flush\_size

Controls the batching behavior during large `INSERT` or `CREATE TABLE AS (CTAS)` operations into PGAA-managed tables. PGAA collects rows into in-memory batches and flushes a batch to storage after this many rows. Smaller values reduce peak memory use but can increase I/O overhead. Larger values can improve bulk insert performance but use more memory. Changes to this parameter require a restart.

Default is 8192.

### pgaa.max\_in\_memory\_mb

Sets the maximum amount of memory, in megabytes, that the writer can utilize to buffer data before a mandatory flush to storage is triggered.

Default is 3072 (MB).

### pgaa.scan\_aggregation\_cost\_factor

A discount factor that the Postgres query planner applies to the cost of aggregations that PGAA pushes down to the remote backend (Spark or Seafowl), relative to Postgres's `cpu_tuple_cost`.

Default is 0.005.

### pgaa.scan\_per\_tuple\_cost

The cost the Postgres query planner assigns to processing a single row (tuple) in a scan on the remote backend (Spark or Seafowl). Mainly intended for debugging.

Default is 0.02.

### pgaa.scan\_sort\_cost\_factor

A multiplier used by the Postgres query planner to weight the cost of a pushed-down sort made by the remote backend (Spark or Seafowl) relative to Postgres's own tuplesort estimate.

Default is 0.5.

### pgaa.scan\_startup\_cost

The fixed startup cost the Postgres query planner assigns to starting a scan on the remote backend (Spark or Seafowl). Mainly intended for debugging.

Default is 25.

### pgaa.use\_seafowl\_cost\_estimates

Deprecated. Previously determined whether the Postgres query planner requested real-time cost estimates directly from the Seafowl engine instead of relying on the statistics collected internally by Postgres. PGAA now injects Iceberg and Delta Lake statistics at plan time, and other planner improvements mean this parameter no longer results in better plans. PGAA keeps the parameter for backward compatibility, but it's always off. Remove it from your configuration.

### pgaa.enable\_metadata\_stats

For tables lacking real `ANALYZE` statistics, synthesizes planner statistics from Iceberg, Delta Lake, or Parquet metadata, including row-count estimates, null fractions, average column widths, distinct-value counts, and min/max histograms. The query planner uses these synthesized statistics for CompatScan cardinality estimates and query plans.

Default is `on`.

## Seafowl

> **Note**
>
> The `pgaa.autostart_seafowl` parameters aren't available on PGAA for WarehousePG. On WarehousePG, Seafowl is managed as a `systemd` service on each host. See the [WarehousePG installation](https://www.enterprisedb.com/docs/pgaa/latest/whpg/installing/#enabling-the-extension) section for details.

When you change a `pgaa.autostart_seafowl` parameter and reload the configuration, for example with `pg_reload_conf()`, PGAA restarts the Seafowl process so the change takes effect. Queries that are running when Seafowl restarts might fail.

### pgaa.autostart\_seafowl

Controls automatic start of the Seafowl process managed by the background worker.

Default is `off`.

### pgaa.autostart\_seafowl\_max\_memory\_mb

Sets the upper limit in megabytes on the amount of RAM the embedded Seafowl engine is permitted to consume, ensuring that the analytical engine doesn't starve the main Postgres process of resources.

Default is 2147483647.

### pgaa.autostart\_seafowl\_memory\_pool\_type

Sets the DataFusion memory pool type used by the embedded Seafowl engine. Accepted values are `greedy` and `fair_spill`. `greedy` allocates memory as fast as possible for best query performance. `fair_spill` distributes memory fairly across concurrent consumers and spills intermediate data to disk when memory is exhausted, which reduces out-of-memory failures under high concurrency at some performance cost.

Default is `greedy`.

### pgaa.autostart\_seafowl\_track\_memory\_consumers

Wraps the Seafowl memory pool with a tracking layer that includes the top memory consumers in out-of-memory error messages, making it easier to diagnose which query or operation exhausted memory.

Default is `off`.

### pgaa.autostart\_seafowl\_memory\_reaper\_check\_interval\_s

Sets how often, in seconds, the Seafowl process checks whether its resident memory has drifted above what its memory pool is tracking. When it has, the memory reaper returns idle heap memory to the operating system. Setting this to `0` disables the reaper.

Default is 0.

### pgaa.autostart\_seafowl\_memory\_reaper\_slack\_threshold\_mb

Sets how far, in megabytes, the resident memory of the Seafowl process must drift above its memory pool's reservation before the memory reaper tries to reclaim it. Used when [`pgaa.autostart_seafowl_memory_reaper_check_interval_s`](#pgaaautostart_seafowl_memory_reaper_check_interval_s) is greater than `0`.

Default is 512.

### pgaa.autostart\_seafowl\_enable\_metrics

Enables Prometheus metrics on the Seafowl process by opening a dedicated HTTP endpoint that serves real-time performance metrics to monitor the health, query throughput, and resource utilization of the analytical engine using standard observability stacks.

Default value is `on`.

### pgaa.autostart\_seafowl\_metrics\_host

Metrics endpoint bind host.

When `pgaa.autostart_seafowl_enable_metrics= on`, specifies the hostname or IP address where the Prometheus metrics service will be reachable.

Default is `127.0.0.1`, which points to the local loopback for security, ensuring metrics aren't exposed publicly by default.

### pgaa.autostart\_seafowl\_metrics\_port

Defines the specific network port used for the Prometheus metrics service when `pgaa.autostart_seafowl_enable_metrics= on`.

Supported values range from 1024 to 65535. Default is `9090`.

### pgaa.autostart\_seafowl\_enable\_object\_store\_cache

Determines whether to enable the Seafowl object store cache for external storage locations on S3, Azure, or GCP.

Default is `on`.

### pgaa.autostart\_seafowl\_enable\_metadata\_cache

Determines whether Seafowl caches Iceberg table metadata in its REST catalog client. Cached entries are revalidated with conditional (ETag) requests, reducing query planning latency.

Default is `on`.

### pgaa.autostart\_seafowl\_metadata\_cache\_capacity\_mb

Sets the maximum total size, in megabytes, of Iceberg table metadata retained in the Seafowl metadata cache.

Default is 256.

### pgaa.autostart\_seafowl\_metadata\_cache\_ttl\_s

Sets the time, in seconds, after which a cached Iceberg table metadata entry is refreshed. A value of 0 disables expiry and relies solely on ETag revalidation.

Default is 0.

### pgaa.autostart\_seafowl\_concurrent\_manifest\_ops

Sets the maximum number of concurrent Iceberg manifest object-store operations in the Seafowl process, bounding both in-flight requests and peak manifest-decode memory during scan planning and maintenance.

Default is 64.

### pgaa.autostart\_seafowl\_log\_level

Specifies the logging verbosity for the background Seafowl process.

Supported values include `error`, `warn`, `info`, `debug`, and `trace`.

Default is `info`.

### pgaa.autostart\_seafowl\_path

Specifies the path to the Seafowl executable. The path tells the PGAA supervisor which binary to launch when starting the background analytical engine. If you don't set this parameter, PGAA searches the `PATH` of the Postgres server for an executable named `seafowl`. Set it only if the Seafowl binary isn't on that `PATH`.

Default is `NULL`.

### pgaa.autostart\_seafowl\_port

Specifies the TCP port that the background Seafowl process listens on. The PGAA extension uses this port to communicate with the local execution engine.

Default is 47470.

### pgaa.autostart\_seafowl\_tmp\_dir

Specifies the directory where the background Seafowl process stores temporary files during query execution.

Default is an empty string.

### pgaa.enable\_maintenance\_worker

Controls whether the PGAA background supervisor launches and manages a dedicated maintenance worker process.

Default is `off`.

### pgaa.enable\_replication\_worker

Enables the background worker that natively replicates the tables registered in `pgaa.replicated_table` to Delta Lake or Iceberg tables. Changing this parameter requires a configuration reload (`SIGHUP`). Native replication also requires `wal_level = logical`. See [Replicating Postgres tables natively](https://www.enterprisedb.com/docs/pgaa/latest/replication/).

Default is `off`.

### pgaa.maintenance\_worker\_sleep\_interval

Defines the duration, in seconds, that the maintenance worker process waits before checking for new tasks when there is currently no pending work to perform.

Default is 30 seconds.

### pgaa.seafowl\_client\_retry\_base\_ms

Specifies the initial delay, in milliseconds, that the Postgres client waits before retrying a failed request to the Seafowl process. For every subsequent failure, the wait time doubles.

Default is 100.

### pgaa.seafowl\_url

Specifies the endpoint URL used by the PGAA extension to communicate with the Seafowl service. By default, PGAA manages the Seafowl process automatically on the same host as the database. Modification of this parameter is only required for custom configurations where you are running the Seafowl service on a separate machine or container.

Default is `http://localhost:47470`.

## Catalog synchronization

### pgaa.metastore\_sync\_poll\_rate\_s

Sets the interval, in seconds, for polling the state of the current attached catalog. Setting this to 0 completely disables the automatic background synchronization. Changes to this parameter require a restart.

Default is 60 seconds.

### pgaa.metastore\_sync\_stale\_duration\_s

Defines the threshold at which the local metadata for an attached catalog is considered stale. If the metadata in the local cache is older than this duration, the system prioritizes a refresh to ensure consistency with the data lake. Changes to this parameter require a restart.

Default is 60 seconds.

### pgaa.enable\_metastore\_sync\_worker

Determines whether PGAA spawns a dedicated background worker to continuously synchronize metadata from a remote provider, such as an Iceberg REST catalog.

Default is `off`.

## Caching

### pgaa.lakehouse\_table\_stats\_cache\_ttl\_s

Controls the duration (in seconds) that physical table sizes are cached to support the `pgaa.lakehouse_table_stats()` function. This prevents frequent requests to the object store for metadata. Setting this to 0 disables statistics caching and forces the function to retrieve data directly from the storage provider.

Default is 300 seconds.

### pgaa.metadata\_stats\_ttl\_s

Controls the duration, in seconds, that PGAA caches the planner statistics synthesized by [`pgaa.enable_metadata_stats`](#pgaaenable_metadata_stats) before refetching them from Iceberg, Delta Lake, or Parquet metadata. Setting this to `0` always refetches the statistics.

Default is 300 seconds.

### pgaa.autostart\_seafowl\_object\_store\_cache\_capacity\_mb

Specifies the maximum amount of local disk space, in megabytes, that the Seafowl process can use for caching data from storage locations.

Default is 1024.

### pgaa.autostart\_seafowl\_object\_store\_cache\_min\_fetch\_size\_kb

Defines the minimum size of an outbound request sent to the object store when `pgaa.autostart_seafowl_enable_object_store_cache` is enabled.

Default is 1024.

### pgaa.autostart\_seafowl\_object\_store\_cache\_ttl\_s

Specifies the Time To Live (TTL) for objects stored in the Seafowl object store cache. This parameter determines how long a cached data chunk remains valid before it is eligible for eviction.

Default is 3600.

## Postgres Distributed (PGD) integration

### pgaa.max\_replication\_lag\_s

Sets the maximum time, in seconds, that the PGAA writer can hold changes in memory before it must flush them to storage. Also see [`pgaa.max_in_memory_mb`](#pgaamax_in_memory_mb), which forces a flush based on size.

Default is 5.

## DataFusion-inherited configurations

Since PGAA uses Apache DataFusion as its underlying execution engine for the Seafowl query engine, PGAA provides several `pgaa.datafusion.*` configuration parameters that allow you to tune the query execution engine.

These settings control low-level behaviors like memory management, execution parallelism, optimizer rules, and query explain output. The exposed namespaces are `execution`, `explain`, and `optimizer`.

You can check the full list of DataFusion configuration parameters that PGAA incorporates by running:

```sql
SELECT name, setting, short_desc, context FROM pg_settings WHERE name LIKE '%pgaa.data%';
```

PGAA changes one DataFusion default: `pgaa.datafusion.explain.physical_plan_only` is `true` so that `EXPLAIN` shows only the physical plan.

Refer to the [DataFusion documentation](https://datafusion.apache.org/user-guide/configs.html) for a comprehensive list of keys, default values, and performance impacts. When referring to the DataFusion documentation, you can translate their documentation keys to the PGAA configuration parameters by prefixing them with `pgaa.`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
