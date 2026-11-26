---
title: edb_audit
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/07_auditing_settings/01_edb_audit/
lastModified: 2023-02-14T16:10:29+05:30
---

# edb\_audit

<div id="edb_audit" class="registered_link"></div>

**Parameter type:** Enum

**Default value:** `none`

**Range:** `{none | csv | xml}`

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EPAS service account

Enables or disables database auditing. The values `xml` or `csv` enable database auditing. These values determine the file format in which to capture auditing information. `none` disables database auditing.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
