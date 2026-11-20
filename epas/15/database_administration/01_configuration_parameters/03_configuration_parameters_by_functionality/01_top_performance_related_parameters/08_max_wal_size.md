---
title: max_wal_size
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/08_max_wal_size/
lastModified: 2023-11-09T17:35:38+05:30
---

# max\_wal\_size

<div id="max_wal_size" class="registered_link"></div>

**Parameter type:** Integer

**Default value:** 1 GB

**Range:** 2 to 2147483647

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

`max_wal_size` specifies the maximum size for the WAL to reach between automatic WAL checkpoints. This is a soft limit. WAL size can exceed `max_wal_size` under special circumstances, such as when under a heavy load, with a failing archive\_command, or with a high `wal_keep_segments` setting.

Increasing this parameter can increase the amount of time needed for crash recovery. You can set this parameter in the `postgresql.conf` file or on the server command line.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
