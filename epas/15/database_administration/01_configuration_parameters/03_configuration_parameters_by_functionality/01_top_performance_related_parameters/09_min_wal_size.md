---
title: min_wal_size
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/09_min_wal_size/
lastModified: 2023-11-09T17:35:38+05:30
---

# min\_wal\_size

<div id="min_wal_size" class="registered_link"></div>

**Parameter type:** Integer

**Default value:** 80 MB

**Range:** 2 to 2147483647

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

If WAL disk usage stays below the value specified by `min_wal_size`, old WAL files are recycled for future use at a checkpoint rather than removed. This feature ensures that enough WAL space is reserved to handle spikes in WAL usage, like when running large batch jobs. You can set this parameter in the `postgresql.conf` file or on the server command line.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
