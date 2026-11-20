---
title: memory_info
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/gpperfmon/db-memory-info/
lastModified: 2026-08-11T09:07:15Z
---

# memory\_info

<a id="commandcenterdatabasereference-memory_info"></a>

The `memory_info` view shows per-host memory information from the `system_history` and `segment_history` tables. This allows administrators to compare the total memory available on a segment host, total memory used on a segment host, and dynamic memory used by query processes.

| Column                        | Type                           | Description                                                                                                                                                                                                                                                                                                                              |
| ----------------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ctime`                       | timestamp(0) without time zone | Time this row was created in the `segment_history` table.                                                                                                                                                                                                                                                                                |
| `hostname`                    | varchar(64)                    | Segment or coordinator hostname associated with these system memory metrics.                                                                                                                                                                                                                                                             |
| `mem_total_mb`                | numeric                        | Total system memory in MB for this segment host.                                                                                                                                                                                                                                                                                         |
| `mem_used_mb`                 | numeric                        | Total system memory used in MB for this segment host.                                                                                                                                                                                                                                                                                    |
| `mem_actual_used_mb`          | numeric                        | Actual system memory used in MB for this segment host.                                                                                                                                                                                                                                                                                   |
| `mem_actual_free_mb`          | numeric                        | Actual system memory free in MB for this segment host.                                                                                                                                                                                                                                                                                   |
| `swap_total_mb`               | numeric                        | Total swap space in MB for this segment host.                                                                                                                                                                                                                                                                                            |
| `swap_used_mb`                | numeric                        | Total swap space used in MB for this segment host.                                                                                                                                                                                                                                                                                       |
| `dynamic_memory_used_mb`      | numeric                        | The amount of dynamic memory in MB allocated to query processes running on this segment.                                                                                                                                                                                                                                                 |
| `dynamic_memory_available_mb` | numeric                        | The amount of additional dynamic memory (in MB) available to the query processes running on this segment host. Note that this value is a sum of the available memory for all segments on a host. Even though this value reports available memory, it is possible that one or more segments on the host have exceeded their memory limit. |

**Parent topic:** [The gpperfmon Database](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/gpperfmon/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
