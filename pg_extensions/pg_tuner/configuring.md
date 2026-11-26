---
title: Configuring EDB Postgres Tuner
product: EDB Postgres Tuner
url: https://www.enterprisedb.com/docs/pg_extensions/pg_tuner/configuring/
lastModified: 2025-12-18T09:30:51+01:00
---

# Configuring EDB Postgres Tuner

To run EDB Postgres Tuner, you need to add it to the `shared_preload_libraries` and create the extension in the database. EDB Postgres Tuner can then gather metrics to make tuning recommendations.

1. In the `postgresql.conf` file, add `edb_pg_tuner` to the `shared_preload_libraries` parameter:

   ```ini
   shared_preload_libraries = 'edb_pg_tuner'
   ```

   > **Note**
   >
   > If `shared_preload_libraries` has other extensions, then you can add `edb_pg_tuner` to the list. The order doesn't matter.

2. Restart Postgres.

3. Create the EDB Postgres Tuner extension in your database:

   ```sql
   CREATE EXTENSION edb_pg_tuner;
   ```

## Parameters

The following custom GUCs control the EDB Postgres Tuner extension behavior. If you modify these parameters, then reload Postgres to apply the changes.

- `edb_pg_tuner.autotune` — Applies tuning recommendations. The default is `false`.

- `edb_pg_tuner.naptime` — Sets the interval between each check in seconds. The default is 600 seconds (10 minutes).

- `edb_pg_tuner.max_wal_size_limit` — Sets the maximum value for the `max_wal_size` recommendation. The default is `0`, which sets no limit.

- `edb_pg_tuner.wal_path` — Specifies the path to the directory containing the Write-Ahead Log (WAL) files. The default value is NULL. The tuner uses the total size of the disk where the `pg_wal` directory resides to limit the suggested `max_wal_size` to 50% of the total `pg_wal` disk size.

The following custom GUCs control the EDB Postgres Tuner `work_mem` tuning behavior for Postgres 14 and later.

- `edb_pg_tuner.tune_work_mem` — Dynamically increases the work mem for queries with disk spill to improve performance. The default is `true`.

- `edb_pg_tuner.work_mem_pool` — Maximum additional work\_mem reserve that's allocated to queries with disk spill. The default is 2GB.

- `edb_pg_tuner.log_min_duration` — Execution time threshold in ms for statistics logging. The default is 0, which logs everything. The value -1 turns off logging.

- `edb_pg_tuner.buffer_size` — Maximum query count for tracking statistics. The default is 5000.

- `edb_pg_tuner.container_memory_limit_file_path` — Specifies the path to the file that contains the memory limit set by the container runtime, such as Docker or Kubernetes. This file is read by `edb_pg_tuner` to determine the maximum amount of memory available to the database process when running inside a container. Based on this limit, the tuner can generate optimized PostgreSQL configuration recommendations that are container aware. The file is at `/sys/fs/cgroup/memory/memory.limit_in_bytes` by default.

## Recommended GUCs

EDB Postgres Tuner can recommend the following GUCs. The `static` category provides fixed recommendation settings. The `dynamic` category uses specific algorithms to suggest a better setting according to your workload or hardware resources.

| GUC                              | Category | Recommendation                           | Version |
| -------------------------------- | -------- | ---------------------------------------- | ------- |
| autovacuum                       | static   | on                                       |         |
| checkpoint\_completion\_target   | static   | 0.9                                      |         |
| effective\_cache\_size           | dynamic  | based on resources                       |         |
| enable\_async\_append            | static   | on                                       |         |
| enable\_bitmapscan               | static   | on                                       |         |
| enable\_gathermerge              | static   | on                                       |         |
| enable\_group\_by\_reordering    | static   | on                                       |         |
| enable\_hashagg                  | static   | on                                       |         |
| enable\_hashjoin                 | static   | on                                       |         |
| enable\_incremental\_sort        | static   | on                                       | 13+     |
| enable\_indexonlyscan            | static   | on                                       |         |
| enable\_indexscan                | static   | on                                       |         |
| enable\_material                 | static   | on                                       |         |
| enable\_memoize                  | static   | on                                       | 14+     |
| enable\_mergejoin                | static   | on                                       |         |
| enable\_nestloop                 | static   | on                                       |         |
| enable\_parallel\_append         | static   | on                                       | 11+     |
| enable\_parallel\_hash           | static   | on                                       | 11+     |
| enable\_partition\_pruning       | static   | on                                       | 11+     |
| enable\_partitionwise\_aggregate | static   | on                                       |         |
| enable\_partitionwise\_join      | static   | on                                       |         |
| enable\_seqscan                  | static   | on                                       |         |
| enable\_sort                     | static   | on                                       |         |
| enable\_tidscan                  | static   | on                                       |         |
| fsync                            | static   | on                                       |         |
| full\_page\_writes               | static   | on                                       |         |
| log\_checkpoints                 | static   | on                                       |         |
| max\_wal\_size                   | dynamic  | based on workload and `pg_wal` disk size |         |
| maintenance\_work\_mem           | dynamic  | based on resources                       |         |
| parallel\_leader\_participation  | static   | on                                       |         |
| seq\_page\_cost                  | static   | 1.0                                      |         |
| shared\_buffers                  | dynamic  | based on resources                       |         |
| track\_activities                | static   | on                                       |         |
| track\_counts                    | static   | on                                       |         |
| zero\_damaged\_pages             | static   | on                                       |         |

> **Note**
>
> For EDB Postgres Advanced Server, if `edb_pg_tuner.autotune` is enabled, a service restart may be required:
>
> - Version 15 or later: Any GUC that requires a restart is set when the service starts, therefore you don't need to restart the service to apply the recommendations.
> - Version 14 and earlier: You need to restart the service.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
