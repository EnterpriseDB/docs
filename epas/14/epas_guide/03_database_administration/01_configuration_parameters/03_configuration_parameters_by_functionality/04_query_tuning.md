---
title: Query tuning
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/04_query_tuning/
lastModified: 2023-02-14T16:10:29+05:30
---

# Query tuning

<div id="query_tuning" class="registered_link"></div>

These configuration parameters are used for optimizer hints.

## enable\_hints

**Parameter type:** Boolean

**Default value:** `true`

**Range:** `{true | false}`

**Minimum scope of effect:** Per session

**When value changes take effect:** Immediate

**Required authorization to activate:** Session user

Enables optimizer hints embedded in SQL commands. Optimizer hints are ignored when this parameter is off.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
