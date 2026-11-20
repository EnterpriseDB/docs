---
title: ALL_SOURCE
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/19_all_source/
lastModified: 2024-11-22T12:16:04+01:00
---

# ALL\_SOURCE

<div id="all_source" class="registered_link"></div>

The `ALL_SOURCE` view provides a source code listing of the following program types: functions, procedures, triggers, package specifications, and package bodies.

| Name          | Type      | Description                                                                                             |
| ------------- | --------- | ------------------------------------------------------------------------------------------------------- |
| `owner`       | `TEXT`    | User name of the program owner.                                                                         |
| `schema_name` | `TEXT`    | Name of the schema in which the program belongs.                                                        |
| `name`        | `TEXT`    | Name of the program.                                                                                    |
| `type`        | `TEXT`    | Type of program. Possible values are: `FUNCTION`, `PACKAGE`, `PACKAGE BODY`, `PROCEDURE`, and `TRIGGER` |
| `line`        | `INTEGER` | Source code line number relative to a given program.                                                    |
| `text`        | `TEXT`    | Line of source code text.                                                                               |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
