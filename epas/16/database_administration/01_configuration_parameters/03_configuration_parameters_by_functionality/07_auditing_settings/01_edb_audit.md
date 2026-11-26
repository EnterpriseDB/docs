---
title: edb_audit
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/07_auditing_settings/01_edb_audit/
lastModified: 2024-11-22T12:16:04+01:00
---

# edb\_audit

<div id="edb_audit" class="registered_link"></div>

**Parameter type:** Enum

**Default value:** `none`

**Range:** `{none | csv | xml}`

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

Enables or disables database auditing. The values `xml` or `csv` enable database auditing. These values determine the file format in which to capture auditing information. `none` disables database auditing.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
