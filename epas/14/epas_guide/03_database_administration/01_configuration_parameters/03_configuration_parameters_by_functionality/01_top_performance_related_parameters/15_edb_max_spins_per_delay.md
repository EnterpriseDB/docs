---
title: edb_max_spins_per_delay
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/15_edb_max_spins_per_delay/
lastModified: 2023-02-14T16:10:29+05:30
---

# edb\_max\_spins\_per\_delay

<div id="edb_max_spins_per_delay" class="registered_link"></div>

**Parameter type:** Integer

**Default value:** 1000

**Range:** 10 to 1000

**Minimum scope of effect:** Per cluster

**When value changes take effect:** Restart

**Required authorization to activate:** EPAS service account

Specifies the maximum number of times that a session spins while waiting for a spin lock. If a lock isn't acquired, the session sleeps.

This parameter can be useful for systems that use non-uniform memory access (NUMA) architecture.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
