---
title: seq_page_cost
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/11_seq_page_cost/
lastModified: 2025-11-25T20:57:39+05:30
---

# seq\_page\_cost

<div id="seq_page_cost" class="registered_link"></div>

**Parameter type:** Floating point

**Default value:** 1

**Range:** 0 to 1.79769e+308

**Minimum scope of effect:** Per session

**When value changes take effect:** Immediate

**Required authorization to activate:** Session user

Sets the planner's estimate of the cost of a disk page fetch that's part of a series of sequential fetches. You can override this value for a particular tablespace by setting the tablespace parameter of the same name. See [`ALTER TABLESPACE`](https://www.postgresql.org/docs/current/sql-altertablespace.html) in the PostgreSQL core documentation.

The default value assumes very little caching, so it's often a good idea to reduce it. Even if your database is significantly larger than physical memory, you might want to try setting this parameter to something lower than the default value of 1 to see if you get better query plans that way. If your database fits entirely in memory, you can lower this value much more, for example, to 0.1.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
