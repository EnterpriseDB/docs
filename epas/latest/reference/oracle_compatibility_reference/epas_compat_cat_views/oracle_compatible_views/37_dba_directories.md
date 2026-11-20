---
title: DBA_DIRECTORIES
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/37_dba_directories/
lastModified: 2025-11-25T20:39:04+05:30
---

# DBA\_DIRECTORIES

<div id="dba_directories" class="registered_link"></div>

The `DBA_DIRECTORIES` view provides information about all directories created with the `CREATE DIRECTORY` command.

| Name             | Type                      | Description                           |
| ---------------- | ------------------------- | ------------------------------------- |
| `owner`          | `CHARACTER VARYING(30)`   | User name of the directory’s owner.   |
| `directory_name` | `CHARACTER VARYING(30)`   | Alias name assigned to the directory. |
| `directory_path` | `CHARACTER VARYING(4000)` | Path to the directory.                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
