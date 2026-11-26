---
title: DBA_SOURCE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/52_dba_source/
lastModified: 2025-11-25T20:57:39+05:30
---

# DBA\_SOURCE

<div id="dba_source" class="registered_link"></div>

The `DBA_SOURCE` view provides the source code listing of all objects in the database.

| Name          | Type      | Description                                                                                              |
| ------------- | --------- | -------------------------------------------------------------------------------------------------------- |
| `owner`       | `TEXT`    | User name of the program owner.                                                                          |
| `schema_name` | `TEXT`    | Name of the schema in which the program belongs.                                                         |
| `name`        | `TEXT`    | Name of the program.                                                                                     |
| `type`        | `TEXT`    | Type of program. Possible values are: `FUNCTION`, `PACKAGE`, `PACKAGE BODY`, `PROCEDURE`, and `TRIGGER`. |
| `line`        | `INTEGER` | Source code line number relative to a given program.                                                     |
| `text`        | `TEXT`    | Line of source code text.                                                                                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
