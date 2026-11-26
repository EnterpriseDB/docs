---
title: checkpoint_timeout
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/07_checkpoint_timeout/
lastModified: 2024-11-22T12:16:04+01:00
---

# checkpoint\_timeout

<div id="checkpoint_timeout" class="registered_link"></div>

**Parameter type:** Integer

**Default value:** 5min

**Range:** 30s to 3600s

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

Maximum time between automatic WAL checkpoints, in seconds. Increasing this parameter can increase the amount of time needed for crash recovery.

Increasing `checkpoint_timeout` to a larger value, such as 15 minutes, can reduce the I/O load on your system, especially when using large values for `shared_buffers`.

The downside of making these adjustments to the checkpoint parameters is that your system uses a modest amount of additional disk space and takes longer to recover in the event of a crash. However, for most users, this is worth it for a significant performance improvement.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
