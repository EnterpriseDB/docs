---
title: DBA_ROLE_PRIVS
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_cat_views/oracle_compatible_views/49_dba_role_privs/
lastModified: 2025-11-25T20:57:39+05:30
---

# DBA\_ROLE\_PRIVS

<div id="dba_role_privs" class="registered_link"></div>

The `DBA_ROLE_PRIVS` view provides information on all roles that were granted to users. A row is created for each role to which a user was granted.

| Name           | Type   | Description                                                          |
| -------------- | ------ | -------------------------------------------------------------------- |
| `grantee`      | `TEXT` | User name to whom the role was granted.                              |
| `granted_role` | `TEXT` | Name of the role granted to the grantee.                             |
| `admin_option` | `TEXT` | `YES` if the role was granted with the admin option. `NO` otherwise. |
| `default_role` | `TEXT` | `YES` if the role is enabled when the grantee creates a session.     |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
