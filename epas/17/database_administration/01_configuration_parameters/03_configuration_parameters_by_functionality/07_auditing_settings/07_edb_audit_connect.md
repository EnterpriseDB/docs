---
title: edb_audit_connect
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/07_auditing_settings/07_edb_audit_connect/
lastModified: 2025-11-25T20:57:39+05:30
---

# edb\_audit\_connect

<div id="edb_audit_connect" class="registered_link"></div>

**Parameter type:** Enum

**Default value:** `failed`

**Range:** `{none | failed | all}`

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

Enables auditing of database connection attempts by users. To disable auditing of all connection attempts, set `edb_audit_connect` to `none`. To audit all failed connection attempts, set the value to `failed`. To audit all connection attempts, set the value to `all`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
