---
title: Query tuning
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/04_query_tuning/
lastModified: 2025-11-25T20:39:04+05:30
---

# Query tuning

<div id="query_tuning" class="registered_link"></div>

These configuration parameters are used for [optimizer hints](https://www.enterprisedb.com/docs/epas/latest/application_programming/optimizing_code/05_optimizer_hints/).

## enable\_hints

**Parameter type:** Boolean

**Default value:** `true`

**Range:** `{true | false}`

**Minimum scope of effect:** Per session

**When value changes take effect:** Immediate

**Required authorization to activate:** Session user

Enables optimizer hints embedded in SQL commands. Optimizer hints are ignored when this parameter is off.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
