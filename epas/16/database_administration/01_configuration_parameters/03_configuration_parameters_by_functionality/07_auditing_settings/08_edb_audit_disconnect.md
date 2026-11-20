---
title: edb_audit_disconnect
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/07_auditing_settings/08_edb_audit_disconnect/
lastModified: 2024-11-22T12:16:04+01:00
---

# edb\_audit\_disconnect

<div id="edb_audit_disconnect" class="registered_link"></div>

**Parameter type:** Enum

**Default value:** `none`

**Range:** `{none | all}`

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

Enables auditing of database disconnections by connected users. To enable auditing of disconnections, set the value to `all`. To disable, set the value to `none`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
