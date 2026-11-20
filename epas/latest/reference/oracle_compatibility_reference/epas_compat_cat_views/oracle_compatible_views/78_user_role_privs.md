---
title: USER_ROLE_PRIVS
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/78_user_role_privs/
lastModified: 2025-11-25T20:39:04+05:30
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
