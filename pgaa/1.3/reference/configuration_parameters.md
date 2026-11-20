---
title: Configuration parameters
description: Reference for the configuration parameters provided by the PGAA extension.
product: EDB Postgres AI Analytics Accelerator
version: "1.3"
url: https://www.enterprisedb.com/docs/pgaa/1.3/reference/configuration_parameters/
lastModified: 2026-03-18T13:19:04Z
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

Defines the system's reaction when a Direct Scan is attempted but cannot be completed due to unsupported SQL features or syntax.

Supported values are:

- `ignore`: The system silently falls back to CompatScan.
- `warn` (default): The query executes using the compatibility fallback, but Postgres issues a warning notice indicating that DirectScan failed.
- `error`: The query execution is aborted entirely if it cannot use DirectScan.

Behavior if DirectScan was requested but failed, one of `ignore`, `warn`, `error`. Default is `warn`.

### pgaa.ctas\_intermediate\_flush\_size

Controls the batching behavior during large `INSERT` or `CREATE TABLE AS (CTAS)` operations into PGAA-managed tables.

Default is 8192.

### pgaa.flush\_task\_interval\_s

Specifies the frequency, in seconds, at which the PGAA background process checks for and executes pending flushes of analytical data to persistent storage.

Default is 30.

### pgaa.scan\_per\_tuple\_cost

A multiplier used by the Postgres query planner to weight the cost of scanning a single row (tuple) on the remote backend (Spark or Seafowl) compared to local Postgres execution.

Default is 0.02.

### pgaa.scan\_startup\_cost

A multiplier used by the Postgres query planner to weight the fixed "startup" cost of initiating a scan on the remote backend (Spark or Seafowl) compared to local Postgres execution.

Default is 25.

### pgaa.use\_seafowl\_cost\_estimates

Determines whether the Postgres query planner should request real-time cost estimates directly from the Seafowl engine instead of relying on the statistics collected internally by Postgres.

Default is `on`.

### pgaa.write\_lock\_timeout\_s

Specifies the maximum duration, in seconds, that a process will wait to acquire a write lock before timing out and aborting the operation.

Default is 3.

## Seafowl

### pgaa.autostart\_seafowl

Controls automatic start of the Seafowl process managed by the background worker.

Default is `on`.

### pgaa.autostart\_seafowl\_max\_memory\_mb

Sets the upper limit in megabytes on the amount of RAM the embedded Seafowl engine is permitted to consume, ensuring that the analytical engine does not starve the main Postgres process of resources.

Default is 2147483647.

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

### pgaa.autostart\_seafowl\_log\_level

Specifies the logging verbosity for the background Seafowl process.

Supported values include `error`, `warn`, `info`, `debug`, and `trace`.

Default is `info`.

### pgaa.autostart\_seafowl\_path

Specifies the absolute file path to the Seafowl executable. This tells the PGAA supervisor exactly which binary to launch when starting the background analytical engine. Modification of this parameter is only required for custom configurations where you are running the Seafowl service on a separate machine or container.

Default is an empty string.

### pgaa.autostart\_seafowl\_port

Specifies the TCP port that the background Seafowl process listens on. The PGAA extension uses this port to communicate with the local execution engine.

Default is 47470.

### pgaa.autostart\_seafowl\_tmp\_dir

Specifies the directory where the background Seafowl process stores temporary files during query execution.

Default is an empty string.

### pgaa.enable\_maintenance\_worker

Controls whether the PGAA background supervisor launches and manages a dedicated maintenance worker process.

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

Sets the interval, in seconds, for polling the state of the current attached catalog. Setting this to 0 completely disables the automatic background synchronization.

Default is 60 seconds.

### pgaa.metastore\_sync\_stale\_duration\_s

Defines the threshold at which the local metadata for an attached catalog is considered stale. If the metadata in the local cache is older than this duration, the system prioritizes a refresh to ensure consistency with the data lake.

Default is 60 seconds.

### pgaa.enable\_metastore\_sync\_worker

Determines whether PGAA spawns a dedicated background worker to continuously synchronize metadata from a remote provider, such as an Iceberg REST catalog.

Default is `off`.

## Caching

### pgaa.lakehouse\_table\_stats\_cache\_ttl\_s

Controls the duration (in seconds) that physical table sizes are cached to support the `pgaa.lakehouse_table_stats()` function. This prevents frequent requests to the object store for metadata. Setting this to 0 disables statistics caching and forces the function to retrieve data directly from the storage provider.

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

Maximum allowed lag (seconds) before a flush is forced.

Default is 5.

### pgaa.flush\_task\_interval\_s

Frequency (seconds) at which the system checks for flush requirements.

Default is 5.

## DataFusion-inherited configurations

Since PGAA uses Apache DataFusion as its underlying execution engine for the Seafowl query engine, PGAA provides several `pgaa.datafusion.*` configuration parameters that allow you to tune the query execution engine.

These settings control low-level behaviors like memory management, execution parallelism, and optimizer rules.

You can check the full list of DataFusion configuration parameters that PGAA incorporates by running:

```sql
SELECT name, setting, short_desc, context FROM pg_settings WHERE name LIKE '%pgaa.data%';
```

Refer to the [DataFusion documentation](https://datafusion.apache.org/user-guide/configs.html) for a comprehensive list of keys, default values, and performance impacts. When referring to the DataFusion documentation, you can translate their documentation keys to the PGAA configuration parameters by prefixing them with `pgaa.`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
