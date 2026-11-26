---
title: USER_SOURCE
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/oracle_compatible_views/80_user_source/
lastModified: 2023-02-14T16:10:29+05:30
---

# USER\_SOURCE

<div id="user_source" class="registered_link"></div>

The `USER_SOURCE` view provides information about all programs owned by the current user.

| Name          | Type      | Description                                                                                              |
| ------------- | --------- | -------------------------------------------------------------------------------------------------------- |
| `schema_name` | `TEXT`    | Name of the schema in which the program belongs.                                                         |
| `name`        | `TEXT`    | Name of the program.                                                                                     |
| `type`        | `TEXT`    | Type of program. Possible values are: `FUNCTION`, `PACKAGE`, `PACKAGE BODY`, `PROCEDURE`, and `TRIGGER`. |
| `line`        | `INTEGER` | Source code line number relative to a given program.                                                     |
| `text`        | `TEXT`    | Line of source code text.                                                                                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
