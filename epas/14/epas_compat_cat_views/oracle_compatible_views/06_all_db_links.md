---
title: ALL_DB_LINKS
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/oracle_compatible_views/06_all_db_links/
lastModified: 2023-02-14T16:10:29+05:30
---

# ALL\_DB\_LINKS

<div id="all_db_links" class="registered_link"></div>

The `ALL_DB_LINKS` view provides information about the database links accessible by the current user.

| Name       | Type                | Description                                         |
| ---------- | ------------------- | --------------------------------------------------- |
| `owner`    | `TEXT`              | User name of the database link’s owner.             |
| `db_link`  | `TEXT`              | Name of the database link.                          |
| `type`     | `CHARACTER VARYING` | Type of remote server. Value is `REDWOOD` or `EDB`. |
| `username` | `TEXT`              | User name of the user logging in.                   |
| `host`     | `TEXT`              | Name or IP address of the remote server.            |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
