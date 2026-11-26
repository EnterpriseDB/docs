---
title: ALL_DIRECTORIES
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/oracle_compatible_views/08_all_directories/
lastModified: 2023-02-14T16:10:29+05:30
---

# ALL\_DIRECTORIES

<div id="all_directories" class="registered_link"></div>

The `ALL_DIRECTORIES` view provides information about all directories created with the `CREATE DIRECTORY` command.

| Name             | Type                      | Description                           |
| ---------------- | ------------------------- | ------------------------------------- |
| `owner`          | `CHARACTER VARYING(30)`   | User name of the directory owner.     |
| `directory_name` | `CHARACTER VARYING(30)`   | Alias name assigned to the directory. |
| `directory_path` | `CHARACTER VARYING(4000)` | Path to the directory.                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
