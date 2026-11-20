---
title: edb_audit_rotation_seconds
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/07_auditing_settings/06_edb_audit_rotation_seconds/
lastModified: 2023-02-14T16:10:29+05:30
---

# edb\_audit\_rotation\_seconds

<div id="edb_audit_rotation_seconds" class="registered_link"></div>

**Parameter type:** Integer

**Default value:** 0s

**Range:** 0s to 2147483647s

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EPAS service account

Specifies the rotation time in seconds when a new log file is created. To disable this feature, leave this parameter set to 0.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
