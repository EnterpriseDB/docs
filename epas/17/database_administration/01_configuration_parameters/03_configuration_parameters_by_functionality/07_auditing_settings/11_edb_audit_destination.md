---
title: edb_audit_destination
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/07_auditing_settings/11_edb_audit_destination/
lastModified: 2025-11-25T20:57:39+05:30
---

# edb\_audit\_destination

<div id="edb_audit_destination" class="registered_link"></div>

**Parameter type:** Enum

**Default value:** `file`

**Range:** `{file | syslog}`

**Minimum scope of effect:** Cluster

**When value changes take effect:** Reload

**Required authorization to activate:** EDB Postgres Advanced Server service account

Specifies whether to record the audit log information in the directory as given by the `edb_audit_directory` parameter or to the directory and file managed by the `syslog` process. Set to `file` to use the directory specified by `edb_audit_directory`.

Set to `syslog` to use the syslog process and its location as configured in the `/etc/syslog.conf` file. The `syslog` setting is valid only for EDB Postgres Advanced Server running on a Linux host. It isn't supported on Windows systems.

> **Note**
>
> In recent Linux versions, `syslog` was replaced with `rsyslog`, and the configuration file is in `/etc/rsyslog.conf`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
