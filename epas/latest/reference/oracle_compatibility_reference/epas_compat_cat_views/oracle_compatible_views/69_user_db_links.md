---
title: USER_DB_LINKS
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/69_user_db_links/
lastModified: 2025-11-25T20:39:04+05:30
---

# USER\_DB\_LINKS

<div id="user_db_links" class="registered_link"></div>

The `USER_DB_LINKS` view provides information about all database links that are owned by the current user.

| Name       | Type                | Description                                                |
| ---------- | ------------------- | ---------------------------------------------------------- |
| `db_link`  | `TEXT`              | Name of the database link.                                 |
| `type`     | `CHARACTER VARYING` | Type of remote server. Value is either `REDWOOD` or `EDB`. |
| `username` | `TEXT`              | User name of the user logging in.                          |
| `password` | `TEXT`              | Password used to authenticate on the remote server.        |
| `host`     | `TEXT`              | Name or IP address of the remote server.                   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
