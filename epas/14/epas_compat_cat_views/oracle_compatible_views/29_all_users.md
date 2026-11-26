---
title: ALL_USERS
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_cat_views/oracle_compatible_views/29_all_users/
lastModified: 2023-02-14T16:10:29+05:30
---

# ALL\_USERS

<div id="all_users" class="registered_link"></div>

The `ALL_USERS` view provides information on all user names.

| Name            | Type   | Description                                                                                                    |
| --------------- | ------ | -------------------------------------------------------------------------------------------------------------- |
| `username`      | `TEXT` | Name of the user.                                                                                              |
| `user_id`       | `OID`  | Numeric user id assigned to the user.                                                                          |
| `created`       | `DATE` | Timestamp for when an object was created.                                                                      |
| `last_ddl_time` | `DATE` | Timestamp for the last modification of an object resulting from a DDL statement, including grants and revokes. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
