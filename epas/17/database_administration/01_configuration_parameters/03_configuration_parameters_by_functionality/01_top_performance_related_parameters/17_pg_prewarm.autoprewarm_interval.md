---
title: pg_prewarm.autoprewarm_interval
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/17_pg_prewarm.autoprewarm_interval/
lastModified: 2025-11-25T20:57:39+05:30
---

# pg\_prewarm.autoprewarm\_interval

<div id="pg_prewarm_autoprewarm_interval" class="registered_link"></div>

**Parameter type:** Integer

**Default value:** 300s

**Range:** 0s to 2147483s

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

The minimum number of seconds after which the `autoprewarm` background worker dumps shared buffers to disk. If set to 0, shared buffers aren't dumped at regular intervals. They're dumped only when you shut down the server.

See the [pg\_prewarm.autoprewarm](https://www.enterprisedb.com/docs/epas/17/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/16_pg_prewarm.autoprewarm/#pg_prewarm_autoprewarm) for information on the `autoprewarm` background worker.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
