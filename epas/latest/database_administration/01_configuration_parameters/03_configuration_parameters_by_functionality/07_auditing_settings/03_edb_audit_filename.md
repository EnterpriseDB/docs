---
title: edb_audit_filename
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/07_auditing_settings/03_edb_audit_filename/
lastModified: 2025-11-25T20:39:04+05:30
---

# edb\_audit\_filename

<div id="edb_audit_filename" class="registered_link"></div>

**Parameter type:** String

**Default value:** `audit-%Y%m%d_%H%M%S`

**Range:** n/a

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

Specifies the file name of the audit file where the auditing information is stored. The default file name is `audit-%Y%m%d_%H%M%S`. The escape sequences, such as `%Y` and `%m`, are replaced by the appropriate current values of the system date and time.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
