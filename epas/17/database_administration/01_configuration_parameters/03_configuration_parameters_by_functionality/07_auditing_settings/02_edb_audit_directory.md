---
title: edb_audit_directory
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/07_auditing_settings/02_edb_audit_directory/
lastModified: 2025-11-25T20:57:39+05:30
---

# edb\_audit\_directory

<div id="edb_audit_directory" class="registered_link"></div>

**Parameter type:** String

**Default value:** `edb_audit`

**Range:** n/a

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

Specifies the directory where the audit log files are created. Specify either an absolute path or a path relative to the EDB Postgres Advanced Server `data` directory.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
