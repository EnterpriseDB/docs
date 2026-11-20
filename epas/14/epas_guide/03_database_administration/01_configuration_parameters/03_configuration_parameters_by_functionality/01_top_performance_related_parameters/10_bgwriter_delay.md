---
title: bgwriter_delay
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/10_bgwriter_delay/
lastModified: 2023-02-14T16:10:29+05:30
---

# bgwriter\_delay

<div id="bgwriter_delay" class="registered_link"></div>

**Parameter type:** Integer

**Default value:** 200ms

**Range:** 10ms to 10000ms

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EPAS service account

Specifies the delay between activity rounds for the background writer. In each round, the writer issues writes for some number of dirty buffers. (You can control the number of dirty buffers using the `bgwriter_lru_maxpages` and `bgwriter_lru_multiplier` parameters.) It then sleeps for `bgwriter_delay` milliseconds, and repeats.

On many systems, the effective resolution of sleep delays is 10ms. Setting `bgwriter_delay` to a value that isn't a multiple of 10 might have the same results as setting it to the next higher multiple of 10.

Typically, when tuning `bgwriter_delay`, you reduce it from its default value. This parameter is rarely increased. Saving on power consumption on a system with very low use is one case when you might increase the value.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
