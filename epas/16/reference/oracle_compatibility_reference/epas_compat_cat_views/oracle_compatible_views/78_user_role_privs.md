---
title: USER_ROLE_PRIVS
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/78_user_role_privs/
lastModified: 2024-11-22T12:16:04+01:00
---

# USER\_ROLE\_PRIVS

<div id="user_role_privs" class="registered_link"></div>

The `USER_ROLE_PRIVS` view provides information about the privileges that were granted to the current user. A row is created for each role to which a user has been granted.

| Name           | Type                   | Description                                                          |
| -------------- | ---------------------- | -------------------------------------------------------------------- |
| `username`     | `TEXT`                 | Name of the user to which the role was granted.                      |
| `granted_role` | `TEXT`                 | Name of the role granted to the grantee.                             |
| `admin_option` | `TEXT`                 | `YES` if the role was granted with the admin option, `NO` otherwise. |
| `default_role` | `TEXT`                 | `YES` if the role is enabled when the grantee creates a session.     |
| `os_granted`   | `CHARACTER VARYING(3)` | Included only for compatibility. Always `NO`.                        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
